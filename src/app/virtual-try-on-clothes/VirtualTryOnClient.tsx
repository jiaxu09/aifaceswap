"use client";

import { useState } from "react";
import { Shirt, Wand2, Download, RotateCcw, Sparkles } from "lucide-react";
import UploadZone from "@/components/UploadZone";
import FAQSection from "@/components/FAQSection";
import PolicyDisclaimer from "@/components/PolicyDisclaimer";

const faqs = [
  {
    question: "How does the virtual try on clothes feature work?",
    answer:
      "Our virtual clothing try-on app uses AI and augmented reality technology to digitally fit garments onto your photo. Upload a picture of yourself (the model) and an image of the clothing item you want to try on. The AI analyzes your body shape, pose, and proportions to realistically render the virtual dress try on or outfit try on result. It's the most advanced digital try on clothes experience available online.",
  },
  {
    question: "Is this a free AR clothing try on tool?",
    answer:
      "Yes! Our ar clothing try on tool is completely free to use. You can try on clothes online, experiment with virtual outfit combinations, and see how different garments look on you — all without downloading any clothing try on app. Our augmented reality clothing fitting technology works directly in your browser.",
  },
  {
    question: "What types of clothing can I virtually try on?",
    answer:
      "Our virtual try on clothes online tool supports a wide range of garments including dresses, tops, jackets, suits, and more. Simply upload a clear photo of the clothing item and our AI will help you try on clothes virtually. Whether it's a virtual dress try on or a full outfit try on, our AI try on clothes platform can handle it.",
  },
  {
    question: "Do I need to download an app to try on clothes virtually?",
    answer:
      "No download needed! Unlike traditional try on clothes apps or virtual clothes try on apps, our platform works entirely in your web browser. It's a virtual try on clothes website that gives you the same quality as dedicated apps. You can try on outfits online, do a digital clothes try on, or use our fashion virtual try on tool from any device.",
  },
  {
    question: "How accurate is the virtual clothing fitting?",
    answer:
      "Our AI-powered virtual clothes fitting technology uses advanced computer vision to analyze your body proportions, pose, and the garment's fabric behavior. The result is a highly realistic 3D try on clothes experience. While it's not the same as a physical mirror that lets you try on clothes, our digital try on clothes technology provides an extremely accurate preview of how clothing will look on you.",
  },
  {
    question: "Can I use this for my online fashion store?",
    answer:
      "Absolutely! Our virtual try on apparel solution is perfect for e-commerce. Online clothes try on technology can significantly reduce return rates and improve customer satisfaction. Whether you're a small boutique or a large retailer similar to how virtual try on Walmart uses the technology, our platform can help your customers try on clothes digitally before purchasing.",
  },
];

export default function VirtualTryOnClient() {
  const [modelPhoto, setModelPhoto] = useState<File | null>(null);
  const [garmentImage, setGarmentImage] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [resultReady, setResultReady] = useState(false);
  const [resultUrl, setResultUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const canGenerate = modelPhoto && garmentImage && !isProcessing;

  const handleGenerate = async () => {
    if (!canGenerate) return;
    setIsProcessing(true);
    setResultReady(false);
    setError(null);
    setResultUrl(null);

    try {
      const formData = new FormData();
      formData.append("person", modelPhoto);
      formData.append("clothing", garmentImage);

      const res = await fetch("/api/virtual-try-on", {
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
      a.download = "virtual_try_on_result.png";
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch {
      window.open(resultUrl, "_blank");
    }
  };

  const handleReset = () => {
    setModelPhoto(null);
    setGarmentImage(null);
    setIsProcessing(false);
    setResultReady(false);
    setResultUrl(null);
    setError(null);
  };

  const loadExample = async () => {
    try {
      const [modelRes, clothingRes] = await Promise.all([
        fetch("/examples/tryon-model.jpg"),
        fetch("/examples/tryon-clothing.jpg"),
      ]);
      const modelBlob = await modelRes.blob();
      const clothingBlob = await clothingRes.blob();
      const modelFile = new File([modelBlob], "tryon-model.jpg", { type: "image/jpeg" });
      const clothingFile = new File([clothingBlob], "tryon-clothing.jpg", { type: "image/jpeg" });
      setModelPhoto(modelFile);
      setGarmentImage(clothingFile);
    } catch (err) {
      console.error("Failed to load example:", err);
    }
  };

  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="grid-bg absolute inset-0" />
        <div className="absolute top-10 left-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px]" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-xs font-medium text-blue-300 mb-6">
            <Shirt className="w-3.5 h-3.5" />
            <span>AI-Powered Virtual Fitting Room</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            <span className="gradient-text">Virtual Try On Clothes</span>
            <span className="text-white"> with AI</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
            Try on any outfit virtually without leaving your home. Our AI clothing try-on 
            technology uses augmented reality to show how clothes look on you. Upload your 
            photo and any garment — get results in seconds. The best virtual clothing try on app online.
          </p>
        </div>
      </section>

      {/* Upload & Generate Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="glass-card rounded-3xl p-6 sm:p-10">
          {/* Upload Zones */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <UploadZone
              label="Upload Your Photo (Model)"
              description="JPG, PNG — full or half body photo"
              accept="image/*"
              icon="image"
              file={modelPhoto}
              onFileChange={setModelPhoto}
            />
            <UploadZone
              label="Upload Garment / Clothing Image"
              description="JPG, PNG — flat lay or on-hanger photo"
              accept="image/*"
              icon="image"
              file={garmentImage}
              onFileChange={setGarmentImage}
            />
          </div>

          {/* Example Button */}
          <div className="text-center mb-6">
            <button
              onClick={loadExample}
              className="btn btn-outline border-blue-500/30 text-blue-300 hover:bg-blue-500/20 hover:border-blue-500/50 hover:text-white rounded-xl gap-2 font-medium shadow-[0_0_15px_rgba(59,130,246,0.1)] transition-all"
            >
              <Sparkles className="w-4 h-4 text-blue-400" />
              Try with Example Images
            </button>
            <p className="text-xs text-white/40 mt-2">Don't have photos ready? Load our sample model and clothing</p>
          </div>

          {/* Generate Button */}
          <div className="text-center">
            <button
              onClick={handleGenerate}
              disabled={!canGenerate}
              className={`btn btn-lg rounded-xl px-10 gap-2 transition-all duration-300 ${
                canGenerate
                  ? "bg-gradient-to-r from-blue-600 to-cyan-600 border-0 text-white hover:from-blue-500 hover:to-cyan-500 btn-glow"
                  : "btn-disabled bg-white/5 text-white/20 border-white/5"
              }`}
            >
              {isProcessing ? (
                <>
                  <span className="loading loading-spinner loading-sm" />
                  Fitting Outfit...
                </>
              ) : (
                <>
                  <Wand2 className="w-5 h-5" />
                  Try On Outfit
                </>
              )}
            </button>
            {!modelPhoto && !garmentImage && (
              <p className="text-xs text-white/30 mt-3">
                Upload both your photo and a garment image to try on clothes virtually
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
                👗 Your Virtual Try-On Result
              </h3>
              <div className="rounded-2xl overflow-hidden bg-black/30 border border-white/5 max-w-sm mx-auto">
                <img
                  src={resultUrl}
                  alt="Virtual try-on result"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="flex justify-center gap-3">
                <button
                  onClick={handleDownload}
                  className="btn bg-gradient-to-r from-blue-600 to-cyan-600 border-0 text-white hover:from-blue-500 hover:to-cyan-500 rounded-xl gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download Image
                </button>
                <button
                  onClick={handleReset}
                  className="btn btn-outline border-white/10 text-white/60 hover:bg-white/5 rounded-xl gap-2"
                >
                  <RotateCcw className="w-4 h-4" />
                  Try Another
                </button>
              </div>
            </div>
          )}
        </div>

        {/* How it works */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center text-white mb-8">
            How to <span className="gradient-text">Try On Clothes Virtually</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: "1",
                title: "Upload Your Photo",
                desc: "Take or upload a clear photo of yourself. Our virtual model try on clothes AI works best with front-facing half or full body shots. This is your AR clothing fitting base.",
              },
              {
                step: "2",
                title: "Choose Your Garment",
                desc: "Upload an image of the clothing item you want to try on. Flat lay photos or on-hanger shots work best for virtual dress try on and outfit try on results.",
              },
              {
                step: "3",
                title: "See the Result",
                desc: "Our AI will digitally fit the garment onto your photo with realistic fabric behavior and proportions. Download the virtual clothes fitting result and share it!",
              },
            ].map((item) => (
              <div key={item.step} className="glass-card rounded-2xl p-6 text-center">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 text-blue-400 font-bold text-lg flex items-center justify-center mx-auto mb-4">
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
          title="Virtual Try On FAQ"
          items={faqs}
        />
      </section>

      {/* Legal Disclaimer */}
      <PolicyDisclaimer />
    </div>
  );
}
