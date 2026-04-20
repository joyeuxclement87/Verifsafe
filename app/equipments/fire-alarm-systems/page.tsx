'use client';

import { FileText, Bell, Bulb, MapPin, Bolt, Flame, DeviceDesktop, Volume2, HandFinger, AlertTriangle, BuildingSkyscraper, Home, School, BuildingHospital, BuildingCommunity, Eye, ShieldCheck, Run, Settings, Tool, ClipboardCheck, Star, Cpu, Building } from 'tabler-icons-react';
import Link from 'next/link';

export default function FireAlarmSystemsPage() {


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
                <Bell size={16} />
                Fire Alarm Systems
              </p>
            </div>

            <h1
              className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-white mb-3 sm:mb-5 leading-tight uppercase tracking-wider"
              style={{ fontFamily: 'Oswald, sans-serif' }}
            >
              Fire Alarm Systems Guide
            </h1>

            <p
              className="text-sm sm:text-base lg:text-base text-gray-200 mb-5 sm:mb-7 max-w-2xl leading-relaxed font-normal"
              style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
            >
              Advanced detection systems that provide early warning during fire incidents.
            </p>


          </div>
        </div>
      </section>

      {/* What They Do Section */}
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
                <Bell size={16} />
                Introduction
              </p>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-3 leading-tight" style={{ fontFamily: 'Oswald, sans-serif' }}>
              What They <span className="text-[#E53935]">Do</span>
            </h2>
            <div className="w-12 h-1 bg-[#E53935] rounded-full mx-auto mb-4" />
            <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto font-normal" style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}>
              Fire alarm systems detect smoke, heat, or fire at an early stage and trigger alerts to ensure quick evacuation and response.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto mt-16">
            {/* Connecting Line for Desktop */}
            <div className="hidden md:block absolute top-10 left-[16.66%] right-[16.66%] h-0.5 bg-gray-200" />
            <div className="hidden md:block absolute top-10 left-[16.66%] right-[16.66%] h-0.5 bg-linear-to-r from-[#E53935]/80 via-[#E53935]/40 to-transparent" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
              {/* Step 1 */}
              <div className="group relative flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-white border-2 border-[#E53935]/20 shadow-lg flex items-center justify-center mb-6 group-hover:border-[#E53935] group-hover:shadow-[#E53935]/20 group-hover:scale-110 transition-all duration-500 relative z-10">
                  <div className="w-14 h-14 rounded-full bg-[#E53935] flex items-center justify-center">
                    <Eye size={24} strokeWidth={1.5} className="text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#E53935] transition-colors duration-300" style={{ fontFamily: 'Oswald, sans-serif' }}>Step 1: Detection</h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base max-w-xs" style={{ fontFamily: 'Noto Sans, sans-serif' }}>Sensors continuously monitor for smoke, heat, and flames to catch fire risks at the earliest possible stage.</p>
              </div>

              {/* Step 2 */}
              <div className="group relative flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-white border-2 border-[#E53935]/20 shadow-lg flex items-center justify-center mb-6 group-hover:border-[#E53935] group-hover:shadow-[#E53935]/20 group-hover:scale-110 transition-all duration-500 relative z-10">
                  <div className="w-14 h-14 rounded-full bg-[#E53935] flex items-center justify-center">
                    <Bell size={24} strokeWidth={1.5} className="text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#E53935] transition-colors duration-300" style={{ fontFamily: 'Oswald, sans-serif' }}>Step 2: Alert</h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base max-w-xs" style={{ fontFamily: 'Noto Sans, sans-serif' }}>Trigger immediate audible and visual warnings to notify all building occupants without delay.</p>
              </div>

              {/* Step 3 */}
              <div className="group relative flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-white border-2 border-[#E53935]/20 shadow-lg flex items-center justify-center mb-6 group-hover:border-[#E53935] group-hover:shadow-[#E53935]/20 group-hover:scale-110 transition-all duration-500 relative z-10">
                  <div className="w-14 h-14 rounded-full bg-[#E53935] flex items-center justify-center">
                    <Run size={24} strokeWidth={1.5} className="text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#E53935] transition-colors duration-300" style={{ fontFamily: 'Oswald, sans-serif' }}>Step 3: Response</h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base max-w-xs" style={{ fontFamily: 'Noto Sans, sans-serif' }}>Enable rapid evacuation and emergency response before the situation escalates further.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Fire Alarm Systems */}
      <section className="w-full py-12 sm:py-16 lg:py-20 bg-linear-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
        <div className="absolute top-20 left-10 w-40 h-40 bg-red-100/15 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-gray-400/5 rounded-full blur-2xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10">
            <div className="inline-block mb-4">
              <p
                className="text-[#E53935] text-sm sm:text-base font-bold tracking-widest uppercase px-4 py-2 bg-red-50 rounded-full flex items-center gap-2 justify-center"
                style={{ fontFamily: 'Noto Sans, sans-serif' }}
              >
                <Settings size={16} />
                System options
              </p>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-3 leading-tight" style={{ fontFamily: 'Oswald, sans-serif' }}>
              Types of Fire Alarm <span className="text-[#E53935]">Systems</span>
            </h2>
            <div className="w-12 h-1 bg-[#E53935] rounded-full mx-auto mb-4" />
            <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto font-normal" style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}>
              Different environments require different alarm systems depending on size, complexity, and safety needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Conventional Systems */}
            <div className="group relative bg-white/80 backdrop-blur-sm border border-gray-300 rounded-xl p-5 flex flex-col overflow-hidden hover:border-red-400 hover:shadow-2xl hover:scale-105 transition-all duration-500 hover:bg-white">
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-[#E53935] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-[#E53935] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <div className="w-10 h-10 rounded-lg bg-[#E53935]/10 flex items-center justify-center text-[#E53935] group-hover:bg-[#E53935] group-hover:text-white transition-all duration-300 shrink-0 mb-4">
                <Bulb size={20} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#E53935] transition-colors duration-300" style={{ fontFamily: 'Oswald, sans-serif' }}>Conventional Systems</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1" style={{ fontFamily: 'Noto Sans, sans-serif' }}>Divide buildings into zones to detect the general area of a fire.</p>
              
              <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 group-hover:bg-[#E53935]/5 group-hover:border-[#E53935]/10 transition-colors duration-300 mt-auto relative z-10">
                <p className="text-xs font-bold text-gray-900 mb-2" style={{ fontFamily: 'Oswald, sans-serif' }}>Best For</p>
                <ul className="text-xs text-gray-600 space-y-1" style={{ fontFamily: 'Noto Sans, sans-serif' }}>
                  <li className="flex items-center gap-1.5"><span className="w-1 h-1 bg-[#E53935] rounded-full shrink-0"></span> Small to medium buildings</li>
                  <li className="flex items-center gap-1.5"><span className="w-1 h-1 bg-[#E53935] rounded-full shrink-0"></span> Offices and shops</li>
                </ul>
              </div>
              
              
            </div>

            {/* Addressable Systems */}
            <div className="group relative bg-white/80 backdrop-blur-sm border border-gray-300 rounded-xl p-5 flex flex-col overflow-hidden hover:border-red-400 hover:shadow-2xl hover:scale-105 transition-all duration-500 hover:bg-white">
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-[#E53935] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-[#E53935] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <div className="w-10 h-10 rounded-lg bg-[#E53935]/10 flex items-center justify-center text-[#E53935] group-hover:bg-[#E53935] group-hover:text-white transition-all duration-300 shrink-0 mb-4">
                <MapPin size={20} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#E53935] transition-colors duration-300" style={{ fontFamily: 'Oswald, sans-serif' }}>Addressable Systems</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1" style={{ fontFamily: 'Noto Sans, sans-serif' }}>Identify the exact location of a fire within the system for precise response.</p>
              
              <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 group-hover:bg-[#E53935]/5 group-hover:border-[#E53935]/10 transition-colors duration-300 mt-auto relative z-10">
                <p className="text-xs font-bold text-gray-900 mb-2" style={{ fontFamily: 'Oswald, sans-serif' }}>Best For</p>
                <ul className="text-xs text-gray-600 space-y-1" style={{ fontFamily: 'Noto Sans, sans-serif' }}>
                  <li className="flex items-center gap-1.5"><span className="w-1 h-1 bg-[#E53935] rounded-full shrink-0"></span> Large buildings</li>
                  <li className="flex items-center gap-1.5"><span className="w-1 h-1 bg-[#E53935] rounded-full shrink-0"></span> Hotels and commercial facilities</li>
                </ul>
              </div>
              
              
            </div>

            {/* Wireless Systems */}
            <div className="group relative bg-white/80 backdrop-blur-sm border border-gray-300 rounded-xl p-5 flex flex-col overflow-hidden hover:border-red-400 hover:shadow-2xl hover:scale-105 transition-all duration-500 hover:bg-white">
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-[#E53935] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-[#E53935] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <div className="w-10 h-10 rounded-lg bg-[#E53935]/10 flex items-center justify-center text-[#E53935] group-hover:bg-[#E53935] group-hover:text-white transition-all duration-300 shrink-0 mb-4">
                <Bolt size={20} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#E53935] transition-colors duration-300" style={{ fontFamily: 'Oswald, sans-serif' }}>Wireless Systems</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1" style={{ fontFamily: 'Noto Sans, sans-serif' }}>Operate without extensive wiring, using secure wireless communication.</p>
              
              <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 group-hover:bg-[#E53935]/5 group-hover:border-[#E53935]/10 transition-colors duration-300 mt-auto relative z-10">
                <p className="text-xs font-bold text-gray-900 mb-2" style={{ fontFamily: 'Oswald, sans-serif' }}>Best For</p>
                <ul className="text-xs text-gray-600 space-y-1" style={{ fontFamily: 'Noto Sans, sans-serif' }}>
                  <li className="flex items-center gap-1.5"><span className="w-1 h-1 bg-[#E53935] rounded-full shrink-0"></span> Existing buildings</li>
                  <li className="flex items-center gap-1.5"><span className="w-1 h-1 bg-[#E53935] rounded-full shrink-0"></span> Temporary setups</li>
                </ul>
              </div>
              
              
            </div>
          </div>
        </div>
      </section>

      {/* Key Components */}
      <section className="w-full py-12 sm:py-16 lg:py-20 bg-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-20 right-10 w-40 h-40 bg-red-100/20 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-gray-400/5 rounded-full blur-2xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10">
            <div className="inline-block mb-4">
              <p
                className="text-[#E53935] text-sm sm:text-base font-bold tracking-widest uppercase px-4 py-2 bg-red-50 rounded-full flex items-center gap-2 justify-center"
                style={{ fontFamily: 'Noto Sans, sans-serif' }}
              >
                <Cpu size={16} />
                System parts
              </p>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-3 leading-tight" style={{ fontFamily: 'Oswald, sans-serif' }}>
              What Makes a <span className="text-[#E53935]">System</span>
            </h2>
            <div className="w-12 h-1 bg-[#E53935] rounded-full mx-auto mb-4" />
            <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto font-normal" style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}>
              Fire alarm systems are made up of key components which work together to detect and alert.
            </p>
          </div>

          {/* Component Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Smoke Detectors */}
            <div className="group relative bg-white/80 backdrop-blur-sm border border-gray-300 rounded-xl p-5 overflow-hidden hover:border-red-400 hover:shadow-2xl hover:scale-105 transition-all duration-500 hover:bg-white">
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-[#E53935] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-[#E53935] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <div className="w-10 h-10 rounded-lg bg-[#E53935]/10 flex items-center justify-center text-[#E53935] group-hover:bg-[#E53935] group-hover:text-white transition-all duration-300 shrink-0 mb-4">
                <AlertTriangle size={20} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#E53935] transition-colors duration-300" style={{ fontFamily: 'Oswald, sans-serif' }}>Smoke Detectors</h3>
              <p className="text-sm text-gray-600 leading-relaxed" style={{ fontFamily: 'Noto Sans, sans-serif' }}>Detect the presence of smoke particles in the air to provide the earliest possible fire warning.</p>
              
            </div>

            {/* Heat Detectors */}
            <div className="group relative bg-white/80 backdrop-blur-sm border border-gray-300 rounded-xl p-5 overflow-hidden hover:border-red-400 hover:shadow-2xl hover:scale-105 transition-all duration-500 hover:bg-white">
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-[#E53935] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-[#E53935] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <div className="w-10 h-10 rounded-lg bg-[#E53935]/10 flex items-center justify-center text-[#E53935] group-hover:bg-[#E53935] group-hover:text-white transition-all duration-300 shrink-0 mb-4">
                <Flame size={20} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#E53935] transition-colors duration-300" style={{ fontFamily: 'Oswald, sans-serif' }}>Heat Detectors</h3>
              <p className="text-sm text-gray-600 leading-relaxed" style={{ fontFamily: 'Noto Sans, sans-serif' }}>Respond to temperature changes, triggering alerts when heat levels rise above a set threshold.</p>
              
            </div>

            {/* Control Panel */}
            <div className="group relative bg-white/80 backdrop-blur-sm border border-gray-300 rounded-xl p-5 overflow-hidden hover:border-red-400 hover:shadow-2xl hover:scale-105 transition-all duration-500 hover:bg-white">
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-[#E53935] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-[#E53935] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <div className="w-10 h-10 rounded-lg bg-[#E53935]/10 flex items-center justify-center text-[#E53935] group-hover:bg-[#E53935] group-hover:text-white transition-all duration-300 shrink-0 mb-4">
                <DeviceDesktop size={20} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#E53935] transition-colors duration-300" style={{ fontFamily: 'Oswald, sans-serif' }}>Control Panel</h3>
              <p className="text-sm text-gray-600 leading-relaxed" style={{ fontFamily: 'Noto Sans, sans-serif' }}>The central brain of the system that monitors all connected devices and manages alerts.</p>
              
            </div>

            {/* Alarm Sounders */}
            <div className="group relative bg-white/80 backdrop-blur-sm border border-gray-300 rounded-xl p-5 overflow-hidden hover:border-red-400 hover:shadow-2xl hover:scale-105 transition-all duration-500 hover:bg-white">
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-[#E53935] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-[#E53935] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <div className="w-10 h-10 rounded-lg bg-[#E53935]/10 flex items-center justify-center text-[#E53935] group-hover:bg-[#E53935] group-hover:text-white transition-all duration-300 shrink-0 mb-4">
                <Volume2 size={20} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#E53935] transition-colors duration-300" style={{ fontFamily: 'Oswald, sans-serif' }}>Alarm Sounders</h3>
              <p className="text-sm text-gray-600 leading-relaxed" style={{ fontFamily: 'Noto Sans, sans-serif' }}>Produce loud audible alerts to notify building occupants and initiate evacuation procedures.</p>
              
            </div>

            {/* Manual Call Points */}
            <div className="group relative bg-white/80 backdrop-blur-sm border border-gray-300 rounded-xl p-5 overflow-hidden hover:border-red-400 hover:shadow-2xl hover:scale-105 transition-all duration-500 hover:bg-white sm:col-span-2 lg:col-span-1">
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-[#E53935] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-[#E53935] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <div className="w-10 h-10 rounded-lg bg-[#E53935]/10 flex items-center justify-center text-[#E53935] group-hover:bg-[#E53935] group-hover:text-white transition-all duration-300 shrink-0 mb-4">
                <HandFinger size={20} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#E53935] transition-colors duration-300" style={{ fontFamily: 'Oswald, sans-serif' }}>Manual Call Points</h3>
              <p className="text-sm text-gray-600 leading-relaxed" style={{ fontFamily: 'Noto Sans, sans-serif' }}>Allow individuals to manually trigger the fire alarm when a fire is observed visually.</p>
              
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="w-full py-12 sm:py-16 lg:py-20 bg-gray-50">
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
                  Fire alarm systems are essential across a wide range of settings.
                </p>
              </div>

              {/* Right Column: Content List */}
              <div className="lg:col-span-2 flex flex-col">
                {/* Offices */}
                <div className="flex items-center gap-4 py-4 border-b border-gray-100 last:border-b-0">
                  <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-[#E53935] shrink-0">
                    <BuildingSkyscraper size={24} strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-gray-900" style={{ fontFamily: 'Oswald, sans-serif' }}>Offices & Commercial</h3>
                  </div>
                </div>

                {/* Hotels */}
                <div className="flex items-center gap-4 py-4 border-b border-gray-100 last:border-b-0">
                  <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-[#E53935] shrink-0">
                    <BuildingCommunity size={24} strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-gray-900" style={{ fontFamily: 'Oswald, sans-serif' }}>Hotels & Hospitality</h3>
                  </div>
                </div>

                {/* Schools */}
                <div className="flex items-center gap-4 py-4 border-b border-gray-100 last:border-b-0">
                  <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-[#E53935] shrink-0">
                    <School size={24} strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-gray-900" style={{ fontFamily: 'Oswald, sans-serif' }}>Schools & Institutions</h3>
                  </div>
                </div>

                {/* Hospitals */}
                <div className="flex items-center gap-4 py-4 border-b border-gray-100 last:border-b-0">
                  <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-[#E53935] shrink-0">
                    <BuildingHospital size={24} strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-gray-900" style={{ fontFamily: 'Oswald, sans-serif' }}>Healthcare Facilities</h3>
                  </div>
                </div>

                {/* Residential */}
                <div className="flex items-center gap-4 py-4 border-b border-gray-100 last:border-b-0">
                  <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-[#E53935] shrink-0">
                    <Home size={24} strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-gray-900" style={{ fontFamily: 'Oswald, sans-serif' }}>Residential Buildings</h3>
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
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-3 leading-tight" style={{ fontFamily: 'Oswald, sans-serif' }}>
              Essential Fire <span className="text-[#E53935]">Protection</span>
            </h2>
            <div className="w-12 h-1 bg-[#E53935] rounded-full mx-auto mb-4" />
            <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto font-normal" style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}>
              A reliable fire alarm system delivers critical safety benefits.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Detect Early */}
            <div className="group relative bg-white/80 backdrop-blur-sm border border-gray-300 rounded-xl p-5 overflow-hidden hover:border-red-400 hover:shadow-2xl hover:scale-105 transition-all duration-500 hover:bg-white">
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-[#E53935] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-[#E53935] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <div className="w-10 h-10 rounded-lg bg-[#E53935]/10 flex items-center justify-center text-[#E53935] group-hover:bg-[#E53935] group-hover:text-white transition-all duration-300 shrink-0 mb-4">
                <Eye size={20} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#E53935] transition-colors duration-300" style={{ fontFamily: 'Oswald, sans-serif' }}>Detect Fire Risks Early</h3>
              <p className="text-sm text-gray-600 leading-relaxed" style={{ fontFamily: 'Noto Sans, sans-serif' }}>Identify smoke, heat, or flames at the earliest stage before they spread and cause major damage.</p>
              
            </div>

            {/* Alert Immediately */}
            <div className="group relative bg-white/80 backdrop-blur-sm border border-gray-300 rounded-xl p-5 overflow-hidden hover:border-red-400 hover:shadow-2xl hover:scale-105 transition-all duration-500 hover:bg-white">
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-[#E53935] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-[#E53935] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <div className="w-10 h-10 rounded-lg bg-[#E53935]/10 flex items-center justify-center text-[#E53935] group-hover:bg-[#E53935] group-hover:text-white transition-all duration-300 shrink-0 mb-4">
                <Bell size={20} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#E53935] transition-colors duration-300" style={{ fontFamily: 'Oswald, sans-serif' }}>Alert Occupants Immediately</h3>
              <p className="text-sm text-gray-600 leading-relaxed" style={{ fontFamily: 'Noto Sans, sans-serif' }}>Trigger instant audible and visual alerts so everyone is notified without delay.</p>
              
            </div>

            {/* Safe Evacuation */}
            <div className="group relative bg-white/80 backdrop-blur-sm border border-gray-300 rounded-xl p-5 overflow-hidden hover:border-red-400 hover:shadow-2xl hover:scale-105 transition-all duration-500 hover:bg-white">
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-[#E53935] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-[#E53935] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <div className="w-10 h-10 rounded-lg bg-[#E53935]/10 flex items-center justify-center text-[#E53935] group-hover:bg-[#E53935] group-hover:text-white transition-all duration-300 shrink-0 mb-4">
                <Run size={20} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#E53935] transition-colors duration-300" style={{ fontFamily: 'Oswald, sans-serif' }}>Support Safe Evacuation</h3>
              <p className="text-sm text-gray-600 leading-relaxed" style={{ fontFamily: 'Noto Sans, sans-serif' }}>Give people enough time to evacuate safely before conditions become dangerous.</p>
              
            </div>

            {/* Reduce Risk */}
            <div className="group relative bg-white/80 backdrop-blur-sm border border-gray-300 rounded-xl p-5 overflow-hidden hover:border-red-400 hover:shadow-2xl hover:scale-105 transition-all duration-500 hover:bg-white">
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-[#E53935] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-[#E53935] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <div className="w-10 h-10 rounded-lg bg-[#E53935]/10 flex items-center justify-center text-[#E53935] group-hover:bg-[#E53935] group-hover:text-white transition-all duration-300 shrink-0 mb-4">
                <ShieldCheck size={20} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#E53935] transition-colors duration-300" style={{ fontFamily: 'Oswald, sans-serif' }}>Reduce Damage & Risk</h3>
              <p className="text-sm text-gray-600 leading-relaxed" style={{ fontFamily: 'Noto Sans, sans-serif' }}>Minimize property damage and protect lives by enabling faster emergency response.</p>
              
            </div>
          </div>
        </div>
      </section>

      {/* Installation & Maintenance */}
      <section className="w-full py-12 sm:py-16 lg:py-20 bg-linear-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
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
              Professional services to keep your fire alarm system operating effectively at all times.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            {/* Installation */}
            <div className="group relative bg-white/80 backdrop-blur-sm border border-gray-300 rounded-xl p-5 overflow-hidden hover:border-red-400 hover:shadow-2xl hover:scale-105 transition-all duration-500 hover:bg-white">
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-[#E53935] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-[#E53935] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <div className="w-10 h-10 rounded-lg bg-[#E53935]/10 flex items-center justify-center text-[#E53935] group-hover:bg-[#E53935] group-hover:text-white transition-all duration-300 shrink-0 mb-4">
                <Tool size={20} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#E53935] transition-colors duration-300" style={{ fontFamily: 'Oswald, sans-serif' }}>Installation</h3>
              <p className="text-sm text-gray-600 leading-relaxed" style={{ fontFamily: 'Noto Sans, sans-serif' }}>Expert setup by certified technicians ensuring optimal system performance from day one.</p>
              
            </div>

            {/* Inspection */}
            <div className="group relative bg-white/80 backdrop-blur-sm border border-gray-300 rounded-xl p-5 overflow-hidden hover:border-red-400 hover:shadow-2xl hover:scale-105 transition-all duration-500 hover:bg-white">
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-[#E53935] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-[#E53935] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <div className="w-10 h-10 rounded-lg bg-[#E53935]/10 flex items-center justify-center text-[#E53935] group-hover:bg-[#E53935] group-hover:text-white transition-all duration-300 shrink-0 mb-4">
                <ClipboardCheck size={20} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#E53935] transition-colors duration-300" style={{ fontFamily: 'Oswald, sans-serif' }}>Inspection</h3>
              <p className="text-sm text-gray-600 leading-relaxed" style={{ fontFamily: 'Noto Sans, sans-serif' }}>Routine inspections to verify all components function correctly and meet safety standards.</p>
              
            </div>

            {/* Maintenance */}
            <div className="group relative bg-white/80 backdrop-blur-sm border border-gray-300 rounded-xl p-5 overflow-hidden hover:border-red-400 hover:shadow-2xl hover:scale-105 transition-all duration-500 hover:bg-white">
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-[#E53935] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Bottom accent line */}
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
            Ready to Protect Your Building?
          </h2>
          <p
            className="text-lg sm:text-xl text-gray-100 mb-10 max-w-2xl mx-auto font-normal"
            style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
          >
            Request Fire Alarm System installation today and ensure complete protection.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-linear-to-r from-[#FF4D4D] to-[#E53935] text-white font-bold text-lg rounded-lg transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/50 hover:scale-105 active:scale-95 shadow-lg group"
            style={{ fontFamily: 'Noto Sans, sans-serif' }}
          >
            <FileText size={18} />
            Request Quote
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
              We provide end-to-end support for your fire alarm systems, from design to maintenance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Installation */}
            <div className="group relative bg-white/80 backdrop-blur-sm border border-gray-300 rounded-xl p-5 hover:border-red-400 hover:shadow-2xl hover:scale-105 transition-all duration-500 hover:bg-white overflow-hidden text-center flex flex-col items-center">
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-[#E53935] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-[#E53935] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <div className="w-10 h-10 rounded-lg bg-[#E53935]/10 flex items-center justify-center text-[#E53935] group-hover:bg-[#E53935] group-hover:text-white transition-all duration-300 shrink-0 mb-4">
                <Tool size={20} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Oswald, sans-serif' }}>Expert Installation</h3>
              <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'Noto Sans, sans-serif' }}>Professional design and installation by certified engineers to ensure total coverage.</p>
            </div>

            {/* Maintenance */}
            <div className="group relative bg-white/80 backdrop-blur-sm border border-gray-300 rounded-xl p-5 hover:border-red-400 hover:shadow-2xl hover:scale-105 transition-all duration-500 hover:bg-white overflow-hidden text-center flex flex-col items-center">
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-[#E53935] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-[#E53935] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <div className="w-10 h-10 rounded-lg bg-[#E53935]/10 flex items-center justify-center text-[#E53935] group-hover:bg-[#E53935] group-hover:text-white transition-all duration-300 shrink-0 mb-4">
                <Settings size={20} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Oswald, sans-serif' }}>Regular Maintenance</h3>
              <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'Noto Sans, sans-serif' }}>Scheduled testing and preventive maintenance to keep systems operating flawlessly.</p>
            </div>

            {/* Monitoring */}
            <div className="group relative bg-white/80 backdrop-blur-sm border border-gray-300 rounded-xl p-5 hover:border-red-400 hover:shadow-2xl hover:scale-105 transition-all duration-500 hover:bg-white overflow-hidden text-center flex flex-col items-center">
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-[#E53935] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-[#E53935] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <div className="w-10 h-10 rounded-lg bg-[#E53935]/10 flex items-center justify-center text-[#E53935] group-hover:bg-[#E53935] group-hover:text-white transition-all duration-300 shrink-0 mb-4">
                <DeviceDesktop size={20} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Oswald, sans-serif' }}>24/7 Monitoring</h3>
              <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'Noto Sans, sans-serif' }}>Round-the-clock central station monitoring for immediate emergency response.</p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
