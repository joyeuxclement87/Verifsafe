'use client';

import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import Button from '@/components/ui/Button';

const faqs = [
  {
    question: 'What types of fire safety equipment do you supply?',
    answer:
      'We supply a comprehensive range of fire safety equipment including fire extinguishers, fire alarms, emergency lighting, fire hoses, safety signs, and more. All products meet international safety standards.',
  },
  {
    question: 'Do you offer installation services?',
    answer:
      'Yes, we provide professional installation services for all fire safety equipment. Our certified technicians ensure proper installation and compliance with safety regulations.',
  },
  {
    question: 'How often should fire extinguishers be serviced?',
    answer:
      'Fire extinguishers should be inspected annually and serviced every 5 years or after use. We provide regular maintenance and refilling services to keep your equipment in optimal condition.',
  },
  {
    question: 'Are your products certified?',
    answer:
      'Yes, all our products are certified and comply with international fire safety standards. We work only with approved manufacturers and suppliers.',
  },
  {
    question: 'Do you provide emergency services?',
    answer:
      'Yes, we offer 24/7 emergency support and can respond quickly to urgent fire safety needs. Contact us directly for immediate assistance.',
  },
  {
    question: 'What areas do you serve?',
    answer:
      'We serve the entire Rwanda region, including Kigali and surrounding areas. For inquiries outside our service area, please contact us for more information.',
  },
];

export default function FAQSection() {
  const reduceMotion = useReducedMotion();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="w-full py-20 sm:py-24 lg:py-32 bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,22rem)_1fr] gap-12 lg:gap-16 xl:gap-20 items-start">
          {/* Intro */}
          <div className="lg:sticky lg:top-24">
            <motion.div
              initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <div className="flex items-center gap-3 mb-5">
                <span aria-hidden="true" className="h-px w-8 bg-[#D62828]" />
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                  COMMON QUESTIONS
                </p>
              </div>

              <h2 className="text-section-heading text-gray-900">
                Answers before you ask.
              </h2>

              <p className="text-subheading text-gray-600 mt-6">
                Clear answers on our services, equipment, and maintenance coverage.
              </p>

              <div className="mt-10 pt-8 border-t border-gray-200">
                <p className="text-body-sm text-gray-600">
                  Can&rsquo;t find what you&rsquo;re looking for?
                </p>
                <Button
                  href="/contact#contact-form"
                  variant="secondary"
                  className="mt-4"
                >
                  Ask us directly
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Accordion */}
          <div className="border-t border-gray-200">
            {faqs.map((faq, index) => {
              const isOpen = expandedIndex === index;

              return (
                <div key={index} className="border-b border-gray-200">
                  <h3>
                    <button
                      id={`faq-trigger-${index}`}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${index}`}
                      onClick={() => toggleFAQ(index)}
                      className="group w-full py-5 sm:py-6 flex items-center justify-between gap-6 text-left transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D62828]"
                    >
                      <span
                        className={`text-base sm:text-lg font-semibold tracking-tight transition-colors duration-200 ${
                          isOpen ? 'text-gray-900' : 'text-gray-700 group-hover:text-gray-900'
                        }`}
                      >
                        {faq.question}
                      </span>

                      {/* Rotating plus — open state shown by rotation + color */}
                      <span
                        aria-hidden="true"
                        className={`shrink-0 relative w-4 h-4 transition-transform duration-200 motion-reduce:transition-none ${
                          isOpen ? 'rotate-45' : ''
                        }`}
                      >
                        <span
                          className={`absolute left-0 right-0 top-1/2 -translate-y-1/2 h-0.5 transition-colors duration-200 ${
                            isOpen ? 'bg-[#D62828]' : 'bg-gray-400 group-hover:bg-gray-600'
                          }`}
                        />
                        <span
                          className={`absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 transition-colors duration-200 ${
                            isOpen ? 'bg-[#D62828]' : 'bg-gray-400 group-hover:bg-gray-600'
                          }`}
                        />
                      </span>
                    </button>
                  </h3>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="panel"
                        id={`faq-panel-${index}`}
                        role="region"
                        aria-labelledby={`faq-trigger-${index}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: reduceMotion ? 0 : 0.25, ease: 'easeOut' }}
                        className="overflow-hidden"
                      >
                        <p className="text-body text-gray-600 pb-6 max-w-2xl">{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
