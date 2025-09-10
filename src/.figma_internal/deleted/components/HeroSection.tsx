import React, { useState, useEffect, useMemo } from 'react';
import { ArrowRight, Pause, Play } from 'lucide-react';
import heroAgriculturalImage from 'figma:asset/249521c0b499d2770d816fea2e05012a7b71f3a2.png';
import heroBusinessPartnershipImage from 'figma:asset/b21ae0e1a28b265d41d60fdf0b977554fccb7787.png';
import heroPortLogisticsImage from 'figma:asset/af23b55932f9a6dab20e51bf597583142ea1b1ae.png';
import heroAviationImage from 'figma:asset/cdf5dbbfc39c484670a56ac456c2a800d2425296.png';
import heroCorporateBuildingsImage from 'figma:asset/cc327b1f3c0289246abc4c0f468482f1e5cdeb8c.png';

interface HeroSectionProps {
  onPageChange: (page: string) => void;
}

export function HeroSection({ onPageChange }: HeroSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  // Memoize the slides array to prevent recreation on every render
  const slides = useMemo(() => [
    {
      image: heroAgriculturalImage,
      alt: "THONBRIDGE - Modern agricultural equipment and farming solutions",
      category: "AGRICULTURAL EXCELLENCE",
      title: "Driving Agricultural Innovation Through Advanced Solutions",
      description: "Comprehensive agricultural services and modern equipment solutions for enhanced productivity and sustainable farming practices."
    },
    {
      image: heroBusinessPartnershipImage,
      alt: "THONBRIDGE - Professional business partnership and collaboration",
      category: "GLOBAL PARTNERSHIPS",
      title: "Building Strategic Business Relationships Worldwide",
      description: "Fostering international collaborations and partnerships that drive mutual growth and success across global markets."
    },
    {
      image: heroPortLogisticsImage,
      alt: "THONBRIDGE - Maritime shipping port and global logistics operations",
      category: "LOGISTICS EXCELLENCE",
      title: "Optimizing Global Trade and Supply Chain Operations",
      description: "Advanced logistics solutions and port management services that streamline international trade and transportation."
    },
    {
      image: heroAviationImage,
      alt: "THONBRIDGE - Aviation excellence and global air transportation solutions",
      category: "AVIATION SERVICES",
      title: "Delivering World-Class Aviation and Transportation Solutions",
      description: "Premium aviation services and air transportation solutions that connect businesses and communities globally."
    },
    {
      image: heroCorporateBuildingsImage,
      alt: "THONBRIDGE - Corporate infrastructure and modern engineering excellence",
      category: "ENGINEERING EXCELLENCE",
      title: "Creating Sustainable Infrastructure for Tomorrow",
      description: "Innovative engineering solutions and infrastructure development that builds the foundation for future growth."
    }
  ], []);

  // Auto-advance slides every 8 seconds (only when not paused)
  useEffect(() => {
    if (isPaused) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);

    return () => clearInterval(timer);
  }, [slides.length, isPaused]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <section className="relative overflow-hidden hero-compact flex items-center" style={{
      background: 'linear-gradient(135deg, #001a3d 0%, #002d5f 25%, #003883 50%, #0047a0 75%, #0056bd 100%)'
    }}>
      {/* Background Images with Slideshow */}
      <div className="absolute inset-0 hero-slideshow">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-2000 ease-in-out overflow-hidden ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className={`w-full h-full object-cover opacity-45 slideshow-zoom-transition ${
                index === currentSlide ? 'scale-105' : 'scale-100'
              }`}
              style={{
                transform: index === currentSlide ? 'scale(1.05)' : 'scale(1)',
                transition: 'transform 2s ease-out, opacity 2s ease-in-out'
              }}
              loading={index === 0 ? 'eager' : 'lazy'}
              crossOrigin="anonymous"
            />
          </div>
        ))}
        {/* Further reduced dark blue gradient overlay for enhanced image visibility */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(135deg, rgba(0, 26, 61, 0.4) 0%, rgba(0, 45, 95, 0.3) 25%, rgba(0, 56, 131, 0.2) 50%, rgba(0, 71, 160, 0.3) 75%, rgba(0, 86, 189, 0.4) 100%)'
        }}></div>
      </div>
      
      {/* Main Content - Mobile Optimized */}
      <div className="relative z-20 w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="container-1920">
          <div className="max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl text-left">
          
            {/* Category Badge - Mobile Optimized */}
            <div className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-[#003883] text-white text-[9px] sm:text-[10px] md:text-xs uppercase tracking-wider mb-3 sm:mb-4 md:mb-6">
              <span style={{ fontFamily: 'ITC Avant Garde Gothic Std Bold', fontWeight: 500 }}>
                {currentSlideData.category}
              </span>
            </div>
            
            {/* Main Headline - Much Smaller on Mobile */}
            <h1 className="text-white mb-3 sm:mb-4 md:mb-6 leading-tight hero-title" style={{
              fontFamily: 'ITC Avant Garde Gothic Std Bold',
              fontWeight: 300
            }}>
              {currentSlideData.title}
            </h1>
            
            {/* Description - Mobile Optimized */}
            <p className="text-white/90 mb-4 sm:mb-6 md:mb-8 leading-relaxed hero-subtitle" style={{
              fontFamily: 'ITC Avant Garde Gothic Std Bold',
              fontWeight: 400
            }}>
              {currentSlideData.description}
            </p>

            {/* Dual CTA Buttons - Mobile Stack */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 items-stretch sm:items-start">
              <button 
                onClick={() => onPageChange('about')}
                className="inline-flex items-center justify-center gap-2 bg-[#003883] text-white px-3 py-2.5 sm:px-4 sm:py-3 md:px-6 md:py-3 hover:bg-[#002d6b] transition-colors duration-200 group text-[10px] sm:text-xs md:text-sm uppercase tracking-wider"
              >
                <span 
                  className="font-medium"
                  style={{ fontFamily: 'ITC Avant Garde Gothic Std Bold' }}
                >
                  Learn More About Us
                </span>
                <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>

              <button 
                onClick={() => onPageChange('contact')}
                className="inline-flex items-center justify-center gap-2 border border-white text-white px-3 py-2.5 sm:px-4 sm:py-3 md:px-6 md:py-3 hover:bg-white hover:text-[#2B2B2B] transition-colors duration-200 group text-[10px] sm:text-xs md:text-sm uppercase tracking-wider"
              >
                <span 
                  className="font-medium"
                  style={{ fontFamily: 'ITC Avant Garde Gothic Std Bold' }}
                >
                  Contact Us Today
                </span>
                <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Slideshow Controls - Mobile Responsive Positioning */}
      <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 lg:bottom-8 right-3 sm:right-4 md:right-6 lg:right-8 z-30 flex items-center gap-2 sm:gap-3 md:gap-4">
        {/* Navigation Dots - Mobile Optimized */}
        <div className="flex items-center space-x-1 sm:space-x-1.5 md:space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-[#003883] w-4 sm:w-6 md:w-8 h-1.5 sm:h-2 rounded-full' 
                  : 'bg-white/40 hover:bg-white/60 w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full'
              }`}
            />
          ))}
        </div>
        
        {/* Pause/Play Button - Mobile Optimized */}
        <button
          onClick={togglePause}
          className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border border-white/40 flex items-center justify-center hover:border-white/80 transition-colors duration-200"
        >
          {isPaused ? (
            <Play className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white ml-0.5" />
          ) : (
            <Pause className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" />
          )}
        </button>
      </div>

      {/* Progress Indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-white/20 z-30">
        <div 
          className="h-full bg-[#003883] transition-all duration-300"
          style={{ 
            width: `${((currentSlide + 1) / slides.length) * 100}%` 
          }}
        />
      </div>

    </section>
  );
}