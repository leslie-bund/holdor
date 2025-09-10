import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useScrollAnimation } from './hooks/useScrollAnimation';

interface ServicesSectionProps {
  onPageChange: (page: string) => void;
}

export function ServicesSection({ onPageChange }: ServicesSectionProps) {
  const headerAnimation = useScrollAnimation({ threshold: 0.2 });

  const strategicCapabilities = [
    {
      category: 'Procurement Excellence',
      title: 'Global Sourcing & Supply Chain',
      description: 'Strategic procurement solutions leveraging global supplier networks to optimize cost, quality, and delivery performance across diverse industrial sectors.',
      metrics: {
        value: '98%',
        label: 'Cost Optimization Rate',
        description: 'Average procurement savings achieved'
      },
      capabilities: [
        'Supplier Network Management',
        'Quality Assurance Protocols',
        'Strategic Cost Analysis',
        'Risk Mitigation Systems'
      ],
      image: 'https://images.unsplash.com/photo-1675093022653-59233299f8ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZW5naW5lZXJpbmclMjBmYWNpbGl0eSUyMHBpcGVsaW5lfGVufDF8fHx8MTc1NTQ3ODQyNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      sectorCode: 'PROC'
    },
    {
      category: 'International Commerce',
      title: 'Cross-Border Trade Operations',
      description: 'Comprehensive trade facilitation services enabling seamless international commerce through expert navigation of regulatory frameworks and logistics networks.',
      metrics: {
        value: '25+',
        label: 'Global Markets',
        description: 'Active trade corridors'
      },
      capabilities: [
        'Customs & Compliance',
        'Documentation Systems',
        'Logistics Coordination',
        'Trade Risk Management'
      ],
      image: 'https://images.unsplash.com/photo-1686331410341-99d6b781e4b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbG9iYWwlMjB0cmFkZSUyMHNoaXBwaW5nJTIwcG9ydCUyMGluZnJhc3RydWN0dXJlfGVufDF8fHx8MTc1NTQ3ODQzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      sectorCode: 'INTL'
    },
    {
      category: 'Engineering Solutions',
      title: 'Advanced Technical Services',
      description: 'Integrated engineering solutions combining innovative design methodologies with systematic project execution to deliver sustainable infrastructure and industrial systems.',
      metrics: {
        value: '$2.5B+',
        label: 'Project Portfolio Value',
        description: 'Cumulative engineering delivery'
      },
      capabilities: [
        'Systems Engineering',
        'Project Integration',
        'Quality Assurance',
        'Technology Innovation'
      ],
      image: 'https://images.unsplash.com/photo-1738162837389-3b02d6dd507b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbWFudWZhY3R1cmluZyUyMHByZWNpc2lvbiUyMGVuZ2luZWVyaW5nfGVufDF8fHx8MTc1NTQ3ODQyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      sectorCode: 'ENGR'
    },
    {
      category: 'Agricultural Innovation',
      title: 'Modern Agricultural Systems',
      description: 'Technology-driven agricultural solutions integrating precision farming techniques with market-oriented supply chain optimization to maximize productivity and sustainability.',
      metrics: {
        value: '750+',
        label: 'Projects Delivered',
        description: 'Agricultural implementations'
      },
      capabilities: [
        'Technology Integration',
        'Market Linkage Systems',
        'Supply Chain Optimization',
        'Productivity Enhancement'
      ],
      image: 'https://images.unsplash.com/photo-1677126577258-1a82fdf1a976?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtb2Rlcm4lMjBhZ3JpY3VsdHVyZSUyMHRlY2hub2xvZ3klMjBmYXJtaW5nJTIwYWVyaWFsfGVufDF8fHx8MTc1NTQ3ODQ0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      sectorCode: 'AGRI'
    },
    {
      category: 'Infrastructure Development',
      title: 'Strategic Infrastructure Systems',
      description: 'Comprehensive infrastructure development leveraging sustainable technologies and systematic project management to deliver transformative regional connectivity and economic development.',
      metrics: {
        value: '100%',
        label: 'Compliance Rate',
        description: 'Regulatory adherence standard'
      },
      capabilities: [
        'Infrastructure Planning',
        'Sustainable Development',
        'Public-Private Partnerships',
        'Regional Connectivity'
      ],
      image: 'https://images.unsplash.com/photo-1628233281310-2564872c48c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZW5ld2FibGUlMjBlbmVyZ3klMjBpbmZyYXN0cnVjdHVyZSUyMHNvbGFyJTIwcGFuZWxzfGVufDF8fHx8MTc1NTQ3ODQzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      sectorCode: 'INFR'
    }
  ];

  const overallMetrics = [
    { value: '750+', label: 'Projects Executed', description: 'Global delivery track record' },
    { value: '25+', label: 'Market Presence', description: 'International operations' },
    { value: '98%', label: 'Client Retention', description: 'Partnership sustainability' },
    { value: '$2.5B+', label: 'Portfolio Value', description: 'Cumulative project scale' }
  ];

  // Create individual animation hooks for each service
  const serviceAnimations = strategicCapabilities.map((_, index) => 
    useScrollAnimation({ threshold: 0.1, delay: index * 100 })
  );

  return (
    <section className="relative bg-white overflow-hidden">
      
      {/* Strategic Header */}
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
                Core Business Solutions
              </span>
            </div>

            {/* Main Heading - Enhanced Size and Boldness */}
            <h2 className="text-[#2B2B2B] mb-8" style={{
              fontFamily: 'ITC Avant Garde Gothic Std Bold',
              fontWeight: 900,
              fontSize: 'clamp(3.5rem, 7vw, 5.75rem)',
              lineHeight: '0.95',
              letterSpacing: '-0.02em'
            }}>
              INTEGRATED BUSINESS<br />
              CAPABILITIES
            </h2>

            {/* Strategic Description */}
            <div className="max-w-4xl space-y-6 text-[#515960] mb-12" style={{
              fontFamily: 'ITC Avant Garde Gothic Std Bold',
              fontWeight: 400,
              fontSize: '1.125rem',
              lineHeight: '1.7'
            }}>
              <p>
                THONBRIDGE delivers comprehensive solutions across critical business functions, combining operational excellence with strategic market intelligence to drive sustainable competitive advantages.
              </p>
              <p>
                Our integrated approach spans procurement optimization, international trade facilitation, engineering innovation, agricultural modernization, and infrastructure development.
              </p>
            </div>

            {/* Performance Metrics Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {overallMetrics.map((metric, index) => (
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
                  
                  {/* Progress Indicator */}
                  <div className="mt-4 h-1 bg-[#F3F4F6] rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-[#003883] rounded-full transition-all duration-1000 group-hover:bg-[#002d6b]"
                      style={{ width: index === 0 ? '95%' : index === 1 ? '85%' : index === 2 ? '98%' : '90%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Capabilities Section */}
      <div className="container-1920 py-20 sm:py-24">
        <div className="space-y-20">
          
          {strategicCapabilities.map((capability, index) => (
            <div 
              key={capability.sectorCode}
              ref={serviceAnimations[index].ref}
              className={`${index % 2 === 0 ? 'fade-in-left' : 'fade-in-right'} ${serviceAnimations[index].isVisible ? 'visible' : ''}`}
            >
              <div className={`grid lg:grid-cols-12 gap-12 lg:gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                
                {/* Content Column */}
                <div className={`lg:col-span-7 ${index % 2 === 1 ? 'lg:col-start-6' : ''}`}>
                  
                  {/* Category & Sector Code */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-0.5 bg-[#003883]"></div>
                      <span className="text-[#003883] uppercase tracking-[1px] text-sm" style={{
                        fontFamily: 'ITC Avant Garde Gothic Std Bold',
                        fontWeight: 600
                      }}>
                        {capability.category}
                      </span>
                    </div>
                    <div className="text-[#2B2B2B] text-xs tracking-[2px] font-mono bg-[#F8F9FA] px-3 py-1">
                      {capability.sectorCode}
                    </div>
                  </div>

                  {/* Service Title - Enhanced Size and Boldness */}
                  <h3 className="text-[#2B2B2B] mb-6" style={{
                    fontFamily: 'ITC Avant Garde Gothic Std Bold',
                    fontWeight: 900,
                    fontSize: 'clamp(2.25rem, 5vw, 2.75rem)',
                    lineHeight: '1.1',
                    letterSpacing: '-0.01em'
                  }}>
                    {capability.title}
                  </h3>

                  {/* Description */}
                  <div className="text-[#515960] mb-8" style={{
                    fontFamily: 'ITC Avant Garde Gothic Std Bold',
                    fontWeight: 400,
                    fontSize: '1rem',
                    lineHeight: '1.6'
                  }}>
                    {capability.description}
                  </div>

                  {/* Capabilities Grid */}
                  <div className="mb-8">
                    <h4 className="text-[#2B2B2B] mb-4 uppercase tracking-[1px]" style={{
                      fontFamily: 'ITC Avant Garde Gothic Std Bold',
                      fontWeight: 700,
                      fontSize: '0.875rem'
                    }}>
                      Key Capabilities
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {capability.capabilities.map((cap, capIndex) => (
                        <div key={capIndex} className="flex items-center gap-3 p-3 bg-[#F8F9FA] border-l-3 border-[#003883]">
                          <div className="w-1.5 h-1.5 bg-[#003883] rounded-full flex-shrink-0"></div>
                          <span className="text-[#515960]" style={{
                            fontFamily: 'ITC Avant Garde Gothic Std Bold',
                            fontWeight: 400,
                            fontSize: '0.875rem'
                          }}>
                            {cap}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Performance Metric */}
                  <div className="bg-white border border-[#E5E7EB] p-6 mb-8">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-[#003883] mb-1" style={{
                          fontFamily: 'ITC Avant Garde Gothic Std Bold',
                          fontWeight: 900,
                          fontSize: '2.25rem',
                          lineHeight: '1'
                        }}>
                          {capability.metrics.value}
                        </div>
                        <div className="text-[#2B2B2B] mb-1 uppercase tracking-[0.5px]" style={{
                          fontFamily: 'ITC Avant Garde Gothic Std Bold',
                          fontWeight: 600,
                          fontSize: '0.875rem'
                        }}>
                          {capability.metrics.label}
                        </div>
                        <div className="text-[#515960] text-sm" style={{
                          fontFamily: 'ITC Avant Garde Gothic Std Bold',
                          fontWeight: 400
                        }}>
                          {capability.metrics.description}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="w-16 h-16 bg-[#F8F9FA] border border-[#E5E7EB] flex items-center justify-center">
                          <span className="text-[#003883]" style={{
                            fontFamily: 'ITC Avant Garde Gothic Std Bold',
                            fontWeight: 900,
                            fontSize: '1.25rem'
                          }}>
                            {String(index + 1).padStart(2, '0')}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <button 
                    onClick={() => onPageChange('services')}
                    className="bg-[#003883] text-white px-8 py-4 hover:bg-[#002d6b] transition-all duration-300 flex items-center gap-3 group"
                  >
                    <span className="uppercase tracking-[1px]" style={{
                      fontFamily: 'ITC Avant Garde Gothic Std Bold',
                      fontWeight: 600,
                      fontSize: '0.875rem'
                    }}>
                      Explore Capability
                    </span>
                    <div className="w-4 h-0.5 bg-white group-hover:w-6 transition-all duration-300"></div>
                  </button>
                </div>

                {/* Image Column */}
                <div className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="relative h-[500px] lg:h-[600px]">
                    
                    {/* Main Image */}
                    <div className="relative h-full">
                      <ImageWithFallback
                        src={capability.image}
                        alt={capability.title}
                        className="w-full h-full object-cover filter contrast-110 saturate-90"
                      />
                      
                      {/* Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#2B2B2B]/90 via-[#2B2B2B]/20 to-transparent"></div>
                      
                      {/* Bottom Information Badge */}
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="bg-white/95 backdrop-blur-sm p-4 border-l-4 border-[#003883]">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="text-[#2B2B2B] uppercase tracking-[1px] mb-1" style={{
                                fontFamily: 'ITC Avant Garde Gothic Std Bold',
                                fontWeight: 700,
                                fontSize: '0.875rem'
                              }}>
                                {capability.category}
                              </div>
                              <div className="text-[#515960] text-sm" style={{
                                fontFamily: 'ITC Avant Garde Gothic Std Bold',
                                fontWeight: 400,
                                lineHeight: '1.4'
                              }}>
                                Global operational capability
                              </div>
                            </div>
                            <div className="text-[#003883]" style={{
                              fontFamily: 'ITC Avant Garde Gothic Std Bold',
                              fontWeight: 900,
                              fontSize: '1.5rem'
                            }}>
                              {capability.metrics.value}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}