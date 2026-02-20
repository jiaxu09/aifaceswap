import { Metadata } from "next";
import { getPostBySlug, getAllPosts } from "@/lib/posts";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import { ArrowLeft, Calendar, User } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    const ogImage = post.image ? [{ url: post.image }] : undefined;

    return {
      title: `${post.title} | AI Face Swap Studio Blog`,
      description: post.meta_description,
      keywords: post.keywords,
      openGraph: {
        title: post.title,
        description: post.meta_description,
        type: "article",
        publishedTime: post.date,
        authors: [post.author],
        images: ogImage,
      },
      twitter: {
        card: "summary_large_image",
        title: post.title,
        description: post.meta_description,
        images: ogImage,
      },
    };
  } catch (error) {
    return { title: "Blog Post Not Found" };
  }
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: Props) {
  let post;
  try {
    const { slug } = await params;
    post = getPostBySlug(slug);
  } catch (error) {
    notFound();
  }

  return (
    <div className="page-enter">
      {/* Article Header */}
      <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-16 border-b border-white/5">
        <div className="grid-bg absolute inset-0 opacity-50" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center text-sm font-medium text-white/40 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to blog
          </Link>
          
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-8">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-white/50 mb-10">
            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
              <User className="w-4 h-4 text-purple-400" />
              {post.author}
            </div>
            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
              <Calendar className="w-4 h-4 text-blue-400" />
              {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </div>
          </div>
          
          {post.image && (
            <div className="w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-black/50">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>
      </section>

      {/* Article Content */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <article className="prose prose-invert prose-purple prose-lg max-w-none">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </article>

        {/* Start CTA */}
        <div className="mt-20 p-8 sm:p-12 glass-card rounded-3xl border border-white/10 text-center relative overflow-hidden group">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/20 rounded-full blur-[100px] group-hover:bg-purple-500/30 transition-colors" />
          <div className="relative">
            <h3 className="text-2xl font-bold text-white mb-4">Start Face Swapping for Free</h3>
            <p className="text-white/60 mb-8 max-w-lg mx-auto">Create viral TikToks, funny memes, or try on new outfits with our powerful online AI tools. Start your free trial today.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/video-face-swap" className="btn bg-gradient-to-r from-purple-600 to-blue-600 border-0 text-white hover:from-purple-500 hover:to-blue-500 rounded-xl">
                Try Video Face Swap
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
