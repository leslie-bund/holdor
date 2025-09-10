import React from 'react';
import servicePreviewImage from 'figma:asset/91714fcdf7ad0946ea32c6521c9345794e115728.png';

interface ServicePreviewBannerProps {
  onPageChange: (page: string) => void;
}

export function ServicePreviewBanner({ onPageChange }: ServicePreviewBannerProps) {
  const services = [
    {
      title: "Global Procurement Excellence",
      description: "Efficient sourcing and supply chain management across international markets"
    },
    {
      title: "Engineering & Infrastructure", 
      description: "Innovative engineering solutions for sustainable development projects"
    },
    {
      title: "Agricultural Development",
      description: "Modern agricultural equipment and productivity enhancement services"
    },
    {
      title: "International Trade Services",
      description: "Comprehensive import/export solutions and trade facilitation"
    }
  ];

  return (
    <div className="relative w-full mt-8">
      {/* Background Image */}
      <div className="relative">
        <img 
          src={servicePreviewImage}
          alt="THONBRIDGE Services Overview"
          className="w-full h-auto object-cover"
          style={{ minHeight: '120px' }}
        />
        
        {/* Overlay Content */}
        <div 
          className="absolute inset-0 cursor-pointer hover:bg-black/10 transition-all duration-300"
          onClick={() => onPageChange('services')}
        >
          <div className="h-full flex items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full max-w-6xl mx-auto px-6">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className={`relative px-4 py-6 text-center group ${
                    index < services.length - 1 ? 'lg:border-r lg:border-[#003883]/60' : ''
                  }`}
                >
                  {/* Mobile/Tablet Bottom Border */}
                  {index < services.length - 1 && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-px bg-[#003883]/60 lg:hidden" />
                  )}
                  
                  <h3 className="text-white mb-2 uppercase tracking-wide group-hover:text-[#003883] transition-colors duration-300" style={{
                    fontFamily: 'Effra',
                    fontWeight: 600,
                    fontSize: 'clamp(0.75rem, 1.5vw, 1rem)',
                    lineHeight: '1.2'
                  }}>
                    {service.title}
                  </h3>
                  
                  <p className="text-white/80 leading-tight group-hover:text-white transition-colors duration-300" style={{
                    fontFamily: 'Effra',
                    fontWeight: 400,
                    fontSize: 'clamp(0.625rem, 1.2vw, 0.8rem)',
                    lineHeight: '1.3'
                  }}>
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#003883]/0 via-[#003883]/5 to-[#003883]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </div>
      </div>
      
      {/* Click to Learn More Indicator */}
      <div className="absolute bottom-2 right-4 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
        <span className="text-white text-xs uppercase tracking-wider" style={{
          fontFamily: 'Effra',
          fontWeight: 500
        }}>
          Click to explore our services
        </span>
      </div>
    </div>
  );
}