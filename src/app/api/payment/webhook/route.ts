import { NextRequest, NextResponse } from "next/server";
import { Client, Users } from "node-appwrite";

// Initialize Appwrite server SDK
function getAppwriteAdmin() {
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || "https://cloud.appwrite.io/v1")
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || "")
    .setKey(process.env.APPWRITE_API_KEY || "");

  return { users: new Users(client) };
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    console.log("Webhook received:", JSON.stringify(body, null, 2));

    // Malum sends the transaction status in the webhook
    const { status, transaction_id, metadata: metadataRaw } = body;

    if (status !== "success" && status !== "completed") {
      console.log(`Payment not successful (status: ${status}), skipping credit update`);
      return NextResponse.json({ received: true });
    }

    // Parse metadata to get userId and credits
    let metadata: { userId?: string; packId?: string; credits?: number };
    try {
      metadata = typeof metadataRaw === "string" ? JSON.parse(metadataRaw) : metadataRaw;
    } catch {
      console.error("Failed to parse metadata:", metadataRaw);
      return NextResponse.json({ error: "Invalid metadata" }, { status: 400 });
    }

    const { userId, credits } = metadata;

    if (!userId || !credits) {
      console.error("Missing userId or credits in metadata:", metadata);
      return NextResponse.json({ error: "Missing required metadata" }, { status: 400 });
    }

    // Update user credits in Appwrite
    const { users } = getAppwriteAdmin();

    // Get current user preferences
    const user = await users.get(userId);
    const currentCredits = (user.prefs as Record<string, unknown>)?.credits as number || 0;
    const newCredits = currentCredits + credits;

    // Update preferences with new credit balance
    await users.updatePrefs(userId, {
      ...user.prefs,
      credits: newCredits,
    });

    console.log(
      `Credits updated for user ${userId}: ${currentCredits} + ${credits} = ${newCredits} (transaction: ${transaction_id})`
    );

    return NextResponse.json({ received: true, credits: newCredits });
  } catch (error) {
    console.error("Webhook processing error:", error);
    return NextResponse.json({ error: "Webhook processing failed" }, { status: 500 });
  }
}
