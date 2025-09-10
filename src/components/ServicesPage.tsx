import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { BackgroundHero } from './BackgroundHero';
import { useScrollAnimation } from './hooks/useScrollAnimation';

interface ServicesPageProps {
  onPageChange: (page: string) => void;
}

export function ServicesPage({ onPageChange }: ServicesPageProps) {
  // Scroll animation hooks for different sections
  const heroAnimation = useScrollAnimation({ threshold: 0.1 });
  const badgeAnimation = useScrollAnimation({ threshold: 0.1, delay: 100 });
  const titleAnimation = useScrollAnimation({ threshold: 0.1, delay: 200 });
  const contentAnimation = useScrollAnimation({ threshold: 0.1, delay: 300 });
  const statsAnimation = useScrollAnimation({ threshold: 0.1, delay: 400 });
  const headerAnimation = useScrollAnimation({ threshold: 0.1 });
  const servicesAnimation = useScrollAnimation({ threshold: 0.1, delay: 200 });
  const metricsAnimation = useScrollAnimation({ threshold: 0.1, delay: 300 });
  const ctaAnimation = useScrollAnimation({ threshold: 0.1, delay: 100 });

  const services = [
    {
      title: 'Procurement Services / General Supply',
      shortTitle: 'Procurement Services',
      description: 'Comprehensive global sourcing solutions ensuring optimal value, quality, and delivery performance across all procurement categories.',
      details: [
        'Global supplier network management',
        'Quality assurance and compliance',
        'Competitive pricing and negotiation',
        'Timely delivery and logistics coordination'
      ],
      metric: 'Premier',
      metricLabel: 'Quality Standards',
      icon: '●'
    },
    {
      title: 'International Trade (Import & Export)',
      shortTitle: 'International Trade',
      description: 'Expert navigation of complex cross-border trade processes with comprehensive documentation and compliance management.',
      details: [
        'Import and export documentation',
        'Customs clearance and compliance',
        'International logistics management',
        'Trade finance solutions'
      ],
      metric: 'Global',
      metricLabel: 'Network Coverage',
      icon: '●'
    },
    {
      title: 'Engineering Services',
      shortTitle: 'Engineering Solutions',
      description: 'Advanced engineering solutions delivering innovative, sustainable, and efficient designs tailored to modern industry demands.',
      details: [
        'Civil and structural engineering',
        'Mechanical and electrical design',
        'Project management and execution',
        'Sustainable engineering solutions'
      ],
      metric: 'Advanced',
      metricLabel: 'Technology Solutions',
      icon: '●'
    },
    {
      title: 'Agricultural Services',
      shortTitle: 'Agricultural Development',
      description: 'Comprehensive agricultural support services driving productivity growth through modern equipment, technology, and market solutions.',
      details: [
        'Farm equipment and machinery supply',
        'Seeds and fertilizer distribution',
        'Agricultural technology solutions',
        'Market linkage and distribution'
      ],
      metric: 'Modern',
      metricLabel: 'Innovation Focus',
      icon: '●'
    },
    {
      title: 'Infrastructural Services',
      shortTitle: 'Infrastructure Development',
      description: 'Strategic infrastructure development improving connectivity, sustainability, and economic growth through comprehensive project delivery.',
      details: [
        'Transportation infrastructure',
        'Public utilities development',
        'Housing and commercial projects',
        'Urban planning and development'
      ],
      metric: 'Strategic',
      metricLabel: 'Project Focus',
      icon: '●'
    }
  ];

  // Create individual animation hooks for each service
  const serviceAnimations = services.map((_, index) => 
    useScrollAnimation({ threshold: 0.1, delay: index * 100 })
  );

  return (
    <div className="bg-white">
      {/* Corporate Hero Section - Dark Blue Gradient */}
      <section className="py-12 sm:py-16 lg:py-20 xl:py-24 relative overflow-hidden" style={{
        background: 'linear-gradient(135deg, #001a3d 0%, #002d5f 25%, #003883 50%, #0047a0 75%, #0056bd 100%)'
      }}>
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1654504514877-37f3205736c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb3Jwb3JhdGUlMjBidXNpbmVzcyUyMHNlcnZpY2VzJTIwdGVjaG5vbG9neSUyMGluZnJhc3RydWN0dXJlfGVufDF8fHx8MTc1NTQzNDA5N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="THONBRIDGE Services Infrastructure"
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
                <span style={{ fontFamily: 'ITC Avant Garde Gothic Std Bold', fontWeight: 500 }}>Service Excellence</span>
              </div>
              
              <h1 
                ref={titleAnimation.ref}
                className={`text-white mb-4 sm:mb-6 md:mb-8 uppercase fade-in-left ${titleAnimation.isVisible ? 'visible' : ''}`}
                style={{
                  fontFamily: 'ITC Avant Garde Gothic Std Bold',
                  fontWeight: 900,
                  fontSize: 'clamp(1.25rem, 4.5vw, 4rem)',
                  lineHeight: 'clamp(1.4rem, 4.8vw, 3.8rem)',
                  letterSpacing: '-0.02em'
                }}
              >
                COMPREHENSIVE ENTERPRISE SOLUTIONS
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
                  THONBRIDGE delivers integrated business solutions across procurement, international trade, engineering, agricultural, and infrastructure sectors. Our global expertise drives strategic value creation.
                </p>
                <p className="hidden sm:block">
                  From sourcing and supply chain optimization to complex engineering projects and agricultural development, we provide end-to-end solutions that enhance operational efficiency and drive sustainable growth.
                </p>
              </div>

              {/* Key Statistics */}
              <div 
                ref={statsAnimation.ref}
                className={`grid grid-cols-3 gap-3 sm:gap-4 md:gap-8 fade-in-up ${statsAnimation.isVisible ? 'visible' : ''}`}
              >
                {[
                  { value: 'Premier', label: 'Solutions' },
                  { value: 'Global', label: 'Excellence' },
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

      {/* Corporate Services Overview - Clean White Background */}
      <section className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-white">
        <div className="container-1920">
          
          {/* Corporate Header */}
          <div 
            ref={headerAnimation.ref}
            className={`text-center mb-12 sm:mb-16 lg:mb-20 fade-in-up ${headerAnimation.isVisible ? 'visible' : ''}`}
          >
            <div className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-3 bg-[rgba(0,56,131,1)] text-white text-[9px] sm:text-[10px] md:text-[12px] uppercase tracking-[1.5px] sm:tracking-[2px] md:tracking-[3px] mb-3 sm:mb-4 md:mb-6">
              <span style={{ fontFamily: 'ITC Avant Garde Gothic Std Bold', fontWeight: 500 }}>Service Portfolio</span>
            </div>
            
            <h2 className="text-[#2B2B2B] mb-4 sm:mb-6 md:mb-8 uppercase text-xl sm:text-2xl md:text-3xl lg:text-4xl" style={{
              fontFamily: 'ITC Avant Garde Gothic Std Bold',
              fontWeight: 900
            }}>
              COMPREHENSIVE SOLUTIONS
            </h2>
            
            <div className="max-w-4xl mx-auto text-[#2B2B2B] text-sm sm:text-base md:text-lg" style={{
              fontFamily: 'ITC Avant Garde Gothic Std Bold',
              fontWeight: 400,
              lineHeight: '1.6'
            }}>
              THONBRIDGE delivers integrated business solutions across multiple sectors, combining industry expertise with operational excellence to drive measurable outcomes for our global client portfolio.
            </div>
          </div>

          {/* Services Grid */}
          <div 
            ref={servicesAnimation.ref}
            className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20 fade-in-up ${servicesAnimation.isVisible ? 'visible' : ''}`}
          >
            {services.map((service, index) => (
              <div 
                key={index} 
                ref={serviceAnimations[index].ref}
                className={`bg-white border border-[#e5e5e5] hover:border-[#003883] transition-all duration-300 group fade-in-scale stagger-${index + 1} ${serviceAnimations[index].isVisible ? 'visible' : ''}`}
              >
                
                {/* Service Header */}
                <div className="bg-white p-3 sm:p-4 md:p-6 border-b border-[#e5e5e5]">
                  <div className="flex justify-between items-start mb-2 sm:mb-3 md:mb-4">
                    <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3">
                      <span className="text-lg sm:text-xl md:text-2xl text-[#515960]">{service.icon}</span>
                      <div className="text-[#003883] text-lg sm:text-xl md:text-2xl" style={{
                        fontFamily: 'ITC Avant Garde Gothic Std Bold',
                        fontWeight: 900
                      }}>
                        {service.metric}
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-[#2B2B2B] mb-1 sm:mb-2 uppercase tracking-[1px] text-xs sm:text-sm md:text-base" style={{
                    fontFamily: 'ITC Avant Garde Gothic Std Bold',
                    fontWeight: 900
                  }}>
                    {service.shortTitle}
                  </h3>
                  
                  <div className="text-[#515960] uppercase text-[8px] sm:text-[9px] md:text-[10px] tracking-[1px]" style={{
                    fontFamily: 'ITC Avant Garde Gothic Std Bold',
                    fontWeight: 400
                  }}>
                    {service.metricLabel}
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-3 sm:p-4 md:p-6">
                  <p className="text-[#515960] mb-3 sm:mb-4 md:mb-6 text-xs sm:text-sm" style={{
                    fontFamily: 'ITC Avant Garde Gothic Std Bold',
                    fontWeight: 400,
                    lineHeight: '1.5'
                  }}>
                    {service.description}
                  </p>

                  {/* Service Features */}
                  <div className="mb-3 sm:mb-4 md:mb-6">
                    <h4 className="text-[#2B2B2B] mb-2 sm:mb-3 md:mb-4 uppercase tracking-[1px] text-[10px] sm:text-xs" style={{
                      fontFamily: 'ITC Avant Garde Gothic Std Bold',
                      fontWeight: 900
                    }}>
                      KEY CAPABILITIES
                    </h4>
                    <ul className="space-y-1.5 sm:space-y-2">
                      {service.details.map((detail, i) => (
                        <li 
                          key={i}
                          className="flex items-start gap-1.5 sm:gap-2 md:gap-3 text-[#515960] text-[10px] sm:text-xs"
                          style={{
                            fontFamily: 'ITC Avant Garde Gothic Std Bold',
                            fontWeight: 400,
                            lineHeight: '1.4'
                          }}
                        >
                          <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-[#003883] mt-1 sm:mt-1.5 md:mt-2 flex-shrink-0 rounded-full"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom Border */}
                  <div className="h-0.5 bg-[#F4F4F4] group-hover:bg-[#003883] transition-colors duration-300"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Service Metrics */}
          <div 
            ref={metricsAnimation.ref}
            className={`bg-white border-t-4 border-[#003883] p-6 sm:p-8 md:p-12 fade-in-up ${metricsAnimation.isVisible ? 'visible' : ''}`}
          >
            <div className="text-center mb-6 sm:mb-8 md:mb-12">
              <h3 className="text-[#2B2B2B] mb-2 sm:mb-3 md:mb-4 uppercase tracking-[2px] text-base sm:text-lg md:text-xl" style={{
                fontFamily: 'ITC Avant Garde Gothic Std Bold',
                fontWeight: 900
              }}>
                SERVICE EXCELLENCE METRICS
              </h3>
              <div className="w-8 sm:w-12 md:w-16 h-0.5 bg-[#003883] mx-auto"></div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-8">
              {[
                { value: 'Premier', label: 'Quality Standards' },
                { value: 'Global', label: 'Excellence' },
                { value: 'Advanced', label: 'Solutions' },
                { value: 'Trusted', label: 'Partnership' }
              ].map((stat, index) => (
                <div 
                  key={index} 
                  className={`text-center fade-in-scale stagger-${index + 1} ${metricsAnimation.isVisible ? 'visible' : ''}`}
                >
                  <div className="text-[#003883] mb-1 sm:mb-2 text-base sm:text-lg md:text-2xl" style={{
                    fontFamily: 'ITC Avant Garde Gothic Std Bold',
                    fontWeight: 900
                  }}>
                    {stat.value}
                  </div>
                  <div className="text-[#515960] uppercase text-[9px] sm:text-[10px] md:text-xs tracking-[1px]" style={{
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
      </section>

      {/* Corporate CTA Section - Dark Blue Gradient */}
      <section className="py-12 sm:py-16 lg:py-20 xl:py-24 relative overflow-hidden" style={{
        background: 'linear-gradient(135deg, #001a3d 0%, #002d5f 25%, #003883 50%, #0047a0 75%, #0056bd 100%)'
      }}>
        <div className="container-1920">
          <div 
            ref={ctaAnimation.ref}
            className={`grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center fade-in-up ${ctaAnimation.isVisible ? 'visible' : ''}`}
          >
            
            {/* CTA Content */}
            <div className={`fade-in-left ${ctaAnimation.isVisible ? 'visible' : ''}`}>
              <h2 className="text-white mb-3 sm:mb-4 md:mb-6 uppercase tracking-[1px] sm:tracking-[2px]" style={{
                fontFamily: 'ITC Avant Garde Gothic Std Bold',
                fontWeight: 900,
                fontSize: 'clamp(1.25rem, 3.5vw, 2.5rem)',
                lineHeight: '1.1'
              }}>
                PARTNER WITH THONBRIDGE
              </h2>
              
              <div className="space-y-2 sm:space-y-3 md:space-y-4 text-white mb-4 sm:mb-6 md:mb-8 text-xs sm:text-sm md:text-base" style={{
                fontFamily: 'ITC Avant Garde Gothic Std Bold',
                fontWeight: 400,
                lineHeight: '1.6'
              }}>
                <p>
                  Our integrated service approach combines deep sector expertise with operational excellence to deliver sustainable competitive advantages for our clients.
                </p>
                <p>
                  Contact our team to discuss how THONBRIDGE can enhance your business capabilities and drive strategic growth initiatives.
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
                    INITIATE CONSULTATION
                  </span>
                </button>
                
                <button 
                  onClick={() => onPageChange('about')}
                  className="bg-transparent text-white px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 border-2 border-[#515960] hover:border-[#003883] hover:bg-[#003883] transition-colors duration-200 text-center"
                >
                  <span 
                    className="uppercase tracking-[1px] sm:tracking-[2px] text-[9px] sm:text-[10px] md:text-[12px] font-normal"
                    style={{
                      fontFamily: 'ITC Avant Garde Gothic Std Bold'
                    }}
                  >
                    CORPORATE PROFILE
                  </span>
                </button>
              </div>
            </div>

            {/* CTA Image */}
            <div className={`fade-in-right ${ctaAnimation.isVisible ? 'visible' : ''}`}>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBvZmZpY2UlMjBidWlsZGluZyUyMGNpdHklMjBza3lsaW5lfGVufDF8fHx8MTc1NTQ0NDc0Mnww"
                alt="Corporate office building"
                className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] object-cover hover:scale-105 transition-all duration-500"
              />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}