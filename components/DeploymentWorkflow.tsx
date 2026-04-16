'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList, faPencilRuler, faHammer, faFlask, faWrench, faTasks } from '@fortawesome/free-solid-svg-icons';

export default function DeploymentWorkflow() {
  const steps = [
    {
      number: '01',
      title: 'Assessment',
      description: 'Site audit & hazard profiling.',
      icon: faClipboardList
    },
    {
      number: '02',
      title: 'Design',
      description: 'Custom engineering solutions.',
      icon: faPencilRuler
    },
    {
      number: '03',
      title: 'Installation',
      description: 'Certified precision setup.',
      icon: faHammer
    },
    {
      number: '04',
      title: 'Testing',
      description: 'Rigorous system validation.',
      icon: faFlask
    },
    {
      number: '05',
      title: 'Maintenance',
      description: 'Scheduled 24/7 support.',
      icon: faWrench
    }
  ];

  return (
    <section id="deployment-workflow" className="w-full bg-gradient-to-b from-white via-gray-50 to-gray-100 py-20 sm:py-24 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-100/30 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-100/20 rounded-full blur-3xl opacity-20" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          {/* Section Label */}
          <div className="inline-block mb-4">
            <p
              className="text-[#E50914] text-sm sm:text-base font-bold tracking-widest uppercase px-4 py-2 bg-red-50 rounded-full flex items-center gap-2"
              style={{ fontFamily: 'Noto Sans, sans-serif' }}
            >
              <FontAwesomeIcon icon={faTasks} className="w-4 h-4" />
              Our Process
            </p>
          </div>

          {/* Main Heading */}
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-4 leading-tight"
            style={{ fontFamily: 'Oswald, sans-serif' }}
          >
            Our <span className="text-[#E50914]">Deployment</span>
          </h2>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight"
            style={{ fontFamily: 'Oswald, sans-serif' }}
          >
            <span className="text-[#E50914]">Workflow</span>
          </h2>

          {/* Subheading */}
          <p
            className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-normal leading-relaxed"
            style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
          >
            A meticulous 5-step process ensuring total structural protection.
          </p>
        </div>

        {/* Timeline Progress Bar */}
        <div className="mb-16 sm:mb-24">
          <div className="flex items-center justify-between relative">
            {/* Background connecting line */}
            <div className="absolute top-8 left-0 right-0 h-1 bg-gradient-to-r from-[#E50914] via-yellow-400 to-[#E50914] hidden lg:block" />

            {/* Steps */}
            <div className="w-full flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-0">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center lg:items-center relative group">
                  {/* Step Circle */}
                  <div className="relative mb-4 z-20">

                    <div
                      className="relative w-16 h-16 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center group-hover:border-[#E50914] group-hover:shadow-lg transition-all duration-300"
                      style={{ borderWidth: '2px' }}
                    >
                      <span
                        className="text-lg font-black text-gray-400 group-hover:text-[#E50914] transition-colors duration-300"
                        style={{ fontFamily: 'Oswald, sans-serif' }}
                      >
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Step Content Card */}
                  <div className="w-full lg:w-56 text-center">
                    <div
                      className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 group-hover:border-[#E50914] group-hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
                      style={{ borderWidth: '1px', opacity: 0.95 }}
                    >
                      {/* Gradient overlay on hover */}
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#E50914] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Icon */}
                      <div className="mb-4 flex justify-center">
                        <div className="relative">
                          <div className="relative bg-gradient-to-br from-[#E50914]/10 to-red-600/10 p-3 rounded-lg group-hover:from-[#E50914]/20 group-hover:to-red-600/20 transition-all duration-300">
                            <FontAwesomeIcon
                              icon={step.icon}
                              className="w-6 h-6 text-[#E50914] transition-colors duration-300"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Title */}
                      <h3
                        className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#E50914] transition-colors duration-300"
                        style={{ fontFamily: 'Oswald, sans-serif' }}
                      >
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p
                        className="text-sm text-gray-600 leading-relaxed font-normal"
                        style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
                      >
                        {step.description}
                      </p>

                      {/* Bottom accent line */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E50914] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 pt-12 border-t border-gray-200">
          <button
            className="px-8 py-4 bg-gradient-to-r from-[#E50914] to-red-600 text-white font-bold text-lg rounded-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 active:scale-95 shadow-lg inline-flex items-center gap-3 group border border-[#E50914]"
            style={{ fontFamily: 'Noto Sans, sans-serif', borderWidth: '1px' }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Start Your Protection Plan
            <svg className="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>

          <span
            className="text-gray-600 text-sm"
            style={{ fontFamily: 'Noto Sans, sans-serif' }}
          >
            ✓ Professional installation and 24/7 support included
          </span>
        </div>
      </div>
    </section>
  );
}
