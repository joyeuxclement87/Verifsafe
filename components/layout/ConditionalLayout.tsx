'use client';

import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { useState } from 'react';
import { ShieldCheck, ArrowLeft, AlertTriangle, X, InfoCircle } from 'tabler-icons-react';
import TopBar from './TopBar';
import MainNavigation from './MainNavigation';
import Footer from './Footer';
import PageLoader from './PageLoader';

export default function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isStudio = pathname.startsWith('/studio');
  const [dismissedWarning, setDismissedWarning] = useState(false);

  if (isStudio) {
    return (
      <div className="flex flex-col w-full min-h-screen m-0 p-0 overflow-hidden">
        {/* Custom Admin Top Bar */}
        <div className="bg-linear-to-r from-[#111111] via-[#4a0d0d] to-[#111111] text-white px-4 sm:px-8 py-4 sm:py-5 flex flex-wrap gap-4 items-center justify-between shrink-0 shadow-[0_4px_20px_rgba(0,0,0,0.5)] border-b border-[#E53935]/20 relative z-[10000]">
          <div className="flex items-center gap-4 sm:gap-6">
            <Image 
              src="/logo2.png" 
              alt="Verifsafe Logo" 
              width={160} 
              height={45} 
              className="object-contain drop-shadow-md hidden sm:block" 
              priority
            />
            <Image 
              src="/logo2.png" 
              alt="Verifsafe Logo" 
              width={120} 
              height={35} 
              className="object-contain drop-shadow-md sm:hidden" 
              priority
            />
            <div className="h-8 w-px bg-white/20 hidden sm:block" />
            <div className="flex items-center gap-2.5 opacity-90">
              <ShieldCheck size={22} className="text-[#ff6b6b]" />
              <span className="font-bold tracking-widest uppercase text-sm sm:text-base" style={{ fontFamily: 'Oswald, sans-serif' }}>
                Content Management
              </span>
              <span className="hidden lg:inline-block px-2.5 py-1 bg-black/40 rounded text-[11px] uppercase tracking-wider font-bold text-[#ff6b6b] border border-[#ff6b6b]/20" style={{ fontFamily: 'Noto Sans, sans-serif' }}>
                Admin Dashboard
              </span>
            </div>
          </div>
          <a href="/" className="text-xs sm:text-sm font-semibold bg-white/10 hover:bg-white/20 px-5 py-2 sm:py-2.5 rounded-full transition-all duration-300 flex items-center gap-2 border border-white/5 hover:border-white/20 hover:shadow-lg" style={{ fontFamily: 'Noto Sans, sans-serif' }}>
            <ArrowLeft size={16} />
            Back to Live Site
          </a>
        </div>

        {/* Warning / Disclaimer Banner */}
        {!dismissedWarning && (
          <div className="bg-amber-950/80 border-b border-amber-500/30 px-4 sm:px-8 py-3 flex items-start sm:items-center gap-3 justify-between relative z-[9999] backdrop-blur-sm shrink-0">
            <div className="flex items-start sm:items-center gap-3 flex-1 min-w-0">
              <div className="shrink-0 mt-0.5 sm:mt-0">
                <AlertTriangle size={18} className="text-amber-400" />
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 min-w-0">
                <span className="text-amber-300 font-bold text-xs uppercase tracking-widest shrink-0" style={{ fontFamily: 'Oswald, sans-serif' }}>
                  ⚠ Authorized Personnel Only
                </span>
                <span className="hidden sm:block w-px h-4 bg-amber-500/30 shrink-0" />
                <p className="text-amber-200/80 text-xs leading-relaxed" style={{ fontFamily: 'Noto Sans, sans-serif' }}>
                  Any changes made here will be <strong className="text-amber-300 font-semibold">immediately reflected on the live Verifsafe website</strong>. Please review all edits carefully before publishing. Unpublished drafts are safe.
                </p>
              </div>
              <div className="hidden lg:flex items-center gap-1.5 shrink-0 bg-amber-900/50 border border-amber-500/20 rounded-full px-3 py-1">
                <InfoCircle size={13} className="text-amber-400" />
                <span className="text-amber-300 text-[11px] font-medium" style={{ fontFamily: 'Noto Sans, sans-serif' }}>
                  Double-check before publishing
                </span>
              </div>
            </div>
            <button
              onClick={() => setDismissedWarning(true)}
              className="shrink-0 ml-2 p-1.5 text-amber-400/60 hover:text-amber-300 hover:bg-amber-500/10 rounded-full transition-all duration-200"
              title="Dismiss warning"
            >
              <X size={16} />
            </button>
          </div>
        )}
        
        {/* Sanity Studio Content */}
        <div className="flex-1 w-full h-full relative">
          {children}
        </div>
      </div>
    );
  }

  return (
    <>
      <PageLoader />
      <TopBar />
      <MainNavigation />
      <div className="pt-40 flex-1">
        {children}
      </div>
      <Footer />
    </>
  );
}

