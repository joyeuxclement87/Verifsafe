'use client';

import Image from 'next/image';
import { Tool, Star, ArrowRight, FileText, ShieldCheck, Hammer, MapPin, Flame, Check, Bulb, Bell, Droplet, Radar, Package } from 'tabler-icons-react';
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
    icon: <Flame size={20} />
  },
  {
    id: 2,
    image: '/equipment-2.png',
    title: 'Fire Alarm Systems',
    description: 'Intelligent network sensors and control panels that provide early warning and evacuation alerts.',
    link: '/equipments/fire-alarm-systems',
    icon: <Bell size={20} />
  },
  {
    id: 3,
    image: '/equipment-3.png',
    title: 'Fire Hose Reels',
    description: 'High-pressure water delivery systems for continuous firefighting in commercial and industrial sites.',
    link: '/equipments/fire-hose-reels',
    icon: <Droplet size={20} />
  },
  {
    id: 4,
    image: '/equipment-4.png',
    title: 'Detection Devices',
    description: 'Precision smoke, heat, and flame sensors that identify fire risks at the earliest possible stage.',
    link: '/equipments/fire-detection-devices',
    icon: <Radar size={20} />
  },
  {
    id: 5,
    image: '/equipment-5.png',
    title: 'Emergency Lights',
    description: 'Reliable backup illumination and exit signage to guide occupants safely during power failures.',
    link: '/equipments/emergency-lights',
    icon: <Bulb size={20} />
  },
  {
    id: 6,
    image: '/equipment-6.png',
    title: 'Safety Accessories',
    description: 'Essential hardware including cabinets, blankets, and signage to support your safety infrastructure.',
    link: '/equipments/fire-safety-accessories',
    icon: <Package size={20} />
  }
];

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
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden mt-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("/verif.png")`,
            backgroundAttachment: 'fixed',
          }}
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
            <p className="text-white text-xs sm:text-sm font-bold tracking-widest capitalize">
              Product Catalog
            </p>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-black text-white mb-6 leading-tight capitalize tracking-tight"
           
          >
            Fire Safety <span className="text-[#E53935]">Equipment</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-normal"
           
          >
            Certified, high-performance fire protection hardware designed to safeguard people and property in any environment.
          </motion.p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="w-full py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 mb-5 px-4 py-2 bg-red-50 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#E53935]" />
              <p className="text-[#E53935] text-xs font-bold tracking-widest capitalize">Quality Standards</p>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-5 leading-tight capitalize">
              Built for <span className="text-[#E53935]">Safety</span>
            </h2>
            <div className="w-20 h-1 bg-[#E53935] rounded-full mx-auto mb-6" />
            <p className="text-lg text-gray-600 leading-relaxed font-normal max-w-2xl mx-auto">
              The right equipment can stop a small fire from becoming a major disaster. Our products are selected for real-world reliability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Equipment Grid Section */}
      <section className="relative w-full bg-gray-50 py-20 overflow-hidden">
        <div className="absolute top-20 right-10 w-40 h-40 bg-red-100/20 rounded-full blur-2xl animate-pulse" />
        
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {equipmentDetails.map((equipment, idx) => (
              <motion.div
                key={equipment.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Link
                  href={equipment.link}
                  className="group relative h-full bg-white border border-gray-200 rounded-3xl hover:border-[#E53935]/30 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-[#FF4D4D] via-[#E53935] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-[#FF4D4D] to-[#E53935] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                  <div className="relative w-full h-56 overflow-hidden">
                    <Image
                      src={equipment.image}
                      alt={equipment.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                    
                    <div className="absolute bottom-4 left-6 z-20 flex items-center gap-2">
                      <div className="w-10 h-10 rounded-xl bg-[#E53935] flex items-center justify-center text-white shadow-lg">
                        {equipment.icon}
                      </div>
                    </div>
                  </div>

                  <div className="p-8 flex flex-col flex-grow">
                    <h3
                      className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#E53935] transition-colors duration-300 capitalize tracking-tight"
                     
                    >
                      {equipment.title}
                    </h3>
                    <p
                      className="text-sm text-gray-500 leading-relaxed font-normal flex-grow mb-6"
                     
                    >
                      {equipment.description}
                    </p>
                    <div className="mt-auto flex items-center justify-between">
                      <span
                        className="inline-flex items-center gap-2 text-[#E53935] font-bold text-xs capitalize tracking-widest group-hover:gap-3 transition-all duration-300"
                       
                      >
                        View Solutions
                        <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Equipment Section */}
      <section className="w-full bg-white py-20 relative overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white border border-gray-100 rounded-3xl p-8 sm:p-12 shadow-[0_8px_40px_rgb(0,0,0,0.07)] relative overflow-hidden"
          >
             <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 xl:gap-20 relative z-10 items-start">
              <div className="lg:col-span-1 lg:sticky lg:top-8">
                <div className="inline-flex items-center gap-2 mb-5 px-4 py-2 bg-red-50 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-[#E53935]" />
                  <p className="text-[#E53935] text-xs font-bold tracking-widest capitalize">Core Value</p>
                </div>
                <h2 className="text-3xl sm:text-4xl xl:text-5xl font-black text-gray-900 mb-5 leading-tight capitalize">
                  Reliable <span className="text-[#E53935]">Performance</span>
                </h2>
                <div className="w-20 h-1 bg-[#E53935] rounded-full mb-6" />
                <p className="text-lg text-gray-600 leading-relaxed font-normal">
                  We don&apos;t just sell equipment; we provide certified life-safety systems.
                </p>
              </div>

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
                      className="group flex items-start gap-6 pb-6 border-b border-gray-100 hover:border-[#E53935]/40 transition-all duration-300"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-[#E53935]/10 group-hover:text-[#E53935] group-hover:scale-110 transition-all duration-500 shrink-0 mt-1">
                        {benefit.icon}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xl font-bold text-gray-900 group-hover:text-[#E53935] transition-colors duration-300">{benefit.title}</span>
                        <span className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">{benefit.detail}</span>
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

      {/* CTA Parallax Section */}
      <section className="relative w-full py-14 sm:py-16 lg:py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("/verif.png")`,
            backgroundAttachment: 'fixed',
          }}
        />
        <div className="absolute inset-0 bg-linear-to-r from-gray-950 via-gray-950/90 to-gray-950/90" />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-3"
          >
            <p className="text-white text-xs sm:text-sm font-bold tracking-widest capitalize px-4 py-2 bg-[#E53935]/10 rounded-full border border-[#E53935]/40 flex items-center gap-2 justify-center">
              <Star size={16} />
              Upgrade Your Site
            </p>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight"
          >
            Ready to <span className="text-[#E53935]">get started</span>?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed font-normal"
          >
            Contact our specialists today to determine the best equipment configuration for your property.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-8"
          >
            <Link
              href="/contact#contact-form"
              className="inline-flex items-center gap-2 px-8 py-3 bg-linear-to-r from-[#FF4D4D] to-[#E53935] text-white font-bold text-base rounded-lg transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/50 hover:scale-105 active:scale-95 shadow-lg group"
             
            >
              Request Quote
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Project Enquiry Section */}
      <section id="project-form" className="w-full bg-gray-50 py-16 sm:py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-red-50/40 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gray-200/0 rounded-full blur-3xl" />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-6"
            >
              <div className="inline-block">
                <p className="text-[#E53935] text-sm sm:text-base font-bold tracking-widest capitalize px-4 py-2 bg-red-50 rounded-full inline-flex items-center gap-2">
                  <FileText size={16} />
                  Enquire Now
                </p>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
                Tell us about <span className="text-[#E53935]">your project</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-600 font-normal leading-relaxed">
                Share your fire safety needs and we&apos;ll recommend the right equipment and send you a tailored quote within 24 hours.
              </p>
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h4 className="text-sm font-bold text-gray-900 mb-4">Our Commitment</h4>
                <ul className="space-y-4 text-gray-600 text-sm">
                   <li className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#E53935]/10 text-[#E53935] shrink-0"><Check size={13} /></span>
                    Expert Product Selection
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#E53935]/10 text-[#E53935] shrink-0"><Check size={13} /></span>
                    Competitive Bulk Pricing
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#E53935]/10 text-[#E53935] shrink-0"><Check size={13} /></span>
                    Professional Setup Guidance
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-2">Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:border-[#E53935] outline-none transition-all placeholder-gray-400 text-gray-900" style={{ borderWidth: '1px' }} placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-2">Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:border-[#E53935] outline-none transition-all placeholder-gray-400 text-gray-900" style={{ borderWidth: '1px' }} placeholder="your@email.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-2">Phone</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:border-[#E53935] outline-none transition-all placeholder-gray-400 text-gray-900" style={{ borderWidth: '1px' }} placeholder="+250 xxx xxx xxx" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-2">Primary Interest</label>
                  <select name="service" value={formData.service} onChange={handleChange} required className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:border-[#E53935] outline-none transition-all text-gray-900" style={{ borderWidth: '1px' }}>
                    <option value="" disabled>Select your interest</option>
                    <option value="Fire Equipment Supply">Fire Equipment Supply</option>
                    <option value="Installation Services">Installation Services</option>
                    <option value="Inspection & Testing">Inspection & Testing</option>
                    <option value="Fire Extinguisher Refilling">Fire Extinguisher Refilling</option>
                    <option value="Maintenance Services">Maintenance Services</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-2">Message</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} required rows={4} className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:border-[#E53935] outline-none transition-all placeholder-gray-400 text-gray-900 resize-none" style={{ borderWidth: '1px' }} placeholder="Describe your safety requirements..." />
                </div>
                <button type="submit" disabled={isSubmitting} className="w-full px-8 py-3 bg-linear-to-r from-[#FF4D4D] to-[#E53935] text-white font-bold text-base rounded-lg transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/50 hover:scale-105 active:scale-95 shadow-lg flex items-center justify-center gap-2 group disabled:cursor-not-allowed disabled:opacity-80">
                  {isSubmitting ? 'Sending...' : 'Request a Quote'}
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </button>
                {error && <p className="text-sm text-red-600 text-center">{error}</p>}
                {submitted && <p className="text-sm text-green-600 text-center">Thank you! Your enquiry has been received and our team will follow up shortly.</p>}
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
