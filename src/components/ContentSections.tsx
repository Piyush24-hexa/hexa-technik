import {
    Cpu,
    Settings,
    Zap, // Replaced Activity with Zap for better relevance (or keep Activity if preferred)
    Heart,
    Globe,
    Users,
    Lightbulb,
    Target
} from "lucide-react";

export const ContentSections = () => {
    return (
        <main>
            {/* Verticals Grid */}
            <section className="py-20 bg-secondary">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
                        {[
                            { name: "Automation", icon: Cpu },
                            { name: "Bearings", icon: Settings },
                            { name: "Mechatronics", icon: Zap },
                            { name: "Medical", icon: Heart },
                            { name: "Pneumatics", icon: Globe }, // Placeholder icon
                            { name: "Robotics", icon: Target },
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
                            <h2 className="text-4xl font-bold text-black mb-6">Our Values</h2>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                We believe in creating sustainable value through innovation and integrity. Our core values guide every decision we make and every product we create, ensuring we deliver excellence to our partners and society.
                            </p>
                            <a href="#" className="inline-block mt-8 text-primary font-bold hover:underline">Read Our Philosophy</a>
                        </div>

                        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                { title: "Innovation", desc: "Pioneering new solutions", icon: Lightbulb },
                                { title: "Integrity", desc: "Honest and transparent", icon: Users }, // Placeholder
                                { title: "Quality", desc: "Excellence in every detail", icon: Target },
                                { title: "Sustainability", desc: "Caring for our future", icon: Globe },
                            ].map((value) => (
                                <div key={value.title} className="flex gap-4 p-6 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
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
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                        <div className="p-8 border-r border-white/10 last:border-0">
                            <h3 className="text-6xl font-bold text-primary mb-2">&gt;30</h3>
                            <p className="text-xl uppercase tracking-wider text-gray-300">Years of Experience</p>
                        </div>
                        <div className="p-8 border-r border-white/10 last:border-0">
                            <h3 className="text-6xl font-bold text-white mb-2">50+</h3>
                            <p className="text-xl uppercase tracking-wider text-gray-300">Countries Served</p>
                        </div>
                        <div className="p-8 border-r border-white/10 last:border-0">
                            <h3 className="text-6xl font-bold text-primary mb-2">10k+</h3>
                            <p className="text-xl uppercase tracking-wider text-gray-300">Projects Delivered</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};
