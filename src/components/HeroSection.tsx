import { ArrowRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative w-full h-[600px] md:h-[800px] bg-black overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10"></div>

      {/* Background Image Placeholder - In real app, use actual image */}
      <img
        src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2070"
        alt="Industrial Automation"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
        <div className="max-w-3xl animate-fade-up">
          <h3 className="text-white text-xl md:text-2xl font-bold mb-4 tracking-wider uppercase">
            Hexa Technik
          </h3>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Redefining <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              What's Possible
            </span>
          </h1>

          <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 transition-all transform hover:translate-x-1">
            Discover More <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Slider Dots */}
      <div className="absolute bottom-10 left-0 right-0 z-30 flex justify-center gap-3">
        <div className="w-3 h-3 rounded-full bg-primary"></div>
        <div className="w-3 h-3 rounded-full bg-white/50 hover:bg-white cursor-pointer transition-colors"></div>
        <div className="w-3 h-3 rounded-full bg-white/50 hover:bg-white cursor-pointer transition-colors"></div>
      </div>
    </section>
  );
};
