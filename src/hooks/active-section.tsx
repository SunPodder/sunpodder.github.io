import { useState, useEffect } from "react";

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return window.location.hash ? window.location.hash.replace('#', '') : 'home';
    }
    return 'home';
  });

  useEffect(() => {
    // Create multiple observers with different thresholds for better accuracy
    const createAndAttachObservers = () => {
      const sections = document.querySelectorAll('section[id], div[id]');
      
      if (sections.length === 0) return { cleanup: () => {} };
      
      // Create a map to track visibility percentages for each section
      const visibilityMap = new Map<string, number>();
      sections.forEach(section => {
        if (section.id) {
          visibilityMap.set(section.id, 0);
        }
      });
      
      // Observer options with different sensitivities
      const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]
      };
      
      // Callback to update visibility map and determine most visible section
      const observerCallback = (entries: IntersectionObserverEntry[]) => {
        entries.forEach(entry => {
          if (entry.target.id) {
            // Update visibility percentage
            visibilityMap.set(entry.target.id, entry.intersectionRatio);
          }
        });
        
        // Find the most visible section
        let maxVisibility = 0;
        let mostVisibleSection = '';
        
        visibilityMap.forEach((visibility, sectionId) => {
          if (visibility > maxVisibility) {
            maxVisibility = visibility;
            mostVisibleSection = sectionId;
          }
        });
        
        // Only update if we found a visible section
        if (mostVisibleSection && maxVisibility > 0.1) {
          setActiveSection(mostVisibleSection);
          // Update URL without scrolling
          history.replaceState(null, '', `#${mostVisibleSection}`);
        }
      };
      
      const observer = new IntersectionObserver(observerCallback, observerOptions);
      
      sections.forEach(section => {
        if (section.id) {
          observer.observe(section);
        }
      });
      
      // Add scroll event listener as fallback
      const handleScroll = () => {
        // Determine which section is most in view
        const viewportHeight = window.innerHeight;
        // const scrollPosition = window.scrollY;
        
        // Calculate which section takes up most of the viewport
        let bestSection = '';
        let maxVisibleHeight = 0;
        
        sections.forEach((section) => {
          if (!section.id) return;
          
          const rect = section.getBoundingClientRect();
          const visibleHeight = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
          
          if (visibleHeight > maxVisibleHeight) {
            maxVisibleHeight = visibleHeight;
            bestSection = section.id;
          }
        });
        
        if (bestSection && bestSection !== activeSection) {
          setActiveSection(bestSection);
        }
      };
      
      // Throttled scroll handler
      let scrollTimeout: number;
      const throttledScrollHandler = () => {
        if (scrollTimeout) clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(handleScroll, 100);
      };
      
      window.addEventListener('scroll', throttledScrollHandler, { passive: true });
      
      return {
        cleanup: () => {
          observer.disconnect();
          window.removeEventListener('scroll', throttledScrollHandler);
        }
      };
    };
    
    const { cleanup } = createAndAttachObservers();
    return cleanup;
  }, [activeSection]);

  const navigateTo = (sectionId: string) => {
    const targetId = sectionId.startsWith('#') ? sectionId.slice(1) : sectionId;
    const element = document.getElementById(targetId);
    
    if (element) {
      // Set active section immediately for better UX
      setActiveSection(targetId);
      
      // Scroll to the element
      element.scrollIntoView({ behavior: 'smooth' });
      history.pushState(null, '', `#${targetId}`);
    }
  };

  return { activeSection, navigateTo };
}
