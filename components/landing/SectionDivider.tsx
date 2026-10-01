import React from 'react';

interface SectionDividerProps {
  className?: string;
}

export default function SectionDivider({ className = '' }: SectionDividerProps) {
  return (
    <div
      className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7 md:py-10 ${className}`}
      aria-hidden="true"
    >
      <div className="relative flex items-center justify-center">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#D5E3D8]/80 to-transparent" />
      </div>
    </div>
  );
}
