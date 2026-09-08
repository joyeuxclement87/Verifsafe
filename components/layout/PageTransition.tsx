'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { motion, useReducedMotion } from 'framer-motion';

const LEAVE_MS = 220;
const ENTER_MS = 260;
const MAX_COVER_MS = 3000;

type Phase = 'none' | 'fade-in' | 'cover' | 'fade-out';

/**
 * Page-to-page transitions.
 *
 * A capture-phase listener on `document` intercepts primary clicks on internal
 * navigation links. Because it runs before Next.js's delegated Link handler,
 * calling native `preventDefault()` cancels Link's own navigation while React
 * onClick handlers (menu close, dropdown reset, etc.) still execute.
 *
 * The current page fades into the brand ink colour (~220ms), navigation runs
 * behind the cover, and once the new route renders the cover fades away to
 * reveal it (~260ms).
 *
 * External links, mailto/tel/sms, downloads, new-tab targets and same-route
 * hash links are left completely untouched. Browser back/forward and reduced
 * motion are intentionally instant.
 */
export default function PageTransition() {
  const reduceMotion = useReducedMotion();
  const router = useRouter();
  const pathname = usePathname();
  const [phase, setPhase] = useState<Phase>('none');

  const pendingHref = useRef<string | null>(null);
  const pathnameRef = useRef(pathname);
  const prevPathname = useRef<string | null>(null);
  const phaseRef = useRef<Phase>('none');

  // Refs are only written inside effects / handlers
  useEffect(() => {
    phaseRef.current = phase;
  }, [phase]);

  useEffect(() => {
    pathnameRef.current = pathname;
  }, [pathname]);

  // Route commit → reveal the new page (never fires on the initial mount)
  useEffect(() => {
    if (prevPathname.current === null) {
      prevPathname.current = pathname;
      return;
    }

    const prev = prevPathname.current;
    prevPathname.current = pathname;

    if (prev !== pathname && phaseRef.current === 'cover') {
      setTimeout(() => setPhase('fade-out'), 0);
    }
  }, [pathname]);

  // Intercept internal navigation (capture phase → before React/Next handlers)
  useEffect(() => {
    if (reduceMotion) return;

    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented) return;
      if (event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }

      const target = event.target as Element | null;
      const anchor = target?.closest?.('a[href]');
      if (!anchor) return;

      const href = anchor.getAttribute('href') ?? '';

      if (
        href.startsWith('#') ||
        href.startsWith('http://') ||
        href.startsWith('https://') ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:') ||
        href.startsWith('sms:') ||
        href.startsWith('javascript:') ||
        href.startsWith('data:')
      ) {
        return;
      }

      if (anchor.hasAttribute('download')) return;

      const anchorTarget = anchor.getAttribute('target');
      if (anchorTarget && anchorTarget !== '_self') return;

      const path = href.split(/[?#]/)[0];
      if (!path.startsWith('/')) return;

      // Same-route link (e.g. hash scroll) — leave it to the default handler
      if (pathnameRef.current === path) return;

      // Cancel Link's synchronous navigation; run our transition instead
      event.preventDefault();
      pendingHref.current = href;
      setPhase('fade-in');
    };

    // Capture phase ensures this runs before Next.js's delegated Link handler
    document.addEventListener('click', onClick, true);
    return () => {
      document.removeEventListener('click', onClick, true);
      pendingHref.current = null;
    };
  }, [reduceMotion]);

  // Watchdog — never leave a permanent full-screen overlay: if the route has
  // not committed within MAX_COVER_MS, force a real navigation.
  useEffect(() => {
    if (phase !== 'cover') return;

    const guard = setTimeout(() => {
      if (phaseRef.current === 'cover') {
        const href = pendingHref.current;
        pendingHref.current = null;
        if (href) {
          window.location.assign(href);
        }
      }
    }, MAX_COVER_MS);

    return () => clearTimeout(guard);
  }, [phase]);

  const handleComplete = () => {
    const current = phaseRef.current;

    if (current === 'fade-in') {
      setPhase('cover');
      const href = pendingHref.current;
      if (href) {
        router.push(href);
      }
    } else if (current === 'fade-out') {
      pendingHref.current = null;
      setPhase('none');
    }
  };

  return (
    <>
      {phase !== 'none' && (
        <motion.div
          aria-hidden="true"
          className="fixed inset-0 z-[9500] bg-ink pointer-events-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: phase === 'fade-out' ? 0 : 1 }}
          transition={{
            duration:
              phase === 'fade-out' ? ENTER_MS / 1000 : LEAVE_MS / 1000,
            ease: 'easeInOut',
          }}
          onAnimationComplete={handleComplete}
        />
      )}
    </>
  );
}