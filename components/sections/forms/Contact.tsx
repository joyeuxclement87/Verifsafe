'use client';

import { useState } from 'react';
import { Phone, Mail, Clock, MapPin, ArrowRight, Send } from 'tabler-icons-react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

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
      icon: <Phone size={22} className="text-[#D62828]" strokeWidth={1.5} />,
      label: 'Phone',
      value: '+250 788 632 620',
      href: 'tel:+250788632620',
    },
    {
      icon: <Mail size={22} className="text-[#D62828]" strokeWidth={1.5} />,
      label: 'Email',
      value: 'info@verifsafe.com',
      href: 'mailto:info@verifsafe.com',
    },
    {
      icon: <Clock size={22} className="text-[#D62828]" strokeWidth={1.5} />,
      label: 'Working Hours',
      value: 'Mon – Sat  |  8:00 AM – 6:00 PM',
      href: null,
    },
  ];

  return (
    <section id="contact-form" className="relative w-full bg-neutral py-20 sm:py-24 lg:py-32 overflow-hidden">

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
          <div className="flex items-center justify-center gap-3 mb-5">
            <span aria-hidden="true" className="h-px w-8 bg-[#D62828]" />
            <p className="text-label text-gray-500">Contact Form</p>
            <span aria-hidden="true" className="h-px w-8 bg-[#D62828]" />
          </div>
          <h2 className="text-section-heading  text-gray-900 mb-6 capitalize">
            Send Us a Message
          </h2>
          <p className="text-subheading text-gray-600 max-w-2xl mx-auto">
            Fill in the form below and our team will get back to you within 2 business hours.
          </p>
        </motion.div>


        {/* Two-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16">

          {/* Left Column: Contact info + Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8"
          >

            {/* Sub-header */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span aria-hidden="true" className="h-px w-8 bg-[#D62828]" />
                <p className="text-label text-gray-500">Direct Contact</p>
              </div>
              <h3 className="text-card-title text-gray-900 mb-3">
                Quick Reach
              </h3>
              <p className="text-body-sm text-gray-500 max-w-md leading-relaxed">
                Connect with us directly through any of these channels — we&apos;re always ready to help.
              </p>
            </div>

            {/* Contact cards */}
            <div className="border-t border-gray-200">
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
                    {...linkProps}
                    className="group flex items-center gap-5 py-5 border-b border-gray-200"
                  >
                    <span className="shrink-0">
                      {card.icon}
                    </span>

                    <div className="flex-1 min-w-0">
                      <p className="text-label text-gray-400 mb-1">{card.label}</p>
                      <p className="text-list-title text-gray-900 truncate">{card.value}</p>
                    </div>

                    {card.href && (
                      <ArrowRight size={20} className="text-[#D62828] shrink-0" strokeWidth={1.5} />
                    )}
                  </CardTag>
                );
              })}
            </div>

            {/* Map */}
            <div className="relative rounded-md overflow-hidden border border-gray-200 flex-1 min-h-60">
              <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-2 px-3 py-1.5 bg-white rounded-md shadow-md border border-gray-200">
                <MapPin size={14} className="text-[#D62828]" strokeWidth={1.5} />
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 sm:p-8 lg:p-10 rounded-md border border-gray-200 relative">
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
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:bg-white focus:border-[#D62828] focus:ring-2 focus:ring-[#D62828]/10 outline-none transition-all duration-300 placeholder-gray-400 text-gray-900 text-body-sm"
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
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:bg-white focus:border-[#D62828] focus:ring-2 focus:ring-[#D62828]/10 outline-none transition-all duration-300 placeholder-gray-400 text-gray-900 text-body-sm"
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
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:bg-white focus:border-[#D62828] focus:ring-2 focus:ring-[#D62828]/10 outline-none transition-all duration-300 text-gray-900 text-body-sm"
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
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:bg-white focus:border-[#D62828] focus:ring-2 focus:ring-[#D62828]/10 outline-none transition-all duration-300 placeholder-gray-400 text-gray-900 text-body-sm"
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
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:bg-white focus:border-[#D62828] focus:ring-2 focus:ring-[#D62828]/10 outline-none transition-all duration-300 placeholder-gray-400 text-gray-900 resize-none text-body-sm"
                  style={{ borderWidth: '1px' }}
                  placeholder="Describe your request..."
                />
              </div>

              <Button
                type="submit"
                loading={isSubmitting}
                disabled={isSubmitting}
                icon={<Send size={18} strokeWidth={2} />}
                className="w-full"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-md border border-red-200 bg-red-50 p-4"
                >
                  <p className="text-body-sm font-semibold text-red-700">Your message could not be sent</p>
                  <p className="mt-1 text-body-sm text-red-600">{error}</p>
                </motion.div>
              )}

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-md border border-emerald-200 bg-emerald-50 p-4"
                >
                  <p className="text-body-sm font-semibold text-emerald-700">Thank you for your message</p>
                  <p className="mt-1 text-body-sm text-emerald-600">Our team will review your request and get back to you shortly.</p>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
