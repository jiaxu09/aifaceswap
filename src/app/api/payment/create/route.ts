import { NextRequest, NextResponse } from "next/server";

// Credit pack definitions
const PACKS: Record<string, { amount: number; credits: number; title: string; description: string }> = {
  starter: {
    amount: 29.9,
    credits: 500,
    title: "Starter Pack — 500 Credits",
    description: "Perfect for occasional use, memes, and testing the waters.",
  },
  creator: {
    amount: 39.9,
    credits: 800,
    title: "Creator Pack — 800 Credits",
    description: "For social media content creators looking to go viral.",
  },
  studio: {
    amount: 69.9,
    credits: 1600,
    title: "Studio & Commerce — 1600 Credits",
    description: "Built for TikTok shop owners, brands, and heavy commercial use.",
  },
};

export async function POST(req: NextRequest) {
  try {
    const { packId, email, userId } = await req.json();

    const pack = PACKS[packId];
    if (!pack) {
      return NextResponse.json({ error: "Invalid pack selected" }, { status: 400 });
    }

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const businessId = process.env.MALUM_BUSINESS_ID;
    const secretKey = process.env.MALUM_SECRET_KEY;

    if (!businessId || !secretKey) {
      console.error("Malum credentials not configured");
      return NextResponse.json({ error: "Payment service not configured" }, { status: 500 });
    }

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://aifaceswap.space";

    const payload = {
      amount: pack.amount,
      currency: "USD",
      customer_email: email,
      success_url: `${baseUrl}/payment/success`,
      cancel_url: `${baseUrl}/pricing`,
      webhook_url: `${baseUrl}/api/payment/webhook`,
      product_title: pack.title,
      product_description: pack.description,
      metadata: JSON.stringify({ userId, packId, credits: pack.credits }),
    };

    const response = await fetch("https://malum.co/api/v2/payment/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        MALUM: `${businessId}:${secretKey}`,
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (data.status === "success") {
      return NextResponse.json({
        link: data.link,
        transactionId: data.transaction_id,
      });
    } else {
      console.error("Malum API error:", data.error);
      return NextResponse.json(
        { error: data.error || "Payment creation failed" },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Payment creation error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
