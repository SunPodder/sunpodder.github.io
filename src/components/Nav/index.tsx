import { memo } from "react";
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
  return (
    <span
      className={twMerge(`
        cursor-pointer px-5 py-2 rounded-4xl transition-colors duration-100 ease-in
        ${isActive ? "bg-white/90 text-black" : "bg-transparent text-white hover:bg-white/30"}
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
