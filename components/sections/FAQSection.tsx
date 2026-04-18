'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

export default function FAQSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What types of fire safety equipment do you supply?',
      answer: 'We supply a comprehensive range of fire safety equipment including fire extinguishers, fire alarms, emergency lighting, fire hoses, safety signs, and more. All products meet international safety standards.',
    },
    {
      question: 'Do you offer installation services?',
      answer: 'Yes, we provide professional installation services for all fire safety equipment. Our certified technicians ensure proper installation and compliance with safety regulations.',
    },
    {
      question: 'How often should fire extinguishers be serviced?',
      answer: 'Fire extinguishers should be inspected annually and serviced every 5 years or after use. We provide regular maintenance and refilling services to keep your equipment in optimal condition.',
    },
    {
      question: 'Are your products certified?',
      answer: 'Yes, all our products are certified and comply with international fire safety standards. We work only with approved manufacturers and suppliers.',
    },
    {
      question: 'Do you provide emergency services?',
      answer: 'Yes, we offer 24/7 emergency support and can respond quickly to urgent fire safety needs. Contact us directly for immediate assistance.',
    },
    {
      question: 'What areas do you serve?',
      answer: 'We serve the entire Rwanda region, including Kigali and surrounding areas. For inquiries outside our service area, please contact us for more information.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="w-full py-14 sm:py-18 lg:py-21 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-red-100/20 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-gray-400/5 rounded-full blur-2xl animate-bounce" style={{ animationDelay: '1s' }} />

      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-18">
          {/* Section Label */}
          <div className="inline-block mb-4">
            <p
              className="text-[#E53935] text-sm sm:text-base font-bold tracking-widest uppercase px-4 py-2 bg-red-50 rounded-full flex items-center gap-2"
              style={{ fontFamily: 'Noto Sans, sans-serif' }}
            >
              <FontAwesomeIcon icon={faQuestionCircle} className="w-4 h-4" />
              Common Questions
            </p>
          </div>

          {/* Main Heading */}
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-3 leading-tight"
            style={{ fontFamily: 'Oswald, sans-serif' }}
          >
            Frequently Asked{' '}
            <span className="text-[#E53935]">Questions</span>
          </h2>

          {/* Subheading */}
          <p
            className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-normal leading-relaxed"
            style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
          >
            Find answers to common questions about our fire protection services and products.
          </p>
        </div>

        {/* FAQs Container */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group relative bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden"
              style={{ borderWidth: '1px', opacity: 0.95 }}
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#E53935] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 sm:px-8 py-5 flex items-center justify-between text-left hover:bg-gray-50/50 transition-colors duration-300"
              >
                <h3
                  className="text-base sm:text-lg font-bold text-gray-900 flex-1 group-hover:text-[#E53935] transition-colors duration-300"
                  style={{ fontFamily: 'Noto Sans, sans-serif' }}
                >
                  {faq.question}
                </h3>
                <div className="flex-shrink-0 ml-4 flex items-center justify-center w-8 h-8 bg-red-50 group-hover:bg-[#E53935] rounded-full transition-colors duration-300">
                  <FontAwesomeIcon
                    icon={expandedIndex === index ? faMinus : faPlus}
                    className="w-4 h-4 text-[#E53935] group-hover:text-white transition-colors duration-300"
                  />
                </div>
              </button>

              {/* FAQ Answer */}
              {expandedIndex === index && (
                <div className="px-6 sm:px-8 pb-5 border-t border-gray-100">
                  <p
                    className="text-base text-gray-700 leading-relaxed"
                    style={{ fontFamily: 'Noto Sans, sans-serif' }}
                  >
                    {faq.answer}
                  </p>
                </div>
              )}

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E53935] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

