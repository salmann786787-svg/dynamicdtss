import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { ThemeToggle } from "./ThemeToggle";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Close menu when a link is clicked
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-xl border-b border-border/50">
    <div className="container mx-auto px-6">
      <div className="flex items-center justify-between h-20">
        {/* Logo */}
        <div className="flex items-center gap-3 py-[4px] px-[4px] mx-0">
          <img src="https://cdn.builder.io/api/v1/image/assets%2F61171f36a49943d897e715737efdec38%2F36adae4df5324a968a324096a0e80d80" alt="Dynamic Dispatch Logo" className="w-14 h-14" />
          <div>
            <span className="text-foreground block leading-none text-xl font-extrabold" style={{ color: '#67bfff' }}>Dynamic Dispatch</span>
            <span className="text-muted-foreground text-sm text-left font-semibold">&amp; Tech Solutions Services</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-foreground hover:text-accent transition-colors font-medium">
            Our Services
          </a>
          <a href="#why-us" className="text-foreground hover:text-accent transition-colors font-medium">
            Why Us
          </a>
          <a href="#contact" className="text-foreground hover:text-accent transition-colors font-medium">
            Contact
          </a>
          <ThemeToggle />
          <Button className="text-white font-semibold shadow-[0_0_20px_hsl(189_94%_43%_/_0.3)] hover:shadow-[0_0_30px_hsl(189_94%_43%_/_0.5)] transition-all hover:opacity-90" style={{ backgroundColor: '#66beff' }}>
            Get Started
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button className="p-2 text-foreground hover:text-accent transition-colors" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && <div className="md:hidden py-4 border-t border-border/50 animate-fade-in">
        <div className="flex flex-col gap-4">
          <a href="#services" onClick={handleLinkClick} className="text-foreground hover:text-accent transition-colors font-medium">
            Our Services
          </a>
          <a href="#why-us" onClick={handleLinkClick} className="text-foreground hover:text-accent transition-colors font-medium">
            Why Us
          </a>
          <a href="#contact" onClick={handleLinkClick} className="text-foreground hover:text-accent transition-colors font-medium">
            Contact
          </a>
        </div>
      </div>}
    </div>
  </nav>;
};
export default Navigation;

