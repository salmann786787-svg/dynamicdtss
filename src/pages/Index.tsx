import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-[Inter]">
      <Navigation />
      <Hero />
      <div id="services">
        <Services />
      </div>
      <div id="why-us">
        <Benefits />
      </div>
      <div id="contact">
        <CTA />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
