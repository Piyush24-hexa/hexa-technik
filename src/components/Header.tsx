import { useState, useEffect } from "react";
import { Menu, X, Search, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Products & Brands", href: "/products" },
  { label: "Industry Segment", href: "/industries" },
  { label: "About Us", href: "/about" },
  { label: "Gallery", href: "/products" },
  { label: "Career", href: "/careers" },
  { label: "Reach Us", href: "/contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="luna-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-xl">L</span>
              </div>
              <div>
                <span className={`font-heading font-bold text-2xl ${isScrolled ? 'text-foreground' : 'text-secondary-foreground'}`}>
                  Luna
                </span>
                <p className={`text-[10px] -mt-1 ${isScrolled ? 'text-muted-foreground' : 'text-secondary-foreground/70'}`}>
                  move with us...
                </p>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`px-4 py-2 text-sm font-medium transition-colors hover:text-primary ${
                  isScrolled ? "text-foreground" : "text-secondary-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className={isScrolled ? "text-foreground" : "text-secondary-foreground"}
            >
              <Search className="h-5 w-5" />
            </Button>
            
            <a 
              href="tel:+919876543210" 
              className={`hidden md:flex items-center gap-2 text-sm font-medium ${
                isScrolled ? "text-foreground" : "text-secondary-foreground"
              }`}
            >
              <Phone className="h-4 w-4" />
              <span>+91 98765 43210</span>
            </a>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className={`lg:hidden ${isScrolled ? "text-foreground" : "text-secondary-foreground"}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-background/95 backdrop-blur-md border-t border-border animate-fade-in">
            <nav className="py-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-4 py-3 text-foreground hover:text-primary hover:bg-muted transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
