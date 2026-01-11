import { MapPin, Phone, Mail, ArrowUp } from "lucide-react";

const footerLinks = {
  verticals: [
    { label: "Automation", href: "#" },
    { label: "Bearings", href: "#" },
    { label: "Mechatronics", href: "#" },
    { label: "Pneumatics", href: "#" },
    { label: "Medical", href: "#" },
    { label: "Robotics", href: "#" },
  ],
  company: [
    { label: "About", href: "#about" },
    { label: "Career", href: "#" },
    { label: "Newsroom", href: "#" },
    { label: "Global Locations", href: "#" },
  ],
  solutions: [
    { label: "Product Lines", href: "#" },
    { label: "Industries", href: "#" },
    { label: "Brands", href: "#" },
    { label: "Solution Finder", href: "#" },
  ],
  ethics: [
    { label: "Code of Conduct", href: "#" },
    { label: "Terms of Use", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ],
};

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Main Footer */}
      <div className="luna-container py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-xl">L</span>
              </div>
              <div>
                <span className="font-heading font-bold text-2xl">Luna</span>
                <p className="text-[10px] text-secondary-foreground/60 -mt-1">move with us...</p>
              </div>
            </div>
            <p className="text-secondary-foreground/70 text-sm mb-6">
              India's #1 Industrial Automation Company. Leading supplier of Industrial Automation Products and Services.
            </p>
            <div className="space-y-3 text-sm">
              <a href="#" className="flex items-center gap-3 text-secondary-foreground/70 hover:text-primary transition-colors">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span>Navi Mumbai, Maharashtra, India</span>
              </a>
              <a href="tel:+919876543210" className="flex items-center gap-3 text-secondary-foreground/70 hover:text-primary transition-colors">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+91 98765 43210</span>
              </a>
              <a href="mailto:info@luna.co.in" className="flex items-center gap-3 text-secondary-foreground/70 hover:text-primary transition-colors">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>info@luna.co.in</span>
              </a>
            </div>
          </div>

          {/* Verticals */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4">
              Verticals
            </h4>
            <ul className="space-y-3">
              {footerLinks.verticals.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Company */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4">
              Our Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Solutions */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4">
              Our Solutions
            </h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Ethics & Compliance */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4">
              Ethics & Compliance
            </h4>
            <ul className="space-y-3">
              {footerLinks.ethics.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-foreground/10">
        <div className="luna-container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-secondary-foreground/50 text-center md:text-left">
            © 2025 Luna Technologies Pvt. Ltd. Luna™, the Luna Logo, and all trademarks and service marks 
            denoted with ™, ℠ or ® are owned by affiliates of Luna.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-secondary-foreground/70 hover:text-primary transition-colors"
          >
            <span>TOP</span>
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
