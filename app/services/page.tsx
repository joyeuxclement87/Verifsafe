'use client';

import Image from 'next/image';
import { Tools, Shield, Phone, Star } from 'tabler-icons-react';
import DeploymentWorkflow from '@/components/sections/DeploymentWorkflow';
import WhoWeServe from '@/components/sections/WhoWeServe';

export default function ServicesPage() {
  const services = [
    {
      image: '/service-1.png',
      title: 'Fire Equipment Supply',
      description: 'Providing certified fire safety equipment for reliable protection.',
      features: ['Extinguishers', 'Fire hoses', 'Safety signs', 'Emergency lighting']
    },
    {
      image: '/service-2.png',
      title: 'Installation Services',
      description: 'Professional installation of fire safety systems and equipment.',
      features: ['System setup', 'Safety testing', 'Compliance check', 'Documentation']
    },
    {
      image: '/service-3.png',
      title: 'Inspection & Testing',
      description: 'Ensuring fire protection equipment works properly and safely.',
      features: ['Regular inspections', 'Performance testing', 'Safety audits', 'Reports']
    },
    {
      image: '/service-4.png',
      title: 'Fire Extinguisher Refilling',
      description: 'Refilling and servicing extinguishers to keep them ready for use.',
      features: ['Pressure testing', 'Agent refilling', 'Seal replacement', 'Certification']
    },
    {
      image: '/service-5.png',
      title: 'Maintenance Services',
      description: 'Regular maintenance to keep fire protection systems reliable.',
      features: ['Preventive care', 'System updates', 'Emergency repairs', '24/7 support']
    },
    {
      image: '/service-6.png',
      title: 'Fire Safety Training & Emergency First Aid',
      description: 'Comprehensive training programs and first aid courses for emergency preparedness.',
      features: ['Fire safety training', 'Emergency response', 'First aid certification', 'Evacuation procedures']
    }
  ];

  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="relative w-full bg-linear-to-b from-red-900 via-red-800 to-red-900 py-20 sm:py-24 lg:py-32 mt-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-bounce" style={{ animationDelay: '1s' }} />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            {/* Section Label */}
            <div className="inline-block mb-4">
              <p
                className="text-[#E53935] text-sm sm:text-base font-bold tracking-widest uppercase px-4 py-2 bg-red-50 rounded-full flex items-center gap-2 justify-center mx-auto"
                style={{ fontFamily: 'Noto Sans, sans-serif' }}
              >
                <Star size={16} />
                What we offer
              </p>
            </div>

            {/* Main Heading */}
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight"
              style={{ fontFamily: 'Oswald, sans-serif' }}
            >
              Professional Fire Protection <span className="text-yellow-300">Services</span>
            </h1>

            {/* Description */}
            <p
              className="text-lg sm:text-xl text-red-100 max-w-3xl mx-auto font-normal leading-relaxed"
              style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
            >
              We provide fire safety services which ensure equipment and systems are installed, maintained, and ready when needed.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="relative w-full bg-linear-to-b from-white to-gray-50 py-20 sm:py-24 lg:py-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-20 right-10 w-40 h-40 bg-red-100/20 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-yellow-100/20 rounded-full blur-2xl animate-bounce" style={{ animationDelay: '1s' }} />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center mb-20">
            {/* Section Label */}
            <div className="inline-block mb-4">
              <p
                className="text-[#E53935] text-sm sm:text-base font-bold tracking-widest uppercase px-4 py-2 bg-red-50 rounded-full flex items-center gap-2"
                style={{ fontFamily: 'Noto Sans, sans-serif' }}
              >
                <Tools size={16} />
                Our expertise
              </p>
            </div>

            {/* Main Heading */}
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-4 leading-tight"
              style={{ fontFamily: 'Oswald, sans-serif' }}
            >
              What We <span className="text-[#E53935]">Do</span>
            </h2>

            {/* Subheading */}
            <p
              className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-normal leading-relaxed"
              style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
            >
              We deliver fire protection services which support businesses, institutions, and homes with reliable safety systems. From supply to maintenance, our services are designed to ensure continuous protection.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white/80 backdrop-blur-sm border border-gray-300 rounded-xl p-6 sm:p-8 overflow-hidden hover:border-red-400 hover:shadow-2xl hover:scale-105 transition-all duration-500 hover:bg-white"
              >
                {/* Image Container */}
                <div className="relative w-full aspect-video overflow-hidden rounded-lg shadow-md mb-6 group-hover:shadow-lg transition-all duration-300">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Title */}
                <h3
                  className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-300"
                  style={{ fontFamily: 'Oswald, sans-serif' }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className="text-gray-700 text-base font-normal leading-relaxed mb-4"
                  style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
                >
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full shrink-0" />
                      <span className="text-sm text-gray-600 font-normal" style={{ fontFamily: 'Noto Sans, sans-serif' }}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-red-500 to-red-600 rounded-b-xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Services Matter Section */}
      <section className="relative w-full bg-linear-to-b from-gray-50 to-white py-20 sm:py-24 lg:py-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-20 right-10 w-40 h-40 bg-red-100/20 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-yellow-100/20 rounded-full blur-2xl animate-bounce" style={{ animationDelay: '1s' }} />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center mb-16 sm:mb-20">
            {/* Section Label */}
            <div className="inline-block mb-4">
              <p
                className="text-[#E53935] text-sm sm:text-base font-bold tracking-widest uppercase px-4 py-2 bg-red-50 rounded-full flex items-center gap-2"
                style={{ fontFamily: 'Noto Sans, sans-serif' }}
              >
                <Shield size={16} />
                Why It Matters
              </p>
            </div>

            {/* Main Heading */}
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-4 leading-tight"
              style={{ fontFamily: 'Oswald, sans-serif' }}
            >
              Why Our Services <span className="text-[#E53935]">Matter</span>
            </h2>

            {/* Subheading */}
            <p
              className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-normal leading-relaxed mt-6"
              style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
            >
              Safety Is Not Optional
            </p>
          </div>

          {/* Content Card */}
          <div className="max-w-4xl mx-auto">
            <div className="relative group bg-white border border-gray-200 rounded-xl p-8 sm:p-12 hover:border-[#E53935] hover:shadow-2xl transition-all duration-300 overflow-hidden">
              
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-[#E53935] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="space-y-6">
                <p
                  className="text-lg sm:text-xl text-gray-700 leading-relaxed font-normal"
                  style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
                >
                  Fire incidents can happen at any time, and without proper preparation, the consequences can be severe.
                </p>
                
                <p
                  className="text-lg sm:text-xl text-gray-700 leading-relaxed font-normal"
                  style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
                >
                  Our services are designed not just to meet requirements, but to provide real protection—helping you prevent risks, respond effectively, and minimize damage.
                </p>
              </div>

              {/* Bottom Accent Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-[#E53935] to-transparent rounded-b-lg transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          </div>
        </div>
      </section>

      <DeploymentWorkflow />

      <WhoWeServe />

      {/* CTA Section */}
      <section className="w-full bg-linear-to-r from-gray-900 via-red-900 to-gray-900 py-20 sm:py-24 lg:py-32 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl" />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="text-center mb-16 sm:mb-20">
            {/* Section Label */}
            <div className="inline-block mb-4">
              <p
                className="text-yellow-400 text-sm sm:text-base font-bold tracking-widest uppercase px-4 py-2 bg-yellow-500/20 rounded-full flex items-center gap-2 justify-center mx-auto"
                style={{ fontFamily: 'Noto Sans, sans-serif' }}
              >
                <Phone size={16} />
                Call To Action
              </p>
            </div>

            {/* Main Heading */}
            <h2
              className="text-4xl sm:text-5xl lg:text-7xl font-black text-white mb-6 leading-tight"
              style={{ fontFamily: 'Oswald, sans-serif' }}
            >
              Get Started <span className="text-yellow-400">Today</span>
            </h2>

            {/* Description */}
            <p
              className="text-lg sm:text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed font-normal mb-8"
              style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
            >
              Whether you need equipment, installation, or training, VerifSafe is ready to support your fire safety needs.
            </p>

            <p
              className="text-xl sm:text-2xl text-yellow-400 font-bold max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: 'Oswald, sans-serif' }}
            >
              Take the first step toward a safer environment.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            {/* Primary Button */}
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-10 py-4 bg-linear-to-r from-[#FF4D4D] to-[#E53935] text-white font-bold text-lg rounded-lg transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/50 hover:scale-105 active:scale-95 shadow-lg inline-flex items-center gap-3 group"
              style={{ fontFamily: 'Noto Sans, sans-serif' }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Request a Service
              <svg className="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>

            {/* Secondary Button */}
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-10 py-4 bg-white/10 backdrop-blur-sm text-white font-bold text-lg rounded-lg border border-white/30 transition-all duration-300 hover:border-yellow-400 hover:bg-white/15 hover:shadow-xl active:scale-95 inline-flex items-center gap-3 group"
              style={{ fontFamily: 'Noto Sans, sans-serif', borderWidth: '1px' }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Our Team
              <svg className="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>

          {/* Bottom Text */}
          <div className="text-center">
            <p
              className="text-gray-300 text-sm"
              style={{ fontFamily: 'Noto Sans, sans-serif' }}
            >
              24/7 Support • Expert Consultation • Customized Solutions
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
