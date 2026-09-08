'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Flame } from 'tabler-icons-react';

export default function Animated404() {
  const reduceMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="relative w-52 h-52 sm:w-60 sm:h-60 flex items-center justify-center"
    >
      {/* Outer device ring */}
      <div className="absolute inset-0 rounded-full border border-white/10" />
      <div className="absolute inset-4 rounded-full border border-white/[0.06]" />
      <div className="absolute inset-8 rounded-full border border-white/[0.06]" />

      {/* Crosshair hairlines */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-white/[0.04]" />
        <div className="absolute top-1/2 left-0 right-0 h-px -translate-y-1/2 bg-white/[0.04]" />
      </div>

      {/* Rotating radar sweep */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            'conic-gradient(from 0deg, rgba(229,57,53,0.28) 0deg, rgba(229,57,53,0) 70deg)',
          WebkitMask:
            'radial-gradient(farthest-side, transparent calc(100% - 1px), #000 calc(100% - 1px))',
          mask: 'radial-gradient(farthest-side, transparent calc(100% - 1px), #000 calc(100% - 1px))',
        }}
        animate={reduceMotion ? undefined : { rotate: 360 }}
        transition={
          reduceMotion
            ? undefined
            : { repeat: Infinity, duration: 4.5, ease: 'linear' }
        }
      />

      {/* Sweep needle */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={reduceMotion ? undefined : { rotate: 360 }}
        transition={
          reduceMotion
            ? undefined
            : { repeat: Infinity, duration: 4.5, ease: 'linear' }
        }
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, transparent calc(50% - 1px), rgba(229,57,53,0.6) 50%, transparent calc(50% + 1px), transparent 100%)',
        }}
      />

      {/* Detection blip */}
      <motion.div
        className="absolute top-8 right-10 w-1.5 h-1.5 rounded-full bg-[#E53935]"
        animate={
          reduceMotion
            ? undefined
            : { opacity: [0.2, 1, 0.2], scale: [1, 1.4, 1] }
        }
        transition={
          reduceMotion
            ? undefined
            : { repeat: Infinity, duration: 2.4, ease: 'easeInOut' }
        }
      />
      <motion.div
        className="absolute bottom-10 left-9 w-1 h-1 rounded-full bg-[#E53935]/70"
        animate={
          reduceMotion
            ? undefined
            : { opacity: [0.1, 0.7, 0.1], scale: [1, 1.3, 1] }
        }
        transition={
          reduceMotion
            ? undefined
            : { repeat: Infinity, duration: 3.2, ease: 'easeInOut', delay: 1.1 }
        }
      />

      {/* Core: 404 + flame */}
      <div className="relative flex flex-col items-center gap-2 select-none">
        <span className="font-mono text-5xl sm:text-6xl font-bold tracking-tight text-[#F4F3EF]">
          404
        </span>
        <span className="flex items-center gap-1.5">
          <Flame
            size={14}
            strokeWidth={2}
            className={
              reduceMotion
                ? 'text-[#E53935]'
                : 'text-[#E53935] animate-pulse'
            }
          />
          <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/40">
            page not found
          </span>
        </span>
      </div>
    </div>
  );
}