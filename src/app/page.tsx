import Link from "next/link";
import {
  Video,
  Shirt,
  ImageIcon,
  ArrowRight,
  Zap,
  Shield,
  Clock,
  Sparkles,
  Calendar,
  User,
} from "lucide-react";
import FAQSection from "@/components/FAQSection";
import { getAllPosts } from "@/lib/posts";

const features = [
  {
    title: "Video Face Swap",
    description:
      "Replace any face in videos with AI-powered deepfake technology. Create realistic face swap videos online — perfect for content creators, filmmakers, and social media.",
    icon: Video,
    href: "/video-face-swap",
    gradient: "from-purple-500 to-indigo-500",
    keywords: "reface app • video face swap online • face swap video free",
  },
  {
    title: "Virtual Try On Clothes",
    description:
      "Try on any outfit virtually with our AI clothing try-on tool. Upload your photo and a garment image to see how clothes look on you — no fitting room needed.",
    icon: Shirt,
    href: "/virtual-try-on-clothes",
    gradient: "from-blue-500 to-cyan-500",
    keywords: "virtual dress try on • ai try on clothes • AR clothing try on",
  },
  {
    title: "AI Face Swap Photo",
    description:
      "Instantly swap faces in any photo using advanced AI. Our deepswap technology delivers photorealistic results — the best AI face swap tool for images online.",
    icon: ImageIcon,
    href: "/ai-face-swap",
    gradient: "from-pink-500 to-rose-500",
    keywords: "deepswap ai • face swap ai free • ai face changer",
  },
];

const stats = [
  { icon: Zap, label: "Instant Processing", value: "< 30s" },
  { icon: Shield, label: "Privacy First", value: "100%" },
  { icon: Clock, label: "Uptime", value: "99.9%" },
];

const homeFaqs = [
  {
    question: "What is AI face swap and how does it work?",
    answer:
      "AI face swap uses deep learning neural networks to detect, analyze, and replace faces in photos and videos. Our platform uses state-of-the-art face detection and face alignment algorithms to seamlessly blend a source face onto a target image or video, producing highly realistic results. It's similar to popular apps like Reface and FaceMega but works entirely in your browser.",
  },
  {
    question: "Is the video face swap feature truly free?",
    answer:
      "We offer a free trial for you to test out the video face swap tool with no watermarks. After the trial, we offer affordable pay-as-you-go credit packs. You can replace faces in videos online directly from your browser. Simply upload your target video and source face to get started — no sign-up required for the trial.",
  },
  {
    question: "How does the virtual try on clothes feature work?",
    answer:
      "Our virtual try-on clothes tool uses AI and augmented reality technology to digitally fit garments onto your photo. Upload a photo of yourself and an image of the clothing item, and our AI will realistically render the outfit on your body, considering body shape, pose, and fabric behavior. It's like having a virtual fitting room powered by AR clothing try-on technology.",
  },
  {
    question: "Is my data safe when using the face swap tools?",
    answer:
      "Absolutely. We prioritize your privacy and security. All uploaded images and videos are processed on secure servers and are automatically deleted after processing. We never store, share, or sell your data. Your face swap photos and videos remain completely private.",
  },
  {
    question: "Can I use the AI face swap for commercial purposes?",
    answer:
      "Yes, you can use the generated face swap results for commercial projects, content creation, and social media. However, please ensure you have proper consent from individuals whose likenesses are used, and always adhere to applicable laws regarding deepfake and AI-generated content.",
  },
];

export default function HomePage() {
  const latestPosts = getAllPosts().slice(0, 3);

  return (
    <div className="page-enter">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="grid-bg absolute inset-0" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-xs font-medium text-purple-300 mb-8">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Free trials available for all tools</span>
            </div>

            {/* H1 — Primary keywords here */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight">
              <span className="text-white">The Ultimate </span>
              <span className="gradient-text">AI Face Swap</span>
              <span className="text-white"> Tool Online</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed">
              Swap faces in videos, try on clothes virtually, and create stunning AI-generated
              face swap photos — all in one powerful platform. Start for free.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/video-face-swap"
                className="btn btn-lg bg-gradient-to-r from-purple-600 to-blue-600 border-0 text-white hover:from-purple-500 hover:to-blue-500 btn-glow rounded-xl px-8 gap-2"
              >
                <Video className="w-5 h-5" />
                Start Free Trial
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/pricing"
                className="btn btn-lg btn-outline border-white/10 text-white/80 hover:bg-white/5 hover:border-white/20 rounded-xl px-8"
              >
                View Pricing
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-3 gap-4 max-w-lg mx-auto">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <stat.icon className="w-5 h-5 text-purple-400 mx-auto mb-2" />
                  <p className="text-xl font-bold text-white">{stat.value}</p>
                  <p className="text-xs text-white/40">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Powerful <span className="gradient-text">AI Tools</span> at Your Fingertips
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto">
              From video face swapping to virtual clothing try-on, our suite of AI-powered
              tools helps you create stunning content in seconds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature) => (
              <Link key={feature.href} href={feature.href} className="group">
                <div className="card glass-card glass-card-hover h-full transition-all duration-500 rounded-2xl overflow-hidden">
                  <div className="card-body p-8">
                    {/* Icon */}
                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>

                    <h3 className="card-title text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                      {feature.title}
                    </h3>

                    <p className="text-sm text-white/50 leading-relaxed mt-2">
                      {feature.description}
                    </p>

                    <p className="text-xs text-purple-400/60 mt-4 font-medium">
                      {feature.keywords}
                    </p>

                    <div className="card-actions mt-6">
                      <span className="text-sm text-purple-400 group-hover:text-purple-300 flex items-center gap-2 font-medium">
                        Try Now
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              How <span className="gradient-text">It Works</span>
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto">
              Three simple steps to create amazing AI-powered face swaps and virtual try-ons
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Upload Your Media",
                description:
                  "Upload your target video, photo, or garment image. We support all major formats including MP4, JPG, PNG, and WebP.",
              },
              {
                step: "02",
                title: "Let AI Do Its Magic",
                description:
                  "Our advanced deep learning models analyze facial features, body proportions, and clothing details to create seamless results.",
              },
              {
                step: "03",
                title: "Download & Share",
                description:
                  "Get your AI-generated face swap or virtual try-on result in seconds. Download in high quality with no watermark.",
              },
            ].map((item) => (
              <div key={item.step} className="relative text-center group">
                <div className="text-6xl font-black text-purple-500/10 group-hover:text-purple-500/20 transition-colors duration-300">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-white mt-2 mb-3">{item.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blog Posts section */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Latest <span className="gradient-text">Insights & Guides</span>
              </h2>
              <p className="text-white/50 max-w-2xl">
                Stay updated with the latest trends, tutorials, and tips in AI technology.
              </p>
            </div>
            <Link
              href="/blog"
              className="btn btn-outline border-white/10 text-white hover:bg-white/5 rounded-xl shrink-0"
            >
              View All Posts <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group h-full">
                <article className="glass-card rounded-3xl overflow-hidden h-full flex flex-col border border-white/5 hover:border-purple-500/30 transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(168,85,247,0.15)] bg-black/40">
                  {post.image && (
                    <div className="w-full aspect-video relative overflow-hidden bg-white/5">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="p-6 sm:p-8 flex flex-col flex-grow">
                    <div className="flex items-center gap-4 text-xs font-medium text-white/40 mb-4">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5" />
                        {post.author}
                      </div>
                    </div>
                    
                    <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                      {post.title}
                    </h2>
                    
                    <p className="text-white/60 text-sm leading-relaxed mb-6 flex-grow">
                      {post.meta_description}
                    </p>
                    
                    <div className="mt-auto flex items-center text-sm font-semibold text-purple-400">
                      Read article <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-white/5">
        <FAQSection
          title="Frequently Asked Questions"
          items={homeFaqs}
        />
      </section>
    </div>
  );
}
