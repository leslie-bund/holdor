import React, { useState, useEffect } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function KeyHighlights() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % industries.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const industries = [
    {
      title: 'Strategic Procurement',
      description: 'Global sourcing solutions that optimize costs, ensure quality, and deliver on time through our extensive supplier network.',
      image: 'https://images.unsplash.com/photo-1739204618173-3e89def7140f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzdXBwbHklMjBjaGFpbiUyMGxvZ2lzdGljcyUyMHdhcmVob3VzZXxlbnwxfHx8fDE3NTU0MDgwMzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      icon: '📦',
      stat: 'Premier',
      statLabel: 'Solutions'
    },
    {
      title: 'International Trade',
      description: 'Expert navigation of global markets, handling customs, regulations, and cross-border commerce with precision.',
      image: 'https://images.unsplash.com/photo-1748381837670-384f5523fe2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbG9iYWwlMjBzaGlwcGluZyUyMGNvbnRhaW5lcnMlMjBwb3J0fGVufDF8fHx8MTc1NTQwODA0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      icon: '🌍',
      stat: 'Global',
      statLabel: 'Reach'
    },
    {
      title: 'Engineering Solutions',
      description: 'Infrastructure and engineering projects from concept to completion, driving sustainable development worldwide.',
      image: 'https://images.unsplash.com/photo-1609293241092-8c4e5cf64af8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBlbmdpbmVlcmluZyUyMGJ1aWxkaW5nJTIwc2l0ZXxlbnwxfHx8fDE3NTU0MDgwNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      icon: '🏗️',
      stat: 'Advanced',
      statLabel: 'Technology'
    },
    {
      title: 'Agricultural Technology',
      description: 'Modern farming solutions and agricultural innovation that transform food production and empower communities.',
      image: 'https://images.unsplash.com/photo-1722119272044-fc49006131e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGFncmljdWx0dXJlJTIwdGVjaG5vbG9neSUyMGZhcm1pbmd8ZW58MXx8fHwxNzU1NDA4MDUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      icon: '🌱',
      stat: 'Smart',
      statLabel: 'Innovation'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-[#003883]/10 rounded-full mb-4">
            <span className="text-[#003883] text-sm uppercase tracking-wider">Core Capabilities</span>
          </div>
          <h2 className="text-[#2B2B2B] mb-4">Excellence Across Industries</h2>
          <p className="text-[#515960] max-w-2xl mx-auto">
            Delivering innovative solutions across four key sectors, creating value for businesses worldwide.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Featured Industry */}
          <div className="order-2 lg:order-1">
            <div className="relative rounded-xl overflow-hidden shadow-lg group">
              <div className="aspect-[4/3] relative">
                <ImageWithFallback
                  src={industries[activeIndex].image}
                  alt={industries[activeIndex].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{industries[activeIndex].icon}</span>
                    <div>
                      <div className="text-2xl font-bold">{industries[activeIndex].stat}</div>
                      <div className="text-sm opacity-90">{industries[activeIndex].statLabel}</div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{industries[activeIndex].title}</h3>
                  <p className="text-sm opacity-90 leading-relaxed max-w-sm">
                    {industries[activeIndex].description}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation dots */}
            <div className="flex justify-center gap-2 mt-6">
              {industries.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex 
                      ? 'bg-[#003883] w-6' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Industry List */}
          <div className="order-1 lg:order-2 space-y-4">
            {industries.map((industry, index) => (
              <div
                key={industry.title}
                onClick={() => setActiveIndex(index)}
                className={`cursor-pointer p-6 rounded-lg border transition-all duration-300 ${
                  index === activeIndex 
                    ? 'border-[#003883] bg-[#003883]/5 shadow-md' 
                    : 'border-gray-200 hover:border-gray-300 hover:shadow-sm'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      index === activeIndex ? 'bg-[#003883] text-white' : 'bg-gray-100'
                    } transition-colors duration-300`}>
                      <span className="text-lg">{industry.icon}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className={`font-bold mb-2 ${
                      index === activeIndex ? 'text-[#003883]' : 'text-[#2B2B2B]'
                    }`}>
                      {industry.title}
                    </h4>
                    <p className="text-[#515960] text-sm leading-relaxed">
                      {industry.description}
                    </p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className={`text-2xl font-bold ${
                      index === activeIndex ? 'text-[#003883]' : 'text-[#2B2B2B]'
                    }`}>
                      {industry.stat}
                    </div>
                    <div className="text-xs text-[#515960] uppercase tracking-wide">
                      {industry.statLabel}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 pt-12 border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-[#003883] mb-2">Industry</div>
              <div className="text-sm text-[#515960] uppercase tracking-wide">Leaders</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#003883] mb-2">Global</div>
              <div className="text-sm text-[#515960] uppercase tracking-wide">Excellence</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#003883] mb-2">Premier</div>
              <div className="text-sm text-[#515960] uppercase tracking-wide">Solutions</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#003883] mb-2">Trusted</div>
              <div className="text-sm text-[#515960] uppercase tracking-wide">Partners</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}