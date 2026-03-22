import { Facebook, Linkedin, Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-hexa-light pt-16 pb-8 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">

          {/* Product Range */}
          <div>
            <h3 className="text-lg font-bold text-black mb-6">Product Range</h3>
            <ul className="space-y-3">
              {["Automation", "Software", "Linear Motion", "Mechatronics", "Medical", "Robotics"].map((item) => (
                <li key={item}>
                  <Link to="/products" className="text-sm text-gray-600 hover:text-hexa-purple transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Company */}
          <div>
            <h3 className="text-lg font-bold text-black mb-6">Our Company</h3>
            <ul className="space-y-3">
              {[
                { name: "About Us", to: "/about" },
                { name: "Gallery", to: "/gallery" },
                { name: "News & Events", to: "/products" }
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.to} className="text-sm text-gray-600 hover:text-hexa-purple transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Locations */}
          <div>
            <h3 className="text-lg font-bold text-black mb-6">Our Locations</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                <span className="text-sm text-gray-600">Pune</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                <span className="text-sm text-gray-600">Mumbai</span>
              </div>
              <a href="tel:+919225513779" className="flex items-center gap-3 text-sm text-gray-600 hover:text-primary transition-colors">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                +91 9225513779
              </a>
              <a href="mailto:hexatechnik@gmail.com" className="flex items-center gap-3 text-sm text-gray-600 hover:text-primary transition-colors">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                hexatechnik@gmail.com
              </a>
            </div>
          </div>

          {/* Connect With Us */}
          <div>
            <h3 className="text-lg font-bold text-black mb-6">Connect With Us</h3>
            <div className="flex gap-4">
              {[Facebook, Linkedin, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white hover:bg-hexa-purple transition-colors">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

        </div>

        <div className="border-t border-gray-300 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2026 Hexa Technik. All Rights Reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/terms" className="hover:text-hexa-purple">Terms of Use</Link>
            <Link to="/privacy" className="hover:text-hexa-purple">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
