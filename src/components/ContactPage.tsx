import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { BackgroundHero } from './BackgroundHero';
import { useScrollAnimation } from './hooks/useScrollAnimation';
import { toast } from 'sonner';

interface ContactPageProps {
  onPageChange: (page: string) => void;
}

export function ContactPage({ onPageChange }: ContactPageProps) {
  // Scroll animation hooks for different sections
  const heroAnimation = useScrollAnimation({ threshold: 0.1 });
  const badgeAnimation = useScrollAnimation({ threshold: 0.1, delay: 100 });
  const titleAnimation = useScrollAnimation({ threshold: 0.1, delay: 200 });
  const contentAnimation = useScrollAnimation({ threshold: 0.1, delay: 300 });
  const statsAnimation = useScrollAnimation({ threshold: 0.1, delay: 400 });
  const contactHeaderAnimation = useScrollAnimation({ threshold: 0.1 });
  const contactMethodsAnimation = useScrollAnimation({ threshold: 0.1, delay: 200 });
  const formAnimation = useScrollAnimation({ threshold: 0.1, delay: 100 });
  const imageAnimation = useScrollAnimation({ threshold: 0.1, delay: 200 });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const generateMailtoUrl = (data: typeof formData) => {
    const recipient = 'Thonbridge@gmail.com';
    const subject = `New Project Inquiry from ${data.name} - ${data.company}`;
    
    const emailBody = `
Dear THONBRIDGE Team,

I am reaching out to inquire about your services. Please find my project details below:

CONTACT INFORMATION:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name: ${data.name}
Company: ${data.company}
Email: ${data.email}
Phone: ${data.phone || 'Not provided'}

SERVICE INTEREST:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${data.service}

PROJECT DETAILS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${data.message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This inquiry was submitted through the THONBRIDGE website contact form on ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}.

I look forward to hearing from your team within 4 hours during business hours as advertised.

Best regards,
${data.name}
${data.company}
    `.trim();

    // Create mailto URL with proper encoding
    const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
    
    return mailtoUrl;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic form validation
    if (!formData.name || !formData.email || !formData.company || !formData.service || !formData.message) {
      toast.error('Please fill in all required fields before submitting.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Generate mailto URL
      const mailtoUrl = generateMailtoUrl(formData);
      
      // Open mail app with pre-filled content
      window.location.href = mailtoUrl;
      
      // Small delay to allow the mail app to open, then show success message
      setTimeout(() => {
        toast.success('Opening your mail app with pre-filled inquiry. Please review and send the email to complete your submission.');
        
        // Reset form after successful mailto generation
        setFormData({ name: '', email: '', company: '', phone: '', service: '', message: '' });
        setIsSubmitting(false);
      }, 1000);
      
    } catch (error) {
      toast.error('Failed to open mail app. Please try again or contact us directly at Thonbridge@gmail.com');
      console.error('Mailto generation error:', error);
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const serviceOptions = [
    'Procurement Services',
    'Global Trade & Import/Export',
    'Engineering Solutions',
    'Agricultural Services',
    'Project Consultation',
    'Supply Chain Management',
    'Other - Please Specify'
  ];

  const contactMethods = [
    {
      title: 'Global Headquarters',
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h1m0 0h8" />
        </svg>
      ),
      details: [
        'THONBRIDGE Global Solutions',
        '9 Durban Street, Wuse 2',
        'Abuja, FCT',
        'Nigeria'
      ]
    },
    {
      title: 'Business Inquiries',
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      details: [
        'Thonbridge@gmail.com'
      ]
    },
    {
      title: 'Global Operations',
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      details: [
        'Canada: +1 403 988 2116',
        'Nigeria: +234 703 2168 996'
      ]
    }
  ];

  // Create individual animation hooks for each contact method
  const contactMethodAnimations = contactMethods.map((_, index) => 
    useScrollAnimation({ threshold: 0.1, delay: index * 100 })
  );

  return (
    <div className="bg-white">
      {/* Corporate Hero Section - Dark Blue Gradient */}
      <section className="py-12 sm:py-16 lg:py-20 xl:py-24 relative overflow-hidden" style={{
        background: 'linear-gradient(135deg, #001a3d 0%, #002d5f 25%, #003883 50%, #0047a0 75%, #0056bd 100%)'
      }}>
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1580785693001-bb53b8a17707?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBvZmZpY2UlMjBidWlsZGluZyUyMGJ1c2luZXNzJTIwaGVhZHF1YXJ0ZXJzfGVufDF8fHx8MTc1NTQyOTM0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="THONBRIDGE Corporate Headquarters"
            className="w-full h-full object-cover opacity-20"
          />
          {/* Dark blue gradient overlay */}
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(135deg, rgba(0, 26, 61, 0.8) 0%, rgba(0, 45, 95, 0.7) 25%, rgba(0, 56, 131, 0.6) 50%, rgba(0, 71, 160, 0.7) 75%, rgba(0, 86, 189, 0.8) 100%)'
          }}></div>
        </div>
        
        <div className="relative container-1920">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center">
            
            <div 
              ref={heroAnimation.ref}
              className={`fade-in-up ${heroAnimation.isVisible ? 'visible' : ''}`}
            >
              {/* Corporate Badge */}
              <div 
                ref={badgeAnimation.ref}
                className={`inline-block px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-3 bg-[#003883] text-white text-[9px] sm:text-[10px] md:text-[12px] uppercase tracking-[1.5px] sm:tracking-[2px] md:tracking-[3px] mb-4 sm:mb-6 md:mb-8 fade-in-scale ${badgeAnimation.isVisible ? 'visible' : ''}`}
              >
                <span style={{ fontFamily: 'ITC Avant Garde Gothic Std Bold', fontWeight: 500 }}>Global Contact Center</span>
              </div>
              
              <h1 
                ref={titleAnimation.ref}
                className={`text-white mb-4 sm:mb-6 md:mb-8 uppercase fade-in-left ${titleAnimation.isVisible ? 'visible' : ''}`}
                style={{
                  fontFamily: 'ITC Avant Garde Gothic Std Bold',
                  fontWeight: 900,
                  fontSize: 'clamp(1.5rem, 5vw, 4rem)',
                  lineHeight: 'clamp(1.6rem, 5.2vw, 3.8rem)',
                  letterSpacing: '-0.02em'
                }}
              >
                LET'S BUILD THE FUTURE TOGETHER
              </h1>
              
              <div 
                ref={contentAnimation.ref}
                className={`space-y-3 sm:space-y-4 md:space-y-6 text-white mb-6 sm:mb-8 md:mb-10 hero-subtitle fade-in-right ${contentAnimation.isVisible ? 'visible' : ''}`}
                style={{
                  fontFamily: 'ITC Avant Garde Gothic Std Bold',
                  fontWeight: 400
                }}
              >
                <p>
                  Connect with THONBRIDGE's global network of experts. Whether you're looking to streamline procurement, expand international trade, or implement cutting-edge engineering solutions, our team is ready to deliver results.
                </p>
                <p className="hidden sm:block">
                  With offices spanning multiple continents and partnerships across 25+ countries, we're positioned to support your business ambitions wherever they may lead.
                </p>
              </div>

              {/* Key Statistics */}
              <div 
                ref={statsAnimation.ref}
                className={`grid grid-cols-3 gap-3 sm:gap-4 md:gap-8 fade-in-up ${statsAnimation.isVisible ? 'visible' : ''}`}
              >
                {[
                  { value: '24/7', label: 'Global Support' },
                  { value: '< 4HR', label: 'Response Time' },
                  { value: '25+', label: 'Countries' }
                ].map((stat, index) => (
                  <div 
                    key={index} 
                    className={`text-center fade-in-scale stagger-${index + 1} ${statsAnimation.isVisible ? 'visible' : ''}`}
                  >
                    <div className="text-white mb-1 sm:mb-2 text-sm sm:text-lg md:text-2xl" style={{
                      fontFamily: 'ITC Avant Garde Gothic Std Bold',
                      fontWeight: 900
                    }}>
                      {stat.value}
                    </div>
                    <div className="text-white uppercase text-[7px] sm:text-[8px] md:text-[10px] tracking-[1px]" style={{
                      fontFamily: 'ITC Avant Garde Gothic Std Bold',
                      fontWeight: 400
                    }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Methods Section - Clean White Background */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container-1920">
          
          <div 
            ref={contactHeaderAnimation.ref}
            className={`text-center mb-8 sm:mb-12 lg:mb-16 fade-in-up ${contactHeaderAnimation.isVisible ? 'visible' : ''}`}
          >
            <div className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-3 bg-[#003883] text-white text-[9px] sm:text-[10px] md:text-[12px] uppercase tracking-[1.5px] sm:tracking-[2px] md:tracking-[3px] mb-3 sm:mb-4 md:mb-6">
              <span style={{ fontFamily: 'ITC Avant Garde Gothic Std Bold', fontWeight: 500 }}>Multiple Ways to Connect</span>
            </div>
            
            <h2 className="text-[#2B2B2B] mb-4 sm:mb-6 md:mb-8 uppercase text-xl sm:text-2xl md:text-3xl lg:text-4xl" style={{
              fontFamily: 'ITC Avant Garde Gothic Std Bold',
              fontWeight: 900
            }}>
              GLOBAL CONTACT NETWORK
            </h2>
          </div>

          <div 
            ref={contactMethodsAnimation.ref}
            className={`grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16 fade-in-up ${contactMethodsAnimation.isVisible ? 'visible' : ''}`}
          >
            {contactMethods.map((method, index) => (
              <div 
                key={index} 
                ref={contactMethodAnimations[index].ref}
                className={`bg-white p-4 sm:p-6 md:p-8 border border-[#e5e5e5] hover:border-[#003883] transition-colors duration-300 group fade-in-scale stagger-${index + 1} ${contactMethodAnimations[index].isVisible ? 'visible' : ''}`}
              >
                <div className="text-[#2B2B2B] group-hover:text-[#003883] transition-colors duration-300 mb-3 sm:mb-4 md:mb-6">
                  {method.icon}
                </div>
                
                <h3 className="text-[#2B2B2B] mb-3 sm:mb-4 md:mb-6 uppercase tracking-[1px] text-xs sm:text-sm md:text-base" style={{
                  fontFamily: 'ITC Avant Garde Gothic Std Bold',
                  fontWeight: 900
                }}>
                  {method.title}
                </h3>
                
                <div className="space-y-1.5 sm:space-y-2 md:space-y-3">
                  {method.details.map((detail, i) => (
                    <div key={i} className="text-[#515960] text-xs sm:text-sm" style={{
                      fontFamily: 'ITC Avant Garde Gothic Std Bold',
                      fontWeight: 400,
                      lineHeight: '1.4'
                    }}>
                      {detail}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Contact Form Section - Clean White Background */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container-1920">
          
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16">
            
            {/* Form Column */}
            <div 
              ref={formAnimation.ref}
              className={`fade-in-left ${formAnimation.isVisible ? 'visible' : ''}`}
            >
              <div className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-3 bg-[#003883] text-white text-[9px] sm:text-[10px] md:text-[12px] uppercase tracking-[1.5px] sm:tracking-[2px] md:tracking-[3px] mb-3 sm:mb-4 md:mb-6">
                <span style={{ fontFamily: 'ITC Avant Garde Gothic Std Bold', fontWeight: 500 }}>Project Inquiry Form</span>
              </div>
              
              <h2 className="text-[#2B2B2B] mb-4 sm:mb-6 md:mb-8 uppercase text-xl sm:text-2xl md:text-3xl lg:text-4xl" style={{
                fontFamily: 'ITC Avant Garde Gothic Std Bold',
                fontWeight: 900
              }}>
                START YOUR PROJECT
              </h2>
              
              <div className="text-[#515960] mb-6 sm:mb-8 md:mb-10 text-xs sm:text-sm md:text-base" style={{
                fontFamily: 'ITC Avant Garde Gothic Std Bold',
                fontWeight: 400,
                lineHeight: '1.5'
              }}>
                Complete the form below and our team will respond within 4 hours during business hours. For urgent matters, please call our emergency line.
              </div>

              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-[#2B2B2B] mb-1.5 sm:mb-2 md:mb-3 uppercase tracking-[1px] text-[10px] sm:text-xs" style={{
                      fontFamily: 'ITC Avant Garde Gothic Std Bold',
                      fontWeight: 900
                    }}>
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full h-9 sm:h-10 md:h-12 border-2 border-[#e5e5e5] focus:border-[#003883] focus:ring-0 transition-colors duration-200"
                      style={{ fontFamily: 'ITC Avant Garde Gothic Std Bold', fontSize: '12px' }}
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-[#2B2B2B] mb-1.5 sm:mb-2 md:mb-3 uppercase tracking-[1px] text-[10px] sm:text-xs" style={{
                      fontFamily: 'ITC Avant Garde Gothic Std Bold',
                      fontWeight: 900
                    }}>
                      Company Name *
                    </label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full h-9 sm:h-10 md:h-12 border-2 border-[#e5e5e5] focus:border-[#003883] focus:ring-0 transition-colors duration-200"
                      style={{ fontFamily: 'ITC Avant Garde Gothic Std Bold', fontSize: '12px' }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                  <div>
                    <label htmlFor="email" className="block text-[#2B2B2B] mb-1.5 sm:mb-2 md:mb-3 uppercase tracking-[1px] text-[10px] sm:text-xs" style={{
                      fontFamily: 'ITC Avant Garde Gothic Std Bold',
                      fontWeight: 900
                    }}>
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full h-9 sm:h-10 md:h-12 border-2 border-[#e5e5e5] focus:border-[#003883] focus:ring-0 transition-colors duration-200"
                      style={{ fontFamily: 'ITC Avant Garde Gothic Std Bold', fontSize: '12px' }}
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-[#2B2B2B] mb-1.5 sm:mb-2 md:mb-3 uppercase tracking-[1px] text-[10px] sm:text-xs" style={{
                      fontFamily: 'ITC Avant Garde Gothic Std Bold',
                      fontWeight: 900
                    }}>
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full h-9 sm:h-10 md:h-12 border-2 border-[#e5e5e5] focus:border-[#003883] focus:ring-0 transition-colors duration-200"
                      style={{ fontFamily: 'ITC Avant Garde Gothic Std Bold', fontSize: '12px' }}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-[#2B2B2B] mb-1.5 sm:mb-2 md:mb-3 uppercase tracking-[1px] text-[10px] sm:text-xs" style={{
                    fontFamily: 'ITC Avant Garde Gothic Std Bold',
                    fontWeight: 900
                  }}>
                    Service Interest *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full h-9 sm:h-10 md:h-12 border-2 border-[#e5e5e5] focus:border-[#003883] focus:ring-0 transition-colors duration-200 bg-white px-3"
                    style={{ fontFamily: 'ITC Avant Garde Gothic Std Bold', fontSize: '12px' }}
                  >
                    <option value="">Select a service...</option>
                    {serviceOptions.map((option, index) => (
                      <option key={index} value={option}>{option}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-[#2B2B2B] mb-1.5 sm:mb-2 md:mb-3 uppercase tracking-[1px] text-[10px] sm:text-xs" style={{
                    fontFamily: 'ITC Avant Garde Gothic Std Bold',
                    fontWeight: 900
                  }}>
                    Project Details *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full border-2 border-[#e5e5e5] focus:border-[#003883] focus:ring-0 resize-none transition-colors duration-200"
                    placeholder="Please provide details about your project scope, timeline, budget range, and specific requirements..."
                    style={{ fontFamily: 'ITC Avant Garde Gothic Std Bold', fontSize: '12px' }}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#003883] text-white px-4 sm:px-6 md:px-12 py-2.5 sm:py-3 md:py-4 hover:bg-[#002d6b] transition-colors duration-200 w-full h-10 sm:h-12 md:h-14 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span className="uppercase tracking-[1px] sm:tracking-[2px] text-[10px] sm:text-[11px] md:text-[12px]" style={{
                        fontFamily: 'ITC Avant Garde Gothic Std Bold',
                        fontWeight: 500
                      }}>
                        SUBMITTING...
                      </span>
                    </div>
                  ) : (
                    <span className="uppercase tracking-[1px] sm:tracking-[2px] text-[10px] sm:text-[11px] md:text-[12px]" style={{
                      fontFamily: 'ITC Avant Garde Gothic Std Bold',
                      fontWeight: 500
                    }}>
                      SUBMIT PROJECT INQUIRY
                    </span>
                  )}
                </Button>
              </form>
            </div>

            {/* Image & Info Column */}
            <div 
              ref={imageAnimation.ref}
              className={`fade-in-right ${imageAnimation.isVisible ? 'visible' : ''}`}
            >
              <div className="relative h-[250px] sm:h-[300px] md:h-[400px] mb-4 sm:mb-6 md:mb-8">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1740933084056-078fac872bff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb3Jwb3JhdGUlMjBtZWV0aW5nJTIwcm9vbSUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NTU0MjkzNDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="THONBRIDGE Corporate Meeting Room"
                  className="w-full h-full object-cover hover:scale-105 transition-all duration-500"
                />
                
                {/* Corporate Stats Overlay */}
                <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 left-3 sm:left-4 md:left-6 right-3 sm:right-4 md:right-6">
                  <div className="bg-[#2B2B2B] bg-opacity-95 p-3 sm:p-4 md:p-6">
                    <h3 className="text-white mb-2 sm:mb-3 md:mb-4 uppercase tracking-[1px] text-[10px] sm:text-xs md:text-sm" style={{
                      fontFamily: 'ITC Avant Garde Gothic Std Bold',
                      fontWeight: 900
                    }}>
                      PROJECT SUCCESS METRICS
                    </h3>
                    
                    <div className="grid grid-cols-3 gap-1.5 sm:gap-2 md:gap-4">
                      {[
                        { value: '750+', label: 'Projects' },
                        { value: '98%', label: 'Success Rate' },
                        { value: '$2.5B+', label: 'Value Delivered' }
                      ].map((stat, index) => (
                        <div key={index} className="text-center">
                          <div className="text-[#003883] mb-0.25 sm:mb-0.5 md:mb-1 text-xs sm:text-sm md:text-base" style={{
                            fontFamily: 'ITC Avant Garde Gothic Std Bold',
                            fontWeight: 900
                          }}>
                            {stat.value}
                          </div>
                          <div className="text-white uppercase text-[6px] sm:text-[7px] md:text-[8px] tracking-[1px]" style={{
                            fontFamily: 'ITC Avant Garde Gothic Std Bold',
                            fontWeight: 400
                          }}>
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Corporate Process Steps */}
              <div className="bg-white p-4 sm:p-6 md:p-8 border-l-4 border-[#003883]">
                <h3 className="text-[#2B2B2B] mb-3 sm:mb-4 md:mb-6 uppercase tracking-[1px] text-xs sm:text-sm md:text-base" style={{
                  fontFamily: 'ITC Avant Garde Gothic Std Bold',
                  fontWeight: 900
                }}>
                  OUR ENGAGEMENT PROCESS
                </h3>
                
                <div className="space-y-2 sm:space-y-3 md:space-y-4">
                  {[
                    { step: '01', title: 'Initial Consultation', desc: 'Comprehensive project assessment and requirement analysis' },
                    { step: '02', title: 'Proposal Development', desc: 'Detailed solution design with timeline and budget' },
                    { step: '03', title: 'Contract & Execution', desc: 'Project implementation with dedicated account management' },
                    { step: '04', title: 'Delivery & Support', desc: 'Final delivery with ongoing support and optimization' }
                  ].map((process, index) => (
                    <div key={index} className="flex gap-2 sm:gap-3 md:gap-4">
                      <div className="text-[#003883] min-w-[25px] sm:min-w-[30px] md:min-w-[40px] text-[10px] sm:text-xs md:text-sm" style={{
                        fontFamily: 'ITC Avant Garde Gothic Std Bold',
                        fontWeight: 900
                      }}>
                        {process.step}
                      </div>
                      <div>
                        <div className="text-[#2B2B2B] mb-0.5 sm:mb-1 uppercase text-[9px] sm:text-[10px] md:text-xs tracking-[1px]" style={{
                          fontFamily: 'ITC Avant Garde Gothic Std Bold',
                          fontWeight: 900
                        }}>
                          {process.title}
                        </div>
                        <div className="text-[#515960] text-[9px] sm:text-[10px] md:text-xs" style={{
                          fontFamily: 'ITC Avant Garde Gothic Std Bold',
                          fontWeight: 400,
                          lineHeight: '1.4'
                        }}>
                          {process.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}