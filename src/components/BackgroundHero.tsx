import React from 'react';

interface BackgroundHeroProps {
  children: React.ReactNode;
  minHeight?: string;
  className?: string;
}

export function BackgroundHero({ 
  children, 
  minHeight = "min-h-[60vh]", 
  className = "" 
}: BackgroundHeroProps) {
  // Use the same corporate handshake image as the first hero slide for consistency
  const backgroundImage = "https://images.unsplash.com/photo-1698047681820-f26b00b6c639?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBidXNpbmVzcyUyMGhhbmRzaGFrZSUyMHBhcnRuZXJzaGlwfGVufDF8fHx8MTc1NTQzNzQxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
  
  return (
    <div className={`relative w-full ${minHeight} flex items-center justify-center overflow-hidden ${className}`}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt="THONBRIDGE - Professional corporate background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Netflix-style Dark Gradient Overlay */}
      <div 
        className="absolute inset-0 z-10"
        style={{
          background: `
            linear-gradient(to bottom, 
              rgba(0, 0, 0, 0.7) 0%, 
              rgba(0, 0, 0, 0.5) 30%, 
              rgba(0, 0, 0, 0.4) 50%, 
              rgba(0, 0, 0, 0.6) 80%, 
              rgba(0, 0, 0, 0.8) 100%
            ),
            linear-gradient(to right, 
              rgba(0, 0, 0, 0.3) 0%, 
              rgba(0, 0, 0, 0.1) 50%, 
              rgba(0, 0, 0, 0.3) 100%
            )
          `
        }}
      />

      {/* Content */}
      <div className="relative z-20 w-full">
        {children}
      </div>

      {/* Bottom Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#003883] to-transparent z-30"></div>
    </div>
  );
}