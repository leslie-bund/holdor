import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { IndustriesSection } from './IndustriesSection';
import { useScrollAnimation } from './hooks/useScrollAnimation';
import industriesHeaderImage from 'figma:asset/cc327b1f3c0289246abc4c0f468482f1e5cdeb8c.png';

interface IndustriesPageProps {
  onPageChange: (page: string) => void;
}

export function IndustriesPage({ onPageChange }: IndustriesPageProps) {
  // Scroll animation hooks for different sections
  const heroAnimation = useScrollAnimation({ threshold: 0.1 });
  const badgeAnimation = useScrollAnimation({ threshold: 0.1, delay: 100 });
  const titleAnimation = useScrollAnimation({ threshold: 0.1, delay: 200 });
  const contentAnimation = useScrollAnimation({ threshold: 0.1, delay: 300 });
  const statsAnimation = useScrollAnimation({ threshold: 0.1, delay: 400 });

  return (
    <div className="bg-white">
      {/* Corporate Hero Section - Dark Blue Gradient with Custom Background Image */}
      <section className="py-12 sm:py-16 lg:py-20 xl:py-24 relative overflow-hidden" style={{
        background: 'linear-gradient(135deg, #001a3d 0%, #002d5f 25%, #003883 50%, #0047a0 75%, #0056bd 100%)'
      }}>
        <div className="absolute inset-0">
          <ImageWithFallback
            src={industriesHeaderImage}
            alt="THONBRIDGE Industries Infrastructure"
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
                <span style={{ fontFamily: 'ITC Avant Garde Gothic Std Bold', fontWeight: 500 }}>Industry Specialization</span>
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
                STRATEGIC SECTOR EXPERTISE
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
                  THONBRIDGE delivers specialized solutions across critical industry sectors, leveraging deep domain expertise and systematic methodologies to address complex operational challenges.
                </p>
                <p className="hidden sm:block">
                  Our sector-focused approach enables us to deliver targeted solutions that address industry-specific requirements while maintaining the highest standards of operational excellence and regulatory compliance.
                </p>
              </div>

              {/* Key Statistics */}
              <div 
                ref={statsAnimation.ref}
                className={`grid grid-cols-3 gap-3 sm:gap-4 md:gap-8 fade-in-up ${statsAnimation.isVisible ? 'visible' : ''}`}
              >
                {[
                  { value: '6', label: 'Strategic Sectors' },
                  { value: '1,200+', label: 'Projects Executed' },
                  { value: '97%', label: 'Success Rate' }
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

      {/* Industries Section - Clean White Background */}
      <IndustriesSection />

      {/* Corporate CTA Section - Dark Blue Gradient */}
      <section className="py-12 sm:py-16 lg:py-20 xl:py-24 relative overflow-hidden" style={{
        background: 'linear-gradient(135deg, #001a3d 0%, #002d5f 25%, #003883 50%, #0047a0 75%, #0056bd 100%)'
      }}>
        <div className="container-1920">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            
            {/* CTA Content */}
            <div>
              <h2 className="text-white mb-3 sm:mb-4 md:mb-6 uppercase tracking-[1px] sm:tracking-[2px]" style={{
                fontFamily: 'ITC Avant Garde Gothic Std Bold',
                fontWeight: 900,
                fontSize: 'clamp(1.25rem, 3.5vw, 2.5rem)',
                lineHeight: '1.1'
              }}>
                PARTNER WITH INDUSTRY EXPERTS
              </h2>
              
              <div className="space-y-2 sm:space-y-3 md:space-y-4 text-white mb-4 sm:mb-6 md:mb-8 text-xs sm:text-sm md:text-base" style={{
                fontFamily: 'ITC Avant Garde Gothic Std Bold',
                fontWeight: 400,
                lineHeight: '1.6'
              }}>
                <p>
                  Our sector-specific expertise enables cross-industry innovation and knowledge transfer, delivering comprehensive solutions that leverage best practices across multiple industry verticals.
                </p>
                <p>
                  Contact our specialized teams to explore how our integrated sector capabilities can optimize your operational performance and drive strategic growth initiatives.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4">
                <button 
                  onClick={() => onPageChange('contact')}
                  className="bg-[#003883] text-white px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 hover:bg-[#002d6b] transition-colors duration-200 text-center"
                >
                  <span 
                    className="uppercase tracking-[1px] sm:tracking-[2px] text-[9px] sm:text-[10px] md:text-[12px] font-normal"
                    style={{
                      fontFamily: 'ITC Avant Garde Gothic Std Bold'
                    }}
                  >
                    INDUSTRY CONSULTATION
                  </span>
                </button>
                
                <button 
                  onClick={() => onPageChange('services')}
                  className="bg-transparent text-white px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 border-2 border-[#515960] hover:border-[#003883] hover:bg-[#003883] transition-colors duration-200 text-center"
                >
                  <span 
                    className="uppercase tracking-[1px] sm:tracking-[2px] text-[9px] sm:text-[10px] md:text-[12px] font-normal"
                    style={{
                      fontFamily: 'ITC Avant Garde Gothic Std Bold'
                    }}
                  >
                    SERVICE PORTFOLIO
                  </span>
                </button>
              </div>
            </div>

            {/* CTA Image */}
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1665072204431-b3ba11bd6d06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGhhbmRzaGFrZSUyMHBhcnRuZXJzaGlwJTIwbWVufGVufDF8fHx8MTc1NTczNzExNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Business partnership handshake"
                className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] object-cover hover:scale-105 transition-all duration-500"
              />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}