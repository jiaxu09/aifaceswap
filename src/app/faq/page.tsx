import { Metadata } from "next";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | AI Face Swap Studio",
  description: "Get answers to common questions about our AI face swap, virtual clothing try-on features, privacy, and file formats.",
  keywords: ["faq", "help", "support", "face swap questions", "virtual try on help"],
};

const generalFaqs = [
  {
    question: "Is my data private and secure?",
    answer: "Yes. We do not store your uploaded images or videos on our servers permanently. They are temporarily processed by the AI models and the results are returned directly to you.",
  },
  {
    question: "Do I need to pay to use the tools?",
    answer: "We offer a Free Trial for all of our tools so you can test the quality. After the trial, we use a flexible Pay-As-You-Go credit system starting at $29.9 for 500 credits. No monthly subscriptions required!",
  },
  {
    question: "Why do I sometimes get a 'heavy load' error?",
    answer: "Because we use community AI spaces, there are limits on maximum GPU duration per request. If an image or video is extremely large, it might exceed this limit. Simply waiting a moment or using a slightly lower resolution file usually fixes this.",
  },
];

const featureFaqs = [
  {
    question: "What file formats are supported?",
    answer: "For images, we support standard formats like JPG, JPEG, PNG, and WebP. For video face swap, we recommend MP4 or MOV. Files should generally be under 100MB.",
  },
  {
    question: "How can I get the best face swap results?",
    answer: "For the source face, use a clear, well-lit photo where the person is facing directly at the camera (like a passport photo). Avoid photos where hair, hands, or glasses obscure the face.",
  },
  {
    question: "How does virtual try-on work?",
    answer: "Upload a full-body photo of a person (the model) and a flat-lay photo of a garment. The AI analyzes the pose of the model and warps the garment to fit naturally onto their body, adjusting for lighting and shadows.",
  },
];

export default function FAQPage() {
  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="grid-bg absolute inset-0" />
        <div className="absolute top-10 right-1/3 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px]" />
        
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight mb-6">
            <span className="text-white">Frequently Asked </span>
            <span className="gradient-text">Questions</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/60">
            Everything you need to know about using AI Face Swap Studio.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 space-y-12">
        
        {/* General Category */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 text-sm">01</span>
            General Questions
          </h2>
          <div className="space-y-4">
            {generalFaqs.map((faq, i) => (
              <div key={i} className="collapse collapse-arrow glass-card rounded-2xl border border-white/5">
                <input type="radio" name="faq-general" defaultChecked={i === 0} />
                <div className="collapse-title text-base sm:text-lg font-medium text-white/90 peer-checked:text-blue-400 transition-colors">
                  {faq.question}
                </div>
                <div className="collapse-content">
                  <p className="text-white/60 text-sm sm:text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Category */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400 text-sm">02</span>
            Using the Tools
          </h2>
          <div className="space-y-4">
            {featureFaqs.map((faq, i) => (
              <div key={i} className="collapse collapse-arrow glass-card rounded-2xl border border-white/5">
                <input type="radio" name="faq-features" />
                <div className="collapse-title text-base sm:text-lg font-medium text-white/90 peer-checked:text-purple-400 transition-colors">
                  {faq.question}
                </div>
                <div className="collapse-content">
                  <p className="text-white/60 text-sm sm:text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Still have questions */}
        <div className="mt-16 text-center glass-card p-8 rounded-3xl border border-white/5">
          <h3 className="text-xl font-bold text-white mb-2">Still need help?</h3>
          <p className="text-white/60 mb-6">Our FAQ didn't solve your issue?</p>
          <Link href="/" className="btn btn-outline border-white/10 text-white/80 hover:bg-white/5 rounded-xl">
            Return to Home
          </Link>
        </div>

      </section>
    </div>
  );
}
