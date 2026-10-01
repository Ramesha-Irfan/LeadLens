'use client';

import React, { useState, forwardRef } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { motion } from 'motion/react';

interface PasswordInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string;
  error?: string;
  id: string;
}

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ label, error, id, className = '', ...props }, ref) => {
    const [visible, setVisible] = useState(false);

    return (
      <div className="flex flex-col gap-1">
        {label && (
          <label htmlFor={id} className="text-xs font-semibold text-[#10251D] tracking-wide">
            {label}
          </label>
        )}
        <div className="relative">
          <input
            id={id}
            ref={ref}
            type={visible ? 'text' : 'password'}
            className={`
              w-full px-3 py-2 pr-10 text-sm rounded-lg
              bg-white border transition-all duration-200
              text-[#10251D] placeholder:text-[#B0BCBA]
              focus:outline-none focus:ring-2
              ${error
                ? 'border-[#991B1B]/60 focus:border-[#991B1B] focus:ring-[#991B1B]/10'
                : 'border-[#D5E3D8] hover:border-[#B8D5C0] focus:border-[#145C43] focus:ring-[#145C43]/10'
              }
              ${className}
            `}
            {...props}
          />
          <button
            type="button"
            tabIndex={-1}
            onClick={() => setVisible((v) => !v)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#7A887F] hover:text-[#145C43] transition-colors p-0.5"
            aria-label={visible ? 'Hide password' : 'Show password'}
          >
            {visible ? (
              <EyeOff className="w-4 h-4" />
            ) : (
              <Eye className="w-4 h-4" />
            )}
          </button>
        </div>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[11px] text-[#991B1B] flex items-center gap-1"
          >
            <span className="inline-block w-1 h-1 rounded-full bg-[#991B1B]" />
            {error}
          </motion.p>
        )}
      </div>
    );
  }
);

PasswordInput.displayName = 'PasswordInput';
export default PasswordInput;
