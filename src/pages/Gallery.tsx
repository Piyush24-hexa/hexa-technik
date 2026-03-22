import { useState } from "react";

const products = [
    {
        name: "PLC",
        category: "Automation",
        image: "/gallery/gallery_plc_1773127181233.png",
    },
    {
        name: "HMI",
        category: "Automation",
        image: "/gallery/gallery_hmi_1773127198713.png",
    },
    {
        name: "Servo Motor",
        category: "Motion",
        image: "/gallery/gallery_servo_1773127217517.png",
    },
    {
        name: "Ball Screw",
        category: "Linear Motion",
        image: "/gallery/gallery_ballscrew_1773127241433.png",
    },
    {
        name: "Variable Frequency Drive",
        category: "Automation",
        image: "/gallery/gallery_vfd_1773127263383.png",
    },
    {
        name: "Industrial Robot",
        category: "Robotics",
        image: "/gallery/gallery_robot_1773127281266.png",
    },
    {
        name: "Electric Actuator",
        category: "Motion",
        image: "/gallery/gallery_actuator_1773127307508.png",
    },
    {
        name: "Pneumatic Cylinder",
        category: "Pneumatics",
        image: "/gallery/gallery_pneumatics_1773127327720.png",
    },
    {
        name: "Medical Device",
        category: "Medical",
        image: "/gallery/gallery_medical_1773127345831.png",
    },
];

const categories = ["All", ...Array.from(new Set(products.map((p) => p.category)))];

const Gallery = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const [lightbox, setLightbox] = useState<{ image: string; name: string } | null>(null);

    const filtered = activeCategory === "All" ? products : products.filter((p) => p.category === activeCategory);

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
                    <p className="text-primary font-bold uppercase tracking-widest text-xs mb-4">
                        Our Products
                    </p>
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
                        Product Gallery
                    </h1>
                    <p className="text-gray-300 text-lg max-w-lg">
                        Explore the cutting-edge industrial products and solutions we supply across sectors.
                    </p>
                </div>
            </div>

            {/* Filter Bar */}
            <div className="sticky top-20 z-30 bg-[#f8f9fc]/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
                <div className="container mx-auto px-4 py-4 flex gap-3 flex-wrap">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${activeCategory === cat
                                ? "bg-primary text-white shadow-md"
                                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Grid */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filtered.map((product) => (
                        <div
                            key={product.name}
                            onClick={() => setLightbox({ image: product.image, name: product.name })}
                            className="group bg-white rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                        >
                            <div className="overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            {/* Always-visible name below image */}
                            <div className="px-5 py-4 border-t border-gray-100">
                                <span className="text-xs font-bold uppercase tracking-widest text-primary">{product.category}</span>
                                <h3 className="text-gray-900 font-bold text-lg mt-1">{product.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            {lightbox && (
                <div
                    className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
                    onClick={() => setLightbox(null)}
                >
                    <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
                        <button
                            onClick={() => setLightbox(null)}
                            className="absolute -top-10 right-0 text-white text-3xl font-bold hover:text-primary transition-colors"
                        >
                            ✕
                        </button>
                        <img src={lightbox.image} alt={lightbox.name} className="w-full rounded-xl shadow-2xl" />
                        <p className="text-white text-center mt-4 font-semibold text-lg">{lightbox.name}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;
