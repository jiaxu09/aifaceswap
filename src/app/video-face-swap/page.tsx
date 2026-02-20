import type { Metadata } from "next";
import VideoFaceSwapClient from "./VideoFaceSwapClient";

export const metadata: Metadata = {
  title: "High-Quality AI Video Face Swap Online | Replace Face in Video Free",
  description:
    "Swap faces in any video with our free AI video face swap tool. Works like the Reface app but online — no download needed. Create deepfake face swap videos, replace faces in video online free, and produce professional face swap videos instantly.",
  keywords: [
    "video face swap",
    "reface app",
    "replace face in video online free",
    "face swap video app",
    "deepfake face swap",
    "faceswap ai",
    "face swap video free",
    "ai face swap video",
    "face swap live",
    "video face swap online",
    "free face swap video",
    "face app video",
    "ai video face swap",
  ],
  openGraph: {
    title: "AI Video Face Swap Online Free | Replace Face in Any Video",
    description:
      "The best free video face swap tool. Replace faces in videos online with AI — no watermark, no download required. Better than Reface app.",
    url: "https://aifaceswap.studio/video-face-swap",
  },
};

export default function VideoFaceSwapPage() {
  return <VideoFaceSwapClient />;
}
