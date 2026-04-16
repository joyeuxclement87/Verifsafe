'use client';

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-40">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-50 to-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 
            className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6"
            style={{ fontFamily: 'Oswald, sans-serif' }}
          >
            About VerifSafe
          </h1>
          
          <p className="text-xl text-[#E50914] font-semibold mb-8">
            Protecting lives and property through reliable fire safety solutions.
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed">
            VerifSafe is a Rwanda-based fire safety company dedicated to delivering high-quality equipment, professional services, and practical training to help individuals and organizations stay prepared and protected.
          </p>
        </div>
      </section>

      {/* Additional content area - can be extended */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Placeholder for future content */}
        </div>
      </section>
    </div>
  );
}
