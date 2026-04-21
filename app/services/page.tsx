'use client';

import Image from 'next/image';

import { Tools, Shield, Phone, Star, Send, FileText, Check, ArrowRight, Package, Eye, HeartHandshake, CircleCheck, Settings, Users, Award, Tool, Clock, Target } from 'tabler-icons-react';
import DeploymentWorkflow from '@/components/sections/DeploymentWorkflow';
import WhoWeServe from '@/components/sections/WhoWeServe';


export default function ServicesPage() {

  const services = [
    {
      iconName: 'package',
      image: '/service-1.png',
      title: 'Fire Equipment Supply',
      description: 'Providing certified fire safety equipment for reliable protection in different environments.',
      features: ['Extinguishers', 'Alarms', 'Hose reels', 'Safety accessories']
    },
    {
      iconName: 'tool',
      image: '/service-2.png',
      title: 'Installation Services',
      description: 'Professional installation of fire protection systems to ensure proper setup and performance.',
      features: ['Fire alarm systems', 'Detection devices', 'Safety equipment']
    },
    {
      iconName: 'check',
      image: '/service-3.png',
      title: 'Inspection & Testing',
      description: 'Routine inspection and testing to ensure fire safety systems function correctly and meet required standards.',
      features: ['Businesses', 'Offices', 'Compliance checks']
    },
    {
      iconName: 'shield',
      image: '/service-4.png',
      title: 'Fire Extinguisher Refilling',
      description: 'Refilling and servicing extinguishers to keep them ready and effective for emergency use.',
      features: ['Quick service', 'Reliable', 'Essential for safety']
    },
    {
      iconName: 'settings',
      image: '/service-5.png',
      title: 'Maintenance Services',
      description: 'Ongoing maintenance to ensure fire protection systems remain reliable over time.',
      features: ['Prevents failure', 'Regular servicing', 'System reliability']
    },
    {
      iconName: 'users',
      image: '/service-3.png',
      title: 'Fire Safety Awareness Training',
      description: 'Training programs which educate individuals and teams on fire prevention, emergency response, and proper use of fire safety equipment.',
      features: ['Staff training', 'Organizations', 'Workplaces']
    },
    {
      iconName: 'handshake',
      image: '/service-5.png',
      title: 'First Aid Training',
      description: 'Basic first aid training which equips individuals with the skills to respond quickly and effectively during emergencies.',
      features: ['Emergency response', 'Workplace safety', 'Life-saving skills']
    }
  ];

  const renderIcon = (iconName: string) => {
    switch(iconName) {
      case 'target': return <Target size={44} className="text-[#E53935]" strokeWidth={1} />;
      case 'eye': return <Eye size={44} className="text-[#E53935]" strokeWidth={1} />;
      case 'handshake': return <HeartHandshake size={44} className="text-[#E53935]" strokeWidth={1} />;
      case 'award': return <Award size={44} className="text-[#E53935]" strokeWidth={1} />;
      case 'tool': return <Tool size={44} className="text-[#E53935]" strokeWidth={1} />;
      case 'clock': return <Clock size={44} className="text-[#E53935]" strokeWidth={1} />;
      case 'check': return <CircleCheck size={44} className="text-[#E53935]" strokeWidth={1} />;
      case 'users': return <Users size={44} className="text-[#E53935]" strokeWidth={1} />;
      case 'package': return <Package size={44} className="text-[#E53935]" strokeWidth={1} />;
      case 'shield': return <Shield size={44} className="text-[#E53935]" strokeWidth={1} />;
      case 'settings': return <Settings size={44} className="text-[#E53935]" strokeWidth={1} />;
      default: return null;
    }
  };

  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="relative w-full h-96 sm:h-[500px] lg:h-[600px] flex items-center justify-center overflow-hidden mt-0">
        {/* Background Image - Static */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("/hero-3.webp")`,
            backgroundAttachment: 'fixed',
          }}
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-gray-950 via-gray-950/90 to-gray-950/90" />

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            {/* Section Label */}
            <div className="inline-block mb-4">
              <p
                className="text-white text-xs sm:text-sm font-bold tracking-widest px-4 py-2 bg-[#E53935]/10 rounded-full border border-[#E53935]/40 flex items-center gap-2 justify-center"
                style={{ fontFamily: 'Noto Sans, sans-serif', fontVariant: 'small-caps' }}
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
              className="text-lg sm:text-xl text-gray-200 mb-7 sm:mb-9 max-w-2xl leading-relaxed font-normal"
              style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
            >
              We provide fire safety services which ensure equipment and systems are installed, maintained, and ready when needed.
            </p>

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
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-tight"
              style={{ fontFamily: 'Oswald, sans-serif' }}
            >
              Supply, Installation & <span className="text-[#E53935]">Maintenance</span>
            </h2>

            {/* Decorative Divider */}
            <div className="w-20 h-1 bg-[#E53935] mx-auto mt-6 mb-6 rounded-full" />

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
                className="group relative bg-white border border-gray-100 rounded-2xl hover:border-[#E53935]/30 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-start text-left overflow-hidden"
                style={{ borderWidth: '1px' }}
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-[#E53935] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                {/* Image Banner */}
                <div className="relative w-full h-44 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 pt-5 flex flex-col flex-grow w-full">
                  {/* Title */}
                  <h3
                    className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#E53935] transition-colors duration-300"
                    style={{ fontFamily: 'Oswald, sans-serif' }}
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-base text-gray-600 leading-relaxed font-normal flex-grow mb-5"
                    style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
                  >
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2 mb-5 w-full">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#E53935] rounded-full shrink-0" />
                        <span className="text-sm text-gray-600 font-normal" style={{ fontFamily: 'Noto Sans, sans-serif' }}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-auto w-full">
                    {service.title === 'Fire Equipment Supply' ? (
                      <button
                        onClick={() => {
                          const element = document.getElementById('equipment');
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                        className="w-full px-6 py-3 bg-[#E53935]/5 text-[#E53935] hover:bg-[#E53935]/10 font-bold text-sm rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 inline-flex items-center justify-center gap-2 group"
                        style={{ fontFamily: 'Noto Sans, sans-serif' }}
                      >
                        View Equipments
                        <ArrowRight size={16} strokeWidth={1.5} className="transition-transform group-hover:translate-x-1" />
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          const element = document.getElementById('project-form');
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                        className="w-full px-6 py-3 bg-[#E53935]/5 text-[#E53935] hover:bg-[#E53935]/10 font-bold text-sm rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 inline-flex items-center justify-center gap-2 group"
                        style={{ fontFamily: 'Noto Sans, sans-serif' }}
                      >
                        Request a Quote
                        <ArrowRight size={16} strokeWidth={1.5} className="transition-transform group-hover:translate-x-1" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-[#E53935] to-transparent rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
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
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-tight"
              style={{ fontFamily: 'Oswald, sans-serif' }}
            >
              Fire Awareness & <span className="text-[#E53935]">First Aid Training</span>
            </h2>

            {/* Decorative Divider */}
            <div className="w-20 h-1 bg-[#E53935] mx-auto mt-6 mb-6 rounded-full" />

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
                className="group relative bg-white border border-gray-100 rounded-2xl hover:border-[#E53935]/30 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-start text-left overflow-hidden"
                style={{ borderWidth: '1px' }}
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-[#E53935] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                {/* Image Banner */}
                <div className="relative w-full h-44 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 pt-5 flex flex-col flex-grow w-full">
                  {/* Title */}
                  <h3
                    className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#E53935] transition-colors duration-300"
                    style={{ fontFamily: 'Oswald, sans-serif' }}
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-base text-gray-600 leading-relaxed font-normal flex-grow mb-5"
                    style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
                  >
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2 mb-5 w-full">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#E53935] rounded-full shrink-0" />
                        <span className="text-sm text-gray-600 font-normal" style={{ fontFamily: 'Noto Sans, sans-serif' }}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Request a Quote Button */}
                  <div className="mt-auto w-full">
                    <button
                      onClick={() => {
                        const element = document.getElementById('project-form');
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="w-full px-6 py-3 bg-[#E53935]/5 text-[#E53935] hover:bg-[#E53935]/10 font-bold text-sm rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 inline-flex items-center justify-center gap-2 group"
                      style={{ fontFamily: 'Noto Sans, sans-serif' }}
                    >
                      Request a Quote
                      <ArrowRight size={16} strokeWidth={1.5} className="transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-[#E53935] to-transparent rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
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
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-tight"
              style={{ fontFamily: 'Oswald, sans-serif' }}
            >
              Why Our Services <span className="text-[#E53935]">Matter</span>
            </h2>

            {/* Decorative Divider */}
            <div className="w-20 h-1 bg-[#E53935] mx-auto mt-6 mb-6 rounded-full" />

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
      <section className="relative w-full py-14 sm:py-16 lg:py-20 overflow-hidden">
        {/* Background Image - Static */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("/hero-3.webp")`,
            backgroundAttachment: 'fixed',
          }}
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-gray-950 via-gray-950/90 to-gray-950/90" />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
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
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-3 leading-tight"
              style={{ fontFamily: 'Oswald, sans-serif' }}
            >
              Take <span className="text-[#E53935]">the next step</span>
            </h2>

            {/* Description */}
            <p
              className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed font-normal"
              style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
            >
              Ensure your property is protected with reliable fire safety systems and expert support.
            </p>
          </div>
        </div>
      </section>

      {/* Project Enquiry Section */}
      <section id="project-form" className="w-full bg-gray-50 py-16 sm:py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-red-50/40 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gray-200/30 rounded-full blur-3xl" />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16">

            {/* Left: Project Enquiry Info */}
            <div className="flex flex-col gap-6">
              {/* Section Label */}
              <div className="inline-block">
                <p
                  className="text-[#E53935] text-sm sm:text-base font-bold tracking-widest uppercase px-4 py-2 bg-red-50 rounded-full inline-flex items-center gap-2"
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
                className="text-sm text-gray-500"
                style={{ fontFamily: 'Noto Sans, sans-serif' }}
              >
                We respond within 24 hours with a full proposal.
              </p>

              {/* Description */}
              <p
                className="text-base sm:text-lg text-gray-600 font-normal leading-relaxed"
                style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
              >
                Share your fire safety needs and we'll recommend the right solution and send you a tailored quote.
              </p>

              {/* Small Header */}
              <div>
                <p
                  className="text-sm text-[#E53935] uppercase tracking-[0.18em] font-bold mb-2"
                  style={{ fontFamily: 'Noto Sans, sans-serif' }}
                >
                  Request a Quote
                </p>
                <p
                  className="text-base text-gray-600 leading-relaxed"
                  style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
                >
                  Get a clear and professional fire safety proposal based on your requirements.
                </p>
              </div>

              {/* What happens next */}
              <div className="bg-white border border-gray-200 rounded-2xl p-5">
                <h4 className="text-sm font-bold text-gray-900 mb-3" style={{ fontFamily: 'Oswald, sans-serif' }}>
                  What happens next?
                </h4>
                <ul className="space-y-3 text-gray-600 text-sm" style={{ fontFamily: 'Noto Sans, sans-serif' }}>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#E53935]/10 text-[#E53935] shrink-0">
                      <Check size={13} />
                    </span>
                    We review your request
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#E53935]/10 text-[#E53935] shrink-0">
                      <Check size={13} />
                    </span>
                    We analyze your safety needs
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#E53935]/10 text-[#E53935] shrink-0">
                      <Check size={13} />
                    </span>
                    We send a tailored quotation
                  </li>
                </ul>
              </div>
            </div>

            {/* Right: Contact Form (exact same design as Contact component) */}
            <div>
              <form onSubmit={(e) => { e.preventDefault(); console.log('Form submitted'); }} className="space-y-6">
                {/* Name Input */}
                <div>
                  <label
                    htmlFor="svc-name"
                    className="block text-sm font-semibold text-gray-800 mb-2"
                    style={{ fontFamily: 'Noto Sans, sans-serif' }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="svc-name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:bg-white focus:border-[#E53935] focus:ring-0 outline-none transition-all duration-300 placeholder-gray-400 text-gray-900"
                    style={{ fontFamily: 'Noto Sans, sans-serif', borderWidth: '1px', opacity: 0.9 }}
                    placeholder="Your full name"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label
                    htmlFor="svc-email"
                    className="block text-sm font-semibold text-gray-800 mb-2"
                    style={{ fontFamily: 'Noto Sans, sans-serif' }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="svc-email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:bg-white focus:border-[#E53935] focus:ring-0 outline-none transition-all duration-300 placeholder-gray-400 text-gray-900"
                    style={{ fontFamily: 'Noto Sans, sans-serif', borderWidth: '1px', opacity: 0.9 }}
                    placeholder="your@email.com"
                  />
                </div>

                {/* Service Type */}
                <div>
                  <label
                    htmlFor="svc-service"
                    className="block text-sm font-semibold text-gray-800 mb-2"
                    style={{ fontFamily: 'Noto Sans, sans-serif' }}
                  >
                    Service Type
                  </label>
                  <select
                    id="svc-service"
                    name="service"
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:bg-white focus:border-[#E53935] focus:ring-0 outline-none transition-all duration-300 text-gray-900"
                    style={{ fontFamily: 'Noto Sans, sans-serif', borderWidth: '1px', opacity: 0.9 }}
                    defaultValue=""
                  >
                    <option value="" disabled>Select a service type</option>
                    <option value="Fire Equipment Supply">Fire Equipment Supply</option>
                    <option value="Installation Services">Installation Services</option>
                    <option value="Inspection & Testing">Inspection &amp; Testing</option>
                    <option value="Fire Extinguisher Refilling">Fire Extinguisher Refilling</option>
                    <option value="Maintenance Services">Maintenance Services</option>
                    <option value="Fire Safety Awareness Training">Fire Safety Awareness Training</option>
                    <option value="First Aid Training">First Aid Training</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Phone Input */}
                <div>
                  <label
                    htmlFor="svc-phone"
                    className="block text-sm font-semibold text-gray-800 mb-2"
                    style={{ fontFamily: 'Noto Sans, sans-serif' }}
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="svc-phone"
                    name="phone"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:bg-white focus:border-[#E53935] focus:ring-0 outline-none transition-all duration-300 placeholder-gray-400 text-gray-900"
                    style={{ fontFamily: 'Noto Sans, sans-serif', borderWidth: '1px', opacity: 0.9 }}
                    placeholder="+250 xxx xxx xxx"
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label
                    htmlFor="svc-message"
                    className="block text-sm font-semibold text-gray-800 mb-2"
                    style={{ fontFamily: 'Noto Sans, sans-serif' }}
                  >
                    Message
                  </label>
                  <textarea
                    id="svc-message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:bg-white focus:border-[#E53935] focus:ring-0 outline-none transition-all duration-300 placeholder-gray-400 text-gray-900 resize-none"
                    style={{ fontFamily: 'Noto Sans, sans-serif', borderWidth: '1px', opacity: 0.9 }}
                    placeholder="Describe your request, project, or requirements"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-linear-to-r from-[#FF4D4D] to-[#E53935] text-white font-medium text-base rounded-lg transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/50 hover:scale-105 active:scale-95 shadow-lg inline-flex items-center justify-center gap-2 group"
                  style={{ fontFamily: 'Noto Sans, sans-serif', borderWidth: '1px', opacity: 0.9 }}
                >
                  Send Message
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
