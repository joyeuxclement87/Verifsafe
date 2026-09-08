export type ServiceCtaKind = 'enquiry' | 'navigation';

export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  points: string[];
  image: string;
  imageAlt: string;
  cta: { label: string; href: string; kind: ServiceCtaKind };
}

export const services: Service[] = [
  {
    id: 'equipment-supply',
    number: '01',
    title: 'Equipment Supply',
    description:
      'From extinguishers and alarms to hose reels and safety accessories, we supply fire protection equipment for different environments.',
    points: ['Extinguishers', 'Fire alarm systems', 'Fire hose reels', 'Safety accessories'],
    image: '/service-1.png',
    imageAlt: 'Fire safety equipment and extinguishers',
    cta: { label: 'Explore equipment', href: '/equipments', kind: 'navigation' },
  },
  {
    id: 'installation',
    number: '02',
    title: 'Installation',
    description:
      'Professional installation of fire alarm systems, detection devices and safety equipment, configured around your building.',
    points: ['Fire alarm systems', 'Detection devices', 'Safety equipment'],
    image: '/service-2.png',
    imageAlt: 'Technician installing fire alarm and detection equipment',
    cta: { label: 'Discuss your project', href: '/contact#contact-form', kind: 'enquiry' },
  },
  {
    id: 'inspection-testing',
    number: '03',
    title: 'Inspection & Testing',
    description:
      'Routine inspection and testing that helps identify faults, gaps and areas requiring attention in your fire safety systems.',
    points: ['Identifies faults & gaps', 'Routine testing', 'Verified performance'],
    image: '/service-3.png',
    imageAlt: 'Fire safety technician inspecting fire protection equipment',
    cta: { label: 'Request an inspection', href: '/contact#contact-form', kind: 'enquiry' },
  },
  {
    id: 'maintenance',
    number: '04',
    title: 'Maintenance',
    description:
      'Ongoing servicing that keeps fire protection systems working as intended and reliable over time.',
    points: ['Regular servicing', 'System reliability', 'Prevents failure'],
    image: '/service-5.png',
    imageAlt: 'Technician servicing fire protection equipment',
    cta: { label: 'Request a quote', href: '/contact#contact-form', kind: 'enquiry' },
  },
  {
    id: 'refilling',
    number: '05',
    title: 'Extinguisher Refilling',
    description:
      'Refilling and servicing fire extinguishers to keep them ready and effective for emergency use.',
    points: ['Quick service', 'Ready for use', 'Emergency readiness'],
    image: '/refile.jpeg',
    imageAlt: 'Fire extinguisher being refilled and serviced',
    cta: { label: 'Request a quote', href: '/contact#contact-form', kind: 'enquiry' },
  },
  {
    id: 'fire-safety-training',
    number: '06',
    title: 'Fire Safety Training',
    description:
      'Practical training that helps teams identify fire risks, use extinguishers correctly and respond in an emergency.',
    points: ['Fire risk identification', 'Correct extinguisher use', 'Emergency response'],
    image: '/fire training 2.jpg',
    imageAlt: 'Fire safety training session for a team',
    cta: { label: 'Book training', href: '/contact#contact-form', kind: 'enquiry' },
  },
  {
    id: 'first-aid-training',
    number: '07',
    title: 'First Aid Training',
    description:
      'Basic first aid training that equips individuals with the skills to respond quickly and effectively during emergencies.',
    points: ['Emergency response', 'Workplace safety', 'Life-saving skills'],
    image: '/first aid.png',
    imageAlt: 'First aid training session',
    cta: { label: 'Request a quote', href: '/contact#contact-form', kind: 'enquiry' },
  },
];