
import { Search, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    const navItems = [
        { name: "Home", href: "/" },
        {
            name: "Products and Services",
            href: "/products",
            hasDropdown: true,
            dropdownItems: ["PLC", "HMI", "Servo", "Electric Actuator", "Connectivity Solutions", "Ball Screw", "Linear Guideway", "Variable Frequency Drive", "Robots"]
        },
        {
            name: "Industries We Serve",
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

    return (
        <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
            <div className="container flex items-center justify-between h-20 px-4 mx-auto">
                <Link to="/" className="flex items-center gap-3">
                    <img src="/hexa_logo.jpg" alt="Hexa Technik" className="h-12 w-auto object-contain rounded-lg" />
                    <div className="flex flex-col">
                        <span className="text-xl font-bold tracking-wide text-foreground">HEXA TECHNIK</span>
                    </div>
                </Link>

                <nav className="hidden md:flex items-center gap-8">
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

                <div className="flex items-center gap-4">
                    <button className="p-2 text-gray-500 hover:text-primary transition-colors">
                        <Search className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </header>
    );
};
