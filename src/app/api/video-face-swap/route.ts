import { NextRequest, NextResponse } from "next/server";
import { Client } from "@gradio/client";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const inputImage = formData.get("input_image") as File;
    const inputVideo = formData.get("input_video") as File;
    const gender = (formData.get("gender") as string) || "all";

    if (!inputImage || !inputVideo) {
      return NextResponse.json(
        { error: "Both source image and target video are required." },
        { status: 400 }
      );
    }

    const imageBlob = new Blob([await inputImage.arrayBuffer()], {
      type: inputImage.type,
    });
    const videoBlob = new Blob([await inputVideo.arrayBuffer()], {
      type: inputVideo.type,
    });

    const client = await Client.connect("tonyassi/video-face-swap", { token: process.env.HF_TOKEN as `hf_${string}` });
    const result = await client.predict("/generate", {
      input_image: imageBlob,
      input_video: videoBlob,
      gender: gender,
    });
    
    console.log(result.data);

    const data = result.data as any[];
    // The result is typically { url: string } or a string URL
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
    console.error("Video face swap error:", error);
    return NextResponse.json(
      { error: error?.message || "Processing failed. Please try again." },
      { status: 500 }
    );
  }
}
