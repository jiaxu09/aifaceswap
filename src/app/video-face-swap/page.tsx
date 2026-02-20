import type { Metadata } from "next";
import VideoFaceSwapClient from "./VideoFaceSwapClient";

export const metadata: Metadata = {
  title: "High-Quality AI Video Face Swap Online | Replace Face in Video",
  description:
    "Swap faces in any video with our AI video face swap tool. Works like the Reface app but online — no download needed. Start with a free trial to create deepfake face swap videos.",
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
    title: "AI Video Face Swap Online | Replace Face in Any Video",
    description:
      "The best video face swap tool. Replace faces in videos online with AI — no watermark, no download required. Start your free trial today.",
    url: "https://aifaceswap.studio/video-face-swap",
  },
};

export default function VideoFaceSwapPage() {
  return <VideoFaceSwapClient />;
}
