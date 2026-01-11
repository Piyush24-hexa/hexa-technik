import { Search, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    const navItems = [
        { name: "Home", href: "/" },
        { name: "Products & Brands", href: "/products", hasDropdown: true },
        { name: "Industry Segment", href: "/industry", hasDropdown: true },
        { name: "About Us", href: "/about", hasDropdown: true },
        { name: "Gallery", href: "/gallery" },

        { name: "Reach Us", href: "/contact" },
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
                        <Link
                            key={item.name}
                            to={item.href}
                            className="group flex items-center gap-1 text-[15px] font-medium text-foreground hover:text-primary transition-colors"
                        >
                            {item.name}
                            {item.hasDropdown && (
                                <ChevronDown className="w-4 h-4 mt-0.5 text-gray-400 group-hover:text-primary" />
                            )}
                        </Link>
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
