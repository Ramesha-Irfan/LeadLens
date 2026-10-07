'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="pricing-gradient-bg h-screen max-h-screen overflow-hidden flex">
      {/* LEFT BRAND PANEL */}
      <div className="hidden lg:flex lg:w-[44%] xl:w-[41%] relative flex-col justify-between overflow-hidden shrink-0 border-r border-[#E5EAE5]">
        {/* Base gradient */}
        <div className="pricing-gradient-bg absolute inset-0" />

        {/* World map dot overlay */}
        <svg
          viewBox="0 0 900 440"
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ opacity: 0.055 }}
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern id="authDot" x="0" y="0" width="13" height="13" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.1" fill="#145C43" />
            </pattern>
          </defs>
          {/* North America */}
          <ellipse cx="195" cy="170" rx="95" ry="62" fill="url(#authDot)" />
          {/* South America */}
          <ellipse cx="240" cy="300" rx="52" ry="78" fill="url(#authDot)" />
          {/* Europe */}
          <ellipse cx="450" cy="145" rx="60" ry="50" fill="url(#authDot)" />
          {/* Africa */}
          <ellipse cx="455" cy="285" rx="60" ry="88" fill="url(#authDot)" />
          {/* Asia */}
          <ellipse cx="630" cy="160" rx="118" ry="75" fill="url(#authDot)" />
          {/* Australia */}
          <ellipse cx="745" cy="325" rx="55" ry="42" fill="url(#authDot)" />
        </svg>

        {/* Animated data network canvas */}

        {/* Ambient glows */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[240px] bg-[#B8D5C0]/18 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 -right-10 w-[260px] h-[200px] bg-[#E9DFC8]/22 rounded-full blur-3xl pointer-events-none" />

        {/* Panel content */}
        <div className="relative z-10 flex flex-col justify-between h-full p-6 xl:p-8">
          {/* Logo */}
          <Link href="/" className="inline-flex w-fit shrink-0">
            <Image src="/leadlens-logo-light.png" alt="LeadLens" width={300} height={90} className="object-contain h-7 w-auto" priority />
          </Link>

          {/* Main copy */}
          <div className="my-auto py-4">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            >

              <h2 className="text-2xl xl:text-3xl font-bold text-[#10251D] leading-[1.18] [text-wrap:balance] mb-3">
                Turn global data
                <br />
                into your{' '}
                <span className="text-[#145C43]">next customer.</span>
              </h2>

              <p className="text-xs xl:text-sm text-[#52635A] leading-relaxed max-w-[280px]">
                Discover companies. Enrich decision-makers. Launch intelligent outbound campaigns.
              </p>

              {/* Stat cards */}
              <div className="mt-5 grid grid-cols-2 gap-2.5">
                {[
                  { value: '140M+', label: 'Verified contacts' },
                  { value: '180+', label: 'Countries covered' },
                  { value: '99.2%', label: 'Email accuracy' },
                  { value: '89.4%', label: 'Data recovery rate' },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="bg-white/60 backdrop-blur-sm border border-[#D5E3D8]/80 rounded-xl p-2.5 xl:p-3"
                  >
                    <p className="text-base xl:text-lg font-bold text-[#145C43] tabular-nums">{s.value}</p>
                    <p className="text-[10px] xl:text-[11px] text-[#7A887F] mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom live indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center gap-2 text-[10px] xl:text-[11px] text-[#7A887F] shrink-0"
          >
            <span className="flex h-1.5 w-1.5 rounded-full bg-[#145C43] animate-pulse-subtle" />
            Live global intelligence · Updated in real-time
          </motion.div>
        </div>
      </div>

      {/* RIGHT FORM PANEL */}
      <div className="flex-1 flex flex-col h-full max-h-screen overflow-hidden bg-[#FBFDFB]">
        {/* Mobile logo bar */}
        <div className="flex lg:hidden items-center justify-between px-5 py-2.5 border-b border-[#E5EAE5] shrink-0">
          <Link href="/">
            <Image src="/leadlens_light_1024x1024-removebg-preview.png" alt="LeadLens" width={160} height={50} className="object-contain h-13 w-auto" priority />
          </Link>
          <Link href="/" className="flex items-center gap-1.5 text-xs text-[#52635A] hover:text-[#145C43] transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" />
            Back
          </Link>
        </div>

        {/* Desktop back link */}
        <div className="hidden lg:flex items-center justify-end px-8 pt-3 pb-1 shrink-0">
          <Link href="/" className="flex items-center gap-1.5 text-[11px] text-[#7A887F] hover:text-[#145C43] transition-colors group">
            <ArrowLeft className="w-3 h-3 group-hover:-translate-x-0.5 transition-transform" />
            Back to website
          </Link>
        </div>

        {/* Form content */}
        <div className="flex-1 flex items-center justify-center px-4 sm:px-6 py-1 min-h-0 overflow-y-auto lg:overflow-hidden">
          <div className="w-full max-w-[390px] my-auto">{children}</div>
        </div>

        {/* Bottom footer */}
        <div className="px-4 py-2 text-center text-[11px] text-[#7A887F] shrink-0">
          © {new Date().getFullYear()} LeadLens · Privacy · Terms
        </div>
      </div>
    </div>
  );
}
