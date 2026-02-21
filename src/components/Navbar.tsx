"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Shapes, Menu, X, CreditCard, LogOut, User as UserIcon } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";

const navLinks = [
  { href: "/video-face-swap", label: "Video Face Swap" },
  { href: "/virtual-try-on-clothes", label: "Virtual Try On" },
  { href: "/ai-face-swap", label: "AI Face Swap" },
  { href: "/pricing", label: "Pricing" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { user, credits, isLoading, logout } = useAuth();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5">
      <div className="glass-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group mr-6 md:mr-0">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Shapes className="w-5 h-5 text-white rotate-180" />
              </div>
              <span className="text-lg font-bold tracking-tight">
                <span className="gradient-text">aifaceswap</span>
                <span className="text-white/60">.space</span>
              </span>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    pathname === link.href
                      ? "bg-purple-500/15 text-purple-400 border border-purple-500/20"
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Auth section */}
            <div className="flex items-center justify-end gap-2 flex-grow md:flex-grow-0">
              {!isLoading && (
                <>
                  {user ? (
                    <div className="dropdown dropdown-end">
                      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar border border-white/10 hover:border-purple-500/50 transition-colors">
                        <div className="w-10 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center">
                          <span className="text-lg font-medium text-purple-300">
                            {user.name ? user.name.charAt(0).toUpperCase() : user.email.charAt(0).toUpperCase()}
                          </span>
                        </div>
                      </div>
                      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-[#1a1528] border border-white/10 rounded-box w-60">
                        <li className="px-4 py-3 border-b border-white/5 mb-2">
                          <div className="flex flex-col gap-1 cursor-default hover:bg-transparent px-0">
                            <span className="text-sm font-semibold text-white/90 truncate">{user.name || "User"}</span>
                            <span className="text-xs text-white/50 truncate">{user.email}</span>
                          </div>
                        </li>
                        <li>
                          <div className="flex items-center justify-between text-purple-300 mb-2 hover:bg-white/5 px-4 cursor-default">
                            <span className="flex items-center gap-2"><CreditCard className="w-4 h-4" /> Credits</span>
                            <span className="font-mono font-bold">{credits}</span>
                          </div>
                        </li>
                        <li>
                          <button onClick={logout} className="text-red-400 hover:text-red-300 hover:bg-red-500/10 px-4">
                            <LogOut className="w-4 h-4" /> Sign Out
                          </button>
                        </li>
                      </ul>
                    </div>
                  ) : (
                    <Link href="/login" className="btn btn-sm btn-ghost text-white/80 hover:text-white rounded-lg">
                      Sign In
                    </Link>
                  )}
                </>
              )}

              {/* Mobile Hamburger */}
              <button
                className="md:hidden btn btn-ghost btn-sm ml-2"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden glass-card border-t border-white/5">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                  pathname === link.href
                    ? "bg-purple-500/15 text-purple-400"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
