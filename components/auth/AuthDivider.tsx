'use client';

import React from 'react';

export default function AuthDivider() {
  return (
    <div className="flex items-center gap-3 my-3">
      <div className="flex-1 h-px bg-[#E5EAE5]" />
      <span className="text-[10px] font-medium text-[#7A887F] uppercase tracking-wider whitespace-nowrap">
        or continue with email
      </span>
      <div className="flex-1 h-px bg-[#E5EAE5]" />
    </div>
  );
}
