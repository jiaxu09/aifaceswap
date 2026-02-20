"use client";

import { useState } from "react";
import { Video, Wand2, Download, RotateCcw, Sparkles } from "lucide-react";
import UploadZone from "@/components/UploadZone";
import FAQSection from "@/components/FAQSection";

const faqs = [
  {
    question: "How does the AI video face swap work?",
    answer:
      "Our AI video face swap tool uses advanced deep learning models to detect faces in your target video, then seamlessly replaces them with your source face. The technology is similar to apps like Reface and FaceMega, but runs entirely online — no app download needed. The AI analyzes facial features, expressions, and lighting to produce natural-looking deepfake face swap results.",
  },
  {
    question: "Can I replace a face in a video online free?",
    answer:
      "Yes! You can replace face in video online free using our platform. Simply upload your target video and the source face image, click Generate, and get your face swap video in seconds. There are no watermarks on the free tier, making it perfect for content creators and social media use.",
  },
  {
    question: "What video formats are supported for face swapping?",
    answer:
      "Our video face swap online tool supports all major video formats including MP4, AVI, MOV, and WebM. For best results, use videos under 5 minutes with clearly visible faces. The face app video feature works best with front-facing shots and good lighting.",
  },
  {
    question: "Is this better than the Reface app or FaceMega?",
    answer:
      "Our face swap video editor offers several advantages over traditional apps like Reface or FaceMega. It works entirely in your browser — no app download required. You get free face swap video processing without watermarks, support for longer videos, and higher quality output. Unlike the Reface app download requirement, you can start swapping faces instantly.",
  },
  {
    question: "Can I use the face swap for TikTok videos?",
    answer:
      "Absolutely! Our face swap TikTok-ready output makes it easy to create viral content. The video face changer app-quality results are optimized for social media sharing. Many content creators use our free video face swap tool to create engaging face swap TikTok content.",
  },
  {
    question: "Can I swap faces in my own videos for free?",
    answer:
      "Yes, you can face swap your own videos completely free. Our free video face swap online tool lets you put your face on any video, swap face on video clips, or even superimpose face on video content. It's the best face swap app for videos available online.",
  },
];

export default function VideoFaceSwapClient() {
  const [targetVideo, setTargetVideo] = useState<File | null>(null);
  const [sourceFace, setSourceFace] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [resultReady, setResultReady] = useState(false);
  const [resultUrl, setResultUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const canGenerate = targetVideo && sourceFace && !isProcessing;

  const handleGenerate = async () => {
    if (!canGenerate) return;
    setIsProcessing(true);
    setResultReady(false);
    setError(null);
    setResultUrl(null);

    try {
      const formData = new FormData();
      formData.append("input_image", sourceFace);
      formData.append("input_video", targetVideo);
      formData.append("gender", "all");

      const res = await fetch("/api/video-face-swap", {
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
      a.download = "face_swap_result.mp4";
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch {
      window.open(resultUrl, "_blank");
    }
  };

  const handleReset = () => {
    setTargetVideo(null);
    setSourceFace(null);
    setIsProcessing(false);
    setResultReady(false);
    setResultUrl(null);
    setError(null);
  };

  const loadExample = async () => {
    try {
      const faceRes = await fetch("/examples/video-face.jpg");
      const faceBlob = await faceRes.blob();
      const faceFile = new File([faceBlob], "video-face.jpg", { type: "image/jpeg" });
      setSourceFace(faceFile);
    } catch (err) {
      console.error("Failed to load example:", err);
    }
  };

  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="grid-bg absolute inset-0" />
        <div className="absolute top-10 left-1/3 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-10 right-1/3 w-80 h-80 bg-indigo-500/10 rounded-full blur-[100px]" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-xs font-medium text-purple-300 mb-6">
            <Video className="w-3.5 h-3.5" />
            <span>AI-Powered Video Processing</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            <span className="text-white">High-Quality </span>
            <span className="gradient-text">AI Video Face Swap</span>
            <span className="text-white"> Online</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
            Replace any face in a video with AI — free, fast, and no download required.
            Works like the Reface app but with better quality. Create deepfake face swap
            videos, add your face to any video, and produce professional face swap content instantly.
          </p>
        </div>
      </section>

      {/* Upload & Generate Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="glass-card rounded-3xl p-6 sm:p-10">
          {/* Upload Zones */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <UploadZone
              label="Upload Target Video"
              description="MP4, AVI, MOV up to 100MB"
              accept="video/*"
              icon="video"
              file={targetVideo}
              onFileChange={setTargetVideo}
            />
            <UploadZone
              label="Upload Source Face"
              description="JPG, PNG — clear front-facing photo"
              accept="image/*"
              icon="image"
              file={sourceFace}
              onFileChange={setSourceFace}
            />
          </div>

          {/* Example Button */}
          <div className="text-center mb-6">
            <button
              onClick={loadExample}
              className="btn btn-outline border-purple-500/30 text-purple-300 hover:bg-purple-500/20 hover:border-purple-500/50 hover:text-white rounded-xl gap-2 font-medium shadow-[0_0_15px_rgba(168,85,247,0.1)] transition-all"
            >
              <Sparkles className="w-4 h-4 text-purple-400" />
              Try with Example Face
            </button>
            <p className="text-xs text-white/40 mt-2">No video? Load our sample face to test (you still need your own video)</p>
          </div>

          {/* Generate Button */}
          <div className="text-center">
            <button
              onClick={handleGenerate}
              disabled={!canGenerate}
              className={`btn btn-lg rounded-xl px-10 gap-2 transition-all duration-300 ${
                canGenerate
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 border-0 text-white hover:from-purple-500 hover:to-blue-500 btn-glow"
                  : "btn-disabled bg-white/5 text-white/20 border-white/5"
              }`}
            >
              {isProcessing ? (
                <>
                  <span className="loading loading-spinner loading-sm" />
                  Processing Video...
                </>
              ) : (
                <>
                  <Wand2 className="w-5 h-5" />
                  Generate Video
                </>
              )}
            </button>
            {!targetVideo && !sourceFace && (
              <p className="text-xs text-white/30 mt-3">
                Upload both a target video and source face to get started
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
                🎉 Your Face Swap Video is Ready!
              </h3>
              <div className="rounded-2xl overflow-hidden bg-black/30 border border-white/5 aspect-video">
                <video
                  src={resultUrl}
                  controls
                  className="w-full h-full object-contain"
                  autoPlay
                  loop
                />
              </div>
              <div className="flex justify-center gap-3">
                <button
                  onClick={handleDownload}
                  className="btn bg-gradient-to-r from-purple-600 to-blue-600 border-0 text-white hover:from-purple-500 hover:to-blue-500 rounded-xl gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download Video
                </button>
                <button
                  onClick={handleReset}
                  className="btn btn-outline border-white/10 text-white/60 hover:bg-white/5 rounded-xl gap-2"
                >
                  <RotateCcw className="w-4 h-4" />
                  Start Over
                </button>
              </div>
            </div>
          )}
        </div>

        {/* How it works for this page */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center text-white mb-8">
            How to <span className="gradient-text">Swap Faces in Videos</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: "1",
                title: "Upload Your Video",
                desc: "Select a target video where you want to replace the face. Our face swap video editor supports MP4, AVI, and MOV formats. Works with face swap live recordings too.",
              },
              {
                step: "2",
                title: "Add the Source Face",
                desc: "Upload a clear photo of the face you want to put in the video. Our AI face swap video engine works best with front-facing photos in good lighting.",
              },
              {
                step: "3",
                title: "Download Your Result",
                desc: "Click Generate and wait a few seconds. Our free video face swap technology will produce a realistic result — ready to share on TikTok, YouTube, or any social platform.",
              },
            ].map((item) => (
              <div key={item.step} className="glass-card rounded-2xl p-6 text-center">
                <div className="w-10 h-10 rounded-full bg-purple-500/20 text-purple-400 font-bold text-lg flex items-center justify-center mx-auto mb-4">
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
      <section className="border-t border-white/5">
        <FAQSection
          title="Video Face Swap FAQ"
          items={faqs}
        />
      </section>
    </div>
  );
}
