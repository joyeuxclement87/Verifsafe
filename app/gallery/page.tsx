'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Camera, ChevronDown, ArrowsSort, X, ChevronLeft, ChevronRight } from 'tabler-icons-react';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { motion, AnimatePresence } from 'framer-motion';

type GalleryItem = {
  id: string;
  title: string;
  label: string;
  category: string;
  image: string;
};

type SanityGalleryItem = {
  _id: string;
  title: string;
  label: string;
  category: string;
  image?: { asset: { _ref: string } } | null;
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
        
        const formattedData = (data as SanityGalleryItem[]).map((item) => ({
          id: item._id,
          title: item.title,
          label: item.label,
          category: item.category,
          image: item.image ? urlFor(item.image).url() : '/equipment-1.png'
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
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden mt-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url("/hero-1.webp")` }}
        />
        <div className="absolute inset-0 bg-linear-to-r from-ink via-ink/90 to-ink/90" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center"
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <Camera size={16} className="text-[#D62828]" />
              <p className="text-label text-white">Our Work</p>
            </div>
            <h1 className="text-page-heading  text-white mb-6">
              Project Gallery
            </h1>
            <p className="text-subheading text-gray-200 max-w-2xl mx-auto mb-8">
              Explore our fire safety equipment installations, systems, and projects across different environments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="w-full py-12 sm:py-16 lg:py-20 bg-white relative overflow-hidden">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <div className="flex items-center justify-center gap-3 mb-5">
              <span aria-hidden="true" className="h-px w-8 bg-[#D62828]" />
              <p className="text-label text-gray-500">What You&apos;ll See</p>
              <span aria-hidden="true" className="h-px w-8 bg-[#D62828]" />
            </div>
            <h2 className="text-section-heading  text-gray-900 mb-6">
              Real Work. Real Protection.
            </h2>
            <p className="text-subheading text-gray-600 max-w-2xl mx-auto">
              A collection of our completed installations and equipment setups, showcasing the quality and reliability of our fire safety solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter and Gallery Grid Section */}
      <section className="w-full bg-paper py-16 sm:py-20 relative overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <div className="flex items-center justify-center gap-3 mb-5">
              <span aria-hidden="true" className="h-px w-8 bg-[#D62828]" />
              <p className="text-label text-gray-500">Browse By Category</p>
              <span aria-hidden="true" className="h-px w-8 bg-[#D62828]" />
            </div>
            <h2 className="text-section-heading  text-gray-900 mb-6">
              View by Type
            </h2>
          </motion.div>

          {/* Mobile Filter Toggle */}
          <div className="flex md:hidden justify-center mb-6">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-md text-gray-700 font-semibold hover:border-[#D62828] hover:text-[#D62828] transition-colors"
             
            >
              <ArrowsSort size={18} />
              {activeCategory}
              <ChevronDown size={16} className={`transition-transform duration-300 ${isFilterOpen ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {/* Filter Tabs */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className={`${isFilterOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row flex-wrap justify-center items-center gap-3 mb-12 sm:mb-16`}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setIsFilterOpen(false);
                }}
                className={`px-6 py-2.5 rounded-[10px] text-btn transition-colors duration-300 border w-full md:w-auto ${
                  activeCategory === category
                    ? 'bg-[#D62828] text-white border-[#D62828]'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-[#D62828] hover:text-[#D62828]'
                }`}
               
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Gallery Masonry / Loading State */}
          {isLoading ? (
            <div className="w-full py-20 flex flex-col items-center justify-center">
              <div className="w-12 h-12 border-4 border-[#D62828]/20 border-t-[#D62828] rounded-full animate-spin mb-4" />
              <p className="text-gray-500 text-body">
                Loading projects...
              </p>
            </div>
          ) : (
            <motion.div 
              layout
              className="columns-1 md:columns-2 lg:columns-3 gap-6 sm:gap-8 space-y-6 sm:space-y-8"
            >
              <AnimatePresence mode='popLayout'>
                {filteredItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    onClick={() => {
                      setCurrentImageIndex(index);
                      setLightboxOpen(true);
                    }}
                    className="break-inside-avoid group relative bg-white border border-gray-200 rounded-md overflow-hidden hover:border-[#D62828]/30 transition-colors duration-300 cursor-pointer"
                  >
                    <div className="relative w-full aspect-[4/3] bg-gray-100 overflow-hidden">
                      <Image src={item.image} alt={item.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute inset-x-0 bottom-0 p-6">
                        <span className="text-label text-white/70 mb-3 block">{item.label}</span>
                        <h3 className="text-card-title text-white leading-tight">{item.title}</h3>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}

          {!isLoading && filteredItems.length === 0 && (
            <div className="w-full py-20 text-center">
              <p className="text-gray-500 text-body">
                No projects found for this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && filteredItems[currentImageIndex] && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-md transition-opacity duration-300"
          >
            <div className="absolute inset-0 cursor-zoom-out" onClick={() => setLightboxOpen(false)} />
            <button onClick={() => setLightboxOpen(false)} className="absolute top-4 right-4 sm:top-8 sm:right-8 z-50 p-2 sm:p-3 bg-white/10 hover:bg-[#D62828] text-white rounded-full transition-colors">
              <X size={24} className="sm:w-8 sm:h-8" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); handlePrev(); }} className="hidden sm:flex absolute left-4 sm:left-8 z-50 p-3 bg-white/10 hover:bg-[#D62828] text-white rounded-full transition-colors">
              <ChevronLeft size={32} />
            </button>
            <div className="relative w-full max-w-6xl mx-auto flex flex-col justify-center items-center pointer-events-none px-4 sm:px-16" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
              <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="relative w-full h-[60vh] sm:h-[80vh] pointer-events-auto shadow-lg">
                <Image src={filteredItems[currentImageIndex].image} alt={filteredItems[currentImageIndex].title} fill className="object-contain" sizes="100vw" priority />
                <div className="absolute bottom-0 inset-x-0 p-6 bg-linear-to-t from-black/90 to-transparent text-center">
                   <h3 className="text-card-title text-white mb-2 tracking-wide">{filteredItems[currentImageIndex].title}</h3>
                   <p className="text-gray-300 text-body-sm font-semibold capitalize tracking-wider">{filteredItems[currentImageIndex].label}</p>
                </div>
              </motion.div>
            </div>
            <button onClick={(e) => { e.stopPropagation(); handleNext(); }} className="hidden sm:flex absolute right-4 sm:right-8 z-50 p-3 bg-white/10 hover:bg-[#D62828] text-white rounded-full transition-colors">
              <ChevronRight size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
