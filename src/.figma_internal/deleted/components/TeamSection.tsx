import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import svgPaths from '../imports/svg-paths';

export function TeamSection() {
  return (
    <section className="max-w-[1440px] mx-auto">
      <div className="flex">
        {/* Left Side - Content */}
        <div className="flex-1 bg-[#f0f2f6] px-[150px] py-[120px] relative" style={{ marginRight: '-60px' }}>
          <div className="max-w-[570px]">
            <h2 
              className="text-[#3f5588] mb-6 uppercase"
              style={{
                fontFamily: 'Nunito Sans',
                fontWeight: 900,
                fontSize: '33.3px',
                lineHeight: '36.67px',
                fontVariationSettings: "'YTLC' 500, 'wdth' 100"
              }}
            >
              OUR TEAM
            </h2>
            
            <div 
              className="text-[#515960] mb-8"
              style={{
                fontFamily: 'Nunito Sans',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '22.67px',
                fontVariationSettings: "'YTLC' 500, 'wdth' 100"
              }}
            >
              <p className="mb-0">As a certified B-Corp, our mission is affordable, reliable,</p>
              <p className="mb-0">sustainable energy for all. We're focused on building a</p>
              <p className="mb-0">hundred-year company where exceptional people can</p>
              <p className="mb-0">collectively make an outside impact on climate change.</p>
              <p className="mb-0">When you join Modern, you'll work with people who</p>
              <p className="mb-0">are mission-aligned and excited about bending the arc</p>
              <p className="mb-0">of the energy transition. We attract self-directed,</p>
              <p className="mb-0">intellectually-curious, and kind leaders.</p>
            </div>

            <div 
              className="text-[#515960] mb-8"
              style={{
                fontFamily: 'Nunito Sans',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '22.67px',
                fontVariationSettings: "'YTLC' 500, 'wdth' 100"
              }}
            >
              <p className="mb-0">We are an equal opportunity employer and believe our</p>
              <p className="mb-0">long-term strategy can only be accomplished by having</p>
              <p className="mb-0">a diversity of thought, experience, and backgrounds at</p>
              <p className="mb-0">the table.</p>
            </div>

            {/* Buttons */}
            <div className="space-y-3">
              <button className="bg-[#3f5588] text-white px-10 py-3 flex items-center gap-15 hover:bg-[#4a6199] transition-colors duration-200">
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
                      fill="white"
                    />
                  </svg>
                </div>
              </button>

              <button className="bg-[#3f5588] text-white px-10 py-3 flex items-center gap-15 hover:bg-[#4a6199] transition-colors duration-200">
                <span 
                  className="uppercase tracking-[4px] text-[12px] font-normal leading-[17.14px]"
                  style={{
                    fontFamily: 'Nunito Sans',
                    fontVariationSettings: "'YTLC' 500, 'wdth' 100"
                  }}
                >
                  JOIN US
                </span>
                
                <div className="ml-15 transform scale-y-[-1]">
                  <svg className="w-4 h-3" fill="none" preserveAspectRatio="none" viewBox="0 0 17 12">
                    <path 
                      d={svgPaths.p3b745af0} 
                      fill="white"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Right Side - Image with Navigation */}
        <div className="w-[630px] relative" style={{ marginLeft: '-60px' }}>
          {/* Main Image */}
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1742119803195-aaf41d6b2e61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2UlMjBidXNpbmVzcyUyMHRlYW18ZW58MXx8fHwxNzU1NDAxODgxfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="THONBRIDGE office team workspace"
              className="w-[630px] h-[495.8px] object-cover"
              style={{
                backgroundSize: '100% 100%',
                backgroundPosition: '0% 50.06%'
              }}
            />
          </div>

          {/* Navigation Controls */}
          <div className="w-[555px] bg-[#f0f2f6] relative">
            {/* Left Arrow */}
            <div className="absolute left-5 top-[17px] bottom-[15.66px] flex items-center">
              <div className="transform scale-y-[-1]">
                <svg className="w-4 h-4" fill="none" preserveAspectRatio="none" viewBox="0 0 17 16">
                  <path 
                    d={svgPaths.p1a02cf00} 
                    fill="#3F5588"
                  />
                </svg>
              </div>
            </div>

            {/* Right Arrow */}
            <div className="absolute right-5 top-[17px] bottom-[15.66px] flex items-center">
              <div className="transform scale-y-[-1]">
                <svg className="w-4 h-4" fill="none" preserveAspectRatio="none" viewBox="0 0 17 16">
                  <path 
                    d={svgPaths.p2434f100} 
                    fill="#3F5588"
                  />
                </svg>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="absolute bottom-[17.01px] left-1/2 transform -translate-x-1/2 flex items-center justify-center space-x-1">
              <div className="w-[12.5px] h-[12.5px] bg-[#3f5588] rounded-full"></div>
              <div className="w-[12.5px] h-[12.5px] bg-[#9faac3] rounded-full"></div>
            </div>

            {/* Spacing div for proper height */}
            <div className="h-[50px]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}