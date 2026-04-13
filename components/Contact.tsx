'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
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
      setFormData({ name: '', email: '', phone: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section className="w-full bg-white py-20 sm:py-24 lg:py-32">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          {/* Section Label */}
          <p
            className="text-[#E50914] text-sm sm:text-base font-bold tracking-widest uppercase mb-4"
            style={{ fontFamily: 'Noto Sans, sans-serif' }}
          >
            Get in touch
          </p>

          {/* Main Heading */}
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight"
            style={{ fontFamily: 'Oswald, sans-serif' }}
          >
            When You Need <span className="text-[#E50914]">Fire Protection</span>
          </h2>

          {/* Subheading */}
          <p
            className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto font-normal"
            style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
          >
            Our team is ready to help with fire safety equipment and protection solutions for your property or business.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16">
          
          {/* Left: Contact Info */}
          <div className="space-y-10">
            {/* Contact Methods */}
            <div className="space-y-8">
              {/* Phone */}
              <div className="flex gap-6 group">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-full bg-red-50 group-hover:bg-[#E50914] transition-colors duration-300">
                    <FontAwesomeIcon
                      icon={faPhone}
                      className="w-6 h-6 text-[#E50914] group-hover:text-white transition-colors duration-300"
                    />
                  </div>
                </div>
                <div>
                  <h3
                    className="text-lg font-bold text-gray-900 mb-1"
                    style={{ fontFamily: 'Oswald, sans-serif' }}
                  >
                    Phone
                  </h3>
                  <p
                    className="text-gray-700 text-base font-normal"
                    style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
                  >
                    +250 789 000 022
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-6 group">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-full bg-red-50 group-hover:bg-[#E50914] transition-colors duration-300">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="w-6 h-6 text-[#E50914] group-hover:text-white transition-colors duration-300"
                    />
                  </div>
                </div>
                <div>
                  <h3
                    className="text-lg font-bold text-gray-900 mb-1"
                    style={{ fontFamily: 'Oswald, sans-serif' }}
                  >
                    Email
                  </h3>
                  <p
                    className="text-gray-700 text-base font-normal"
                    style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
                  >
                    info@verifsafe.com
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex gap-6 group">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-full bg-red-50 group-hover:bg-[#E50914] transition-colors duration-300">
                    <FontAwesomeIcon
                      icon={faMapMarkerAlt}
                      className="w-6 h-6 text-[#E50914] group-hover:text-white transition-colors duration-300"
                    />
                  </div>
                </div>
                <div>
                  <h3
                    className="text-lg font-bold text-gray-900 mb-1"
                    style={{ fontFamily: 'Oswald, sans-serif' }}
                  >
                    Location
                  </h3>
                  <p
                    className="text-gray-700 text-base font-normal"
                    style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
                  >
                    Kigali, Rwanda
                  </p>
                </div>
              </div>
            </div>

            {/* Accent Divider */}
            <div className="pt-8 border-t border-gray-200">
              <p
                className="text-gray-600 text-base font-normal"
                style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
              >
                We respond to inquiries within 2 business hours during working hours, and maintain emergency support 24/7.
              </p>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-base font-bold text-gray-900 mb-3"
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
                  className="w-full px-4 py-3 border border-gray-300 focus:border-[#E50914] focus:ring-2 focus:ring-red-100 outline-none transition-all duration-300"
                  style={{ fontFamily: 'Noto Sans, sans-serif' }}
                  placeholder="Your full name"
                />
              </div>

              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-base font-bold text-gray-900 mb-3"
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
                  className="w-full px-4 py-3 border border-gray-300 focus:border-[#E50914] focus:ring-2 focus:ring-red-100 outline-none transition-all duration-300"
                  style={{ fontFamily: 'Noto Sans, sans-serif' }}
                  placeholder="your@email.com"
                />
              </div>

              {/* Phone Input */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-base font-bold text-gray-900 mb-3"
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
                  className="w-full px-4 py-3 border border-gray-300 focus:border-[#E50914] focus:ring-2 focus:ring-red-100 outline-none transition-all duration-300"
                  style={{ fontFamily: 'Noto Sans, sans-serif' }}
                  placeholder="+250 xxx xxx xxx"
                />
              </div>

              {/* Message Input */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-base font-bold text-gray-900 mb-3"
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
                  className="w-full px-4 py-3 border border-gray-300 focus:border-[#E50914] focus:ring-2 focus:ring-red-100 outline-none transition-all duration-300 resize-none"
                  style={{ fontFamily: 'Noto Sans, sans-serif' }}
                  placeholder="Tell us about your fire safety needs..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-8 py-4 bg-[#E50914] text-white font-bold rounded-lg text-lg transition-all duration-300 hover:bg-red-700 hover:shadow-lg active:scale-95 shadow-md inline-flex items-center justify-center gap-2 group"
                style={{ fontFamily: 'Oswald, sans-serif' }}
              >
                Request a Quote
                <svg className="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                    ✓ Thank you! We'll be in touch shortly.
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
