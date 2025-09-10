import React from 'react';
import { HeroSection } from './HeroSection';
import { ServicesSection } from './ServicesSection';
import { CorporateWhoWeAreSummary } from './CorporateWhoWeAreSummary';
import { LogoMarquee } from './LogoMarquee';
import { useScrollAnimation } from './hooks/useScrollAnimation';

interface HomePageProps {
  onPageChange: (page: string) => void;
}

export function HomePage({ onPageChange }: HomePageProps) {
  const logoMarqueeAnimation = useScrollAnimation({ threshold: 0.2 });
  const whoWeAreAnimation = useScrollAnimation({ threshold: 0.1 });
  const servicesAnimation = useScrollAnimation({ threshold: 0.1 });

  return (
    <div className="bg-white">
      <HeroSection onPageChange={onPageChange} />
      
      <section 
        ref={logoMarqueeAnimation.ref} 
        className={`fade-in-up ${logoMarqueeAnimation.isVisible ? 'visible' : ''}`}
      >
        <LogoMarquee />
      </section>
      
      <section 
        ref={whoWeAreAnimation.ref} 
        className={`fade-in-up stagger-delay-200 ${whoWeAreAnimation.isVisible ? 'visible' : ''}`}
      >
        <CorporateWhoWeAreSummary onPageChange={onPageChange} />
      </section>
      
      <section 
        ref={servicesAnimation.ref} 
        className={`fade-in-up stagger-delay-300 ${servicesAnimation.isVisible ? 'visible' : ''}`}
      >
        <ServicesSection onPageChange={onPageChange} />
      </section>
    </div>
  );
}