import React from 'react';

interface LogoProps {
  size?: 'xs' | 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark' | 'red' | 'blue';
  onClick?: () => void;
  className?: string;
}

export function Logo({ size = 'md', variant = 'light', onClick, className = '' }: LogoProps) {
  const sizeMap = {
    xs: {
      fontSize: '14px',
      lineHeight: '14px',
      letterSpacing: '-0.35px',
      laptopFontSize: '16px',
      laptopLineHeight: '16px'
    },
    sm: {
      fontSize: '18px',
      lineHeight: '18px',
      letterSpacing: '-0.45px',
      laptopFontSize: '22px',
      laptopLineHeight: '22px'
    },
    md: {
      fontSize: '24px',
      lineHeight: '24px',
      letterSpacing: '-0.6px',
      laptopFontSize: '28px',
      laptopLineHeight: '28px'
    },
    lg: {
      fontSize: '32px',
      lineHeight: '32px',
      letterSpacing: '-0.8px',
      laptopFontSize: '36px',
      laptopLineHeight: '36px'
    }
  };
  
  const textStyle = sizeMap[size];
  const textColor = variant === 'light' ? 'text-white' : variant === 'red' ? 'text-[#003883]' : variant === 'blue' ? 'text-[#003883]' : 'text-[#2B2B2B]';
  
  const Component = onClick ? 'button' : 'div';
  
  return (
    <Component
      className={`box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0 ${onClick ? 'cursor-pointer hover:opacity-80 transition-opacity duration-200' : ''} ${className}`}
      onClick={onClick}
      data-name="Container"
    >
      <div className={`flex flex-col justify-center leading-[0] not-italic relative shrink-0 ${textColor} text-left text-nowrap`}>
        <p 
          className="adjustLetterSpacing block whitespace-pre lg:font-black logo-responsive-text" 
          style={{ 
            fontFamily: 'ITC Avant Garde Gothic Std Bold',
            fontWeight: 900,
            fontSize: textStyle.fontSize,
            lineHeight: textStyle.lineHeight,
            letterSpacing: textStyle.letterSpacing,
            '--laptop-font-size': textStyle.laptopFontSize,
            '--laptop-line-height': textStyle.laptopLineHeight
          } as React.CSSProperties}
        >
          THONBRIDGE
        </p>
      </div>
    </Component>
  );
}