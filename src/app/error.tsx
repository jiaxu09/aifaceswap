"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Shapes, RefreshCw, Home } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="page-enter min-h-[80vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background blurs */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-red-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 text-center max-w-lg">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-purple-500 flex items-center justify-center shadow-lg shadow-red-500/20">
            <Shapes className="w-8 h-8 text-white rotate-180" />
          </div>
        </div>

        {/* Error heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Something Went Wrong
        </h2>
        <p className="text-white/50 text-lg mb-10 max-w-md mx-auto">
          We hit an unexpected error. Don&apos;t worry — your data is safe. Try refreshing or head back to the home page.
        </p>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => reset()}
            className="btn bg-gradient-to-r from-purple-600 to-blue-600 border-0 text-white hover:opacity-90 transition-opacity rounded-xl px-8 gap-2 shadow-lg shadow-purple-500/25"
          >
            <RefreshCw className="w-4 h-4" />
            Try Again
          </button>
          <Link
            href="/"
            className="btn bg-white/10 hover:bg-white/20 border-0 text-white rounded-xl px-8 gap-2"
          >
            <Home className="w-4 h-4" />
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
