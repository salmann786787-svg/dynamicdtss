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
      <div className="container mx-auto px-6 relative z-10 py-20">
        <div className="max-w-2xl parallax-container">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 animate-fade-in group hover:scale-105 transition-transform cursor-pointer"
            style={{
              transform: `translateX(${mousePosition.x * 0.01}px) translateY(${mousePosition.y * 0.01}px)`,
            }}
          >
            <Sparkles className="w-4 h-4 text-accent animate-pulse" />
            <span className="text-sm text-white font-medium">Trusted by Premium Transport Companies</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in">
            Your Expert Team,
            <span className="block text-accent mt-2">Behind the Scenes</span>
          </h1>

          <p className="text-xl text-white/90 mb-8 leading-relaxed animate-fade-in">
            Real people, real expertise. We handle your dispatch, bookings, and back office so you can focus on delivering exceptional luxury service to your clients.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold group px-8 py-6 text-lg shadow-2xl hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <Phone className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              Talk to Our Team
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="glass border-2 border-white/30 text-white hover:bg-white hover:text-primary px-8 py-6 text-lg transition-all hover:scale-105 duration-300"
            >
              See How We Work
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap items-center gap-8 text-white/80 text-sm animate-fade-in">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-accent/30 border-2 border-white" />
                <div className="w-8 h-8 rounded-full bg-accent/40 border-2 border-white" />
                <div className="w-8 h-8 rounded-full bg-accent/50 border-2 border-white" />
              </div>
              <span>50+ Transport Companies</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-accent text-2xl">★★★★★</div>
              <span>5.0 Average Rating</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
