import React, { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import exampleImage from 'figma:asset/ab767201efc0762de75b84c01d320febba80bc67.png';

export function AboutSection() {
  const [activeTab, setActiveTab] = useState('story');

  const coreValues = [
    {
      icon: "🎯",
      title: 'Integrity',
      description: 'Unwavering commitment to ethical practices and transparent business dealings across all global operations.',
      stat: '100%'
    },
    {
      icon: "⚡",
      title: 'Efficiency', 
      description: 'Streamlined processes and innovative solutions that deliver maximum value in minimum time.',
      stat: '40%'
    },
    {
      icon: "🚀",
      title: 'Innovation',
      description: 'Forward-thinking approaches and cutting-edge technology integration for competitive advantage.',
      stat: '250%'
    },
    {
      icon: "🌍",
      title: 'Global Reach',
      description: 'Extensive network connecting markets, industries, and opportunities across multiple continents.',
      stat: '25+'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white to-[#F4F4F4]">
      <div className="max-w-[1170px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Story Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 
              className="text-[#2B2B2B] mb-6 uppercase"
              style={{
                fontFamily: 'Effra',
                fontWeight: 900,
                fontSize: '33.3px',
                lineHeight: '36.67px',
                fontVariationSettings: "'YTLC' 500, 'wdth' 100"
              }}
            >
              Who We Are
            </h2>
            
            <div 
              className="text-[#2B2B2B] max-w-4xl mx-auto mb-8"
              style={{
                fontFamily: 'Effra',
                fontWeight: 400,
                fontSize: '20px',
                lineHeight: '28px',
                fontVariationSettings: "'YTLC' 500, 'wdth' 100"
              }}
            >
              THONBRIDGE is a multi-sector global solutions provider specializing in procurement services, international trade, engineering solutions, agricultural development, and infrastructure delivery. We are the trusted bridge between opportunities and solutions in global markets.
            </div>
          </div>

          {/* Interactive Tabs */}
          <div className="flex justify-center mb-12">
            <div className="bg-white border border-[#e5e5e5] rounded-lg p-2 inline-flex gap-2">
              {[
                { id: 'story', label: 'Our Story' },
                { id: 'vision', label: 'Vision & Mission' },
                { id: 'values', label: 'Core Values' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-md transition-all duration-300 ${
                    activeTab === tab.id 
                      ? 'bg-[#003883] text-white shadow-lg' 
                      : 'text-[#2B2B2B] hover:bg-[#F4F4F4]'
                  }`}
                  style={{
                    fontFamily: 'Effra',
                    fontWeight: 500,
                    fontSize: '14px',
                    lineHeight: '18px',
                    fontVariationSettings: "'YTLC' 500, 'wdth' 100"
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-2xl border border-[#e5e5e5] p-8 shadow-lg">
            {activeTab === 'story' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 
                    className="text-[#2B2B2B] mb-6 uppercase"
                    style={{
                      fontFamily: 'Effra',
                      fontWeight: 900,
                      fontSize: '24px',
                      lineHeight: '28px',
                      fontVariationSettings: "'YTLC' 500, 'wdth' 100"
                    }}
                  >
                    Building Bridges Since 2009
                  </h3>
                  
                  <div 
                    className="text-[#2B2B2B] mb-6"
                    style={{
                      fontFamily: 'Effra',
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '24px',
                      fontVariationSettings: "'YTLC' 500, 'wdth' 100"
                    }}
                  >
                    <p className="mb-4">Founded with a bold vision to connect global opportunities, THONBRIDGE has grown from a small procurement consultancy to a worldwide leader in multi-sector solutions.</p>
                    <p className="mb-4">Our journey began when our founders recognized the critical gap between businesses seeking resources and the complex global supply chains that could provide them.</p>
                    <p>Today, we serve as the essential bridge connecting businesses to opportunities across 25+ countries, 6 major industries, and countless successful partnerships.</p>
                  </div>

                  {/* Key Stats */}
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { number: '15+', label: 'Years Experience' },
                      { number: '500+', label: 'Projects Delivered' },
                      { number: '25+', label: 'Countries Served' }
                    ].map((stat, index) => (
                      <div key={index} className="text-center p-4 bg-[#F4F4F4] rounded-lg">
                        <div 
                          className="text-[#003883] mb-1"
                          style={{
                            fontFamily: 'Effra',
                            fontWeight: 900,
                            fontSize: '24px',
                            lineHeight: '28px',
                            fontVariationSettings: "'YTLC' 500, 'wdth' 100"
                          }}
                        >
                          {stat.number}
                        </div>
                        <div 
                          className="text-[#515960] uppercase"
                          style={{
                            fontFamily: 'Effra',
                            fontWeight: 500,
                            fontSize: '12px',
                            lineHeight: '16px',
                            fontVariationSettings: "'YTLC' 500, 'wdth' 100"
                          }}
                        >
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <img
                    src={exampleImage}
                    alt="THONBRIDGE professional team"
                    className="w-full h-96 object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
                </div>
              </div>
            )}

            {activeTab === 'vision' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div className="bg-gradient-to-r from-[#003883] to-[#002d6b] p-8 rounded-xl text-white">
                    <h3 
                      className="mb-4 uppercase"
                      style={{
                        fontFamily: 'Effra',
                        fontWeight: 900,
                        fontSize: '20px',
                        lineHeight: '24px',
                        fontVariationSettings: "'YTLC' 500, 'wdth' 100"
                      }}
                    >
                      Our Vision
                    </h3>
                    <p 
                      style={{
                        fontFamily: 'Effra',
                        fontWeight: 400,
                        fontSize: '18px',
                        lineHeight: '26px',
                        fontVariationSettings: "'YTLC' 500, 'wdth' 100"
                      }}
                    >
                      To be the trusted bridge between opportunities and solutions in global markets, creating lasting value for businesses and communities worldwide.
                    </p>
                  </div>

                  <div className="bg-[#F4F4F4] p-8 rounded-xl">
                    <h3 
                      className="text-[#2B2B2B] mb-4 uppercase"
                      style={{
                        fontFamily: 'Effra',
                        fontWeight: 900,
                        fontSize: '20px',
                        lineHeight: '24px',
                        fontVariationSettings: "'YTLC' 500, 'wdth' 100"
                      }}
                    >
                      Our Mission
                    </h3>
                    <p 
                      className="text-[#2B2B2B]"
                      style={{
                        fontFamily: 'Effra',
                        fontWeight: 400,
                        fontSize: '18px',
                        lineHeight: '26px',
                        fontVariationSettings: "'YTLC' 500, 'wdth' 100"
                      }}
                    >
                      To deliver innovative, reliable, and sustainable solutions that empower businesses and communities to thrive in an interconnected global economy.
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1600367163359-d51d40bcb5f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBoZWFkcXVhcnRlcnMlMjBidWlsZGluZ3xlbnwxfHx8fDE3NTU0MDU1ODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="THONBRIDGE modern headquarters"
                    className="w-full h-96 object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
                </div>
              </div>
            )}

            {activeTab === 'values' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {coreValues.map((value, index) => (
                  <div 
                    key={value.title}
                    className="group bg-white border border-[#e5e5e5] p-6 rounded-xl hover:shadow-lg hover:border-[#003883] transition-all duration-500 transform hover:-translate-y-1"
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                        {value.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-3">
                          <h4 
                            className="text-[#2B2B2B] uppercase"
                            style={{
                              fontFamily: 'Effra',
                              fontWeight: 900,
                              fontSize: '16px',
                              lineHeight: '20px',
                              fontVariationSettings: "'YTLC' 500, 'wdth' 100"
                            }}
                          >
                            {value.title}
                          </h4>
                          <span 
                            className="text-[#003883]"
                            style={{
                              fontFamily: 'Effra',
                              fontWeight: 900,
                              fontSize: '20px',
                              lineHeight: '24px',
                              fontVariationSettings: "'YTLC' 500, 'wdth' 100"
                            }}
                          >
                            {value.stat}
                          </span>
                        </div>
                        <p 
                          className="text-[#515960]"
                          style={{
                            fontFamily: 'Effra',
                            fontWeight: 400,
                            fontSize: '14px',
                            lineHeight: '20px',
                            fontVariationSettings: "'YTLC' 500, 'wdth' 100"
                          }}
                        >
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}