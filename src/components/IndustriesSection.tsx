import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useScrollAnimation } from './hooks/useScrollAnimation';

export function IndustriesSection() {
  const headerAnimation = useScrollAnimation({ threshold: 0.2 });
  const summaryAnimation = useScrollAnimation({ threshold: 0.2 });

  const strategicSectors = [
    {
      sector: 'Energy & Utilities',
      title: 'Oil, Gas & Renewable Energy',
      description: 'Comprehensive engineering and procurement solutions for energy infrastructure development, including offshore platforms, refineries, renewable installations, and distribution networks across the energy value chain.',
      capabilities: [
        'Upstream & Downstream Operations',
        'Renewable Energy Integration',
        'Pipeline Infrastructure Systems',
        'Safety & Environmental Compliance'
      ],
      metrics: {
        projects: '185+',
        value: '$850M+',
        efficiency: '98%',
        coverage: '12 Markets'
      },
      image: 'https://images.unsplash.com/photo-1749549437525-3b5aa46fa1db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmVyZ3klMjBpbmR1c3RyeSUyMG9pbCUyMGdhcyUyMHJlZmluZXJ5fGVufDF8fHx8MTc1NTQ3ODY0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      sectorCode: 'ENR'
    },
    {
      sector: 'Advanced Manufacturing',
      title: 'Industrial Automation & Production',
      description: 'Integrated manufacturing solutions encompassing automation systems, precision engineering, quality control frameworks, and supply chain optimization for modern industrial production environments.',
      capabilities: [
        'Industrial Automation Systems',
        'Precision Manufacturing Equipment',
        'Quality Management Protocols',
        'Production Line Optimization'
      ],
      metrics: {
        projects: '320+',
        value: '$425M+',
        efficiency: '96%',
        coverage: '18 Facilities'
      },
      image: 'https://images.unsplash.com/photo-1647427060118-4911c9821b82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbWFudWZhY3R1cmluZyUyMGF1dG9tYXRpb24lMjByb2JvdGljc3xlbnwxfHx8fDE3NTU0Nzg2NDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      sectorCode: 'MFG'
    },
    {
      sector: 'Agricultural Technology',
      title: 'Precision Agriculture & Food Systems',
      description: 'Technology-driven agricultural solutions integrating precision farming methodologies, smart irrigation systems, crop management technologies, and sustainable food production optimization.',
      capabilities: [
        'Precision Farming Technology',
        'Smart Irrigation Infrastructure',
        'Crop Monitoring Systems',
        'Supply Chain Integration'
      ],
      metrics: {
        projects: '125+',
        value: '$180M+',
        efficiency: '94%',
        coverage: '8 Regions'
      },
      image: 'https://images.unsplash.com/photo-1722119272044-fc49006131e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVjaXNpb24lMjBhZ3JpY3VsdHVyZSUyMHRlY2hub2xvZ3klMjBmYXJtaW5nfGVufDF8fHx8MTc1NTQ3ODY1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      sectorCode: 'AGT'
    },
    {
      sector: 'Infrastructure Development',
      title: 'Civil Engineering & Construction',
      description: 'Large-scale infrastructure development encompassing transportation systems, urban development projects, utilities infrastructure, and sustainable construction methodologies for regional connectivity.',
      capabilities: [
        'Transportation Infrastructure',
        'Urban Development Planning',
        'Utilities & Power Systems',
        'Sustainable Construction Methods'
      ],
      metrics: {
        projects: '205+',
        value: '$1.2B+',
        efficiency: '97%',
        coverage: '15 Markets'
      },
      image: 'https://images.unsplash.com/photo-1716037999044-98a8e85dfa1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmZyYXN0cnVjdHVyZSUyMGNvbnN0cnVjdGlvbiUyMGVuZ2luZWVyaW5nJTIwcHJvamVjdHxlbnwxfHx8fDE3NTU0Nzg2NTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      sectorCode: 'INF'
    },
    {
      sector: 'Public Sector',
      title: 'Government & Institutional Services',
      description: 'Specialized government procurement and institutional project delivery encompassing public infrastructure, regulatory compliance solutions, and civic development initiatives for public sector organizations.',
      capabilities: [
        'Public Infrastructure Projects',
        'Regulatory Compliance Systems',
        'Institutional Procurement',
        'Civic Development Programs'
      ],
      metrics: {
        projects: '95+',
        value: '$340M+',
        efficiency: '100%',
        coverage: '6 Countries'
      },
      image: 'https://images.unsplash.com/photo-1718781941556-afc7adb674cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3Zlcm5tZW50JTIwYnVpbGRpbmclMjBwdWJsaWMlMjBzZWN0b3IlMjBpbmZyYXN0cnVjdHVyZXxlbnwxfHx8fDE3NTU0Nzg2NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      sectorCode: 'GOV'
    },
    {
      sector: 'International Commerce',
      title: 'Global Trade & Logistics',
      description: 'Comprehensive international trade facilitation encompassing customs management, logistics coordination, supply chain optimization, and cross-border commerce solutions for global market operations.',
      capabilities: [
        'Cross-Border Trade Management',
        'Logistics & Distribution Networks',
        'Customs & Regulatory Affairs',
        'International Market Access'
      ],
      metrics: {
        projects: '275+',
        value: '$680M+',
        efficiency: '95%',
        coverage: '25+ Markets'
      },
      image: 'https://images.unsplash.com/photo-1613501968896-6513b028274e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcm5hdGlvbmFsJTIwdHJhZGUlMjBzaGlwcGluZyUyMHBvcnQlMjBsb2dpc3RpY3N8ZW58MXx8fHwxNzU1NDc4NjU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      sectorCode: 'TRD'
    }
  ];

  const performanceMetrics = [
    { value: '6', label: 'Strategic Sectors', description: 'Core industry verticals' },
    { value: '1,200+', label: 'Projects Executed', description: 'Cumulative delivery record' },
    { value: '97%', label: 'Success Rate', description: 'Project completion standard' },
    { value: '$3.7B+', label: 'Portfolio Value', description: 'Combined sector value' }
  ];

  // Create individual animation hooks for each sector
  const sectorAnimations = strategicSectors.map((_, index) => 
    useScrollAnimation({ threshold: 0.1, delay: index * 100 })
  );

  return (
    <section className="relative bg-white overflow-hidden">
      
      {/* Strategic Header - Clean White Background */}
      <div className="bg-white border-b border-[#E5E7EB]">
        <div className="container-1920 py-16 sm:py-20">
          <div 
            ref={headerAnimation.ref}
            className={`max-w-5xl fade-in-up ${headerAnimation.isVisible ? 'visible' : ''}`}
          >
            {/* Strategic Label */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-0.5 bg-[#003883]"></div>
              <span className="text-[#003883] uppercase tracking-[2px] text-sm" style={{
                fontFamily: 'ITC Avant Garde Gothic Std Bold',
                fontWeight: 600
              }}>
                Industry Specialization
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-[#2B2B2B] mb-8" style={{
              fontFamily: 'ITC Avant Garde Gothic Std Bold',
              fontWeight: 900,
              fontSize: 'clamp(2.5rem, 5vw, 3.75rem)',
              lineHeight: '1.1',
              letterSpacing: '-0.02em'
            }}>
              STRATEGIC SECTOR<br />
              EXPERTISE
            </h2>

            {/* Strategic Description */}
            <div className="max-w-4xl space-y-6 text-[#515960] mb-12" style={{
              fontFamily: 'ITC Avant Garde Gothic Std Bold',
              fontWeight: 400,
              fontSize: '1.125rem',
              lineHeight: '1.7'
            }}>
              <p>
                THONBRIDGE delivers specialized solutions across critical industry sectors, leveraging deep domain expertise and systematic methodologies to address complex operational challenges and drive measurable performance improvements.
              </p>
              <p>
                Our sector-focused approach enables us to deliver targeted solutions that address industry-specific requirements while maintaining the highest standards of operational excellence and regulatory compliance.
              </p>
            </div>

            {/* Performance Overview Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {performanceMetrics.map((metric, index) => (
                <div 
                  key={index}
                  className={`bg-white border border-[#E5E7EB] p-6 hover:border-[#003883] hover:shadow-lg transition-all duration-300 group fade-in-scale stagger-delay-${(index + 1) * 100} ${headerAnimation.isVisible ? 'visible' : ''}`}
                >
                  <div className="text-[#003883] mb-2" style={{
                    fontFamily: 'ITC Avant Garde Gothic Std Bold',
                    fontWeight: 900,
                    fontSize: '1.875rem',
                    lineHeight: '1'
                  }}>
                    {metric.value}
                  </div>
                  <div className="text-[#2B2B2B] mb-1 uppercase tracking-[0.5px]" style={{
                    fontFamily: 'ITC Avant Garde Gothic Std Bold',
                    fontWeight: 600,
                    fontSize: '0.75rem'
                  }}>
                    {metric.label}
                  </div>
                  <div className="text-[#515960] text-xs" style={{
                    fontFamily: 'ITC Avant Garde Gothic Std Bold',
                    fontWeight: 400,
                    lineHeight: '1.4'
                  }}>
                    {metric.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Sectors Grid - Clean White Background */}
      <div className="bg-white">
        <div className="container-1920 py-20 sm:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            
            {strategicSectors.map((sector, index) => (
              <div 
                key={sector.sectorCode} 
                ref={sectorAnimations[index].ref}
                className={`relative ${index % 2 === 0 ? 'fade-in-left' : 'fade-in-right'} ${sectorAnimations[index].isVisible ? 'visible' : ''}`}
              >
                
                {/* Sector Content */}
                <div className="mb-6">
                  
                  {/* Sector Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-0.5 bg-[#003883]"></div>
                      <span className="text-[#003883] uppercase tracking-[1px] text-sm" style={{
                        fontFamily: 'ITC Avant Garde Gothic Std Bold',
                        fontWeight: 600
                      }}>
                        {sector.sector}
                      </span>
                    </div>
                    <div className="text-[#2B2B2B] text-xs tracking-[2px] font-mono bg-[#F8F9FA] px-3 py-1">
                      {sector.sectorCode}
                    </div>
                  </div>

                  {/* Sector Title */}
                  <h3 className="text-[#2B2B2B] mb-4" style={{
                    fontFamily: 'ITC Avant Garde Gothic Std Bold',
                    fontWeight: 900,
                    fontSize: 'clamp(1.5rem, 3vw, 1.875rem)',
                    lineHeight: '1.2',
                    letterSpacing: '-0.01em'
                  }}>
                    {sector.title}
                  </h3>

                  {/* Description */}
                  <div className="text-[#515960] mb-6" style={{
                    fontFamily: 'ITC Avant Garde Gothic Std Bold',
                    fontWeight: 400,
                    fontSize: '0.9375rem',
                    lineHeight: '1.6'
                  }}>
                    {sector.description}
                  </div>

                  {/* Capabilities */}
                  <div className="mb-6">
                    <h4 className="text-[#2B2B2B] mb-4 uppercase tracking-[1px]" style={{
                      fontFamily: 'ITC Avant Garde Gothic Std Bold',
                      fontWeight: 700,
                      fontSize: '0.8125rem'
                    }}>
                      Core Capabilities
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {sector.capabilities.map((capability, capIndex) => (
                        <div key={capIndex} className="flex items-center gap-3 p-3 bg-[#F8F9FA] border-l-3 border-[#003883]">
                          <div className="w-1.5 h-1.5 bg-[#003883] rounded-full flex-shrink-0"></div>
                          <span className="text-[#515960]" style={{
                            fontFamily: 'ITC Avant Garde Gothic Std Bold',
                            fontWeight: 400,
                            fontSize: '0.8125rem'
                          }}>
                            {capability}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Performance Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white border border-[#E5E7EB] p-4 text-center">
                      <div className="text-[#003883] mb-1" style={{
                        fontFamily: 'ITC Avant Garde Gothic Std Bold',
                        fontWeight: 900,
                        fontSize: '1.5rem'
                      }}>
                        {sector.metrics.projects}
                      </div>
                      <div className="text-[#515960] text-xs uppercase tracking-[0.5px]" style={{
                        fontFamily: 'ITC Avant Garde Gothic Std Bold',
                        fontWeight: 400
                      }}>
                        Projects
                      </div>
                    </div>
                    <div className="bg-white border border-[#E5E7EB] p-4 text-center">
                      <div className="text-[#003883] mb-1" style={{
                        fontFamily: 'ITC Avant Garde Gothic Std Bold',
                        fontWeight: 900,
                        fontSize: '1.5rem'
                      }}>
                        {sector.metrics.value}
                      </div>
                      <div className="text-[#515960] text-xs uppercase tracking-[0.5px]" style={{
                        fontFamily: 'ITC Avant Garde Gothic Std Bold',
                        fontWeight: 400
                      }}>
                        Portfolio Value
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sector Image */}
                <div className="relative h-[300px] lg:h-[350px]">
                  <ImageWithFallback
                    src={sector.image}
                    alt={sector.title}
                    className="w-full h-full object-cover hover:scale-105 transition-all duration-500"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2B2B2B]/90 via-[#2B2B2B]/20 to-transparent"></div>
                  
                  {/* Performance Badge */}
                  <div className="absolute top-6 right-6">
                    <div className="bg-[#003883]/90 backdrop-blur-sm text-white px-4 py-2">
                      <div className="text-center">
                        <div style={{
                          fontFamily: 'ITC Avant Garde Gothic Std Bold',
                          fontWeight: 900,
                          fontSize: '1.125rem',
                          lineHeight: '1'
                        }}>
                          {sector.metrics.efficiency}
                        </div>
                        <div className="uppercase text-xs tracking-[1px] mt-1" style={{
                          fontFamily: 'ITC Avant Garde Gothic Std Bold',
                          fontWeight: 400
                        }}>
                          Success Rate
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Information Badge */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/95 backdrop-blur-sm p-4 border-l-4 border-[#003883]">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-[#2B2B2B] uppercase tracking-[1px] mb-1" style={{
                            fontFamily: 'ITC Avant Garde Gothic Std Bold',
                            fontWeight: 700,
                            fontSize: '0.8125rem'
                          }}>
                            {sector.sector}
                          </div>
                          <div className="text-[#515960] text-xs" style={{
                            fontFamily: 'ITC Avant Garde Gothic Std Bold',
                            fontWeight: 400,
                            lineHeight: '1.4'
                          }}>
                            Market Coverage: {sector.metrics.coverage}
                          </div>
                        </div>
                        <div className="text-[#003883]" style={{
                          fontFamily: 'ITC Avant Garde Gothic Std Bold',
                          fontWeight: 900,
                          fontSize: '1.25rem'
                        }}>
                          {String(index + 1).padStart(2, '0')}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Integrated Sector Capability - White Background */}
      <div className="bg-white">
        <div className="container-1920 py-16">
          <div 
            ref={summaryAnimation.ref}
            className={`grid lg:grid-cols-12 gap-12 lg:gap-16 items-center fade-in-up ${summaryAnimation.isVisible ? 'visible' : ''}`}
          >
            
            {/* Left Content */}
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-0.5 bg-[#003883]"></div>
                <span className="text-[#003883] uppercase tracking-[2px] text-sm" style={{
                  fontFamily: 'ITC Avant Garde Gothic Std Bold',
                  fontWeight: 600
                }}>
                  Cross-Sector Excellence
                </span>
              </div>

              <h3 className="text-[#2B2B2B] mb-6" style={{
                fontFamily: 'ITC Avant Garde Gothic Std Bold',
                fontWeight: 900,
                fontSize: 'clamp(1.875rem, 4vw, 2.5rem)',
                lineHeight: '1.2',
                letterSpacing: '-0.01em'
              }}>
                INTEGRATED SECTOR<br />
                CAPABILITIES
              </h3>
              
              <div className="text-[#515960] mb-8 max-w-2xl" style={{
                fontFamily: 'ITC Avant Garde Gothic Std Bold',
                fontWeight: 400,
                fontSize: '1.125rem',
                lineHeight: '1.6'
              }}>
                Our sector-specific expertise enables cross-industry innovation and knowledge transfer, delivering comprehensive solutions that leverage best practices across multiple industry verticals.
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="bg-[#F4F4F4] border border-[#E5E7EB] px-6 py-4">
                  <div className="text-[#003883] mb-1" style={{
                    fontFamily: 'ITC Avant Garde Gothic Std Bold',
                    fontWeight: 900,
                    fontSize: '1.5rem'
                  }}>
                    6
                  </div>
                  <div className="text-[#515960] text-sm uppercase tracking-[1px]" style={{
                    fontFamily: 'ITC Avant Garde Gothic Std Bold',
                    fontWeight: 400
                  }}>
                    Strategic Sectors
                  </div>
                </div>
                
                <div className="bg-[#F4F4F4] border border-[#E5E7EB] px-6 py-4">
                  <div className="text-[#003883] mb-1" style={{
                    fontFamily: 'ITC Avant Garde Gothic Std Bold',
                    fontWeight: 900,
                    fontSize: '1.5rem'
                  }}>
                    25+
                  </div>
                  <div className="text-[#515960] text-sm uppercase tracking-[1px]" style={{
                    fontFamily: 'ITC Avant Garde Gothic Std Bold',
                    fontWeight: 400
                  }}>
                    Global Markets
                  </div>
                </div>
              </div>
            </div>

            {/* Right Performance Summary */}
            <div className="lg:col-span-4">
              <div className="bg-[#F4F4F4] border border-[#E5E7EB] p-6">
                <h4 className="text-[#2B2B2B] mb-6 uppercase tracking-[1px]" style={{
                  fontFamily: 'ITC Avant Garde Gothic Std Bold',
                  fontWeight: 700,
                  fontSize: '1rem'
                }}>
                  Sector Performance Overview
                </h4>
                
                <div className="space-y-4">
                  {[
                    { label: 'Energy & Utilities', value: '185 Projects' },
                    { label: 'Manufacturing', value: '320 Projects' },
                    { label: 'Infrastructure', value: '205 Projects' },
                    { label: 'International Trade', value: '275 Projects' }
                  ].map((stat, index) => (
                    <div key={index} className="flex items-center justify-between py-2 border-b border-[#E5E7EB]">
                      <span className="text-[#515960]" style={{
                        fontFamily: 'ITC Avant Garde Gothic Std Bold',
                        fontWeight: 400,
                        fontSize: '0.875rem'
                      }}>
                        {stat.label}
                      </span>
                      <span className="text-[#2B2B2B]" style={{
                        fontFamily: 'ITC Avant Garde Gothic Std Bold',
                        fontWeight: 700,
                        fontSize: '0.9375rem'
                      }}>
                        {stat.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}