'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Globe, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

export default function LandingFooter() {
    return (
        <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border-t border-[#145C43] bg-[#0B3D2E] text-white py-14 md:py-16 transition-colors relative overflow-hidden"
        >
            {/* Ambient brand glow */}
            <div aria-hidden className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-40 left-1/4 w-[520px] h-[320px] bg-[#145C43]/40 blur-3xl rounded-full" />
                <div className="absolute bottom-0 translate-y-32 right-1/5 w-[420px] h-[280px] bg-[#145C43]/30 blur-3xl rounded-full" />
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[minmax(0,2fr)_repeat(3,minmax(0,1fr))] lg:gap-10 mb-14">
                    {/* Col 1: Wordmark & statement */}
                    <div className="space-y-6 lg:pr-8">
                        <Image
                            src="/leadlens-logo-cropped.png"
                            alt="LeadLens Logo"
                            width={140}
                            height={40}
                            className="object-contain h-10 sm:h-12 w-auto object-left drop-shadow-[0_8px_20px_rgba(0,0,0,0.2)]"
                        />
                        <p className="text-sm text-[#DDEBE0]/85 max-w-sm leading-relaxed">
                            The AI-powered global B2B lead intelligence and outbound sales platform. Find verified decision-makers, enrich missing contact data, and automate personalized pipeline generation.
                        </p>
                        <div className="flex flex-wrap items-center gap-3 text-xs text-[#DDEBE0]">
                            <span className="flex items-center gap-1.5 text-[#DDEBE0]">
                                <Shield className="w-3.5 h-3.5 text-[#B8D5C0]" /> GDPR & CCPA Compliant
                            </span>
                            <span className="text-[#145C43]">·</span>
                            <span className="flex items-center gap-1.5">
                                <Globe className="w-3.5 h-3.5 text-[#B8D5C0]" /> 180+ Countries
                            </span>
                        </div>
                    </div>

                    {/* Col 2: Platform */}
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-white/90 mb-4">
                            Platform
                        </h4>
                        <ul className="space-y-2.5 text-sm text-[#B8D5C0]">
                            <li>
                                <Link href="/features" className="hover:text-white transition-colors">
                                    Global Lead Discovery
                                </Link>
                            </li>
                            <li>
                                <Link href="/features" className="hover:text-white transition-colors">
                                    Waterfall Data Recovery
                                </Link>
                            </li>
                            <li>
                                <Link href="/features" className="hover:text-white transition-colors">
                                    Campaign Orchestration
                                </Link>
                            </li>
                            <li>
                                <Link href="/features" className="hover:text-white transition-colors">
                                    AI Email Studio
                                </Link>
                            </li>
                            <li>
                                <Link href="/features" className="hover:text-white transition-colors">
                                    Sales Reply Inbox
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Col 3: Solutions */}
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-white/90 mb-4">
                            Solutions
                        </h4>
                        <ul className="space-y-2.5 text-sm text-[#B8D5C0]">
                            <li>
                                <Link href="/features" className="hover:text-white transition-colors">
                                    SaaS Revenue Teams
                                </Link>
                            </li>
                            <li>
                                <Link href="/features" className="hover:text-white transition-colors">
                                    Recruiters & Staffing
                                </Link>
                            </li>
                            <li>
                                <Link href="/features" className="hover:text-white transition-colors">
                                    B2B Growth Agencies
                                </Link>
                            </li>
                            <li>
                                <Link href="/features" className="hover:text-white transition-colors">
                                    Founders & Consultants
                                </Link>
                            </li>
                            <li>
                                <Link href="/features" className="hover:text-white transition-colors">
                                    Enterprise Expansion
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Col 4: Resources & Compliance */}
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-white/90 mb-4">
                            Resources
                        </h4>
                        <ul className="space-y-2.5 text-sm text-[#B8D5C0]">
                            <li>
                                <Link href="/features" className="hover:text-white transition-colors">
                                    Deliverability Benchmarks
                                </Link>
                            </li>
                            <li>
                                <Link href="/features" className="hover:text-white transition-colors">
                                    API & Webhook Docs
                                </Link>
                            </li>
                            <li>
                                <Link href="/features" className="hover:text-white transition-colors">
                                    Data Security & 2FA
                                </Link>
                            </li>
                            <li>
                                <Link href="/pricing" className="hover:text-white transition-colors">
                                    Enterprise Quotas
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom copyright line */}
                <div className="pt-8 border-t border-[#145C43]/60 flex flex-col sm:flex-row items-center justify-between text-xs text-[#B8D5C0]/90 gap-4">
                    <p>© {new Date().getFullYear()} LeadLens Technologies Inc. All rights reserved.</p>
                    <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
                        <span>Privacy Policy</span>
                        <span>Terms of Service</span>
                        <span>Security Safeguards</span>
                        <span>System Uptime 99.98%</span>
                    </div>
                </div>
            </div>
        </motion.footer>
    );
}
