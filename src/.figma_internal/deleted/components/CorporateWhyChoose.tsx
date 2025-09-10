import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useScrollAnimation } from './hooks/useScrollAnimation';
import partnershipImage from 'figma:asset/2e6d004e1e17cfa17f2775dbf0d5a561925f6f79.png';

export function CorporateWhyChoose() {
  // Scroll animation hooks for different sections
  const headerAnimation = useScrollAnimation({ threshold: 0.1 });
  const advantagesHeaderAnimation = useScrollAnimation({ threshold: 0.1 });
  const advantagesAnimation = useScrollAnimation({ threshold: 0.1, delay: 200 });
  const excellenceAnimation = useScrollAnimation({ threshold: 0.1, delay: 100 });
  const imageAnimation = useScrollAnimation({ threshold: 0.1, delay: 200 });
  const statsAnimation = useScrollAnimation({ threshold: 0.1, delay: 300 });

  const competitiveAdvantages = [
    {
      title: 'Global Network',
      description: 'Partners and suppliers in multiple continents.',
      metric: 'Global',
      metricLabel: 'Network',
      feature: 'Strategic Partnerships'
    },
    {
      title: 'One-Stop Solutions',
      description: 'From sourcing to delivery, we handle it all.',
      metric: 'Complete',
      metricLabel: 'Service Coverage',
      feature: 'Full-Service Capability'
    },
    {
      title: 'Proven Track Record',
      description: 'Successful projects across diverse sectors.',
      metric: 'Premier',
      metricLabel: 'Quality Standards',
      feature: 'Performance Standards'
    },
    {
      title: 'Custom Solutions',
      description: 'Services tailored to each client\'s needs.',
      metric: 'Advanced',
      metricLabel: 'Technology Solutions',
      feature: 'Technology Leadership'
    }
  ];

  // Create individual animation hooks for each advantage
  const advantageAnimations = competitiveAdvantages.map((_, index) => 
    useScrollAnimation({ threshold: 0.1, delay: index * 100 })
  );

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1170px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Corporate Header */}
        <div 
          ref={headerAnimation.ref}
          className={`text-center mb-20 fade-in-up ${headerAnimation.isVisible ? 'visible' : ''}`}
        >
          <div className="inline-block px-6 py-3 bg-[#003883] text-white text-[12px] uppercase tracking-[3px] mb-6">
            <span style={{ fontFamily: 'ITC Avant Garde Gothic Std Bold', fontWeight: 500 }}>Competitive Advantage</span>
          </div>
          
          <h2 className="text-[#2B2B2B] mb-8 uppercase" style={{
            fontFamily: 'ITC Avant Garde Gothic Std Bold',
            fontWeight: 900,
            fontSize: '42px',
            lineHeight: '46px'
          }}>
            WHY CHOOSE THONBRIDGE
          </h2>
          
          <div className="max-w-4xl mx-auto text-[#2B2B2B] text-[20px] leading-[30px]" style={{
            fontFamily: 'ITC Avant Garde Gothic Std Bold',
            fontWeight: 400
          }}>
            We deliver strategic value through operational excellence, global expertise, and comprehensive solutions that drive measurable business outcomes for our clients.
          </div>
        </div>

        {/* Strategic Differentiators - Full Width */}
        <div className="mb-20">
          <h3 
            ref={advantagesHeaderAnimation.ref}
            className={`text-[#2B2B2B] mb-8 uppercase tracking-[2px] text-center fade-in-up ${advantagesHeaderAnimation.isVisible ? 'visible' : ''}`}
            style={{
              fontFamily: 'ITC Avant Garde Gothic Std Bold',
              fontWeight: 900,
              fontSize: '16px',
              lineHeight: '20px'
            }}
          >
            STRATEGIC DIFFERENTIATORS
          </h3>
          
          <div 
            ref={advantagesAnimation.ref}
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 fade-in-up ${advantagesAnimation.isVisible ? 'visible' : ''}`}
          >
            {competitiveAdvantages.map((advantage, index) => (
              <div 
                key={index} 
                ref={advantageAnimations[index].ref}
                className={`bg-white border border-[#e5e5e5] p-8 hover:border-[#003883] transition-all duration-300 group fade-in-scale stagger-${index + 1} ${advantageAnimations[index].isVisible ? 'visible' : ''}`}
              >
                
                {/* Header with Metric */}
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <div className="text-[#003883] mb-1" style={{
                      fontFamily: 'ITC Avant Garde Gothic Std Bold',
                      fontWeight: 900,
                      fontSize: '28px',
                      lineHeight: '32px'
                    }}>
                      {advantage.metric}
                    </div>
                    <div className="text-[#515960] uppercase text-[10px] tracking-[1px]" style={{
                      fontFamily: 'ITC Avant Garde Gothic Std Bold',
                      fontWeight: 400
                    }}>
                      {advantage.metricLabel}
                    </div>
                  </div>
                </div>
                
                {/* Title */}
                <h4 className="text-[#2B2B2B] mb-3 uppercase tracking-[1px]" style={{
                  fontFamily: 'ITC Avant Garde Gothic Std Bold',
                  fontWeight: 900,
                  fontSize: '14px',
                  lineHeight: '18px'
                }}>
                  {advantage.title}
                </h4>
                
                {/* Feature Badge */}
                <div className="inline-block px-3 py-1 bg-[#F4F4F4] text-[#2B2B2B] text-[10px] uppercase tracking-[1px] mb-4" style={{
                  fontFamily: 'ITC Avant Garde Gothic Std Bold',
                  fontWeight: 500
                }}>
                  {advantage.feature}
                </div>
                
                {/* Description */}
                <p className="text-[#515960]" style={{
                  fontFamily: 'ITC Avant Garde Gothic Std Bold',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '22px'
                }}>
                  {advantage.description}
                </p>
                
                {/* Bottom Border */}
                <div className="mt-6 h-0.5 bg-[#F4F4F4] group-hover:bg-[#003883] transition-colors duration-300"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Excellence Statement */}
        <div 
          ref={excellenceAnimation.ref}
          className={`bg-white border-t-4 border-[#003883] p-12 fade-in-up ${excellenceAnimation.isVisible ? 'visible' : ''}`}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`fade-in-left ${excellenceAnimation.isVisible ? 'visible' : ''}`}>
              <h3 className="text-[#2B2B2B] mb-6 uppercase tracking-[2px]" style={{
                fontFamily: 'ITC Avant Garde Gothic Std Bold',
                fontWeight: 900,
                fontSize: '20px',
                lineHeight: '24px'
              }}>
                PARTNERSHIP EXCELLENCE
              </h3>
              
              <div className="space-y-4 text-[#2B2B2B]" style={{
                fontFamily: 'ITC Avant Garde Gothic Std Bold',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '26px'
              }}>
                <p>
                  THONBRIDGE's strategic approach combines deep industry knowledge with operational excellence to deliver sustainable competitive advantages for our clients.
                </p>
                <p>
                  Our commitment to quality, compliance, and continuous improvement ensures that every partnership drives measurable value and long-term success.
                </p>
              </div>
              
              <div 
                ref={statsAnimation.ref}
                className={`grid grid-cols-3 gap-6 mt-8 fade-in-up ${statsAnimation.isVisible ? 'visible' : ''}`}
              >
                {[
                  { value: 'Global', label: 'Excellence' },
                  { value: 'Premier', label: 'Solutions' },
                  { value: 'Trusted', label: 'Partnership' }
                ].map((stat, index) => (
                  <div 
                    key={index} 
                    className={`text-center fade-in-scale stagger-${index + 1} ${statsAnimation.isVisible ? 'visible' : ''}`}
                  >
                    <div className="text-[#003883] mb-1" style={{
                      fontFamily: 'ITC Avant Garde Gothic Std Bold',
                      fontWeight: 900,
                      fontSize: '20px',
                      lineHeight: '24px'
                    }}>
                      {stat.value}
                    </div>
                    <div className="text-[#515960] uppercase text-[10px] tracking-[1px]" style={{
                      fontFamily: 'ITC Avant Garde Gothic Std Bold',
                      fontWeight: 400
                    }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div 
              ref={imageAnimation.ref}
              className={`fade-in-right ${imageAnimation.isVisible ? 'visible' : ''}`}
            >
              <ImageWithFallback
                src={partnershipImage}
                alt="Corporate business partnership"
                className="w-full h-[300px] object-cover hover:scale-105 transition-all duration-500"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}