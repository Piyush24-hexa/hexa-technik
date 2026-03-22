import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

const heroSlides = [
  {
    valid: true,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2070",
    title: "Engineering",
    subtitle: "Tomorrow's World",
    desc: "Hexa Technik — Precision. Power. Progress."
  },
  {
    valid: true,
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=2070",
    title: "Clean Energy",
    subtitle: "For Every Industry",
    desc: "Driving a Sustainable Future"
  },
  {
    valid: true,
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=2070",
    title: "Intelligent",
    subtitle: "Automation Systems",
    desc: "Where Machines Think Smarter"
  }
];

export const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[600px] md:h-[800px] bg-black overflow-hidden group">
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10"></div>
          <img
            src={slide.image}
            alt={slide.subtitle}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-10000 group-hover:scale-110"
          />
        </div>
      ))}

      <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
        <div className="max-w-3xl">
          <h3 className="text-white text-base md:text-2xl font-bold mb-3 tracking-wider uppercase">
            {heroSlides[currentSlide].desc}
          </h3>
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold text-white mb-6 md:mb-8 leading-tight min-h-[1.2em]">
            {heroSlides[currentSlide].title} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              {heroSlides[currentSlide].subtitle}
            </span>
          </h1>

          <button className="bg-primary hover:bg-primary/90 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg flex items-center gap-2 transition-all transform hover:translate-x-1">
            Explore Solutions <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Slider Dots */}
      <div className="absolute bottom-10 left-0 right-0 z-30 flex justify-center gap-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? "bg-primary w-8" : "bg-white/50 hover:bg-white"
              }`}
          />
        ))}
      </div>
    </section>
  );
};
