import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useScrollAnimation } from './hooks/useScrollAnimation';

export function CorporateWhoWeAre() {
  // Scroll animation hooks for different sections
  const headerAnimation = useScrollAnimation({ threshold: 0.1 });
  const overviewAnimation = useScrollAnimation({ threshold: 0.1, delay: 200 });
  const valuesAnimation = useScrollAnimation({ threshold: 0.1, delay: 300 });
  const principlesHeaderAnimation = useScrollAnimation({ threshold: 0.1 });
  const principlesAnimation = useScrollAnimation({ threshold: 0.1, delay: 200 });
  const imageAnimation = useScrollAnimation({ threshold: 0.1, delay: 100 });

  const leadershipPrinciples = [
    {
      title: 'Strategic Excellence',
      description: 'Leveraging market intelligence and strategic partnerships to deliver superior outcomes for our clients across all sectors.',
      metric: 'Premier',
      metricLabel: 'Quality Standards'
    },
    {
      title: 'Operational Integrity',
      description: 'Maintaining the highest standards of corporate governance and ethical business practices in every transaction.',
      metric: 'Complete',
      metricLabel: 'Compliance Record'
    },
    {
      title: 'Global Capabilities',
      description: 'Comprehensive service delivery across multiple continents with local expertise and international standards.',
      metric: 'Global',
      metricLabel: 'Service Network'
    },
    {
      title: 'Innovation Leadership',
      description: 'Pioneering advanced technologies and methodologies to transform traditional business processes.',
      metric: 'Advanced',
      metricLabel: 'Technology Solutions'
    }
  ];

  const coreValues = [
    { title: 'Integrity', description: 'We deliver on promises.', icon: '●' },
    { title: 'Efficiency', description: 'Timely and cost-effective solutions.', icon: '●' },
    { title: 'Innovation', description: 'Forward-thinking approaches.', icon: '●' },
    { title: 'Global Reach', description: 'Bridging markets and industries.', icon: '●' }
  ];

  // Create individual animation hooks for each principle and value
  const principleAnimations = leadershipPrinciples.map((_, index) => 
    useScrollAnimation({ threshold: 0.1, delay: index * 100 })
  );

  const valueAnimations = coreValues.map((_, index) => 
    useScrollAnimation({ threshold: 0.1, delay: index * 50 })
  );

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1170px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Corporate Header */}
        <div 
          ref={headerAnimation.ref}
          className={`text-center mb-20 fade-in-up ${headerAnimation.isVisible ? 'visible' : ''}`}
        >
          <div className="inline-block px-6 py-3 bg-[rgba(0,56,131,1)] text-white text-[12px] uppercase tracking-[3px] mb-6">
            <span style={{ fontFamily: 'ITC Avant Garde Gothic Std Bold', fontWeight: 500 }}>Corporate Profile</span>
          </div>
          
          <h2 className="text-[#2B2B2B] mb-8 uppercase" style={{
            fontFamily: 'ITC Avant Garde Gothic Std Bold',
            fontWeight: 900,
            fontSize: '42px',
            lineHeight: '46px'
          }}>
            WHO WE ARE
          </h2>
          
          <div className="max-w-4xl mx-auto text-[#2B2B2B] text-[20px] leading-[30px]" style={{
            fontFamily: 'ITC Avant Garde Gothic Std Bold',
            fontWeight: 400
          }}>
            THONBRIDGE is a premier global solutions provider delivering comprehensive services across procurement, international trade, engineering, and agricultural sectors. We are committed to bridging opportunities through strategic excellence and operational integrity.
          </div>
        </div>

        {/* Executive Summary Grid */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Company Overview */}
          <div 
            ref={overviewAnimation.ref}
            className={`fade-in-left ${overviewAnimation.isVisible ? 'visible' : ''}`}
          >
            <div className="bg-[#F4F4F4] p-8 rounded-none border-l-4 border-[#003883]">
              <h3 className="text-[#2B2B2B] mb-6 uppercase tracking-[2px]" style={{
                fontFamily: 'ITC Avant Garde Gothic Std Bold',
                fontWeight: 900,
                fontSize: '16px',
                lineHeight: '20px'
              }}>
                EXECUTIVE OVERVIEW
              </h3>
              
              <div className="space-y-4 text-[#2B2B2B]" style={{
                fontFamily: 'ITC Avant Garde Gothic Std Bold',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '26px'
              }}>
                <p>
                  THONBRIDGE is a multi-sector global solutions provider specializing in procurement services, international trade, engineering solutions, agricultural development, and infrastructure delivery. Our mission is to connect businesses with the resources, expertise, and partnerships they need to succeed in an increasingly interconnected world.
                </p>
                <p>
                  Our commitment to operational excellence, combined with deep industry expertise, positions us as a trusted advisor in navigating the complexities of global business environments.
                </p>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div 
            ref={valuesAnimation.ref}
            className={`fade-in-right ${valuesAnimation.isVisible ? 'visible' : ''}`}
          >
            <h3 className="text-[#2B2B2B] mb-8 uppercase tracking-[2px]" style={{
              fontFamily: 'ITC Avant Garde Gothic Std Bold',
              fontWeight: 900,
              fontSize: '16px',
              lineHeight: '20px'
            }}>
              CORE VALUES
            </h3>
            
            <div className="grid grid-cols-2 gap-6">
              {coreValues.map((value, index) => (
                <div 
                  key={index} 
                  ref={valueAnimations[index].ref}
                  className={`bg-white border border-[#e5e5e5] p-6 hover:border-[#003883] transition-colors duration-300 fade-in-scale stagger-${index + 1} ${valueAnimations[index].isVisible ? 'visible' : ''}`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl text-[#515960]">{value.icon}</span>
                    <h4 className="text-[#2B2B2B]" style={{
                      fontFamily: 'ITC Avant Garde Gothic Std Bold',
                      fontWeight: 900,
                      fontSize: '16px',
                      lineHeight: '20px'
                    }}>
                      {value.title}
                    </h4>
                  </div>
                  <p className="text-[#515960]" style={{
                    fontFamily: 'ITC Avant Garde Gothic Std Bold',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '20px'
                  }}>
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Leadership Principles */}
        <div className="mb-20">
          <div 
            ref={principlesHeaderAnimation.ref}
            className={`text-center mb-12 fade-in-up ${principlesHeaderAnimation.isVisible ? 'visible' : ''}`}
          >
            <h3 className="text-[#2B2B2B] mb-4 uppercase tracking-[2px]" style={{
              fontFamily: 'ITC Avant Garde Gothic Std Bold',
              fontWeight: 900,
              fontSize: '20px',
              lineHeight: '24px'
            }}>
              CORE BUSINESS PRINCIPLES
            </h3>
            <div className="w-16 h-0.5 bg-[#003883] mx-auto"></div>
          </div>

          <div 
            ref={principlesAnimation.ref}
            className={`grid grid-cols-1 md:grid-cols-2 gap-8 fade-in-up ${principlesAnimation.isVisible ? 'visible' : ''}`}
          >
            {leadershipPrinciples.map((principle, index) => (
              <div 
                key={index} 
                ref={principleAnimations[index].ref}
                className={`group fade-in-scale stagger-${index + 1} ${principleAnimations[index].isVisible ? 'visible' : ''}`}
              >
                <div className="bg-white border border-[#e5e5e5] p-8 h-full hover:shadow-lg transition-all duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-[#2B2B2B] uppercase tracking-[1px]" style={{
                      fontFamily: 'ITC Avant Garde Gothic Std Bold',
                      fontWeight: 900,
                      fontSize: '14px',
                      lineHeight: '18px'
                    }}>
                      {principle.title}
                    </h4>
                    <div className="text-right">
                      <div className="text-[#003883]" style={{
                        fontFamily: 'ITC Avant Garde Gothic Std Bold',
                        fontWeight: 900,
                        fontSize: '24px',
                        lineHeight: '28px'
                      }}>
                        {principle.metric}
                      </div>
                      <div className="text-[#515960] uppercase text-[10px] tracking-[1px]" style={{
                        fontFamily: 'ITC Avant Garde Gothic Std Bold',
                        fontWeight: 400
                      }}>
                        {principle.metricLabel}
                      </div>
                    </div>
                  </div>
                  <p className="text-[#515960]" style={{
                    fontFamily: 'ITC Avant Garde Gothic Std Bold',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '22px'
                  }}>
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Corporate Image Section - Removed Grayscale Filter */}
        <div 
          ref={imageAnimation.ref}
          className={`relative fade-in-up ${imageAnimation.isVisible ? 'visible' : ''}`}
        >
          <div className="grid lg:grid-cols-3 gap-8">
            <div className={`lg:col-span-2 fade-in-left ${imageAnimation.isVisible ? 'visible' : ''}`}>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1739298061707-cefee19941b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBidXNpbmVzcyUyMG1lZXRpbmclMjBib2FyZHJvb218ZW58MXx8fHwxNzU1NDI2Mjc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="THONBRIDGE corporate leadership team"
                className="w-full h-[400px] object-cover hover:scale-105 transition-all duration-500"
              />
            </div>
            
            <div className={`bg-[#2B2B2B] text-white p-8 flex flex-col justify-center fade-in-right ${imageAnimation.isVisible ? 'visible' : ''}`}>
              <h4 className="uppercase tracking-[2px] mb-6" style={{
                fontFamily: 'ITC Avant Garde Gothic Std Bold',
                fontWeight: 900,
                fontSize: '16px',
                lineHeight: '20px'
              }}>
                CORPORATE COMMITMENT
              </h4>
              
              <p className="mb-6" style={{
                fontFamily: 'ITC Avant Garde Gothic Std Bold',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '22px'
              }}>
                Our dedication to excellence extends beyond project delivery to encompass sustainable business practices, ethical governance, and long-term value creation for all stakeholders.
              </p>
              
              <div className="space-y-3">
                {[
                  'ISO 9001:2015 Certified',
                  'Global Compliance Standards',
                  'Sustainable Business Practices',
                  'Corporate Social Responsibility'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white"></div>
                    <span style={{
                      fontFamily: 'ITC Avant Garde Gothic Std Bold',
                      fontWeight: 400,
                      fontSize: '12px',
                      lineHeight: '16px'
                    }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}