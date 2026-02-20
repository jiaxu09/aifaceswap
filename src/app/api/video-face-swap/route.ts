import { NextRequest, NextResponse } from "next/server";
import { Client, handle_file } from "@gradio/client";

// Allow up to 5 minutes for video processing
export const maxDuration = 300;

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

    const client = await Client.connect("tonyassi/video-face-swap", {
      token: process.env.HF_TOKEN as `hf_${string}`,
    });
    const result = await client.predict("/generate", {
      input_image: handle_file(imageBlob),
      input_video: { video: handle_file(videoBlob) },
      gender: gender,
    });
  

    const data = result.data as any[];
    // Gradio Video component returns { video: { url: string }, subtitles: ... }
    const output = data[0];
    const resultUrl =
      typeof output === "string"
        ? output
        : output?.video?.url || output?.url || output?.video;

    if (!resultUrl) {
      return NextResponse.json(
        { error: "No result returned from the API." },
        { status: 500 }
      );
    }

    return NextResponse.json({ resultUrl });
  } catch (error: any) {
    console.error("Video face swap error:", error);

    const msg = error?.message || "";
    // Handle timeout / connection errors
    if (msg.includes("ETIMEDOUT") || msg.includes("terminated") || msg.includes("Connection errored out")) {
      return NextResponse.json(
        { error: "The AI model timed out while processing your video. This can happen with longer videos or when the server is busy. Please try again with a shorter video clip." },
        { status: 504 }
      );
    }

    return NextResponse.json(
      { error: msg || "Processing failed. Please try again." },
      { status: 500 }
    );
  }
}
