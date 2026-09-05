'use client';

import Image from 'next/image';
import { Clock } from 'tabler-icons-react';
import DeploymentWorkflow from '@/components/sections/process/DeploymentWorkflow';
import WhoWeServe from '@/components/sections/marketing/WhoWeServe';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { serviceCategories } from '@/lib/services';
import Button from '@/components/ui/Button';

export default function ServicesPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const contentType = response.headers.get('content-type') || '';
      const rawText = await response.text();
      let data: { message?: string } | null = null;

      if (rawText) {
        try {
          data = contentType.includes('application/json') ? JSON.parse(rawText) : JSON.parse(rawText);
        } catch {
          data = { message: 'Our team is currently unavailable. Please try again shortly.' };
        }
      }

      if (!response.ok) {
        throw new Error(data?.message || 'Unable to send your request.');
      }

      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      setTimeout(() => setSubmitted(false), 4000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to send your request.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = serviceCategories.flatMap((category) => category.services);

  const matterItems = [
    { number: '01', title: 'Prevention First', desc: 'Fire incidents can happen at any time, and without proper preparation, the consequences can be severe.' },
    { number: '02', title: 'Real Protection', desc: 'Our services are designed not just to meet requirements, but to provide real protection.' },
    { number: '03', title: 'Rapid Response', desc: 'Helping you prevent risks, respond effectively, and minimize damage when emergencies occur.' }
  ];

  const nextSteps = [
    { step: '01', text: 'We review your request' },
    { step: '02', text: 'We analyze your safety needs' },
    { step: '03', text: 'We send a tailored quotation' },
  ];

  const renderServiceCard = (service: { image: string; title: string; description: string; features: string[] }, index: number) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: 'easeOut' }}
      className="group flex flex-col border border-gray-200 rounded-lg overflow-hidden bg-white transition-colors duration-200 hover:border-[#D62828]/40"
    >
      <div className="relative w-full h-44 bg-gray-100 overflow-hidden">
        <Image src={service.image} alt={service.title} fill className="object-cover" />
      </div>
      <div className="p-6 pt-5 flex flex-col flex-grow">
        <h3 className="text-card-title text-gray-900 mb-2">{service.title}</h3>
        <p className="text-body text-gray-600 flex-grow mb-5">{service.description}</p>
        <ul className="mb-6">
          {service.features.map((feature, featureIndex) => (
            <li key={featureIndex} className="py-1 border-t border-gray-100 text-body-sm text-gray-600 first:border-t-0">
              {feature}
            </li>
          ))}
        </ul>
        <div className="mt-auto">
          <Button
            href="/contact#contact-form"
            variant="text"
          >
            {service.title === 'Fire Equipment Supply' ? 'View Equipments' : 'Request a Quote'}
          </Button>
        </div>
      </div>
    </motion.div>
  );

  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="relative w-full h-96 sm:h-[500px] lg:h-[600px] flex items-center justify-center overflow-hidden mt-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("/hero2.jpg")`,
            backgroundAttachment: 'fixed',
          }}
        />
        <div className="absolute inset-0 bg-linear-to-r from-ink via-ink/90 to-ink/90" />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center"
          >
            <div className="flex items-center gap-3 mb-5 justify-center">
              <span aria-hidden="true" className="h-px w-8 bg-white/60" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                What We Offer
              </p>
            </div>

            <h1 className="text-page-heading  text-white mb-4 tracking-wider">
              Professional Fire Protection Services
            </h1>

            <p className="text-subheading text-gray-200 max-w-2xl">
              We provide fire safety services which ensure equipment and systems are installed, maintained, and ready when needed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Equipment & Systems Section */}
      <section className="relative w-full bg-white py-20 sm:py-24 lg:py-32">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-center mb-14 sm:mb-16"
          >
            <div className="flex items-center gap-3 mb-5 justify-center">
              <span aria-hidden="true" className="h-px w-8 bg-[#D62828]" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                Equipment &amp; Systems
              </p>
            </div>

            <h2 className="text-section-heading  text-gray-900">
              Supply, Installation &amp; Maintenance
            </h2>

            <p className="text-subheading text-gray-600 max-w-2xl mx-auto mt-6">
              We deliver fire protection services which support businesses, institutions, and homes with reliable safety systems. From supply to maintenance, our services are designed to ensure continuous protection.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.slice(0, 5).map((service, index) => renderServiceCard(service, index))}
          </div>
        </div>
      </section>

      {/* Training & Safety Section */}
      <section className="relative w-full bg-neutral py-20 sm:py-24 lg:py-32">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-center mb-14 sm:mb-16"
          >
            <div className="flex items-center gap-3 mb-5 justify-center">
              <span aria-hidden="true" className="h-px w-8 bg-[#D62828]" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                Training &amp; Safety
              </p>
            </div>

            <h2 className="text-section-heading  text-gray-900">
              Fire Awareness &amp; First Aid Training
            </h2>

            <p className="text-subheading text-gray-600 max-w-2xl mx-auto mt-6">
              Comprehensive training programs designed to educate and equip individuals with essential fire safety and emergency response skills.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {services.slice(5, 7).map((service, index) => renderServiceCard(service, index))}
          </div>
        </div>
      </section>

      {/* Why Our Services Matter Section */}
      <section className="relative w-full bg-white py-20 sm:py-24 lg:py-32">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-center mb-14 sm:mb-16"
          >
            <div className="flex items-center gap-3 mb-5 justify-center">
              <span aria-hidden="true" className="h-px w-8 bg-[#D62828]" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                Why It Matters
              </p>
            </div>

            <h2 className="text-section-heading  text-gray-900">
              Why Our Services Matter
            </h2>

            <p className="text-subheading text-gray-600 max-w-2xl mx-auto mt-6">
              Safety is not optional.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <ol className="border-t border-gray-200">
              {matterItems.map((item) => (
                <li key={item.number} className="border-b border-gray-200 py-7">
                  <div className="flex items-start gap-6">
                    <span className="shrink-0 w-10 pt-0.5 text-index text-gray-400 tabular-nums">
                      {item.number}
                    </span>
                    <div>
                      <h3 className="text-card-title text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-body text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>

            <div className="border border-gray-200 rounded-lg p-8">
              <h3 className="text-card-title text-gray-900 mb-2">Your Safety Partner</h3>
              <p className="text-body text-gray-600">
                From equipment supply to training, we ensure your fire safety systems are always ready and reliable.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-6 mt-6 border-t border-gray-200">
                <div>
                  <div className="text-card-title font-bold text-[#D62828]">24/7</div>
                  <div className="text-body-sm text-gray-500 mt-1">Support</div>
                </div>
                <div>
                  <div className="text-card-title font-bold text-[#D62828]">100%</div>
                  <div className="text-body-sm text-gray-500 mt-1">Reliable</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DeploymentWorkflow />

      <WhoWeServe />

      {/* CTA Section */}
      <section className="relative w-full py-20 sm:py-24 lg:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("/hero-3.webp")`,
            backgroundAttachment: 'fixed',
          }}
        />
        <div className="absolute inset-0 bg-linear-to-r from-ink via-ink/90 to-ink/90" />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="flex items-center gap-3 mb-5 justify-center">
              <span aria-hidden="true" className="h-px w-8 bg-white/60" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                Get Started
              </p>
            </div>
            <h2 className="text-section-heading  text-white">
              Take the Next Step
            </h2>
            <p className="text-subheading text-gray-300 max-w-2xl mx-auto mt-6">
              Ensure your property is protected with reliable fire safety systems and expert support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Enquiry Section */}
      <section id="project-form" className="relative w-full bg-neutral py-20 sm:py-24 lg:py-32">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16">

            {/* Left Column: Info */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="flex flex-col gap-6"
            >
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span aria-hidden="true" className="h-px w-8 bg-[#D62828]" />
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                    Project Enquiry
                  </p>
                </div>
                <h2 className="text-section-heading  text-gray-900 mb-3">
                  Tell Us About Your Project
                </h2>
                <p className="text-subheading text-gray-600 max-w-lg">
                  Share your fire safety needs and we&apos;ll recommend the right solution and send you a tailored quote.
                </p>
              </div>

              <p className="text-body-sm text-gray-500 flex items-center gap-2">
                <Clock size={16} className="text-[#D62828] shrink-0" />
                We respond within 24 hours with a full proposal.
              </p>

              {/* What happens next */}
              <div className="border border-gray-200 rounded-lg p-6 bg-white">
                <h4 className="text-list-title text-gray-900 mb-5">What happens next?</h4>
                <ol>
                  {nextSteps.map((item) => (
                    <li key={item.step} className="flex items-center gap-4 py-3 border-t border-gray-100 first:border-t-0">
                      <span className="w-8 pt-0.5 text-index text-gray-400 tabular-nums">
                        {item.step}
                      </span>
                      <span className="text-body-sm text-gray-600">{item.text}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </motion.div>

            {/* Right Column: Form */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            >
              <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 sm:p-8 lg:p-10 rounded-lg border border-gray-200 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#D62828]" />

                {/* Name & Email in a row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-label text-gray-700 block mb-2" htmlFor="name">Name</label>
                    <input id="name" type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:border-[#D62828] focus:ring-2 focus:ring-[#D62828]/10 outline-none transition-all duration-300 placeholder-gray-400 text-gray-900 text-body-sm" style={{ borderWidth: '1px' }} placeholder="Your name" />
                  </div>
                  <div>
                    <label className="text-label text-gray-700 block mb-2" htmlFor="email">Email</label>
                    <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:border-[#D62828] focus:ring-2 focus:ring-[#D62828]/10 outline-none transition-all duration-300 placeholder-gray-400 text-gray-900 text-body-sm" style={{ borderWidth: '1px' }} placeholder="your@email.com" />
                  </div>
                </div>

                {/* Phone & Service in a row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-label text-gray-700 block mb-2" htmlFor="phone">Phone</label>
                    <input id="phone" type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:border-[#D62828] focus:ring-2 focus:ring-[#D62828]/10 outline-none transition-all duration-300 placeholder-gray-400 text-gray-900 text-body-sm" style={{ borderWidth: '1px' }} placeholder="+250 xxx xxx xxx" />
                  </div>
                  <div>
                    <label className="text-label text-gray-700 block mb-2" htmlFor="service">Service Type</label>
                    <select id="service" name="service" value={formData.service} onChange={handleChange} required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:border-[#D62828] focus:ring-2 focus:ring-[#D62828]/10 outline-none transition-all duration-300 text-gray-900 text-body-sm" style={{ borderWidth: '1px' }}>
                      <option value="" disabled>Select a service type</option>
                      <option value="Fire Equipment Supply">Fire Equipment Supply</option>
                      <option value="Installation Services">Installation Services</option>
                      <option value="Inspection & Testing">Inspection &amp; Testing</option>
                      <option value="Fire Extinguisher Refilling">Fire Extinguisher Refilling</option>
                      <option value="Maintenance Services">Maintenance Services</option>
                      <option value="Fire Safety Awareness Training">Fire Safety Awareness Training</option>
                      <option value="First Aid Training">First Aid Training</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="text-label text-gray-700 block mb-2" htmlFor="message">Message</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:border-[#D62828] focus:ring-2 focus:ring-[#D62828]/10 outline-none transition-all duration-300 placeholder-gray-400 text-gray-900 resize-none text-body-sm" style={{ borderWidth: '1px' }} placeholder="Describe your request..." />
                </div>

                {/* Submit button */}
                <Button
                  type="submit"
                  loading={isSubmitting}
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? 'Sending...' : 'Request a Quote'}
                </Button>

                {/* Error alert */}
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-lg border border-red-200 bg-red-50 p-4"
                  >
                    <p className="text-body-sm font-semibold text-red-700">Your message could not be sent</p>
                    <p className="mt-1 text-body-sm text-red-600">{error}</p>
                  </motion.div>
                )}

                {/* Success alert */}
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-lg border border-emerald-200 bg-emerald-50 p-4"
                  >
                    <p className="text-body-sm font-semibold text-emerald-700">Thank you for your request</p>
                    <p className="mt-1 text-body-sm text-emerald-600">Our team will review your request and follow up shortly.</p>
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}