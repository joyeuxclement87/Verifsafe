'use client';

import Image from 'next/image';
import { Tool, Star, ArrowRight, FileText, ShieldCheck, Hammer, MapPin, Flame, Check, Bulb, Bell, Droplet, Radar, Package } from 'tabler-icons-react';
import Link from 'next/link';
import WhoWeServe from '@/components/sections/WhoWeServe';

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
  return (
    <main className="w-full bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden mt-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("/hero-3.webp")`,
            backgroundAttachment: 'fixed',
          }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/70 to-black/85" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-20">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <Star size={16} className="text-[#E53935]" />
            <p className="text-white text-xs sm:text-sm font-bold tracking-widest uppercase" style={{ fontFamily: 'Noto Sans, sans-serif' }}>
              Product Catalog
            </p>
          </div>
          <h1
            className="text-4xl sm:text-5xl lg:text-7xl font-black text-white mb-6 leading-tight uppercase tracking-tight"
            style={{ fontFamily: 'Oswald, sans-serif' }}
          >
            Fire Safety <span className="text-[#E53935]">Equipment</span>
          </h1>
          <p
            className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-normal"
            style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
          >
            Certified, high-performance fire protection hardware designed to safeguard people and property in any environment.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="w-full py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-5 px-4 py-2 bg-red-50 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#E53935]" />
              <p className="text-[#E53935] text-xs font-bold tracking-widest uppercase" style={{ fontFamily: 'Noto Sans, sans-serif' }}>Quality Standards</p>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-5 leading-tight uppercase" style={{ fontFamily: 'Oswald, sans-serif' }}>
              Built for <span className="text-[#E53935]">Safety</span>
            </h2>
            <div className="w-20 h-1 bg-[#E53935] rounded-full mx-auto mb-6" />
            <p className="text-lg text-gray-600 leading-relaxed font-normal max-w-2xl mx-auto" style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}>
              The right equipment can stop a small fire from becoming a major disaster. Our products are selected for real-world reliability.
            </p>
          </div>
        </div>
      </section>

      {/* Equipment Grid Section */}
      <section className="relative w-full bg-gray-50 py-20 overflow-hidden">
        <div className="absolute top-20 right-10 w-40 h-40 bg-red-100/20 rounded-full blur-2xl animate-pulse" />
        
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {equipmentDetails.map((equipment) => (
              <Link
                key={equipment.id}
                href={equipment.link}
                className="group relative bg-white border border-gray-200 rounded-3xl hover:border-[#E53935]/30 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col overflow-hidden"
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
                    className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#E53935] transition-colors duration-300 uppercase tracking-tight"
                    style={{ fontFamily: 'Oswald, sans-serif' }}
                  >
                    {equipment.title}
                  </h3>
                  <p
                    className="text-sm text-gray-500 leading-relaxed font-normal flex-grow mb-6"
                    style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
                  >
                    {equipment.description}
                  </p>
                  <div className="mt-auto flex items-center justify-between">
                    <span
                      className="inline-flex items-center gap-2 text-[#E53935] font-bold text-xs uppercase tracking-widest group-hover:gap-3 transition-all duration-300"
                      style={{ fontFamily: 'Noto Sans, sans-serif' }}
                    >
                      View Solutions
                      <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Equipment Section */}
      <section className="w-full bg-white py-20 relative overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-gray-100 rounded-3xl p-8 sm:p-12 shadow-[0_8px_40px_rgb(0,0,0,0.07)] relative overflow-hidden">
             <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 xl:gap-20 relative z-10 items-start">
              <div className="lg:col-span-1 lg:sticky lg:top-8">
                <div className="inline-flex items-center gap-2 mb-5 px-4 py-2 bg-red-50 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-[#E53935]" />
                  <p className="text-[#E53935] text-xs font-bold tracking-widest uppercase" style={{ fontFamily: 'Noto Sans, sans-serif' }}>Core Value</p>
                </div>
                <h2 className="text-3xl sm:text-4xl xl:text-5xl font-black text-gray-900 mb-5 leading-tight uppercase" style={{ fontFamily: 'Oswald, sans-serif' }}>
                  Reliable <span className="text-[#E53935]">Performance</span>
                </h2>
                <div className="w-20 h-1 bg-[#E53935] rounded-full mb-6" />
                <p className="text-lg text-gray-600 leading-relaxed font-normal" style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}>
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
                    <div key={index} className="group flex items-start gap-6 pb-6 border-b border-gray-100 hover:border-[#E53935]/40 transition-all duration-300">
                      <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-[#E53935]/10 group-hover:text-[#E53935] group-hover:scale-110 transition-all duration-500 shrink-0 mt-1">
                        {benefit.icon}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xl font-bold text-gray-900 group-hover:text-[#E53935] transition-colors duration-300" style={{ fontFamily: 'Oswald, sans-serif' }}>{benefit.title}</span>
                        <span className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">{benefit.detail}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhoWeServe />

      {/* CTA Parallax Section */}
      <section className="relative w-full py-14 sm:py-16 lg:py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("/hero-3.webp")`,
            backgroundAttachment: 'fixed',
          }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/70 to-black/85" />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-block mb-3">
            <p className="text-white text-xs sm:text-sm font-bold tracking-widest uppercase px-4 py-2 bg-[#E53935]/10 rounded-full border border-[#E53935]/40 flex items-center gap-2 justify-center" style={{ fontFamily: 'Noto Sans, sans-serif' }}>
              <Star size={16} />
              Upgrade Your Site
            </p>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight" style={{ fontFamily: 'Oswald, sans-serif' }}>
            Ready to <span className="text-[#E53935]">get started</span>?
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed font-normal" style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}>
            Contact our specialists today to determine the best equipment configuration for your property.
          </p>
        </div>
      </section>

      {/* Project Enquiry Section */}
      <section id="project-form" className="w-full bg-gray-50 py-16 sm:py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-red-50/40 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gray-200/30 rounded-full blur-3xl" />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16">
            <div className="flex flex-col gap-6">
              <div className="inline-block">
                <p className="text-[#E53935] text-sm sm:text-base font-bold tracking-widest uppercase px-4 py-2 bg-red-50 rounded-full inline-flex items-center gap-2" style={{ fontFamily: 'Noto Sans, sans-serif' }}>
                  <FileText size={16} />
                  Enquire Now
                </p>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight" style={{ fontFamily: 'Oswald, sans-serif' }}>
                Tell us about <span className="text-[#E53935]">your project</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-600 font-normal leading-relaxed" style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}>
                Share your fire safety needs and we&apos;ll recommend the right equipment and send you a tailored quote within 24 hours.
              </p>
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <h4 className="text-sm font-bold text-gray-900 mb-4" style={{ fontFamily: 'Oswald, sans-serif' }}>Our Commitment</h4>
                <ul className="space-y-4 text-gray-600 text-sm" style={{ fontFamily: 'Noto Sans, sans-serif' }}>
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
            </div>

            <div>
              <form onSubmit={(e) => { e.preventDefault(); }} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-2" style={{ fontFamily: 'Noto Sans, sans-serif' }}>Name</label>
                    <input type="text" required className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:border-[#E53935] outline-none transition-all placeholder-gray-400 text-gray-900" style={{ fontFamily: 'Noto Sans, sans-serif', borderWidth: '1px' }} placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-2" style={{ fontFamily: 'Noto Sans, sans-serif' }}>Email</label>
                    <input type="email" required className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:border-[#E53935] outline-none transition-all placeholder-gray-400 text-gray-900" style={{ fontFamily: 'Noto Sans, sans-serif', borderWidth: '1px' }} placeholder="your@email.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-2" style={{ fontFamily: 'Noto Sans, sans-serif' }}>Primary Interest</label>
                  <select className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:border-[#E53935] outline-none transition-all text-gray-900" style={{ fontFamily: 'Noto Sans, sans-serif', borderWidth: '1px' }} defaultValue="EquipmentSupply">
                    <option value="EquipmentSupply">Bulk Equipment Supply</option>
                    <option value="Installation">Installation Project</option>
                    <option value="Maintenance">System Maintenance</option>
                    <option value="Audit">Safety Site Audit</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-2" style={{ fontFamily: 'Noto Sans, sans-serif' }}>Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:border-[#E53935] outline-none transition-all placeholder-gray-400 text-gray-900 resize-none" style={{ fontFamily: 'Noto Sans, sans-serif', borderWidth: '1px' }} placeholder="Describe your safety requirements..." />
                </div>
                <button type="submit" className="w-full px-8 py-3 bg-linear-to-r from-[#FF4D4D] to-[#E53935] text-white font-bold text-base rounded-lg transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/50 hover:scale-105 active:scale-95 shadow-lg flex items-center justify-center gap-2 group">
                  Send Enquiry
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
