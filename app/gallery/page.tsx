'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Camera, Eye, Filter, Photo, ChevronDown, ArrowsSort, X, ChevronLeft, ChevronRight } from 'tabler-icons-react';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';

type GalleryItem = {
  id: string;
  title: string;
  label: string;
  category: string;
  image: string;
};



const categories = [
  'All',
  'Fire Extinguishers',
  'Fire Alarm Systems',
  'Hose Reels',
  'Detection Devices',
  'Emergency Lighting',
  'Installations'
];

export default function GalleryPage() {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('All');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  // Lightbox State
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Touch Swipe State
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  useEffect(() => {
    async function fetchGallery() {
      try {
        const query = `*[_type == "gallery"] | order(_createdAt desc) {
          _id,
          title,
          label,
          category,
          image
        }`;
        const data = await client.fetch(query);
        
        const formattedData = data.map((item: any) => ({
          id: item._id,
          title: item.title,
          label: item.label,
          category: item.category,
          image: item.image ? urlFor(item.image).url() : '/equipment-1.png' // Fallback image just in case
        }));
        
        setGalleryItems(formattedData);
      } catch (error) {
        console.error('Error fetching gallery items:', error);
      } finally {
        setIsLoading(false);
      }
    }
    
    fetchGallery();
  }, []);

  const filteredItems = activeCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1));
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') setLightboxOpen(false);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, filteredItems.length]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleTouchStart = (e: React.TouchEvent) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) handleNext(); // Swiped left
    if (distance < -50) handlePrev(); // Swiped right
    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="relative w-full h-96 sm:h-125 lg:h-150 flex items-center justify-center overflow-hidden mt-0">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("/hero-1.webp")`
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-black/85 via-black/90 to-black/95" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <div className="inline-block mb-4">
              <p
                className="text-white text-xs sm:text-sm font-bold tracking-widest uppercase px-4 py-2 bg-[#E53935]/10 rounded-full border border-[#E53935]/40 flex items-center gap-2 justify-center"
                style={{ fontFamily: 'Noto Sans, sans-serif' }}
              >
                <Camera size={16} />
                Our work
              </p>
            </div>

            <h1
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-4 leading-tight uppercase tracking-wider"
              style={{ fontFamily: 'Oswald, sans-serif' }}
            >
              Project Gallery
            </h1>

            <p
              className="text-base sm:text-lg lg:text-xl text-gray-200 max-w-2xl leading-relaxed font-normal"
              style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
            >
              Explore our fire safety equipment installations, systems, and projects across different environments.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="w-full py-12 sm:py-16 lg:py-20 bg-white relative overflow-hidden">
        <div className="absolute top-20 left-10 w-40 h-40 bg-red-100/20 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-gray-400/5 rounded-full blur-2xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10">
            <div className="inline-block mb-4">
              <p
                className="text-[#E53935] text-sm sm:text-base font-bold tracking-widest uppercase px-4 py-2 bg-red-50 rounded-full flex items-center gap-2 justify-center"
                style={{ fontFamily: 'Noto Sans, sans-serif' }}
              >
                <Eye size={16} />
                What you’ll see
              </p>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-3 leading-tight" style={{ fontFamily: 'Oswald, sans-serif' }}>
              Real Work. Real Protection.
            </h2>
            <div className="w-12 h-1 bg-[#E53935] rounded-full mx-auto mb-4" />
            <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto font-normal" style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}>
              A collection of our completed installations and equipment setups, showcasing the quality and reliability of our fire safety solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Gallery Grid Section */}
      <section className="w-full bg-linear-to-b from-gray-50 via-white to-gray-50 py-16 sm:py-20 relative overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center mb-10">
            <div className="inline-block mb-4">
              <p
                className="text-[#E53935] text-sm sm:text-base font-bold tracking-widest uppercase px-4 py-2 bg-red-50 rounded-full flex items-center gap-2 justify-center"
                style={{ fontFamily: 'Noto Sans, sans-serif' }}
              >
                <Filter size={16} />
                Browse by category
              </p>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight" style={{ fontFamily: 'Oswald, sans-serif' }}>
              View by Type
            </h2>
          </div>

          {/* Mobile Filter Toggle */}
          <div className="flex md:hidden justify-center mb-6">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-full shadow-sm text-gray-700 font-semibold hover:border-[#E53935] hover:text-[#E53935] transition-all active:scale-95"
              style={{ fontFamily: 'Noto Sans, sans-serif' }}
            >
              <ArrowsSort size={18} />
              {activeCategory}
              <ChevronDown size={16} className={`transition-transform duration-300 ${isFilterOpen ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {/* Filter Tabs */}
          <div className={`${isFilterOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row flex-wrap justify-center items-center gap-3 mb-12 sm:mb-16`}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setIsFilterOpen(false);
                }}
                className={`px-6 py-2.5 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 border w-full md:w-auto ${
                  activeCategory === category
                    ? 'bg-[#E53935] text-white border-[#E53935] shadow-md shadow-red-500/20 md:scale-105'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-[#E53935] hover:text-[#E53935]'
                }`}
                style={{ fontFamily: 'Noto Sans, sans-serif' }}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Masonry / Loading State */}
          {isLoading ? (
            <div className="w-full py-20 flex flex-col items-center justify-center">
              <div className="w-12 h-12 border-4 border-[#E53935]/20 border-t-[#E53935] rounded-full animate-spin mb-4" />
              <p className="text-gray-500 text-lg" style={{ fontFamily: 'Noto Sans, sans-serif' }}>
                Loading projects...
              </p>
            </div>
          ) : (
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 sm:gap-8 space-y-6 sm:space-y-8">
              {filteredItems.map((item, index) => (
                <div
                  key={item.id}
                  onClick={() => {
                    setCurrentImageIndex(index);
                    setLightboxOpen(true);
                  }}
                  className="break-inside-avoid group relative bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-[#E53935] hover:shadow-2xl transition-all duration-300 cursor-pointer"
                >
                  {/* Image Container */}
                  <div className="relative w-full aspect-[4/3] bg-gray-100 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Hover Content */}
                    <div className="absolute inset-x-0 bottom-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#E53935] text-white text-xs font-bold uppercase tracking-wider rounded-full mb-3" style={{ fontFamily: 'Noto Sans, sans-serif' }}>
                        <Photo size={14} />
                        {item.label}
                      </div>
                      <h3 className="text-xl font-bold text-white leading-tight" style={{ fontFamily: 'Oswald, sans-serif' }}>
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {!isLoading && filteredItems.length === 0 && (
            <div className="w-full py-20 text-center">
              <p className="text-gray-500 text-lg" style={{ fontFamily: 'Noto Sans, sans-serif' }}>
                No projects found for this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && filteredItems[currentImageIndex] && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-md transition-opacity duration-300">
          {/* Close Area */}
          <div className="absolute inset-0 cursor-zoom-out" onClick={() => setLightboxOpen(false)} />

          {/* Close Button */}
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 sm:top-8 sm:right-8 z-50 p-2 sm:p-3 bg-white/10 hover:bg-[#E53935] text-white rounded-full backdrop-blur-md transition-colors"
          >
            <X size={24} className="sm:w-8 sm:h-8" />
          </button>

          {/* Previous Button (Hidden on Mobile) */}
          <button
            onClick={(e) => { e.stopPropagation(); handlePrev(); }}
            className="hidden sm:flex absolute left-4 sm:left-8 z-50 p-3 bg-white/10 hover:bg-[#E53935] text-white rounded-full backdrop-blur-md transition-colors"
          >
            <ChevronLeft size={32} />
          </button>

          {/* Main Image Container */}
          <div 
            className="relative w-full max-w-6xl mx-auto flex flex-col justify-center items-center pointer-events-none px-4 sm:px-16"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="relative w-full h-[60vh] sm:h-[80vh] pointer-events-auto shadow-2xl transition-transform duration-500 scale-100 animate-in zoom-in-95">
              <Image
                src={filteredItems[currentImageIndex].image}
                alt={filteredItems[currentImageIndex].title}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
              
              {/* Image Info Bar */}
              <div className="absolute bottom-0 inset-x-0 p-6 bg-linear-to-t from-black/90 to-transparent text-center">
                 <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 tracking-wide" style={{ fontFamily: 'Oswald, sans-serif' }}>
                   {filteredItems[currentImageIndex].title}
                 </h3>
                 <p className="text-gray-300 text-sm sm:text-base font-medium uppercase tracking-wider" style={{ fontFamily: 'Noto Sans, sans-serif' }}>
                   {filteredItems[currentImageIndex].label}
                 </p>
              </div>
            </div>
          </div>

          {/* Next Button (Hidden on Mobile) */}
          <button
            onClick={(e) => { e.stopPropagation(); handleNext(); }}
            className="hidden sm:flex absolute right-4 sm:right-8 z-50 p-3 bg-white/10 hover:bg-[#E53935] text-white rounded-full backdrop-blur-md transition-colors"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}
    </main>
  );
}
