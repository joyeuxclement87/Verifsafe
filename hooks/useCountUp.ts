'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView, animate } from 'framer-motion';

interface UseCountUpOptions {
  target: number;
  duration?: number;
  delay?: number;
}

/**
 * Counts up from 0 to `target` when the returned ref scrolls into view.
 * Returns a ref to attach to a DOM element and the current display value.
 */
export function useCountUp({ target, duration = 2, delay = 0 }: UseCountUpOptions) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const timeout = setTimeout(() => {
      const controls = animate(0, target, {
        duration,
        ease: [0.16, 1, 0.3, 1],
        onUpdate: (latest) => {
          setDisplayValue(Math.round(latest));
        },
      });
      return () => controls.stop();
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [isInView, target, duration, delay]);

  return { ref, displayValue };
}
