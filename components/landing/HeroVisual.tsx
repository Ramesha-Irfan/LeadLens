'use client';

import React from 'react';
import Image from 'next/image';
import { ShieldCheck, Globe2, CheckCircle2, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedNumber from './AnimatedNumber';

const PREVIEW_LEADS = [
    {
        name: 'Sarah Khan',
        role: 'VP Sales · NovaTech AI',
        email: 'sarah@novatechai.com',
        match: '94% Match',
        avatar: true,
        initials: 'SK'
    },
    {
        name: 'Ahmed Ali',
        role: 'CTO · CloudMatrix',
        email: 'ahmed.ali@cloudmatrix.io',
        match: null,
        avatar: false,
        initials: 'AA'
    },
    {
        name: 'Julian Chen',
        role: 'VP Engineering · Nexus Exchange',
        email: 'julian.c@nexusexchange.sg',
        match: null,
        avatar: false,
        initials: 'JC'
    }
];

const BARS = [42, 58, 46, 66, 74, 62, 88];

export default function HeroVisual() {
    return (
        <div className="relative mx-auto w-full max-w-[560px] lg:max-w-none">
            {/* Ambient backdrop: fine dot lattice */}
            <div aria-hidden className="absolute -inset-8 lg:-inset-12 pointer-events-none">
                <div className="absolute inset-0 bg-dots-fine fade-mask-radial opacity-40" />
            </div>

            {/* Main product preview card */}
            <div className="relative rounded-2xl border border-[#D5E3D8] bg-white shadow-panel overflow-hidden">
                {/* Window chrome */}
                <div className="flex items-center justify-between gap-3 px-4 sm:px-5 py-3 border-b border-[#E5EAE5] bg-[#F8FAF6]/80">
                    <div className="flex items-center gap-3 min-w-0">
                        <div className="flex items-center gap-1.5 shrink-0">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#D5E3D8]" />
                            <span className="w-2.5 h-2.5 rounded-full bg-[#D5E3D8]" />
                            <span className="w-2.5 h-2.5 rounded-full bg-[#B8D5C0]" />
                        </div>
                        <span className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#10251D] truncate">
                            <span className="relative flex h-1.5 w-1.5 shrink-0">
                                <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-[#145C43] opacity-70" />
                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#145C43]" />
                            </span>
                            Global Lead Intelligence Stream
                        </span>
                    </div>
                    <div className="w-10 shrink-0" />
                </div>

                <div className="grid grid-cols-5">
                    {/* Verified lead queue */}
                    <div className="col-span-3 p-4 sm:p-5 border-r border-[#E5EAE5]">
                        <div className="flex items-center justify-between mb-3">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-[#52635A]">
                                Qualified Leads
                            </span>
                            <span className="text-[11px] font-mono font-semibold text-[#145C43]">
                                <AnimatedNumber value="8,420" />
                            </span>
                        </div>
                        <div className="space-y-2.5">
                            {PREVIEW_LEADS.map((lead) => (
                                <div
                                    key={lead.email}
                                    className="group flex items-center gap-3 rounded-xl border border-[#E5EAE5] bg-[#F8FAF6]/70 px-3 py-2.5 transition-all duration-300 hover:border-[#145C43]/40 hover:bg-[#EFF6F0]/80 hover:translate-x-0.5 hover:shadow-soft"
                                >
                                    {lead.avatar ? (
                                        <Image
                                            src="/images/avatar-sarah.png"
                                            alt="Sarah Khan"
                                            width={72}
                                            height={72}
                                            className="w-8 h-8 rounded-full object-cover ring-2 ring-white shadow-soft shrink-0 transition-transform duration-300 group-hover:scale-105"
                                        />
                                    ) : (
                                        <span className="w-8 h-8 rounded-full bg-[#DDEBE0] text-[#145C43] text-[11px] font-bold flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-[#145C43] group-hover:text-white">
                                            {lead.initials}
                                        </span>
                                    )}
                                    <div className="min-w-0 flex-1">
                                        <p className="text-xs font-bold text-[#10251D] truncate group-hover:text-[#145C43] transition-colors">{lead.name}</p>
                                        <p className="text-[11px] text-[#52635A] truncate">{lead.role}</p>
                                    </div>
                                    {lead.match ? (
                                        <span className="text-[10px] font-mono font-bold text-[#145C43] bg-[#DDEBE0] border border-[#B8D5C0] rounded-md px-1.5 py-0.5 shrink-0 group-hover:bg-[#145C43] group-hover:text-white group-hover:border-[#145C43] transition-all duration-300">
                                            {lead.match}
                                        </span>
                                    ) : (
                                        <CheckCircle2 className="w-4 h-4 text-[#145C43] shrink-0 group-hover:scale-110 transition-transform duration-300" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Signal analytics column */}
                    <div className="col-span-2 p-4 sm:p-5 bg-[#F8FAF6]/60 flex flex-col gap-4">
                        <div>
                            <span className="text-[11px] font-bold uppercase tracking-wider text-[#52635A] block mb-2">
                                Hiring Signals
                            </span>
                            <div className="flex items-end gap-1.5 h-16">
                                {BARS.map((h, i) => (
                                    <div
                                        key={i}
                                        style={{ height: `${h}%` }}
                                        className={`flex-1 rounded-t-md transition-all duration-500 hover:opacity-90 ${i === BARS.length - 1 ? 'bg-[#145C43]' : 'bg-[#B8D5C0]/70 hover:bg-[#B8D5C0]'
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="rounded-xl border border-[#D5E3D8] bg-white p-3 group transition-all duration-300 hover:border-[#145C43]/40 hover:shadow-soft">
                            <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-[#145C43] mb-1">
                                <Sparkles className="w-3 h-3 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300" />
                                Waterfall Recovery
                            </div>
                            <p className="text-xl font-bold text-[#10251D] tabular-nums leading-none">
                                <AnimatedNumber value="89.4%" />
                            </p>
                            <div className="mt-2 h-1.5 rounded-full bg-[#EFF6F0] overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: '89.4%' }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                                    className="h-full rounded-full bg-gradient-to-r from-[#145C43] to-[#4E9C79]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating card: live verified match */}
            <motion.div
                whileHover={{ scale: 1.03, y: -2 }}
                transition={{ duration: 0.25 }}
                className="animate-float absolute -top-6 -right-3 sm:-right-8 w-[210px] rounded-xl border border-[#D5E3D8] bg-white/95 backdrop-blur-md p-3 shadow-lift hover:shadow-glow hover:border-[#145C43]/40 transition-all z-10"
            >
                <div className="flex items-center gap-2.5">
                    <Image
                        src="/images/avatar-sarah.png"
                        alt="Sarah Khan"
                        width={80}
                        height={80}
                        className="w-9 h-9 rounded-full object-cover ring-2 ring-[#DDEBE0] shrink-0"
                    />
                    <div className="min-w-0">
                        <p className="text-xs font-bold text-[#10251D] truncate">Sarah Khan</p>
                        <p className="text-[11px] text-[#52635A] truncate">VP Sales · NovaTech AI</p>
                    </div>
                </div>
                <div className="mt-2 pt-2 border-t border-[#E5EAE5] flex items-center justify-between">
                    <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#145C43]">
                        <ShieldCheck className="w-3 h-3" /> Verified
                    </span>
                    <span className="text-[10px] font-mono font-bold text-[#10251D] bg-[#EFF6F0] border border-[#D5E3D8] rounded px-1.5 py-0.5">
                        94% Match
                    </span>
                </div>
            </motion.div>

            {/* Floating chip: global coverage */}
            <motion.div
                whileHover={{ scale: 1.03, y: -2 }}
                transition={{ duration: 0.25 }}
                className="animate-float-delayed absolute -bottom-6 -left-4 sm:-left-10 rounded-xl border border-[#D5E3D8] bg-white/95 backdrop-blur-md px-3.5 py-2.5 shadow-lift hover:shadow-glow hover:border-[#145C43]/40 transition-all z-10 flex items-center gap-2.5"
            >
                <span className="w-8 h-8 rounded-lg bg-[#EFF6F0] border border-[#D5E3D8] text-[#145C43] flex items-center justify-center shrink-0">
                    <Globe2 className="w-4 h-4" />
                </span>
                <div>
                    <p className="text-sm font-bold text-[#10251D] tabular-nums leading-none">
                        <AnimatedNumber value="180+" />
                    </p>
                    <p className="text-[10px] font-medium text-[#52635A] mt-1">Global Countries Covered</p>
                </div>
            </motion.div>
        </div>
    );
}
