'use client';

import {
  FileText,
  Bulb,
  Shield,
  Building,
  CircleCheck,
  Settings,
  DoorExit,
  LayersIntersect,
  BatteryCharging,
  BuildingSkyscraper,
  BuildingCommunity,
  School,
  BuildingHospital,
  Home,
  ShieldCheck,
  Bolt,
  Tool,
  ClipboardCheck
} from 'tabler-icons-react';
import Link from 'next/link';

export default function EmergencyLightsPage() {


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
                <Bulb size={16} />
                Safety lighting systems
              </p>
            </div>

            <h1
              className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-white mb-3 sm:mb-5 leading-tight uppercase tracking-wider"
              style={{ fontFamily: 'Oswald, sans-serif' }}
            >
              Emergency Lights & Exit Signs
            </h1>

            <p
              className="text-sm sm:text-base lg:text-base text-gray-200 mb-5 sm:mb-7 max-w-2xl leading-relaxed font-normal"
              style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
            >
              Essential safety systems designed to provide visibility and guide occupants to safe exits during power outages and emergencies.
            </p>


          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="w-full py-12 sm:py-16 lg:py-20 bg-white relative overflow-hidden">
        <div className="absolute top-20 left-10 w-40 h-40 bg-red-100/20 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-gray-400/5 rounded-full blur-2xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10">
            <div className="inline-block mb-4">
              <p
                className="text-[#E53935] text-sm sm:text-base font-bold tracking-widest uppercase px-4 py-2 bg-red-50 rounded-full flex items-center gap-2 justify-center"
                style={{ fontFamily: 'Noto Sans, sans-serif' }}
              >
                <Shield size={16} />
                What they do
              </p>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-3 leading-tight" style={{ fontFamily: 'Oswald, sans-serif' }}>
              Safe Evacuation <span className="text-[#E53935]">Support</span>
            </h2>
            <div className="w-12 h-1 bg-[#E53935] rounded-full mx-auto mb-4" />
            <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto font-normal" style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}>
              Emergency lighting and exit signs ensure that pathways remain visible and clearly marked, helping people evacuate safely when normal lighting fails.
            </p>
          </div>
        </div>
      </section>

      {/* Available options */}
      <section className="w-full py-12 sm:py-16 lg:py-20 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-gray-100 rounded-3xl p-8 sm:p-12 shadow-[0_8px_40px_rgb(0,0,0,0.07)] relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#E53935]/5 rounded-full blur-3xl -mr-24 -mt-24 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-red-50 rounded-full blur-3xl -ml-16 -mb-16 pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 xl:gap-16 relative z-10 items-center">
              {/* Left Column: Headers */}
              <div className="lg:col-span-1 lg:sticky lg:top-8">
                <div className="inline-flex items-center gap-2 mb-5 px-4 py-2 bg-red-50 rounded-full">
                  <Settings size={16} className="text-[#E53935]" />
                  <p
                    className="text-[#E53935] text-xs font-bold tracking-widest uppercase flex items-center gap-2"
                    style={{ fontFamily: 'Noto Sans, sans-serif' }}
                  >
                    Available options
                  </p>
                </div>
                <h2
                  className="text-3xl sm:text-4xl xl:text-5xl font-black text-gray-900 mb-5 leading-tight"
                  style={{ fontFamily: 'Oswald, sans-serif' }}
                >
                  Choose the Right System
                </h2>
                <div className="w-12 h-1 bg-[#E53935] rounded-full mb-5" />
                <p
                  className="text-base text-gray-500 leading-relaxed"
                  style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
                >
                  Different environments require specific lighting and signage solutions to ensure safe and effective evacuation.
                </p>
              </div>

              {/* Right Column: Content List */}
              <div className="lg:col-span-2 flex flex-col">
                {/* Emergency Lights */}
                <div className="flex flex-col sm:flex-row gap-4 p-5 sm:p-6 bg-red-50 rounded-2xl border border-red-100 mb-4 last:mb-0">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-[#E53935] shrink-0">
                    <Bulb size={24} strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900" style={{ fontFamily: 'Oswald, sans-serif' }}>Emergency Lights</h3>
                    <p className="text-sm text-gray-600 mt-1 mb-3" style={{ fontFamily: 'Noto Sans, sans-serif' }}>Provide backup lighting during power failure.</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mr-1 self-center">Best For:</span>
                      <span className="text-xs font-medium bg-white text-gray-600 px-2 py-1 rounded-md">Offices</span>
                      <span className="text-xs font-medium bg-white text-gray-600 px-2 py-1 rounded-md">Commercial buildings</span>
                      <span className="text-xs font-medium bg-white text-gray-600 px-2 py-1 rounded-md">Public spaces</span>
                    </div>
                  </div>
                </div>

                {/* Exit Signs */}
                <div className="flex flex-col sm:flex-row gap-4 p-5 sm:p-6 bg-red-50 rounded-2xl border border-red-100 mb-4 last:mb-0">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-[#E53935] shrink-0">
                    <DoorExit size={24} strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900" style={{ fontFamily: 'Oswald, sans-serif' }}>Exit Signs</h3>
                    <p className="text-sm text-gray-600 mt-1 mb-3" style={{ fontFamily: 'Noto Sans, sans-serif' }}>Clearly indicate evacuation routes and exits.</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mr-1 self-center">Best For:</span>
                      <span className="text-xs font-medium bg-white text-gray-600 px-2 py-1 rounded-md">All buildings</span>
                      <span className="text-xs font-medium bg-white text-gray-600 px-2 py-1 rounded-md">Corridors and stairways</span>
                      <span className="text-xs font-medium bg-white text-gray-600 px-2 py-1 rounded-md">Public facilities</span>
                    </div>
                  </div>
                </div>

                {/* Combined Units */}
                <div className="flex flex-col sm:flex-row gap-4 p-5 sm:p-6 bg-red-50 rounded-2xl border border-red-100 mb-4 last:mb-0">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-[#E53935] shrink-0">
                    <LayersIntersect size={24} strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900" style={{ fontFamily: 'Oswald, sans-serif' }}>Combined Units</h3>
                    <p className="text-sm text-gray-600 mt-1 mb-3" style={{ fontFamily: 'Noto Sans, sans-serif' }}>Integrated systems with both lighting and exit signage.</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mr-1 self-center">Best For:</span>
                      <span className="text-xs font-medium bg-white text-gray-600 px-2 py-1 rounded-md">Large buildings</span>
                      <span className="text-xs font-medium bg-white text-gray-600 px-2 py-1 rounded-md">Complex layouts</span>
                    </div>
                  </div>
                </div>

                {/* LED Emergency Lighting */}
                <div className="flex flex-col sm:flex-row gap-4 p-5 sm:p-6 bg-red-50 rounded-2xl border border-red-100 mb-4 last:mb-0">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-[#E53935] shrink-0">
                    <BatteryCharging size={24} strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900" style={{ fontFamily: 'Oswald, sans-serif' }}>LED Emergency Lighting</h3>
                    <p className="text-sm text-gray-600 mt-1 mb-3" style={{ fontFamily: 'Noto Sans, sans-serif' }}>Energy-efficient lighting with long-lasting performance.</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mr-1 self-center">Best For:</span>
                      <span className="text-xs font-medium bg-white text-gray-600 px-2 py-1 rounded-md">Modern buildings</span>
                      <span className="text-xs font-medium bg-white text-gray-600 px-2 py-1 rounded-md">Continuous use environments</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KEY COMPONENTS */}
      <section className="w-full py-12 sm:py-16 lg:py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10">
            <div className="inline-block mb-4">
              <p
                className="text-[#E53935] text-sm sm:text-base font-bold tracking-widest uppercase px-4 py-2 bg-red-50 rounded-full flex items-center gap-2 justify-center"
                style={{ fontFamily: 'Noto Sans, sans-serif' }}
              >
                <Settings size={16} />
                System parts
              </p>
            </div>
            <h2 className="text-3xl sm:text-4xl xl:text-5xl font-black text-gray-900 mb-3 leading-tight" style={{ fontFamily: 'Oswald, sans-serif' }}>
              What Makes It Work
            </h2>
            <div className="w-12 h-1 bg-[#E53935] rounded-full mx-auto mb-4" />
            <p className="text-lg text-gray-500 max-w-2xl mx-auto font-normal" style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}>
              Emergency lighting systems include essential components for reliable operation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 relative mt-12">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-5 left-1/8 right-1/8 w-3/4 h-0.5 bg-gray-200 z-0 mx-auto" style={{ transform: 'translateY(-50%)' }} />

            {/* Light fixtures */}
            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-10 h-10 rounded-full bg-red-50 border border-red-100 flex items-center justify-center mb-4 group-hover:bg-[#E53935] group-hover:text-white group-hover:border-[#E53935] transition-all duration-300 shrink-0 text-[#E53935] font-bold text-lg" style={{ fontFamily: 'Oswald, sans-serif' }}>
                1
              </div>
              <h3 className="text-lg font-bold text-gray-900 leading-tight px-2" style={{ fontFamily: 'Oswald, sans-serif' }}>Light<br/>Fixtures</h3>
            </div>
            
            {/* Exit signage panels */}
            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-10 h-10 rounded-full bg-red-50 border border-red-100 flex items-center justify-center mb-4 group-hover:bg-[#E53935] group-hover:text-white group-hover:border-[#E53935] transition-all duration-300 shrink-0 text-[#E53935] font-bold text-lg" style={{ fontFamily: 'Oswald, sans-serif' }}>
                2
              </div>
              <h3 className="text-lg font-bold text-gray-900 leading-tight px-2" style={{ fontFamily: 'Oswald, sans-serif' }}>Exit<br/>Signage</h3>
            </div>

            {/* Backup batteries */}
            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-10 h-10 rounded-full bg-red-50 border border-red-100 flex items-center justify-center mb-4 group-hover:bg-[#E53935] group-hover:text-white group-hover:border-[#E53935] transition-all duration-300 shrink-0 text-[#E53935] font-bold text-lg" style={{ fontFamily: 'Oswald, sans-serif' }}>
                3
              </div>
              <h3 className="text-lg font-bold text-gray-900 leading-tight px-2" style={{ fontFamily: 'Oswald, sans-serif' }}>Backup<br/>Batteries</h3>
            </div>

            {/* Control circuits */}
            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-10 h-10 rounded-full bg-red-50 border border-red-100 flex items-center justify-center mb-4 group-hover:bg-[#E53935] group-hover:text-white group-hover:border-[#E53935] transition-all duration-300 shrink-0 text-[#E53935] font-bold text-lg" style={{ fontFamily: 'Oswald, sans-serif' }}>
                4
              </div>
              <h3 className="text-lg font-bold text-gray-900 leading-tight px-2" style={{ fontFamily: 'Oswald, sans-serif' }}>Control<br/>Circuits</h3>
            </div>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="w-full py-12 sm:py-16 lg:py-20 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-gray-100 rounded-3xl p-8 sm:p-12 shadow-[0_8px_40px_rgb(0,0,0,0.07)] relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#E53935]/5 rounded-full blur-3xl -mr-24 -mt-24 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-red-50 rounded-full blur-3xl -ml-16 -mb-16 pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 xl:gap-16 relative z-10 items-center">
              {/* Left Column: Headers */}
              <div className="lg:col-span-1 lg:sticky lg:top-8">
                <div className="inline-flex items-center gap-2 mb-5 px-4 py-2 bg-red-50 rounded-full">
                  <Building size={16} className="text-[#E53935]" />
                  <p
                    className="text-[#E53935] text-xs font-bold tracking-widest uppercase flex items-center gap-2"
                    style={{ fontFamily: 'Noto Sans, sans-serif' }}
                  >
                    Where they are used
                  </p>
                </div>
                <h2
                  className="text-3xl sm:text-4xl xl:text-5xl font-black text-gray-900 mb-5 leading-tight"
                  style={{ fontFamily: 'Oswald, sans-serif' }}
                >
                  Suitable Environments
                </h2>
                <div className="w-12 h-1 bg-[#E53935] rounded-full mb-5" />
                <p
                  className="text-base text-gray-500 leading-relaxed"
                  style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
                >
                  Emergency lights and exit signs are essential in:
                </p>
              </div>

              {/* Right Column: Content List */}
              <div className="lg:col-span-2 flex flex-col">
                {/* Offices and commercial buildings */}
                <div className="flex items-center gap-4 py-4 border-b border-gray-100 last:border-b-0">
                  <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-[#E53935] shrink-0">
                    <BuildingSkyscraper size={24} strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-gray-900" style={{ fontFamily: 'Oswald, sans-serif' }}>Offices and commercial buildings</h3>
                  </div>
                </div>

                {/* Hotels and hospitality spaces */}
                <div className="flex items-center gap-4 py-4 border-b border-gray-100 last:border-b-0">
                  <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-[#E53935] shrink-0">
                    <BuildingCommunity size={24} strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-gray-900" style={{ fontFamily: 'Oswald, sans-serif' }}>Hotels and hospitality spaces</h3>
                  </div>
                </div>

                {/* Schools and institutions */}
                <div className="flex items-center gap-4 py-4 border-b border-gray-100 last:border-b-0">
                  <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-[#E53935] shrink-0">
                    <School size={24} strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-gray-900" style={{ fontFamily: 'Oswald, sans-serif' }}>Schools and institutions</h3>
                  </div>
                </div>

                {/* Hospitals and healthcare facilities */}
                <div className="flex items-center gap-4 py-4 border-b border-gray-100 last:border-b-0">
                  <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-[#E53935] shrink-0">
                    <BuildingHospital size={24} strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-gray-900" style={{ fontFamily: 'Oswald, sans-serif' }}>Hospitals and healthcare facilities</h3>
                  </div>
                </div>

                {/* Residential buildings */}
                <div className="flex items-center gap-4 py-4 border-b border-gray-100 last:border-b-0">
                  <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-[#E53935] shrink-0">
                    <Home size={24} strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-gray-900" style={{ fontFamily: 'Oswald, sans-serif' }}>Residential buildings</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="w-full py-12 sm:py-16 lg:py-20 bg-white relative overflow-hidden">
        <div className="absolute top-20 right-10 w-40 h-40 bg-red-100/20 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-gray-400/5 rounded-full blur-2xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10">
            <div className="inline-block mb-4">
              <p
                className="text-[#E53935] text-sm sm:text-base font-bold tracking-widest uppercase px-4 py-2 bg-red-50 rounded-full flex items-center gap-2 justify-center"
                style={{ fontFamily: 'Noto Sans, sans-serif' }}
              >
                <ShieldCheck size={16} />
                Safety importance
              </p>
            </div>
            <h2 className="text-3xl sm:text-4xl xl:text-5xl font-black text-gray-900 mb-3 leading-tight" style={{ fontFamily: 'Oswald, sans-serif' }}>
              Clear Guidance in Emergencies
            </h2>
            <div className="w-12 h-1 bg-[#E53935] rounded-full mx-auto mb-4" />
            <p className="text-lg text-gray-500 max-w-2xl mx-auto font-normal" style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}>
              These systems help ensure:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {/* Safe and guided evacuation */}
            <div className="flex items-center gap-4 bg-gray-50 p-5 rounded-xl border border-gray-100 hover:border-[#E53935]/30 transition-colors">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#E53935] shrink-0 shadow-sm">
                <CircleCheck size={20} strokeWidth={2} />
              </div>
              <p className="text-gray-900 font-medium" style={{ fontFamily: 'Noto Sans, sans-serif' }}>Safe and guided evacuation</p>
            </div>

            {/* Visibility during power outages */}
            <div className="flex items-center gap-4 bg-gray-50 p-5 rounded-xl border border-gray-100 hover:border-[#E53935]/30 transition-colors">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#E53935] shrink-0 shadow-sm">
                <CircleCheck size={20} strokeWidth={2} />
              </div>
              <p className="text-gray-900 font-medium" style={{ fontFamily: 'Noto Sans, sans-serif' }}>Visibility during power outages</p>
            </div>

            {/* Reduced panic and confusion */}
            <div className="flex items-center gap-4 bg-gray-50 p-5 rounded-xl border border-gray-100 hover:border-[#E53935]/30 transition-colors">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#E53935] shrink-0 shadow-sm">
                <CircleCheck size={20} strokeWidth={2} />
              </div>
              <p className="text-gray-900 font-medium" style={{ fontFamily: 'Noto Sans, sans-serif' }}>Reduced panic and confusion</p>
            </div>

            {/* Compliance with safety standards */}
            <div className="flex items-center gap-4 bg-gray-50 p-5 rounded-xl border border-gray-100 hover:border-[#E53935]/30 transition-colors">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#E53935] shrink-0 shadow-sm">
                <CircleCheck size={20} strokeWidth={2} />
              </div>
              <p className="text-gray-900 font-medium" style={{ fontFamily: 'Noto Sans, sans-serif' }}>Compliance with safety standards</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 bg-gray-950 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#E53935]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-4">
            <p
              className="text-[#E53935] text-sm sm:text-base font-bold tracking-widest uppercase px-4 py-2 bg-[#E53935]/10 rounded-full flex items-center gap-2 justify-center"
              style={{ fontFamily: 'Noto Sans, sans-serif' }}
            >
              <Bolt size={16} />
              Take the next step
            </p>
          </div>
          <h2
            className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight"
            style={{ fontFamily: 'Oswald, sans-serif' }}
          >
            Improve Emergency Safety
          </h2>
          <p
            className="text-lg sm:text-xl text-gray-100 mb-10 max-w-2xl mx-auto font-normal"
            style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
          >
            Ensure your building is equipped with reliable emergency lighting and exit systems.
          </p>

          <Link
            href="/contact"
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
        <div className="absolute top-20 left-10 w-40 h-40 bg-red-100/15 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-gray-400/5 rounded-full blur-2xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10">
            <div className="inline-block mb-4">
              <p
                className="text-[#E53935] text-sm sm:text-base font-bold tracking-widest uppercase px-4 py-2 bg-red-50 rounded-full flex items-center gap-2 justify-center"
                style={{ fontFamily: 'Noto Sans, sans-serif' }}
              >
                <Tool size={16} />
                Our support
              </p>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-3 leading-tight" style={{ fontFamily: 'Oswald, sans-serif' }}>
              Installation & <span className="text-[#E53935]">Maintenance</span>
            </h2>
            <div className="w-12 h-1 bg-[#E53935] rounded-full mx-auto mb-4" />
            <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto font-normal" style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}>
              We provide professional installation, inspection, and maintenance to ensure emergency lighting systems remain reliable and fully functional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            {/* Installation */}
            <div className="group relative bg-white/80 backdrop-blur-sm border border-gray-300 rounded-xl p-5 overflow-hidden hover:border-red-400 hover:shadow-2xl hover:scale-105 transition-all duration-500 hover:bg-white">
              <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-[#E53935] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-[#E53935] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <div className="w-10 h-10 rounded-lg bg-[#E53935]/10 flex items-center justify-center text-[#E53935] group-hover:bg-[#E53935] group-hover:text-white transition-all duration-300 shrink-0 mb-4">
                <Tool size={20} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#E53935] transition-colors duration-300" style={{ fontFamily: 'Oswald, sans-serif' }}>Installation</h3>
              <p className="text-sm text-gray-600 leading-relaxed" style={{ fontFamily: 'Noto Sans, sans-serif' }}>Expert setup by certified technicians ensuring optimal system performance from day one.</p>
            </div>

            {/* Inspection */}
            <div className="group relative bg-white/80 backdrop-blur-sm border border-gray-300 rounded-xl p-5 overflow-hidden hover:border-red-400 hover:shadow-2xl hover:scale-105 transition-all duration-500 hover:bg-white">
              <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-[#E53935] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-[#E53935] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <div className="w-10 h-10 rounded-lg bg-[#E53935]/10 flex items-center justify-center text-[#E53935] group-hover:bg-[#E53935] group-hover:text-white transition-all duration-300 shrink-0 mb-4">
                <ClipboardCheck size={20} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#E53935] transition-colors duration-300" style={{ fontFamily: 'Oswald, sans-serif' }}>Inspection</h3>
              <p className="text-sm text-gray-600 leading-relaxed" style={{ fontFamily: 'Noto Sans, sans-serif' }}>Routine inspections to verify all components function correctly and meet safety standards.</p>
            </div>

            {/* Maintenance */}
            <div className="group relative bg-white/80 backdrop-blur-sm border border-gray-300 rounded-xl p-5 overflow-hidden hover:border-red-400 hover:shadow-2xl hover:scale-105 transition-all duration-500 hover:bg-white">
              <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-[#E53935] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-[#E53935] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <div className="w-10 h-10 rounded-lg bg-[#E53935]/10 flex items-center justify-center text-[#E53935] group-hover:bg-[#E53935] group-hover:text-white transition-all duration-300 shrink-0 mb-4">
                <Settings size={20} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#E53935] transition-colors duration-300" style={{ fontFamily: 'Oswald, sans-serif' }}>Maintenance</h3>
              <p className="text-sm text-gray-600 leading-relaxed" style={{ fontFamily: 'Noto Sans, sans-serif' }}>Ongoing servicing to ensure long-term reliability and continuous fire protection.</p>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#E53935] hover:bg-[#D32F2F] text-white font-bold text-lg rounded-lg transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/50 hover:scale-105 active:scale-95 shadow-lg group"
              style={{ fontFamily: 'Noto Sans, sans-serif' }}
            >
              Request Service
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
