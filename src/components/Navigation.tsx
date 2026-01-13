import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import ddLogo from "@/assets/dd-logo.png";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-xl border-b border-border/50">
    <div className="container mx-auto px-6">
      <div className="flex items-center justify-between h-20">
        {/* Logo */}
        <div className="flex items-center gap-3 py-[4px] px-[4px] mx-0">
          <img src={ddLogo} alt="Dynamic Dispatch Logo" className="w-14 h-14" />
          <div>
            <span className="text-foreground block leading-none text-xl font-extrabold">Dynamic Dispatch</span>
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
          <Button className="bg-accent hover:bg-accent/90 text-white font-semibold shadow-[0_0_20px_hsl(189_94%_43%_/_0.3)] hover:shadow-[0_0_30px_hsl(189_94%_43%_/_0.5)] transition-all">
            Get Started
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button className="p-2 text-foreground hover:text-accent transition-colors" onClick={() => setIsOpen(!isOpen)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && <div className="md:hidden py-4 border-t border-border/50 animate-fade-in">
        <div className="flex flex-col gap-4">
          <a href="#services" className="text-foreground hover:text-accent transition-colors font-medium">
            Our Services
          </a>
          <a href="#why-us" className="text-foreground hover:text-accent transition-colors font-medium">
            Why Us
          </a>
          <a href="#contact" className="text-foreground hover:text-accent transition-colors font-medium">
            Contact
          </a>
          <Button className="bg-accent hover:bg-accent/90 text-white font-semibold w-full">
            Get Started
          </Button>
        </div>
      </div>}
    </div>
  </nav>;
};
export default Navigation;