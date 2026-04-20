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
  HandFinger
} from 'tabler-icons-react';
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
    switch(iconName) {
      case 'home': return <Home size={20} />;
      case 'bulb': return <Bolt size={20} />;
      case 'spray': return <Droplet size={20} />;
      case 'warehouse': return <BuildingWarehouse size={20} />;
      default: return <Building size={20} />;
    }
  };

  const getApplicationIcon = (app: string) => {
    switch(app) {
      case 'Homes': return <Home size={18} className="text-[#E53935]" />;
      case 'Offices': return <Building size={18} className="text-[#E53935]" />;
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
      <section className="relative w-full h-96 sm:h-125 lg:h-150 flex items-center justify-center overflow-hidden mt-0">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("/hero-3.webp")`,
            backgroundAttachment: 'fixed',
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-black/85 via-black/90 to-black/95" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <div className="inline-block mb-4">
              <p
                className="text-white text-xs sm:text-sm font-bold tracking-widest uppercase px-4 py-2 bg-[#E53935]/10 rounded-full border border-[#E53935]/40 flex items-center gap-2 justify-center"
                style={{ fontFamily: 'Noto Sans, sans-serif' }}
              >
                <Flame size={16} />
                Fire Extinguishers
              </p>
            </div>

            <h1
              className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-white mb-3 sm:mb-5 leading-tight uppercase tracking-wider"
              style={{ fontFamily: 'Oswald, sans-serif' }}
            >
              Fire Extinguishers Guide
            </h1>

            <p
              className="text-sm sm:text-base lg:text-base text-gray-200 mb-5 sm:mb-7 max-w-2xl leading-relaxed font-normal"
              style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
            >
              Portable firefighting equipment designed to control small fires before they spread.
            </p>


          </div>
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
            <div className="w-12 h-1 bg-[#E53935] rounded-full mx-auto mb-4" />
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
              Choose the Right Type
            </h2>
            <div className="w-12 h-1 bg-[#E53935] rounded-full mx-auto mb-4" />
            <p
              className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto font-normal"
              style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
            >
              Different fire risks require specific extinguishers. Using the correct type ensures safe and effective fire control.
            </p>
          </div>

          {/* Types Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
            {/* CO₂ Extinguishers */}
            <div className="group flex flex-col sm:flex-row gap-4 p-5 bg-white/80 backdrop-blur-sm border border-gray-300 rounded-xl hover:border-red-400 hover:shadow-2xl hover:scale-105 transition-all duration-500 hover:bg-white overflow-hidden relative">
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-[#E53935] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-[#E53935] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <div className="w-12 h-12 rounded-lg bg-[#E53935]/10 flex items-center justify-center text-[#E53935] group-hover:bg-[#E53935] group-hover:text-white transition-all duration-300 shrink-0">
                <Bulb size={24} strokeWidth={1.5} />
              </div>
              <div className="flex-1">
                <h3 className="text-base font-bold text-gray-900 group-hover:text-[#E53935] transition-colors" style={{ fontFamily: 'Oswald, sans-serif' }}>CO₂ Extinguishers</h3>
                <p className="text-xs font-bold text-[#E53935] mb-2" style={{ fontFamily: 'Noto Sans, sans-serif' }}>Classes: B • Electrical</p>
                <p className="text-sm text-gray-500 line-clamp-2" style={{ fontFamily: 'Noto Sans, sans-serif' }}>Ideal for offices, server rooms, and electrical equipment. Non-conductive.</p>
              </div>
            </div>

            {/* Foam Extinguishers */}
            <div className="group flex flex-col sm:flex-row gap-4 p-5 bg-white/80 backdrop-blur-sm border border-gray-300 rounded-xl hover:border-red-400 hover:shadow-2xl hover:scale-105 transition-all duration-500 hover:bg-white overflow-hidden relative">
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-[#E53935] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-[#E53935] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <div className="w-12 h-12 rounded-lg bg-[#E53935]/10 flex items-center justify-center text-[#E53935] group-hover:bg-[#E53935] group-hover:text-white transition-all duration-300 shrink-0">
                <Droplet size={24} strokeWidth={1.5} />
              </div>
              <div className="flex-1">
                <h3 className="text-base font-bold text-gray-900 group-hover:text-[#E53935] transition-colors" style={{ fontFamily: 'Oswald, sans-serif' }}>Foam Extinguishers</h3>
                <p className="text-xs font-bold text-[#E53935] mb-2" style={{ fontFamily: 'Noto Sans, sans-serif' }}>Classes: A • B (Liquids)</p>
                <p className="text-sm text-gray-500 line-clamp-2" style={{ fontFamily: 'Noto Sans, sans-serif' }}>Best for offices, retail shops, and warehouses. Leaves foam residue.</p>
              </div>
            </div>

            {/* Dry Powder Extinguishers */}
            <div className="group flex flex-col sm:flex-row gap-4 p-5 bg-white/80 backdrop-blur-sm border border-gray-300 rounded-xl hover:border-red-400 hover:shadow-2xl hover:scale-105 transition-all duration-500 hover:bg-white overflow-hidden relative">
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-[#E53935] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-[#E53935] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <div className="w-12 h-12 rounded-lg bg-[#E53935]/10 flex items-center justify-center text-[#E53935] group-hover:bg-[#E53935] group-hover:text-white transition-all duration-300 shrink-0">
                <Flame size={24} strokeWidth={1.5} />
              </div>
              <div className="flex-1">
                <h3 className="text-base font-bold text-gray-900 group-hover:text-[#E53935] transition-colors" style={{ fontFamily: 'Oswald, sans-serif' }}>Dry Powder Extinguishers</h3>
                <p className="text-xs font-bold text-[#E53935] mb-2" style={{ fontFamily: 'Noto Sans, sans-serif' }}>Classes: A • B • C • Electrical</p>
                <p className="text-sm text-gray-500 line-clamp-2" style={{ fontFamily: 'Noto Sans, sans-serif' }}>Highly versatile for industrial sites, garages, and outdoor areas.</p>
              </div>
            </div>

            {/* Water Extinguishers */}
            <div className="group flex flex-col sm:flex-row gap-4 p-5 bg-white/80 backdrop-blur-sm border border-gray-300 rounded-xl hover:border-red-400 hover:shadow-2xl hover:scale-105 transition-all duration-500 hover:bg-white overflow-hidden relative">
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-[#E53935] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-[#E53935] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <div className="w-12 h-12 rounded-lg bg-[#E53935]/10 flex items-center justify-center text-[#E53935] group-hover:bg-[#E53935] group-hover:text-white transition-all duration-300 shrink-0">
                <ShieldCheck size={24} strokeWidth={1.5} />
              </div>
              <div className="flex-1">
                <h3 className="text-base font-bold text-gray-900 group-hover:text-[#E53935] transition-colors" style={{ fontFamily: 'Oswald, sans-serif' }}>Water Extinguishers</h3>
                <p className="text-xs font-bold text-[#E53935] mb-2" style={{ fontFamily: 'Noto Sans, sans-serif' }}>Classes: A (Wood, Paper)</p>
                <p className="text-sm text-gray-500 line-clamp-2" style={{ fontFamily: 'Noto Sans, sans-serif' }}>Eco-friendly choice for offices, schools, and residential spaces.</p>
              </div>
            </div>

            {/* Wet Chemical Extinguishers */}
            <div className="group flex flex-col sm:flex-row gap-4 p-5 bg-white/80 backdrop-blur-sm border border-gray-300 rounded-xl hover:border-red-400 hover:shadow-2xl hover:scale-105 transition-all duration-500 hover:bg-white overflow-hidden relative">
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-[#E53935] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-[#E53935] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <div className="w-12 h-12 rounded-lg bg-[#E53935]/10 flex items-center justify-center text-[#E53935] group-hover:bg-[#E53935] group-hover:text-white transition-all duration-300 shrink-0">
                <Lifebuoy size={24} strokeWidth={1.5} />
              </div>
              <div className="flex-1">
                <h3 className="text-base font-bold text-gray-900 group-hover:text-[#E53935] transition-colors" style={{ fontFamily: 'Oswald, sans-serif' }}>Wet Chemical</h3>
                <p className="text-xs font-bold text-[#E53935] mb-2" style={{ fontFamily: 'Noto Sans, sans-serif' }}>Classes: F (Cooking Oils)</p>
                <p className="text-sm text-gray-500 line-clamp-2" style={{ fontFamily: 'Noto Sans, sans-serif' }}>Kitchen-safe for restaurants, commercial kitchens, and food prep.</p>
              </div>
            </div>
          </div>

          {/* Fire Classes Quick Guide */}
          <div className="mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 text-center" style={{ fontFamily: 'Oswald, sans-serif' }}>Fire Classes (Quick Guide)</h3>
            <div className="w-12 h-1 bg-[#E53935] rounded-full mx-auto mb-8" />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
              {/* Class A */}
              <div className="group flex items-center gap-3 p-4 bg-white/80 backdrop-blur-sm border border-gray-300 rounded-xl hover:border-red-400 hover:shadow-2xl hover:scale-105 transition-all duration-500 hover:bg-white overflow-hidden relative">
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-[#E53935] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-[#E53935] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div className="w-10 h-10 rounded-lg bg-[#E53935]/10 flex items-center justify-center text-[#E53935] group-hover:bg-[#E53935] group-hover:text-white transition-all duration-300 shrink-0">
                  <span className="text-base font-black" style={{ fontFamily: 'Oswald, sans-serif' }}>A</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 group-hover:text-[#E53935] transition-colors" style={{ fontFamily: 'Oswald, sans-serif' }}>Solid Materials</h4>
                  <p className="text-xs text-gray-500" style={{ fontFamily: 'Noto Sans, sans-serif' }}>Wood, paper, textiles</p>
                </div>
              </div>

              {/* Class B */}
              <div className="group flex items-center gap-3 p-4 bg-white/80 backdrop-blur-sm border border-gray-300 rounded-xl hover:border-red-400 hover:shadow-2xl hover:scale-105 transition-all duration-500 hover:bg-white overflow-hidden relative">
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-[#E53935] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-[#E53935] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div className="w-10 h-10 rounded-lg bg-[#E53935]/10 flex items-center justify-center text-[#E53935] group-hover:bg-[#E53935] group-hover:text-white transition-all duration-300 shrink-0">
                  <span className="text-base font-black" style={{ fontFamily: 'Oswald, sans-serif' }}>B</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 group-hover:text-[#E53935] transition-colors" style={{ fontFamily: 'Oswald, sans-serif' }}>Flammable Liquids</h4>
                  <p className="text-xs text-gray-500" style={{ fontFamily: 'Noto Sans, sans-serif' }}>Fuel, oil, paint</p>
                </div>
              </div>

              {/* Class C */}
              <div className="group flex items-center gap-3 p-4 bg-white/80 backdrop-blur-sm border border-gray-300 rounded-xl hover:border-red-400 hover:shadow-2xl hover:scale-105 transition-all duration-500 hover:bg-white overflow-hidden relative">
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-[#E53935] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-[#E53935] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div className="w-10 h-10 rounded-lg bg-[#E53935]/10 flex items-center justify-center text-[#E53935] group-hover:bg-[#E53935] group-hover:text-white transition-all duration-300 shrink-0">
                  <span className="text-base font-black" style={{ fontFamily: 'Oswald, sans-serif' }}>C</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 group-hover:text-[#E53935] transition-colors" style={{ fontFamily: 'Oswald, sans-serif' }}>Gases</h4>
                  <p className="text-xs text-gray-500" style={{ fontFamily: 'Noto Sans, sans-serif' }}>Propane, butane, methane</p>
                </div>
              </div>

              {/* Class E */}
              <div className="group flex items-center gap-3 p-4 bg-white/80 backdrop-blur-sm border border-gray-300 rounded-xl hover:border-red-400 hover:shadow-2xl hover:scale-105 transition-all duration-500 hover:bg-white overflow-hidden relative">
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-[#E53935] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-[#E53935] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div className="w-10 h-10 rounded-lg bg-[#E53935]/10 flex items-center justify-center text-[#E53935] group-hover:bg-[#E53935] group-hover:text-white transition-all duration-300 shrink-0">
                  <span className="text-base font-black" style={{ fontFamily: 'Oswald, sans-serif' }}>E</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 group-hover:text-[#E53935] transition-colors" style={{ fontFamily: 'Oswald, sans-serif' }}>Electrical</h4>
                  <p className="text-xs text-gray-500" style={{ fontFamily: 'Noto Sans, sans-serif' }}>Equipment & appliances</p>
                </div>
              </div>

              {/* Class F */}
              <div className="group flex items-center gap-3 p-4 bg-white/80 backdrop-blur-sm border border-gray-300 rounded-xl hover:border-red-400 hover:shadow-2xl hover:scale-105 transition-all duration-500 hover:bg-white overflow-hidden relative">
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-[#E53935] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-[#E53935] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div className="w-10 h-10 rounded-lg bg-[#E53935]/10 flex items-center justify-center text-[#E53935] group-hover:bg-[#E53935] group-hover:text-white transition-all duration-300 shrink-0">
                  <span className="text-base font-black" style={{ fontFamily: 'Oswald, sans-serif' }}>F</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 group-hover:text-[#E53935] transition-colors" style={{ fontFamily: 'Oswald, sans-serif' }}>Cooking Oils</h4>
                  <p className="text-xs text-gray-500" style={{ fontFamily: 'Noto Sans, sans-serif' }}>Cooking oils & fats</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sizes Section */}
      <section className="w-full py-12 sm:py-16 lg:py-20 bg-linear-to-b from-gray-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2
              className="text-4xl sm:text-5xl font-black text-gray-900 mb-3 leading-tight"
              style={{ fontFamily: 'Oswald, sans-serif' }}
            >
              Fire Extinguisher Sizes
            </h2>
            <div className="w-12 h-1 bg-[#E53935] rounded-full mx-auto mb-4" />
            <p
              className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto font-normal"
              style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
            >
              Sizes vary depending on environment and risk level
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {sizes.map((sizeCategory, index) => (
              <div key={index} className="group relative flex flex-col p-5 bg-white/80 backdrop-blur-sm border border-gray-300 rounded-xl hover:border-red-400 hover:shadow-2xl hover:scale-105 transition-all duration-500 hover:bg-white overflow-hidden">
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-[#E53935] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-[#E53935] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#E53935]/10 flex items-center justify-center text-[#E53935] group-hover:bg-[#E53935] group-hover:text-white transition-all duration-300 shrink-0">
                    <BuildingWarehouse size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-gray-900 group-hover:text-[#E53935] transition-colors" style={{ fontFamily: 'Oswald, sans-serif' }}>{sizeCategory.category}</h3>
                    <p className="text-xs text-gray-500" style={{ fontFamily: 'Noto Sans, sans-serif' }}>{sizeCategory.description}</p>
                  </div>
                </div>

                <div className="flex-1 space-y-2 mb-4">
                  {sizeCategory.sizes.map((size, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#E53935]/40 group-hover:bg-[#E53935] transition-colors duration-300" />
                      <span className="text-sm text-gray-700" style={{ fontFamily: 'Noto Sans, sans-serif' }}>{size}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-[#E53935]/5 p-3 rounded-lg border border-[#E53935]/10 mt-auto group-hover:bg-[#E53935]/10 transition-colors duration-300">
                  <p className="text-xs text-gray-700 leading-relaxed" style={{ fontFamily: 'Noto Sans, sans-serif' }}>
                    <span className="font-bold block text-gray-900 mb-1 group-hover:text-[#E53935] transition-colors">Best for:</span> 
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

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 xl:gap-16 relative z-10 items-start">
              {/* Left Column: Headers */}
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
                  className="text-3xl sm:text-4xl xl:text-5xl font-black text-gray-900 mb-5 leading-tight"
                  style={{ fontFamily: 'Oswald, sans-serif' }}
                >
                  Simple Buyer&apos;s Guide
                </h2>
                <div className="w-12 h-1 bg-[#E53935] rounded-full mb-5" />
                <p
                  className="text-base text-gray-500 leading-relaxed"
                  style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
                >
                  Quick recommendations for different environments to help you choose the right extinguisher.
                </p>
              </div>

              {/* Right Column: Content List */}
              <div className="lg:col-span-2 flex flex-col gap-2">
                {buyerGuide.map((guide, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl"
                  >
                    {/* Icon Container */}
                    <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-[#E53935] shrink-0">
                      {getRenderIcon(guide.iconName)}
                    </div>

                    {/* Scenario Label */}
                    <div className="flex-1 min-w-0">
                      <h3
                        className="text-base font-bold text-gray-800 leading-snug"
                        style={{ fontFamily: 'Oswald, sans-serif' }}
                      >
                        {guide.scenario}
                      </h3>
                    </div>

                    {/* Recommendation Badge */}
                    <span
                      className="shrink-0 px-4 py-1.5 rounded-lg bg-[#E53935]/10 text-[#E53935] text-sm font-bold"
                      style={{ fontFamily: 'Oswald, sans-serif' }}
                    >
                      {guide.recommendation}
                    </span>
                  </div>
                ))}
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

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 xl:gap-16 relative z-10 items-start">
              {/* Left Column: Headers */}
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
                  className="text-3xl sm:text-4xl xl:text-5xl font-black text-gray-900 mb-5 leading-tight"
                  style={{ fontFamily: 'Oswald, sans-serif' }}
                >
                  Applications
                </h2>
                <div className="w-12 h-1 bg-[#E53935] rounded-full mb-5" />
                <p
                  className="text-base text-gray-500 leading-relaxed"
                  style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
                >
                  Where fire extinguishers are essential across different environments.
                </p>
              </div>

              {/* Right Column: Pill Tags */}
              <div className="lg:col-span-2 flex flex-wrap gap-3 content-start">
                {applications.map((app, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2.5 px-5 py-3 bg-gray-50 border border-gray-100 rounded-full text-gray-700 hover:border-[#E53935]/40 hover:text-[#E53935] transition-colors duration-200"
                  >
                    <span className="text-[#E53935]">{getApplicationIcon(app)}</span>
                    <span className="text-sm font-semibold" style={{ fontFamily: 'Noto Sans, sans-serif' }}>{app}</span>
                  </div>
                ))}
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
              Features & Benefits
            </h2>
            <div className="w-12 h-1 bg-[#E53935] rounded-full mx-auto mb-4" />
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
                <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-[#E53935] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-[#E53935] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
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

      {/* CTA Section */}
      <section className="w-full py-20 bg-gray-950 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#E53935]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight"
            style={{ fontFamily: 'Oswald, sans-serif' }}
          >
            Get the Right Fire Extinguisher
          </h2>
          <p
            className="text-lg sm:text-xl text-gray-100 mb-10 max-w-2xl mx-auto font-normal"
            style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
          >
            Choose the perfect fire extinguisher for your needs and ensure complete fire safety.
          </p>

          <Link
            href="/services#project-form"
            className="inline-flex items-center gap-3 px-8 py-4 bg-linear-to-r from-[#FF4D4D] to-[#E53935] text-white font-bold text-lg rounded-lg transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/50 hover:scale-105 active:scale-95 shadow-lg group"
            style={{ fontFamily: 'Noto Sans, sans-serif' }}
          >
            <FileText size={18} />
            Request a Quote
            <svg className="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Our Support Section */}
      <section className="w-full py-12 sm:py-16 lg:py-20 bg-linear-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10">
            <div className="inline-block mb-4">
              <p
                className="text-[#E53935] text-sm sm:text-base font-bold tracking-widest uppercase px-4 py-2 bg-red-50 rounded-full flex items-center gap-2 justify-center"
                style={{ fontFamily: 'Noto Sans, sans-serif' }}
              >
                <Tool size={16} />
                Our Support
              </p>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-3 leading-tight" style={{ fontFamily: 'Oswald, sans-serif' }}>
              Comprehensive <span className="text-[#E53935]">Services</span>
            </h2>
            <div className="w-12 h-1 bg-[#E53935] rounded-full mx-auto mb-4" />
            <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto font-normal" style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}>
              We provide end-to-end support for your fire extinguishers, from supply to maintenance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Supply & Install */}
            <div className="group relative bg-white/80 backdrop-blur-sm border border-gray-300 rounded-2xl p-8 hover:border-red-400 hover:shadow-2xl hover:scale-105 transition-all duration-500 hover:bg-white text-center flex flex-col items-center overflow-hidden">
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-[#E53935] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-[#E53935] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <div className="w-16 h-16 rounded-full bg-[#E53935]/10 flex items-center justify-center mb-6 group-hover:bg-[#E53935] group-hover:text-white text-[#E53935] transition-all duration-500">
                <Tool size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Oswald, sans-serif' }}>Supply & Install</h3>
              <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'Noto Sans, sans-serif' }}>Expert recommendations and proper installation to ensure maximum safety and compliance.</p>
            </div>

            {/* Maintenance */}
            <div className="group relative bg-white/80 backdrop-blur-sm border border-gray-300 rounded-2xl p-8 hover:border-red-400 hover:shadow-2xl hover:scale-105 transition-all duration-500 hover:bg-white text-center flex flex-col items-center overflow-hidden">
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-[#E53935] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-[#E53935] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <div className="w-16 h-16 rounded-full bg-[#E53935]/10 flex items-center justify-center mb-6 group-hover:bg-[#E53935] group-hover:text-white text-[#E53935] transition-all duration-500">
                <Settings size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Oswald, sans-serif' }}>Annual Maintenance</h3>
              <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'Noto Sans, sans-serif' }}>Scheduled inspections, testing, and certification to keep your extinguishers fully operational.</p>
            </div>

            {/* Refilling */}
            <div className="group relative bg-white/80 backdrop-blur-sm border border-gray-300 rounded-2xl p-8 hover:border-red-400 hover:shadow-2xl hover:scale-105 transition-all duration-500 hover:bg-white text-center flex flex-col items-center overflow-hidden">
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-[#E53935] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-[#E53935] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <div className="w-16 h-16 rounded-full bg-[#E53935]/10 flex items-center justify-center mb-6 group-hover:bg-[#E53935] group-hover:text-white text-[#E53935] transition-all duration-500">
                <Droplet size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Oswald, sans-serif' }}>Refilling & Testing</h3>
              <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'Noto Sans, sans-serif' }}>Quick and reliable refilling services after use or during routine hydrostatic testing.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
