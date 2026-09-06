'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'tabler-icons-react';
import { faqs } from './faqData';
import Button from '@/components/ui/Button';

export default function FAQSection() {
  const reduceMotion = useReducedMotion();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section
      aria-labelledby="faq-heading"
      className="w-full bg-paper py-20 sm:py-24 lg:py-32"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,26rem)_1fr] gap-12 lg:gap-16 xl:gap-20 items-start">
          {/* Intro — editorial left column */}
          <div className="lg:sticky lg:top-24">
            <motion.div
              initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <div className="flex items-center justify-between gap-4 mb-6">
                <p className="flex items-center gap-2.5">
                  <span aria-hidden="true" className="h-px w-8 bg-[#D62828]" />
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft">
                    frequently asked
                  </span>
                </p>
                <span
                  aria-hidden="true"
                  className="hidden sm:block text-[10px] font-mono tracking-widest text-muted"
                >
                  VS / FAQ — 06
                </span>
              </div>

              <h2 id="faq-heading" className="text-section-heading text-ink">
                <span className="text-highlight">clear answers</span> before you get started.
              </h2>

              <p className="text-subheading text-gray-600 mt-5 max-w-md">
                A few things clients commonly want to know about fire protection equipment,
                installation and ongoing service.
              </p>

              <div className="mt-10 pt-8 border-t border-line">
                <p className="text-body-sm text-gray-600">
                  Can&rsquo;t find what you&rsquo;re looking for?
                </p>
                <Button
                  href="/contact#contact-form"
                  variant="secondary"
                  icon={<MessageCircle size={18} strokeWidth={2} />}
                  className="mt-4"
                >
                  Ask us directly
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Accordion — editorial right column */}
          <div className="border-t border-line">
            {faqs.map((faq, index) => {
              const isOpen = expandedIndex === index;

              return (
                <div key={index} className="border-b border-line">
                  <h3>
                    <button
                      id={`faq-trigger-${index}`}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${index}`}
                      onClick={() => toggleFAQ(index)}
                      className="group w-full py-5 sm:py-6 flex items-start gap-4 sm:gap-6 text-left transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D62828]"
                    >
                      <span
                        aria-hidden="true"
                        className={`w-8 shrink-0 pt-0.5 text-index tabular-nums transition-colors duration-200 ${
                          isOpen ? 'text-[#D62828]' : 'text-gray-400 group-hover:text-[#D62828]'
                        }`}
                      >
                        {faq.number}
                      </span>

                      <span
                        className={`flex-1 text-list-title leading-snug transition-colors duration-200 ${
                          isOpen ? 'text-gray-900' : 'text-gray-700 group-hover:text-gray-900'
                        }`}
                      >
                        {faq.question}
                      </span>

                      {/* Plus / minus control — open state collapses the vertical bar */}
                      <span
                        aria-hidden="true"
                        className="relative shrink-0 w-4 h-4 mt-1"
                      >
                        <span
                          className={`absolute left-0 right-0 top-1/2 -translate-y-1/2 h-0.5 rounded-full transition-colors duration-200 motion-reduce:transition-none ${
                            isOpen ? 'bg-[#D62828]' : 'bg-gray-400 group-hover:bg-gray-600'
                          }`}
                        />
                        <span
                          className={`absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 rounded-full transition-all duration-200 motion-reduce:transition-none ${
                            isOpen ? 'scale-y-0 bg-[#D62828]' : 'scale-y-100 bg-gray-400 group-hover:bg-gray-600'
                          }`}
                        />
                      </span>
                    </button>
                  </h3>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key={index}
                        id={`faq-panel-${index}`}
                        role="region"
                        aria-labelledby={`faq-trigger-${index}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: reduceMotion ? 0 : 0.25, ease: 'easeOut' }}
                        className="overflow-hidden"
                      >
                        <div className="pt-1 sm:pl-14 pb-6">
                          <p className="text-body text-gray-600 max-w-2xl">{faq.answer}</p>
                          {faq.href && faq.cta && (
                            <Link
                              href={faq.href}
                              className="group/link mt-3 inline-flex items-center gap-1.5 text-body-sm font-semibold text-[#D62828] transition-colors duration-200 hover:text-[#A91D1D] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D62828]"
                            >
                              {faq.cta}
                              <ArrowRight
                                size={16}
                                strokeWidth={2}
                                aria-hidden="true"
                                className="transition-transform duration-200 group-hover/link:translate-x-1 motion-reduce:transition-none"
                              />
                            </Link>
                          )}
                        </div>
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