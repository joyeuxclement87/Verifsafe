'use client';

import { motion } from 'framer-motion';

const solutions = [
  {
    number: '01',
    title: 'Life-Saving Protocols',
    description: 'Advanced detection provides the critical seconds needed for total building evacuation.'
  },
  {
    number: '02',
    title: 'Uncompromising Compliance',
    description: 'Eliminate legal risk with systems that meet local and international fire safety codes.'
  },
  {
    number: '03',
    title: 'Asset Preservation',
    description: 'Our clean-agent suppression protects electronics and high-value equipment from damage.'
  }
];

export default function IndustrialFireSolutions() {
  return (
    <section id="industrial-solutions" className="w-full bg-white py-20 sm:py-24 lg:py-32">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start mb-14 sm:mb-16">

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-5"
          >
            <div className="flex items-center gap-3 mb-5">
              <span aria-hidden="true" className="h-px w-8 bg-[#D62828]" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                Industrial Solutions
              </p>
            </div>

            <h2 className="text-section-heading  text-gray-900">
              Protection for
              <br />
              High-Risk Environments.
            </h2>

            <p className="text-subheading text-gray-600 mt-6 max-w-xl">
              Precision engineering and proven reliability for industrial and commercial buildings
              where a failure is not an option.
            </p>
          </motion.div>

          <div className="lg:col-span-7">
            <ol className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-10 md:gap-y-0 border-t border-gray-200 pt-10 md:pt-12">
              {solutions.map((item) => (
                <li key={item.number}>
                  <span className="block text-base font-bold text-gray-400 tabular-nums mb-4">
                    {item.number}
                  </span>
                  <h3 className="text-card-title text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-body text-gray-600">{item.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}