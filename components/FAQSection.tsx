'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

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
    <section className="w-full py-16 sm:py-20 lg:py-24 bg-white">
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <p
            className="text-sm sm:text-base font-bold text-[#E50914] uppercase tracking-widest mb-4"
            style={{ fontFamily: 'Noto Sans, sans-serif' }}
          >
            Common Questions
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-6"
            style={{ fontFamily: 'Oswald, sans-serif' }}
          >
            Frequently Asked{' '}
            <span className="text-[#E50914]">Questions</span>
          </h2>
          <p
            className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: 'Noto Sans, sans-serif' }}
          >
            Find answers to common questions about our fire protection services and products.
          </p>
        </div>

        {/* FAQs Container */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 border rounded-lg border-gray-200 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 sm:px-8 py-5 flex items-center justify-between text-left hover:bg-gray-100 transition-colors duration-300"
              >
                <h3
                  className="text-base sm:text-lg font-bold text-gray-900 flex-1"
                  style={{ fontFamily: 'Noto Sans, sans-serif' }}
                >
                  {faq.question}
                </h3>
                <div className="flex-shrink-0 ml-4 flex items-center justify-center w-6 h-6">
                  <FontAwesomeIcon
                    icon={expandedIndex === index ? faMinus : faPlus}
                    className="w-5 h-5 text-[#E50914] transition-all duration-300"
                  />
                </div>
              </button>

              {/* FAQ Answer */}
              {expandedIndex === index && (
                <div className="px-6 sm:px-8 pb-5 border-t border-gray-200">
                  <p
                    className="text-base text-gray-700 leading-relaxed"
                    style={{ fontFamily: 'Noto Sans, sans-serif' }}
                  >
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

