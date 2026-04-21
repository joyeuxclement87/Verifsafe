'use client';

import { Target, Eye, HeartHandshake, CircleCheck, Settings, Star, Users, Package, Award, Tool, Clock, Shield, Phone, FileText, ArrowRight } from 'tabler-icons-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutPage() {
  const impactMetrics = [
    {
      iconName: 'check',
      number: '500+',
      label: 'Projects Completed',
      description: 'Successful installations across diverse sectors and environments.'
    },
    {
      iconName: 'users',
      number: '150+',
      label: 'Clients Served',
      description: 'Trusted by businesses, institutions, and homeowners nationwide.'
    },
    {
      iconName: 'package',
      number: '10,000+',
      label: 'Equipment Installed',
      description: 'Protecting lives and assets through proven fire safety solutions.'
    }
  ];

  const missionVisionValues = [
    {
      iconName: 'target',
      title: 'Mission',
      subtitle: 'Protect lives and critical assets',
      description: 'Deliver dependable safety solutions that reduce incidents, support compliance, and strengthen emergency readiness.'
    },
    {
      iconName: 'eye',
      title: 'Vision',
      subtitle: 'Set the benchmark in industrial safety',
      description: 'Be the preferred partner for organizations seeking high-performance risk management and resilient operations.'
    }
  ];

  const aboutFeatures = [
    {
      iconName: 'award',
      label: 'Certified equipment',
      caption: 'Premium safety products sourced from trusted brands, backed by international approvals and proven performance in real deployments.'
    },
    {
      iconName: 'tool',
      label: 'Expert installation',
      caption: 'Professional setup by experienced technicians, ensuring every system is installed safely, accurately, and in line with regulations.'
    },
    {
      iconName: 'clock',
      label: '24/7 support',
      caption: 'Continuous availability for maintenance and emergencies, so your fire safety systems stay responsive around the clock.'
    },
    {
      iconName: 'check',
      label: 'Quality assured',
      caption: 'Strict testing, inspections, and regular servicing keep your protection systems reliable and ready when it matters most.'
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
      default: return null;
    }
  };

  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="relative w-full h-96 sm:h-[500px] lg:h-[600px] flex items-center justify-center overflow-hidden mt-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("/hero-3.webp")`,
            backgroundAttachment: 'fixed',
          }}
        />
        <div className="absolute inset-0 bg-linear-to-r from-gray-950 via-gray-950/90 to-gray-950/90" />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center"
          >
            <div className="inline-block mb-4">
              <p
                className="text-white text-xs sm:text-sm font-bold tracking-widest px-4 py-2 bg-[#E53935]/10 rounded-full border border-[#E53935]/40 flex items-center gap-2 justify-center"
                style={{ fontFamily: 'Noto Sans, sans-serif', fontVariant: 'small-caps' }}
              >
                <Star size={16} />
                About VerifSafe
              </p>
            </div>

            <h1
              className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-white mb-3 sm:mb-5 leading-tight uppercase tracking-wider"
              style={{ fontFamily: 'Oswald, sans-serif' }}
            >
              Rwanda&apos;s Trusted <span className="text-[#E53935]">Fire Protection Partner</span>
            </h1>

            <p
              className="text-lg sm:text-xl text-gray-200 mb-7 sm:mb-9 max-w-2xl leading-relaxed font-normal"
              style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
            >
              We are committed to delivering reliable fire safety solutions that protect people, property, and businesses across Rwanda.
            </p>

            <p
              className="text-xs sm:text-sm lg:text-sm text-gray-300 max-w-3xl leading-relaxed font-normal"
              style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
            >
              VerifSafe is a Rwanda-based fire safety company dedicated to delivering high-quality equipment, professional services, and practical training to help individuals and organizations stay prepared and protected.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="relative w-full bg-slate-50 py-18 sm:py-21 lg:py-28 overflow-hidden">
        <div className="absolute top-20 right-10 w-40 h-40 bg-red-100/20 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-gray-400/5 rounded-full blur-2xl animate-bounce" style={{ animationDelay: '1s' }} />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block mb-4">
                <p
                  className="text-[#E53935] text-sm sm:text-base font-bold tracking-widest uppercase px-4 py-2 bg-red-50 rounded-full flex items-center gap-2 justify-center"
                  style={{ fontFamily: 'Noto Sans, sans-serif' }}
                >
                  <Star size={16} />
                  Our Story
                </p>
              </div>

              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight"
                style={{ fontFamily: 'Oswald, sans-serif' }}
              >
                What <span className="text-[#E53935]">Drives Us</span>
              </h2>

              <div className="w-20 h-1 bg-[#E53935] mt-6 mb-6 rounded-full" />

              <div className="space-y-4">
                <p
                  className="text-lg sm:text-xl text-gray-700 leading-relaxed font-normal"
                  style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
                >
                  <strong className="text-gray-900 font-bold">VERIFSAFE</strong> was established to provide fire protection solutions which help prevent risks and improve safety in everyday environments.
                </p>
                <p
                  className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal"
                  style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
                >
                  We focus on delivering reliable equipment and services that support businesses and homes when safety matters most. Our dedicated team ensures that your environments are protected by top-tier systems, installed and maintained to the highest standards.
                </p>
              </div>
              
              <div className="mt-8 space-y-3">
                {[
                  'Certified safety equipment',
                  'Expert installation',
                  'Reliable support'
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (i * 0.1) }}
                    className="flex items-center gap-3"
                  >
                    <CircleCheck size={20} className="text-[#E53935]" />
                    <span className="text-gray-700 font-medium" style={{ fontFamily: 'Noto Sans, sans-serif' }}>{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative mt-8 lg:mt-0"
            >
              <div className="absolute inset-0 border-2 border-[#E53935]/20 rounded-2xl transform translate-x-4 translate-y-4" />
              <div className="relative w-full aspect-square sm:aspect-[4/5] lg:aspect-square overflow-hidden rounded-2xl shadow-xl bg-white border border-gray-100">
                <Image
                  src="/about-story.jpg"
                  alt="VERIFSAFE Team and Operations"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Foundation Section */}
      <section className="relative w-full bg-linear-to-b from-white to-gray-50 py-20 sm:py-24 lg:py-32 overflow-hidden">
        <div className="absolute top-20 right-10 w-40 h-40 bg-red-100/20 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-yellow-100/20 rounded-full blur-2xl animate-bounce" style={{ animationDelay: '1s' }} />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-18"
          >
            <div className="inline-block mb-4">
              <p
                className="text-[#E53935] text-sm sm:text-base font-bold tracking-widest px-4 py-2 bg-red-50 rounded-full flex items-center gap-2"
                style={{ fontFamily: 'Noto Sans, sans-serif' }}
              >
                <Settings size={16} />
                Core Pillars
              </p>
            </div>

            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight"
              style={{ fontFamily: 'Oswald, sans-serif' }}
            >
              Our <span className="text-[#E53935]">Foundation</span>
            </h2>

            <div className="w-20 h-1 bg-[#E53935] mx-auto mt-6 mb-6 rounded-full" />

            <p
              className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-normal leading-relaxed"
              style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
            >
              Built on principles that guide every decision and action we take
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {missionVisionValues.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white border border-gray-100 rounded-2xl p-8 hover:border-[#E53935]/30 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-start text-left overflow-hidden"
                style={{ borderWidth: '1px' }}
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-[#E53935] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="mb-6 transform group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
                  {renderIcon(item.iconName)}
                </div>
                <h3
                  className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#E53935] transition-colors duration-300"
                  style={{ fontFamily: 'Oswald, sans-serif' }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-base font-semibold text-[#E53935] mb-3"
                  style={{ fontFamily: 'Noto Sans, sans-serif' }}
                >
                  {item.subtitle}
                </p>
                <p
                  className="text-base text-gray-600 leading-relaxed font-normal"
                  style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
                >
                  {item.description}
                </p>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-[#E53935] to-transparent rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="relative w-full bg-white py-18 sm:py-21 lg:py-28 overflow-hidden">
        <div className="absolute top-20 left-10 w-40 h-40 bg-red-100/20 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-gray-400/5 rounded-full blur-2xl animate-bounce" style={{ animationDelay: '1s' }} />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-18"
          >
            <div className="inline-block mb-4">
              <p
                className="text-[#E53935] text-sm sm:text-base font-bold tracking-widest px-4 py-2 bg-red-50 rounded-full flex items-center gap-2 justify-center"
                style={{ fontFamily: 'Noto Sans, sans-serif' }}
              >
                <Star size={16} />
                Our Values
              </p>
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight"
              style={{ fontFamily: 'Oswald, sans-serif' }}
            >
              What We <span className="text-[#E53935]">Believe</span>
            </h2>
            <div className="w-20 h-1 bg-[#E53935] mx-auto mt-6 mb-6 rounded-full" />
            <p
              className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-normal leading-relaxed"
              style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
            >
              The principles that guide our commitment to excellence and safety
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { id: '01', title: 'Safety comes first', icon: Shield },
              { id: '02', title: 'Reliability in every solution', icon: CircleCheck },
              { id: '03', title: 'Professional service delivery', icon: Tool },
              { id: '04', title: 'Long-term client trust', icon: HeartHandshake },
            ].map((value, idx) => (
              <motion.div
                key={value.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group relative bg-white border border-gray-100 rounded-2xl p-8 hover:border-[#E53935]/30 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-start text-left overflow-hidden cursor-pointer"
                style={{ borderWidth: '1px' }}
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-[#E53935] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="w-full flex justify-between items-start mb-6">
                  <span
                    className="text-5xl lg:text-6xl font-black text-gray-200 group-hover:text-[#E53935]/40 transition-colors duration-300 leading-none"
                    style={{ fontFamily: 'Oswald, sans-serif' }}
                  >
                    {value.id}
                  </span>
                  <div className="transform group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
                    <value.icon size={44} className="text-[#E53935]" strokeWidth={1} />
                  </div>
                </div>
                <h3
                  className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#E53935] transition-colors duration-300"
                  style={{ fontFamily: 'Oswald, sans-serif' }}
                >
                  {value.title}
                </h3>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-[#E53935] to-transparent rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Feature Section */}
      <section className="relative w-full bg-white py-18 sm:py-21 lg:py-28 overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block mb-4">
                <p
                  className="text-[#E53935] text-sm sm:text-base font-bold tracking-widest px-4 py-2 bg-red-50 rounded-full inline-flex items-center gap-2"
                  style={{ fontFamily: 'Noto Sans, sans-serif' }}
                >
                  <Star size={16} />
                  Why Choose Us
                </p>
              </div>

              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight"
                style={{ fontFamily: 'Oswald, sans-serif' }}
              >
                We are committed to delivering <span className="text-[#E53935]">fire protection</span> solutions
              </h2>

              <div className="w-20 h-1 bg-[#E53935] mt-6 mb-6 rounded-full" />

              <p
                className="text-lg sm:text-xl text-gray-500 mb-4 font-medium"
                style={{ fontFamily: 'Noto Sans, sans-serif' }}
              >
                <span className="text-gray-900">Trusted protection</span> backed by quality, service, and long-term performance.
              </p>

              <p
                className="text-base text-gray-700 leading-relaxed font-normal"
                style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
              >
                that focus on reliability, safety, and long-term performance.
              </p>
            </motion.div>

            <div className="space-y-6">
              {aboutFeatures.map((feature, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex items-center justify-center shrink-0 mt-1">
                    {renderIcon(feature.iconName)}
                  </div>
                  <div>
                    <p
                      className="text-base font-semibold text-gray-900"
                      style={{ fontFamily: 'Oswald, sans-serif' }}
                    >
                      {feature.label}
                    </p>
                    <p
                      className="text-base text-gray-500 mt-1"
                      style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
                    >
                      {feature.caption}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Impact Section */}
      <section className="relative w-full bg-slate-50 py-18 sm:py-21 lg:py-28 overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-18"
          >
            <div className="inline-block mb-4">
              <p
                className="text-[#E53935] text-sm sm:text-base font-bold tracking-widest px-4 py-2 bg-red-50 rounded-full flex items-center gap-2 justify-center"
                style={{ fontFamily: 'Noto Sans, sans-serif' }}
              >
                <Star size={16} />
                Our Impact
              </p>
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight"
              style={{ fontFamily: 'Oswald, sans-serif' }}
            >
              Proven <span className="text-[#E53935]">Results</span>
            </h2>
            <div className="w-20 h-1 bg-[#E53935] mx-auto mt-6 mb-6 rounded-full" />
            <p
              className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-normal leading-relaxed"
              style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
            >
              Our commitment to fire safety has delivered measurable impact across Rwanda.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {impactMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white border border-gray-100 rounded-2xl p-8 hover:border-[#E53935]/30 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-start text-left overflow-hidden"
                style={{ borderWidth: '1px' }}
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-[#E53935] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="mb-6 transform group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
                  {renderIcon(metric.iconName)}
                </div>
                <h3
                  className="text-3xl sm:text-4xl font-black text-[#E53935] mb-2 group-hover:scale-110 transition-transform duration-300"
                  style={{ fontFamily: 'Oswald, sans-serif' }}
                >
                  {metric.number}
                </h3>
                <h4
                  className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#E53935] transition-colors duration-300"
                  style={{ fontFamily: 'Oswald, sans-serif' }}
                >
                  {metric.label}
                </h4>
                <p
                  className="text-base text-gray-600 leading-relaxed font-normal flex-grow"
                  style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
                >
                  {metric.description}
                </p>
                <div className="mt-6 absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-[#E53935] to-transparent rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Work With Us Section */}
      <section className="relative w-full py-20 sm:py-24 lg:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("/hero-3.webp")`,
            backgroundAttachment: 'fixed',
          }}
        />
        <div className="absolute inset-0 bg-linear-to-r from-gray-950 via-gray-950/90 to-gray-950/90" />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-12 gap-4 sm:gap-6 lg:gap-8"
          >
          <div className="col-span-12 text-center mb-10 sm:mb-12">
            <div className="inline-block mb-4">
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
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-3 leading-tight"
              style={{ fontFamily: 'Oswald, sans-serif' }}
            >
              Take <span className="text-[#E53935]">Action</span> - Work With <span className="text-[#E53935]">VERIFSAFE</span>
            </h2>
            <p
              className="text-lg sm:text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed font-normal mb-6"
              style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
            >
              When safety is a priority, choosing the right fire protection partner matters. Let us help you build a safer environment with reliable equipment and professional services.
            </p>
          </div>

          <div className="col-span-12 flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="inline-flex items-center gap-2 px-8 py-3 bg-linear-to-r from-[#FF4D4D] to-[#E53935] text-white font-medium text-base transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/50 shadow-lg rounded-lg uppercase tracking-wide group"
              style={{ fontFamily: 'Noto Sans, sans-serif' }}
            >
              <Phone size={16} strokeWidth={1} />
              Contact Us
              <ArrowRight size={16} strokeWidth={1.5} className="transition-transform group-hover:translate-x-1" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="inline-flex items-center gap-2 px-8 py-3 bg-white/10 backdrop-blur-sm text-white font-medium text-base rounded-lg border border-white/30 transition-all duration-300 hover:border-[#E53935] hover:bg-white/15 hover:shadow-xl uppercase tracking-wide group"
              style={{ fontFamily: 'Noto Sans, sans-serif', borderWidth: '1px' }}
            >
              <FileText size={16} strokeWidth={1} />
              Request a Quote
              <ArrowRight size={16} strokeWidth={1.5} className="transition-transform group-hover:translate-x-1" />
            </motion.button>
          </div>

          <div className="col-span-12 text-center">
            <p
              className="text-gray-300 text-sm"
              style={{ fontFamily: 'Noto Sans, sans-serif' }}
            >
              Response within 2 hours • 24/7 Emergency Support Available
            </p>
          </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
