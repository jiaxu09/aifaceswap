import { NextRequest, NextResponse } from "next/server";
import { Client } from "@gradio/client";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const person = formData.get("person") as File;
    const clothing = formData.get("clothing") as File;

    if (!person || !clothing) {
      return NextResponse.json(
        { error: "Both person photo and clothing image are required." },
        { status: 400 }
      );
    }

    const personBlob = new Blob([await person.arrayBuffer()], {
      type: person.type,
    });
    const clothingBlob = new Blob([await clothing.arrayBuffer()], {
      type: clothing.type,
    });

    const client = await Client.connect("tonyassi/fashion-try-on", { token: process.env.HF_TOKEN as `hf_${string}` });
    const result = await client.predict("/generate", {
      person: personBlob,
      clothing: clothingBlob,
    });

    const data = result.data as any[];
    const output = data[0];
    const resultUrl = typeof output === "string" ? output : output?.url;

    if (!resultUrl) {
      return NextResponse.json(
        { error: "No result returned from the API." },
        { status: 500 }
      );
    }

    return NextResponse.json({ resultUrl });
  } catch (error: any) {
    console.error("Virtual try-on error:", error);

    const message = error?.message || "";
    // Handle ZeroGPU duration limit errors
    if (message.includes("GPU duration") || message.includes("ZeroGPU")) {
      return NextResponse.json(
        {
          error:
            "The AI model is currently under heavy load. Please wait a moment and try again. If the issue persists, try with a smaller image.",
        },
        { status: 503 }
      );
    }

    return NextResponse.json(
      { error: message || "Processing failed. Please try again." },
      { status: 500 }
    );
  }
}
