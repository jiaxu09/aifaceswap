"use client";

import { useState } from "react";
import { ImageIcon, Wand2, Download, RotateCcw, Sparkles } from "lucide-react";
import UploadZone from "@/components/UploadZone";
import FAQSection from "@/components/FAQSection";
import PolicyDisclaimer from "@/components/PolicyDisclaimer";

const faqs = [
  {
    question: "What is the best AI face swap tool online?",
    answer:
      "aifaceswap.studio is the best AI face swap tool available online. Unlike DeepSwap AI or other deepswap alternatives, our platform is completely free with no watermarks. Our AI face swap technology uses advanced face detection, alignment, and blending algorithms to produce photorealistic results — making it the best face swap AI tool available. It's a true deepswap free online alternative.",
  },
  {
    question: "How is this different from DeepSwap AI?",
    answer:
      "While DeepSwap AI (deepswap.ai) is a popular paid tool, our platform offers similar or better quality completely free. You get AI face swap online free without watermarks, no subscription needed. Unlike the deepswap app, our tool works directly in your browser. Many users searching for deepswap free online find that our AI face changer delivers superior results.",
  },
  {
    question: "Can I swap faces in photos for free?",
    answer:
      "Yes! Our free AI face swap tool lets you swap faces in any photo instantly. Simply upload your base image and the face image you want to use. The AI face replacement technology handles the rest — producing a seamless ai photo face swap result. It's completely free, no sign-up required, and we're considered the best free ai face swap app online.",
  },
  {
    question: "Is the AI face swap realistic?",
    answer:
      "Our face swap AI technology produces extremely realistic results. The AI analyzes facial features, skin tone, lighting, and expressions to create seamless blends. Whether you're doing a simple swap face AI operation or a complete ai face replacement, the results are photorealistic. Many users report our results are better than dedicated face swap ai apps like Reface AI or FaceMagic AI.",
  },
  {
    question: "Can I use AI face swap for gender swap?",
    answer:
      "Yes! Our AI gender swap feature lets you see how you'd look as a different gender. The ai gender swap online tool uses the same advanced face swap technology to transform facial features realistically. It's a popular feature alongside our standard swap face ai and ai face changer capabilities.",
  },
  {
    question: "What about AI face swap for videos?",
    answer:
      "In addition to our ai face swap photo tool, we also offer ai face swap video capabilities on our dedicated video page. You can do ai face swap video online free, create ai video face swap content, and more. Check out our Video Face Swap page for AI video face swap and free ai face swap video features.",
  },
  {
    question: "Is my data private when using the face swap AI?",
    answer:
      "Absolutely. Your privacy is our priority. All images processed through our face swap AI are automatically deleted after processing. We never store, share, or use your photos for any purpose. Whether you're using the ai face changer, deepswap alternative, or ai face swap picture tool, your data remains completely private.",
  },
];

export default function AIFaceSwapClient() {
  const [baseImage, setBaseImage] = useState<File | null>(null);
  const [faceImage, setFaceImage] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [resultReady, setResultReady] = useState(false);
  const [resultUrl, setResultUrl] = useState<string | null>(null);
  const [basePreviewUrl, setBasePreviewUrl] = useState<string | null>(null);
  const [showBefore, setShowBefore] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const canGenerate = baseImage && faceImage && !isProcessing;

  const handleGenerate = async () => {
    if (!canGenerate) return;
    setIsProcessing(true);
    setResultReady(false);
    setError(null);
    setResultUrl(null);

    // Create preview of base image for Before/After
    setBasePreviewUrl(URL.createObjectURL(baseImage));

    try {
      const formData = new FormData();
      formData.append("src_img", faceImage);
      formData.append("dest_img", baseImage);

      const res = await fetch("/api/face-swap", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Processing failed.");
      }

      setResultUrl(data.resultUrl);
      setResultReady(true);
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDownload = async () => {
    if (!resultUrl) return;
    try {
      const res = await fetch(resultUrl);
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "face_swap_result.png";
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch {
      window.open(resultUrl, "_blank");
    }
  };

  const handleReset = () => {
    setBaseImage(null);
    setFaceImage(null);
    setIsProcessing(false);
    setResultReady(false);
    setResultUrl(null);
    setBasePreviewUrl(null);
    setShowBefore(false);
    setError(null);
  };

  const loadExample = async () => {
    try {
      const [srcRes, destRes] = await Promise.all([
        fetch("/examples/face-source.jpg"),
        fetch("/examples/face-target.jpg"),
      ]);
      const srcBlob = await srcRes.blob();
      const destBlob = await destRes.blob();
      const srcFile = new File([srcBlob], "face-source.jpg", { type: "image/jpeg" });
      const destFile = new File([destBlob], "face-target.jpg", { type: "image/jpeg" });
      setFaceImage(srcFile);
      setBaseImage(destFile);
    } catch (err) {
      console.error("Failed to load example:", err);
    }
  };

  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="grid-bg absolute inset-0" />
        <div className="absolute top-10 left-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-rose-500/10 rounded-full blur-[100px]" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-xs font-medium text-pink-300 mb-6">
            <ImageIcon className="w-3.5 h-3.5" />
            <span>Advanced AI Face Swap Technology</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            <span className="text-white">Best </span>
            <span className="gradient-text">AI Face Swap</span>
            <span className="text-white"> Photo Generator</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
            The most powerful AI face swap tool online — a free DeepSwap alternative. Our 
            advanced AI face changer creates photorealistic face swap photos instantly. 
            No watermark, no sign-up. Try the best ai face swap online for free.
          </p>
        </div>
      </section>

      {/* Upload & Generate Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="glass-card rounded-3xl p-6 sm:p-10">
          {/* Upload Zones */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <UploadZone
              label="Upload Base Image"
              description="JPG, PNG — the photo to modify"
              accept="image/*"
              icon="image"
              file={baseImage}
              onFileChange={setBaseImage}
            />
            <UploadZone
              label="Upload Face Image"
              description="JPG, PNG — the face to swap in"
              accept="image/*"
              icon="image"
              file={faceImage}
              onFileChange={setFaceImage}
            />
          </div>

          {/* Example Button */}
          <div className="text-center mb-6">
            <button
              onClick={loadExample}
              className="btn btn-outline border-pink-500/30 text-pink-300 hover:bg-pink-500/20 hover:border-pink-500/50 hover:text-white rounded-xl gap-2 font-medium shadow-[0_0_15px_rgba(236,72,153,0.1)] transition-all"
            >
              <Sparkles className="w-4 h-4 text-pink-400" />
              Try with Example Images
            </button>
            <p className="text-xs text-white/40 mt-2">Don't have photos ready? Load our sample faces to see how it works</p>
          </div>

          {/* Generate Button */}
          <div className="text-center">
            <button
              onClick={handleGenerate}
              disabled={!canGenerate}
              className={`btn btn-lg rounded-xl px-10 gap-2 transition-all duration-300 ${
                canGenerate
                  ? "bg-gradient-to-r from-pink-600 to-rose-600 border-0 text-white hover:from-pink-500 hover:to-rose-500 btn-glow"
                  : "btn-disabled bg-white/5 text-white/20 border-white/5"
              }`}
            >
              {isProcessing ? (
                <>
                  <span className="loading loading-spinner loading-sm" />
                  Swapping Face...
                </>
              ) : (
                <>
                  <Wand2 className="w-5 h-5" />
                  Swap Face Now
                </>
              )}
            </button>
            {!baseImage && !faceImage && (
              <p className="text-xs text-white/30 mt-3">
                Upload both a base image and a face image to start
              </p>
            )}
            {error && (
              <div className="mt-4 p-3 rounded-xl bg-red-500/10 border border-red-500/20">
                <p className="text-sm text-red-400">{error}</p>
              </div>
            )}
          </div>

          {/* Result Display */}
          {resultReady && resultUrl && (
            <div className="mt-10 space-y-4">
              <h3 className="text-lg font-semibold text-white text-center">
                ✨ AI Face Swap Complete!
              </h3>

              {/* Before / After Toggle */}
              <div className="flex justify-center mb-4">
                <div className="inline-flex items-center gap-2 glass-card rounded-xl p-1">
                  <button
                    onClick={() => setShowBefore(false)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      !showBefore
                        ? "bg-pink-500/20 text-pink-300"
                        : "text-white/40 hover:text-white/60"
                    }`}
                  >
                    After (Result)
                  </button>
                  <button
                    onClick={() => setShowBefore(true)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      showBefore
                        ? "bg-pink-500/20 text-pink-300"
                        : "text-white/40 hover:text-white/60"
                    }`}
                  >
                    Before (Original)
                  </button>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden bg-black/30 border border-white/5 max-w-md mx-auto">
                {showBefore && basePreviewUrl ? (
                  <img
                    src={basePreviewUrl}
                    alt="Original base image"
                    className="w-full h-auto object-contain"
                  />
                ) : (
                  <img
                    src={resultUrl}
                    alt="AI face swap result"
                    className="w-full h-auto object-contain"
                  />
                )}
              </div>

              <div className="flex justify-center gap-3">
                <button
                  onClick={handleDownload}
                  className="btn bg-gradient-to-r from-pink-600 to-rose-600 border-0 text-white hover:from-pink-500 hover:to-rose-500 rounded-xl gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download Result
                </button>
                <button
                  onClick={handleReset}
                  className="btn btn-outline border-white/10 text-white/60 hover:bg-white/5 rounded-xl gap-2"
                >
                  <RotateCcw className="w-4 h-4" />
                  Swap Another
                </button>
              </div>
            </div>
          )}
        </div>

        {/* How it works */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center text-white mb-8">
            How <span className="gradient-text">AI Face Swap</span> Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: "1",
                title: "Upload Base Image",
                desc: "Upload the photo you want to modify. Our AI face swap online tool accepts JPG, PNG, and WebP formats. Works as a powerful deepswap alternative.",
              },
              {
                step: "2",
                title: "Add the New Face",
                desc: "Upload a clear photo of the face you want to swap in. The AI face changer works best with front-facing photos. Our swap face AI handles all the alignment automatically.",
              },
              {
                step: "3",
                title: "Download Result",
                desc: "Get your photorealistic AI face swap photo in seconds. No watermark, full resolution. Better than deepswap ai — the best free ai face swap online tool.",
              },
            ].map((item) => (
              <div key={item.step} className="glass-card rounded-2xl p-6 text-center">
                <div className="w-10 h-10 rounded-full bg-pink-500/20 text-pink-400 font-bold text-lg flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-white/50">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-white/5 pb-8">
        <FAQSection
          title="AI Face Swap FAQ"
          items={faqs}
        />
      </section>

      {/* Legal Disclaimer */}
      <PolicyDisclaimer />
    </div>
  );
}
