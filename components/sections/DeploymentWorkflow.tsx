'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks } from '@fortawesome/free-solid-svg-icons';

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
    <section id="deployment-workflow" className="w-full bg-linear-to-b from-white to-gray-50 py-20 sm:py-24 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-40 h-40 bg-red-100/20 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-blue-100/20 rounded-full blur-2xl animate-bounce" style={{ animationDelay: '1s' }} />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          {/* Section Label */}
          <div className="inline-block mb-4">
            <p
              className="text-[#E53935] text-sm sm:text-base font-bold tracking-widest uppercase px-4 py-2 bg-red-50 rounded-full"
              style={{ fontFamily: 'Noto Sans, sans-serif' }}
            >
              Our Process
            </p>
          </div>

          {/* Main Heading */}
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-4 leading-tight"
            style={{ fontFamily: 'Oswald, sans-serif' }}
          >
            Our <span className="text-[#E53935]">Deployment</span> Workflow
          </h2>

          {/* Subheading */}
          <p
            className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-normal leading-relaxed"
            style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
          >
            A meticulous 5-step process ensuring total structural protection and compliance.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-linear-to-r from-[#E53935] via-gray-300 to-[#E53935]" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative group flex flex-col items-center">

                {/* Step Number Container */}
                <div className="relative mb-6">
                  {/* Step Circle */}
                  <div className="w-20 h-20 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center group-hover:border-[#E53935] group-hover:shadow-lg transition-all duration-300 relative z-10">
                    <span
                      className="text-lg font-black text-gray-400 group-hover:text-[#E53935] transition-colors duration-300"
                      style={{ fontFamily: 'Oswald, sans-serif' }}
                    >
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Step Card */}
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-[#E53935] hover:shadow-2xl hover:scale-105 transition-all duration-300 group/card relative overflow-hidden w-full max-w-sm">

                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-[#E53935] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Title */}
                  <h3
                    className="text-xl font-bold text-gray-900 mb-3 group-hover/card:text-[#E53935] transition-colors duration-300"
                    style={{ fontFamily: 'Oswald, sans-serif' }}
                  >
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-gray-600 text-sm leading-relaxed mb-4 font-normal"
                    style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
                  >
                    {step.description}
                  </p>

                  {/* Details List */}
                  <div className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#E53935] rounded-full shrink-0" />
                        <span className="text-xs text-gray-500" style={{ fontFamily: 'Noto Sans, sans-serif' }}>
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-[#E53935] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Summary */}
        <div className="mt-16 sm:mt-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative group bg-white border border-gray-200 rounded-2xl p-8 hover:border-[#E53935] hover:shadow-2xl transition-all duration-300 overflow-hidden">

              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, rgba(229, 57, 53, 0.3) 1px, transparent 0)`,
                  backgroundSize: '30px 30px'
                }} />
              </div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-[#E53935]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-[#E53935]" style={{ fontFamily: 'Oswald, sans-serif' }}>✓</span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Oswald, sans-serif' }}>
                  End-to-End Solutions
                </h3>

                <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto" style={{ fontFamily: 'Noto Sans, sans-serif' }}>
                  From initial assessment to ongoing maintenance, our comprehensive process ensures your fire safety systems are professionally installed, thoroughly tested, and continuously maintained for optimal performance.
                </p>
              </div>

              {/* Accent Lines */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-[#E53935] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-[#E53935] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
