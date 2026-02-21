import { Metadata } from "next";
import Link from "next/link";
import { Sparkles, Video, Shirt, ImageIcon, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "How It Works | AI Face Swap Space",
  description: "Learn how our advanced AI technology powers video face swaps, virtual clothing try-ons, and photo face swaps. Easy to use, fast, and secure.",
  keywords: ["how ai face swap works", "virtual try on tutorial", "ai deep learning", "face swap guide"],
};

export default function HowItWorksPage() {
  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="grid-bg absolute inset-0" />
        <div className="absolute top-10 left-1/3 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px]" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight mb-6">
            <span className="text-white">How It </span>
            <span className="gradient-text">Works</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto">
            Our platform connects directly to state-of-the-art Hugging Face AI models to deliver seamless, photorealistic results in seconds.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 space-y-16">
        
        {/* Step 1 */}
        <div className="glass-card rounded-3xl p-8 sm:p-12 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px] group-hover:bg-purple-500/20 transition-colors" />
          <div className="relative flex flex-col md:flex-row gap-8 items-start">
            <div className="w-16 h-16 rounded-2xl bg-purple-500/20 flex items-center justify-center shrink-0">
              <span className="text-2xl font-black text-purple-400">1</span>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Choose Your Target</h2>
              <p className="text-white/60 mb-6 leading-relaxed">
                Whether you want to swap a face in a video, try on a new outfit, or swap faces in a photo, simply upload the target file. We accept standard image (JPG, PNG) and video (MP4, MOV) formats.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10">
                  <Video className="w-4 h-4 text-purple-400" />
                  <span className="text-sm font-medium text-white/80">Video</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10">
                  <Shirt className="w-4 h-4 text-blue-400" />
                  <span className="text-sm font-medium text-white/80">Clothing</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10">
                  <ImageIcon className="w-4 h-4 text-pink-400" />
                  <span className="text-sm font-medium text-white/80">Photo</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="glass-card rounded-3xl p-8 sm:p-12 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] group-hover:bg-blue-500/20 transition-colors" />
          <div className="relative flex flex-col md:flex-row gap-8 items-start">
            <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center shrink-0">
              <span className="text-2xl font-black text-blue-400">2</span>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Provide the Source</h2>
              <p className="text-white/60 mb-4 leading-relaxed">
                Next, upload the source material. For face swaps, this is a clear, front-facing photo of the face you want to use. For virtual try-on, this is a photo of the person who will wear the clothes.
              </p>
              <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 text-sm text-blue-200">
                <strong>Pro tip:</strong> The clearer the source image and the better the lighting, the more realistic your final result will be!
              </div>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="glass-card rounded-3xl p-8 sm:p-12 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-[80px] group-hover:bg-green-500/20 transition-colors" />
          <div className="relative flex flex-col md:flex-row gap-8 items-start">
            <div className="w-16 h-16 rounded-2xl bg-green-500/20 flex items-center justify-center shrink-0">
              <span className="text-2xl font-black text-green-400">3</span>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">AI Magic Happens</h2>
              <p className="text-white/60 mb-6 leading-relaxed">
                Once you click generate, we securely send your files to our specialized Hugging Face Spaces. The neural networks analyze facial landmarks, lighting, and garment structures to blend everything perfectly together.
              </p>
              <p className="text-white/60 leading-relaxed">
                Processing usually takes between 10 to 30 seconds depending on the complexity of the task and current server load.
              </p>
            </div>
          </div>
        </div>

        {/* Start CTA */}
        <div className="text-center pt-8">
          <h2 className="text-2xl font-bold text-white mb-6">Ready to try it out?</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/video-face-swap" className="btn bg-gradient-to-r from-purple-600 to-blue-600 border-0 text-white hover:from-purple-500 hover:to-blue-500 rounded-xl">
              Try Video Swap <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </section>
    </div>
  );
}
