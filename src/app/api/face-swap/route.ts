import { NextRequest, NextResponse } from "next/server";
import { Client } from "@gradio/client";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const srcImg = formData.get("src_img") as File;
    const destImg = formData.get("dest_img") as File;

    if (!srcImg || !destImg) {
      return NextResponse.json(
        { error: "Both source face and target image are required." },
        { status: 400 }
      );
    }

    const srcBlob = new Blob([await srcImg.arrayBuffer()], {
      type: srcImg.type,
    });
    const destBlob = new Blob([await destImg.arrayBuffer()], {
      type: destImg.type,
    });

    const client = await Client.connect("tonyassi/face-swap", { token: process.env.HF_TOKEN as `hf_${string}` });
    const result = await client.predict("/swap_faces", {
      src_img: srcBlob,
      dest_img: destBlob,
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
    console.error("Face swap error:", error);
    return NextResponse.json(
      { error: error?.message || "Processing failed. Please try again." },
      { status: 500 }
    );
  }
}
