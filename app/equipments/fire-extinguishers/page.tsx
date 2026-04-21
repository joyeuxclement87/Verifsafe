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
import WhoWeServe from '@/components/sections/WhoWeServe';
import Link from 'next/link';

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
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("/hero-3.webp")`,
            backgroundAttachment: 'fixed',
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/70 to-black/85" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-4">
            <p
              className="text-white text-xs sm:text-sm font-bold tracking-widest uppercase px-4 py-2 bg-[#E53935]/10 rounded-full border border-[#E53935]/40 flex items-center gap-2 justify-center"
              style={{ fontFamily: 'Noto Sans, sans-serif' }}
            >
              <Flame size={16} />
              Equipment Guide
            </p>
          </div>

          <h1
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-4 leading-tight uppercase tracking-wider"
            style={{ fontFamily: 'Oswald, sans-serif' }}
          >
            Fire <span className="text-[#E53935]">Extinguishers</span>
          </h1>

          <p
            className="text-base sm:text-lg lg:text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed font-normal"
            style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
          >
            Essential portable firefighting equipment designed to control small fires and protect lives before professional help arrives.
          </p>
        </div>
      </section>

      {/* What They Do Section */}
      <section className="w-full py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-block mb-4">
              <p
                className="text-[#E53935] text-sm sm:text-base font-bold tracking-widest uppercase px-4 py-2 bg-red-50 rounded-full flex items-center gap-2 justify-center"
                style={{ fontFamily: 'Noto Sans, sans-serif' }}
              >
                Introduction
              </p>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-3 leading-tight" style={{ fontFamily: 'Oswald, sans-serif' }}>
              What They <span className="text-[#E53935]">Do</span>
            </h2>
            <div className="w-20 h-1 bg-[#E53935] rounded-full mx-auto mb-4" />
            <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto font-normal" style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}>
              Fire extinguishers are portable safety devices which help respond immediately to fire incidents before they grow into major hazards. They are essential for homes, businesses, and industrial environments.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto mt-16">
            {/* Connecting Line for Desktop */}
            <div className="hidden md:block absolute top-10 left-[16.66%] right-[16.66%] h-0.5 bg-gray-200" />
            <div className="hidden md:block absolute top-10 left-[16.66%] right-[16.66%] h-0.5 bg-linear-to-r from-[#E53935]/80 via-[#E53935]/40 to-transparent" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
              {/* Step 1 */}
              <div className="group relative flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-white border border-gray-100 shadow-xl flex items-center justify-center mb-6 group-hover:border-[#E53935]/30 group-hover:shadow-[#E53935]/20 group-hover:scale-110 transition-all duration-500 relative z-10">
                  <div className="w-14 h-14 rounded-full bg-[#E53935]/10 flex items-center justify-center">
                    <Bolt size={28} className="text-[#E53935]" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#E53935] transition-colors duration-300" style={{ fontFamily: 'Oswald, sans-serif' }}>Immediate Response</h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base max-w-xs" style={{ fontFamily: 'Noto Sans, sans-serif' }}>Enables quick action when fire starts, providing the crucial first line of defense.</p>
              </div>

              {/* Step 2 */}
              <div className="group relative flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-white border border-gray-100 shadow-xl flex items-center justify-center mb-6 group-hover:border-[#E53935]/30 group-hover:shadow-[#E53935]/20 group-hover:scale-110 transition-all duration-500 relative z-10">
                  <div className="w-14 h-14 rounded-full bg-[#E53935]/10 flex items-center justify-center">
                    <ShieldCheck size={28} className="text-[#E53935]" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#E53935] transition-colors duration-300" style={{ fontFamily: 'Oswald, sans-serif' }}>Prevents Escalation</h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base max-w-xs" style={{ fontFamily: 'Noto Sans, sans-serif' }}>Stops small fires from spreading and becoming major structural or life-threatening hazards.</p>
              </div>

              {/* Step 3 */}
              <div className="group relative flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-white border border-gray-100 shadow-xl flex items-center justify-center mb-6 group-hover:border-[#E53935]/30 group-hover:shadow-[#E53935]/20 group-hover:scale-110 transition-all duration-500 relative z-10">
                  <div className="w-14 h-14 rounded-full bg-[#E53935]/10 flex items-center justify-center">
                    <HandFinger size={28} className="text-[#E53935]" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#E53935] transition-colors duration-300" style={{ fontFamily: 'Oswald, sans-serif' }}>Portable & Accessible</h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base max-w-xs" style={{ fontFamily: 'Noto Sans, sans-serif' }}>Always available and easy to use in homes and workplaces for immediate deployment.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types Section */}
      <section className="w-full py-12 sm:py-16 lg:py-20 bg-linear-to-b from-gray-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2
              className="text-4xl sm:text-5xl font-black text-gray-900 mb-3 leading-tight"
              style={{ fontFamily: 'Oswald, sans-serif' }}
            >
              Choose the <span className="text-[#E53935]">Right Type</span>
            </h2>
            <div className="w-20 h-1 bg-[#E53935] rounded-full mx-auto mb-6" />
            <p
              className="text-lg text-gray-700 max-w-2xl mx-auto font-normal"
              style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
            >
              Fire extinguishers are color-coded and specifically designed to combat different classes of fire. Selecting the correct type is vital for effective firefighting.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {/* CO₂ Extinguishers */}
            <div className="group flex flex-col p-6 bg-white border border-gray-200 rounded-3xl hover:border-[#E53935]/30 hover:shadow-2xl transition-all duration-500 overflow-hidden relative">
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-[#FF4D4D] via-[#E53935] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-[#FF4D4D] to-[#E53935] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              
              <div className="flex items-start gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-[#E53935]/10 group-hover:text-[#E53935] transition-all duration-500 shrink-0">
                  <Bulb size={24} strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#E53935] transition-colors" style={{ fontFamily: 'Oswald, sans-serif' }}>CO₂ Extinguishers</h3>
                  <p className="text-xs font-bold text-[#E53935] uppercase tracking-wider mt-1" style={{ fontFamily: 'Noto Sans, sans-serif' }}>Classes: B • E</p>
                </div>
              </div>
              
              <p className="text-sm text-gray-600 leading-relaxed mb-6" style={{ fontFamily: 'Noto Sans, sans-serif' }}>
                Ideal for electrical equipment as CO₂ is non-conductive and leaves no residue behind.
              </p>

              <div className="mt-auto bg-gray-50 p-4 rounded-2xl border border-gray-100 group-hover:bg-red-50/50 group-hover:border-[#E53935]/10 transition-all duration-300">
                <p className="text-xs text-gray-500 leading-relaxed" style={{ fontFamily: 'Noto Sans, sans-serif' }}>
                  <span className="font-bold block text-gray-900 mb-1 group-hover:text-[#E53935] transition-colors uppercase tracking-widest">Best for</span>
                  Offices, server rooms, and laboratories with sensitive electronics.
                </p>
              </div>
            </div>

            {/* Foam Extinguishers */}
            <div className="group flex flex-col p-6 bg-white border border-gray-200 rounded-3xl hover:border-[#E53935]/30 hover:shadow-2xl transition-all duration-500 overflow-hidden relative">
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-[#FF4D4D] via-[#E53935] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-[#FF4D4D] to-[#E53935] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              
              <div className="flex items-start gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-[#E53935]/10 group-hover:text-[#E53935] transition-all duration-500 shrink-0">
                  <Droplet size={24} strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#E53935] transition-colors" style={{ fontFamily: 'Oswald, sans-serif' }}>Foam Extinguishers</h3>
                  <p className="text-xs font-bold text-[#E53935] uppercase tracking-wider mt-1" style={{ fontFamily: 'Noto Sans, sans-serif' }}>Classes: A • B</p>
                </div>
              </div>
              
              <p className="text-sm text-gray-600 leading-relaxed mb-6" style={{ fontFamily: 'Noto Sans, sans-serif' }}>
                Highly effective on flammable liquid fires and solid combustible materials like wood.
              </p>

              <div className="mt-auto bg-gray-50 p-4 rounded-2xl border border-gray-100 group-hover:bg-red-50/50 group-hover:border-[#E53935]/10 transition-all duration-300">
                <p className="text-xs text-gray-500 leading-relaxed" style={{ fontFamily: 'Noto Sans, sans-serif' }}>
                  <span className="font-bold block text-gray-900 mb-1 group-hover:text-[#E53935] transition-colors uppercase tracking-widest">Best for</span>
                  Garages, workshops, and fuel storage areas.
                </p>
              </div>
            </div>

            {/* Dry Powder Extinguishers */}
            <div className="group flex flex-col p-6 bg-white border border-gray-200 rounded-3xl hover:border-[#E53935]/30 hover:shadow-2xl transition-all duration-500 overflow-hidden relative">
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-[#FF4D4D] via-[#E53935] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-[#FF4D4D] to-[#E53935] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              
              <div className="flex items-start gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-[#E53935]/10 group-hover:text-[#E53935] transition-all duration-500 shrink-0">
                  <Flame size={24} strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#E53935] transition-colors" style={{ fontFamily: 'Oswald, sans-serif' }}>Dry Powder</h3>
                  <p className="text-xs font-bold text-[#E53935] uppercase tracking-wider mt-1" style={{ fontFamily: 'Noto Sans, sans-serif' }}>Classes: A • B • C • E</p>
                </div>
              </div>
              
              <p className="text-sm text-gray-600 leading-relaxed mb-6" style={{ fontFamily: 'Noto Sans, sans-serif' }}>
                Multi-purpose extinguishers capable of suppressing Class A, B, and C fires efficiently.
              </p>

              <div className="mt-auto bg-gray-50 p-4 rounded-2xl border border-gray-100 group-hover:bg-red-50/50 group-hover:border-[#E53935]/10 transition-all duration-300">
                <p className="text-xs text-gray-500 leading-relaxed" style={{ fontFamily: 'Noto Sans, sans-serif' }}>
                  <span className="font-bold block text-gray-900 mb-1 group-hover:text-[#E53935] transition-colors uppercase tracking-widest">Best for</span>
                  General construction sites, vehicles, and industrial settings.
                </p>
              </div>
            </div>

            {/* Water Extinguishers */}
            <div className="group flex flex-col p-6 bg-white border border-gray-200 rounded-3xl hover:border-[#E53935]/30 hover:shadow-2xl transition-all duration-500 overflow-hidden relative">
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-[#FF4D4D] via-[#E53935] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-[#FF4D4D] to-[#E53935] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              
              <div className="flex items-start gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-[#E53935]/10 group-hover:text-[#E53935] transition-all duration-500 shrink-0">
                  <ShieldCheck size={24} strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#E53935] transition-colors" style={{ fontFamily: 'Oswald, sans-serif' }}>Water Extinguishers</h3>
                  <p className="text-xs font-bold text-[#E53935] uppercase tracking-wider mt-1" style={{ fontFamily: 'Noto Sans, sans-serif' }}>Classes: A</p>
                </div>
              </div>
              
              <p className="text-sm text-gray-600 leading-relaxed mb-6" style={{ fontFamily: 'Noto Sans, sans-serif' }}>
                Simple and effective for solid combustibles like wood, paper, and textiles.
              </p>

              <div className="mt-auto bg-gray-50 p-4 rounded-2xl border border-gray-100 group-hover:bg-red-50/50 group-hover:border-[#E53935]/10 transition-all duration-300">
                <p className="text-xs text-gray-500 leading-relaxed" style={{ fontFamily: 'Noto Sans, sans-serif' }}>
                  <span className="font-bold block text-gray-900 mb-1 group-hover:text-[#E53935] transition-colors uppercase tracking-widest">Best for</span>
                  Schools, libraries, and warehouses storing paper or fabric.
                </p>
              </div>
            </div>

            {/* Wet Chemical Extinguishers */}
            <div className="group flex flex-col p-6 bg-white border border-gray-200 rounded-3xl hover:border-[#E53935]/30 hover:shadow-2xl transition-all duration-500 overflow-hidden relative">
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-[#FF4D4D] via-[#E53935] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-[#FF4D4D] to-[#E53935] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              
              <div className="flex items-start gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-[#E53935]/10 group-hover:text-[#E53935] transition-all duration-500 shrink-0">
                  <Lifebuoy size={24} strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#E53935] transition-colors" style={{ fontFamily: 'Oswald, sans-serif' }}>Wet Chemical</h3>
                  <p className="text-xs font-bold text-[#E53935] uppercase tracking-wider mt-1" style={{ fontFamily: 'Noto Sans, sans-serif' }}>Classes: A • F</p>
                </div>
              </div>
              
              <p className="text-sm text-gray-600 leading-relaxed mb-6" style={{ fontFamily: 'Noto Sans, sans-serif' }}>
                Specifically designed for high-temperature fires involving cooking oils and fats.
              </p>

              <div className="mt-auto bg-gray-50 p-4 rounded-2xl border border-gray-100 group-hover:bg-red-50/50 group-hover:border-[#E53935]/10 transition-all duration-300">
                <p className="text-xs text-gray-500 leading-relaxed" style={{ fontFamily: 'Noto Sans, sans-serif' }}>
                  <span className="font-bold block text-gray-900 mb-1 group-hover:text-[#E53935] transition-colors uppercase tracking-widest">Best for</span>
                  Commercial kitchens, food processing plants, and restaurants.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fire Classes Section */}
      <section className="w-full py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 xl:gap-20 relative z-10 items-start">
            
            {/* Left: Header */}
            <div className="lg:col-span-1 lg:sticky lg:top-8">
              <div className="inline-flex items-center gap-2 mb-5 px-4 py-2 bg-red-50 rounded-full">
                <span className="w-2 h-2 rounded-full bg-[#E53935]" />
                <p
                  className="text-[#E53935] text-xs font-bold tracking-widest uppercase"
                  style={{ fontFamily: 'Noto Sans, sans-serif' }}
                >
                  Quick Guide
                </p>
              </div>
              <h2
                className="text-3xl sm:text-4xl xl:text-5xl font-black text-gray-900 mb-5 leading-tight uppercase"
                style={{ fontFamily: 'Oswald, sans-serif' }}
              >
                Fire <span className="text-[#E53935]">Classes</span>
              </h2>
              <div className="w-20 h-1 bg-[#E53935] rounded-full mb-6" />
              <p
                className="text-lg text-gray-600 leading-relaxed font-normal"
                style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
              >
                Understanding fire classes is essential for choosing the right extinguishing agent. Each class represents a specific type of fuel.
              </p>
            </div>

            {/* Right: Underlined Grid of Classes */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
                {[
                  { class: 'A', title: 'Solid Materials', detail: 'Wood, paper, textiles, and plastics.' },
                  { class: 'B', title: 'Flammable Liquids', detail: 'Fuel, oil, paint, and solvents.' },
                  { class: 'C', title: 'Flammable Gases', detail: 'Methane, propane, and butane.' },
                  { class: 'E', title: 'Electrical Fires', detail: 'Computers, motors, and appliances.' },
                  { class: 'F', title: 'Cooking Fires', detail: 'Cooking oils, fats, and grease.' }
                ].map((item, i) => (
                  <div 
                    key={i} 
                    className="group flex items-center gap-6 pb-6 border-b border-gray-100 hover:border-[#E53935]/40 transition-all duration-300"
                  >
                    <div className="w-14 h-14 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-[#E53935]/10 group-hover:text-[#E53935] group-hover:scale-110 transition-all duration-500 shrink-0">
                      <span className="text-2xl font-black" style={{ fontFamily: 'Oswald, sans-serif' }}>{item.class}</span>
                    </div>
                    <div className="flex flex-col">
                      <span 
                        className="text-xl font-bold text-gray-900 group-hover:text-[#E53935] transition-colors duration-300" 
                        style={{ fontFamily: 'Oswald, sans-serif' }}
                      >
                        {item.title}
                      </span>
                      <span className="text-sm text-gray-400 group-hover:text-gray-600 transition-colors duration-300">{item.detail}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Sizes Section */}
      <section className="w-full py-12 sm:py-16 lg:py-20 bg-linear-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Centered Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-5 px-4 py-2 bg-red-50 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#E53935]" />
              <p
                className="text-[#E53935] text-xs font-bold tracking-widest uppercase"
                style={{ fontFamily: 'Noto Sans, sans-serif' }}
              >
                Technical Specs
              </p>
            </div>
            <h2
              className="text-4xl sm:text-5xl font-black text-gray-900 mb-5 leading-tight uppercase"
              style={{ fontFamily: 'Oswald, sans-serif' }}
            >
              Available <span className="text-[#E53935]">Sizes</span>
            </h2>
            <div className="w-20 h-1 bg-[#E53935] rounded-full mx-auto mb-6" />
            <p
              className="text-lg text-gray-600 leading-relaxed font-normal max-w-2xl mx-auto"
              style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
            >
              Fire extinguishers come in various sizes measured by weight (kg). Choosing the right capacity is crucial for effective response.
            </p>
          </div>

          {/* Grid of Detailed Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {sizes.map((sizeCategory, index) => (
              <div key={index} className="group relative flex flex-col p-6 bg-white border border-gray-200 rounded-3xl hover:border-[#E53935]/30 hover:shadow-2xl transition-all duration-500 overflow-hidden">
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-[#FF4D4D] via-[#E53935] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-[#FF4D4D] to-[#E53935] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-[#E53935]/10 group-hover:text-[#E53935] transition-all duration-500 shrink-0">
                    <BuildingWarehouse size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#E53935] transition-colors" style={{ fontFamily: 'Oswald, sans-serif' }}>{sizeCategory.category}</h3>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mt-1">{sizeCategory.description}</p>
                  </div>
                </div>

                <div className="flex-1 space-y-3 mb-6">
                  {sizeCategory.sizes.map((size, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#E53935]/20 group-hover:bg-[#E53935] transition-colors duration-300" />
                      <span className="text-base text-gray-700 font-medium" style={{ fontFamily: 'Noto Sans, sans-serif' }}>{size}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 group-hover:bg-red-50/50 group-hover:border-[#E53935]/10 transition-all duration-300">
                  <p className="text-xs text-gray-500 leading-relaxed" style={{ fontFamily: 'Noto Sans, sans-serif' }}>
                    <span className="font-bold block text-gray-900 mb-1 group-hover:text-[#E53935] transition-colors uppercase tracking-widest">Recommended for</span>
                    {sizeCategory.bestFor}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Buyer's Guide Section */}
      <section className="w-full py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-gray-100 rounded-3xl p-8 sm:p-12 shadow-[0_8px_40px_rgb(0,0,0,0.07)] relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#E53935]/5 rounded-full blur-3xl -mr-24 -mt-24 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-red-50 rounded-full blur-3xl -ml-16 -mb-16 pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 xl:gap-20 relative z-10 items-start">
              {/* Left: Header */}
              <div className="lg:col-span-1 lg:sticky lg:top-8">
                <div className="inline-flex items-center gap-2 mb-5 px-4 py-2 bg-red-50 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-[#E53935]" />
                  <p
                    className="text-[#E53935] text-xs font-bold tracking-widest uppercase"
                    style={{ fontFamily: 'Noto Sans, sans-serif' }}
                  >
                    Quick Reference
                  </p>
                </div>
                <h2
                  className="text-3xl sm:text-4xl xl:text-5xl font-black text-gray-900 mb-5 leading-tight uppercase"
                  style={{ fontFamily: 'Oswald, sans-serif' }}
                >
                  Simple <span className="text-[#E53935]">Buyer&apos;s Guide</span>
                </h2>
                <div className="w-20 h-1 bg-[#E53935] rounded-full mb-6" />
                <p
                  className="text-lg text-gray-600 leading-relaxed font-normal"
                  style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
                >
                  Need a quick recommendation? We&apos;ve simplified the selection process for your specific environment.
                </p>
              </div>

              {/* Right: 2-Column Grid with Underlines */}
              <div className="lg:col-span-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
                  {buyerGuide.map((guide, index) => (
                    <div
                      key={index}
                      className="group flex items-center gap-6 pb-6 border-b border-gray-100 hover:border-[#E53935]/40 transition-all duration-300"
                    >
                      {/* Icon Container */}
                      <div className="w-14 h-14 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-[#E53935]/10 group-hover:text-[#E53935] group-hover:scale-110 transition-all duration-500 shrink-0">
                        {getRenderIcon(guide.iconName)}
                      </div>

                      {/* Info Content */}
                      <div className="flex flex-col min-w-0">
                        <h3
                          className="text-xl font-bold text-gray-900 group-hover:text-[#E53935] transition-colors truncate"
                          style={{ fontFamily: 'Oswald, sans-serif' }}
                        >
                          {guide.scenario}
                        </h3>
                        <p className="text-sm font-black text-[#E53935] uppercase tracking-wider mt-1">
                          Use: {guide.recommendation}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="w-full py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-gray-100 rounded-3xl p-8 sm:p-12 shadow-[0_8px_40px_rgb(0,0,0,0.07)] relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#E53935]/5 rounded-full blur-3xl -mr-24 -mt-24 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-red-50 rounded-full blur-3xl -ml-16 -mb-16 pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 xl:gap-20 relative z-10 items-start">
              {/* Left: Header */}
              <div className="lg:col-span-1 lg:sticky lg:top-8">
                <div className="inline-flex items-center gap-2 mb-5 px-4 py-2 bg-red-50 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-[#E53935]" />
                  <p
                    className="text-[#E53935] text-xs font-bold tracking-widest uppercase"
                    style={{ fontFamily: 'Noto Sans, sans-serif' }}
                  >
                    Use Cases
                  </p>
                </div>
                <h2
                  className="text-3xl sm:text-4xl xl:text-5xl font-black text-gray-900 mb-5 leading-tight uppercase"
                  style={{ fontFamily: 'Oswald, sans-serif' }}
                >
                  Ideal <span className="text-[#E53935]">Applications</span>
                </h2>
                <div className="w-20 h-1 bg-[#E53935] rounded-full mb-6" />
                <p
                  className="text-lg text-gray-600 leading-relaxed font-normal"
                  style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
                >
                  Strategically placed fire extinguishers are the first line of defense in various environments.
                </p>
              </div>

              {/* Right: 2x2 Grid with Underlines */}
              <div className="lg:col-span-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
                  {applications.slice(0, 4).map((app, index) => (
                    <div 
                      key={index} 
                      className="group flex items-center gap-6 pb-6 border-b border-gray-100 hover:border-[#E53935]/40 transition-all duration-300"
                    >
                      <div className="w-14 h-14 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-[#E53935]/10 group-hover:text-[#E53935] group-hover:scale-110 transition-all duration-500 shrink-0">
                        {getApplicationIcon(app)}
                      </div>
                      <div className="flex flex-col">
                        <span 
                          className="text-xl font-bold text-gray-900 group-hover:text-[#E53935] transition-colors duration-300" 
                          style={{ fontFamily: 'Oswald, sans-serif' }}
                        >
                          {app}
                        </span>
                        <span className="text-sm text-gray-400 group-hover:text-gray-600 transition-colors duration-300">Essential Safety Protection</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Many More Options */}
                <div className="mt-12 flex items-center gap-3 text-gray-400">
                  <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center">
                    <Plus size={16} />
                  </div>
                  <p className="text-sm font-bold uppercase tracking-widest" style={{ fontFamily: 'Oswald, sans-serif' }}>
                    And many more options available...
                  </p>
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
            <h2
              className="text-4xl sm:text-5xl font-black text-gray-900 mb-3 leading-tight"
              style={{ fontFamily: 'Oswald, sans-serif' }}
            >
              Features & <span className="text-[#E53935]">Benefits</span>
            </h2>
            <div className="w-20 h-1 bg-[#E53935] rounded-full mx-auto mb-4" />
            <p
              className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto font-normal"
              style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
            >
              Why choose our fire extinguishers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="group flex items-start gap-3 p-4 bg-white/80 backdrop-blur-sm border border-gray-300 rounded-xl hover:border-red-400 hover:shadow-2xl hover:scale-105 transition-all duration-500 hover:bg-white overflow-hidden relative">
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-[#FF4D4D] via-[#E53935] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-[#FF4D4D] to-[#E53935] rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-[#E53935] group-hover:bg-[#E53935]/10 transition-all shrink-0">
                  <CircleCheck size={20} strokeWidth={1.5} />
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
        <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/70 to-black/85" />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-block mb-3">
            <p
              className="text-white text-xs sm:text-sm font-bold tracking-widest uppercase px-4 py-2 bg-[#E53935]/10 rounded-full border border-[#E53935]/40 flex items-center gap-2 justify-center"
              style={{ fontFamily: 'Noto Sans, sans-serif' }}
            >
              <Star size={16} />
              Get Started
            </p>
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight"
            style={{ fontFamily: 'Oswald, sans-serif' }}
          >
            Ensure your <span className="text-[#E53935]">safety today</span>
          </h2>

          <p
            className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed font-normal"
            style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
          >
            Contact our experts for the right fire extinguisher recommendation and professional installation.
          </p>
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
              <div className="inline-block">
                <p className="text-[#E53935] text-sm sm:text-base font-bold tracking-widest uppercase px-4 py-2 bg-red-50 rounded-full inline-flex items-center gap-2" style={{ fontFamily: 'Noto Sans, sans-serif' }}>
                  <FileText size={16} />
                  Enquire Now
                </p>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight" style={{ fontFamily: 'Oswald, sans-serif' }}>
                Need <span className="text-[#E53935]">Fire Extinguishers</span>?
              </h2>

              <p className="text-base sm:text-lg text-gray-600 font-normal leading-relaxed" style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}>
                Whether it&apos;s for a single office or a large industrial complex, our team will provide you with the best equipment and service options.
              </p>

              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <h4 className="text-sm font-bold text-gray-900 mb-4" style={{ fontFamily: 'Oswald, sans-serif' }}>Our Commitment</h4>
                <ul className="space-y-4 text-gray-600 text-sm" style={{ fontFamily: 'Noto Sans, sans-serif' }}>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#E53935]/10 text-[#E53935] shrink-0">
                      <Check size={13} />
                    </span>
                    Professional Safety Audit
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#E53935]/10 text-[#E53935] shrink-0">
                      <Check size={13} />
                    </span>
                    Certified Equipment Supply
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#E53935]/10 text-[#E53935] shrink-0">
                      <Check size={13} />
                    </span>
                    Ongoing Maintenance Support
                  </li>
                </ul>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div>
              <form onSubmit={(e) => { e.preventDefault(); }} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-2" style={{ fontFamily: 'Noto Sans, sans-serif' }}>Name</label>
                  <input type="text" required className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:border-[#E53935] outline-none transition-all placeholder-gray-400 text-gray-900" style={{ fontFamily: 'Noto Sans, sans-serif', borderWidth: '1px' }} placeholder="Your full name" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-2" style={{ fontFamily: 'Noto Sans, sans-serif' }}>Email</label>
                  <input type="email" required className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:border-[#E53935] outline-none transition-all placeholder-gray-400 text-gray-900" style={{ fontFamily: 'Noto Sans, sans-serif', borderWidth: '1px' }} placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-2" style={{ fontFamily: 'Noto Sans, sans-serif' }}>Equipment Needed</label>
                  <select required className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:border-[#E53935] outline-none transition-all text-gray-900" style={{ fontFamily: 'Noto Sans, sans-serif', borderWidth: '1px' }} defaultValue="Fire Extinguishers">
                    <option value="Fire Extinguishers">Fire Extinguishers</option>
                    <option value="Fire Hose Reels">Fire Hose Reels</option>
                    <option value="Fire Alarms">Fire Alarms</option>
                    <option value="Training">Safety Training</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-2" style={{ fontFamily: 'Noto Sans, sans-serif' }}>Message</label>
                  <textarea required rows={4} className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:border-[#E53935] outline-none transition-all placeholder-gray-400 text-gray-900 resize-none" style={{ fontFamily: 'Noto Sans, sans-serif', borderWidth: '1px' }} placeholder="Describe your safety requirements" />
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
