import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-dispatcher.jpg";
import { useEffect, useState } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const parallaxOffset = scrollY * 0.5;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/90">
      {/* Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse"
          style={{
            left: `${mousePosition.x * 0.02}px`,
            top: `${mousePosition.y * 0.02}px`,
            transition: 'all 0.5s ease-out',
          }}
        />
        <div
          className="absolute w-72 h-72 bg-accent/10 rounded-full blur-2xl animate-pulse"
          style={{
            right: `${mousePosition.x * 0.01}px`,
            bottom: `${mousePosition.y * 0.01}px`,
            transition: 'all 0.7s ease-out',
            animationDelay: '1s',
          }}
        />
      </div>

      {/* Hero Image with Parallax */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
          transform: `translateY(${parallaxOffset}px)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/70" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 py-12 md:py-20 flex flex-col w-full">
        <div className="max-w-2xl parallax-container flex flex-col justify-start items-start" style={{ marginRight: "auto" }}>
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 animate-fade-in group hover:scale-105 transition-transform cursor-pointer text-xs md:text-sm"
            style={{
              transform: `translateX(${mousePosition.x * 0.01}px) translateY(${mousePosition.y * 0.01}px)`,
            }}
          >
            <Sparkles className="w-4 h-4 text-accent animate-pulse flex-shrink-0" />
            <span className="text-white font-medium">Trusted by Premium Transport Companies</span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in flex flex-col w-full">
            <div>Your Expert Team,</div>
            <div className="block mt-2 font-bold" style={{ color: 'rgba(3, 218, 190, 1)' }}>Behind the Scenes</div>
          </h1>

          <p className="text-base md:text-lg lg:text-xl text-white/90 mb-8 leading-relaxed animate-fade-in">
            Real people, real expertise. We handle your dispatch, bookings, and back office so you can focus on delivering exceptional luxury service to your clients.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-in w-full sm:w-auto">
            <Button
              size="lg"
              className="text-white font-semibold group px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg shadow-2xl hover:scale-105 transition-all duration-300 relative overflow-hidden w-full sm:w-auto"
              style={{ backgroundColor: '#18d0fe' }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <Phone className="mr-2 h-4 sm:h-5 w-4 sm:w-5 group-hover:rotate-12 transition-transform flex-shrink-0" />
              <span>Talk to Our Team</span>
              <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </Button>
            <Button
              size="lg"
              className="border-2 border-white/30 text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg transition-all hover:scale-105 duration-300 w-full sm:w-auto"
              style={{ backgroundColor: '#03dabe' }}
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              See How We Work
            </Button>
          </div>

        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
