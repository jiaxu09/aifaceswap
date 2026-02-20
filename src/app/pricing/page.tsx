"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Check, Zap, Crown, Shield, Rocket, Clock, Coins } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

export default function PricingPage() {
  const router = useRouter();
  const { user, isLoading } = useAuth();
  const [purchaseLoading, setPurchaseLoading] = useState<string | null>(null);

  const handlePurchaseClick = async (packId: string) => {
    if (!user) {
      router.push("/login?redirect=/pricing");
      return;
    }

    setPurchaseLoading(packId);
    try {
      const res = await fetch("/api/payment/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          packId,
          email: user.email,
          userId: user.$id,
        }),
      });

      const data = await res.json();

      if (data.link) {
        window.location.href = data.link;
      } else {
        alert(data.error || "Failed to create payment. Please try again.");
      }
    } catch (err) {
      console.error("Payment error:", err);
      alert("Something went wrong. Please try again.");
    } finally {
      setPurchaseLoading(null);
    }
  };

  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-20 overflow-hidden">
        <div className="grid-bg absolute inset-0 opacity-50" />
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-white/80 mb-8">
            <Zap className="w-4 h-4 text-yellow-400" />
            <span>All tools include a Free Trial</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
            Simple, Transparent <br className="hidden sm:block" />
            <span className="gradient-text">Pay-As-You-Go</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-10">
            No monthly subscriptions. Buy credits only when you need them. Use your credits across any of our AI tools.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">
          
          {/* Starter Pack */}
          <div className="glass-card rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 relative flex flex-col h-full">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white mb-2">Starter Pack</h3>
              <p className="text-white/50 text-sm">Perfect for occasional use, memes, and testing the waters.</p>
            </div>
            
            <div className="mb-6 flex items-baseline gap-2">
              <span className="text-5xl font-black text-white">$29.9</span>
            </div>

            <div className="mb-8 p-4 rounded-2xl bg-white/5 border border-white/5">
              <div className="flex items-center gap-2 mb-2">
                <Coins className="w-5 h-5 text-blue-400" />
                <span className="text-lg font-bold text-white">500 Credits</span>
              </div>
              <p className="text-xs text-white/40">≈ $0.06 / Credit</p>
            </div>

            <div className="flex-grow">
              <p className="text-sm font-medium text-white/80 mb-4">You can create approximately:</p>
              <ul className="space-y-4 mb-8">
                <li className="flex gap-3">
                  <span className="text-xl">🎥</span>
                  <span className="text-sm text-white/70">250 seconds of cinematic Video Swap <span className="text-white/40 text-xs inline-block ml-1">(OR)</span></span>
                </li>
                <li className="flex gap-3">
                  <span className="text-xl">👗</span>
                  <span className="text-sm text-white/70">100 High-Def Virtual Fashion Try-Ons <span className="text-white/40 text-xs inline-block ml-1">(OR)</span></span>
                </li>
                <li className="flex gap-3">
                  <span className="text-xl">🖼️</span>
                  <span className="text-sm text-white/70">500 Perfect Image Face Swaps</span>
                </li>
              </ul>

              <div className="w-full h-px bg-white/10 mb-6" />

              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-green-400 shrink-0" />
                  <span className="text-sm text-white/60">No Watermarks</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-green-400 shrink-0" />
                  <span className="text-sm text-white/60">Standard GPU Speed</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => handlePurchaseClick("starter")}
              disabled={isLoading || purchaseLoading === "starter"}
              className="w-full btn bg-white/10 hover:bg-white/20 border-0 text-white rounded-xl"
            >
              {purchaseLoading === "starter" ? (
                <span className="loading loading-spinner loading-sm" />
              ) : !isLoading && user ? "Get Starter Pack" : "Sign in to buy"}
            </button>
          </div>

          {/* Creator Pack - Most Popular */}
          <div className="glass-card rounded-3xl p-8 border-2 border-purple-500/50 relative shadow-[0_0_30px_rgba(168,85,247,0.15)] flex flex-col transform md:-translate-y-4 h-[calc(100%+32px)] z-10 bg-[#0f0c1a]">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg flex items-center gap-1.5">
              <Crown className="w-3.5 h-3.5" /> Most Popular
            </div>

            <div className="mb-6 mt-2">
              <h3 className="text-xl font-bold text-white mb-2">Creator Pack</h3>
              <p className="text-purple-300/60 text-sm">For social media content creators looking to go viral.</p>
            </div>
            
            <div className="mb-6 flex items-baseline gap-2">
              <span className="text-5xl font-black text-white">$39.9</span>
            </div>

            <div className="mb-8 p-4 rounded-2xl bg-purple-500/10 border border-purple-500/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-purple-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-bl-lg">
                +100 BONUS
              </div>
              <div className="flex items-center gap-2 mb-2">
                <Coins className="w-5 h-5 text-purple-400" />
                <span className="text-lg font-bold text-white">800 Credits</span>
              </div>
              <p className="text-xs text-purple-300/40">≈ $0.05 / Credit</p>
            </div>

            <div className="flex-grow">
              <p className="text-sm font-medium text-white/80 mb-4">You can create approximately:</p>
              <ul className="space-y-4 mb-8">
                <li className="flex gap-3">
                  <span className="text-xl">🎥</span>
                  <span className="text-sm text-white/80">400 seconds (over 6 mins) of Video Swap <span className="text-white/40 text-xs inline-block ml-1">(OR)</span></span>
                </li>
                <li className="flex gap-3">
                  <span className="text-xl">👗</span>
                  <span className="text-sm text-white/80">160 High-Def Virtual Fashion Try-Ons <span className="text-white/40 text-xs inline-block ml-1">(OR)</span></span>
                </li>
                <li className="flex gap-3">
                  <span className="text-xl">🖼️</span>
                  <span className="text-sm text-white/80">800 Perfect Image Face Swaps</span>
                </li>
              </ul>

              <div className="w-full h-px bg-white/10 mb-6" />

              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-purple-400 shrink-0" />
                  <span className="text-sm text-white/70">Everything in Starter</span>
                </li>
                <li className="flex items-start gap-3 p-3 rounded-xl bg-purple-500/5 border border-purple-500/10">
                  <Zap className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-purple-200">Priority Processing</span>
                    <span className="text-xs text-purple-300/60 mt-0.5">Fast queue for generating videos (Less waiting!)</span>
                  </div>
                </li>
              </ul>
            </div>

            <button
              onClick={() => handlePurchaseClick("creator")}
              disabled={isLoading || purchaseLoading === "creator"}
              className="w-full btn bg-gradient-to-r from-purple-600 to-blue-600 border-0 text-white hover:opacity-90 transition-opacity rounded-xl shadow-lg shadow-purple-500/25"
            >
              {purchaseLoading === "creator" ? (
                <span className="loading loading-spinner loading-sm" />
              ) : !isLoading && user ? "Get Creator Pack" : "Sign in to buy"}
            </button>
          </div>

          {/* Studio Pack */}
          <div className="glass-card rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 relative flex flex-col h-full">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white mb-2">Studio & Commerce</h3>
              <p className="text-white/50 text-sm">Built for TikTok shop owners, brands, and heavy commercial use.</p>
            </div>
            
            <div className="mb-6 flex items-baseline gap-2">
              <span className="text-5xl font-black text-white">$69.9</span>
            </div>

            <div className="mb-8 p-4 rounded-2xl bg-white/5 border border-white/5">
              <div className="flex items-center gap-2 mb-2">
                <Coins className="w-5 h-5 text-pink-400" />
                <span className="text-lg font-bold text-white">1600 Credits</span>
              </div>
              <p className="text-xs text-white/40">≈ $0.04 / Credit <span className="text-green-400 ml-1">Best Value</span></p>
            </div>

            <div className="flex-grow">
              <p className="text-sm font-medium text-white/80 mb-4">You can create approximately:</p>
              <ul className="space-y-4 mb-8">
                <li className="flex gap-3">
                  <span className="text-xl">🎥</span>
                  <span className="text-sm text-white/70">750 seconds of Video Swap (Multiple shorts output) <span className="text-white/40 text-xs inline-block ml-1">(OR)</span></span>
                </li>
                <li className="flex gap-3">
                  <span className="text-xl">👗</span>
                  <span className="text-sm text-white/70">300 Complete Commercial Virtual Fashion Try-Ons <span className="text-white/40 text-xs inline-block ml-1">(OR)</span></span>
                </li>
                <li className="flex gap-3">
                  <span className="text-xl">🖼️</span>
                  <span className="text-sm text-white/70">1600 High-Quality AI Portrait Images</span>
                </li>
              </ul>

              <div className="w-full h-px bg-white/10 mb-6" />

              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <Shield className="w-4 h-4 text-pink-400 shrink-0" />
                  <span className="text-sm text-white/80 font-medium">Commercial Use Rights</span>
                </li>
                <li className="flex items-center gap-3">
                  <Rocket className="w-4 h-4 text-pink-400 shrink-0" />
                  <span className="text-sm text-white/80 font-medium">Ultra-Fast Dedicated GPUs</span>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-pink-400 shrink-0" />
                  <span className="text-sm text-white/80 font-medium">30 Days Cloud Output Storage</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => handlePurchaseClick("studio")}
              disabled={isLoading || purchaseLoading === "studio"}
              className="w-full btn bg-white text-black hover:bg-white/90 border-0 rounded-xl"
            >
              {purchaseLoading === "studio" ? (
                <span className="loading loading-spinner loading-sm" />
              ) : !isLoading && user ? "Get Studio Pack" : "Sign in to buy"}
            </button>
          </div>

        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="pb-24 text-center">
        <p className="text-white/60 mb-4">Have questions about our credits?</p>
        <Link href="/faq" className="text-purple-400 hover:text-purple-300 font-medium underline underline-offset-4">
          Read our FAQ
        </Link>
      </section>
    </div>
  );
}
