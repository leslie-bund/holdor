import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function WhyChooseSection() {
  const advantages = [
    {
      icon: "🌍",
      title: 'Global Network',
      description: 'Strategic partnerships and supplier networks spanning across 25+ countries and 4 continents.',
      stat: '25+',
      statLabel: 'Countries'
    },
    {
      icon: "⚡",
      title: 'One-Stop Solutions',
      description: 'End-to-end project management from initial sourcing to final delivery and beyond.',
      stat: '360°',
      statLabel: 'Service Coverage'
    },
    {
      icon: "🏆",
      title: 'Proven Excellence',
      description: 'Track record of successful projects across diverse sectors with 98% client satisfaction.',
      stat: '98%',
      statLabel: 'Client Satisfaction'
    },
    {
      icon: "🔧",
      title: 'Custom Solutions',
      description: 'Tailored engineering and procurement services designed for each client\'s unique requirements.',
      stat: '100%',
      statLabel: 'Customized'
    },
    {
      icon: "🚀",
      title: 'Innovation Driven',
      description: 'Cutting-edge technology integration and innovative approaches to complex challenges.',
      stat: '15+',
      statLabel: 'Years Experience'
    },
    {
      icon: "🛡️",
      title: 'Quality Assurance',
      description: 'Rigorous quality control processes and international compliance standards across all projects.',
      stat: 'ISO',
      statLabel: 'Certified'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#F4F4F4] to-white">
      <div className="max-w-[1170px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            className="text-[#2B2B2B] mb-6 uppercase"
            style={{
              fontFamily: 'Nunito Sans',
              fontWeight: 900,
              fontSize: '33.3px',
              lineHeight: '36.67px',
              fontVariationSettings: "'YTLC' 500, 'wdth' 100"
            }}
          >
            Why Choose THONBRIDGE
          </h2>
          
          <div 
            className="text-[#2B2B2B] max-w-3xl mx-auto mb-12"
            style={{
              fontFamily: 'Nunito Sans',
              fontWeight: 400,
              fontSize: '18px',
              lineHeight: '26px',
              fontVariationSettings: "'YTLC' 500, 'wdth' 100"
            }}
          >
            We don't just deliver services - we create lasting partnerships that drive global success through innovation, reliability, and excellence.
          </div>
        </div>

        {/* Main Content with Background Image */}
        <div className="relative">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1570106413982-7f2897b8d0c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbG9iYWwlMjBidXNpbmVzcyUyMG5ldHdvcmslMjB3b3JsZCUyMG1hcHxlbnwxfHx8fDE3NTU0MDUwMzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Global business network"
              className="w-full h-full object-cover opacity-10"
            />
          </div>

          {/* Content Grid */}
          <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl border border-[#e5e5e5] p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {advantages.map((advantage, index) => (
                <div 
                  key={advantage.title} 
                  className="group text-center p-6 bg-white rounded-xl border border-[#F4F4F4] hover:border-[#003883] hover:shadow-lg transition-all duration-500 transform hover:-translate-y-1"
                >
                  {/* Icon */}
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {advantage.icon}
                  </div>

                  {/* Stat */}
                  <div 
                    className="text-[#003883] mb-2"
                    style={{
                      fontFamily: 'Nunito Sans',
                      fontWeight: 900,
                      fontSize: '24px',
                      lineHeight: '28px',
                      fontVariationSettings: "'YTLC' 500, 'wdth' 100"
                    }}
                  >
                    {advantage.stat}
                  </div>
                  
                  <div 
                    className="text-[#515960] mb-3 uppercase tracking-[1px]"
                    style={{
                      fontFamily: 'Nunito Sans',
                      fontWeight: 500,
                      fontSize: '10px',
                      lineHeight: '12px',
                      fontVariationSettings: "'YTLC' 500, 'wdth' 100"
                    }}
                  >
                    {advantage.statLabel}
                  </div>

                  {/* Title */}
                  <h3 
                    className="text-[#2B2B2B] mb-3 uppercase"
                    style={{
                      fontFamily: 'Nunito Sans',
                      fontWeight: 900,
                      fontSize: '16px',
                      lineHeight: '20px',
                      fontVariationSettings: "'YTLC' 500, 'wdth' 100"
                    }}
                  >
                    {advantage.title}
                  </h3>

                  {/* Description */}
                  <p 
                    className="text-[#515960]"
                    style={{
                      fontFamily: 'Nunito Sans',
                      fontWeight: 400,
                      fontSize: '14px',
                      lineHeight: '20px',
                      fontVariationSettings: "'YTLC' 500, 'wdth' 100"
                    }}
                  >
                    {advantage.description}
                  </p>

                  {/* Accent Line */}
                  <div className="mt-4 h-0.5 bg-[#F4F4F4] group-hover:bg-[#003883] transition-colors duration-300 mx-auto w-12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div 
            className="text-[#2B2B2B] mb-8 max-w-2xl mx-auto"
            style={{
              fontFamily: 'Nunito Sans',
              fontWeight: 500,
              fontSize: '18px',
              lineHeight: '26px',
              fontVariationSettings: "'YTLC' 500, 'wdth' 100"
            }}
          >
            Ready to experience the THONBRIDGE difference? Let's discuss how we can help bridge your business to global opportunities.
          </div>
          
          <button className="bg-[#003883] text-white px-12 py-4 hover:bg-[#002d6b] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            <span 
              className="uppercase tracking-[4px] text-[12px] font-normal leading-[17.14px]"
              style={{
                fontFamily: 'Nunito Sans',
                fontVariationSettings: "'YTLC' 500, 'wdth' 100"
              }}
            >
              GET STARTED TODAY
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}