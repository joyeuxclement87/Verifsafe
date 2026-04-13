'use client';

export default function TopInfoBar() {
  return (
    <div className="fixed top-0 left-0 right-0 h-10 bg-[#D62828] flex items-center justify-center z-50">
      <div className="w-full max-w-5xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Location - Left */}
        <div className="flex items-center gap-1.5 text-white">
          <span className="text-sm">📍</span>
          <span className="text-xs sm:text-sm font-medium">Kigali, Rwanda</span>
        </div>

        {/* Phone - Right */}
        <a
          href="tel:+250788123456"
          className="text-white text-xs sm:text-sm font-medium hover:opacity-80 transition-opacity duration-200"
          style={{ fontFamily: 'Urbanist, sans-serif' }}
        >
          +250 788 123 456
        </a>
      </div>
    </div>
  );
}
