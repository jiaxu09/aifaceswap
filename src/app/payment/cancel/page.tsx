"use client";

import Link from "next/link";
import { XCircle } from "lucide-react";

export default function PaymentCancelPage() {
  return (
    <div className="page-enter">
      <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-20 overflow-hidden">
        <div className="grid-bg absolute inset-0 opacity-50" />
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-red-500/10 rounded-full blur-[120px]" />

        <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-card rounded-3xl p-12 border border-white/10">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-red-500/10 flex items-center justify-center">
                <XCircle className="w-10 h-10 text-red-400" />
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Payment Cancelled
            </h1>

            <p className="text-white/60 text-lg mb-8">
              Your payment was not completed. No charges were made. You can try again anytime.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/pricing"
                className="btn bg-gradient-to-r from-purple-600 to-blue-600 border-0 text-white hover:opacity-90 transition-opacity rounded-xl px-8"
              >
                Back to Pricing
              </Link>
              <Link
                href="/"
                className="btn bg-white/10 hover:bg-white/20 border-0 text-white rounded-xl px-8"
              >
                Go Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
