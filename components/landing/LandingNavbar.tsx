'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function LandingNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleLogoClick = (e: React.MouseEvent) => {
    if (pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#E5EAE5]/70 bg-[#FBFDFB]/85 backdrop-blur-xl transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 lg:h-[4.25rem] flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <Link
          href="/"
          onClick={handleLogoClick}
          className="flex items-center cursor-pointer focus-visible:outline-none"
        >
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Image
              src="/logo.png"
              alt="LeadLens Logo"
              width={140}
              height={44}
              className="object-contain h-9 lg:h-10 w-auto"
              priority
            />
          </motion.div>
        </Link>

        {/* Zone 3: Navigation and Primary Actions (Moved to right) */}
        <div className="hidden md:flex items-center gap-2">
          <nav className="flex items-center gap-1 text-sm font-medium text-[#52635A] mr-2">
            <Link
              href="/features"
              className={`relative px-3.5 py-2 rounded-full transition-all duration-200 hover:text-[#145C43] hover:bg-[#EFF6F0]/80 active:scale-[0.98] ${pathname === '/features' ? 'text-[#145C43] font-bold bg-[#EFF6F0]/60' : ''
                }`}
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className={`relative px-3.5 py-2 rounded-full transition-all duration-200 hover:text-[#145C43] hover:bg-[#EFF6F0]/80 active:scale-[0.98] ${pathname === '/pricing' ? 'text-[#145C43] font-bold bg-[#EFF6F0]/60' : ''
                }`}
            >
              Pricing
            </Link>
          </nav>
          <Link
            href="/signin"
            className="px-4 py-2 text-sm font-semibold text-[#145C43] hover:text-[#0B3D2E] hover:bg-[#EFF6F0]/80 rounded-full transition-all duration-200 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
          >
            Sign In
          </Link>
          <Link
            href="/signup"
            className="group px-5 py-2.5 text-sm font-semibold text-white bg-[#145C43] hover:bg-[#0B3D2E] rounded-full transition-all duration-200 shadow-soft hover:shadow-glow hover:scale-[1.03] active:scale-[0.98] flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
          >
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Mobile menu hamburger button */}
        <div className="flex md:hidden items-center gap-2">
          <Link
            href="/signin"
            className="px-3.5 py-2 text-xs font-semibold text-white bg-[#145C43] hover:bg-[#0B3D2E] rounded-full transition-all active:scale-95 shadow-soft"
          >
            Sign In
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#52635A] hover:text-[#145C43] rounded-lg hover:bg-[#EFF6F0] active:scale-90 transition-all duration-150 cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#E5EAE5] bg-white/95 backdrop-blur-xl px-5 pt-3 pb-6 space-y-3 shadow-lift">
          <div className="flex flex-col space-y-1">
            <Link
              href="/features"
              className="text-left py-2.5 text-sm font-medium text-[#52635A] hover:text-[#145C43]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className="text-left py-2.5 text-sm font-medium text-[#52635A] hover:text-[#145C43]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
          </div>
          <div className="pt-4 border-t border-[#E5EAE5] flex flex-col gap-2.5">
            <Link
              href="/signin"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 text-sm font-semibold text-[#145C43] bg-[#EFF6F0] hover:bg-[#DDEBE0] rounded-full border border-[#D5E3D8] text-center transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 text-sm font-semibold text-white bg-[#145C43] hover:bg-[#0B3D2E] rounded-full text-center transition-colors shadow-soft"
            >
              Get Started Free
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
