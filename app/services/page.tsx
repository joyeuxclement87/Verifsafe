'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Tools, Shield, Star, Send, FileText, Check } from 'tabler-icons-react';
import DeploymentWorkflow from '@/components/sections/DeploymentWorkflow';
import WhoWeServe from '@/components/sections/WhoWeServe';

export default function ServicesPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add form submission logic here
  };

  const services = [
    {
      image: '/service-1.png',
      title: 'Fire Equipment Supply',
      description: 'Providing certified fire safety equipment for reliable protection in different environments.',
      features: ['Extinguishers', 'Alarms', 'Hose reels', 'Safety accessories']
    },
    {
      image: '/service-2.png',
      title: 'Installation Services',
      description: 'Professional installation of fire protection systems to ensure proper setup and performance.',
      features: ['Fire alarm systems', 'Detection devices', 'Safety equipment']
    },
    {
      image: '/service-3.png',
      title: 'Inspection & Testing',
      description: 'Routine inspection and testing to ensure fire safety systems function correctly and meet required standards.',
      features: ['Businesses', 'Offices', 'Compliance checks']
    },
    {
      image: '/service-4.png',
      title: 'Fire Extinguisher Refilling',
      description: 'Refilling and servicing extinguishers to keep them ready and effective for emergency use.',
      features: ['Quick service', 'Reliable', 'Essential for safety']
    },
    {
      image: '/service-5.png',
      title: 'Maintenance Services',
      description: 'Ongoing maintenance to ensure fire protection systems remain reliable over time.',
      features: ['Prevents failure', 'Regular servicing', 'System reliability']
    },
    {
      image: '/service-6.png',
      title: 'Fire Safety Awareness Training',
      description: 'Training programs which educate individuals and teams on fire prevention, emergency response, and proper use of fire safety equipment.',
      features: ['Staff training', 'Organizations', 'Workplaces']
    },
    {
      image: '/service-7.png',
      title: 'First Aid Training',
      description: 'Basic first aid training which equips individuals with the skills to respond quickly and effectively during emergencies.',
      features: ['Emergency response', 'Workplace safety', 'Life-saving skills']
    }
  ];

  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="relative w-full h-96 sm:h-125 lg:h-150 flex items-center justify-center overflow-hidden mt-0">
        {/* Background Image - Static */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("/hero-3.webp")`,
            backgroundAttachment: 'fixed',
          }}
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-black/85 via-black/90 to-black/95" />

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            {/* Section Label */}
            <div className="inline-block mb-4">
              <p
                className="text-white text-xs sm:text-sm font-bold tracking-widest uppercase px-4 py-2 bg-[#E53935]/10 rounded-full border border-[#E53935]/40 flex items-center gap-2 justify-center"
                style={{ fontFamily: 'Noto Sans, sans-serif' }}
              >
                <Star size={16} />
                What we offer
              </p>
            </div>

            {/* Main Heading */}
            <h1
              className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-white mb-3 sm:mb-5 leading-tight uppercase tracking-wider"
              style={{ fontFamily: 'Oswald, sans-serif' }}
            >
              Professional Fire Protection <span className="text-[#E53935]">Services</span>
            </h1>

            {/* Subheading */}
            <p
              className="text-sm sm:text-base lg:text-base text-gray-200 mb-5 sm:mb-7 max-w-2xl leading-relaxed font-normal"
              style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
            >
              We provide fire safety services which ensure equipment and systems are installed, maintained, and ready when needed.
            </p>

            {/* CTA Button */}
            <div className="flex justify-center">
              <button
                onClick={() => {
                  const element = document.getElementById('project-form');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="px-8 py-4 bg-linear-to-r from-[#FF4D4D] to-[#E53935] text-white font-bold text-lg rounded-lg transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/50 hover:scale-105 active:scale-95 shadow-lg inline-flex items-center gap-3 group"
                style={{ fontFamily: 'Noto Sans, sans-serif' }}
              >
                Request a Quote
                <svg className="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment & Systems Section */}
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
                Equipment & Systems
              </p>
            </div>

            {/* Main Heading */}
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-4 leading-tight"
              style={{ fontFamily: 'Oswald, sans-serif' }}
            >
              Supply, Installation & <span className="text-[#E53935]">Maintenance</span>
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
            {services.slice(0, 5).map((service, index) => (
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

                {/* View Catalog Button - Only for Fire Equipment Supply */}
                {service.title === 'Fire Equipment Supply' && (
                  <div className="mt-6">
                    <button
                      onClick={() => {
                        // Scroll to equipment section or open catalog
                        const element = document.getElementById('equipment');
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="w-full px-6 py-3 bg-transparent text-[#E53935] hover:text-[#D32F2F] font-bold text-sm rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 inline-flex items-center justify-center gap-2 group"
                      style={{ fontFamily: 'Noto Sans, sans-serif' }}
                    >
                      View Equipments
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </button>
                  </div>
                )}

                {/* Request a Quote Button - For all services except Fire Equipment Supply */}
                {service.title !== 'Fire Equipment Supply' && (
                  <div className="mt-6">
                    <button
                      onClick={() => {
                        const element = document.getElementById('project-form');
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="w-full px-6 py-3 bg-transparent text-[#E53935] hover:text-[#D32F2F] font-bold text-sm rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 inline-flex items-center justify-center gap-2 group"
                      style={{ fontFamily: 'Noto Sans, sans-serif' }}
                    >
                      Request a Quote
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </button>
                  </div>
                )}

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-red-500 to-red-600 rounded-b-xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training & Safety Section */}
      <section className="relative w-full bg-linear-to-b from-gray-50 to-white py-20 sm:py-24 lg:py-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-20 left-10 w-40 h-40 bg-blue-100/20 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-green-100/20 rounded-full blur-2xl animate-bounce" style={{ animationDelay: '1s' }} />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center mb-20">
            {/* Section Label */}
            <div className="inline-block mb-4">
              <p
                className="text-[#E53935] text-sm sm:text-base font-bold tracking-widest uppercase px-4 py-2 bg-red-50 rounded-full flex items-center gap-2"
                style={{ fontFamily: 'Noto Sans, sans-serif' }}
              >
                <Shield size={16} />
                Training & Safety
              </p>
            </div>

            {/* Main Heading */}
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-4 leading-tight"
              style={{ fontFamily: 'Oswald, sans-serif' }}
            >
              Fire Awareness & <span className="text-[#E53935]">First Aid Training</span>
            </h2>

            {/* Subheading */}
            <p
              className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-normal leading-relaxed"
              style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
            >
              Comprehensive training programs designed to educate and equip individuals with essential fire safety and emergency response skills.
            </p>
          </div>

          {/* Training Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 max-w-4xl mx-auto">
            {services.slice(5, 7).map((service, index) => (
              <div
                key={index + 5}
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

                {/* Request a Quote Button - For training services */}
                <div className="mt-6">
                  <button
                    onClick={() => {
                      const element = document.getElementById('project-form');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="w-full px-6 py-3 bg-transparent text-[#E53935] hover:text-[#D32F2F] font-bold text-sm rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 inline-flex items-center justify-center gap-2 group"
                    style={{ fontFamily: 'Noto Sans, sans-serif' }}
                  >
                    Request a Quote
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
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
        <div className="absolute top-20 left-10 w-40 h-40 bg-red-100/20 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-blue-100/20 rounded-full blur-2xl animate-bounce" style={{ animationDelay: '1s' }} />

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
              className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-normal leading-relaxed"
              style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
            >
              Safety Is Not Optional
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left Content */}
            <div className="space-y-8">
              {/* Key Points */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 bg-[#E53935]/10 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#E53935]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Oswald, sans-serif' }}>
                      Prevention First
                    </h3>
                    <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'Noto Sans, sans-serif' }}>
                      Fire incidents can happen at any time, and without proper preparation, the consequences can be severe.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 bg-[#E53935]/10 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#E53935]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Oswald, sans-serif' }}>
                      Real Protection
                    </h3>
                    <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'Noto Sans, sans-serif' }}>
                      Our services are designed not just to meet requirements, but to provide real protection.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 bg-[#E53935]/10 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#E53935]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Oswald, sans-serif' }}>
                      Rapid Response
                    </h3>
                    <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'Noto Sans, sans-serif' }}>
                      Helping you prevent risks, respond effectively, and minimize damage when emergencies occur.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Visual Element */}
            <div className="relative">
              <div className="relative group bg-white border border-gray-200 rounded-2xl p-8 hover:border-[#E53935] hover:shadow-2xl transition-all duration-500 overflow-hidden">

                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgba(229, 57, 53, 0.3) 1px, transparent 0)`,
                    backgroundSize: '30px 30px'
                  }} />
                </div>

                {/* Content */}
                <div className="relative z-10 text-center space-y-6">
                  <div className="w-20 h-20 bg-[#E53935]/10 rounded-full flex items-center justify-center mx-auto">
                    <Shield size={32} className="text-[#E53935]" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Oswald, sans-serif' }}>
                      Your Safety Partner
                    </h3>
                    <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'Noto Sans, sans-serif' }}>
                      From equipment supply to training, we ensure your fire safety systems are always ready and reliable.
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                    <div className="text-center">
                      <div className="text-2xl font-black text-[#E53935]" style={{ fontFamily: 'Oswald, sans-serif' }}>
                        24/7
                      </div>
                      <div className="text-sm text-gray-500" style={{ fontFamily: 'Noto Sans, sans-serif' }}>
                        Support
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-black text-[#E53935]" style={{ fontFamily: 'Oswald, sans-serif' }}>
                        100%
                      </div>
                      <div className="text-sm text-gray-500" style={{ fontFamily: 'Noto Sans, sans-serif' }}>
                        Reliable
                      </div>
                    </div>
                  </div>
                </div>

                {/* Accent Lines */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-[#E53935] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-[#E53935] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <DeploymentWorkflow />

      <WhoWeServe />

      {/* CTA Section */}
      <section className="w-full bg-gray-950 py-8 sm:py-10 lg:py-12 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#E53935]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl" />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* 12-Column Grid Container */}
          <div className="grid grid-cols-12 gap-4 sm:gap-6 lg:gap-8">

          {/* Header - Spans full width */}
          <div className="col-span-12 text-center mb-6 sm:mb-8">
            {/* Section Label */}
            <div className="inline-block mb-3">
              <p
                className="text-white text-xs sm:text-sm font-bold tracking-widest uppercase px-4 py-2 bg-[#E53935]/10 rounded-full border border-[#E53935]/40 flex items-center gap-2 justify-center"
                style={{ fontFamily: 'Noto Sans, sans-serif' }}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Get Started
              </p>
            </div>

            {/* Main Heading */}
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-2 leading-tight"
              style={{ fontFamily: 'Oswald, sans-serif' }}
            >
              Take <span className="text-[#E53935]">the next step</span>
            </h2>

            {/* Subtitle */}
            <h3
              className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3"
              style={{ fontFamily: 'Oswald, sans-serif' }}
            >
              Get Professional Fire Protection Services
            </h3>

            {/* Description */}
            <p
              className="text-base sm:text-lg text-gray-100 max-w-2xl mx-auto leading-relaxed font-normal mb-4"
              style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
            >
              Ensure your property is protected with reliable fire safety systems and expert support.
            </p>
          </div>

          {/* CTA Button - Spans full width */}
          <div className="col-span-12 flex items-center justify-center mb-4">
            <button
              onClick={() => {
                const element = document.getElementById('project-form');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-8 py-3 bg-linear-to-r from-[#FF4D4D] to-[#E53935] text-white font-bold text-base rounded-lg transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/50 hover:scale-105 active:scale-95 shadow-lg inline-flex items-center gap-2 group"
              style={{ fontFamily: 'Noto Sans, sans-serif' }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Request a Quote
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>

          {/* Bottom Text - Spans full width */}
          <div className="col-span-12 text-center">
            <p
              className="text-gray-300 text-xs"
              style={{ fontFamily: 'Noto Sans, sans-serif' }}
            >
              Response within 2 hours • 24/7 Emergency Support Available
            </p>
          </div>
          </div>
        </div>
      </section>

      {/* Project Enquiry Section */}
      <section className="w-full bg-white py-16 sm:py-20 lg:py-24 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-red-100/10 rounded-full blur-2xl" />
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-blue-100/10 rounded-full blur-2xl" />

        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Header Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12 sm:mb-16 items-stretch">
            <div className="space-y-6 text-center lg:text-left lg:pr-6">
              {/* Section Label */}
              <div className="inline-block mb-4">
                <p
                  className="text-[#E53935] text-sm sm:text-base font-bold tracking-widest uppercase px-4 py-2 bg-red-50 rounded-full flex items-center gap-2"
                  style={{ fontFamily: 'Noto Sans, sans-serif' }}
                >
                  <FileText size={16} />
                  Project Enquiry
                </p>
              </div>

              {/* Main Heading */}
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight"
                style={{ fontFamily: 'Oswald, sans-serif' }}
              >
                Tell us about your project
              </h2>

              {/* Helper Micro-text */}
              <p
                className="text-sm text-gray-500 max-w-xl mx-auto"
                style={{ fontFamily: 'Noto Sans, sans-serif' }}
              >
                We respond within 24 hours with a full proposal.
              </p>

              {/* Description */}
              <p
                className="text-base sm:text-lg text-gray-600 max-w-xl font-normal leading-relaxed"
                style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
              >
                Share your fire safety needs and we’ll recommend the right solution and send you a tailored quote.
              </p>

              {/* Small Header */}
              <p
                className="text-sm text-[#E53935] uppercase tracking-[0.18em] font-bold"
                style={{ fontFamily: 'Noto Sans, sans-serif' }}
              >
                Request a Quote
              </p>
              <p
                className="text-base text-gray-600 max-w-xl leading-relaxed"
                style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
              >
                Get a clear and professional fire safety proposal based on your requirements.
              </p>

              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 mt-6 text-left">
                <h4 className="text-sm font-bold text-gray-900 mb-3" style={{ fontFamily: 'Oswald, sans-serif' }}>
                  What happens next?
                </h4>
                <ul className="space-y-3 text-gray-600 text-sm" style={{ fontFamily: 'Noto Sans, sans-serif' }}>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#E53935]/10 text-[#E53935]">
                      <Check size={14} />
                    </span>
                    We review your request
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#E53935]/10 text-[#E53935]">
                      <Check size={14} />
                    </span>
                    We analyze your safety needs
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#E53935]/10 text-[#E53935]">
                      <Check size={14} />
                    </span>
                    We send a tailored quotation
                  </li>
                </ul>
              </div>
            </div>

            {/* Form Section */}
            <div id="project-form" className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-lg h-full">
              <form onSubmit={handleSubmit} className="space-y-6 h-full">

                {/* Two Column Grid for Name and Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-bold text-gray-900 mb-2"
                      style={{ fontFamily: 'Noto Sans, sans-serif' }}
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E53935] focus:border-[#E53935] transition-all duration-300 text-gray-900 placeholder-gray-500"
                      style={{ fontFamily: 'Noto Sans, sans-serif' }}
                      required
                    />
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-bold text-gray-900 mb-2"
                      style={{ fontFamily: 'Noto Sans, sans-serif' }}
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+250 000 000 000"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E53935] focus:border-[#E53935] transition-all duration-300 text-gray-900 placeholder-gray-500"
                      style={{ fontFamily: 'Noto Sans, sans-serif' }}
                      required
                    />
                  </div>
                </div>

                {/* Service Type Field */}
                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-bold text-gray-900 mb-2"
                    style={{ fontFamily: 'Noto Sans, sans-serif' }}
                  >
                    Service Type
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E53935] focus:border-[#E53935] transition-all duration-300 text-gray-900"
                    style={{ fontFamily: 'Noto Sans, sans-serif' }}
                    required
                  >
                    <option value="" disabled>
                      Select a service type
                    </option>
                    <option value="Fire Equipment Supply">Fire Equipment Supply</option>
                    <option value="Installation Services">Installation Services</option>
                    <option value="Inspection & Testing">Inspection & Testing</option>
                    <option value="Maintenance">Maintenance</option>
                    <option value="Fire Safety Training">Fire Safety Training</option>
                    <option value="First Aid Training">First Aid Training</option>
                  </select>
                </div>

                {/* Project Details Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-bold text-gray-900 mb-2"
                    style={{ fontFamily: 'Noto Sans, sans-serif' }}
                  >
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E53935] focus:border-[#E53935] transition-all duration-300 text-gray-900 placeholder-gray-500 resize-vertical"
                    style={{ fontFamily: 'Noto Sans, sans-serif' }}
                    placeholder="Briefly describe your site, needs, and timeline"
                    required
                  />
                </div>

                    {/* Trust Line */}
                <p
                  className="text-xs text-gray-500 text-left"
                  style={{ fontFamily: 'Noto Sans, sans-serif' }}
                >
                  Your information is confidential and used only for project evaluation.
                </p>

                {/* Submit Button */}
                <div className="text-center pt-2">
                  <button
                    type="submit"
                    className="px-8 py-3 bg-linear-to-r from-[#FF4D4D] to-[#E53935] text-white font-bold text-base rounded-lg transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/50 hover:scale-105 active:scale-95 shadow-lg inline-flex items-center gap-2 group"
                    style={{ fontFamily: 'Noto Sans, sans-serif' }}
                  >
                    <Send size={18} />
                    Submit Enquiry
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
