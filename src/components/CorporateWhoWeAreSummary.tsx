import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useScrollAnimation } from './hooks/useScrollAnimation';

interface CorporateWhoWeAreSummaryProps {
  onPageChange: (page: string) => void;
}

export function CorporateWhoWeAreSummary({ onPageChange }: CorporateWhoWeAreSummaryProps) {
  // Scroll animation hooks
  const headerAnimation = useScrollAnimation({ threshold: 0.1 });
  const imageAnimation = useScrollAnimation({ threshold: 0.1, delay: 300 });
  const ctaAnimation = useScrollAnimation({ threshold: 0.1, delay: 100 });

  return (
    <section className="relative bg-white overflow-hidden">
      {/* Strategic Header Section with Images */}
      <div className="bg-white border-b border-[#E5E7EB]">
        <div className="container-1920 py-16 sm:py-20">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Content Column - 7 columns */}
            <div 
              ref={headerAnimation.ref}
              className={`lg:col-span-7 fade-in-up ${headerAnimation.isVisible ? 'visible' : ''}`}
            >
              {/* Strategic Label */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-0.5 bg-[#003883]"></div>
                <span className="text-[#003883] uppercase tracking-[2px] text-sm" style={{
                  fontFamily: 'ITC Avant Garde Gothic Std Bold',
                  fontWeight: 600
                }}>
                  Corporate Overview
                </span>
              </div>

              {/* Main Heading - Enhanced Size and Boldness */}
              <h2 className="text-[#2B2B2B] mb-8" style={{
                fontFamily: 'ITC Avant Garde Gothic Std Bold',
                fontWeight: 900,
                fontSize: 'clamp(3.5rem, 7vw, 5.5rem)',
                lineHeight: '0.95',
                letterSpacing: '-0.02em'
              }}>
                DRIVING GLOBAL<br />
                INDUSTRIAL EXCELLENCE
              </h2>

              {/* Strategic Description */}
              <div className="max-w-3xl space-y-6 text-[#515960]" style={{
                fontFamily: 'ITC Avant Garde Gothic Std Bold',
                fontWeight: 400,
                fontSize: '1.125rem',
                lineHeight: '1.7'
              }}>
                <p>
                  THONBRIDGE represents the convergence of strategic thinking and operational execution in global industrial markets. Our integrated approach combines deep sector expertise with systematic methodologies to deliver measurable outcomes.
                </p>
                <p>
                  Through disciplined execution and strategic partnerships, we enable organizations to navigate complex international markets while maintaining operational excellence and sustainable growth trajectories.
                </p>
              </div>
            </div>

            {/* Right Image Column - 5 columns */}
            <div className="lg:col-span-5">
              <div 
                ref={imageAnimation.ref}
                className={`relative fade-in-right ${imageAnimation.isVisible ? 'visible' : ''}`}
              >
                {/* Main Corporate Image */}
                <div className="relative h-[500px]">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1687945727613-a4d06cc41024?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZmFjaWxpdHklMjBjb3Jwb3JhdGUlMjBib2FyZHJvb218ZW58MXx8fHwxNzU1NDc4Mjg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="THONBRIDGE Corporate Operations"
                    className="w-full h-full object-cover filter contrast-110 saturate-90"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2B2B2B]/80 via-transparent to-transparent"></div>
                  
                  {/* Corporate Badge */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/95 backdrop-blur-sm p-4 border-l-4 border-[#003883]">
                      <div className="text-[#2B2B2B] uppercase tracking-[1px] mb-1" style={{
                        fontFamily: 'ITC Avant Garde Gothic Std Bold',
                        fontWeight: 700,
                        fontSize: '0.875rem'
                      }}>
                        Global Operations
                      </div>
                      <div className="text-[#515960] text-sm" style={{
                        fontFamily: 'ITC Avant Garde Gothic Std Bold',
                        fontWeight: 400,
                        lineHeight: '1.4'
                      }}>
                        Strategic facilities across 25+ countries
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Corporate Profile CTA Section - Dark Blue Gradient */}
      <div className="relative overflow-hidden" style={{
        background: 'linear-gradient(135deg, #001a3d 0%, #002d5f 25%, #003883 50%, #0047a0 75%, #0056bd 100%)'
      }}>
        {/* Dark blue gradient overlay for depth */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(135deg, rgba(0, 26, 61, 0.8) 0%, rgba(0, 45, 95, 0.7) 25%, rgba(0, 56, 131, 0.6) 50%, rgba(0, 71, 160, 0.7) 75%, rgba(0, 86, 189, 0.8) 100%)'
        }}></div>
        
        <div className="relative container-1920 py-12">
          <div 
            ref={ctaAnimation.ref}
            className={`flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 fade-in-up ${ctaAnimation.isVisible ? 'visible' : ''}`}
          >
            
            {/* Left Content */}
            <div className="max-w-2xl">
              <h3 className="text-white mb-4 uppercase tracking-[1px]" style={{
                fontFamily: 'ITC Avant Garde Gothic Std Bold',
                fontWeight: 700,
                fontSize: '1.125rem'
              }}>
                Strategic Partnership
              </h3>
              <p className="text-white" style={{
                fontFamily: 'ITC Avant Garde Gothic Std Bold',
                fontWeight: 400,
                fontSize: '1rem',
                lineHeight: '1.6'
              }}>
                Explore how our integrated approach to global markets and operational excellence can advance your strategic objectives.
              </p>
            </div>

            {/* Right Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => onPageChange('about')}
                className="bg-[#003883] text-white px-8 py-4 hover:bg-[#002d6b] transition-all duration-300 flex items-center gap-3 group"
              >
                <span className="uppercase tracking-[1px]" style={{
                  fontFamily: 'ITC Avant Garde Gothic Std Bold',
                  fontWeight: 600,
                  fontSize: '0.875rem'
                }}>
                  Corporate Profile
                </span>
                <div className="w-4 h-0.5 bg-white group-hover:w-6 transition-all duration-300"></div>
              </button>
              
              <button 
                onClick={() => onPageChange('contact')}
                className="bg-transparent text-white border border-white/30 px-8 py-4 hover:border-white hover:bg-white hover:text-[#003883] transition-all duration-300 flex items-center gap-3 group"
              >
                <span className="uppercase tracking-[1px]" style={{
                  fontFamily: 'ITC Avant Garde Gothic Std Bold',
                  fontWeight: 600,
                  fontSize: '0.875rem'
                }}>
                  Connect
                </span>
                <div className="w-4 h-0.5 bg-current group-hover:w-6 transition-all duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}