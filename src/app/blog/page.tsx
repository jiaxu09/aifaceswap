import { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { Calendar, User, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog | AI Face Swap Studio",
  description: "Read the latest news, tutorials, and tips on using AI face swap and virtual try-on software to elevate your content.",
  keywords: ["ai face swap blog", "video face swap tutorial", "virtual try on guide", "deepfake software news"],
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="grid-bg absolute inset-0" />
        <div className="absolute top-10 left-1/3 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight mb-6">
            <span className="text-white">Our </span>
            <span className="gradient-text">Blog</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto">
            Tips, tutorials, and the latest news on AI face swapping and virtual fashion.
          </p>
        </div>
      </section>

      {/* Blog List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {posts.length === 0 ? (
          <div className="text-center text-white/40 py-12">
            No posts found yet. Check back later!
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
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
        )}
      </section>
    </div>
  );
}
