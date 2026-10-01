'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface AnimatedNumberProps {
  value: string;
  className?: string;
  duration?: number;
}

export default function AnimatedNumber({
  value,
  className = '',
  duration = 1.6
}: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const [displayValue, setDisplayValue] = useState<string>(value);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;

    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplayValue(value);
      hasAnimated.current = true;
      return;
    }

    // Match leading non-digits, the number (integers or decimals, possibly with commas), and trailing characters
    const match = value.match(/^([^0-9.]*)([0-9,.]+)(.*)$/);
    if (!match) {
      setDisplayValue(value);
      return;
    }

    const prefix = match[1] || '';
    const rawNumStr = match[2].replace(/,/g, '');
    const suffix = match[3] || '';
    const targetNum = parseFloat(rawNumStr);

    if (isNaN(targetNum)) {
      setDisplayValue(value);
      return;
    }

    const hasComma = match[2].includes(',');
    const decimals = rawNumStr.includes('.') ? rawNumStr.split('.')[1].length : 0;

    hasAnimated.current = true;
    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

      // Smooth ease-out cubic curve
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const current = targetNum * easedProgress;

      let formattedNumber: string;
      if (decimals > 0) {
        formattedNumber = current.toFixed(decimals);
      } else {
        formattedNumber = Math.round(current).toString();
      }

      if (hasComma) {
        const parts = formattedNumber.split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        formattedNumber = parts.join('.');
      }

      setDisplayValue(`${prefix}${formattedNumber}${suffix}`);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  );
}
