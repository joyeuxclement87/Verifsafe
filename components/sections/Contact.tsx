'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section className="w-full bg-gray-50 py-14 sm:py-18 lg:py-24 relative overflow-hidden">
      <div className="absolute top-10 left-10 w-32 h-32 bg-red-50/40 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-gray-200/30 rounded-full blur-3xl" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-block mb-4">
            <p
              className="text-[#E53935] text-sm sm:text-base font-bold tracking-widest uppercase px-4 py-2 bg-red-50 rounded-full flex items-center gap-2 justify-center"
              style={{ fontFamily: 'Noto Sans, sans-serif' }}
            >
              <FontAwesomeIcon icon={faPhone} className="w-4 h-4" />
              Contact Form
            </p>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-3 leading-tight"
            style={{ fontFamily: 'Oswald, sans-serif' }}
          >
            Send Us a <span className="text-[#E53935]">Message</span>
          </h2>
          <div className="w-12 h-1 bg-[#E53935] rounded-full mx-auto mb-4" />
          <p
            className="text-lg text-gray-500 max-w-xl mx-auto font-normal leading-relaxed"
            style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
          >
            Fill in the form below and our team will get back to you within 2 business hours.
          </p>
        </div>


        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16">
          
          {/* Left: Direct Contact Info */}
          <div className="flex flex-col gap-8">

            {/* Label */}
            <div>
              <p className="text-[#E53935] text-xs font-bold tracking-widest uppercase mb-2" style={{ fontFamily: 'Noto Sans, sans-serif' }}>
                Direct Contact
              </p>
              <h3 className="text-2xl sm:text-3xl font-black text-gray-900 leading-tight" style={{ fontFamily: 'Oswald, sans-serif' }}>
                Quick Reach
              </h3>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">

              {/* Phone */}
              <a href="tel:+250XXX000000" className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 bg-gray-50 transition-all duration-300">
                <div className="w-11 h-11 rounded-full bg-[#E53935]/10 flex items-center justify-center shrink-0">
                  <FontAwesomeIcon icon={faPhone} className="w-5 h-5 text-[#E53935]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-0.5" style={{ fontFamily: 'Noto Sans, sans-serif' }}>Phone</p>
                  <p className="text-gray-900 font-semibold text-base" style={{ fontFamily: 'Noto Sans, sans-serif' }}>+250 XXX XXX XXX</p>
                </div>
              </a>

              {/* Email */}
              <a href="mailto:info@verifsafe.com" className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 bg-gray-50">
                <div className="w-11 h-11 rounded-full bg-[#E53935]/10 flex items-center justify-center shrink-0">
                  <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5 text-[#E53935]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-0.5" style={{ fontFamily: 'Noto Sans, sans-serif' }}>Email</p>
                  <p className="text-gray-900 font-semibold text-base" style={{ fontFamily: 'Noto Sans, sans-serif' }}>info@verifsafe.com</p>
                </div>
              </a>

              {/* Hours */}
              <div className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 bg-gray-50 group">
                <div className="w-11 h-11 rounded-full bg-[#E53935]/10 flex items-center justify-center shrink-0">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="w-5 h-5 text-[#E53935]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-0.5" style={{ fontFamily: 'Noto Sans, sans-serif' }}>Working Hours</p>
                  <p className="text-gray-900 font-semibold text-base" style={{ fontFamily: 'Noto Sans, sans-serif' }}>Mon – Sat &nbsp;|&nbsp; 8:00 AM – 6:00 PM</p>
                </div>
              </div>
            </div>

            {/* Live Map */}
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-md flex-1 min-h-[240px]">
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
          </div>


          {/* Right: Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-800 mb-2"
                  style={{ fontFamily: 'Noto Sans, sans-serif' }}
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
                  style={{ fontFamily: 'Noto Sans, sans-serif', borderWidth: '1px', opacity: 0.9 }}
                  placeholder="Your full name"
                />
              </div>

              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-800 mb-2"
                  style={{ fontFamily: 'Noto Sans, sans-serif' }}
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
                  style={{ fontFamily: 'Noto Sans, sans-serif', borderWidth: '1px', opacity: 0.9 }}
                  placeholder="your@email.com"
                />
              </div>

              {/* Service Type */}
              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-semibold text-gray-800 mb-2"
                  style={{ fontFamily: 'Noto Sans, sans-serif' }}
                >
                  Service Type
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange as any}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:bg-white focus:border-[#E53935] focus:ring-0 outline-none transition-all duration-300 text-gray-900"
                  style={{ fontFamily: 'Noto Sans, sans-serif', borderWidth: '1px', opacity: 0.9 }}
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
                  htmlFor="phone"
                  className="block text-sm font-semibold text-gray-800 mb-2"
                  style={{ fontFamily: 'Noto Sans, sans-serif' }}
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
                  style={{ fontFamily: 'Noto Sans, sans-serif', borderWidth: '1px', opacity: 0.9 }}
                  placeholder="+250 xxx xxx xxx"
                />
              </div>

              {/* Message Input */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-800 mb-2"
                  style={{ fontFamily: 'Noto Sans, sans-serif' }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
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

              {/* Success Message */}
              {submitted && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p
                    className="text-green-800 font-semibold text-center"
                    style={{ fontFamily: 'Noto Sans, sans-serif' }}
                  >
                    ✓ Thank you! We Will be in touch shortly.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
