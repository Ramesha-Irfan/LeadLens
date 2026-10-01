'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Database,
  Globe,
  FileText,
  UserCheck,
  Share2,
  CheckCircle2,
  ShieldCheck,
  RotateCcw,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const WATERFALL_SOURCES = [
  { id: 'src-1', name: 'Primary Database', detail: 'Local cached index of 140M+ B2B entity graph', icon: Database },
  { id: 'src-2', name: 'Company Website', detail: 'Live DOM & schema.org metadata scraping', icon: Globe },
  { id: 'src-3', name: 'Public Business Sources', detail: 'Government company registries & corporate filings', icon: FileText },
  { id: 'src-4', name: 'Professional Profiles', detail: 'Cross-platform seniority and tenure mapping', icon: UserCheck },
  { id: 'src-5', name: 'Social/Company Sources', detail: 'Press releases, conference rosters & team pages', icon: Share2 },
  { id: 'src-6', name: 'Email Verification', detail: 'Direct SMTP handshake, DNS MX check, bounce-guard', icon: ShieldCheck }
];

interface FieldState {
  label: string;
  key: string;
  value: string;
  found: boolean;
  source: string;
}

export default function WaterfallEnrichmentSection() {
  const [isRunning, setIsRunning] = useState(false);
  const [currentStep, setCurrentStep] = useState(6); // default fully loaded

  const [fields, setFields] = useState<FieldState[]>([
    { label: 'Name', key: 'name', value: 'Sarah Khan', found: true, source: 'Primary Database' },
    { label: 'Company', key: 'company', value: 'NovaTech AI', found: true, source: 'Primary Database' },
    { label: 'Role', key: 'role', value: 'VP Sales', found: true, source: 'Company Website' },
    { label: 'Website', key: 'website', value: 'https://novatechai.com', found: true, source: 'Public Business Sources' },
    { label: 'LinkedIn', key: 'linkedin', value: 'linkedin.com/in/sarahkhan-sales', found: true, source: 'Professional Profiles' },
    { label: 'Email', key: 'email', value: 'sarah@novatechai.com', found: true, source: 'Email Verification (SMTP OK)' },
    { label: 'Phone', key: 'phone', value: '+44 20 7946 0912', found: true, source: 'Company Registry' }
  ]);

  const handleSimulateRecovery = () => {
    setIsRunning(true);
    setCurrentStep(0);

    // Reset fields to missing
    setFields((prev) =>
      prev.map((f, i) => (i < 2 ? { ...f, found: true } : { ...f, found: false }))
    );

    let step = 1;
    const interval = setInterval(() => {
      setCurrentStep(step);
      setFields((prev) =>
        prev.map((f, i) => (i <= step + 1 ? { ...f, found: true } : f))
      );
      step += 1;
      if (step > 5) {
        clearInterval(interval);
        setIsRunning(false);
      }
    }, 450);
  };

  return (
    <section id="section-waterfall" className="w-full py-20 md:py-28 bg-[#F8FAF6] border-b border-[#E5EAE5] relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15] font-bold tracking-[-0.02em] text-[#10251D] mb-4 [text-wrap:balance]">
            Waterfall Enrichment: The Data Recovery Pipeline
          </h2>
          <p className="text-[#52635A] text-base sm:text-lg leading-relaxed">
            When standard databases come up empty, LeadLens automatically cascades across multiple verified providers, real-time domain crawlers, and direct mail server handshakes.
          </p>
          <p className="text-xs text-[#7A887F] mt-3 italic">
            *Multiple enrichment sources are checked when available. Average 89.4% recovery rate on incomplete records.
          </p>
        </motion.div>

        {/* The Pipeline Simulation Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch max-w-6xl mx-auto">
          {/* Left: Cascading Waterfall Source Architecture */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 rounded-2xl border border-[#E5EAE5] bg-white p-6 sm:p-8 flex flex-col justify-between shadow-soft"
          >
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#E5EAE5] mb-6">
                <div>
                  <h3 className="text-sm font-bold text-[#10251D] uppercase tracking-[0.14em]">
                    Cascading Recovery Hierarchy
                  </h3>
                </div>
                <button
                  onClick={handleSimulateRecovery}
                  disabled={isRunning}
                  className="px-3.5 py-2 rounded-full text-xs font-semibold text-[#145C43] bg-[#EFF6F0] border border-[#D5E3D8] hover:bg-[#DDEBE0] flex items-center gap-1.5 transition-colors cursor-pointer disabled:opacity-50 shrink-0"
                >
                  <RotateCcw className={`w-3.5 h-3.5 ${isRunning ? 'animate-spin' : ''}`} />
                  <span>Simulate Cascade</span>
                </button>
              </div>

              {/* Source Cascade Items */}
              <div className="space-y-2.5 min-h-[380px]">
                <AnimatePresence>
                  {WATERFALL_SOURCES.map((src, idx) => {
                    const Icon = src.icon;
                    const isActive = currentStep >= idx;
                    const isCurrent = currentStep === idx && isRunning;

                    if (!isActive) return null;

                    return (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                        key={src.id}
                        className="p-3 rounded-xl border transition-all duration-300 flex items-center justify-between group hover:border-[#145C43]/40 hover:shadow-soft border-[#D5E3D8] bg-[#F8FAF6] text-[#10251D]"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-300 bg-[#DDEBE0] text-[#145C43] group-hover:bg-[#145C43] group-hover:text-white">
                            <Icon className="w-4 h-4 transition-transform duration-300 ease-out group-hover:scale-110 group-hover:rotate-6" />
                          </div>
                          <div>
                            <div className="text-xs font-semibold flex items-center gap-2">
                              <span className="group-hover:text-[#145C43] transition-colors">{src.name}</span>
                              {isCurrent && (
                                <span className="text-[10px] text-[#145C43] font-bold animate-pulse">Scanning...</span>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="shrink-0 text-xs font-mono">
                          <span className="text-[#145C43] font-semibold flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#145C43]" /> Checked
                          </span>
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#E5EAE5] text-xs text-[#52635A] flex items-center justify-between">
              <span>Failover Timeout: <strong className="text-[#10251D]">1.2s</strong></span>
              <span>Direct SMTP Handshake: <strong className="text-[#145C43] font-semibold">Active</strong></span>
            </div>
          </motion.div>

          {/* Right: Enriched Lead Output Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 rounded-2xl border border-[#E5EAE5] bg-white p-6 sm:p-8 flex flex-col justify-between shadow-soft"
          >
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#E5EAE5] mb-6">
                <div className="flex items-center gap-3">
                  <Image
                    src="/images/avatar-sarah.png"
                    alt="Sarah Khan"
                    width={80}
                    height={80}
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-[#DDEBE0] shrink-0"
                  />
                  <div>
                    <h3 className="text-sm font-bold text-[#10251D] uppercase tracking-[0.14em]">
                      Recovered Contact Profile
                    </h3>
                    <p className="text-xs text-[#7A887F] mt-1">Progressive field synthesis</p>
                  </div>
                </div>
                <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-[#EFF6F0] border border-[#D5E3D8] text-[#145C43] shrink-0">
                  Deliverability: 99.4%
                </span>
              </div>

              {/* Progressive Fields Checkmarks */}
              <div className="space-y-2.5">
                {fields.map((fld) => (
                  <div
                    key={fld.key}
                    className={`p-3 rounded-xl border transition-all flex items-center justify-between ${fld.found
                      ? 'border-[#E5EAE5] bg-[#F8FAF6] text-[#10251D]'
                      : 'border-[#E5EAE5] bg-white text-[#7A887F]/40'
                      }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${fld.found ? 'bg-[#DDEBE0] text-[#145C43]' : 'border border-[#D5E3D8] text-transparent'
                          }`}
                      >
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs font-medium text-[#7A887F] shrink-0">{fld.label}:</span>
                      <span className={`text-xs font-medium truncate ${fld.found ? 'text-[#10251D]' : 'italic text-[#7A887F]/60'}`}>
                        {fld.found ? fld.value : 'Searching cascaded sources...'}
                      </span>
                    </div>

                    {fld.found && (
                      <span className="text-[10px] text-[#145C43] font-mono hidden sm:inline font-medium shrink-0">
                        via {fld.source.split(' ')[0]}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-[#E5EAE5] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-[#52635A]">
                Confidence: <strong className="text-[#145C43] font-mono font-bold">99.8% Verified</strong>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
