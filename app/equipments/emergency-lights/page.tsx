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
  ClipboardCheck,
  Check,
  Plus,
  Star
} from 'tabler-icons-react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import WhoWeServe from '@/components/sections/marketing/WhoWeServe';
import { motion } from 'framer-motion';

export default function EmergencyLightsPage() {
  const lightTypes = [
    {
      title: "Non-Maintained Units",
      description: "Activate only when the primary power supply fails, saving energy during normal use.",
      icon: <BatteryCharging size={24} strokeWidth={1.5} />,
      bestFor: "Offices, commercial buildings, and standard public spaces."
    },
    {
      title: "Maintained Units",
      description: "Lights remain on continuously, serving as both standard and emergency illumination.",
      icon: <Bulb size={24} strokeWidth={1.5} />,
      bestFor: "Cinema theaters, clubs, and areas where people are unfamiliar with the layout."
    },
    {
      title: "Maintained Exit Signs",
      description: "Permanently illuminated directional signs to ensure escape routes are always visible.",
      icon: <DoorExit size={24} strokeWidth={1.5} />,
      bestFor: "All escape routes, corridors, and primary building exits."
    }
  ];

  const components = [
    { title: "Light Fixtures", description: "Internal or external illumination units.", icon: <Bulb size={24} /> },
    { title: "Exit Panels", description: "Graphic directional signage for routes.", icon: <DoorExit size={24} /> },
    { title: "Backup Batteries", description: "Ensure 3+ hours of runtime during outages.", icon: <BatteryCharging size={24} /> },
    { title: "Control Circuits", description: "Intelligent switching upon power loss.", icon: <Settings size={24} /> },
    { title: "Self-Test Units", description: "Automated diagnostic and reporting tools.", icon: <ShieldCheck size={24} /> }
  ];

  const buyerGuide = [
    { title: "Duration", detail: "Most regulations require a minimum of 3 hours of backup illumination." },
    { title: "Placement", detail: "Must be placed at every exit door and near all fire safety equipment." },
    { title: "Energy Usage", detail: "LED units offer significant energy savings and longer battery life." },
    { title: "Local Standards", detail: "Must comply with BS 5266-1 or local equivalent safety codes." }
  ];

  const applications = [
    "Corporate Headquarters",
    "Healthcare Facilities",
    "Education Campuses",
    "Hospitality Venues",
    "Residential High-Rises",
    "Retail Shopping Malls"
  ];

  return (
    <main className="w-full bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("/em.jpeg")`,
            backgroundAttachment: 'fixed',
          }}
        />
        <div className="absolute inset-0 bg-linear-to-r from-ink/90 via-ink/85 to-ink/85" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
  <span aria-hidden="true" className="h-px w-8 bg-white/60" />
  <p className="text-label text-white/60">Safety Lighting</p>
  <span aria-hidden="true" className="h-px w-8 bg-white/60" />
</div>
            <h1 className="text-page-heading  text-white mb-6">
              Emergency Lights
            </h1>
            <p className="text-subheading text-gray-200 max-w-2xl mx-auto mb-8">
              Guiding occupants to safety during power outages and emergencies with reliable, high-visibility illumination and signage.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="w-full py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-5">
  <span aria-hidden="true" className="h-px w-8 bg-[#D62828]" />
  <p className="text-label text-gray-500">Critical Support</p>
</div>
              <h2 className="text-section-heading  text-gray-900 mb-6">
                Safe Evacuation
              </h2>
              <div className="space-y-8">
                {[
                  { step: "01", title: "Automatic Activation", text: "Systems detect power loss instantly and switch to internal battery power." },
                  { step: "02", title: "Route Marking", text: "Exit signs clearly indicate the path to the nearest safe assembly point." },
                  { step: "03", title: "Visibility", text: "Provides sufficient lighting to navigate corridors and stairs without panic." }
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-6"
                  >
                    <span className="text-index text-gray-400 tabular-nums">{item.step}</span>
                    <div>
                      <h4 className="text-card-title text-gray-900 mb-2">{item.title}</h4>
                      <p className="text-body text-gray-600">{item.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square bg-gray-50 rounded-md overflow-hidden relative border border-gray-200">
                <Image 
                  src="/emergency-light-guide.png" 
                  alt="Emergency Lighting Guide" 
                  fill 
                  className="object-cover"
                />
              </div>
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-white p-6 rounded-md border border-gray-200 z-20"
              >
                <p className="text-card-title font-bold text-[#D62828]">3HR</p>
                <p className="text-xs text-gray-500 font-semibold capitalize tracking-widest mt-1">Minimum Runtime</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Types Section */}
      <section className="w-full py-12 sm:py-16 lg:py-20 bg-neutral">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center gap-3 mb-5">
  <span aria-hidden="true" className="h-px w-8 bg-[#D62828]" />
  <p className="text-label text-gray-500">System Architectures</p>
</div>
            <h2 className="text-section-heading  text-gray-900 mb-5">
              Lighting Solutions
            </h2>
            <p className="text-subheading text-gray-600 max-w-2xl mx-auto">
              Tailored lighting setups designed to meet specific building usage and safety requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {lightTypes.map((type, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative flex flex-col p-8 bg-white border border-gray-100 rounded-md hover:border-[#D62828]/40 transition-colors duration-200 overflow-hidden"
              >
                
                <div className="flex items-center justify-center text-gray-400 shrink-0 mb-6">
                  {type.icon}
                </div>
                <h3 className="text-card-title text-gray-900 mb-3">{type.title}</h3>
                <p className="text-body text-gray-600 leading-relaxed mb-8">
                  {type.description}
                </p>

                <div className="mt-auto bg-gray-50 p-5 rounded-md border border-gray-100  group-hover:border-[#D62828]/10 transition-all duration-300">
                  <p className="text-body-sm text-gray-500">
                    <span className="text-label text-gray-900 block mb-2">Best for</span>
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
            <h2 className="text-section-heading  text-gray-900 mb-5">
              System Components
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {components.map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group flex flex-col p-6 bg-white border border-gray-100 rounded-md hover:border-[#D62828]/40 transition-colors duration-200 overflow-hidden relative"
              >
                <div className="w-10 h-10 rounded-lg bg-[#D62828]/10 flex items-center justify-center text-[#D62828] group-hover:bg-[#D62828] group-hover:text-white transition-all duration-300 shrink-0 mb-4">
                  {item.icon}
                </div>
                <h4 className="text-list-title text-gray-900 mb-2">{item.title}</h4>
                <p className="text-body-sm text-gray-500 leading-normal">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Buyer's Guide */}
      <section className="w-full py-12 sm:py-16 lg:py-20 bg-neutral">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white border border-gray-200 rounded-md p-8 sm:p-12 relative overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 xl:gap-20 relative z-10 items-start">
              <div className="lg:col-span-1 lg:sticky lg:top-8">
                <div className="flex items-center gap-3 mb-5">
  <span aria-hidden="true" className="h-px w-8 bg-[#D62828]" />
  <p className="text-label text-gray-500">Expert Advice</p>
</div>
                <h2 className="text-section-heading  text-gray-900 mb-5">
                  Simple Buyer&apos;s Guide
                </h2>
                <p className="text-body text-gray-600">
                  Essential considerations for your emergency lighting strategy.
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
                      className="group flex items-start gap-6 pb-6 border-b border-gray-100 hover:border-[#D62828]/40 transition-all duration-300"
                    >
                      <div className="flex items-center justify-center text-gray-400 shrink-0 mt-1">
                        <Check size={20} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-card-title text-gray-900 duration-300">{item.title}</span>
                        <span className="text-body-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">{item.detail}</span>
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
            className="bg-white border border-gray-200 rounded-md p-8 sm:p-12 relative overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 xl:gap-20 relative z-10 items-start">
              <div className="lg:col-span-1 lg:sticky lg:top-8">
                <div className="flex items-center gap-3 mb-5">
  <span aria-hidden="true" className="h-px w-8 bg-[#D62828]" />
  <p className="text-label text-gray-500">Use Cases</p>
</div>
                <h2 className="text-section-heading  text-gray-900 mb-5">
                  Ideal Applications
                </h2>
                <p className="text-body text-gray-600">
                  Reliable guidance for every building type and emergency scenario.
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
                      className="group flex items-center gap-6 pb-6 border-b border-gray-100 hover:border-[#D62828]/40 transition-all duration-300"
                    >
                      <div className="flex items-center justify-center text-gray-400 shrink-0">
                        <Building size={24} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-card-title text-gray-900 duration-300">{app}</span>
                        <span className="text-body-sm text-gray-400">Exit Route Safety</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-12 flex items-center gap-3 text-gray-400">
                  <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center">
                    <Plus size={16} />
                  </div>
                  <p className="text-body-sm font-semibold capitalize tracking-widest">And many more options available...</p>
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
            <h2 className="text-section-heading  text-gray-900 mb-3">
              Features & Benefits
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "High-Output LED Technology",
              "Low Energy Consumption",
              "Lithium Battery Backups",
              "Photoluminescent Graphics",
              "Automatic Self-Test Options",
              "Weatherproof Exterior Units"
            ].map((feature, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group flex items-start gap-3 p-4 bg-white border border-gray-200 rounded-md hover:border-[#D62828]/40 transition-colors duration-200 overflow-hidden relative"
              >
                <div className="flex items-center justify-center text-[#D62828] shrink-0">
                  <Star size={20} strokeWidth={1.5} />
                </div>
                <p className="text-body text-gray-900 mt-1">
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
            backgroundImage: `url("/em.jpeg")`,
            backgroundAttachment: 'fixed',
          }}
        />
        <div className="absolute inset-0 bg-linear-to-r from-ink/80 via-ink/70 to-ink/75" />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-3 mb-5">
  <span aria-hidden="true" className="h-px w-8 bg-white/60" />
  <p className="text-label text-white/60">Enhance Exit Visibility</p>
  <span aria-hidden="true" className="h-px w-8 bg-white/60" />
</div>
            <h2 className="text-section-heading  text-white mb-6">
              Ensure your safety today
            </h2>
            <p className="text-subheading text-gray-300 max-w-2xl mx-auto mb-8">
              Contact our experts for the right emergency lighting design and professional installation.
            </p>
            <Button href="/contact#contact-form" variant="primary">
              Request Quote
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
