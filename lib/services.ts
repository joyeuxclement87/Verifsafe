export interface Service {
  id: string;
  image: string;
  title: string;
  description: string;
  features: string[];
}

export interface ServiceCategory {
  id: string;
  label: string;
  description: string;
  services: Service[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'supply',
    label: 'Equipment Supply',
    description: 'Certified fire safety equipment delivered ready to protect.',
    services: [
      {
        id: 'equipment-supply',
        image: '/service-1.png',
        title: 'Fire Equipment Supply',
        description: 'Providing certified fire safety equipment for reliable protection in different environments.',
        features: ['Extinguishers', 'Alarms', 'Hose reels', 'Safety accessories']
      },
      {
        id: 'refilling',
        image: '/refile.jpeg',
        title: 'Fire Extinguisher Refilling',
        description: 'Refilling and servicing extinguishers to keep them ready and effective for emergency use.',
        features: ['Quick service', 'Reliable', 'Essential for safety']
      }
    ]
  },
  {
    id: 'installation',
    label: 'Installation & Maintenance',
    description: 'Expert setup and upkeep that keeps systems dependable for years.',
    services: [
      {
        id: 'installation',
        image: '/service-2.png',
        title: 'Installation Services',
        description: 'Professional installation of fire protection systems to ensure proper setup and performance.',
        features: ['Fire alarm systems', 'Detection devices', 'Safety equipment']
      },
      {
        id: 'maintenance',
        image: '/service-5.png',
        title: 'Maintenance Services',
        description: 'Ongoing maintenance to ensure fire protection systems remain reliable over time.',
        features: ['Prevents failure', 'Regular servicing', 'System reliability']
      }
    ]
  },
  {
    id: 'inspection',
    label: 'Inspection & Testing',
    description: 'Routine checks that verify your systems perform when it matters most.',
    services: [
      {
        id: 'inspection-testing',
        image: '/service-3.png',
        title: 'Inspection & Testing',
        description: 'Routine inspection and testing to ensure fire safety systems function correctly and meet required standards.',
        features: ['Businesses', 'Offices', 'Compliance checks']
      }
    ]
  },
  {
    id: 'training',
    label: 'Fire Safety Training',
    description: 'Practical skills that prepare your people to respond with confidence.',
    services: [
      {
        id: 'awareness-training',
        image: '/fire training 2.jpg',
        title: 'Fire Safety Awareness Training',
        description: 'Training programs which educate individuals and teams on fire prevention, emergency response, and proper use of fire safety equipment.',
        features: ['Staff training', 'Organizations', 'Workplaces']
      },
      {
        id: 'first-aid',
        image: '/first aid.png',
        title: 'First Aid Training',
        description: 'Basic first aid training which equips individuals with the skills to respond quickly and effectively during emergencies.',
        features: ['Emergency response', 'Workplace safety', 'Life-saving skills']
      }
    ]
  }
];