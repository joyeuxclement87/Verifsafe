'use client';

import { Target, Eye, HeartHandshake, CircleCheck, Star, Settings, Shield, PhoneCall, ArrowUpRight } from 'tabler-icons-react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

export default function AboutPage() {
  const impactMetrics = [
    {
      value: '500+',
      label: 'Projects Completed',
      description: 'Successful installations across diverse sectors and environments.'
    },
    {
      value: '150+',
      label: 'Clients Served',
      description: 'Trusted by businesses, institutions, and homeowners nationwide.'
    },
    {
      value: '10,000+',
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
      iconName: 'check',
      label: 'Certified equipment',
      caption: 'Premium safety products sourced from trusted brands, backed by international approvals and proven performance in real deployments.'
    },
    {
      iconName: 'settings',
      label: 'Expert installation',
      caption: 'Professional setup by experienced technicians, ensuring every system is installed safely, accurately, and in line with regulations.'
    },
    {
      iconName: 'star',
      label: '24/7 support',
      caption: 'Continuous availability for maintenance and emergencies, so your fire safety systems stay responsive around the clock.'
    },
    {
      iconName: 'handshake',
      label: 'Quality assured',
      caption: 'Strict testing, inspections, and regular servicing keep your protection systems reliable and ready when it matters most.'
    }
  ];

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'target': return <Target size={24} className="text-[#D62828]" strokeWidth={1.5} />;
      case 'eye': return <Eye size={24} className="text-[#D62828]" strokeWidth={1.5} />;
      case 'handshake': return <HeartHandshake size={24} className="text-[#D62828]" strokeWidth={1.5} />;
      case 'settings': return <Settings size={24} className="text-[#D62828]" strokeWidth={1.5} />;
      case 'star': return <Star size={24} className="text-[#D62828]" strokeWidth={1.5} />;
      case 'check': return <CircleCheck size={24} className="text-[#D62828]" strokeWidth={1.5} />;
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
        <div className="absolute inset-0 bg-linear-to-r from-ink via-ink/90 to-ink/80" />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center"
          >
            <div className="flex items-center gap-3 mb-6">
              <span aria-hidden="true" className="h-px w-8 bg-white/60" />
              <p className="text-label text-white/60">About VerifSafe</p>
              <span aria-hidden="true" className="h-px w-8 bg-white/60" />
            </div>

            <h1 className="text-page-heading  text-white mb-6">
              Rwanda&apos;s Trusted Fire Protection Partner
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
      <section className="relative w-full bg-neutral py-20 sm:py-24 lg:py-32">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <span aria-hidden="true" className="h-px w-8 bg-[#D62828]" />
                <p className="text-label text-gray-500">Our Story</p>
              </div>

              <h2 className="text-section-heading  text-gray-900 mb-6">
                What Drives Us
              </h2>

              <div className="space-y-4">
                  <p className="text-subheading text-gray-700">
                    <strong className="text-gray-900 font-semibold">VERIFSAFE</strong> was established to provide fire protection solutions which help prevent risks and improve safety in everyday environments.
                  </p>
                <p className="text-body text-gray-600">
                  We focus on delivering reliable equipment and services that support businesses and homes when safety matters most. Our dedicated team ensures that your environments are protected by top-tier systems, installed and maintained to the highest standards.
                </p>
              </div>

              <div className="mt-8 border-t border-gray-200 pt-6">
                {['Certified safety equipment', 'Expert installation', 'Reliable support'].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 py-3 border-b border-gray-200"
                  >
                    <CircleCheck size={18} className="text-[#D62828] shrink-0" />
                      <span className="text-body text-gray-700 font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative mt-8 lg:mt-0"
            >
              <div className="relative w-full aspect-square sm:aspect-[4/5] lg:aspect-square overflow-hidden rounded-md bg-white border border-line">
                <Image
                  src="/about-story.jpg"
                  alt="VERIFSAFE Team and Operations"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── OUR FOUNDATION ───────────────────────────────────────── */}
      <section className="relative w-full bg-white py-20 sm:py-24 lg:py-32">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14 sm:mb-16"
          >
            <div className="flex items-center gap-3 mb-5">
              <span aria-hidden="true" className="h-px w-8 bg-[#D62828]" />
              <p className="text-label text-gray-500">Core Pillars</p>
            </div>

            <h2 className="text-section-heading  text-gray-900 mb-6">
              Our Foundation
            </h2>

            <p className="text-subheading text-gray-600 max-w-2xl">
              Built on principles that guide every decision and action we take.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20">
            {missionVisionValues.map((item) => (
              <div key={item.title} className="border-t border-gray-200 py-8">
                <div className="flex items-start gap-6">
                  <span className="shrink-0 pt-1">
                    {renderIcon(item.iconName)}
                  </span>
                  <div>
                    <h3 className="text-card-title text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-body font-semibold text-[#D62828] mb-3">{item.subtitle}</p>
                    <p className="text-body text-gray-600">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── OUR VALUES ───────────────────────────────────────────── */}
      <section className="relative w-full bg-neutral py-20 sm:py-24 lg:py-32">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14 sm:mb-16"
          >
            <div className="flex items-center gap-3 mb-5">
              <span aria-hidden="true" className="h-px w-8 bg-[#D62828]" />
              <p className="text-label text-gray-500">Our Values</p>
            </div>

            <h2 className="text-section-heading  text-gray-900 mb-6">
              What We Believe
            </h2>

            <p className="text-subheading text-gray-600 max-w-2xl">
              The principles that guide our commitment to excellence and safety.
            </p>
          </motion.div>

          <ol className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20">
            {[
              { id: '01', title: 'Safety comes first', icon: Shield },
              { id: '02', title: 'Reliability in every solution', icon: CircleCheck },
              { id: '03', title: 'Professional service delivery', icon: Settings },
              { id: '04', title: 'Long-term client trust', icon: HeartHandshake },
            ].map((value) => (
              <li key={value.id} className="border-t border-gray-200 py-8">
                <div className="flex items-start gap-6">
                    <span className="shrink-0 w-10 pt-0.5 text-index text-gray-400 tabular-nums">
                      {value.id}
                    </span>
                  <div className="flex items-start gap-3">
                    <value.icon size={24} className="text-[#D62828] mt-0.5 shrink-0" strokeWidth={1.5} />
                    <h3 className="text-card-title text-gray-900">{value.title}</h3>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ────────────────────────────────────────── */}
      <section className="relative w-full bg-white py-20 sm:py-24 lg:py-32">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <span aria-hidden="true" className="h-px w-8 bg-[#D62828]" />
                <p className="text-label text-gray-500">Why Choose Us</p>
              </div>

              <h2 className="text-section-heading  text-gray-900 mb-6">
                We are committed to delivering fire protection solutions
              </h2>

              <p className="text-subheading text-gray-600 mb-3">
                <span className="text-gray-900 font-semibold">Trusted protection</span> backed by quality, service, and long-term performance.
              </p>
              <p className="text-body text-gray-600">
                We focus on reliability, safety, and long-term performance — delivering fire protection systems that exceed expectations.
              </p>
            </motion.div>

            <div>
              {aboutFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="border-t border-gray-200 py-5"
                >
                  <div className="flex items-start gap-4">
                    <span className="shrink-0 pt-0.5">
                      {renderIcon(feature.iconName)}
                    </span>
                    <div>
                      <p className="text-list-title text-gray-900 mb-1">
                        {feature.label}
                      </p>
                      <p className="text-body-sm text-gray-500">
                        {feature.caption}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              <div className="border-t border-gray-200" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── OUR IMPACT ───────────────────────────────────────────── */}
      <section className="relative w-full bg-neutral py-20 sm:py-24 lg:py-32">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14 sm:mb-16"
          >
            <div className="flex items-center gap-3 mb-5">
              <span aria-hidden="true" className="h-px w-8 bg-[#D62828]" />
              <p className="text-label text-gray-500">Our Impact</p>
            </div>

            <h2 className="text-section-heading  text-gray-900 mb-6">
              Proven Results
            </h2>

            <p className="text-subheading text-gray-600 max-w-2xl">
              Our commitment to fire safety has delivered measurable impact across Rwanda.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200 border border-gray-200">
            {impactMetrics.map((metric) => (
              <div key={metric.label} className="bg-white p-8 sm:p-10">
                <p className="text-section-heading text-[#D62828] mb-3 tabular-nums">
                  {metric.value}
                </p>
                <p className="text-list-title text-gray-900 mb-2">{metric.label}</p>
                <p className="text-body-sm text-gray-600">{metric.description}</p>
              </div>
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
        <div className="absolute inset-0 bg-linear-to-r from-ink via-ink/90 to-ink/90" />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-3 mb-6">
              <span aria-hidden="true" className="h-px w-8 bg-white/60" />
              <p className="text-label text-white/60">Get Started</p>
              <span aria-hidden="true" className="h-px w-8 bg-white/60" />
            </div>

            <h2 className="text-section-heading  text-white mb-6">
              Take Action — Work With VERIFSAFE
            </h2>

            <p className="text-subheading text-gray-100 max-w-3xl mb-10">
              When safety is a priority, choosing the right fire protection partner matters. Let us help you build a safer environment with reliable equipment and professional services.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 mb-8">
              <Button
                href="/contact#contact-form"
                variant="secondary"
                icon={<PhoneCall size={18} strokeWidth={2} />}
                className="!rounded-lg !bg-transparent !border-white/25 !text-[#F4F3EF] hover:!border-white/60 hover:!bg-white/5 !shadow-none"
              >
                Contact Us
              </Button>

              <Button
                href="/contact#contact-form"
                variant="primary"
                icon={
                  <ArrowUpRight
                    size={18}
                    strokeWidth={2}
                    className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0 motion-reduce:group-hover:translate-y-0"
                  />
                }
                className="!rounded-lg !bg-[#E53935] hover:!bg-[#C62828] !shadow-[0_10px_24px_-10px_rgba(229,57,53,0.5)]"
              >
                Request a Quote
              </Button>
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