'use client';

import {
  FileText,
  Package,
  Shield,
  CircleCheck,
  Building,
  Settings,
  Box,
  Flame,
  AlertTriangle,
  Bell,
  Helmet,
  BuildingSkyscraper,
  BuildingFactory,
  BuildingWarehouse,
  BuildingCommunity,
  Home,
  ShieldCheck,
  Bolt,
  Tool,
  ClipboardCheck,
  Check,
  ArrowRight,
  Plus,
  Star
} from 'tabler-icons-react';
import Image from 'next/image';
import Link from 'next/link';
import WhoWeServe from '@/components/sections/marketing/WhoWeServe';
import { motion } from 'framer-motion';

export default function FireSafetyAccessoriesPage() {
  const accessoryTypes = [
    {
      title: "Cabinets & Stands",
      description: "Heavy-duty storage solutions that protect extinguishers from theft, impact, and environmental damage.",
      icon: <Box size={24} strokeWidth={1.5} />,
      bestFor: "High-traffic public areas, industrial sites, and outdoor locations."
    },
    {
      title: "Fire Blankets",
      description: "Fiberglass blankets designed to smother small liquid or clothing fires by cutting off oxygen supply.",
      icon: <Flame size={24} strokeWidth={1.5} />,
      bestFor: "Commercial kitchens, laboratory environments, and workshop areas."
    },
    {
      title: "Mandatory Signage",
      description: "High-visibility photoluminescent signs that indicate equipment location and emergency exit routes.",
      icon: <AlertTriangle size={24} strokeWidth={1.5} />,
      bestFor: "All commercial and public buildings requiring regulatory compliance."
    }
  ];

  const components = [
    { title: "Mounting Gear", description: "Wall brackets and floor stands.", icon: <Settings size={24} /> },
    { title: "Storage Boxes", description: "Locked and unlocked safety cabinets.", icon: <Box size={24} /> },
    { title: "Visual Signage", description: "Regulatory fire and exit labels.", icon: <AlertTriangle size={24} /> },
    { title: "Fire Blankets", description: "Certified fiberglass safety blankets.", icon: <Flame size={24} /> },
    { title: "Personal Gear", description: "Safety helmets and basic response tools.", icon: <Helmet size={24} /> }
  ];

  const buyerGuide = [
    { title: "Environment", detail: "Outdoor equipment requires weatherproof, UV-resistant cabinets and stands." },
    { title: "Visibility", detail: "Ensure all signage is photoluminescent to remain visible during power failures." },
    { title: "Material Quality", detail: "Fire blankets must meet BS EN 1869 or local equivalent safety standards." },
    { title: "Placement", detail: "Accessories must be positioned to avoid obstructing primary exit pathways." }
  ];

  const applications = [
    "Corporate Headquarters",
    "Industrial Factories",
    "Logistics Warehouses",
    "Hospitality Venues",
    "Residential Complexes",
    "Public Institutions"
  ];

  return (
    <main className="w-full bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("/hero-1.webp")`,
            backgroundAttachment: 'fixed',
          }}
        />
        <div className="absolute inset-0 bg-linear-to-r from-gray-950 via-gray-950/90 to-gray-950/90" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              <Package size={16} className="text-[#E53935]" />
              <p className="text-white text-xs sm:text-sm font-bold tracking-widest uppercase" style={{ fontFamily: 'Noto Sans, sans-serif' }}>
                Essential Extras
              </p>
            </div>
            <h1
              className="text-4xl sm:text-5xl lg:text-7xl font-black text-white mb-6 leading-tight uppercase tracking-tight"
              style={{ fontFamily: 'Oswald, sans-serif' }}
            >
              Safety <span className="text-[#E53935]">Accessories</span>
            </h1>
            <p
              className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-normal"
              style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
            >
              Enhancing the visibility, accessibility, and protection of your primary fire safety equipment with high-quality supporting hardware.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="w-full py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 mb-5 px-4 py-2 bg-red-50 rounded-full">
                <span className="w-2 h-2 rounded-full bg-[#E53935]" />
                <p className="text-[#E53935] text-xs font-bold tracking-widest uppercase" style={{ fontFamily: 'Noto Sans, sans-serif' }}>Support Network</p>
              </div>
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6 leading-tight uppercase" style={{ fontFamily: 'Oswald, sans-serif' }}>
                Total <span className="text-[#E53935]">Preparedness</span>
              </h2>
              <div className="w-20 h-1 bg-[#E53935] rounded-full mb-8" />
              <div className="space-y-8">
                {[
                  { step: "01", title: "Accessibility", text: "Stands and brackets ensure equipment is kept at the correct height for immediate use." },
                  { step: "02", title: "Identification", text: "Strategic signage allows occupants to locate fire tools within seconds during a crisis." },
                  { step: "03", title: "Asset Protection", text: "Durable cabinets protect expensive safety hardware from environmental wear and tear." }
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-6"
                  >
                    <span className="text-4xl font-black text-gray-100" style={{ fontFamily: 'Oswald, sans-serif' }}>{item.step}</span>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Oswald, sans-serif' }}>{item.title}</h4>
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base" style={{ fontFamily: 'Noto Sans, sans-serif' }}>{item.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square bg-gray-50 rounded-3xl overflow-hidden shadow-2xl relative border border-gray-100">
                <Image 
                  src="/fire-safety-accessories-guide.png" 
                  alt="Fire Safety Accessories Guide" 
                  fill 
                  className="object-cover"
                />
              </div>
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-2xl border border-gray-100 z-20"
              >
                <p className="text-3xl font-black text-[#E53935]" style={{ fontFamily: 'Oswald, sans-serif' }}>ISO</p>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mt-1">Certified Hardware</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Types Section */}
      <section className="w-full py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 mb-5 px-4 py-2 bg-red-50 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#E53935]" />
              <p className="text-[#E53935] text-xs font-bold tracking-widest uppercase ml-2 inline-block" style={{ fontFamily: 'Noto Sans, sans-serif' }}>Essential Catalog</p>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-5 leading-tight uppercase" style={{ fontFamily: 'Oswald, sans-serif' }}>
              System <span className="text-[#E53935]">Enhancements</span>
            </h2>
            <div className="w-20 h-1 bg-[#E53935] rounded-full mx-auto mb-6" />
            <p className="text-lg text-gray-600 leading-relaxed font-normal max-w-2xl mx-auto" style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}>
              Supporting hardware designed to maximize the lifespan and efficiency of your fire protection devices.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {accessoryTypes.map((type, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative flex flex-col p-8 bg-white border border-gray-200 rounded-3xl hover:border-[#E53935]/30 hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Components Section */}
      <section className="w-full py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-5 leading-tight uppercase" style={{ fontFamily: 'Oswald, sans-serif' }}>
              Included <span className="text-[#E53935]">Elements</span>
            </h2>
            <div className="w-20 h-1 bg-[#E53935] rounded-full mx-auto mb-6" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {components.map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group flex flex-col p-6 bg-white border border-gray-200 rounded-3xl hover:border-[#E53935]/30 hover:shadow-xl transition-all duration-500 overflow-hidden relative"
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-[#FF4D4D] via-[#E53935] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-[#FF4D4D] to-[#E53935] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div className="w-10 h-10 rounded-lg bg-[#E53935]/10 flex items-center justify-center text-[#E53935] group-hover:bg-[#E53935] group-hover:text-white transition-all duration-300 shrink-0 mb-4">
                  {item.icon}
                </div>
                <h4 className="text-sm font-bold text-gray-900 group-hover:text-[#E53935] transition-colors mb-2" style={{ fontFamily: 'Oswald, sans-serif' }}>{item.title}</h4>
                <p className="text-[10px] text-gray-500 leading-normal" style={{ fontFamily: 'Noto Sans, sans-serif' }}>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Buyer's Guide */}
      <section className="w-full py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white border border-gray-100 rounded-3xl p-8 sm:p-12 shadow-[0_8px_40px_rgb(0,0,0,0.07)] relative overflow-hidden"
          >
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
                  Optimize your safety infrastructure with the right supporting accessories.
                </p>
              </div>

              <div className="lg:col-span-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
                  {buyerGuide.map((item, index) => (
                    <motion.div 
                      key={index} 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="group flex items-start gap-6 pb-6 border-b border-gray-100 hover:border-[#E53935]/40 transition-all duration-300"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-[#E53935]/10 group-hover:text-[#E53935] group-hover:scale-110 transition-all duration-500 shrink-0 mt-1">
                        <Check size={20} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xl font-bold text-gray-900 group-hover:text-[#E53935] transition-colors duration-300" style={{ fontFamily: 'Oswald, sans-serif' }}>{item.title}</span>
                        <span className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">{item.detail}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="w-full py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-100 rounded-3xl p-8 sm:p-12 shadow-[0_8px_40px_rgb(0,0,0,0.07)] relative overflow-hidden"
          >
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
                  Essential supporting gear for every industry and building environment.
                </p>
              </div>

              <div className="lg:col-span-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
                  {applications.map((app, index) => (
                    <motion.div 
                      key={index} 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="group flex items-center gap-6 pb-6 border-b border-gray-100 hover:border-[#E53935]/40 transition-all duration-300"
                    >
                      <div className="w-14 h-14 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-[#E53935]/10 group-hover:text-[#E53935] group-hover:scale-110 transition-all duration-500 shrink-0">
                        <Building size={24} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xl font-bold text-gray-900 group-hover:text-[#E53935] transition-colors duration-300" style={{ fontFamily: 'Oswald, sans-serif' }}>{app}</span>
                        <span className="text-sm text-gray-400 group-hover:text-gray-600 transition-colors duration-300">Supporting Safety</span>
                      </div>
                    </motion.div>
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
          </motion.div>
        </div>
      </section>

      {/* Features & Benefits */}
      <section className="w-full py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-3 leading-tight" style={{ fontFamily: 'Oswald, sans-serif' }}>
              Features & <span className="text-[#E53935]">Benefits</span>
            </h2>
            <div className="w-20 h-1 bg-[#E53935] rounded-full mx-auto mb-4" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Heavy-Duty Steel Construction",
              "UV-Resistant Powder Coating",
              "Photoluminescent Signage",
              "Anti-Tamper Cabinet Seals",
              "Certified Fire-Retardant Fabric",
              "Easy-Install Mounting Brackets"
            ].map((feature, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group flex items-start gap-3 p-4 bg-white/80 backdrop-blur-sm border border-gray-300 rounded-xl hover:border-red-400 hover:shadow-2xl hover:scale-105 transition-all duration-500 hover:bg-white overflow-hidden relative"
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-[#FF4D4D] via-[#E53935] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-[#FF4D4D] to-[#E53935] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-[#E53935] group-hover:bg-[#E53935]/10 transition-all shrink-0">
                  <Star size={20} strokeWidth={1.5} />
                </div>
                <p className="text-sm font-bold text-gray-900 leading-relaxed group-hover:text-[#E53935] transition-colors mt-2" style={{ fontFamily: 'Noto Sans, sans-serif' }}>
                  {feature}
                </p>
              </motion.div>
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
            backgroundImage: `url("/hero-1.webp")`,
            backgroundAttachment: 'fixed',
          }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/70 to-black/85" />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-3">
              <p className="text-white text-xs sm:text-sm font-bold tracking-widest uppercase px-4 py-2 bg-[#E53935]/10 rounded-full border border-[#E53935]/40 flex items-center gap-2 justify-center" style={{ fontFamily: 'Noto Sans, sans-serif' }}>
                <Star size={16} />
                Complete Your Site Setup
              </p>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight" style={{ fontFamily: 'Oswald, sans-serif' }}>
              Ensure your <span className="text-[#E53935]">safety today</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed font-normal" style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}>
              Contact our experts for the right safety accessories and professional equipment installation.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
