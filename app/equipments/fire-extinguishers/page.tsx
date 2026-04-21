'use client';

import {
  Building,
  CircleCheck,
  Flame,
  BuildingWarehouse,
  Home,
  FileText,
  Bolt,
  ShieldCheck,
  Settings,
  Tool,
  Bulb,
  Droplet,
  Lifebuoy,
  HandFinger,
  Check,
  ArrowRight,
  Star,
  Armchair,
  Plus
} from 'tabler-icons-react';
import Image from 'next/image';
import WhoWeServe from '@/components/sections/marketing/WhoWeServe';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function FireExtinguishersPage() {

  const sizes = [
    {
      category: 'Small Sizes',
      description: 'Portable / Personal Use',
      sizes: ['1kg / 1L', '2kg / 2L'],
      bestFor: 'Cars, small rooms, home kitchens'
    },
    {
      category: 'Medium Sizes',
      description: 'Standard Use',
      sizes: ['4kg / 4L', '6kg / 6L'],
      bestFor: 'Offices, shops, small businesses',
      note: 'Most commonly used size: 6kg ABC'
    },
    {
      category: 'Large Sizes',
      description: 'High-Risk Areas',
      sizes: ['9kg / 9L', '12kg'],
      bestFor: 'Warehouses, large offices, commercial buildings'
    },
    {
      category: 'Extra Large',
      description: 'Industrial',
      sizes: ['25kg / 25L', '50kg (wheeled units)'],
      bestFor: 'Factories, fuel depots, airports',
      note: 'Usually trolley-mounted (not handheld)'
    }
  ];

  const buyerGuide = [
    {
      scenario: 'Home / Office',
      recommendation: '6kg ABC',
      iconName: 'home'
    },
    {
      scenario: 'Electrical Areas',
      recommendation: 'CO₂',
      iconName: 'bulb'
    },
    {
      scenario: 'Kitchen / Restaurant',
      recommendation: 'Wet Chemical',
      iconName: 'spray'
    },
    {
      scenario: 'Fuel / Garage',
      recommendation: 'Foam or ABC',
      iconName: 'bulb'
    },
    {
      scenario: 'Industrial',
      recommendation: '9kg+ or trolley units',
      iconName: 'warehouse'
    }
  ];

  const getRenderIcon = (iconName: string) => {
    switch (iconName) {
      case 'home': return <Home size={20} />;
      case 'bulb': return <Bolt size={20} />;
      case 'spray': return <Droplet size={20} />;
      case 'warehouse': return <BuildingWarehouse size={20} />;
      default: return <Building size={20} />;
    }
  };

  const getApplicationIcon = (app: string) => {
    switch (app) {
      case 'Homes': return <Home size={18} className="text-[#E53935]" />;
      case 'Offices': return <Armchair size={18} className="text-[#E53935]" />;
      case 'Vehicles': return <Building size={18} className="text-[#E53935]" />;
      case 'Warehouses': return <BuildingWarehouse size={18} className="text-[#E53935]" />;
      case 'Commercial buildings': return <Building size={18} className="text-[#E53935]" />;
      case 'Restaurants': return <Building size={18} className="text-[#E53935]" />;
      case 'Factories': return <BuildingWarehouse size={18} className="text-[#E53935]" />;
      case 'Data Centers': return <Building size={18} className="text-[#E53935]" />;
      default: return <Building size={18} className="text-[#E53935]" />;
    }
  };

  const applications = [
    'Homes',
    'Offices',
    'Vehicles',
    'Warehouses',
    'Commercial buildings',
    'Restaurants',
    'Factories',
    'Data Centers'
  ];

  const features = [
    'Easy to use in emergencies',
    'Quick fire control',
    'Portable and accessible',
    'Helps reduce fire damage',
    'Multiple types for different fire classes',
    'OSHA compliant'
  ];

  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="relative w-full h-96 sm:h-[450px] lg:h-[500px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("/hero-3.webp")`,
            backgroundAttachment: 'fixed',
          }}
        />
        <div className="absolute inset-0 bg-linear-to-r from-gray-950 via-gray-950/90 to-gray-950/90" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-4">
              <p className="text-white text-xs sm:text-sm font-bold tracking-widest uppercase px-4 py-2 bg-[#E53935]/10 rounded-full border border-[#E53935]/40 flex items-center gap-2 justify-center" style={{ fontFamily: 'Noto Sans, sans-serif' }}>
                <Flame size={16} />
                Equipment Guide
              </p>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-4 leading-tight uppercase tracking-wider" style={{ fontFamily: 'Oswald, sans-serif' }}>
              Fire <span className="text-[#E53935]">Extinguishers</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed font-normal" style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}>
              Essential portable firefighting equipment designed to control small fires and protect lives before professional help arrives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What They Do Section */}
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
                <p className="text-[#E53935] text-xs font-bold tracking-widest uppercase" style={{ fontFamily: 'Noto Sans, sans-serif' }}>Operational Guide</p>
              </div>
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6 leading-tight uppercase" style={{ fontFamily: 'Oswald, sans-serif' }}>
                First Line <span className="text-[#E53935]">of Defense</span>
              </h2>
              <div className="w-20 h-1 bg-[#E53935] rounded-full mb-8" />
              <div className="space-y-8">
                {[
                  { step: "01", title: "Immediate Response", text: "Enables quick action when fire starts, providing the crucial first line of defense." },
                  { step: "02", title: "Prevents Escalation", text: "Stops small fires from spreading and becoming major hazards." },
                  { step: "03", title: "Portable & Accessible", text: "Always available and easy to use in homes and workplaces." }
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
                  src="/fire-extinguisher-guide.png" 
                  alt="Fire Extinguisher Guide" 
                  fill 
                  className="object-cover"
                />
              </div>
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-2xl border border-gray-100 z-20"
              >
                <p className="text-3xl font-black text-[#E53935]" style={{ fontFamily: 'Oswald, sans-serif' }}>6KG</p>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mt-1">Standard Unit</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Types Section */}
      <section className="w-full py-12 sm:py-16 lg:py-20 bg-linear-to-b from-gray-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-3 leading-tight" style={{ fontFamily: 'Oswald, sans-serif' }}>Choose the <span className="text-[#E53935]">Right Type</span></h2>
            <div className="w-20 h-1 bg-[#E53935] rounded-full mx-auto mb-6" />
            <p className="text-lg text-gray-700 max-w-2xl mx-auto font-normal" style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}>Fire extinguishers are color-coded and specifically designed to combat different classes of fire.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              { title: 'CO₂ Extinguishers', classes: 'B • E', desc: 'Ideal for electrical equipment as CO₂ is non-conductive.', bestFor: 'Offices, server rooms.', icon: Bulb },
              { title: 'Foam Extinguishers', classes: 'A • B', desc: 'Highly effective on flammable liquid fires.', bestFor: 'Garages, workshops.', icon: Droplet },
              { title: 'Dry Powder', classes: 'A • B • C • E', desc: 'Multi-purpose extinguishers for various fires.', bestFor: 'Vehicles, industrial settings.', icon: Flame },
              { title: 'Water Extinguishers', classes: 'A', desc: 'Effective for solid combustibles like wood and paper.', bestFor: 'Schools, libraries.', icon: ShieldCheck },
              { title: 'Wet Chemical', classes: 'A • F', desc: 'Designed for high-temperature fires involving oils.', bestFor: 'Commercial kitchens.', icon: Lifebuoy },
            ].map((type, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex flex-col p-6 bg-white border border-gray-200 rounded-3xl hover:border-[#E53935]/30 hover:shadow-2xl transition-all duration-500 overflow-hidden relative"
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-[#FF4D4D] via-[#E53935] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-[#E53935]/10 group-hover:text-[#E53935] transition-all duration-500 shrink-0"><type.icon size={24} /></div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#E53935] transition-colors" style={{ fontFamily: 'Oswald, sans-serif' }}>{type.title}</h3>
                    <p className="text-xs font-bold text-[#E53935] uppercase tracking-wider mt-1">Classes: {type.classes}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-6" style={{ fontFamily: 'Noto Sans, sans-serif' }}>{type.desc}</p>
                <div className="mt-auto bg-gray-50 p-4 rounded-2xl border border-gray-100 group-hover:bg-red-50/50 transition-all duration-300">
                  <p className="text-xs text-gray-500"><span className="font-bold block text-gray-900 mb-1 group-hover:text-[#E53935] transition-colors uppercase tracking-widest">Best for</span>{type.bestFor}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fire Classes Section */}
      <section className="w-full py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 xl:gap-20 relative z-10 items-start">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1 lg:sticky lg:top-8"
            >
              <div className="inline-flex items-center gap-2 mb-5 px-4 py-2 bg-red-50 rounded-full"><span className="w-2 h-2 rounded-full bg-[#E53935]" /><p className="text-[#E53935] text-xs font-bold tracking-widest uppercase" style={{ fontFamily: 'Noto Sans, sans-serif' }}>Quick Guide</p></div>
              <h2 className="text-3xl sm:text-4xl xl:text-5xl font-black text-gray-900 mb-5 leading-tight uppercase" style={{ fontFamily: 'Oswald, sans-serif' }}>Fire <span className="text-[#E53935]">Classes</span></h2>
              <div className="w-20 h-1 bg-[#E53935] rounded-full mb-6" />
              <p className="text-lg text-gray-600 leading-relaxed font-normal" style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}>Understanding fire classes is essential for choosing the right extinguishing agent.</p>
            </motion.div>

            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
                {[
                  { class: 'A', title: 'Solid Materials', detail: 'Wood, paper, textiles, and plastics.' },
                  { class: 'B', title: 'Flammable Liquids', detail: 'Fuel, oil, paint, and solvents.' },
                  { class: 'C', title: 'Flammable Gases', detail: 'Methane, propane, and butane.' },
                  { class: 'E', title: 'Electrical Fires', detail: 'Computers, motors, and appliances.' },
                  { class: 'F', title: 'Cooking Fires', detail: 'Cooking oils, fats, and grease.' }
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group flex items-center gap-6 pb-6 border-b border-gray-100 hover:border-[#E53935]/40 transition-all duration-300"
                  >
                    <div className="w-14 h-14 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-[#E53935]/10 group-hover:text-[#E53935] transition-all duration-500 shrink-0"><span className="text-2xl font-black" style={{ fontFamily: 'Oswald, sans-serif' }}>{item.class}</span></div>
                    <div className="flex flex-col"><span className="text-xl font-bold text-gray-900 group-hover:text-[#E53935] transition-colors duration-300" style={{ fontFamily: 'Oswald, sans-serif' }}>{item.title}</span><span className="text-sm text-gray-400 group-hover:text-gray-600 transition-colors duration-300">{item.detail}</span></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sizes Section */}
      <section className="w-full py-12 sm:py-16 lg:py-20 bg-linear-to-b from-gray-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-5 leading-tight uppercase" style={{ fontFamily: 'Oswald, sans-serif' }}>Available <span className="text-[#E53935]">Sizes</span></h2>
            <div className="w-20 h-1 bg-[#E53935] rounded-full mx-auto mb-6" />
            <p className="text-lg text-gray-600 leading-relaxed font-normal max-w-2xl mx-auto" style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}>Fire extinguishers come in various sizes measured by weight (kg).</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {sizes.map((sizeCategory, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative flex flex-col p-6 bg-white border border-gray-200 rounded-3xl hover:border-[#E53935]/30 hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-[#FF4D4D] via-[#E53935] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-[#E53935]/10 group-hover:text-[#E53935] transition-all duration-500 shrink-0"><BuildingWarehouse size={24} /></div>
                  <div><h3 className="text-xl font-bold text-gray-900 group-hover:text-[#E53935] transition-colors" style={{ fontFamily: 'Oswald, sans-serif' }}>{sizeCategory.category}</h3><p className="text-xs text-gray-400 font-medium uppercase tracking-wider mt-1">{sizeCategory.description}</p></div>
                </div>
                <div className="flex-1 space-y-3 mb-6">
                  {sizeCategory.sizes.map((size, i) => (
                    <div key={i} className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[#E53935]/20 group-hover:bg-[#E53935] transition-colors duration-300" /><span className="text-base text-gray-700 font-medium" style={{ fontFamily: 'Noto Sans, sans-serif' }}>{size}</span></div>
                  ))}
                </div>
                <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 group-hover:bg-red-50/50 transition-all duration-300"><p className="text-xs text-gray-500"><span className="font-bold block text-gray-900 mb-1 group-hover:text-[#E53935] transition-colors uppercase tracking-widest">Recommended for</span>{sizeCategory.bestFor}</p></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Buyer's Guide Section */}
      <section className="w-full py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white border border-gray-100 rounded-3xl p-8 sm:p-12 shadow-[0_8px_40px_rgb(0,0,0,0.07)] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#E53935]/5 rounded-full blur-3xl -mr-24 -mt-24 pointer-events-none" />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 xl:gap-20 relative z-10 items-start">
              <div className="lg:col-span-1 lg:sticky lg:top-8">
                <div className="inline-flex items-center gap-2 mb-5 px-4 py-2 bg-red-50 rounded-full"><span className="w-2 h-2 rounded-full bg-[#E53935]" /><p className="text-[#E53935] text-xs font-bold tracking-widest uppercase" style={{ fontFamily: 'Noto Sans, sans-serif' }}>Quick Reference</p></div>
                <h2 className="text-3xl sm:text-4xl xl:text-5xl font-black text-gray-900 mb-5 leading-tight uppercase" style={{ fontFamily: 'Oswald, sans-serif' }}>Simple <span className="text-[#E53935]">Buyer&apos;s Guide</span></h2>
                <div className="w-20 h-1 bg-[#E53935] rounded-full mb-6" />
                <p className="text-lg text-gray-600 leading-relaxed font-normal" style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}>Need a quick recommendation?</p>
              </div>
              <div className="lg:col-span-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
                  {buyerGuide.map((guide, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="group flex items-center gap-6 pb-6 border-b border-gray-100 hover:border-[#E53935]/40 transition-all duration-300"
                    >
                      <div className="w-14 h-14 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-[#E53935]/10 group-hover:text-[#E53935] transition-all duration-500 shrink-0">{getRenderIcon(guide.iconName)}</div>
                      <div className="flex flex-col"><h3 className="text-xl font-bold text-gray-900 group-hover:text-[#E53935] transition-colors truncate" style={{ fontFamily: 'Oswald, sans-serif' }}>{guide.scenario}</h3><p className="text-sm font-black text-[#E53935] uppercase tracking-wider mt-1">Use: {guide.recommendation}</p></div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Applications */}
      <section className="w-full py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-100 rounded-3xl p-8 sm:p-12 shadow-[0_8px_40px_rgb(0,0,0,0.07)] relative overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 xl:gap-20 relative z-10 items-start">
              <div className="lg:col-span-1 lg:sticky lg:top-8">
                <div className="inline-flex items-center gap-2 mb-5 px-4 py-2 bg-red-50 rounded-full"><span className="w-2 h-2 rounded-full bg-[#E53935]" /><p className="text-[#E53935] text-xs font-bold tracking-widest uppercase" style={{ fontFamily: 'Noto Sans, sans-serif' }}>Use Cases</p></div>
                <h2 className="text-3xl sm:text-4xl xl:text-5xl font-black text-gray-900 mb-5 leading-tight uppercase" style={{ fontFamily: 'Oswald, sans-serif' }}>Ideal <span className="text-[#E53935]">Applications</span></h2>
                <div className="w-20 h-1 bg-[#E53935] rounded-full mb-6" />
                <p className="text-lg text-gray-600 leading-relaxed font-normal" style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}>Strategically placed fire extinguishers are the first line of defense.</p>
              </div>
              <div className="lg:col-span-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
                  {applications.slice(0, 4).map((app, index) => (
                    <motion.div 
                      key={index} 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="group flex items-center gap-6 pb-6 border-b border-gray-100 hover:border-[#E53935]/40 transition-all duration-300"
                    >
                      <div className="w-14 h-14 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-[#E53935]/10 group-hover:text-[#E53935] transition-all duration-500 shrink-0">{getApplicationIcon(app)}</div>
                      <div className="flex flex-col"><span className="text-xl font-bold text-gray-900 group-hover:text-[#E53935] transition-colors duration-300" style={{ fontFamily: 'Oswald, sans-serif' }}>{app}</span><span className="text-sm text-gray-400">Essential Safety Protection</span></div>
                    </motion.div>
                  ))}
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
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-3 leading-tight" style={{ fontFamily: 'Oswald, sans-serif' }}>Features & <span className="text-[#E53935]">Benefits</span></h2>
            <div className="w-20 h-1 bg-[#E53935] rounded-full mx-auto mb-4" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group flex items-start gap-3 p-4 bg-white/80 backdrop-blur-sm border border-gray-300 rounded-xl hover:border-red-400 hover:shadow-2xl transition-all duration-500 overflow-hidden relative"
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-[#FF4D4D] via-[#E53935] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-[#E53935] group-hover:bg-[#E53935]/10 transition-all shrink-0"><CircleCheck size={20} /></div>
                <p className="text-sm font-bold text-gray-900 leading-relaxed group-hover:text-[#E53935] transition-colors mt-2" style={{ fontFamily: 'Noto Sans, sans-serif' }}>{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <WhoWeServe />

      {/* CTA Section */}
      <section className="relative w-full py-14 sm:py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url("/hero-3.webp")`, backgroundAttachment: 'fixed' }} />
        <div className="absolute inset-0 bg-linear-to-r from-gray-950 via-gray-950/90 to-gray-950/90" />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-3"><p className="text-white text-xs sm:text-sm font-bold tracking-widest uppercase px-4 py-2 bg-[#E53935]/10 rounded-full border border-[#E53935]/40 flex items-center gap-2 justify-center" style={{ fontFamily: 'Noto Sans, sans-serif' }}><Star size={16} />Get Started</p></div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight" style={{ fontFamily: 'Oswald, sans-serif' }}>Ensure your <span className="text-[#E53935]">safety today</span></h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed font-normal" style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}>Contact our experts for the right recommendation and installation.</p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
