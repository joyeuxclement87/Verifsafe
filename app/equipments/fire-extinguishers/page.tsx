'use client';

import {
  Building,
  CircleCheck,
  Flame,
  BuildingWarehouse,
  Home,
  Bolt,
  ShieldCheck,
  Settings,
  Tool,
  Bulb,
  Droplet,
  Lifebuoy,
  HandFinger,
  Check,
  Star,
  Armchair,
  Plus
} from 'tabler-icons-react';
import Image from 'next/image';
import WhoWeServe from '@/components/sections/marketing/WhoWeServe';
import Button from '@/components/ui/Button';
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
      case 'Homes': return <Home size={18} className="text-[#D62828]" />;
      case 'Offices': return <Armchair size={18} className="text-[#D62828]" />;
      case 'Vehicles': return <Building size={18} className="text-[#D62828]" />;
      case 'Warehouses': return <BuildingWarehouse size={18} className="text-[#D62828]" />;
      case 'Commercial buildings': return <Building size={18} className="text-[#D62828]" />;
      case 'Restaurants': return <Building size={18} className="text-[#D62828]" />;
      case 'Factories': return <BuildingWarehouse size={18} className="text-[#D62828]" />;
      case 'Data Centers': return <Building size={18} className="text-[#D62828]" />;
      default: return <Building size={18} className="text-[#D62828]" />;
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
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("/ext.png")`,
            backgroundAttachment: 'fixed',
          }}
        />
        <div className="absolute inset-0 bg-linear-to-r from-ink/85 via-ink/85 to-ink/75" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-3 mb-5">
              <span aria-hidden="true" className="h-px w-8 bg-white/60" />
              <p className="text-label text-white/60">Equipment Guide</p>
              <span aria-hidden="true" className="h-px w-8 bg-white/60" />
            </div>
            <h1 className="text-page-heading  text-white mb-4">
              Fire Extinguishers
            </h1>
            <p className="text-subheading text-gray-200 max-w-2xl mx-auto mb-8">
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-5">
  <span aria-hidden="true" className="h-px w-8 bg-[#D62828]" />
  <p className="text-label text-gray-500">Operational Guide</p>
</div>
              <h2 className="text-section-heading  text-gray-900 mb-6">
                First Line of Defense
              </h2>
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
                className="absolute -bottom-6 -left-6 bg-white p-6 rounded-md border border-gray-200 z-20"
              >
                <p className="text-card-title font-bold text-[#D62828]">6KG</p>
                <p className="text-xs text-gray-500 font-semibold capitalize tracking-widest mt-1">Standard Unit</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Types Section */}
      <section className="w-full py-12 sm:py-16 lg:py-20 bg-paper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-section-heading  text-gray-900 mb-3">Choose the Right Type</h2>
            <p className="text-subheading text-gray-600 max-w-2xl mx-auto">Fire extinguishers are color-coded and specifically designed to combat different classes of fire.</p>
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
                className="group flex flex-col p-6 bg-white border border-gray-100 rounded-md hover:border-[#D62828]/40 transition-colors duration-200 overflow-hidden relative"
              >
                <div className="flex items-start gap-4 mb-5">
                  <div className="flex items-center justify-center text-gray-400 shrink-0"><type.icon size={24} /></div>
                  <div className="flex-1">
                    <h3 className="text-card-title text-gray-900">{type.title}</h3>
                    <p className="text-xs font-semibold text-[#D62828] capitalize tracking-wider mt-1">Classes: {type.classes}</p>
                  </div>
                </div>
                <p className="text-body text-gray-600 mb-6">{type.desc}</p>
                <div className="mt-auto bg-neutral p-4 rounded-md border border-line">
                  <p className="text-body-sm text-gray-500"><span className="text-label text-gray-900 block mb-1">Best for</span>{type.bestFor}</p>
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1 lg:sticky lg:top-8"
            >
              <div className="flex items-center gap-3 mb-5">
  <span aria-hidden="true" className="h-px w-8 bg-[#D62828]" />
  <p className="text-label text-gray-500">Quick Guide</p>
</div>
              <h2 className="text-section-heading  text-gray-900 mb-5">Fire Classes</h2>
              <p className="text-body text-gray-600">Understanding fire classes is essential for choosing the right extinguishing agent.</p>
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
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group flex items-center gap-6 pb-6 border-b border-gray-100 hover:border-[#D62828]/40 transition-all duration-300"
                  >
                    <div className="flex items-center justify-center text-gray-400 shrink-0"><span className="text-2xl font-extrabold">{item.class}</span></div>
                    <div className="flex flex-col"><span className="text-card-title text-gray-900 duration-300">{item.title}</span><span className="text-body-sm text-gray-400">{item.detail}</span></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sizes Section */}
      <section className="w-full py-12 sm:py-16 lg:py-20 bg-paper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-section-heading  text-gray-900 mb-5">Available Sizes</h2>
            <p className="text-subheading text-gray-600 max-w-2xl mx-auto">Fire extinguishers come in various sizes measured by weight (kg).</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {sizes.map((sizeCategory, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative flex flex-col p-6 bg-white border border-gray-100 rounded-md hover:border-[#D62828]/40 transition-colors duration-200 overflow-hidden"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex items-center justify-center text-gray-400 shrink-0"><BuildingWarehouse size={24} /></div>
                  <div><h3 className="text-card-title text-gray-900">{sizeCategory.category}</h3><p className="text-body-sm text-gray-400 mt-1">{sizeCategory.description}</p></div>
                </div>
                <div className="flex-1 space-y-3 mb-6">
                  {sizeCategory.sizes.map((size, i) => (
                    <div key={i} className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[#D62828]/20 group-hover:bg-[#D62828] transition-colors duration-300" /><span className="text-body text-gray-700 font-semibold">{size}</span></div>
                  ))}
                </div>
                <div className="bg-neutral p-4 rounded-md border border-line"><p className="text-body-sm text-gray-500"><span className="text-label text-gray-900 block mb-1">Recommended for</span>{sizeCategory.bestFor}</p></div>
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
            className="bg-white border border-gray-200 rounded-md p-8 sm:p-12 relative overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 xl:gap-20 relative z-10 items-start">
              <div className="lg:col-span-1 lg:sticky lg:top-8">
                <div className="flex items-center gap-3 mb-5">
  <span aria-hidden="true" className="h-px w-8 bg-[#D62828]" />
  <p className="text-label text-gray-500">Quick Reference</p>
</div>
                <h2 className="text-section-heading  text-gray-900 mb-5">Simple Buyer&apos;s Guide</h2>
                <p className="text-body text-gray-600">Need a quick recommendation?</p>
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
                      className="group flex items-center gap-6 pb-6 border-b border-gray-100 hover:border-[#D62828]/40 transition-all duration-300"
                    >
                      <div className="flex items-center justify-center text-gray-400 shrink-0">{getRenderIcon(guide.iconName)}</div>
                      <div className="flex flex-col"><h3 className="text-card-title text-gray-900 truncate">{guide.scenario}</h3><p className="text-label text-[#D62828] mt-2">Use: {guide.recommendation}</p></div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Applications */}
      <section className="w-full py-12 sm:py-16 lg:py-20 bg-neutral">
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
                <h2 className="text-section-heading  text-gray-900 mb-5">Ideal Applications</h2>
                <p className="text-body text-gray-600">Strategically placed fire extinguishers are the first line of defense.</p>
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
                      className="group flex items-center gap-6 pb-6 border-b border-gray-100 hover:border-[#D62828]/40 transition-all duration-300"
                    >
                      <div className="flex items-center justify-center text-gray-400 shrink-0">{getApplicationIcon(app)}</div>
                      <div className="flex flex-col"><span className="text-card-title text-gray-900 duration-300">{app}</span><span className="text-body-sm text-gray-400">Essential Safety Protection</span></div>
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
            <h2 className="text-section-heading  text-gray-900 mb-3">Features & Benefits</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group flex items-start gap-3 p-4 bg-white border border-gray-200 rounded-md hover:border-[#D62828]/40 transition-colors duration-200 overflow-hidden relative"
              >
                <div className="flex items-center justify-center text-[#D62828] shrink-0"><CircleCheck size={20} /></div>
                <p className="text-body text-gray-900 mt-1">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <WhoWeServe />

      {/* CTA Section */}
      <section className="relative w-full py-14 sm:py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url("/ext.png")`, backgroundAttachment: 'fixed' }} />
        <div className="absolute inset-0 bg-linear-to-r from-ink/90 via-ink/90 to-ink/90" />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-3 mb-5"><span aria-hidden="true" className="h-px w-8 bg-white/60" /><p className="text-label text-white/60">Get Started</p><span aria-hidden="true" className="h-px w-8 bg-white/60" /></div>
            <h2 className="text-section-heading  text-white mb-6">Ensure your safety today</h2>
            <p className="text-subheading text-gray-300 max-w-2xl mx-auto mb-8">Contact our experts for the right recommendation and installation.</p>
            <Button href="/contact#contact-form" variant="primary">
              Request Quote
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
