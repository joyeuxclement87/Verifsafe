'use client';

import { 
  Shield,
  Ruler2,
  Building,
  CircleCheck,
  Flame,
  Thermometer,
  Droplet,
  Spray,
  Bulb,
  BuildingWarehouse,
  Home,
  Check,
  FileText
} from 'tabler-icons-react';
import Link from 'next/link';

export default function FireExtinguishersPage() {
  const extinguisherTypes = [
    {
      name: 'Dry Powder (ABC) Extinguishers',
      iconName: 'spray',
      emoji: '🔥',
      tagline: 'Most common and multi-purpose',
      usedFor: ['Class A – solid materials (wood, paper)', 'Class B – flammable liquids (fuel, oil)', 'Class C – gases'],
      bestFor: ['Homes', 'Offices', 'Vehicles', 'Warehouses'],
      advantage: 'Works on most fire types'
    },
    {
      name: 'CO₂ (Carbon Dioxide) Extinguishers',
      iconName: 'thermometer',
      emoji: '⚡',
      tagline: 'Best for electrical fires',
      usedFor: ['Electrical equipment', 'Class B fires (liquids)'],
      bestFor: ['Server rooms', 'Offices', 'Electrical panels'],
      advantage: 'Leaves no residue'
    },
    {
      name: 'Water Extinguishers',
      iconName: 'droplet',
      emoji: '💧',
      tagline: 'Basic but effective',
      usedFor: ['Class A fires only (wood, paper, textiles)'],
      bestFor: ['Homes', 'Schools', 'Offices'],
      advantage: 'Not safe for electrical or liquid fires'
    },
    {
      name: 'Foam (AFFF) Extinguishers',
      iconName: 'spray',
      emoji: '🧴',
      tagline: 'For liquid fires',
      usedFor: ['Class A & B fires'],
      bestFor: ['Fuel stations', 'Garages', 'Workshops'],
      advantage: 'Prevents fire re-ignition'
    },
    {
      name: 'Wet Chemical Extinguishers',
      iconName: 'droplet',
      emoji: '🍳',
      tagline: 'Specialized for kitchen fires',
      usedFor: ['Class K / F (cooking oils & fats)'],
      bestFor: ['Restaurants', 'Hotels', 'Kitchens'],
      advantage: 'Cools and seals burning oil'
    },
    {
      name: 'Metal Fire (Class D) Extinguishers',
      iconName: 'bulb',
      emoji: '🔩',
      tagline: 'For industrial use',
      usedFor: ['Combustible metals (magnesium, aluminum)'],
      bestFor: ['Factories', 'Specialized industries'],
      advantage: 'Specialized for metal fires'
    },
    {
      name: 'Clean Agent Extinguishers',
      iconName: 'bulb',
      emoji: '🧼',
      tagline: 'Modern alternative to CO₂',
      usedFor: ['Electrical fires', 'Sensitive equipment'],
      bestFor: ['Data centers', 'Labs', 'Offices'],
      advantage: 'No residue, safe for electronics'
    }
  ];

  const sizes = [
    {
      category: 'Small Sizes (Portable / Personal Use)',
      emoji: '🔹',
      sizes: ['1kg / 1L', '2kg / 2L'],
      bestFor: 'Cars, small rooms, home kitchens'
    },
    {
      category: 'Medium Sizes (Standard Use)',
      emoji: '🔹',
      sizes: ['4kg / 4L', '6kg / 6L'],
      bestFor: 'Offices, shops, small businesses',
      note: 'Most commonly used size: 6kg ABC'
    },
    {
      category: 'Large Sizes (High-Risk Areas)',
      emoji: '🔹',
      sizes: ['9kg / 9L', '12kg'],
      bestFor: 'Warehouses, large offices, commercial buildings'
    },
    {
      category: 'Extra Large / Industrial',
      emoji: '🔹',
      sizes: ['25kg / 25L', '50kg (wheeled units)'],
      bestFor: 'Factories, fuel depots, airports',
      note: 'Usually trolley-mounted (not handheld)'
    }
  ];

  const buyerGuide = [
    {
      scenario: 'Home / Office',
      recommendation: '6kg ABC',
      iconName: 'home'
    },
    {
      scenario: 'Electrical Areas',
      recommendation: 'CO₂',
      iconName: 'bulb'
    },
    {
      scenario: 'Kitchen / Restaurant',
      recommendation: 'Wet Chemical',
      iconName: 'spray'
    },
    {
      scenario: 'Fuel / Garage',
      recommendation: 'Foam or ABC',
      iconName: 'bulb'
    },
    {
      scenario: 'Industrial',
      recommendation: '9kg+ or trolley units',
      iconName: 'warehouse'
    }
  ];

  const renderIcon = (iconName: string) => {
    switch(iconName) {
      case 'home': return <Home size={32} className="text-[#E53935]" />;
      case 'bulb': return <Bulb size={32} className="text-[#E53935]" />;
      case 'spray': return <Spray size={32} className="text-[#E53935]" />;
      case 'warehouse': return <BuildingWarehouse size={32} className="text-[#E53935]" />;
      default: return null;
    }
  };

  const applications = [
    'Homes',
    'Offices',
    'Vehicles',
    'Warehouses',
    'Commercial buildings',
    'Restaurants',
    'Factories',
    'Data Centers'
  ];

  const features = [
    'Easy to use in emergencies',
    'Quick fire control',
    'Portable and accessible',
    'Helps reduce fire damage',
    'Multiple types for different fire classes',
    'OSHA compliant'
  ];

  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="w-full h-96 bg-linear-to-r from-[#E53935] to-[#B71C1C] relative overflow-hidden pt-40 flex items-center justify-center">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="relative z-10 text-center">
          <div className="mb-6 flex justify-center">
            <Flame size={64} className="text-white" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Oswald, sans-serif' }}>
            Fire Extinguishers
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto px-4">
            Portable firefighting equipment designed to control small fires before they spread.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-8">
          <div className="shrink-0">
              <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-[#E53935]/10">
                <Shield size={32} className="text-[#E53935]" />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Oswald, sans-serif' }}>
                🛡️ Overview
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Each type is designed for specific fire classes. Using the right one is critical.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Types Section */}
      <section className="w-full py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Oswald, sans-serif' }}>
              🔥 Fire Extinguisher Types
            </h2>
            <p className="text-lg text-gray-600">Each type is designed for specific fire classes</p>
          </div>

          <div className="space-y-8">
            {extinguisherTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden border-l-4 border-[#E53935]">
                <div className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-3xl">{type.emoji}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">{type.name}</h3>
                      <p className="text-gray-600 font-semibold">{type.tagline}</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3">Used for:</h4>
                      <ul className="space-y-2">
                        {type.usedFor.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-700">
                            <CircleCheck size={20} className="text-[#E53935] shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-900 mb-3">Best for:</h4>
                      <div className="space-y-2 mb-4">
                        {type.bestFor.map((place, i) => (
                          <div key={i} className="inline-block bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700 mr-2 mb-2">
                            {place}
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 p-3 bg-[#E53935]/10 rounded-lg border-l-2 border-[#E53935]">
                        <p className="text-sm font-semibold text-gray-900">✓ Key Advantage:</p>
                        <p className="text-sm text-gray-700">{type.advantage}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sizes Section */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Oswald, sans-serif' }}>
              📏 Fire Extinguisher Sizes
            </h2>
            <p className="text-lg text-gray-600">Sizes vary depending on environment and risk level</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {sizes.map((sizeCategory, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 border-t-4 border-[#E53935]">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{sizeCategory.emoji} {sizeCategory.category}</h3>
                
                <div className="space-y-2 mb-4">
                  {sizeCategory.sizes.map((size, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-[#E53935]"></div>
                      <span className="text-lg font-semibold text-gray-900">{size}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-gray-50 p-3 rounded-lg mb-3">
                  <p className="text-sm text-gray-600"><span className="font-bold">Best for:</span> {sizeCategory.bestFor}</p>
                </div>

                {sizeCategory.note && (
                  <div className="bg-[#E53935]/10 p-3 rounded-lg border-l-2 border-[#E53935]">
                    <p className="text-sm font-semibold text-gray-900">👉 {sizeCategory.note}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Buyer's Guide Section */}
      <section className="w-full py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Oswald, sans-serif' }}>
              🛒 Simple Buyer&apos;s Guide
            </h2>
            <p className="text-lg text-gray-600">Quick recommendations for different environments</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {buyerGuide.map((guide, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow text-center border-t-4 border-[#E53935]">
                <div className="flex justify-center mb-4">
                  {renderIcon(guide.iconName)}
                </div>
                <h3 className="font-bold text-gray-900 mb-3 text-sm">{guide.scenario}</h3>
                <div className="bg-[#E53935]/10 p-3 rounded-lg">
                  <p className="font-bold text-[#E53935] text-lg">{guide.recommendation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="w-full py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-8 mb-12">
            <div className="shrink-0">
              <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-[#E53935]/10">
                <Building size={32} className="text-[#E53935]" />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'Oswald, sans-serif' }}>
                🏢 Applications
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {applications.map((app, index) => (
              <div key={index} className="bg-white rounded-lg p-6 border-l-4 border-[#E53935] shadow-md hover:shadow-lg transition-shadow">
                <p className="text-gray-900 font-semibold text-center">{app}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features & Benefits */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-8 mb-12">
            <div className="shrink-0">
              <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-[#E53935]/10">
                <CircleCheck size={32} className="text-[#E53935]" />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'Oswald, sans-serif' }}>
                ✅ Features & Benefits
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="shrink-0">
                  <CircleCheck size={24} className="text-[#E53935]" />
                </div>
                <p className="text-lg text-gray-700">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 bg-linear-to-r from-[#FF4D4D] to-[#E53935] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Oswald, sans-serif' }}>
            📞 Get the Right Fire Extinguisher
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Choose the perfect fire extinguisher for your needs and ensure complete fire safety.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#E53935] font-bold text-lg rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl uppercase tracking-wide"
            style={{ fontFamily: 'Oswald, sans-serif' }}
          >
            <FileText size={18} strokeWidth={1} />
            Request Quote
          </Link>
        </div>
      </section>

      {/* Related Products Section */}
      <section className="w-full py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12" style={{ fontFamily: 'Oswald, sans-serif' }}>
            Related Fire Safety Products
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link 
              href="/equipments/fire-alarm-systems"
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border-t-4 border-[#E53935]"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 text-center mb-2">Fire Alarm Systems</h3>
                <p className="text-gray-600 text-center">Early detection systems for comprehensive protection</p>
              </div>
            </Link>

            <Link 
              href="/equipments"
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border-t-4 border-[#E53935]"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 text-center mb-2">All Equipment</h3>
                <p className="text-gray-600 text-center">View complete range of fire safety solutions</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
