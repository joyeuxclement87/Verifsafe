export interface FAQItem {
  number: string;
  question: string;
  answer: string;
  href?: string;
  cta?: string;
}

export const faqs: FAQItem[] = [
  {
    number: '01',
    question: 'What fire protection equipment do you supply?',
    answer:
      'Fire extinguishers, fire alarm systems, fire hose reels, emergency lights, exit signs, detection devices and safety accessories — for offices, commercial buildings and industrial sites.',
    href: '/equipments',
    cta: 'Browse the equipment range',
  },
  {
    number: '02',
    question: 'Can you install fire alarm and detection systems?',
    answer:
      'Yes. We install fire alarm and detection systems and other fire safety equipment, configuring everything carefully around your building.',
    href: '/services',
    cta: 'Explore our services',
  },
  {
    number: '03',
    question: 'How often should fire protection equipment be inspected or maintained?',
    answer:
      'Equipment should be inspected and maintained on a regular schedule so protection stays reliable. We run checks that help identify faults or gaps, and provide scheduled servicing to keep systems working as intended.',
  },
  {
    number: '04',
    question: 'Do you refill and service fire extinguishers?',
    answer:
      'Yes. We refill and service fire extinguishers to keep them ready for use, and can include them in an ongoing maintenance programme.',
  },
  {
    number: '05',
    question: "Can you assess an existing building's fire safety?",
    answer:
      'We begin with an assessment of the building, its occupancy, risks and existing protection, then design the right solution around what we find.',
  },
  {
    number: '06',
    question: 'Do you provide fire safety training?',
    answer:
      'Yes. We offer fire safety awareness and first aid training sessions covering how to identify fire risks, use extinguishers correctly, respond in an emergency and plan evacuations.',
  },
];