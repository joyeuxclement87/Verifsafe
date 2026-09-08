'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useReducedMotion } from 'framer-motion';

/*
 * Session mechanism for the initial loader.
 *
 * loaderSeen lives at module scope: it survives client-side route changes
 * (so internal navigation never re-shows the loader) but resets on any full
 * page load (refresh, new tab, direct URL), which is exactly when a branded
 * intro is appropriate.
 */
let loaderSeen = false;

const FILL_MS = 900;
const FADE_MS = 450;
const MAX_MS = 2400;

export default function PageLoader() {
  const reduceMotion = useReducedMotion();
  const [visible, setVisible] = useState(() => {
    if (typeof window === 'undefined') return true;
    return !loaderSeen;
  });
  const [fading, setFading] = useState(false);

  useEffect(() => {
    loaderSeen = true;

    if (!visible || reduceMotion) return;

    const fade = setTimeout(() => setFading(true), FILL_MS);
    const done = setTimeout(() => setVisible(false), FILL_MS + FADE_MS);
    const guard = setTimeout(() => setVisible(false), MAX_MS);

    return () => {
      clearTimeout(fade);
      clearTimeout(done);
      clearTimeout(guard);
    };
  }, [reduceMotion, visible]);

  if (!visible) return null;
  if (reduceMotion) return null;

  return (
    <>
      <style>{`
        @keyframes vf-fill {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        @keyframes vf-sweep {
          0%   { transform: translateX(-140%); }
          100% { transform: translateX(420%); }
        }
      `}</style>

      <div
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-ink"
        style={{
          transition: 'opacity 0.45s ease',
          opacity: fading ? 0 : 1,
          pointerEvents: fading ? 'none' : 'auto',
        }}
      >
        {/* Brand mark */}
        <div className="hero-enter">
          <Image
            src="/logo.png"
            alt="VerifSafe"
            width={210}
            height={72}
            priority
            className="object-contain"
          />
        </div>

        {/* Progress line — red accent reveals left to right */}
        <div
          className="relative mt-9 w-56 sm:w-64 h-px overflow-hidden bg-white/10"
          role="progressbar"
          aria-label="Loading VerifSafe"
        >
          <div
            className="absolute inset-0 origin-left bg-[#D62828]"
            style={{ animation: `vf-fill ${FILL_MS}ms ease-out forwards` }}
          />
          <div
            className="absolute top-0 bottom-0 w-1/5 bg-linear-to-r from-transparent via-white/50 to-transparent"
            style={{ animation: `vf-sweep ${FILL_MS}ms ease-in-out forwards` }}
          />
        </div>
      </div>
    </>
  );
}