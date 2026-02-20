import Link from "next/link";
import { Shapes } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                <Shapes className="w-4 h-4 text-white rotate-180" />
              </div>
              <span className="text-lg font-bold">
                <span className="gradient-text">aifaceswap</span>
                <span className="text-white/60">.studio</span>
              </span>
            </Link>
            <p className="text-sm text-white/40 leading-relaxed">
              The most advanced AI-powered face swap and virtual try-on platform.
              Transform photos and videos with cutting-edge deep learning technology.
            </p>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-4">
              AI Tools
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/video-face-swap"
                  className="text-sm text-white/40 hover:text-purple-400 transition-colors"
                >
                  Video Face Swap
                </Link>
              </li>
              <li>
                <Link
                  href="/virtual-try-on-clothes"
                  className="text-sm text-white/40 hover:text-purple-400 transition-colors"
                >
                  Virtual Try On Clothes
                </Link>
              </li>
              <li>
                <Link
                  href="/ai-face-swap"
                  className="text-sm text-white/40 hover:text-purple-400 transition-colors"
                >
                  AI Face Swap Photo
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/how-it-works" className="text-sm text-white/40 hover:text-white transition-colors">How It Works</Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-white/40 hover:text-white transition-colors">FAQ</Link>
              </li>
              <li>
                <span className="text-sm text-white/40 cursor-default line-through">Blog</span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy-policy" className="text-sm text-white/40 hover:text-white transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-sm text-white/40 hover:text-white transition-colors">Terms of Service</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/30">
            © {new Date().getFullYear()} aifaceswap.studio — All rights reserved.
          </p>
          <p className="text-sm text-white/30">
            Powered by AI deep learning technology
          </p>
        </div>
      </div>
    </footer>
  );
}
