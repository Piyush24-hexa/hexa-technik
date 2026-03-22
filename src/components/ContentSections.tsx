import { Link } from "react-router-dom";
import {
    Cpu,
    Zap,
    Heart,
    Globe,
    Users,
    Lightbulb,
    Target,
    Code
} from "lucide-react";

export const ContentSections = () => {
    return (
        <main>
            {/* Verticals Grid */}
            <section className="py-20 bg-[#f8f9fc]">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
                        {[
                            { name: "Automation", icon: Cpu },
                            { name: "Robotics", icon: Target },
                            { name: "Medical", icon: Heart },
                            { name: "Mechatronics", icon: Zap },
                            { name: "Pneumatics", icon: Globe },
                            { name: "Software", icon: Code },
                        ].map((item) => (
                            <div key={item.name} className="flex flex-col items-center group cursor-pointer">
                                <div className="w-24 h-24 rounded-full bg-white shadow-md flex items-center justify-center mb-4 transition-transform group-hover:-translate-y-2 group-hover:shadow-lg border border-gray-100">
                                    <item.icon className="w-10 h-10 text-foreground group-hover:text-primary transition-colors" strokeWidth={1.5} />
                                </div>
                                <h3 className="font-bold text-gray-700 group-hover:text-primary transition-colors">{item.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/3">
                            <h2 className="text-4xl font-bold text-black mb-6">What Drives Us</h2>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                At Hexa Technik, we don't just build products — we build trust. Our principles
                                shape every design, every partnership, and every promise we make to our clients
                                and the communities we serve.
                            </p>
                            <Link to="/about" className="inline-block mt-8 text-primary font-bold hover:underline">Discover Our Story</Link>
                        </div>

                        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                { title: "Innovation", desc: "We challenge conventions and pursue breakthrough solutions that reimagine what's possible.", icon: Lightbulb },
                                { title: "Integrity", desc: "We operate with radical transparency — honest with our partners, consistent in our actions.", icon: Users },
                                { title: "Quality", desc: "Zero compromise. Every component, every system, every delivery meets the highest standards.", icon: Target },
                                { title: "Sustainability", desc: "We engineer for tomorrow, designing solutions that respect our planet and secure its future.", icon: Globe },
                            ].map((value) => (
                                <div key={value.title} className="flex gap-4 p-6 border border-gray-100 bg-white rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                                    <div className="shrink-0 text-primary">
                                        <value.icon className="w-12 h-12" strokeWidth={1} />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-black mb-2">{value.title}</h4>
                                        <p className="text-gray-500">{value.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience / Impact Section */}
            <section className="relative py-32 bg-hexa-dark text-white overflow-hidden">
                {/* Decorative Background */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 skew-x-12 translate-x-20"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center">
                        <div className="p-8 border-r border-white/10 last:border-0">
                            <h3 className="text-6xl font-bold text-primary mb-2">10+</h3>
                            <p className="text-xl uppercase tracking-wider text-gray-300">Years of Industry Expertise</p>
                        </div>
                        <div className="p-8 border-r border-white/10 last:border-0">
                            <h3 className="text-6xl font-bold text-white mb-2">15+</h3>
                            <p className="text-xl uppercase tracking-wider text-gray-300">Worldwide Technology Alliances</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};
