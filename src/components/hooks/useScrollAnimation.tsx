import { useEffect, useRef, useState, useCallback, useMemo } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  triggerOnce?: boolean;
  delay?: number;
  rootMargin?: string;
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const { 
    threshold = 0.1, 
    triggerOnce = true, 
    delay = 0,
    rootMargin = '0px 0px -10% 0px'
  } = options;
  
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const ref = useRef<HTMLElement>(null);

  // Memoize the intersection observer options to prevent recreation
  const observerOptions = useMemo(() => ({
    threshold,
    rootMargin,
  }), [threshold, rootMargin]);

  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    
    if (entry.isIntersecting && (!triggerOnce || !hasTriggered)) {
      const triggerAnimation = () => {
        setIsVisible(true);
        if (triggerOnce) {
          setHasTriggered(true);
        }
      };

      if (delay > 0) {
        setTimeout(triggerAnimation, delay);
      } else {
        triggerAnimation();
      }
    } else if (!triggerOnce && !entry.isIntersecting) {
      setIsVisible(false);
    }
  }, [triggerOnce, hasTriggered, delay]);

  useEffect(() => {
    if (!ref.current) return;

    // Check if IntersectionObserver is available
    if (!window.IntersectionObserver) {
      // Fallback for older browsers
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    const currentRef = ref.current;
    
    observer.observe(currentRef);

    // Cleanup function
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      observer.disconnect();
    };
  }, [handleIntersection, observerOptions]);

  // Force check on mount for elements that might already be in view
  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
      
      if (isInViewport && !hasTriggered) {
        if (delay > 0) {
          setTimeout(() => {
            setIsVisible(true);
            if (triggerOnce) {
              setHasTriggered(true);
            }
          }, delay);
        } else {
          setIsVisible(true);
          if (triggerOnce) {
            setHasTriggered(true);
          }
        }
      }
    }
  }, [delay, triggerOnce, hasTriggered]);

  return { ref, isVisible };
}