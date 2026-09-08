export type CtaKind = 'enquiry' | 'navigation';

export interface EquipmentProduct {
  title: string;
  tag?: string;
}

export interface EquipmentCategory {
  id: string;
  number: string;
  title: string;
  blurb: string;
  relatedText: string;
  cardDescription?: string;
  intro: string;
  image: string;
  imageAlt: string;
  cardImage?: string;
  cardAlt?: string;
  href: string;
  linkLabel: string;
  ctaKind: CtaKind;
  products: EquipmentProduct[];
}

export const equipmentCategories: EquipmentCategory[] = [
  {
    id: 'fire-extinguishers',
    number: '01',
    title: 'Fire Extinguishers',
    blurb: 'Portable suppression for specific classes of fire.',
    relatedText: 'Portable protection for a range of fire risks.',
    cardDescription:
      'Portable protection for a range of fire risks — from offices and kitchens to industrial environments.',
    intro:
      'Portable firefighting equipment designed to control small fires and protect lives before professional help arrives.',
    image: '/fire-extinguisher-guide.png',
    imageAlt: 'Fire extinguisher for commercial fire protection',
    cardImage: '/equipment-1.png',
    cardAlt: 'Fire extinguishers for commercial fire protection',
    href: '/equipments/fire-extinguishers',
    linkLabel: 'explore fire extinguishers',
    ctaKind: 'navigation',
    products: [
      { title: 'Water Extinguishers', tag: 'Class A' },
      { title: 'Foam Extinguishers', tag: 'Classes A · B' },
      { title: 'Dry Powder', tag: 'Classes A · B · C · E' },
      { title: 'CO₂ Extinguishers', tag: 'Classes B · E' },
      { title: 'Wet Chemical', tag: 'Classes A · F' },
    ],
  },
  {
    id: 'fire-alarm-systems',
    number: '02',
    title: 'Fire Alarm Systems',
    blurb: 'Networked sensors and control panels for early warning and evacuation.',
    relatedText: 'Detection and alarm solutions for buildings.',
    cardDescription:
      'Detection and alarm solutions designed to help buildings identify and respond to fire quickly.',
    intro:
      'Detection and alarm solutions that help buildings identify and respond to fire quickly, with clear evacuation alerts.',
    image: '/fire-alarm-chain.png',
    imageAlt: 'Fire alarm control panel and fire alarm systems',
    cardImage: '/equipment-2.png',
    cardAlt: 'Fire alarm control panel and detection system',
    href: '/equipments/fire-alarm-systems',
    linkLabel: 'explore fire alarm systems',
    ctaKind: 'navigation',
    products: [
      { title: 'Conventional Systems' },
      { title: 'Addressable Systems' },
      { title: 'Wireless Systems' },
    ],
  },
  {
    id: 'fire-hose-reels',
    number: '03',
    title: 'Fire Hose Reels',
    blurb: 'High-pressure water delivery for commercial and industrial sites.',
    relatedText: 'Continuous water supply for larger fires.',
    cardDescription:
      'Accessible firefighting equipment for suitable building environments and first-response use.',
    intro:
      'High-pressure water delivery systems that provide a continuous supply of water for larger fires in suitable environments.',
    image: '/fire-hose-guide.png',
    imageAlt: 'Fire hose reel installation for emergency and commercial use',
    cardImage: '/equipment-3.png',
    cardAlt: 'Fire hose reel mounted for emergency use',
    href: '/equipments/fire-hose-reels',
    linkLabel: 'explore fire hose reels',
    ctaKind: 'navigation',
    products: [
      { title: 'Fixed Hose Reels' },
      { title: 'Swinging Hose Reels' },
      { title: 'Automatic Hose Reels' },
    ],
  },
  {
    id: 'fire-detection-devices',
    number: '04',
    title: 'Fire Detection Devices',
    blurb: 'Precision smoke, heat, and flame sensors for the earliest detection.',
    relatedText: 'Devices that help identify fire risks early.',
    intro:
      'Precision smoke, heat and flame sensors that identify fire risks at the earliest possible stage and report to the system.',
    image: '/fire-detection-guide.png',
    imageAlt: 'Fire detection and smoke detection devices',
    href: '/equipments/fire-detection-devices',
    linkLabel: 'explore fire detection devices',
    ctaKind: 'navigation',
    products: [
      { title: 'Optical Smoke Detectors' },
      { title: 'Heat Detectors' },
      { title: 'Multi-Sensor Detectors' },
    ],
  },
  {
    id: 'emergency-lights',
    number: '05',
    title: 'Emergency Lights & Exit Signs',
    blurb: 'Backup illumination and exit signage for safe evacuation.',
    relatedText: 'Guidance that works when normal lighting fails.',
    cardDescription:
      'Clear, reliable emergency guidance that works when normal lighting fails.',
    intro:
      'Reliable backup illumination and exit signage that guide occupants safely during power failures.',
    image: '/emergency-light-guide.png',
    imageAlt: 'Emergency exit light and illuminated exit sign',
    cardImage: '/equipment-4.png',
    cardAlt: 'Emergency exit light and signage',
    href: '/equipments/emergency-lights',
    linkLabel: 'explore emergency lights',
    ctaKind: 'navigation',
    products: [
      { title: 'Non-Maintained Units' },
      { title: 'Maintained Units' },
      { title: 'Maintained Exit Signs' },
    ],
  },
  {
    id: 'fire-safety-accessories',
    number: '06',
    title: 'Fire Safety Accessories',
    blurb: 'Cabinets, blankets, and signage to support safety infrastructure.',
    relatedText: 'Cabinets, blankets and signage that complete the setup.',
    intro:
      'Essential hardware including cabinets, blankets and signage that support your wider fire safety infrastructure.',
    image: '/fire-safety-accessories-guide.png',
    imageAlt: 'Fire safety accessories and equipment cabinets',
    href: '/equipments/fire-safety-accessories',
    linkLabel: 'explore fire safety accessories',
    ctaKind: 'navigation',
    products: [
      { title: 'Cabinets & Stands' },
      { title: 'Fire Blankets' },
      { title: 'Mandatory Signage' },
    ],
  },
];