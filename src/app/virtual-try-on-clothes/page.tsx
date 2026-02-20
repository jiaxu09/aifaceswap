import type { Metadata } from "next";
import VirtualTryOnClient from "./VirtualTryOnClient";

export const metadata: Metadata = {
  title: "Virtual Try On Clothes with AI | AR Clothing Try On Online",
  description:
    "Try on clothes virtually with our AI-powered virtual try-on tool. Upload your photo and any garment to see how outfits look on you. Free virtual clothing try-on app — no download needed. AR clothing try on, virtual dress try on, and ai try on clothes all in one platform.",
  keywords: [
    "virtual try on clothes",
    "virtual clothing try on app",
    "ar clothing try on",
    "virtual dress try on",
    "ai try on clothes",
    "virtual try on clothes online",
    "try on clothes online",
    "try on clothes app",
    "virtual outfit try on",
    "clothing try on app",
    "augmented reality clothing fitting",
    "digital try on clothes",
  ],
  openGraph: {
    title: "Virtual Try On Clothes with AI | Free Online Fitting Room",
    description:
      "Try on any outfit virtually. Upload your photo and a garment image — our AI shows how clothes look on you. Free AR clothing try on tool.",
    url: "https://aifaceswap.studio/virtual-try-on-clothes",
  },
};

export default function VirtualTryOnPage() {
  return <VirtualTryOnClient />;
}
