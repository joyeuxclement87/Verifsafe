'use client';

import { motion } from 'framer-motion';

export default function DeploymentWorkflow() {
  const steps = [
    {
      number: '01',
      title: 'Assessment',
      description: 'Comprehensive site audit and hazard profiling to understand your specific fire safety needs.',
      details: ['Risk evaluation', 'Site inspection', 'Requirements analysis']
    },
    {
      number: '02',
      title: 'Design',
      description: 'Custom engineering solutions tailored to your facility and compliance requirements.',
      details: ['System planning', 'Technical specifications', 'Compliance mapping']
    },
    {
      number: '03',
      title: 'Installation',
      description: 'Certified precision setup by our expert technicians ensuring optimal performance.',
      details: ['Professional setup', 'Quality testing', 'Safety verification']
    },
    {
      number: '04',
      title: 'Testing',
      description: 'Rigorous system validation and performance testing before going live.',
      details: ['Function testing', 'Safety validation', 'Performance checks']
    },
    {
      number: '05',
      title: 'Maintenance',
      description: 'Scheduled 24/7 support and regular maintenance to ensure ongoing reliability.',
      details: ['Preventive care', 'Emergency support', 'System updates']
    }
  ];

  return (
    <section id="deployment-workflow" className="relative w-full py-20 sm:py-24 lg:py-32 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url("/verif.png")`,
          backgroundAttachment: 'fixed',
        }}
      />
      <div className="absolute inset-0 bg-linear-to-r from-ink via-ink/90 to-ink/90" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-14 sm:mb-16"
        >
          <div className="flex items-center gap-3 mb-5">
            <span aria-hidden="true" className="h-px w-8 bg-white/60" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              Our Process
            </p>
          </div>

          <h2 className="text-section-heading  text-white">
            How We Work
          </h2>

          <p className="text-subheading text-gray-400 mt-6 max-w-2xl">
            A meticulous 5-step process ensuring total structural protection and compliance.
          </p>
        </motion.div>

        <ol className="border-t border-white/15">
          {steps.map((step, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05, ease: 'easeOut' }}
              className="group border-b border-white/15 py-8 sm:py-9"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-4 lg:gap-12">
                <div className="flex items-start gap-6 lg:w-56 shrink-0">
                  <span className="shrink-0 w-10 pt-0.5 text-base font-bold text-white/40 tabular-nums transition-colors duration-200 group-hover:text-[#D62828] motion-reduce:transition-none">
                    {step.number}
                  </span>
                  <h3 className="text-card-title text-white transition-colors duration-200 motion-reduce:transition-none">
                    {step.title}
                  </h3>
                </div>

                <div className="flex-1">
                  <p className="text-gray-400 text-base leading-relaxed max-w-lg">
                    {step.description}
                  </p>

                  <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="text-xs text-gray-500 group-hover:text-gray-300 transition-colors duration-200 motion-reduce:transition-none">
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}