import { Car, Building2, Stethoscope, Briefcase, Plane, Factory, ArrowRight, Sun, Cog, Bot, Settings, Wind, Shield } from "lucide-react";

const Industry = () => {
    const industries = [
        {
            name: "Automotive",
            icon: Car,
            desc: "Precision components and automation systems powering next-gen vehicle manufacturing lines.",
            color: "from-blue-500/10 to-blue-600/5",
            border: "hover:border-blue-400",
            iconColor: "text-blue-500",
        },
        {
            name: "Infrastructure",
            icon: Building2,
            desc: "Robust industrial solutions for large-scale construction, utilities, and smart city projects.",
            color: "from-amber-500/10 to-amber-600/5",
            border: "hover:border-amber-400",
            iconColor: "text-amber-500",
        },
        {
            name: "Medical",
            icon: Stethoscope,
            desc: "Life-critical components for medical OEMs — built to the highest precision and compliance standards.",
            color: "from-red-500/10 to-red-600/5",
            border: "hover:border-red-400",
            iconColor: "text-red-500",
        },
        {
            name: "Business Solutions",
            icon: Briefcase,
            desc: "End-to-end engineering consultation and system integration services tailored to your business.",
            color: "from-purple-500/10 to-purple-600/5",
            border: "hover:border-purple-400",
            iconColor: "text-purple-500",
        },
        {
            name: "Aerospace",
            icon: Plane,
            desc: "High-tolerance parts and automation for aerospace assembly, testing, and quality assurance.",
            color: "from-sky-500/10 to-sky-600/5",
            border: "hover:border-sky-400",
            iconColor: "text-sky-500",
        },
        {
            name: "Manufacturing",
            icon: Factory,
            desc: "Smart factory upgrades, robotic cells, and motion systems that transform production capabilities.",
            color: "from-green-500/10 to-green-600/5",
            border: "hover:border-green-400",
            iconColor: "text-green-500",
        },
        {
            name: "Solar",
            icon: Sun,
            desc: "Automation and motion control solutions for solar panel manufacturing and tracking systems.",
            color: "from-yellow-500/10 to-yellow-600/5",
            border: "hover:border-yellow-400",
            iconColor: "text-yellow-500",
        },
        {
            name: "Automation",
            icon: Cog,
            desc: "Comprehensive PLC, SCADA, and drive solutions for fully automated production environments.",
            color: "from-orange-500/10 to-orange-600/5",
            border: "hover:border-orange-400",
            iconColor: "text-orange-500",
        },
        {
            name: "Robotics",
            icon: Bot,
            desc: "Collaborative and industrial robots that boost throughput, reduce errors, and future-proof your facility.",
            color: "from-indigo-500/10 to-indigo-600/5",
            border: "hover:border-indigo-400",
            iconColor: "text-indigo-500",
        },
        {
            name: "Mechatronics",
            icon: Settings,
            desc: "Seamlessly integrated mechanical, electronic, and software systems for modern machine builders.",
            color: "from-teal-500/10 to-teal-600/5",
            border: "hover:border-teal-400",
            iconColor: "text-teal-500",
        },
        {
            name: "Pneumatics",
            icon: Wind,
            desc: "Compact, efficient pneumatic control solutions for clean, quiet, and high-speed industrial setups.",
            color: "from-cyan-500/10 to-cyan-600/5",
            border: "hover:border-cyan-400",
            iconColor: "text-cyan-500",
        },
        {
            name: "Defence",
            icon: Shield,
            desc: "Ruggedised components and precision systems engineered to meet the stringent demands of defence applications.",
            color: "from-slate-500/10 to-slate-600/5",
            border: "hover:border-slate-400",
            iconColor: "text-slate-600",
        },
    ];

    return (
        <div className="min-h-screen bg-[#f8f9fc]">
            {/* ── Hero ── */}
            <div className="relative bg-hexa-dark text-white overflow-hidden">
                <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                        backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                        backgroundSize: "36px 36px",
                    }}
                />
                {/* accent bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-purple-500 to-primary" />

                <div className="relative container mx-auto px-4 py-24">
                    <p className="text-primary font-bold uppercase tracking-widest text-xs mb-4">Where We Operate</p>
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
                        Industries We Serve
                    </h1>
                    <p className="text-gray-300 text-lg max-w-xl leading-relaxed">
                        From automotive lines to defence labs, Hexa Technik delivers precision engineering solutions across every sector that shapes our world.
                    </p>
                </div>
            </div>

            {/* Cards Grid */}
            <div className="container mx-auto px-4 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {industries.map((ind) => (
                        <div
                            key={ind.name}
                            className={`group relative bg-gradient-to-br ${ind.color} border border-gray-100 ${ind.border} rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer overflow-hidden`}
                        >
                            <div className={`w-14 h-14 rounded-xl bg-white shadow-sm flex items-center justify-center mb-6 ${ind.iconColor}`}>
                                <ind.icon className="w-7 h-7" strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{ind.name}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed mb-6">{ind.desc}</p>
                            <div className={`flex items-center gap-2 text-sm font-semibold ${ind.iconColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                                Learn More <ArrowRight className="w-4 h-4" />
                            </div>
                            <div className={`absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-current opacity-5 ${ind.iconColor}`} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom CTA */}
            <div className="bg-white border-t border-gray-100 py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Don't see your industry?</h2>
                    <p className="text-gray-500 text-lg mb-8 max-w-xl mx-auto">
                        We work across many specialized sectors. Reach out and our engineers will find the right solution for you.
                    </p>
                    <a href="/contact" className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold px-8 py-4 rounded-full transition-all hover:translate-x-1 shadow-md hover:shadow-lg">
                        Contact Us <ArrowRight className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Industry;
