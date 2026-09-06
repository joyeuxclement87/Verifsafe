'use client';

import { Flame, Tool, Bolt, Walk, Calendar } from 'tabler-icons-react';
import Button from '@/components/ui/Button';

export default function FireSafetyTraining() {
  const trainingPoints = [
    {
      iconName: 'fire',
      title: 'How to identify fire risks',
      description: 'Learn to spot structural and electrical vulnerabilities.'
    },
    {
      iconName: 'extinguisher',
      title: 'How to use fire extinguishers correctly',
      description: 'Master proper handling and operation techniques.'
    },
    {
      iconName: 'bolt',
      title: 'Emergency response procedures',
      description: 'Know the right steps when every second counts.'
    },
    {
      iconName: 'walk',
      title: 'Evacuation planning and safety practices',
      description: 'Create and practice effective escape routes.'
    }
  ];

  const renderIcon = (iconName: string) => {
    switch(iconName) {
      case 'fire': return <Flame size={24} className="text-[#D62828]" />;
      case 'extinguisher': return <Tool size={24} className="text-[#D62828]" />;
      case 'bolt': return <Bolt size={24} className="text-[#D62828]" />;
      case 'walk': return <Walk size={24} className="text-[#D62828]" />;
      default: return null;
    }
  };

  return (
    <section className="w-full bg-white py-20 sm:py-24 lg:py-32">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-5">
            <span aria-hidden="true" className="h-px w-8 bg-[#D62828]" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
              Education & Training
            </p>
          </div>

          <h2 className="text-section-heading text-gray-900">
            Fire Safety Training
          </h2>

          <p className="text-subheading text-gray-600 mt-6 max-w-2xl">
            Our fire safety training programs equip individuals and teams with the knowledge and confidence to respond effectively during emergencies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {trainingPoints.map((point, index) => (
            <div
              key={index}
              className="border-t border-gray-200 pt-8"
            >
              <div className="mb-4">
                {renderIcon(point.iconName)}
              </div>

              <h3 className="text-card-title text-gray-900 mb-2">
                {point.title}
              </h3>

              <p className="text-body-sm text-gray-600">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        <p className="text-subheading text-gray-700 max-w-3xl border-l-2 border-[#D62828] pl-6 mb-12">
          Training is practical, easy to understand, and designed for real-life situations.
        </p>

        <div>
          <Button href="/contact#contact-form" icon={<Calendar size={18} strokeWidth={2} />}>
            Book Training Session
          </Button>
        </div>
      </div>
    </section>
  );
}