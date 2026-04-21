'use client';

import { FileText, Bell, Bulb, MapPin, Bolt, Flame, DeviceDesktop, Volume2, HandFinger, AlertTriangle, BuildingSkyscraper, Home, School, BuildingHospital, BuildingCommunity, Eye, ShieldCheck, Run, Settings, Tool, ClipboardCheck, Star, Cpu, Building, Check, ArrowRight, Plus } from 'tabler-icons-react';
import Link from 'next/link';
import WhoWeServe from '@/components/sections/WhoWeServe';

export default function FireAlarmSystemsPage() {
  const systemTypes = [
    {
      title: "Conventional Systems",
      description: "Divide buildings into zones to detect the general area of a fire.",
      icon: <Bulb size={24} strokeWidth={1.5} />,
      bestFor: "Small to medium buildings, offices, and retail shops."
    },
    {
      title: "Addressable Systems",
      description: "Identify the exact location of a fire within the system for precise response.",
      icon: <MapPin size={24} strokeWidth={1.5} />,
      bestFor: "Large buildings, hotels, and complex commercial facilities."
    },
    {
      title: "Wireless Systems",
      description: "Operate without extensive wiring, using secure wireless communication.",
      icon: <Bolt size={24} strokeWidth={1.5} />,
      bestFor: "Existing buildings, heritage sites, and temporary setups."
    }
  ];

  const components = [
    { title: "Smoke Detectors", description: "Detect smoke particles to provide early fire warning.", icon: <AlertTriangle size={24} /> },
    { title: "Heat Detectors", description: "Respond to temperature changes above set thresholds.", icon: <Flame size={24} /> },
    { title: "Control Panel", description: "The central brain that monitors and manages all alerts.", icon: <DeviceDesktop size={24} /> },
    { title: "Alarm Sounders", description: "Audible alerts to notify occupants and initiate evacuation.", icon: <Volume2 size={24} /> },
    { title: "Call Points", description: "Manual triggers for when a fire is observed visually.", icon: <HandFinger size={24} /> }
  ];

  const buyerGuide = [
    { title: "Building Size", detail: "Larger properties require addressable systems for precise fire location." },
    { title: "Facility Use", detail: "High-risk areas like kitchens need specialized heat detection." },
    { title: "Integration", detail: "Consider if the alarm needs to connect to sprinklers or access control." },
    { title: "Local Codes", detail: "Ensure the system meets all local fire safety regulations and standards." }
  ];

  const applications = [
    "Corporate Offices",
    "Commercial Hotels",
    "Educational Institutions",
    "Healthcare Facilities",
    "Residential Complexes",
    "Industrial Warehouses"
  ];

  return (
    <main className="w-full bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
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
            <Bell size={16} className="text-[#E53935]" />
            <p className="text-white text-xs sm:text-sm font-bold tracking-widest uppercase" style={{ fontFamily: 'Noto Sans, sans-serif' }}>
              Advanced Detection
            </p>
          </div>
          <h1
            className="text-4xl sm:text-5xl lg:text-7xl font-black text-white mb-6 leading-tight uppercase tracking-tight"
            style={{ fontFamily: 'Oswald, sans-serif' }}
          >
            Fire Alarm <span className="text-[#E53935]">Systems</span>
          </h1>
          <p
            className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-normal"
            style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
          >
            Sophisticated warning systems designed to detect fire risks at the earliest stage, ensuring maximum time for evacuation and response.
          </p>
        </div>
      </section>

      {/* Intro Section: What They Do */}
      <section className="w-full py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-5 px-4 py-2 bg-red-50 rounded-full">
                <span className="w-2 h-2 rounded-full bg-[#E53935]" />
                <p className="text-[#E53935] text-xs font-bold tracking-widest uppercase" style={{ fontFamily: 'Noto Sans, sans-serif' }}>The Safety Chain</p>
              </div>
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6 leading-tight uppercase" style={{ fontFamily: 'Oswald, sans-serif' }}>
                How Systems <span className="text-[#E53935]">Protect You</span>
              </h2>
              <div className="w-20 h-1 bg-[#E53935] rounded-full mb-8" />
              <div className="space-y-8">
                {[
                  { step: "01", title: "Detection", text: "Intelligent sensors monitor for smoke, heat, and flame signatures 24/7." },
                  { step: "02", title: "Notification", text: "Loud sirens and visual strobes alert occupants to the danger immediately." },
                  { step: "03", title: "Emergency Response", text: "Systems can automatically notify emergency services and trigger suppression." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <span className="text-4xl font-black text-gray-100" style={{ fontFamily: 'Oswald, sans-serif' }}>{item.step}</span>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Oswald, sans-serif' }}>{item.title}</h4>
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base" style={{ fontFamily: 'Noto Sans, sans-serif' }}>{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gray-50 rounded-3xl overflow-hidden shadow-2xl relative border border-gray-100">
                 <div className="absolute inset-0 bg-linear-to-tr from-[#E53935]/10 to-transparent z-10" />
                 <div className="flex items-center justify-center h-full">
                    <Bell size={200} strokeWidth={0.5} className="text-gray-200" />
                 </div>
              </div>
              {/* Floating Stat */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-2xl border border-gray-100 z-20">
                <p className="text-3xl font-black text-[#E53935]" style={{ fontFamily: 'Oswald, sans-serif' }}>24/7</p>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mt-1">Active Monitoring</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types Section */}
      <section className="w-full py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-5 px-4 py-2 bg-red-50 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#E53935]" />
              <p className="text-[#E53935] text-xs font-bold tracking-widest uppercase" style={{ fontFamily: 'Noto Sans, sans-serif' }}>System Architectures</p>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-5 leading-tight uppercase" style={{ fontFamily: 'Oswald, sans-serif' }}>
              Standard <span className="text-[#E53935]">Configurations</span>
            </h2>
            <div className="w-20 h-1 bg-[#E53935] rounded-full mx-auto mb-6" />
            <p className="text-lg text-gray-600 leading-relaxed font-normal max-w-2xl mx-auto" style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}>
              From basic zone-based alerts to precision addressable technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {systemTypes.map((type, index) => (
              <div key={index} className="group relative flex flex-col p-8 bg-white border border-gray-200 rounded-3xl hover:border-[#E53935]/30 hover:shadow-2xl transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-[#FF4D4D] via-[#E53935] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-[#FF4D4D] to-[#E53935] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                
                <div className="w-14 h-14 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-[#E53935]/10 group-hover:text-[#E53935] transition-all duration-500 shrink-0 mb-6">
                  {type.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#E53935] transition-colors" style={{ fontFamily: 'Oswald, sans-serif' }}>{type.title}</h3>
                <p className="text-base text-gray-600 leading-relaxed mb-8" style={{ fontFamily: 'Noto Sans, sans-serif' }}>
                  {type.description}
                </p>

                <div className="mt-auto bg-gray-50 p-5 rounded-2xl border border-gray-100 group-hover:bg-red-50/50 group-hover:border-[#E53935]/10 transition-all duration-300">
                  <p className="text-xs text-gray-500 leading-relaxed" style={{ fontFamily: 'Noto Sans, sans-serif' }}>
                    <span className="font-bold block text-gray-900 mb-2 group-hover:text-[#E53935] transition-colors uppercase tracking-widest">Best for</span>
                    {type.bestFor}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Components Section */}
      <section className="w-full py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-5 leading-tight uppercase" style={{ fontFamily: 'Oswald, sans-serif' }}>
              Key <span className="text-[#E53935]">Components</span>
            </h2>
            <div className="w-20 h-1 bg-[#E53935] rounded-full mx-auto mb-6" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {components.map((item, i) => (
              <div key={i} className="group flex flex-col p-6 bg-white border border-gray-200 rounded-3xl hover:border-[#E53935]/30 hover:shadow-xl transition-all duration-500 overflow-hidden relative">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-[#FF4D4D] via-[#E53935] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-[#FF4D4D] to-[#E53935] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div className="w-10 h-10 rounded-lg bg-[#E53935]/10 flex items-center justify-center text-[#E53935] group-hover:bg-[#E53935] group-hover:text-white transition-all duration-300 shrink-0 mb-4">
                  {item.icon}
                </div>
                <h4 className="text-sm font-bold text-gray-900 group-hover:text-[#E53935] transition-colors mb-2" style={{ fontFamily: 'Oswald, sans-serif' }}>{item.title}</h4>
                <p className="text-[10px] text-gray-500 leading-normal" style={{ fontFamily: 'Noto Sans, sans-serif' }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Buyer's Guide */}
      <section className="w-full py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-gray-100 rounded-3xl p-8 sm:p-12 shadow-[0_8px_40px_rgb(0,0,0,0.07)] relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 xl:gap-20 relative z-10 items-start">
              <div className="lg:col-span-1 lg:sticky lg:top-8">
                <div className="inline-flex items-center gap-2 mb-5 px-4 py-2 bg-red-50 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-[#E53935]" />
                  <p className="text-[#E53935] text-xs font-bold tracking-widest uppercase" style={{ fontFamily: 'Noto Sans, sans-serif' }}>Expert Advice</p>
                </div>
                <h2 className="text-3xl sm:text-4xl xl:text-5xl font-black text-gray-900 mb-5 leading-tight uppercase" style={{ fontFamily: 'Oswald, sans-serif' }}>
                  Simple <span className="text-[#E53935]">Buyer&apos;s Guide</span>
                </h2>
                <div className="w-20 h-1 bg-[#E53935] rounded-full mb-6" />
                <p className="text-lg text-gray-600 leading-relaxed font-normal" style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}>
                  Choosing the right fire alarm system is a critical decision. Here are the key factors to consider for your building.
                </p>
              </div>

              <div className="lg:col-span-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
                  {buyerGuide.map((item, index) => (
                    <div key={index} className="group flex items-start gap-6 pb-6 border-b border-gray-100 hover:border-[#E53935]/40 transition-all duration-300">
                      <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-[#E53935]/10 group-hover:text-[#E53935] group-hover:scale-110 transition-all duration-500 shrink-0 mt-1">
                        <Check size={20} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xl font-bold text-gray-900 group-hover:text-[#E53935] transition-colors duration-300" style={{ fontFamily: 'Oswald, sans-serif' }}>{item.title}</span>
                        <span className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">{item.detail}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="w-full py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-gray-100 rounded-3xl p-8 sm:p-12 shadow-[0_8px_40px_rgb(0,0,0,0.07)] relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 xl:gap-20 relative z-10 items-start">
              <div className="lg:col-span-1 lg:sticky lg:top-8">
                <div className="inline-flex items-center gap-2 mb-5 px-4 py-2 bg-red-50 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-[#E53935]" />
                  <p className="text-[#E53935] text-xs font-bold tracking-widest uppercase" style={{ fontFamily: 'Noto Sans, sans-serif' }}>Use Cases</p>
                </div>
                <h2 className="text-3xl sm:text-4xl xl:text-5xl font-black text-gray-900 mb-5 leading-tight uppercase" style={{ fontFamily: 'Oswald, sans-serif' }}>
                  Ideal <span className="text-[#E53935]">Applications</span>
                </h2>
                <div className="w-20 h-1 bg-[#E53935] rounded-full mb-6" />
                <p className="text-lg text-gray-600 leading-relaxed font-normal" style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}>
                  Strategic fire detection is a universal requirement for safe environments.
                </p>
              </div>

              <div className="lg:col-span-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
                  {applications.map((app, index) => (
                    <div key={index} className="group flex items-center gap-6 pb-6 border-b border-gray-100 hover:border-[#E53935]/40 transition-all duration-300">
                      <div className="w-14 h-14 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-[#E53935]/10 group-hover:text-[#E53935] group-hover:scale-110 transition-all duration-500 shrink-0">
                        <Building size={24} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xl font-bold text-gray-900 group-hover:text-[#E53935] transition-colors duration-300" style={{ fontFamily: 'Oswald, sans-serif' }}>{app}</span>
                        <span className="text-sm text-gray-400 group-hover:text-gray-600 transition-colors duration-300">Certified Protection</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-12 flex items-center gap-3 text-gray-400">
                  <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center">
                    <Plus size={16} />
                  </div>
                  <p className="text-sm font-bold uppercase tracking-widest" style={{ fontFamily: 'Oswald, sans-serif' }}>And many more options available...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Benefits */}
      <section className="w-full py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-3 leading-tight" style={{ fontFamily: 'Oswald, sans-serif' }}>
              Features & <span className="text-[#E53935]">Benefits</span>
            </h2>
            <div className="w-20 h-1 bg-[#E53935] rounded-full mx-auto mb-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "LPCB & UL Certified Systems",
              "Addressable Device Precision",
              "24/7 Monitoring Compatibility",
              "Battery Backup Security",
              "Remote System Management",
              "Integrated Voice Evacuation"
            ].map((feature, index) => (
              <div key={index} className="group flex items-start gap-3 p-4 bg-white/80 backdrop-blur-sm border border-gray-300 rounded-xl hover:border-red-400 hover:shadow-2xl hover:scale-105 transition-all duration-500 hover:bg-white overflow-hidden relative">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-[#FF4D4D] via-[#E53935] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-[#FF4D4D] to-[#E53935] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-[#E53935] group-hover:bg-[#E53935]/10 transition-all shrink-0">
                  <Star size={20} strokeWidth={1.5} />
                </div>
                <p className="text-sm font-bold text-gray-900 leading-relaxed group-hover:text-[#E53935] transition-colors mt-2" style={{ fontFamily: 'Noto Sans, sans-serif' }}>
                  {feature}
                </p>
              </div>
            ))}
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
              Secure Your Facility
            </p>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight" style={{ fontFamily: 'Oswald, sans-serif' }}>
            Ensure your <span className="text-[#E53935]">safety today</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed font-normal" style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}>
            Contact our experts for the right fire alarm system design and professional installation.
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
                Need <span className="text-[#E53935]">Fire Alarms</span>?
              </h2>
              <p className="text-base sm:text-lg text-gray-600 font-normal leading-relaxed" style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}>
                From small businesses to large industrial sites, we provide comprehensive fire detection solutions.
              </p>
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <h4 className="text-sm font-bold text-gray-900 mb-4" style={{ fontFamily: 'Oswald, sans-serif' }}>Our Commitment</h4>
                <ul className="space-y-4 text-gray-600 text-sm" style={{ fontFamily: 'Noto Sans, sans-serif' }}>
                   <li className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#E53935]/10 text-[#E53935] shrink-0"><Check size={13} /></span>
                    Custom System Design
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#E53935]/10 text-[#E53935] shrink-0"><Check size={13} /></span>
                    Certified Installation
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#E53935]/10 text-[#E53935] shrink-0"><Check size={13} /></span>
                    24/7 After-Sales Support
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
                  <label className="block text-sm font-semibold text-gray-800 mb-2" style={{ fontFamily: 'Noto Sans, sans-serif' }}>System Interest</label>
                  <select className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:border-[#E53935] outline-none transition-all text-gray-900" style={{ fontFamily: 'Noto Sans, sans-serif', borderWidth: '1px' }} defaultValue="Addressable">
                    <option value="Conventional">Conventional System</option>
                    <option value="Addressable">Addressable System</option>
                    <option value="Wireless">Wireless System</option>
                    <option value="Monitoring">Monitoring Services</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-2" style={{ fontFamily: 'Noto Sans, sans-serif' }}>Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:border-[#E53935] outline-none transition-all placeholder-gray-400 text-gray-900 resize-none" style={{ fontFamily: 'Noto Sans, sans-serif', borderWidth: '1px' }} placeholder="How can we help you?" />
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
