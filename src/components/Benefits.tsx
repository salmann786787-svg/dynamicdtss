import { CheckCircle2, DollarSign, TrendingUp, Users, Heart } from "lucide-react";
import chauffeurImage from "@/assets/premium-chauffeur.jpg";
import { useEffect, useState } from "react";
const benefits = ["No hiring, training, or managing staff overhead", "Scale instantly during peak seasons without growing payroll", "Professional service that reflects your luxury brand", "Reduce operational costs while improving service quality", "Focus on what you do best - delivering premium experiences", "Get started in days, not months - no complex setup required"];
const stats = [{
  icon: DollarSign,
  value: "40%",
  label: "Cost Savings",
  description: "Compared to in-house team"
}, {
  icon: TrendingUp,
  value: "3x",
  label: "Faster Growth",
  description: "With streamlined operations"
}, {
  icon: Users,
  value: "50+",
  label: "Companies",
  description: "Trust our service daily"
}, {
  icon: Heart,
  value: "5.0",
  label: "Client Rating",
  description: "Average satisfaction score"
}];
const Benefits = () => {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return <section className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Parallax Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-50" style={{
      transform: `translateY(${scrollY * 0.2}px)`
    }}>
        <div className="absolute top-20 right-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Image Side */}
          <div className="relative animate-fade-in order-2 lg:order-1 parallax-layer" style={{
          transform: `translateY(${scrollY * 0.05}px)`
        }}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <img src={chauffeurImage} alt="Professional chauffeur providing luxury service" className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
            </div>
            
            {/* Floating Stats with Glass Effect */}
            
          </div>

          {/* Content Side */}
          <div className="animate-fade-in order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why Partner With Us?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              We understand luxury ground transport because we've been doing this for years. Real experience, real results.
            </p>
            
            <div className="space-y-4 mb-12">
              {benefits.map((benefit, index) => <div key={index} style={{
              animationDelay: `${index * 100}ms`
            }} className="flex items-start gap-4 p-4 rounded-xl glass hover:bg-background/50 transition-all group cursor-pointer hover:scale-[1.02] py-[10px] px-[10px]">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
                  <span className="text-foreground/90 text-lg leading-relaxed">
                    {benefit}
                  </span>
                </div>)}
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => {
              const Icon = stat.icon;
              return <div key={index} className="glass-card group cursor-pointer relative overflow-hidden">
                    {/* Animated background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <Icon className="w-8 h-8 text-accent mb-3 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-300 relative z-10" />
                    <div className="text-3xl font-bold text-foreground mb-1 relative z-10 group-hover:text-accent transition-colors">
                      {stat.value}
                    </div>
                    <div className="text-sm font-semibold text-foreground/80 mb-1 relative z-10">
                      {stat.label}
                    </div>
                    <div className="text-xs text-muted-foreground relative z-10">
                      {stat.description}
                    </div>
                  </div>;
            })}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Benefits;