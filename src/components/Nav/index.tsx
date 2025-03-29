import { memo, useRef, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { useActiveSection } from "../../hooks/active-section";

// Memoize the Link component for better performance
const Link = memo(({
  href,
  children,
  isActive,
  onClick,
}: {
  href: string;
  children: string;
  isActive: boolean;
  onClick: (href: string) => void;
}) => {
  // Use a ref to track previous active state to smooth transitions
  const wasActive = useRef(isActive);
  const transitionTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  useEffect(() => {
    // Clear any existing timeout
    if (transitionTimeoutRef.current) {
      clearTimeout(transitionTimeoutRef.current);
    }
    
    // If becoming active, update immediately
    if (isActive) {
      wasActive.current = true;
    } 
    // If becoming inactive, use a very short delay (just enough to prevent flickering)
    else if (wasActive.current && !isActive) {
      transitionTimeoutRef.current = setTimeout(() => {
        wasActive.current = false;
      }, 25); // Much shorter delay - just enough to prevent flickering
    }
    
    return () => {
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
      }
    };
  }, [isActive]);
  
  // Use the stabilized active state for styling
  const stableActive = wasActive.current;
  
  return (
    <span
      className={twMerge(`
        cursor-pointer px-5 py-2 rounded-4xl transition-colors duration-50 ease-in
        ${stableActive ? "bg-white/90 text-black" : "bg-transparent text-white hover:bg-white/30"}
      `)}
      onClick={() => onClick(href)}
      role="link"
      tabIndex={0}
      aria-label={`Navigate to ${children} section`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onClick(href);
          e.preventDefault();
        }
      }}
    >
      {children}
    </span>
  );
});

Link.displayName = "Link";

function Navbar() {
  const { activeSection, navigateTo } = useActiveSection();
  
  // Navigation items
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  // Handle navigation clicks
  const handleNavClick = (hash: string) => {
    const sectionId = hash.startsWith('#') ? hash.slice(1) : hash;
    navigateTo(sectionId);
  };

  return (
    <nav className="fixed z-20 left-1/2 transform -translate-x-1/2 top-4 rounded-4xl bg-gray-300/15 
      border border-gray-400/20 backdrop-blur-md backdrop-filter flex">
      {navItems.map((item) => {
        const href = item.id ? `#${item.id}` : '#';
        return (
          <Link 
            key={href}
            href={href}
            isActive={activeSection === item.id}
            onClick={handleNavClick}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

export default Navbar;
