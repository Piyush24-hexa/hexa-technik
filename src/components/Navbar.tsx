import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const navigate = useNavigate();

    const navItems = [
        { name: "Home", href: "/" },
        {
            name: "Products",
            href: "/products",
            hasDropdown: true,
            dropdownItems: ["PLC", "HMI", "Servo", "Electric Actuator", "Connectivity Solutions", "Ball Screw", "Linear Guideway", "Variable Frequency Drive", "Robots"]
        },
        {
            name: "Industries",
            href: "/industry",
            hasDropdown: true,
            dropdownItems: ["Solar", "Automation", "Robotics", "Mechatronics", "Pneumatics", "Medical", "Automotive", "Infrastructure", "Aerospace", "Manufacturing", "Business Solutions", "Defence"]
        },
        {
            name: "About Us",
            href: "/about",
            hasDropdown: true,
            dropdownItems: [
                { label: "Our Story", href: "/about#our-story" },
                { label: "What We Do", href: "/about#what-we-do" },
            ]
        },
        { name: "Gallery", href: "/gallery" },
        { name: "Contact Us", href: "/contact" },
    ];

    const closeMobile = () => {
        setMobileOpen(false);
        setOpenDropdown(null);
    };

    return (
        <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
            <div className="container flex items-center justify-between h-16 md:h-20 px-4 mx-auto">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-3" onClick={closeMobile}>
                    <img src="/hexa_logo.jpg" alt="Hexa Technik" className="h-10 md:h-12 w-auto object-contain rounded-lg" />
                    <span className="text-lg md:text-xl font-bold tracking-wide text-foreground">HEXA TECHNIK</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6">
                    {navItems.map((item) => (
                        <div key={item.name} className="relative group">
                            <Link
                                to={item.href}
                                className="flex items-center gap-1 text-[15px] font-medium text-foreground hover:text-primary transition-colors py-8"
                            >
                                {item.name}
                                {item.hasDropdown && (
                                    <ChevronDown className="w-4 h-4 mt-0.5 text-gray-400 group-hover:text-primary transition-transform group-hover:rotate-180" />
                                )}
                            </Link>

                            {item.hasDropdown && item.dropdownItems && (
                                <div className="absolute top-full left-0 w-56 bg-white border border-gray-100 shadow-xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50 overflow-hidden">
                                    <div className="py-2">
                                        {item.dropdownItems.map((subItem) => {
                                            const label = typeof subItem === "string" ? subItem : subItem.label;
                                            const href = typeof subItem === "string" ? item.href : subItem.href;
                                            return (
                                                <Link
                                                    key={label}
                                                    to={href}
                                                    className="block px-4 py-2.5 text-sm text-gray-600 hover:text-primary hover:bg-gray-50 transition-colors"
                                                >
                                                    {label}
                                                </Link>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </nav>

                {/* Hamburger Button */}
                <button
                    className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
                    <nav className="px-4 py-3 space-y-1">
                        {navItems.map((item) => (
                            <div key={item.name}>
                                <div className="flex items-center justify-between">
                                    <Link
                                        to={item.href}
                                        onClick={!item.hasDropdown ? closeMobile : undefined}
                                        className="flex-1 py-3 text-base font-medium text-gray-800 hover:text-primary transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                    {item.hasDropdown && (
                                        <button
                                            onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                                            className="p-2 text-gray-400"
                                        >
                                            <ChevronDown className={`w-5 h-5 transition-transform ${openDropdown === item.name ? "rotate-180" : ""}`} />
                                        </button>
                                    )}
                                </div>

                                {item.hasDropdown && openDropdown === item.name && item.dropdownItems && (
                                    <div className="pl-4 pb-2 space-y-1 border-l-2 border-primary/20 ml-2">
                                        {item.dropdownItems.map((subItem) => {
                                            const label = typeof subItem === "string" ? subItem : subItem.label;
                                            const href = typeof subItem === "string" ? item.href : subItem.href;
                                            return (
                                                <Link
                                                    key={label}
                                                    to={href}
                                                    onClick={closeMobile}
                                                    className="block py-2 text-sm text-gray-600 hover:text-primary transition-colors"
                                                >
                                                    {label}
                                                </Link>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* Mobile Contact CTA */}
                    <div className="px-4 pb-4">
                        <button
                            onClick={() => { navigate("/contact"); closeMobile(); }}
                            className="w-full bg-primary text-white font-bold py-3 rounded-xl hover:bg-primary/90 transition-colors"
                        >
                            Get in Touch
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
};
