'use client';

import { Target, Eye, HeartHandshake, CircleCheck, Settings, Star, Users, Package, Award, Tool, Clock, Shield, Phone, FileText, ArrowRight } from 'tabler-icons-react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { useCountUp } from '@/hooks/useCountUp';

// ─── Count-Up Stat Card ────────────────────────────────────────────────────
function StatCard({
  iconName,
  target,
  suffix,
  label,
  description,
  delay,
  renderIcon,
}: {
  iconName: string;
  target: number;
  suffix: string;
  label: string;
  description: string;
  delay: number;
  renderIcon: (name: string) => React.ReactNode;
}) {
  const { ref, displayValue } = useCountUp({ target, duration: 2, delay });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group relative bg-white border border-gray-100 rounded-2xl p-8 hover:border-[#E53935]/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-start text-left overflow-hidden"
      style={{ borderWidth: '1px' }}
    >
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-[#E53935] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="mb-6 transform group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
        {renderIcon(iconName)}
      </div>

      {/* Animated number */}
      <h3
        ref={ref as React.RefObject<HTMLHeadingElement>}
        className="text-3xl sm:text-4xl font-black text-[#E53935] mb-2 group-hover:scale-110 transition-transform duration-300 origin-left"
      >
        {displayValue.toLocaleString()}{suffix}
      </h3>

      <h4 className="text-card-title text-xl text-gray-900 mb-2 group-hover:text-[#E53935] transition-colors duration-300">
        {label}
      </h4>

      <p className="text-body text-gray-600 flex-grow">
        {description}
      </p>

      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-[#E53935] to-transparent rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </motion.div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────
export default function AboutPage() {
  const impactMetrics = [
    {
      iconName: 'check',
      target: 500,
      suffix: '+',
      label: 'Projects Completed',
      description: 'Successful installations across diverse sectors and environments.'
    },
    {
      iconName: 'users',
      target: 150,
      suffix: '+',
      label: 'Clients Served',
      description: 'Trusted by businesses, institutions, and homeowners nationwide.'
    },
    {
      iconName: 'package',
      target: 10000,
      suffix: '+',
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

  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const renderIcon = (iconName: string) => {
    switch (iconName) {
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

      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section className="relative w-full h-96 sm:h-[500px] lg:h-[600px] flex items-center justify-center overflow-hidden mt-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url("/about-company.png")`, backgroundAttachment: 'fixed' }}
        />
        <div className="absolute inset-0 bg-linear-to-r from-gray-950 via-gray-950/90 to-gray-950/80" />
        <div className="absolute top-1/2 -translate-y-1/2 -left-48 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none z-0" />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center"
          >
            <div className="inline-block mb-4">
              <p className="text-label text-white px-4 py-2 bg-[#E53935]/10 rounded-full border border-[#E53935]/40 flex items-center gap-2 justify-center">
                <Star size={16} />
                About VerifSafe
              </p>
            </div>

            <h1 className="text-section-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white mb-4 tracking-wider">
              Rwanda&apos;s Trusted <span className="text-[#E53935]">Fire Protection Partner</span>
            </h1>

            <p className="text-subheading text-gray-200 max-w-2xl mb-4">
              We are committed to delivering reliable fire safety solutions that protect people, property, and businesses across Rwanda.
            </p>

            <p className="text-body-sm text-gray-300 max-w-3xl">
              VerifSafe is a Rwanda-based fire safety company dedicated to delivering high-quality equipment, professional services, and practical training to help individuals and organizations stay prepared and protected.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── OUR STORY ────────────────────────────────────────────── */}
      <section className="relative w-full bg-slate-50 py-20 sm:py-24 lg:py-32 overflow-hidden">
        <div className="absolute top-20 right-10 w-40 h-40 bg-red-100/20 rounded-full blur-2xl" />
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-gray-400/5 rounded-full blur-2xl" />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 bg-red-50 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E53935]" />
                <p className="text-label text-[#E53935] flex items-center gap-2">
                  <Star size={14} />
                  Our Story
                </p>
              </div>

              <h2 className="text-section-heading text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-3">
                What <span className="text-[#E53935]">Drives Us</span>
              </h2>

              <div className="w-12 h-1 bg-[#E53935] mt-4 mb-6 rounded-full" />

              <div className="space-y-4">
                <p className="text-subheading text-gray-700">
                  <strong className="text-gray-900 font-bold">VERIFSAFE</strong> was established to provide fire protection solutions which help prevent risks and improve safety in everyday environments.
                </p>
                <p className="text-body text-gray-600">
                  We focus on delivering reliable equipment and services that support businesses and homes when safety matters most. Our dedicated team ensures that your environments are protected by top-tier systems, installed and maintained to the highest standards.
                </p>
              </div>

              <div className="mt-8 space-y-3">
                {['Certified safety equipment', 'Expert installation', 'Reliable support'].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (i * 0.1) }}
                    className="flex items-center gap-3"
                  >
                    <CircleCheck size={20} className="text-[#E53935]" />
                    <span className="text-body text-gray-700 font-medium">{item}</span>
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
              <div className="relative w-full aspect-square sm:aspect-[4/5] lg:aspect-square overflow-hidden rounded-2xl shadow-lg bg-white border border-gray-100">
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

      {/* ─── OUR FOUNDATION ───────────────────────────────────────── */}
      <section className="relative w-full bg-white py-20 sm:py-24 lg:py-32 overflow-hidden">
        <div className="absolute top-20 right-10 w-40 h-40 bg-red-100/20 rounded-full blur-2xl" />
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-yellow-100/10 rounded-full blur-2xl" />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 mb-5 px-4 py-2 bg-red-50 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#E53935]" />
              <p className="text-label text-[#E53935] flex items-center gap-2">
                <Settings size={15} />
                Core Pillars
              </p>
            </div>

            <h2 className="text-section-heading text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-6">
              Our <span className="text-[#E53935]">Foundation</span>
            </h2>

            <div className="w-20 h-1 bg-[#E53935] mx-auto mb-6 rounded-full" />

            <p className="text-subheading text-gray-600 max-w-2xl mx-auto">
              Built on principles that guide every decision and action we take.
            </p>
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
          >
            {missionVisionValues.map((item, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group relative bg-white border border-gray-100 rounded-2xl p-8 hover:border-[#E53935]/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-start text-left overflow-hidden"
                style={{ borderWidth: '1px' }}
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-[#E53935] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="mb-6 transform group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
                  {renderIcon(item.iconName)}
                </div>
                <h3 className="text-card-title text-2xl text-gray-900 mb-2 group-hover:text-[#E53935] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-body font-semibold text-[#E53935] mb-3">{item.subtitle}</p>
                <p className="text-body text-gray-600">{item.description}</p>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-[#E53935] to-transparent rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── OUR VALUES ───────────────────────────────────────────── */}
      <section className="relative w-full bg-slate-50 py-20 sm:py-24 lg:py-32 overflow-hidden">
        <div className="absolute top-20 left-10 w-40 h-40 bg-red-100/20 rounded-full blur-2xl" />
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-gray-400/5 rounded-full blur-2xl" />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 mb-5 px-4 py-2 bg-red-50 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#E53935]" />
              <p className="text-label text-[#E53935] flex items-center gap-2">
                <Star size={15} />
                Our Values
              </p>
            </div>

            <h2 className="text-section-heading text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-6">
              What We <span className="text-[#E53935]">Believe</span>
            </h2>

            <div className="w-20 h-1 bg-[#E53935] mx-auto mb-6 rounded-full" />

            <p className="text-subheading text-gray-600 max-w-2xl mx-auto">
              The principles that guide our commitment to excellence and safety.
            </p>
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          >
            {[
              { id: '01', title: 'Safety comes first', icon: Shield },
              { id: '02', title: 'Reliability in every solution', icon: CircleCheck },
              { id: '03', title: 'Professional service delivery', icon: Tool },
              { id: '04', title: 'Long-term client trust', icon: HeartHandshake },
            ].map((value, idx) => (
              <motion.div
                key={value.id}
                variants={cardVariants}
                className="group relative bg-white border border-gray-100 rounded-2xl p-8 hover:border-[#E53935]/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-start text-left overflow-hidden cursor-pointer"
                style={{ borderWidth: '1px' }}
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-[#E53935] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="w-full flex justify-between items-start mb-6">
                  <span className="text-5xl lg:text-6xl font-black text-gray-200 group-hover:text-[#E53935]/40 transition-colors duration-300 leading-none">
                    {value.id}
                  </span>
                  <div className="transform group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
                    <value.icon size={44} className="text-[#E53935]" strokeWidth={1} />
                  </div>
                </div>
                <h3 className="text-card-title text-xl text-gray-900 mb-3 group-hover:text-[#E53935] transition-colors duration-300">
                  {value.title}
                </h3>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-[#E53935] to-transparent rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ────────────────────────────────────────── */}
      <section className="relative w-full bg-white py-20 sm:py-24 lg:py-32 overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 mb-5 px-4 py-2 bg-red-50 rounded-full">
                <span className="w-2 h-2 rounded-full bg-[#E53935]" />
                <p className="text-label text-[#E53935] flex items-center gap-2">
                  <Star size={15} />
                  Why Choose Us
                </p>
              </div>

              <h2 className="text-section-heading text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-6">
                We are committed to delivering{' '}
                <span className="text-[#E53935]">fire protection</span> solutions
              </h2>

              <div className="w-12 h-1 bg-[#E53935] mb-6 rounded-full" />

              <p className="text-subheading text-gray-600 mb-3">
                <span className="text-gray-900 font-semibold">Trusted protection</span> backed by quality, service, and long-term performance.
              </p>
              <p className="text-body text-gray-600">
                We focus on reliability, safety, and long-term performance — delivering fire protection systems that exceed expectations.
              </p>
            </motion.div>

            <motion.div
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 gap-4"
            >
              {aboutFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5 } } }}
                  className="group relative bg-white border border-gray-100 rounded-2xl p-5 hover:border-[#E53935]/30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex items-start gap-4 overflow-hidden"
                  style={{ borderWidth: '1px' }}
                >
                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-[#E53935] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="shrink-0 mt-0.5 transform group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
                    {renderIcon(feature.iconName)}
                  </div>
                  <div>
                    <p className="text-card-title text-base text-gray-900 mb-1 group-hover:text-[#E53935] transition-colors duration-300">
                      {feature.label}
                    </p>
                    <p className="text-body-sm text-gray-500">
                      {feature.caption}
                    </p>
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-[#E53935] to-transparent rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── OUR IMPACT ───────────────────────────────────────────── */}
      <section className="relative w-full bg-slate-50 py-20 sm:py-24 lg:py-32 overflow-hidden">
        <div className="absolute top-20 right-10 w-40 h-40 bg-red-100/20 rounded-full blur-2xl" />
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-gray-400/5 rounded-full blur-2xl" />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 mb-5 px-4 py-2 bg-red-50 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#E53935]" />
              <p className="text-label text-[#E53935] flex items-center gap-2">
                <Star size={15} />
                Our Impact
              </p>
            </div>

            <h2 className="text-section-heading text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-6">
              Proven <span className="text-[#E53935]">Results</span>
            </h2>

            <div className="w-20 h-1 bg-[#E53935] mx-auto mb-6 rounded-full" />

            <p className="text-subheading text-gray-600 max-w-2xl mx-auto">
              Our commitment to fire safety has delivered measurable impact across Rwanda.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {impactMetrics.map((metric, index) => (
              <StatCard
                key={index}
                iconName={metric.iconName}
                target={metric.target}
                suffix={metric.suffix}
                label={metric.label}
                description={metric.description}
                delay={index * 0.1}
                renderIcon={renderIcon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── WORK WITH US CTA ─────────────────────────────────────── */}
      <section className="relative w-full py-20 sm:py-24 lg:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url("/hero1.jpeg")`, backgroundAttachment: 'fixed' }}
        />
        <div className="absolute inset-0 bg-linear-to-r from-gray-950 via-gray-950/90 to-gray-950/90" />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center max-w-4xl mx-auto"
          >
            <div className="inline-block mb-4">
              <p className="text-label text-white px-4 py-2 bg-[#E53935]/10 rounded-full border border-[#E53935]/40 flex items-center gap-2 justify-center">
                <Shield size={16} />
                Get Started
              </p>
            </div>

            <h2 className="text-section-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white mb-6">
              Take <span className="text-[#E53935]">Action</span> — Work With{' '}
              <span className="text-[#E53935]">VERIFSAFE</span>
            </h2>

            <p className="text-subheading text-gray-100 max-w-3xl mb-10">
              When safety is a priority, choosing the right fire protection partner matters. Let us help you build a safer environment with reliable equipment and professional services.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.assign('/contact#contact-form')}
                className="inline-flex items-center gap-2 px-8 py-3 bg-linear-to-r from-[#FF4D4D] to-[#E53935] text-white text-btn text-base transition-all duration-300 hover:shadow-lg hover:shadow-red-500/30 shadow-md rounded-lg group"
              >
                <Phone size={16} strokeWidth={1} />
                Contact Us
                <ArrowRight size={16} strokeWidth={1.5} className="transition-transform group-hover:translate-x-1" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.assign('/contact#contact-form')}
                className="inline-flex items-center gap-2 px-8 py-3 bg-white/10 backdrop-blur-sm text-white text-btn text-base rounded-lg border border-white/30 transition-all duration-300 hover:border-[#E53935] hover:bg-white/15 hover:shadow-lg group"
                style={{ borderWidth: '1px' }}
              >
                <FileText size={16} strokeWidth={1} />
                Request a Quote
                <ArrowRight size={16} strokeWidth={1.5} className="transition-transform group-hover:translate-x-1" />
              </motion.button>
            </div>

            <p className="text-body-sm text-gray-300">
              Response within 2 hours • 24/7 Emergency Support Available
            </p>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
