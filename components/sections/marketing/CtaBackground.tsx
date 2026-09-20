'use client';

import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';

/*
 * Shared dark CTA background — red gradient treatment used on every
 * call-to-action across the site. Place inside a section that is
 * `relative overflow-hidden` with a `#1a2332` background so the whole
 * surface shares the same treatment: deep ink base, brand-red radial glow
 * with a gradient sweep, red-tinted engineering hairlines with gentle
 * parallax, blueprint grid, reference ticks, and hairline borders.
 */
const redGridStyle = {
  backgroundImage: `
    linear-gradient(rgba(229,57,53,0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(229,57,53,0.06) 1px, transparent 1px)
  `,
  backgroundSize: '60px 60px',
};

const redHairlineStyle = {
  backgroundImage: `
    repeating-linear-gradient(
      90deg,
      rgba(229,57,53,0.07) 0px,
      rgba(229,57,53,0.07) 1px,
      transparent 1px,
      transparent 33.333%
    )
  `,
};

export default function CtaBackground() {
  const reduceMotion = useReducedMotion();
  const layerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: layerRef,
    offset: ['start end', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <>
      {/* Base — deep ink surface */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{ backgroundColor: '#1a2332' }}
      />

      {/* Brand-red glow — energy behind the content */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 65% at 50% 30%, rgba(229,57,53,0.32) 0%, rgba(214,40,40,0.12) 45%, rgba(26,35,50,0) 75%)',
        }}
      />

      {/* Red gradient sweep toward the bottom — deepens the surface */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(229,57,53,0.10) 0%, rgba(26,35,50,0) 35%, rgba(26,35,50,0.65) 100%)',
        }}
      />

      {/* Subtle engineering line graphic — red-tinted vertical hairlines with gentle parallax */}
      <motion.div
        ref={layerRef}
        aria-hidden="true"
        className="absolute -inset-y-24 inset-x-0 pointer-events-none"
        style={reduceMotion ? undefined : { y: bgY }}
      >
        <div className="absolute inset-0" style={redHairlineStyle} />
      </motion.div>

      {/* Blueprint grid overlay — red tint */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={redGridStyle}
      />

      {/* Engineering reference ticks */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none font-mono text-base text-[#E53935]/20 select-none"
      >
        <span className="absolute left-4 sm:left-8 top-6">+</span>
        <span className="absolute right-4 sm:right-8 bottom-6">+</span>
      </div>

      {/* Top hairline border */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px"
        style={{ backgroundColor: 'rgba(229,57,53,0.35)' }}
      />

      {/* Bottom hairline border */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ backgroundColor: 'rgba(229,57,53,0.35)' }}
      />
    </>
  );
}