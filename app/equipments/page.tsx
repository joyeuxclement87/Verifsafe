'use client';

import Image from 'next/image';
import { Tool, Star, ArrowRight, FileText, ShieldCheck, Hammer, MapPin, Flame, Check } from 'tabler-icons-react';
import Link from 'next/link';
import WhoWeServe from '@/components/sections/WhoWeServe';

const equipmentDetails = [
  {
    id: 1,
    image: '/equipment-1.png',
    title: 'Fire Extinguishers',
    description: 'Portable firefighting equipment which helps control small fires.',
    link: '/equipments/fire-extinguishers'
  },
  {
    id: 2,
    image: '/equipment-2.png',
    title: 'Fire Alarm Systems',
    description: 'Detection systems which alert occupants during emergencies.',
    link: '/equipments/fire-alarm-systems'
  },
  {
    id: 3,
    image: '/equipment-3.png',
    title: 'Fire Hose Reels',
    description: 'Equipment which provides water supply for firefighting.',
    link: '/equipments/fire-hose-reels'
  },
  {
    id: 4,
    image: '/equipment-4.png',
    title: 'Fire Detection Devices',
    description: 'Smoke and heat detectors which identify fire risks early.',
    link: '/equipments/fire-detection-devices'
  },
  {
    id: 5,
    image: '/equipment-5.png',
    title: 'Emergency Lights & Exit Signs',
    description: 'Lighting systems which guide people to safety.',
    link: '/equipments/emergency-lights'
  },
  {
    id: 6,
    image: '/equipment-6.png',
    title: 'Fire Safety Accessories',
    description: 'Additional safety equipment which supports fire protection.',
    link: '/equipments/fire-safety-accessories'
  }
];

export default function EquipmentsPage() {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="relative w-full h-96 sm:h-[500px] lg:h-[600px] flex items-center justify-center overflow-hidden mt-0">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("/hero-3.webp")`,
            backgroundAttachment: 'fixed',
          }}
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-gray-950 via-gray-950/90 to-gray-950/90" />

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            {/* Section Label */}
            <div className="inline-block mb-4">
              <p
                className="text-white text-xs sm:text-sm font-bold tracking-widest px-4 py-2 bg-[#E53935]/10 rounded-full border border-[#E53935]/40 flex items-center gap-2 justify-center"
                style={{ fontFamily: 'Noto Sans, sans-serif', fontVariant: 'small-caps' }}
              >
                <Star size={16} />
                Our Products
              </p>
            </div>

            {/* Main Heading */}
            <h1
              className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-white mb-3 sm:mb-5 leading-tight uppercase tracking-wider"
              style={{ fontFamily: 'Oswald, sans-serif' }}
            >
              Fire Safety <span className="text-[#E53935]">Equipment</span>
            </h1>

            {/* Subheading */}
            <p
              className="text-lg sm:text-xl text-gray-200 mb-7 sm:mb-9 max-w-2xl leading-relaxed font-normal"
              style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
            >
              Certified fire protection equipment designed to safeguard people and property across all environments.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="w-full bg-white py-14 sm:py-16 lg:py-20">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl sm:text-4xl font-black text-gray-900 mb-4 leading-tight"
            style={{ fontFamily: 'Oswald, sans-serif' }}
          >
            Built for Safety. Ready When It <span className="text-[#E53935]">Matters</span>.
          </h2>
          <div className="w-16 h-1 bg-[#E53935] mx-auto mb-6 rounded-full" />
          <p
            className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal max-w-2xl mx-auto"
            style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
          >
            The right equipment can stop a small fire from becoming a major disaster.
            Our products are carefully selected to meet safety standards and perform when you need them most.
          </p>
        </div>
      </section>

      {/* Equipment Grid Section */}
      <section className="relative w-full bg-linear-to-b from-white to-gray-50 py-20 sm:py-24 lg:py-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-20 right-10 w-40 h-40 bg-red-100/20 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-yellow-100/20 rounded-full blur-2xl animate-bounce" style={{ animationDelay: '1s' }} />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <p
                className="text-[#E53935] text-sm sm:text-base font-bold tracking-widest uppercase px-4 py-2 bg-red-50 rounded-full flex items-center gap-2"
                style={{ fontFamily: 'Noto Sans, sans-serif' }}
              >
                <Tool size={16} />
                Equipment Catalog
              </p>
            </div>

            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-tight"
              style={{ fontFamily: 'Oswald, sans-serif' }}
            >
              Our <span className="text-[#E53935]">Products</span>
            </h2>

            {/* Decorative Divider */}
            <div className="w-20 h-1 bg-[#E53935] mx-auto mt-6 mb-6 rounded-full" />

            <p
              className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-normal leading-relaxed"
              style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
            >
              Click on any equipment below to learn more about features and applications.
            </p>
          </div>

          {/* Equipment Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {equipmentDetails.map((equipment) => (
              <Link
                key={equipment.id}
                href={equipment.link}
                className="group relative bg-white border border-gray-100 rounded-2xl hover:border-[#E53935]/30 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden"
                style={{ borderWidth: '1px' }}
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-[#FF4D4D] via-[#E53935] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                {/* Image Banner */}
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src={equipment.image}
                    alt={equipment.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 pt-5 flex flex-col flex-grow">
                  {/* Title */}
                  <h3
                    className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#E53935] transition-colors duration-300"
                    style={{ fontFamily: 'Oswald, sans-serif' }}
                  >
                    {equipment.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-base text-gray-600 leading-relaxed font-normal flex-grow mb-5"
                    style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
                  >
                    {equipment.description}
                  </p>

                  {/* View Details Link */}
                  <div className="mt-auto">
                    <span
                      className="inline-flex items-center gap-2 text-[#E53935] font-bold text-sm group-hover:gap-3 transition-all duration-300"
                      style={{ fontFamily: 'Noto Sans, sans-serif' }}
                    >
                      View Details
                      <ArrowRight size={16} strokeWidth={1.5} className="transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-[#FF4D4D] to-[#E53935] rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Equipment Section */}
      <section className="w-full bg-white py-16 sm:py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-red-50/30 rounded-full blur-3xl" />

        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <p
                className="text-[#E53935] text-sm sm:text-base font-bold tracking-widest uppercase px-4 py-2 bg-red-50 rounded-full flex items-center gap-2"
                style={{ fontFamily: 'Noto Sans, sans-serif' }}
              >
                <Star size={16} />
                Why Our Equipment
              </p>
            </div>

            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight"
              style={{ fontFamily: 'Oswald, sans-serif' }}
            >
              Simple. Reliable. <span className="text-[#E53935]">Effective</span>.
            </h2>

            <div className="w-20 h-1 bg-[#E53935] mx-auto mt-6 mb-6 rounded-full" />
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 max-w-3xl mx-auto">
            {[
              { text: 'Certified and safety-compliant', icon: <ShieldCheck size={24} /> },
              { text: 'Durable and easy to use', icon: <Hammer size={24} /> },
              { text: 'Suitable for different environments', icon: <MapPin size={24} /> },
              { text: 'Selected for real emergency performance', icon: <Flame size={24} /> },
            ].map((benefit, index) => (
              <div
                key={index}
                className="group flex items-center gap-4 bg-gray-50 border border-gray-100 rounded-2xl p-5 hover:border-[#E53935]/30 hover:bg-white hover:shadow-lg transition-all duration-300 relative overflow-hidden"
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-[#FF4D4D] via-[#E53935] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Icon Container */}
                <span className="shrink-0 w-11 h-11 rounded-xl bg-[#E53935]/10 flex items-center justify-center text-[#E53935] group-hover:bg-[#E53935]/15 group-hover:scale-110 transition-all duration-300">
                  {benefit.icon}
                </span>

                {/* Text */}
                <span
                  className="text-base font-semibold text-gray-800 group-hover:text-gray-900 transition-colors duration-300"
                  style={{ fontFamily: 'Noto Sans, sans-serif' }}
                >
                  {benefit.text}
                </span>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-[#FF4D4D] to-[#E53935] rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhoWeServe />

      {/* CTA Section */}
      <section className="relative w-full py-14 sm:py-16 lg:py-20 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("/hero-3.webp")`,
            backgroundAttachment: 'fixed',
          }}
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-gray-950 via-gray-950/90 to-gray-950/90" />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            {/* Section Label */}
            <div className="inline-block mb-3">
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

            {/* Main Heading */}
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-3 leading-tight"
              style={{ fontFamily: 'Oswald, sans-serif' }}
            >
              Need the Right <span className="text-[#E53935]">Equipment</span>?
            </h2>

            {/* Description */}
            <p
              className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed font-normal mb-8"
              style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
            >
              Contact us today to find the perfect fire safety equipment for your needs.
            </p>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-linear-to-r from-[#FF4D4D] to-[#E53935] text-white font-medium text-base transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/50 hover:scale-105 active:scale-95 shadow-lg rounded-lg uppercase tracking-wide group"
              style={{ fontFamily: 'Noto Sans, sans-serif' }}
            >
              <FileText size={16} strokeWidth={1} />
              Request a Quote
              <ArrowRight size={16} strokeWidth={1.5} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Project Enquiry Section */}
      <section id="project-form" className="w-full bg-gray-50 py-16 sm:py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-red-50/40 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gray-200/30 rounded-full blur-3xl" />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16">

            {/* Left: Project Enquiry Info */}
            <div className="flex flex-col gap-6">
              {/* Section Label */}
              <div className="inline-block">
                <p
                  className="text-[#E53935] text-sm sm:text-base font-bold tracking-widest uppercase px-4 py-2 bg-red-50 rounded-full inline-flex items-center gap-2"
                  style={{ fontFamily: 'Noto Sans, sans-serif' }}
                >
                  <FileText size={16} />
                  Project Enquiry
                </p>
              </div>

              {/* Main Heading */}
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight"
                style={{ fontFamily: 'Oswald, sans-serif' }}
              >
                Tell us about your project
              </h2>

              {/* Helper Micro-text */}
              <p
                className="text-sm text-gray-500"
                style={{ fontFamily: 'Noto Sans, sans-serif' }}
              >
                We respond within 24 hours with a full proposal.
              </p>

              {/* Description */}
              <p
                className="text-base sm:text-lg text-gray-600 font-normal leading-relaxed"
                style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
              >
                Share your fire safety needs and we'll recommend the right solution and send you a tailored quote.
              </p>

              {/* Small Header */}
              <div>
                <p
                  className="text-sm text-[#E53935] uppercase tracking-[0.18em] font-bold mb-2"
                  style={{ fontFamily: 'Noto Sans, sans-serif' }}
                >
                  Request a Quote
                </p>
                <p
                  className="text-base text-gray-600 leading-relaxed"
                  style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
                >
                  Get a clear and professional fire safety proposal based on your requirements.
                </p>
              </div>

              {/* What happens next */}
              <div className="bg-white border border-gray-200 rounded-2xl p-5">
                <h4 className="text-sm font-bold text-gray-900 mb-3" style={{ fontFamily: 'Oswald, sans-serif' }}>
                  What happens next?
                </h4>
                <ul className="space-y-3 text-gray-600 text-sm" style={{ fontFamily: 'Noto Sans, sans-serif' }}>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#E53935]/10 text-[#E53935] shrink-0">
                      <Check size={13} />
                    </span>
                    We review your request
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#E53935]/10 text-[#E53935] shrink-0">
                      <Check size={13} />
                    </span>
                    We analyze your safety needs
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#E53935]/10 text-[#E53935] shrink-0">
                      <Check size={13} />
                    </span>
                    We send a tailored quotation
                  </li>
                </ul>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div>
              <form onSubmit={(e) => { e.preventDefault(); console.log('Form submitted'); }} className="space-y-6">
                {/* Name Input */}
                <div>
                  <label
                    htmlFor="svc-name"
                    className="block text-sm font-semibold text-gray-800 mb-2"
                    style={{ fontFamily: 'Noto Sans, sans-serif' }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="svc-name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:bg-white focus:border-[#E53935] focus:ring-0 outline-none transition-all duration-300 placeholder-gray-400 text-gray-900"
                    style={{ fontFamily: 'Noto Sans, sans-serif', borderWidth: '1px', opacity: 0.9 }}
                    placeholder="Your full name"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label
                    htmlFor="svc-email"
                    className="block text-sm font-semibold text-gray-800 mb-2"
                    style={{ fontFamily: 'Noto Sans, sans-serif' }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="svc-email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:bg-white focus:border-[#E53935] focus:ring-0 outline-none transition-all duration-300 placeholder-gray-400 text-gray-900"
                    style={{ fontFamily: 'Noto Sans, sans-serif', borderWidth: '1px', opacity: 0.9 }}
                    placeholder="your@email.com"
                  />
                </div>

                {/* Service Type */}
                <div>
                  <label
                    htmlFor="svc-service"
                    className="block text-sm font-semibold text-gray-800 mb-2"
                    style={{ fontFamily: 'Noto Sans, sans-serif' }}
                  >
                    Service Type
                  </label>
                  <select
                    id="svc-service"
                    name="service"
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:bg-white focus:border-[#E53935] focus:ring-0 outline-none transition-all duration-300 text-gray-900"
                    style={{ fontFamily: 'Noto Sans, sans-serif', borderWidth: '1px', opacity: 0.9 }}
                    defaultValue=""
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
                    htmlFor="svc-phone"
                    className="block text-sm font-semibold text-gray-800 mb-2"
                    style={{ fontFamily: 'Noto Sans, sans-serif' }}
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="svc-phone"
                    name="phone"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:bg-white focus:border-[#E53935] focus:ring-0 outline-none transition-all duration-300 placeholder-gray-400 text-gray-900"
                    style={{ fontFamily: 'Noto Sans, sans-serif', borderWidth: '1px', opacity: 0.9 }}
                    placeholder="+250 xxx xxx xxx"
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label
                    htmlFor="svc-message"
                    className="block text-sm font-semibold text-gray-800 mb-2"
                    style={{ fontFamily: 'Noto Sans, sans-serif' }}
                  >
                    Message
                  </label>
                  <textarea
                    id="svc-message"
                    name="message"
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
              </form>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
