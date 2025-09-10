import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Logo } from './Logo';

interface NavigationProps {
  onPageChange: (page: string) => void;
  currentPage: string;
}

export function Navigation({ onPageChange, currentPage }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Detect if we're past the hero section (approximately)
      const heroHeight = window.innerHeight * 0.8; // Hero is 80vh
      setScrolled(window.scrollY > heroHeight - 100);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when page changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [currentPage]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'industries', label: 'Industries' },
    { id: 'contact', label: 'Contact Us' }
  ];

  const handleNavClick = (pageId: string) => {
    onPageChange(pageId);
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <div className={`fixed top-0 left-0 right-0 z-nav transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
          : currentPage === 'home' 
            ? 'bg-transparent' 
            : 'bg-[#2B2B2B]/70 backdrop-blur-sm'
      }`}>
        <nav className="relative">
          <div className="container-1920">
            <div className={`flex items-center transition-all duration-300 ${
              scrolled ? 'h-[60px] sm:h-[70px]' : 'h-[70px] sm:h-[80px]'
            }`}>
              {/* Logo - Mobile Responsive */}
              <div className="flex-shrink-0 mr-4 sm:mr-8 lg:mr-12">
                <Logo 
                  size={scrolled ? "sm" : "md"} 
                  variant={scrolled ? "blue" : "light"} 
                  onClick={() => handleNavClick('home')}
                />
              </div>

              {/* Desktop Navigation - Smaller and Close to Logo */}
              <div className="hidden lg:flex items-center space-x-6">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`relative px-2 py-2 ${
                      scrolled 
                        ? 'text-[#515960] hover:text-[#003883]' 
                        : 'text-white hover:text-[#003883]'
                    } text-[11px] xl:text-[12px] uppercase tracking-[0.3px] transition-all duration-300 group ${
                      currentPage === item.id 
                        ? 'text-[#003883]' 
                        : ''
                    }`}
                    style={{
                      fontFamily: 'ITC Avant Garde Gothic Std Bold',
                      fontWeight: currentPage === item.id ? 700 : 500
                    }}
                  >
                    {item.label}
                    
                    {/* Active Blue Underline */}
                    <div className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#003883] transition-all duration-300 ${
                      currentPage === item.id 
                        ? 'opacity-100 scale-x-100' 
                        : 'opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100'
                    }`}></div>
                  </button>
                ))}
              </div>

              {/* Right side spacer to push search to the right */}
              <div className="flex-grow"></div>

              {/* Right side - Search icon only */}
              <div className="hidden lg:flex items-center space-x-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    className={`w-48 h-9 px-3 pr-10 rounded-md border transition-all duration-300 text-sm ${
                      scrolled 
                        ? 'bg-white border-[#e5e5e5] text-[#2B2B2B] placeholder-[#515960] focus:border-[#003883] focus:ring-1 focus:ring-[#003883]' 
                        : 'bg-white/10 border-white/20 text-white placeholder-white/70 focus:bg-white/20 focus:border-white/40 backdrop-blur-sm'
                    } focus:outline-none`}
                  />
                  <div className={`absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none ${
                    scrolled ? 'text-[#515960]' : 'text-white/70'
                  }`}>
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="11" cy="11" r="8"/>
                      <path d="21 21l-4.35-4.35"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Mobile Hamburger Menu */}
              <div className="lg:hidden">
                <button 
                  onClick={toggleMobileMenu}
                  className={`p-2 ${
                    scrolled 
                      ? 'text-[#515960] hover:text-[#003883]' 
                      : 'text-white hover:text-gray-300'
                  } transition-colors duration-200 hamburger ${scrolled ? 'hamburger-scrolled' : ''} ${mobileMenuOpen ? 'open' : ''}`}
                  aria-label="Toggle mobile menu"
                >
                  <span className="hamburger-line"></span>
                  <span className="hamburger-line"></span>
                  <span className="hamburger-line"></span>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Navigation Overlay */}
      <div 
        className={`mobile-nav-overlay ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Navigation Menu */}
      <div className={`mobile-nav-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="p-6">
          {/* Mobile Logo */}
          <div className="mb-8">
            <Logo 
              size="sm" 
              variant="light" 
              onClick={() => handleNavClick('home')}
            />
          </div>

          {/* Mobile Navigation Items */}
          <nav className="space-y-2">
            {navItems.map((item, index) => (
              <div
                key={item.id}
                className={`mobile-nav-item ${mobileMenuOpen ? 'animate' : ''}`}
                style={{ transitionDelay: `${index * 100 + 100}ms` }}
              >
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-4 py-4 text-white text-[14px] sm:text-[16px] uppercase tracking-[1px] transition-all duration-300 hover:bg-[#003883] hover:px-6 ${
                    currentPage === item.id 
                      ? 'bg-[#003883] text-white px-6' 
                      : ''
                  }`}
                  style={{
                    fontFamily: 'ITC Avant Garde Gothic Std Bold',
                    fontWeight: currentPage === item.id ? 900 : 500
                  }}
                >
                  {item.label}
                </button>
              </div>
            ))}
          </nav>

          {/* Mobile Contact Info */}
          <div className="mt-12 pt-8 border-t border-[#515960]">
            <div className="text-white/60 text-sm mb-4" style={{ fontFamily: 'ITC Avant Garde Gothic Std Bold' }}>
              Contact Us
            </div>
            <div className="text-white text-sm space-y-2" style={{ fontFamily: 'ITC Avant Garde Gothic Std Bold' }}>
              <div>Thonbridge@gmail.com</div>
              <div>+1 4039882116</div>
              <div>+234 703 2168 996</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}