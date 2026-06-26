'use client';

import Image from 'next/image';
import { Tool, Star, ArrowRight, FileText, ShieldCheck, Hammer, MapPin, Flame, Clock, Check, Bulb, Bell, Droplet, Radar, Package, Shield } from 'tabler-icons-react';
import Link from 'next/link';
import WhoWeServe from '@/components/sections/marketing/WhoWeServe';
import { motion } from 'framer-motion';
import { useState } from 'react';

const equipmentDetails = [
  {
    id: 1,
    image: '/equipment-1.png',
    title: 'Fire Extinguishers',
    description: 'Certified portable equipment designed to suppress specific classes of fire before they spread.',
    link: '/equipments/fire-extinguishers',
    icon: <Flame size={20} />,
  },
  {
    id: 2,
    image: '/equipment-2.png',
    title: 'Fire Alarm Systems',
    description: 'Intelligent network sensors and control panels that provide early warning and evacuation alerts.',
    link: '/equipments/fire-alarm-systems',
    icon: <Bell size={20} />,
  },
  {
    id: 3,
    image: '/equipment-3.png',
    title: 'Fire Hose Reels',
    description: 'High-pressure water delivery systems for continuous firefighting in commercial and industrial sites.',
    link: '/equipments/fire-hose-reels',
    icon: <Droplet size={20} />,
  },
  {
    id: 4,
    image: '/equipment-4.png',
    title: 'Detection Devices',
    description: 'Precision smoke, heat, and flame sensors that identify fire risks at the earliest possible stage.',
    link: '/equipments/fire-detection-devices',
    icon: <Radar size={20} />,
  },
  {
    id: 5,
    image: '/equipment-5.png',
    title: 'Emergency Lights',
    description: 'Reliable backup illumination and exit signage to guide occupants safely during power failures.',
    link: '/equipments/emergency-lights',
    icon: <Bulb size={20} />,
  },
  {
    id: 6,
    image: '/equipment-6.png',
    title: 'Safety Accessories',
    description: 'Essential hardware including cabinets, blankets, and signage to support your safety infrastructure.',
    link: '/equipments/fire-safety-accessories',
    icon: <Package size={20} />,
  },
];

// ─── Shared form input class ────────────────────────────────────────────────
const inputCls =
  'w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-[#E53935] focus:ring-2 focus:ring-[#E53935]/10 outline-none transition-all duration-300 placeholder-gray-400 text-gray-900 text-body-sm';

export default function EquipmentsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const contentType = response.headers.get('content-type') || '';
      const rawText = await response.text();
      let data: { message?: string } | null = null;

      if (rawText) {
        try {
          data = contentType.includes('application/json') ? JSON.parse(rawText) : JSON.parse(rawText);
        } catch {
          data = { message: 'Our team is currently unavailable. Please try again shortly.' };
        }
      }

      if (!response.ok) {
        throw new Error(data?.message || 'Unable to send your enquiry.');
      }

      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      setTimeout(() => setSubmitted(false), 4000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to send your enquiry.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="w-full bg-white overflow-x-hidden">

      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden mt-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url("/verif.png")`, backgroundAttachment: 'fixed' }}
        />
        <div className="absolute inset-0 bg-linear-to-r from-gray-950 via-gray-950/80 to-gray-950/70" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20"
          >
            <Star size={16} className="text-[#E53935]" />
            <p className="text-label text-white">Product Catalog</p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-section-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white mb-6"
          >
            Fire Safety <span className="text-[#E53935]">Equipment</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-subheading text-gray-200 max-w-3xl mx-auto"
          >
            Certified, high-performance fire protection hardware designed to safeguard people and property in any environment.
          </motion.p>
        </div>
      </section>

      {/* ─── INTRO ────────────────────────────────────────────────── */}
      <section className="w-full py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-4"
          >
            <div className="inline-flex items-center gap-2 mb-5 px-4 py-2 bg-red-50 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#E53935]" />
              <p className="text-label text-[#E53935] flex items-center gap-2">
                <Tool size={15} />
                Quality Standards
              </p>
            </div>

            <h2 className="text-section-heading text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-6 capitalize">
              Built for <span className="text-[#E53935]">Safety</span>
            </h2>

            <div className="w-20 h-1 bg-[#E53935] rounded-full mx-auto mb-6" />

            <p className="text-subheading text-gray-600 max-w-2xl mx-auto">
              The right equipment can stop a small fire from becoming a major disaster. Our products are selected for real-world reliability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── EQUIPMENT GRID ───────────────────────────────────────── */}
      <section className="relative w-full bg-slate-50 py-16 sm:py-20 lg:py-24 overflow-hidden">
        <div className="absolute top-20 right-10 w-40 h-40 bg-red-100/20 rounded-full blur-2xl" />
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-gray-400/5 rounded-full blur-2xl" />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {equipmentDetails.map((equipment, idx) => (
              <motion.div
                key={equipment.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
              >
                <Link
                  href={equipment.link}
                  className="group relative h-full bg-white border border-gray-100 rounded-2xl hover:border-[#E53935]/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden"
                  style={{ borderWidth: '1px' }}
                >
                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-[#E53935] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-[#E53935] to-transparent rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                  {/* Image */}
                  <div className="relative w-full h-52 overflow-hidden">
                    <Image
                      src={equipment.image}
                      alt={equipment.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                    {/* Icon badge */}
                    <div className="absolute bottom-4 left-5 z-20">
                      <div className="w-10 h-10 rounded-xl bg-[#E53935] flex items-center justify-center text-white shadow-lg">
                        {equipment.icon}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-card-title text-xl text-gray-900 mb-3 group-hover:text-[#E53935] transition-colors duration-300">
                      {equipment.title}
                    </h3>
                    <p className="text-body text-gray-600 flex-grow mb-6">
                      {equipment.description}
                    </p>
                    <div className="mt-auto flex items-center gap-2 text-[#E53935] font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                      View Solutions
                      <ArrowRight size={16} strokeWidth={1.5} className="transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY OUR EQUIPMENT ────────────────────────────────────── */}
      <section className="w-full bg-white py-20 sm:py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute top-20 right-10 w-40 h-40 bg-red-100/10 rounded-full blur-2xl" />
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white border border-gray-100 rounded-2xl p-8 sm:p-12 shadow-sm relative overflow-hidden"
            style={{ borderWidth: '1px' }}
          >
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-[#E53935] to-transparent" />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 xl:gap-20 relative z-10 items-start">
              {/* Left sticky col */}
              <div className="lg:col-span-1 lg:sticky lg:top-8">
                <div className="inline-flex items-center gap-2 mb-5 px-4 py-2 bg-red-50 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-[#E53935]" />
                  <p className="text-label text-[#E53935]">Core Value</p>
                </div>
                <h2 className="text-section-heading text-3xl sm:text-4xl text-gray-900 mb-5 capitalize">
                  Reliable <span className="text-[#E53935]">Performance</span>
                </h2>
                <div className="w-20 h-1 bg-[#E53935] rounded-full mb-6" />
                <p className="text-body text-gray-600">
                  We don&apos;t just sell equipment; we provide certified life-safety systems.
                </p>
              </div>

              {/* Right grid */}
              <div className="lg:col-span-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
                  {[
                    { title: 'Certified Compliance', detail: 'All products meet Rwanda & International safety standards.', icon: <ShieldCheck size={24} /> },
                    { title: 'Durable Design', detail: 'Industrial-grade materials for long-term operational life.', icon: <Hammer size={24} /> },
                    { title: 'Wide Application', detail: 'Solutions tailored for residential, commercial, and industrial sites.', icon: <MapPin size={24} /> },
                    { title: 'Ready for Action', detail: 'Selected for immediate effectiveness in real emergencies.', icon: <Flame size={24} /> },
                  ].map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="group flex items-start gap-5 pb-6 border-b border-gray-100 hover:border-[#E53935]/40 transition-all duration-300"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-[#E53935]/10 group-hover:text-[#E53935] group-hover:scale-110 transition-all duration-300 shrink-0 mt-1">
                        {benefit.icon}
                      </div>
                      <div>
                        <p className="text-card-title text-base text-gray-900 mb-1 group-hover:text-[#E53935] transition-colors duration-300">
                          {benefit.title}
                        </p>
                        <p className="text-body-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                          {benefit.detail}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <WhoWeServe />

      {/* ─── CTA PARALLAX ─────────────────────────────────────────── */}
      <section className="relative w-full py-20 sm:py-24 lg:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url("/verif.png")`, backgroundAttachment: 'fixed' }}
        />
        <div className="absolute inset-0 bg-linear-to-r from-gray-950 via-gray-950/90 to-gray-950/90" />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <p className="text-label text-white px-4 py-2 bg-[#E53935]/10 rounded-full border border-[#E53935]/40 flex items-center gap-2 justify-center">
              <Shield size={16} />
              Upgrade Your Site
            </p>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-section-heading text-3xl sm:text-4xl lg:text-5xl text-white mb-6"
          >
            Ready to <span className="text-[#E53935]">get started</span>?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-subheading text-gray-300 max-w-2xl mx-auto mb-10"
          >
            Contact our specialists today to determine the best equipment configuration for your property.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link
              href="/contact#contact-form"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-linear-to-r from-[#FF4D4D] to-[#E53935] text-white text-btn text-base rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-red-500/30 hover:scale-105 active:scale-95 shadow-md group"
            >
              Request Quote
              <ArrowRight size={18} strokeWidth={1.5} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─── PROJECT ENQUIRY ──────────────────────────────────────── */}
      <section id="project-form" className="relative w-full bg-slate-50 py-20 sm:py-24 lg:py-32 overflow-hidden">
        <div className="absolute top-20 right-10 w-40 h-40 bg-red-100/20 rounded-full blur-2xl" />
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-gray-400/5 rounded-full blur-2xl" />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16">

            {/* Left col */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-6"
            >
              <div>
                <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 bg-red-50 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E53935]" />
                  <p className="text-label text-[#E53935] flex items-center gap-2">
                    <FileText size={14} />
                    Enquire Now
                  </p>
                </div>
                <h2 className="text-section-heading text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-3">
                  Tell us about <span className="text-[#E53935]">your project</span>
                </h2>
                <div className="w-12 h-1 bg-[#E53935] rounded-full mb-4" />
                <p className="text-subheading text-gray-600 max-w-lg">
                  Share your fire safety needs and we&apos;ll recommend the right equipment and send you a tailored quote within 24 hours.
                </p>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-body-sm text-gray-500 flex items-center gap-2"
              >
                <Clock size={16} className="text-[#E53935] shrink-0" />
                We respond within 24 hours with a full proposal.
              </motion.p>

              {/* Commitment card */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="group relative bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-[#E53935]/30 transition-all duration-300 overflow-hidden"
                style={{ borderWidth: '1px' }}
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#E53935] rounded-l-2xl transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
                <h4 className="text-card-title text-base text-gray-900 mb-4 group-hover:text-[#E53935] transition-colors duration-300">Our Commitment</h4>
                <ul className="space-y-3">
                  {[
                    { step: '01', text: 'Expert Product Selection' },
                    { step: '02', text: 'Competitive Bulk Pricing' },
                    { step: '03', text: 'Professional Setup Guidance' },
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-[#E53935]/10 text-[#E53935] text-xs font-black shrink-0">
                        {item.step}
                      </span>
                      <span className="text-body-sm text-gray-600">{item.text}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>

            {/* Right col: Form — identical pattern to Contact.tsx */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <form
                onSubmit={handleSubmit}
                className="space-y-6 bg-white p-6 sm:p-8 lg:p-10 rounded-2xl border border-gray-100 shadow-xl relative overflow-hidden"
                style={{ borderWidth: '1px' }}
              >
                {/* Gradient top accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-[#FF4D4D] via-[#E53935] to-[#FF4D4D]" />

                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="eq-name" className="text-label text-gray-700 block mb-2">Name</label>
                    <input
                      id="eq-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={inputCls}
                      style={{ borderWidth: '1px' }}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="eq-email" className="text-label text-gray-700 block mb-2">Email</label>
                    <input
                      id="eq-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={inputCls}
                      style={{ borderWidth: '1px' }}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {/* Phone & Interest */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="eq-phone" className="text-label text-gray-700 block mb-2">Phone</label>
                    <input
                      id="eq-phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={inputCls}
                      style={{ borderWidth: '1px' }}
                      placeholder="+250 xxx xxx xxx"
                    />
                  </div>
                  <div>
                    <label htmlFor="eq-service" className="text-label text-gray-700 block mb-2">Primary Interest</label>
                    <select
                      id="eq-service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className={inputCls}
                      style={{ borderWidth: '1px' }}
                    >
                      <option value="" disabled>Select your interest</option>
                      <option value="Fire Equipment Supply">Fire Equipment Supply</option>
                      <option value="Installation Services">Installation Services</option>
                      <option value="Inspection & Testing">Inspection &amp; Testing</option>
                      <option value="Fire Extinguisher Refilling">Fire Extinguisher Refilling</option>
                      <option value="Maintenance Services">Maintenance Services</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="eq-message" className="text-label text-gray-700 block mb-2">Message</label>
                  <textarea
                    id="eq-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className={`${inputCls} resize-none`}
                    style={{ borderWidth: '1px' }}
                    placeholder="Describe your safety requirements..."
                  />
                </div>

                {/* Submit */}
                <motion.button
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-3.5 bg-linear-to-r from-[#FF4D4D] to-[#E53935] text-white text-btn text-base rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-red-500/30 shadow-md inline-flex items-center justify-center gap-2 group disabled:cursor-not-allowed disabled:opacity-80"
                >
                  {isSubmitting ? 'Sending...' : 'Request a Quote'}
                  <ArrowRight size={18} strokeWidth={1.5} className="transition-transform group-hover:translate-x-1" />
                </motion.button>

                {/* Error */}
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-xl border border-red-200 bg-red-50 p-4"
                  >
                    <p className="text-sm font-semibold text-red-700">Your enquiry could not be sent</p>
                    <p className="mt-1 text-sm text-red-600">{error}</p>
                  </motion.div>
                )}

                {/* Success */}
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-xl border border-emerald-200 bg-emerald-50 p-4"
                  >
                    <p className="text-sm font-semibold text-emerald-700">Thank you for your enquiry</p>
                    <p className="mt-1 text-sm text-emerald-600">Our team will review your request and follow up shortly.</p>
                  </motion.div>
                )}
              </form>
            </motion.div>

          </div>
        </div>
      </section>
    </main>
  );
}
