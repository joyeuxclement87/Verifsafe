'use client';

import {
  Shield,
  CircleCheck,
  Flame,
  Building,
  FileText,
  Settings,
  Cloud,
  Temperature,
  Radar,
  BuildingSkyscraper,
  BuildingFactory,
  BuildingWarehouse,
  BuildingCommunity,
  Home,
  Bolt,
  Tool,
  ClipboardCheck,
  Check,
  ArrowRight,
  Plus,
  Star
} from 'tabler-icons-react';
import Link from 'next/link';
import WhoWeServe from '@/components/sections/WhoWeServe';

export default function FireDetectionDevicesPage() {
  const deviceTypes = [
    {
      title: "Optical Smoke Detectors",
      description: "Uses light sensors to detect larger smoke particles, ideal for slow-burning, smoldering fires.",
      icon: <Cloud size={24} strokeWidth={1.5} />,
      bestFor: "Bedrooms, living rooms, and primary escape routes."
    },
    {
      title: "Heat Detectors",
      description: "Triggered by a specific temperature threshold or a rapid rate of temperature rise.",
      icon: <Temperature size={24} strokeWidth={1.5} />,
      bestFor: "Kitchens, garages, and areas where smoke detectors would cause false alarms."
    },
    {
      title: "Multi-Sensor Detectors",
      description: "Combine optical and heat sensing technology for highly accurate fire detection and false alarm reduction.",
      icon: <Radar size={24} strokeWidth={1.5} />,
      bestFor: "Complex commercial environments and areas with varying environmental conditions."
    }
  ];

  const components = [
    { title: "Optical Sensors", description: "Infrared technology for smoke detection.", icon: <Cloud size={24} /> },
    { title: "Thermographic", description: "Precision heat-sensing elements.", icon: <Temperature size={24} /> },
    { title: "Flame Sensors", description: "UV/IR sensors for instant flame detection.", icon: <Flame size={24} /> },
    { title: "Signal Processor", description: "On-board logic to filter out false triggers.", icon: <Settings size={24} /> },
    { title: "Communication", description: "Addressable interface for system networking.", icon: <Radar size={24} /> }
  ];

  const buyerGuide = [
    { title: "Environment", detail: "Kitchens need heat detectors, while offices benefit most from smoke detectors." },
    { title: "Sensitivity", detail: "Choose adjustable sensitivity units for areas with steam or industrial dust." },
    { title: "Network Type", detail: "Ensure devices are compatible with your existing conventional or addressable panel." },
    { title: "Maintenance", detail: "Select units with easy-to-clean chambers and automated self-test features." }
  ];

  const applications = [
    "Industrial Factories",
    "Commercial Kitchens",
    "Data Centers",
    "Retail Storefronts",
    "Residential Homes",
    "Chemical Storage"
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
            <Flame size={16} className="text-[#E53935]" />
            <p className="text-white text-xs sm:text-sm font-bold tracking-widest uppercase" style={{ fontFamily: 'Noto Sans, sans-serif' }}>
              Precision Detection
            </p>
          </div>
          <h1
            className="text-4xl sm:text-5xl lg:text-7xl font-black text-white mb-6 leading-tight uppercase tracking-tight"
            style={{ fontFamily: 'Oswald, sans-serif' }}
          >
            Detection <span className="text-[#E53935]">Devices</span>
          </h1>
          <p
            className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-normal"
            style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
          >
            The frontline of fire safety: high-sensitivity devices designed to identify smoke, heat, and flame at the earliest possible moment.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="w-full py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-5 px-4 py-2 bg-red-50 rounded-full">
                <span className="w-2 h-2 rounded-full bg-[#E53935]" />
                <p className="text-[#E53935] text-xs font-bold tracking-widest uppercase" style={{ fontFamily: 'Noto Sans, sans-serif' }}>Technology Overview</p>
              </div>
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6 leading-tight uppercase" style={{ fontFamily: 'Oswald, sans-serif' }}>
                Early Warning <span className="text-[#E53935]">Intelligence</span>
              </h2>
              <div className="w-20 h-1 bg-[#E53935] rounded-full mb-8" />
              <div className="space-y-8">
                {[
                  { step: "01", title: "Instant Sensing", text: "Advanced sensors detect microscopic changes in air quality or temperature." },
                  { step: "02", title: "False Alarm Filtering", text: "Multi-sensor logic identifies the difference between actual fire and common steam/dust." },
                  { step: "03", title: "System Integration", text: "Devices communicate immediately with the main panel to trigger site-wide alerts." }
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
                    <Radar size={200} strokeWidth={0.5} className="text-gray-200" />
                 </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-2xl border border-gray-100 z-20">
                <p className="text-3xl font-black text-[#E53935]" style={{ fontFamily: 'Oswald, sans-serif' }}>99%</p>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mt-1">Detection Accuracy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types Section */}
      <section className="w-full py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="w-2 h-2 rounded-full bg-[#E53935]" />
              <p className="text-[#E53935] text-xs font-bold tracking-widest uppercase ml-2 inline-block" style={{ fontFamily: 'Noto Sans, sans-serif' }}>Device Catalog</p>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-5 leading-tight uppercase" style={{ fontFamily: 'Oswald, sans-serif' }}>
              Standard <span className="text-[#E53935]">Sensors</span>
            </h2>
            <div className="w-20 h-1 bg-[#E53935] rounded-full mx-auto mb-6" />
            <p className="text-lg text-gray-600 leading-relaxed font-normal max-w-2xl mx-auto" style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}>
              Specialized hardware designed to handle different fire signatures and environmental challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {deviceTypes.map((type, index) => (
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
              Device <span className="text-[#E53935]">Intelligence</span>
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
                  Choosing the correct detection technology is essential for accurate, rapid response.
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
                  Reliable protection across diverse residential and industrial environments.
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
                        <span className="text-sm text-gray-400 group-hover:text-gray-600 transition-colors duration-300">Certified Detection</span>
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
              "LPCB & UL Safety Certified",
              "Addressable Panel Compatible",
              "Low False Alarm Profiles",
              "Integrated Error Testing",
              "Rapid Environmental Sensing",
              "Dust & Humidity Resistant"
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
              Upgrade Your Detection
            </p>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight" style={{ fontFamily: 'Oswald, sans-serif' }}>
            Ensure your <span className="text-[#E53935]">safety today</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed font-normal" style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}>
            Contact our experts for the right fire detection strategy and professional device installation.
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
                Need <span className="text-[#E53935]">Detection</span>?
              </h2>
              <p className="text-base sm:text-lg text-gray-600 font-normal leading-relaxed" style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}>
                From smart office sensors to industrial flame detectors, we provide certified safety hardware.
              </p>
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <h4 className="text-sm font-bold text-gray-900 mb-4" style={{ fontFamily: 'Oswald, sans-serif' }}>Our Commitment</h4>
                <ul className="space-y-4 text-gray-600 text-sm" style={{ fontFamily: 'Noto Sans, sans-serif' }}>
                   <li className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#E53935]/10 text-[#E53935] shrink-0"><Check size={13} /></span>
                    High-Sensitivity Hardware
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#E53935]/10 text-[#E53935] shrink-0"><Check size={13} /></span>
                    Professional Calibration
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#E53935]/10 text-[#E53935] shrink-0"><Check size={13} /></span>
                    Regulatory Compliance Filing
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
                  <label className="block text-sm font-semibold text-gray-800 mb-2" style={{ fontFamily: 'Noto Sans, sans-serif' }}>Device Interest</label>
                  <select className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:border-[#E53935] outline-none transition-all text-gray-900" style={{ fontFamily: 'Noto Sans, sans-serif', borderWidth: '1px' }} defaultValue="Optical">
                    <option value="Optical">Optical Smoke Detectors</option>
                    <option value="Heat">Heat Detectors</option>
                    <option value="Multi">Multi-Sensor Units</option>
                    <option value="Maintenance">Calibration & Testing</option>
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
