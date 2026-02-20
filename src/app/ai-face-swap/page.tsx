import type { Metadata } from "next";
import AIFaceSwapClient from "./AIFaceSwapClient";

export const metadata: Metadata = {
  title: "Best AI Face Swap Photo Generator | DeepSwap Alternative Online Free",
  description:
    "The best AI face swap photo tool online. Swap faces in any image for free — better than DeepSwap AI. Create realistic face swap photos with our advanced AI face changer. No watermark, instant results. Try deepswap free online alternative.",
  keywords: [
    "deepswap",
    "deepswap ai",
    "face swap ai",
    "ai face swap online",
    "swap face ai",
    "ai face changer",
    "ai face replacement",
    "best ai face swap",
    "ai face swap free",
    "free ai face swap",
    "face swap ai free",
    "deepswap free online",
    "ai photo face swap",
    "ai face swap photo",
    "aifaceswap",
  ],
  openGraph: {
    title: "Best AI Face Swap Photo Generator | Free DeepSwap Alternative",
    description:
      "Swap faces in any photo with AI for free. Better than DeepSwap — no watermark, instant results. The best AI face changer online.",
    url: "https://aifaceswap.studio/ai-face-swap",
  },
};

export default function AIFaceSwapPage() {
  return <AIFaceSwapClient />;
}
