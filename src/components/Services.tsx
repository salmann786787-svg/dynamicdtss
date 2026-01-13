import { Headphones, Calendar, FileText, Users, Clock, Shield } from "lucide-react";
import teamImage from "@/assets/team-collaboration.jpg";
import { useState } from "react";

const services = [
  {
    icon: Headphones,
    title: "Live Dispatch Support",
    description: "Our experienced team handles every call, coordinates drivers, and manages your fleet operations 24/7."
  },
  {
    icon: Calendar,
    title: "Reservation Management",
    description: "Expert booking specialists ensure every reservation is handled perfectly, from inquiry to completion."
  },
  {
    icon: FileText,
    title: "Back Office Administration",
    description: "We take care of invoicing, reporting, documentation, and all the details that keep your business running."
  },
  {
    icon: Users,
    title: "Client Communication",
    description: "Professional, courteous interaction with your clients that reflects your brand's premium standards."
  },
  {
    icon: Clock,
    title: "Real-Time Coordination",
    description: "Seamless coordination between drivers, clients, and your team for flawless execution every time."
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Every interaction is monitored and refined to maintain the highest standards of service excellence."
  }
];

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Everything You Need, One Expert Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're your dedicated back office, handling operations so you can grow your business
          </p>
        </div>

        {/* Services with Image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto mb-16">
          <div className="grid sm:grid-cols-2 gap-6 animate-fade-in">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isHovered = hoveredIndex === index;
              return (
                <div
                  key={index}
                  className="glass-card relative overflow-hidden cursor-pointer group"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  style={{
                    transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
                  }}
                >
                  {/* Shine effect */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/20 to-transparent -translate-x-full transition-transform duration-700"
                    style={{
                      transform: isHovered ? 'translateX(100%)' : 'translateX(-100%)',
                    }}
                  />
                  
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-all group-hover:scale-110 group-hover:rotate-6 duration-300 relative z-10">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-foreground mb-2 relative z-10">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed relative z-10">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="relative animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={teamImage} 
                alt="Our dispatch team at work"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <h3 className="text-2xl font-bold mb-2">Meet Your Team</h3>
                <p className="text-white/90">
                  Experienced professionals dedicated to your success, available whenever you need us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;