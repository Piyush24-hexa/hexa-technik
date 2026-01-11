import { Facebook, Linkedin, Instagram, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-hexa-light pt-16 pb-8 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-bold text-black mb-6">Verticals</h3>
            <ul className="space-y-3">
              {["Automation", "Bearings", "Linear Motion", "Mechatronics", "Medical", "Robotics"].map((item) => (
                <li key={item}>
                  <Link to="/products" className="text-sm text-gray-600 hover:text-hexa-purple transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

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

          <div>
            <h3 className="text-lg font-bold text-black mb-6">Our Solutions</h3>
            <ul className="space-y-3">
              {["Industry 4.0", "Smart Factory", "Custom Solutions"].map((item) => (
                <li key={item}>
                  <Link to="/products" className="text-sm text-gray-600 hover:text-hexa-purple transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-black mb-6">Ethics & Compliance</h3>
            <ul className="space-y-3 mb-8">
              <li><Link to="#" className="text-sm text-gray-600 hover:text-hexa-purple transition-colors">Code of Conduct</Link></li>
              <li><Link to="#" className="text-sm text-gray-600 hover:text-hexa-purple transition-colors">Whistle Blower Policy</Link></li>
            </ul>

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
            <a href="#" className="hover:text-hexa-purple">Terms of Use</a>
            <a href="#" className="hover:text-hexa-purple">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
