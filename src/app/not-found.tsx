import Link from "next/link";
import { Shapes, Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="page-enter min-h-[80vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background blurs */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 text-center max-w-lg">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center shadow-lg shadow-purple-500/20">
            <Shapes className="w-8 h-8 text-white rotate-180" />
          </div>
        </div>

        {/* 404 Number */}
        <h1 className="text-[120px] sm:text-[160px] font-black leading-none gradient-text select-none">
          404
        </h1>

        {/* Message */}
        <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2 mb-4">
          Page Not Found
        </h2>
        <p className="text-white/50 text-lg mb-10 max-w-md mx-auto">
          Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="btn bg-gradient-to-r from-purple-600 to-blue-600 border-0 text-white hover:opacity-90 transition-opacity rounded-xl px-8 gap-2 shadow-lg shadow-purple-500/25"
          >
            <Home className="w-4 h-4" />
            Go Home
          </Link>
          <Link
            href="/pricing"
            className="btn bg-white/10 hover:bg-white/20 border-0 text-white rounded-xl px-8 gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            View Pricing
          </Link>
        </div>
      </div>
    </div>
  );
}
