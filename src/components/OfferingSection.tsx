import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import svgPaths from '../imports/svg-paths';

export function OfferingSection() {
  return (
    <section className="bg-[#3f5588]">
      <div className="max-w-[1440px] mx-auto flex">
        {/* Left Side - Image */}
        <div 
          className="flex-1 h-[600px] bg-cover bg-top"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1715605569717-494ac7c5656a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBlbmVyZ3klMjBzb2xhciUyMHBhbmVscyUyMGluZnJhc3RydWN0dXJlfGVufDF8fHx8MTc1NTQwMTg3OHww&ixlib=rb-4.1.0&q=80&w=1080')`,
            backgroundSize: '140.56% 100%'
          }}
        />

        {/* Right Side - Content with Pattern Background */}
        <div 
          className="flex-1 bg-[#3f5588] h-[600px] flex items-center relative"
          style={{
            backgroundImage: "url('data:image/svg+xml,<svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"40\" height=\"40\" fill=\"%233f5588\"/><circle cx=\"20\" cy=\"20\" r=\"1\" fill=\"%23ffffff\" opacity=\"0.1\"/></svg>')",
            backgroundRepeat: 'repeat',
            backgroundSize: '40px 40px',
            backgroundPosition: 'top left'
          }}
        >
          <div className="px-[170px] py-[186px] max-w-[570px]">
            <h2 
              className="text-white mb-6 uppercase"
              style={{
                fontFamily: 'Nunito Sans',
                fontWeight: 900,
                fontSize: '33.3px',
                lineHeight: '36.67px',
                fontVariationSettings: "'YTLC' 500, 'wdth' 100"
              }}
            >
              OUR OFFERING
            </h2>
            
            <div 
              className="text-white mb-6"
              style={{
                fontFamily: 'Nunito Sans',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '22.67px',
                fontVariationSettings: "'YTLC' 500, 'wdth' 100"
              }}
            >
              <p className="mb-0">We partner with early-stage entrepreneurs and</p>
              <p className="mb-0">developers. Our Capital + Culture + Capabilities</p>
              <p className="mb-0">approach is tailor-made to accelerate new platforms</p>
              <p className="mb-0">quickly and efficiently.</p>
            </div>

            {/* More Button */}
            <div className="pt-3">
              <button className="bg-white text-[#3f5588] px-10 py-3 flex items-center gap-15 hover:bg-gray-100 transition-colors duration-200">
                <span 
                  className="uppercase tracking-[4px] text-[12px] font-normal leading-[17.14px]"
                  style={{
                    fontFamily: 'Nunito Sans',
                    fontVariationSettings: "'YTLC' 500, 'wdth' 100"
                  }}
                >
                  MORE
                </span>
                
                <div className="ml-15 transform scale-y-[-1]">
                  <svg className="w-4 h-3" fill="none" preserveAspectRatio="none" viewBox="0 0 16 12">
                    <path 
                      d={svgPaths.p3c31cd00} 
                      fill="#3F5588"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}