'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const SCAN_DURATION  = 0.8;
const SCAN_COUNT     = 3;
const SCANS_TOTAL_MS = SCAN_DURATION * SCAN_COUNT * 1000; // 2400ms

const MESSAGES = [
  'Securing your spaces',
  'Protecting lives',
  'Emergency systems ready',
];

export default function PageLoader() {
  const [scanPass, setScanPass]       = useState(0);
  const [showSecured, setShowSecured] = useState(false);
  const [phase, setPhase]             = useState<'scan' | 'fadeout' | 'done'>('scan');

  useEffect(() => {
    const scanTick = setInterval(() => {
      setScanPass(p => {
        if (p + 1 >= SCAN_COUNT) { clearInterval(scanTick); return SCAN_COUNT; }
        return p + 1;
      });
    }, SCAN_DURATION * 1000);

    const t1 = setTimeout(() => setShowSecured(true), SCANS_TOTAL_MS + 250);
    const t2 = setTimeout(() => setPhase('fadeout'),  SCANS_TOTAL_MS + 1100);
    const t3 = setTimeout(() => setPhase('done'),     SCANS_TOTAL_MS + 1650);

    return () => {
      clearInterval(scanTick);
      clearTimeout(t1); clearTimeout(t2); clearTimeout(t3);
    };
  }, []);

  if (phase === 'done') return null;

  return (
    <>
      <style>{`
        @keyframes scan-line {
          from { transform: translateY(-100%); }
          to   { transform: translateY(260px); }
        }
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0);   }
        }
        @keyframes bar-grow {
          from { width: 0; }
          to   { width: 100%; }
        }
      `}</style>

      <div
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gray-950"
        style={{ transition: 'opacity 0.5s ease', opacity: phase === 'fadeout' ? 0 : 1, pointerEvents: phase === 'fadeout' ? 'none' : 'all' }}
      >
        {/* ── Centre group ── */}
        <div className="relative flex flex-col items-center" style={{ width: 280 }}>

          {/* Scan line — clips within this container */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 10 }}>
            {scanPass < SCAN_COUNT && (
              <div
                key={scanPass}
                className="absolute left-0 right-0"
                style={{
                  height: '1px',
                  background: 'linear-gradient(90deg, transparent, #E53935 40%, #E53935 60%, transparent)',
                  opacity: 0.7,
                  animation: `scan-line ${SCAN_DURATION}s ease-in-out forwards`,
                }}
              />
            )}
          </div>

          {/* Logo */}
          <div className="mb-8">
            <Image
              src="/logo.png"
              alt="Verifsafe"
              width={160}
              height={60}
              className="object-contain"
              priority
            />
          </div>

          {/* Message lines */}
          <div className="flex flex-col gap-3 w-full mb-8">
            {MESSAGES.map((msg, i) => (
              <div key={i} className="flex items-center gap-3">
                {/* Dot */}
                <div
                  className="w-1 h-1 rounded-full shrink-0 transition-all duration-400"
                  style={{ background: scanPass > i ? '#E53935' : 'rgba(229,57,53,0.2)' }}
                />
                {/* Text */}
                <span
                  className="text-sm transition-all duration-400"
                  style={{
                    fontFamily: 'Noto Sans, sans-serif',
                    color:   scanPass > i ? '#D1D5DB' : '#374151',
                    opacity: scanPass > i ? 1 : 0.4,
                    animation: scanPass > i ? 'fade-up 0.35s ease-out forwards' : 'none',
                  }}
                >
                  {msg}
                </span>
              </div>
            ))}
          </div>

          {/* Progress bar */}
          <div className="w-full h-px bg-white/5 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#E53935] rounded-full transition-all duration-700 ease-out"
              style={{ width: `${(scanPass / SCAN_COUNT) * 100}%` }}
            />
          </div>

          {/* Secured line */}
          <div className="h-7 mt-5 flex items-center">
            {showSecured && (
              <span
                className="text-[11px] tracking-[0.2em] uppercase text-[#E53935] flex items-center gap-2"
                style={{ fontFamily: 'Noto Sans, sans-serif', animation: 'fade-up 0.4s ease-out forwards' }}
              >
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M1.5 5L4 7.5L8.5 2.5" stroke="#E53935" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                System Secured
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
