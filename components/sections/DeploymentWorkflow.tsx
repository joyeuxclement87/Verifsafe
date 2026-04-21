'use client';

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
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url("/hero-3.webp")`,
          backgroundAttachment: 'fixed',
        }}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-gray-950 via-gray-950/90 to-gray-950/90" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          {/* Section Label */}
          <div className="inline-block mb-4">
            <p
              className="text-white text-xs sm:text-sm font-bold tracking-widest uppercase px-4 py-2 bg-[#E53935]/10 rounded-full border border-[#E53935]/40 flex items-center gap-2 justify-center"
              style={{ fontFamily: 'Noto Sans, sans-serif' }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Our Process
            </p>
          </div>

          {/* Main Heading */}
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight"
            style={{ fontFamily: 'Oswald, sans-serif' }}
          >
            How We <span className="text-[#E53935]">Work</span>
          </h2>

          {/* Decorative Divider */}
          <div className="w-20 h-1 bg-[#E53935] mx-auto mt-6 mb-6 rounded-full" />

          {/* Subheading */}
          <p
            className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto font-normal leading-relaxed"
            style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
          >
            A meticulous 5-step process ensuring total structural protection and compliance.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-0">
          {steps.map((step, index) => (
            <div key={index} className="group relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="absolute left-6 sm:left-8 top-16 bottom-0 w-px bg-gray-800 group-hover:bg-[#E53935]/30 transition-colors duration-500" />
              )}

              <div className="flex gap-6 sm:gap-10 py-8 sm:py-10">
                {/* Number */}
                <div className="shrink-0 relative">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gray-900 border border-gray-800 group-hover:border-[#E53935]/50 group-hover:bg-[#E53935]/10 flex items-center justify-center transition-all duration-300 relative z-10">
                    <span
                      className="text-lg sm:text-xl font-black text-gray-600 group-hover:text-[#E53935] transition-colors duration-300"
                      style={{ fontFamily: 'Oswald, sans-serif' }}
                    >
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pb-2">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:gap-12">
                    {/* Title & Description */}
                    <div className="flex-1 mb-4 lg:mb-0">
                      <h3
                        className="text-2xl sm:text-3xl font-bold text-white mb-2 group-hover:text-[#E53935] transition-colors duration-300"
                        style={{ fontFamily: 'Oswald, sans-serif' }}
                      >
                        {step.title}
                      </h3>
                      <p
                        className="text-gray-400 text-base leading-relaxed max-w-lg font-normal"
                        style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
                      >
                        {step.description}
                      </p>
                    </div>

                    {/* Details */}
                    <div className="flex flex-wrap gap-2 lg:pt-1">
                      {step.details.map((detail, detailIndex) => (
                        <span
                          key={detailIndex}
                          className="text-xs text-gray-500 group-hover:text-gray-300 border border-gray-800 group-hover:border-[#E53935]/30 px-3 py-1.5 rounded-full transition-all duration-300"
                          style={{ fontFamily: 'Noto Sans, sans-serif' }}
                        >
                          {detail}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Divider line */}
                  {index < steps.length - 1 && (
                    <div className="mt-8 sm:mt-10 h-px bg-gray-800/50 group-hover:bg-[#E53935]/20 transition-colors duration-300" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
