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
  Plus,
  Star
} from 'tabler-icons-react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import WhoWeServe from '@/components/sections/marketing/WhoWeServe';
import { motion } from 'framer-motion';

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
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("/dectators.png")`,
            backgroundAttachment: 'fixed',
          }}
        />
        <div className="absolute inset-0 bg-linear-to-r from-ink/90 via-ink/85 to-ink/80" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
  <span aria-hidden="true" className="h-px w-8 bg-white/60" />
  <p className="text-label text-white/60">Precision Detection</p>
  <span aria-hidden="true" className="h-px w-8 bg-white/60" />
</div>
            <h1 className="text-page-heading  text-white mb-6">
              Detection Devices
            </h1>
            <p className="text-subheading text-gray-200 max-w-2xl mx-auto mb-8">
              The frontline of fire safety: high-sensitivity devices designed to identify smoke, heat, and flame at the earliest possible moment.
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
  <p className="text-label text-gray-500">Technology Overview</p>
</div>
              <h2 className="text-section-heading  text-gray-900 mb-6">
                Early Warning Intelligence
              </h2>
              <div className="space-y-8">
                {[
                  { step: "01", title: "Instant Sensing", text: "Advanced sensors detect microscopic changes in air quality or temperature." },
                  { step: "02", title: "False Alarm Filtering", text: "Multi-sensor logic identifies the difference between actual fire and common steam/dust." },
                  { step: "03", title: "System Integration", text: "Devices communicate immediately with the main panel to trigger site-wide alerts." }
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-6"
                  >
                    <span className="text-base font-bold text-gray-400 tabular-nums">{item.step}</span>
                    <div>
                      <h4 className="text-card-title text-gray-900 mb-2">{item.title}</h4>
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{item.text}</p>
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
                  src="/fire-detection-guide.png" 
                  alt="Fire Detection Guide" 
                  fill 
                  className="object-cover"
                />
              </div>
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-6 -right-6 bg-white p-6 rounded-md border border-gray-200 z-20"
              >
                <p className="text-card-title font-bold text-[#D62828]">99%</p>
                <p className="text-xs text-gray-500 font-bold capitalize tracking-widest mt-1">Detection Accuracy</p>
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
  <p className="text-label text-gray-500">Device Catalog</p>
</div>
            <h2 className="text-section-heading  text-gray-900 mb-5">
              Standard Sensors
            </h2>
            <p className="text-subheading text-gray-600 max-w-2xl mx-auto">
              Specialized hardware designed to handle different fire signatures and environmental challenges.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {deviceTypes.map((type, index) => (
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
                  <p className="text-xs text-gray-500 leading-relaxed">
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
              Device Intelligence
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
                <h4 className="text-card-title text-base text-gray-900 mb-2">{item.title}</h4>
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
                  Choosing the correct detection technology is essential for accurate, rapid response.
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
                  Reliable protection across diverse residential and industrial environments.
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
                        <span className="text-body-sm text-gray-400">Certified Detection</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-12 flex items-center gap-3 text-gray-400">
                  <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center">
                    <Plus size={16} />
                  </div>
                  <p className="text-sm font-bold capitalize tracking-widest">And many more options available...</p>
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
              "LPCB & UL Safety Certified",
              "Addressable Panel Compatible",
              "Low False Alarm Profiles",
              "Integrated Error Testing",
              "Rapid Environmental Sensing",
              "Dust & Humidity Resistant"
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
            backgroundImage: `url("/dectators.png")`,
            backgroundAttachment: 'fixed',
          }}
        />
        <div className="absolute inset-0 bg-linear-to-r from-ink/90 via-ink/90 to-ink/90" />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-3 mb-5">
  <span aria-hidden="true" className="h-px w-8 bg-white/60" />
  <p className="text-label text-white/60">Upgrade Your Detection</p>
  <span aria-hidden="true" className="h-px w-8 bg-white/60" />
</div>
            <h2 className="text-section-heading  text-white mb-6">
              Ensure your safety today
            </h2>
            <p className="text-subheading text-gray-300 max-w-2xl mx-auto mb-8">
              Contact our experts for the right fire detection strategy and professional device installation.
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
