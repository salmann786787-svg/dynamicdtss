import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary via-primary/95 to-primary text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Talk About Your Business
          </h2>

          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Every luxury transport company is unique. We'd love to learn about your operation and show you how our team can help you grow.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold group px-8 py-6 text-lg shadow-2xl"
            >
              <Phone className="mr-2 h-5 w-5" />
              Schedule a Call
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-6 text-lg border-2 border-accent"
            >
              <Mail className="mr-2 h-5 w-5" />
              Send Us an Email
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto pt-8 border-t border-white/20">
            <div>
              <div className="text-3xl font-bold text-accent mb-2">Same Day</div>
              <div className="text-sm text-white/80">Response Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">No Contract</div>
              <div className="text-sm text-white/80">Cancel Anytime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;