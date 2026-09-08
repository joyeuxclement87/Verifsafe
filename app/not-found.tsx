import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, ArrowRight } from 'tabler-icons-react';
import Button from '@/components/ui/Button';
import Animated404 from '@/components/ui/Animated404';

export const metadata: Metadata = {
  title: {
    absolute: 'Page Not Found | VerifSafe',
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <main className="w-full">
      <section
        aria-labelledby="not-found-h1"
        className="relative w-full overflow-hidden"
        style={{ backgroundColor: '#0B1720' }}
      >
        <div className="absolute inset-0 bg-[#0B1720]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1720]/95 via-[#0B1720]/80 to-[#123B5D]/40" />

        {/* Technical grid overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28">
          <div className="max-w-2xl mx-auto flex flex-col items-center text-center">
            {/* Animated 404 — visual anchor */}
            <Animated404 />

            {/* Message */}
            <h1
              id="not-found-h1"
              className="text-section-heading text-[#F4F3EF] mt-8"
            >
              looks like you&apos;ve taken a wrong turn.
            </h1>

            <p className="text-body mt-4 max-w-md text-[#A7B0B5] leading-relaxed">
              The page you&apos;re looking for may have moved, been removed or the
              address may be incorrect.
            </p>

            {/* Actions */}
            <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4">
              <Button
                href="/"
                variant="primary"
                size="lg"
                icon={
                  <ArrowUpRight
                    size={18}
                    strokeWidth={2}
                    className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0 motion-reduce:group-hover:translate-y-0"
                  />
                }
                className="!rounded-lg !h-12 !px-7 !bg-[#E53935] hover:!bg-[#C62828] !shadow-[0_10px_24px_-10px_rgba(229,57,53,0.5)] font-semibold"
              >
                back to home
              </Button>

              <Link
                href="/equipments"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-[#A7B0B5] hover:text-[#F4F3EF] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E53935]"
              >
                explore equipment
                <span
                  aria-hidden="true"
                  className="inline-flex transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
                >
                  <ArrowRight size={16} strokeWidth={2} />
                </span>
              </Link>

              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-[#A7B0B5] hover:text-[#F4F3EF] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E53935]"
              >
                contact our team
                <span
                  aria-hidden="true"
                  className="inline-flex transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
                >
                  <ArrowRight size={16} strokeWidth={2} />
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom hairline */}
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ backgroundColor: 'rgba(167, 176, 181, 0.1)' }}
        />
      </section>
    </main>
  );
}