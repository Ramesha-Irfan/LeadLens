'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

import HeroVisual from './HeroVisual';
import AnimatedNumber from './AnimatedNumber';

interface HeroSectionProps {
  onExploreClick: () => void;
}

const HERO_STATS = [
  { value: '140M+', label: 'Verified B2B Decision Makers', accent: false },
  { value: '99.2%', label: 'SMTP Zero-Bounce Guarantee', accent: true },
  { value: '89.4%', label: 'Waterfall Data Recovery Rate', accent: false },
  { value: '180+', label: 'Global Countries Covered', accent: true }
];

const EASE = [0.22, 1, 0.36, 1] as const;

const HEADING_PART1 = 'Turn Global Data Into Your ';
const HEADING_PART2 = 'Next Customer.';
const PARAGRAPH_TEXT =
  'Find verified companies and decision-makers, enrich missing data, personalize outreach with AI, and launch targeted campaigns from one intelligent workspace.';

export default function HeroSection({ onExploreClick }: HeroSectionProps) {
  const reduce = useReducedMotion();

  // Typewriter states
  const [displayedPart1, setDisplayedPart1] = useState('');
  const [displayedPart2, setDisplayedPart2] = useState('');
  const [displayedParagraph, setDisplayedParagraph] = useState('');
  const [headingFinished, setHeadingFinished] = useState(false);
  const [paragraphFinished, setParagraphFinished] = useState(false);

  useEffect(() => {
    if (reduce) {
      setDisplayedPart1(HEADING_PART1);
      setDisplayedPart2(HEADING_PART2);
      setDisplayedParagraph(PARAGRAPH_TEXT);
      setHeadingFinished(true);
      setParagraphFinished(true);
      return;
    }

    let i = 0;
    let j = 0;
    let k = 0;
    let timeoutId: NodeJS.Timeout;

    // Step 1: Type Heading Part 1
    const typeHeadingPart1 = () => {
      if (i < HEADING_PART1.length) {
        setDisplayedPart1(HEADING_PART1.slice(0, i + 1));
        i++;
        timeoutId = setTimeout(typeHeadingPart1, 32);
      } else {
        timeoutId = setTimeout(typeHeadingPart2, 80);
      }
    };

    // Step 2: Type Heading Part 2 (Gradient Text)
    const typeHeadingPart2 = () => {
      if (j < HEADING_PART2.length) {
        setDisplayedPart2(HEADING_PART2.slice(0, j + 1));
        j++;
        timeoutId = setTimeout(typeHeadingPart2, 36);
      } else {
        setHeadingFinished(true);
        // Step 3: Pause briefly and then start typing the paragraph
        timeoutId = setTimeout(typeParagraph, 120);
      }
    };

    // Step 3: Type Paragraph
    const typeParagraph = () => {
      if (k < PARAGRAPH_TEXT.length) {
        setDisplayedParagraph(PARAGRAPH_TEXT.slice(0, k + 1));
        k++;
        timeoutId = setTimeout(typeParagraph, 12);
      } else {
        setParagraphFinished(true);
      }
    };

    // Initial small delay
    timeoutId = setTimeout(typeHeadingPart1, 150);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [reduce]);

  return (
    <section className="w-full relative overflow-hidden bg-white border-b border-[#E5EAE5] text-[#10251D] pt-14 pb-16 md:pt-22 md:pb-24">
      {/* Background fine grid overlay */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid-fine fade-mask-b opacity-30" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Centered copy */}
        <div className="mx-auto max-w-4xl text-center">
          {/* Headline with Typewriter Effect (No cursor line) */}
          <h1 className="mb-6 min-h-[3.6em] sm:min-h-[2.7em] lg:min-h-[2.2em] text-[2.75rem] font-bold leading-[1.05] tracking-[-0.035em] text-[#10251D] [text-wrap:balance] sm:text-6xl lg:text-[4.75rem] lg:leading-[1.03]">
            <span>{displayedPart1}</span>
            {displayedPart2 && (
              <span className="text-gradient-brand inline-block">{displayedPart2}</span>
            )}
          </h1>

          {/* Paragraph (Types in after heading completes) */}
          <p className="mx-auto mb-10 max-w-2xl min-h-[4.5em] sm:min-h-[3.8em] text-base leading-[1.7] text-[#52635A] [text-wrap:pretty] sm:text-lg md:text-xl md:leading-[1.65]">
            {displayedParagraph}
          </p>

          {/* Buttons (Appear when paragraph finishes typing) */}
          <div className="min-h-[58px] flex items-center justify-center">
            {paragraphFinished && (
              <motion.div
                initial={{ opacity: 0, y: 18, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, ease: EASE }}
                className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center w-full sm:w-auto"
              >
                <Link
                  href="/signup"
                  className="group relative inline-flex h-[54px] items-center justify-center gap-3 rounded-full bg-[#145C43] pl-8 pr-3 text-[0.95rem] font-semibold text-white shadow-soft transition-all duration-300 hover:bg-[#0B3D2E] hover:shadow-glow hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#145C43] focus-visible:ring-offset-2 active:scale-[0.98] overflow-hidden"
                >
                  <span aria-hidden className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
                  
                  <span className="relative z-10">Start Generating Leads</span>
                  <span className="relative z-10 grid h-9 w-9 place-items-center rounded-full bg-white/15 transition-all duration-300 group-hover:bg-white/25 group-hover:rotate-[-5deg]">
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </span>
                </Link>

                <button
                  type="button"
                  onClick={onExploreClick}
                  className="inline-flex h-[54px] items-center justify-center rounded-full border border-[#D5E3D8] bg-white px-8 text-[0.95rem] font-semibold text-[#0B3D2E] transition-all duration-300 hover:border-[#145C43]/40 hover:bg-[#F8FAF6] hover:shadow-soft hover:scale-[1.01] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#145C43] focus-visible:ring-offset-2 active:scale-[0.98] cursor-pointer"
                >
                  Explore Platform
                </button>
              </motion.div>
            )}
          </div>
        </div>

        {/* Product preview frame (Reveals smoothly after paragraph finishes typing + continuous floating) */}
        {paragraphFinished && (
          <motion.div
            initial={{ opacity: 0, y: 35, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.75, delay: reduce ? 0 : 0.15, ease: EASE }}
            className="relative mx-auto mt-14 max-w-5xl md:mt-20"
          >
            {/* Continuous floating wrapper */}
            <motion.div
              animate={reduce ? {} : { y: [0, -8, 0] }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="relative"
            >
              <div
                aria-hidden
                className="absolute -inset-x-8 -top-8 -bottom-6 rounded-[3rem] bg-gradient-to-b from-[#B8D5C0]/40 via-[#DDEBE0]/30 to-transparent blur-2xl pointer-events-none"
              />
              
              <div className="relative overflow-hidden rounded-[1.75rem] border border-[#D5E3D8] bg-white/95 backdrop-blur-md shadow-panel ring-1 ring-[#145C43]/5 transition-all duration-500 hover:shadow-[0_28px_80px_-20px_rgba(20,92,67,0.18)]">
                {/* Window bar chrome */}
                <div aria-hidden className="flex items-center justify-between border-b border-[#E5EAE5] bg-[#F8FAF6]/90 px-4 sm:px-6 py-3">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-[#E5EAE5] border border-[#D5E3D8]" />
                    <span className="h-3 w-3 rounded-full bg-[#E5EAE5] border border-[#D5E3D8]" />
                    <span className="h-3 w-3 rounded-full bg-[#B8D5C0] border border-[#B8D5C0]" />
                    <div className="ml-3 flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF6F0] border border-[#D5E3D8]/60">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#145C43]" />
                      <span className="text-[11px] font-mono text-[#52635A] truncate">leadlens.ai/intelligence-workspace</span>
                    </div>
                  </div>
                  <div className="hidden sm:flex items-center gap-1 text-[11px] font-medium text-[#7A887F]">
                    <Sparkles className="w-3.5 h-3.5 text-[#145C43]" /> Live Stream
                  </div>
                </div>

                <div className="overflow-hidden p-3 sm:p-5 md:p-6 bg-white">
                  <HeroVisual />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Stats Bar (Reveals smoothly after product visual) */}
        {paragraphFinished && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: reduce ? 0 : 0.35, ease: EASE }}
            className="mx-auto mt-6 max-w-5xl"
          >
            <dl className="grid grid-cols-2 overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-[#10251D] via-[#0B3D2E] to-[#145C43] shadow-panel ring-1 ring-[#0B3D2E] md:grid-cols-4 relative">
              <div aria-hidden className="absolute -top-16 -right-16 w-48 h-48 bg-[#B8D5C0]/15 rounded-full blur-2xl pointer-events-none" />
              <div aria-hidden className="absolute -bottom-16 -left-16 w-48 h-48 bg-[#145C43]/30 rounded-full blur-2xl pointer-events-none" />

              {HERO_STATS.map((stat, i) => (
                <div
                  key={stat.label}
                  className={[
                    'group relative flex flex-col-reverse items-center gap-2 border-white/10 px-4 py-7 text-center transition-all duration-300 hover:bg-white/[0.04] md:py-8',
                    i % 2 === 0 ? 'border-r' : '',
                    i < 2 ? 'border-b' : '',
                    'md:border-b-0 md:border-r md:last:border-r-0'
                  ].join(' ')}
                >
                  <dt className="max-w-[11rem] text-xs font-medium leading-snug text-[#DDEBE0]/75 sm:text-[0.82rem] group-hover:text-[#DDEBE0] transition-colors">
                    {stat.label}
                  </dt>
                  <dd
                    className={`text-3xl font-bold tabular-nums tracking-tight transition-transform duration-300 group-hover:scale-105 md:text-[2.25rem] ${
                      stat.accent ? 'text-[#DDEBE0]' : 'text-white'
                    }`}
                  >
                    <AnimatedNumber value={stat.value} />
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>
        )}
      </div>
    </section>
  );
}