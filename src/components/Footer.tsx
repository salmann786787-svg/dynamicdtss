import { Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="https://cdn.builder.io/api/v1/image/assets%2F61171f36a49943d897e715737efdec38%2F36adae4df5324a968a324096a0e80d80" alt="Dynamic Dispatch Logo" className="w-12 h-12" />
              <div>
                <span className="font-semibold text-lg block leading-tight" style={{ color: 'rgba(103, 191, 255, 1)' }}>Dynamic Dispatch</span>
                <span className="text-white/70 text-sm">& Tech Solutions Services</span>
              </div>
            </div>
            <p className="text-white/70 leading-relaxed">
              Premium back office and dispatch solutions for luxury ground transport companies.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-white/70">
              <li><a href="#services" className="hover:text-accent transition-colors">Services</a></li>
              <li><a href="#why-us" className="hover:text-accent transition-colors">Why Choose Us</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
              <li><Link to="/privacy-policy" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@dynamicdtss.com" className="hover:text-accent transition-colors">info@dynamicdtss.com</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>H-187 Shahrah-e-Quaideen, Block 2, PECHS, Karachi.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/60 text-sm">
              &copy; {new Date().getFullYear()} Dynamic Dispatch & Tech Solution Services. All rights reserved.
            </p>

            {/* V Assist Pro Credit */}
            <a
              href="https://vassistproinc.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/60 hover:text-white transition-colors group"
            >
              <span className="text-sm">Powered by</span>
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F88da141a3a504a51b2a3ca3584f907d1%2Ff34b048caef549548e025a9d389e4e6d?format=webp&width=120"
                alt="V Assist Pro"
                className="h-6 opacity-70 group-hover:opacity-100 transition-opacity"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
