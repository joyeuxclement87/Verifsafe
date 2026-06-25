'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
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

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Unable to send your message right now.');
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

  return (
    <section id="contact-form" className="w-full bg-gray-50 py-14 sm:py-18 lg:py-24 relative overflow-hidden">
      <div className="absolute top-10 left-10 w-32 h-32 bg-red-50/40 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-gray-200/30 rounded-full blur-3xl" />

      {/* Main content wrapper with maximum width and horizontal centering */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section header containing badges, primary heading, and instructional text */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          {/* Wrapper for the contact section highlighted badge */}
          <div className="inline-block mb-4">
            <p
              className="text-[#E53935] text-sm sm:text-base font-bold tracking-widest capitalize px-4 py-2 bg-red-50 rounded-full flex items-center gap-2 justify-center"
             
            >
              <FontAwesomeIcon icon={faPhone} className="w-4 h-4" />
              Contact Form
            </p>
          </div>
          {/* Main section heading for the contact form */}
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-3 leading-tight"
           
          >
            Send Us a <span className="text-[#E53935]">Message</span>
          </h2>
          {/* Decorative small divider underline */}
          <div className="w-12 h-1 bg-[#E53935] rounded-full mx-auto mb-4" />
          {/* Supportive text guiding the user on form submission expectations */}
          <p
            className="text-lg text-gray-500 max-w-xl mx-auto font-normal leading-relaxed"
           
          >
            Fill in the form below and our team will get back to you within 2 business hours.
          </p>
        </motion.div>


        {/* Two-column responsive grid layout for contact details and the message form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16">
          
          {/* Left Column: Direct contact methods and physical location map */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8"
          >

            {/* Sub-header for the direct contact information grouping */}
            <div>
              <p className="text-[#E53935] text-xs font-bold tracking-widest capitalize mb-2">
                Direct Contact
              </p>
              <h3 className="text-2xl sm:text-3xl font-black text-gray-900 leading-tight">
                Quick Reach
              </h3>
            </div>

            {/* Container for contact cards (Phone, Email, Hours) */}
            <div className="space-y-4">

              {/* Individual interactive card for phone contact */}
              <motion.a 
                whileHover={{ x: 10 }}
                href="tel:+250788632620" 
                className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 bg-gray-50 transition-all duration-300 shadow-sm"
              >
                <div className="w-11 h-11 rounded-full bg-[#E53935]/10 flex items-center justify-center shrink-0">
                  <FontAwesomeIcon icon={faPhone} className="w-5 h-5 text-[#E53935]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 capitalize tracking-widest mb-0.5">Phone</p>
                  <p className="text-gray-900 font-semibold text-base">+250 788 632 620</p>
                </div>
              </motion.a>

              {/* Individual interactive card for email contact */}
              <motion.a 
                whileHover={{ x: 10 }}
                href="mailto:info@verifsafe.com" 
                className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 bg-gray-50 shadow-sm"
              >
                <div className="w-11 h-11 rounded-full bg-[#E53935]/10 flex items-center justify-center shrink-0">
                  <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5 text-[#E53935]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 capitalize tracking-widest mb-0.5">Email</p>
                  <p className="text-gray-900 font-semibold text-base">info@verifsafe.com</p>
                </div>
              </motion.a>

              {/* Information card for business operating hours */}
              <motion.div 
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 bg-gray-50 shadow-sm group"
              >
                <div className="w-11 h-11 rounded-full bg-[#E53935]/10 flex items-center justify-center shrink-0">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="w-5 h-5 text-[#E53935]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 capitalize tracking-widest mb-0.5">Working Hours</p>
                  <p className="text-gray-900 font-semibold text-base">Mon – Sat &nbsp;|&nbsp; 8:00 AM – 6:00 PM</p>
                </div>
              </motion.div>
            </div>

            {/* Sub-container for the embedded Google Map location */}
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-lg flex-1 min-h-60">
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


          {/* Right Column: User inquiry submission form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Main form element with internal spacing and background styling */}
            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-xl">
              {/* Field group for the user's name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-800 mb-2"
                 
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:bg-white focus:border-[#E53935] focus:ring-0 outline-none transition-all duration-300 placeholder-gray-400 text-gray-900"
                  style={{ borderWidth: '1px' }}
                  placeholder="Your full name"
                />
              </div>

              {/* Field group for the user's email address */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-800 mb-2"
                 
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:bg-white focus:border-[#E53935] focus:ring-0 outline-none transition-all duration-300 placeholder-gray-400 text-gray-900"
                  style={{ borderWidth: '1px' }}
                  placeholder="your@email.com"
                />
              </div>

              {/* Field group for selecting the desired service type */}
              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-semibold text-gray-800 mb-2"
                 
                >
                  Service Type
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:bg-white focus:border-[#E53935] focus:ring-0 outline-none transition-all duration-300 text-gray-900"
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

              {/* Field group for the user's phone number */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-gray-800 mb-2"
                 
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:bg-white focus:border-[#E53935] focus:ring-0 outline-none transition-all duration-300 placeholder-gray-400 text-gray-900"
                  style={{ borderWidth: '1px' }}
                  placeholder="+250 xxx xxx xxx"
                />
              </div>

              {/* Field group for the detailed message or inquiry content */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-800 mb-2"
                 
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:bg-white focus:border-[#E53935] focus:ring-0 outline-none transition-all duration-300 placeholder-gray-400 text-gray-900 resize-none"
                  style={{ borderWidth: '1px' }}
                  placeholder="Describe your request..."
                />
              </div>

              <motion.button
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-3 bg-linear-to-r from-[#FF4D4D] to-[#E53935] text-white font-medium text-base rounded-lg transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/50 shadow-lg inline-flex items-center justify-center gap-2 group disabled:cursor-not-allowed disabled:opacity-80"
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
