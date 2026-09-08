'use client';

import { useState } from 'react';
import { ArrowUpRight, CircleCheck } from 'tabler-icons-react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

const serviceOptions = [
  'Fire Equipment Supply',
  'Installation Services',
  'Inspection & Testing',
  'Fire Extinguisher Refilling',
  'Maintenance Services',
  'Fire Awareness Training',
  'First Aid',
  'Fire Extinguishers',
  'Fire Alarm Systems',
  'Fire Hose Reels',
  'Fire Detection Devices',
  'Emergency Lights & Exit Signs',
  'Fire Safety Accessories',
  'Other / Not sure',
];

const inputClassName =
  'w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:bg-white focus:border-[#D62828] focus:ring-2 focus:ring-[#D62828]/10 outline-none transition-all duration-300 placeholder-gray-400 text-gray-900 text-base';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const rawText = await response.text();
      let data: { message?: string } | null = null;

      if (rawText) {
        try {
          data = JSON.parse(rawText);
        } catch {
          data = { message: 'Unable to send your enquiry right now.' };
        }
      }

      if (!response.ok) {
        throw new Error(data?.message || 'Unable to send your enquiry right now.');
      }

      setSubmitted(true);
      setFormData({ name: '', phone: '', email: '', service: '', message: '' });
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch {
      setError('Something went wrong while sending your enquiry. Please try again in a moment.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 sm:p-8 lg:p-10 rounded-md border border-gray-200"
    >

      {/* Name */}
      <div>
        <label htmlFor="name" className="text-label text-gray-700 block mb-2">
          Name <span aria-hidden="true" className="text-[#D62828]">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          autoComplete="name"
          placeholder="Your full name"
          className={inputClassName}
        />
      </div>

      {/* Phone */}
      <div className="mt-6">
        <label htmlFor="phone" className="text-label text-gray-700 block mb-2">
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          autoComplete="tel"
          inputMode="tel"
          placeholder="+250 xxx xxx xxx"
          className={inputClassName}
        />
      </div>

      {/* Email */}
      <div className="mt-6">
        <label htmlFor="email" className="text-label text-gray-700 block mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          autoComplete="email"
          placeholder="you@example.com"
          className={inputClassName}
        />
        <p className="text-body-sm text-gray-400 mt-1.5">
          Optional — only if you&apos;d like a reply by email.
        </p>
      </div>

      {/* Service */}
      <div className="mt-6">
        <label htmlFor="service" className="text-label text-gray-700 block mb-2">
          Service / Equipment <span aria-hidden="true" className="text-[#D62828]">*</span>
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
          className={inputClassName}
        >
          <option value="" disabled>
            Select what you need
          </option>
          {serviceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div className="mt-6">
        <label htmlFor="message" className="text-label text-gray-700 block mb-2">
          Message <span aria-hidden="true" className="text-[#D62828]">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          placeholder="Describe your request..."
          className={`${inputClassName} resize-none`}
        />
      </div>

      <Button
        type="submit"
        loading={isSubmitting}
        disabled={isSubmitting}
        icon={
          <ArrowUpRight
            size={18}
            strokeWidth={2}
            className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0 motion-reduce:group-hover:translate-y-0"
          />
        }
        className="w-full !rounded-lg !h-12 !px-7 !bg-[#E53935] hover:!bg-[#C62828] !shadow-[0_10px_24px_-10px_rgba(229,57,53,0.5)] font-semibold mt-8"
      >
        {isSubmitting ? 'sending…' : 'send enquiry'}
      </Button>

      {error && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          role="alert"
          className="mt-4 rounded-md border border-red-200 bg-red-50 p-4"
        >
          <p className="text-body-sm font-semibold text-red-700">Your enquiry could not be sent.</p>
          <p className="mt-1 text-body-sm text-red-600">{error}</p>
        </motion.div>
      )}

      {submitted && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          role="status"
          className="mt-4 rounded-md border border-emerald-200 bg-emerald-50 p-4"
        >
          <p className="flex items-center gap-2 text-body-sm font-semibold text-emerald-700">
            <CircleCheck size={18} strokeWidth={2} className="shrink-0" aria-hidden="true" />
            thanks — your enquiry has been received.
          </p>
          <p className="mt-1 text-body-sm text-emerald-600">
            We&apos;ll get back to you as soon as possible.
          </p>
        </motion.div>
      )}
    </form>
  );
}