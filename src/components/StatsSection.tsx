import React from 'react';
import svgPaths from '../imports/svg-paths';

export function StatsSection() {
  const stats = [
    {
      number: '91.5',
      label: 'B Impact Assessment Score'
    },
    {
      number: '100+',
      label: 'Full-time employees globally'
    },
    {
      number: '2016',
      label: 'Founding Year'
    },
    {
      number: '>1GW',
      label: 'Clean Energy Assets Under\nManagement'
    }
  ];

  return (
    <section className="py-20 bg-[#f0f2f6]">
      <div className="max-w-[1170px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-start">
          {/* B-Corp Certification */}
          <div className="w-[195px] flex justify-center px-4">
            <div className="w-[68px] h-[116px] overflow-hidden flex items-center justify-center">
              <svg 
                className="block w-full h-full" 
                fill="none" 
                preserveAspectRatio="none" 
                viewBox="0 0 68 117"
              >
                <g>
                  <path 
                    d={svgPaths.p182be500} 
                    fill="#3F5588"
                  />
                </g>
              </svg>
            </div>
          </div>

          {/* Stats */}
          <div className="flex-1">
            <div className="grid grid-cols-4 gap-0">
              {stats.map((stat, index) => (
                <div key={stat.label} className="px-4">
                  <div 
                    className="text-[#3f5588] mb-4 uppercase"
                    style={{
                      fontFamily: 'Nunito Sans',
                      fontWeight: 900,
                      fontSize: '46.7px',
                      lineHeight: '51.33px',
                      fontVariationSettings: "'YTLC' 500, 'wdth' 100"
                    }}
                  >
                    {stat.number}
                  </div>
                  
                  <div className="h-0.5 border-t-2 border-[#3f5588] mb-4"></div>
                  
                  <div 
                    className="text-[#515960] whitespace-pre-line"
                    style={{
                      fontFamily: 'Nunito Sans',
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '22.67px',
                      fontVariationSettings: "'YTLC' 500, 'wdth' 100"
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}