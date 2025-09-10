import React from 'react';
import { useScrollAnimation } from './hooks/useScrollAnimation';

export function LogoMarquee() {
  const marqueeAnimation = useScrollAnimation({ threshold: 0.1 });

  // Strategic Corporate Partners for Scrolling Marquee with Colored Logos
  const marqueePartners = [
    { 
      name: 'PETROTECH GLOBAL', 
      industry: 'Energy',
      color: '#FF6B35', // Energy orange
      logo: (
        <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
          <rect width="48" height="48" rx="8" fill="#FF6B35"/>
          <path d="M12 16h24v4H12v-4zm0 8h16v4H12v-4zm0 8h20v4H12v-4z" fill="white"/>
          <circle cx="36" cy="32" r="6" fill="white"/>
        </svg>
      )
    },
    { 
      name: 'ATLAS MANUFACTURING', 
      industry: 'Industrial',
      color: '#2E86AB', // Industrial blue
      logo: (
        <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="24" fill="#2E86AB"/>
          <path d="M18 12l6 10 6-10h4l-8 14v10h-4V26l-8-14h4z" fill="white"/>
          <rect x="16" y="34" width="16" height="2" fill="white"/>
        </svg>
      )
    },
    { 
      name: 'MERIDIAN AGRICULTURE', 
      industry: 'Agribusiness',
      color: '#7B8E42', // Agriculture green
      logo: (
        <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
          <rect width="48" height="48" rx="12" fill="#7B8E42"/>
          <path d="M24 8c8 0 12 4 12 8 0 4-4 8-12 8s-12-4-12-8c0-4 4-8 12-8z" fill="white"/>
          <path d="M16 28c0-2 2-4 8-4s8 2 8 4v8c0 2-2 4-8 4s-8-2-8-4v-8z" fill="white"/>
        </svg>
      )
    },
    { 
      name: 'PINNACLE CONSTRUCTION', 
      industry: 'Infrastructure',
      color: '#F18F01', // Construction orange
      logo: (
        <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
          <polygon points="24,4 40,40 8,40" fill="#F18F01"/>
          <rect x="20" y="28" width="8" height="8" fill="white"/>
          <rect x="16" y="32" width="4" height="4" fill="white"/>
          <rect x="28" y="32" width="4" height="4" fill="white"/>
        </svg>
      )
    },
    { 
      name: 'GLOBAL TRADE CORP', 
      industry: 'Import/Export',
      color: '#6A994E', // Trade green
      logo: (
        <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
          <rect width="48" height="48" rx="24" fill="#6A994E"/>
          <circle cx="24" cy="24" r="16" stroke="white" strokeWidth="2" fill="none"/>
          <path d="M8 24h32M24 8c8 0 16 7.2 16 16s-8 16-16 16" stroke="white" strokeWidth="2" fill="none"/>
          <path d="M24 8c-8 0-16 7.2-16 16s8 16 16 16" stroke="white" strokeWidth="2" fill="none"/>
        </svg>
      )
    },
    { 
      name: 'NEXUS ENGINEERING', 
      industry: 'Engineering',
      color: '#003883', // THONBRIDGE blue for engineering
      logo: (
        <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
          <rect width="48" height="48" fill="#003883"/>
          <path d="M8 8h12v12H8V8zm20 0h12v12H28V8zM8 28h12v12H8V28zm20 0h12v12H28V28z" fill="white"/>
          <circle cx="24" cy="24" r="6" fill="#003883"/>
          <circle cx="24" cy="24" r="3" fill="white"/>
        </svg>
      )
    },
    { 
      name: 'CORNERSTONE INDUSTRIES', 
      industry: 'Manufacturing',
      color: '#A4161A', // Manufacturing red
      logo: (
        <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
          <rect width="48" height="48" rx="6" fill="#A4161A"/>
          <rect x="8" y="8" width="32" height="32" rx="4" stroke="white" strokeWidth="2" fill="none"/>
          <rect x="14" y="14" width="20" height="20" fill="white"/>
          <rect x="18" y="18" width="12" height="12" fill="#A4161A"/>
        </svg>
      )
    },
    { 
      name: 'APEX LOGISTICS', 
      industry: 'Supply Chain',
      color: '#6F2DBD', // Logistics purple
      logo: (
        <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
          <rect width="48" height="48" rx="8" fill="#6F2DBD"/>
          <path d="M8 16l16-8 16 8v16l-16 8-16-8V16z" stroke="white" strokeWidth="2" fill="none"/>
          <path d="M8 16l16 8 16-8M24 24v16" stroke="white" strokeWidth="2"/>
        </svg>
      )
    },
    { 
      name: 'SUMMIT ENTERPRISES', 
      industry: 'Procurement',
      color: '#D35400', // Procurement orange
      logo: (
        <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="24" fill="#D35400"/>
          <polygon points="24,8 32,20 24,16 16,20" fill="white"/>
          <rect x="16" y="20" width="16" height="16" fill="white"/>
          <rect x="20" y="24" width="8" height="8" fill="#D35400"/>
        </svg>
      )
    },
    { 
      name: 'VERTEX SOLUTIONS', 
      industry: 'Technology',
      color: '#1B4332', // Technology green
      logo: (
        <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
          <rect width="48" height="48" fill="#1B4332"/>
          <polygon points="12,36 24,12 36,36" fill="white"/>
          <polygon points="18,30 24,20 30,30" fill="#1B4332"/>
        </svg>
      )
    },
    { 
      name: 'HORIZON GROUP', 
      industry: 'Development',
      color: '#2F3E46', // Development dark green
      logo: (
        <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
          <rect width="48" height="48" rx="24" fill="#2F3E46"/>
          <rect x="8" y="32" width="32" height="8" fill="white"/>
          <ellipse cx="24" cy="20" rx="16" ry="8" fill="white"/>
          <ellipse cx="24" cy="20" rx="8" ry="4" fill="#2F3E46"/>
        </svg>
      )
    },
    { 
      name: 'PRIME VENTURES', 
      industry: 'Investment',
      color: '#8B2635', // Investment maroon
      logo: (
        <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
          <rect width="48" height="48" rx="12" fill="#8B2635"/>
          <path d="M12 24h24l-6-6m6 6l-6 6" stroke="white" strokeWidth="3" fill="none"/>
          <circle cx="18" cy="18" r="4" fill="white"/>
          <circle cx="30" cy="30" r="4" fill="white"/>
        </svg>
      )
    }
  ];

  return (
    <section className="relative bg-white overflow-hidden">
      {/* Animated Logo Marquee Section */}
      <div className="bg-white border-b border-[#E5E7EB]">
        <div className="container-1920 py-12">
          <div 
            ref={marqueeAnimation.ref}
            className={`fade-in-up ${marqueeAnimation.isVisible ? 'visible' : ''}`}
          >
            
            {/* Marquee Header */}
            <div className="text-center mb-8">
              <h3 className="text-[#2B2B2B] mb-4 uppercase tracking-[2px]" style={{
                fontFamily: 'Effra',
                fontWeight: 900,
                fontSize: '18px',
                lineHeight: '22px'
              }}>
                TRUSTED BY INDUSTRY LEADERS
              </h3>
              
              <p className="text-[#515960] max-w-2xl mx-auto" style={{
                fontFamily: 'Effra',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '22px'
              }}>
                Serving industry leaders across multiple sectors with comprehensive solutions and strategic partnerships worldwide.
              </p>
            </div>

            {/* Logo Marquee Container */}
            <div className="relative overflow-hidden">
              {/* Gradient Overlays */}
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>
              
              {/* Scrolling Container */}
              <div className="flex animate-scroll">
                {/* First Set */}
                <div className="flex items-center gap-12 min-w-max pr-12">
                  {marqueePartners.map((client, index) => (
                    <div 
                      key={`set1-${index}`}
                      className="flex flex-col items-center text-center min-w-[180px] py-6 px-4 group hover:bg-[#F8F9FA] transition-colors duration-300"
                    >
                      {/* Company Logo - Now colored by default */}
                      <div className="transition-all duration-300 mb-4 group-hover:scale-110">
                        {client.logo}
                      </div>
                      
                      {/* Company Name */}
                      <div className="text-[#2B2B2B] mb-2 uppercase tracking-[1px] group-hover:text-[#003883] transition-colors duration-300" style={{
                        fontFamily: 'Effra',
                        fontWeight: 900,
                        fontSize: '10px',
                        lineHeight: '12px'
                      }}>
                        {client.name}
                      </div>
                      
                      {/* Industry Tag with color accent */}
                      <div className="uppercase text-[8px] tracking-[1px] transition-colors duration-300" style={{
                        fontFamily: 'Effra',
                        fontWeight: 400,
                        color: client.color
                      }}>
                        {client.industry}
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Second Set (Duplicate for seamless loop) */}
                <div className="flex items-center gap-12 min-w-max pr-12">
                  {marqueePartners.map((client, index) => (
                    <div 
                      key={`set2-${index}`}
                      className="flex flex-col items-center text-center min-w-[180px] py-6 px-4 group hover:bg-[#F8F9FA] transition-colors duration-300"
                    >
                      {/* Company Logo - Now colored by default */}
                      <div className="transition-all duration-300 mb-4 group-hover:scale-110">
                        {client.logo}
                      </div>
                      
                      {/* Company Name */}
                      <div className="text-[#2B2B2B] mb-2 uppercase tracking-[1px] group-hover:text-[#003883] transition-colors duration-300" style={{
                        fontFamily: 'Effra',
                        fontWeight: 900,
                        fontSize: '10px',
                        lineHeight: '12px'
                      }}>
                        {client.name}
                      </div>
                      
                      {/* Industry Tag with color accent */}
                      <div className="uppercase text-[8px] tracking-[1px] transition-colors duration-300" style={{
                        fontFamily: 'Effra',
                        fontWeight: 400,
                        color: client.color
                      }}>
                        {client.industry}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 35s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>

    </section>
  );
}