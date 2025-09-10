import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { HomePage } from './components/HomePage';
import { AboutPage } from './components/AboutPage';
import { ServicesPage } from './components/ServicesPage';
import { IndustriesPage } from './components/IndustriesPage';
import { ContactPage } from './components/ContactPage';
import { Footer } from './components/Footer';
import { Toaster } from './components/ui/sonner';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Smooth scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  // Initialize scroll animations on mount
  useEffect(() => {
    // Ensure scroll animations work properly after component mount
    const triggerScrollAnimations = () => {
      const elements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .fade-in-scale');
      elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        if (isVisible) {
          element.classList.add('visible');
        }
      });
    };

    // Trigger initial check
    setTimeout(triggerScrollAnimations, 100);
    
    // Add scroll listener for additional safety
    window.addEventListener('scroll', triggerScrollAnimations);
    return () => window.removeEventListener('scroll', triggerScrollAnimations);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutPage onPageChange={setCurrentPage} />;
      case 'services':
        return <ServicesPage onPageChange={setCurrentPage} />;
      case 'industries':
        return <IndustriesPage onPageChange={setCurrentPage} />;
      case 'contact':
        return <ContactPage onPageChange={setCurrentPage} />;
      default:
        return <HomePage onPageChange={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navigation onPageChange={setCurrentPage} currentPage={currentPage} />
      <main className="w-full overflow-x-hidden relative">
        {renderPage()}
      </main>
      <Footer onPageChange={setCurrentPage} />
      <Toaster />
    </div>
  );
}