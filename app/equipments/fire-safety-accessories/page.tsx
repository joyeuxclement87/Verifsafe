'use client';

import { FileText, Package, Shield, CircleCheck, Building } from 'tabler-icons-react';
import Link from 'next/link';

export default function FireSafetyAccessoriesPage() {
  const accessories = [
    'Fire blankets',
    'Safety gloves',
    'Alarm accessories',
    'Mounting brackets'
  ];

  const applications = [
    'Used alongside main fire safety equipment for complete protection'
  ];

  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="w-full h-96 bg-linear-to-r from-[#E53935] to-[#B71C1C] relative overflow-hidden pt-40 flex items-center justify-center">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="relative z-10 text-center">
          <div className="mb-6 flex justify-center">
            <Package size={64} className="text-white" strokeWidth={1.5} />
          </div>
          <h1 className="text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Oswald, sans-serif' }}>
            Fire Safety Accessories
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto px-4">
            Additional tools that support fire protection systems.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-8">
            <div className="shrink-0">
              <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-[#E53935]/10">
                <Shield size={32} className="text-[#E53935]" strokeWidth={1.5} />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Oswald, sans-serif' }}>
                🛡️ Overview
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Additional tools that support fire protection systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Includes */}
      <section className="w-full py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Oswald, sans-serif' }}>
              ⚙️ Includes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {accessories.map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-6 border-l-4 border-[#E53935] shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3">
                  <CircleCheck size={20} className="text-[#E53935] mt-1 shrink-0" strokeWidth={1.5} />
                  <p className="text-gray-900 font-semibold">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-8 mb-12">
            <div className="shrink-0">
              <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-[#E53935]/10">
                <Building size={32} className="text-[#E53935]" strokeWidth={1.5} />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'Oswald, sans-serif' }}>
                🏢 Use Cases
              </h2>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 border-l-4 border-[#E53935] shadow-md">
            <p className="text-gray-900 font-semibold text-center text-lg">{applications[0]}</p>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="w-full py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-8 mb-12">
            <div className="shrink-0">
              <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-[#E53935]/10">
                <CircleCheck size={32} className="text-[#E53935]" strokeWidth={1.5} />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'Oswald, sans-serif' }}>
                ✅ Key Benefits
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Complete fire safety solution',
              'Regulatory compliance support',
              'High-quality materials',
              'Wide selection to choose from',
              'Professional-grade products',
              'Easy to implement'
            ].map((benefit, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="shrink-0">
                  <CircleCheck size={24} className="text-[#E53935] mt-1" strokeWidth={1.5} />
                </div>
                <p className="text-lg text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 bg-linear-to-r from-[#FF4D4D] to-[#E53935] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Oswald, sans-serif' }}>
            📞 Complete Your Fire Safety System
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get the accessories you need for comprehensive fire protection.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#E53935] font-bold text-lg rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl uppercase tracking-wide"
            style={{ fontFamily: 'Oswald, sans-serif' }}
          >
            <FileText size={18} strokeWidth={1} />
            Request Quote
          </Link>
        </div>
      </section>

      {/* Related Products Section */}
      <section className="w-full py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12" style={{ fontFamily: 'Oswald, sans-serif' }}>
            Related Fire Safety Products
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link 
              href="/equipments/fire-extinguishers"
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border-t-4 border-[#E53935]"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 text-center mb-2">Fire Extinguishers</h3>
                <p className="text-gray-600 text-center">Portable firefighting equipment for quick response</p>
              </div>
            </Link>

            <Link 
              href="/equipments"
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border-t-4 border-[#E53935]"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 text-center mb-2">All Equipment</h3>
                <p className="text-gray-600 text-center">View complete range of fire safety solutions</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
