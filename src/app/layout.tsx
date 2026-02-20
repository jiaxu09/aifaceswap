import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AppProvider from "@/components/AppProvider";

export const metadata: Metadata = {
  title: {
    default: "AI Face Swap Online | Video Face Swap & Virtual Try On Clothes - aifaceswap.studio",
    template: "%s | aifaceswap.studio",
  },
  description:
    "The best AI face swap tool online. Swap faces in videos, try on clothes virtually, and generate stunning face swap photos with our free AI-powered platform. No watermark, instant results.",
  keywords: [
    "ai face swap",
    "video face swap",
    "virtual try on clothes",
    "face swap online",
    "deepfake face swap",
    "ai face changer",
    "face swap video free",
  ],
  metadataBase: new URL("https://aifaceswap.studio"),
  openGraph: {
    title: "AI Face Swap Online | Video Face Swap & Virtual Try On - aifaceswap.studio",
    description:
      "Swap faces in videos, try on clothes virtually, and create amazing AI face swap photos. Free, fast, and high quality.",
    url: "https://aifaceswap.studio",
    siteName: "aifaceswap.studio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Face Swap Online - Video, Photo & Virtual Try On",
    description:
      "The most advanced AI face swap platform. Swap faces in videos, photos, and try on clothes virtually.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        {/* JSON-LD Schema - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "AIFaceSwap Studio",
              url: "https://aifaceswap.studio",
              logo: "https://aifaceswap.studio/android-chrome-512x512.png",
              sameAs: [],
              description:
                "The best AI face swap tool online. Swap faces in videos, try on clothes virtually, and generate stunning face swap photos.",
            }),
          }}
        />
        {/* JSON-LD Schema - WebSite with SearchAction */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "AIFaceSwap Studio",
              url: "https://aifaceswap.studio",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://aifaceswap.studio/blog?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        <AppProvider>
          <Navbar />
          <main className="pt-16 min-h-screen">{children}</main>
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
