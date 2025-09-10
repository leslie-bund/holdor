import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { CorporateWhoWeAre } from './CorporateWhoWeAre';
import { CorporateWhyChoose } from './CorporateWhyChoose';
import { useScrollAnimation } from './hooks/useScrollAnimation';

interface AboutPageProps {
  onPageChange: (page: string) => void;
}

export function AboutPage({ onPageChange }: AboutPageProps) {
  // Scroll animation hooks for different sections
  const heroAnimation = useScrollAnimation({ threshold: 0.1 });
  const badgeAnimation = useScrollAnimation({ threshold: 0.1, delay: 100 });
  const titleAnimation = useScrollAnimation({ threshold: 0.1, delay: 200 });
  const contentAnimation = useScrollAnimation({ threshold: 0.1, delay: 300 });
  const statsAnimation = useScrollAnimation({ threshold: 0.1, delay: 400 });

  return (
    <div className="bg-white">
      {/* Corporate Hero Section - Dark Blue Gradient */}
      <section className="py-12 sm:py-16 lg:py-20 xl:py-24 relative overflow-hidden" style={{
        background: 'linear-gradient(135deg, #001a3d 0%, #002d5f 25%, #003883 50%, #0047a0 75%, #0056bd 100%)'
      }}>
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1738938744238-0f79909b742a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb3Jwb3JhdGUlMjBvZmZpY2UlMjBidWlsZGluZyUyMGJ1c2luZXNzJTIwaGVhZHF1YXJ0ZXJzfGVufDF8fHx8MTc1NTQzNDA2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="THONBRIDGE Corporate Headquarters"
            className="w-full h-full object-cover opacity-20"
          />
          {/* Dark blue gradient overlay */}
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(135deg, rgba(0, 26, 61, 0.8) 0%, rgba(0, 45, 95, 0.7) 25%, rgba(0, 56, 131, 0.6) 50%, rgba(0, 71, 160, 0.7) 75%, rgba(0, 86, 189, 0.8) 100%)'
          }}></div>
        </div>
        
        <div className="relative container-1920">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center">
            
            <div 
              ref={heroAnimation.ref}
              className={`fade-in-up ${heroAnimation.isVisible ? 'visible' : ''}`}
            >
              {/* Corporate Badge */}
              <div 
                ref={badgeAnimation.ref}
                className={`inline-block px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-3 bg-[#003883] text-white text-[9px] sm:text-[10px] md:text-[12px] uppercase tracking-[1.5px] sm:tracking-[2px] md:tracking-[3px] mb-4 sm:mb-6 md:mb-8 fade-in-scale ${badgeAnimation.isVisible ? 'visible' : ''}`}
              >
                <span style={{ fontFamily: 'ITC Avant Garde Gothic Std Bold', fontWeight: 500 }}>Corporate Excellence</span>
              </div>
              
              <h1 
                ref={titleAnimation.ref}
                className={`text-white mb-4 sm:mb-6 md:mb-8 uppercase fade-in-left ${titleAnimation.isVisible ? 'visible' : ''}`}
                style={{
                  fontFamily: 'ITC Avant Garde Gothic Std Bold',
                  fontWeight: 900,
                  fontSize: 'clamp(1.5rem, 5vw, 4rem)',
                  lineHeight: 'clamp(1.6rem, 5.2vw, 3.8rem)',
                  letterSpacing: '-0.02em'
                }}
              >
                BRIDGING GLOBAL OPPORTUNITIES
              </h1>
              
              <div 
                ref={contentAnimation.ref}
                className={`space-y-3 sm:space-y-4 md:space-y-6 text-white mb-6 sm:mb-8 md:mb-10 hero-subtitle fade-in-right ${contentAnimation.isVisible ? 'visible' : ''}`}
                style={{
                  fontFamily: 'ITC Avant Garde Gothic Std Bold',
                  fontWeight: 400
                }}
              >
                <p>
                  THONBRIDGE delivers comprehensive enterprise solutions across procurement, international trade, engineering, and agricultural sectors. Our global expertise drives sustainable growth and operational excellence.
                </p>
              </div>

              {/* Key Statistics */}
              <div 
                ref={statsAnimation.ref}
                className={`grid grid-cols-3 gap-3 sm:gap-4 md:gap-8 fade-in-up ${statsAnimation.isVisible ? 'visible' : ''}`}
              >
                {[
                  { value: 'Global', label: 'Reach' },
                  { value: 'Premier', label: 'Solutions' },
                  { value: 'Trusted', label: 'Partner' }
                ].map((stat, index) => (
                  <div 
                    key={index} 
                    className={`text-center fade-in-scale stagger-${index + 1} ${statsAnimation.isVisible ? 'visible' : ''}`}
                  >
                    <div className="text-white mb-1 sm:mb-2 text-sm sm:text-lg md:text-2xl" style={{
                      fontFamily: 'ITC Avant Garde Gothic Std Bold',
                      fontWeight: 900
                    }}>
                      {stat.value}
                    </div>
                    <div className="text-white uppercase text-[7px] sm:text-[8px] md:text-[10px] tracking-[1px]" style={{
                      fontFamily: 'ITC Avant Garde Gothic Std Bold',
                      fontWeight: 400
                    }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Corporate Who We Are Section - Clean White Background */}
      <CorporateWhoWeAre />

      {/* Corporate Why Choose Section - Clean White Background */}
      <CorporateWhyChoose />
    </div>
  );
}