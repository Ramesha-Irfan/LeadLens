'use client';

import React, { forwardRef } from 'react';
import { motion } from 'motion/react';

interface AuthInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  id: string;
}

const AuthInput = forwardRef<HTMLInputElement, AuthInputProps>(
  ({ label, error, id, className = '', ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1">
        <label
          htmlFor={id}
          className="text-xs font-semibold text-[#10251D] tracking-wide"
        >
          {label}
        </label>
        <input
          id={id}
          ref={ref}
          className={`
            w-full px-3 py-2 text-sm rounded-lg
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

AuthInput.displayName = 'AuthInput';
export default AuthInput;
