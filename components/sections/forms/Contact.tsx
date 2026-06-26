'use client';

import { useState } from 'react';
import { Phone, Mail, Clock, MapPin } from 'tabler-icons-react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
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
        throw new Error(data?.message || 'Unable to send your message right now.');
      }

      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      setTimeout(() => {
        setSubmitted(false);
      }, 4000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to send your message right now.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactCards = [
    {
      icon: <Phone size={22} className="text-[#E53935]" strokeWidth={1.5} />,
      label: 'Phone',
      value: '+250 788 632 620',
      href: 'tel:+250788632620',
    },
    {
      icon: <Mail size={22} className="text-[#E53935]" strokeWidth={1.5} />,
      label: 'Email',
      value: 'info@verifsafe.com',
      href: 'mailto:info@verifsafe.com',
    },
    {
      icon: <Clock size={22} className="text-[#E53935]" strokeWidth={1.5} />,
      label: 'Working Hours',
      value: 'Mon – Sat  |  8:00 AM – 6:00 PM',
      href: null,
    },
  ];

  return (
    <section id="contact-form" className="relative w-full bg-slate-50 py-20 sm:py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-20 right-10 w-40 h-40 bg-red-100/20 rounded-full blur-2xl" />
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-gray-400/5 rounded-full blur-2xl" />

      {/* Main content wrapper */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-5 px-4 py-2 bg-red-50 rounded-full">
            <span className="w-2 h-2 rounded-full bg-[#E53935]" />
            <p className="text-label text-[#E53935]">
              Contact Form
            </p>
          </div>
          <h2 className="text-section-heading text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-6 capitalize">
            Send Us a <span className="text-[#E53935]">Message</span>
          </h2>
          <div className="w-20 h-1 bg-[#E53935] mx-auto mb-6 rounded-full" />
          <p className="text-subheading text-gray-600 max-w-2xl mx-auto">
            Fill in the form below and our team will get back to you within 2 business hours.
          </p>
        </motion.div>


        {/* Two-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16">

          {/* Left Column: Contact info + Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8"
          >

            {/* Sub-header */}
            <div>
              <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 bg-red-50 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E53935]" />
                <p className="text-label text-[#E53935]">
                  Direct Contact
                </p>
              </div>
              <h3 className="text-section-heading text-2xl sm:text-3xl text-gray-900 mb-3">
                Quick <span className="text-[#E53935]">Reach</span>
              </h3>
              <div className="w-12 h-1 bg-[#E53935] rounded-full mb-4" />
              <p className="text-body-sm text-gray-500 max-w-md leading-relaxed">
                Connect with us directly through any of these channels — we&apos;re always ready to help.
              </p>
            </div>

            {/* Contact cards */}
            <div className="space-y-4">
              {contactCards.map((card, i) => {
                const CardTag = card.href ? motion.a : motion.div;
                const linkProps = card.href ? { href: card.href } : {};
                return (
                  <CardTag
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    whileHover={{ x: 6 }}
                    {...linkProps}
                    className="group relative flex items-center gap-5 p-5 rounded-2xl border border-gray-100 bg-white transition-all duration-300 shadow-sm hover:shadow-xl hover:border-[#E53935]/30 overflow-hidden cursor-pointer"
                    style={{ borderWidth: '1px' }}
                  >
                    {/* Left accent bar on hover */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#E53935] rounded-l-2xl transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

                    {/* Icon container with glow on hover */}
                    <div className="relative w-13 h-13 rounded-xl bg-[#E53935]/10 flex items-center justify-center shrink-0 group-hover:bg-[#E53935]/15 transition-all duration-300">
                      <div className="absolute inset-0 rounded-xl bg-[#E53935]/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative z-10">
                        {card.icon}
                      </div>
                    </div>

                    {/* Text content */}
                    <div className="flex-1 min-w-0">
                      <p className="text-label text-gray-400 mb-1">{card.label}</p>
                      <p className="text-card-title text-base text-gray-900 group-hover:text-[#E53935] transition-colors duration-300 truncate">{card.value}</p>
                    </div>

                    {/* Arrow for clickable cards */}
                    {card.href && (
                      <div className="shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                        <svg className="w-5 h-5 text-[#E53935]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                    )}
                  </CardTag>
                );
              })}
            </div>

            {/* Map */}
            <div className="group relative rounded-2xl overflow-hidden border border-gray-100 shadow-lg flex-1 min-h-60 hover:shadow-xl transition-all duration-300 hover:border-[#E53935]/30" style={{ borderWidth: '1px' }}>
              {/* Left accent bar on hover */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#E53935] rounded-l-2xl transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top z-10" />
              <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-2 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full shadow-md border border-gray-100/50">
                <MapPin size={14} className="text-[#E53935]" strokeWidth={1.5} />
                <span className="text-label text-gray-700">Kigali, Rwanda</span>
              </div>
              <iframe
                title="Verifsafe Location – Kigali, Rwanda"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63799.41861375086!2d30.04800!3d-1.94995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca4258ed8e797%3A0xf32b36a5411d0bc8!2sKigali%2C%20Rwanda!5e0!3m2!1sen!2s!4v1713600000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '240px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>


          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 sm:p-8 lg:p-10 rounded-2xl border border-gray-100 shadow-xl relative overflow-hidden" style={{ borderWidth: '1px' }}>
              {/* Subtle top accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-[#FF4D4D] via-[#E53935] to-[#FF4D4D]" />

              {/* Name & Email in a row on larger screens */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="text-label text-gray-700 block mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-[#E53935] focus:ring-2 focus:ring-[#E53935]/10 outline-none transition-all duration-300 placeholder-gray-400 text-gray-900 text-body-sm"
                    style={{ borderWidth: '1px' }}
                    placeholder="Your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="text-label text-gray-700 block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-[#E53935] focus:ring-2 focus:ring-[#E53935]/10 outline-none transition-all duration-300 placeholder-gray-400 text-gray-900 text-body-sm"
                    style={{ borderWidth: '1px' }}
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              {/* Service & Phone in a row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Service Type */}
                <div>
                  <label htmlFor="service" className="text-label text-gray-700 block mb-2">
                    Service Type
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-[#E53935] focus:ring-2 focus:ring-[#E53935]/10 outline-none transition-all duration-300 text-gray-900 text-body-sm"
                    style={{ borderWidth: '1px' }}
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

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="text-label text-gray-700 block mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-[#E53935] focus:ring-2 focus:ring-[#E53935]/10 outline-none transition-all duration-300 placeholder-gray-400 text-gray-900 text-body-sm"
                    style={{ borderWidth: '1px' }}
                    placeholder="+250 xxx xxx xxx"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="text-label text-gray-700 block mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-[#E53935] focus:ring-2 focus:ring-[#E53935]/10 outline-none transition-all duration-300 placeholder-gray-400 text-gray-900 resize-none text-body-sm"
                  style={{ borderWidth: '1px' }}
                  placeholder="Describe your request..."
                />
              </div>

              <motion.button
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-3.5 bg-linear-to-r from-[#FF4D4D] to-[#E53935] text-white text-btn text-base rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/50 shadow-lg inline-flex items-center justify-center gap-2 group disabled:cursor-not-allowed disabled:opacity-80"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                {!isSubmitting && (
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                )}
              </motion.button>

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-xl border border-red-200 bg-red-50 p-4"
                >
                  <p className="text-sm font-semibold text-red-700">Your message could not be sent</p>
                  <p className="mt-1 text-sm text-red-600">{error}</p>
                </motion.div>
              )}

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-xl border border-emerald-200 bg-emerald-50 p-4"
                >
                  <p className="text-sm font-semibold text-emerald-700">Thank you for your message</p>
                  <p className="mt-1 text-sm text-emerald-600">Our team will review your request and get back to you shortly.</p>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
