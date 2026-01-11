import { ChevronDown } from "lucide-react";
import { Cog, Circle, Settings, HeartPulse, Wind, Bot } from "lucide-react";
import heroImage from "@/assets/hero-industrial.jpg";

const services = [
  { icon: Cog, label: "Automation" },
  { icon: Circle, label: "Bearings" },
  { icon: Settings, label: "Mechatronics" },
  { icon: HeartPulse, label: "Medical" },
  { icon: Wind, label: "Pneumatics" },
  { icon: Bot, label: "Robotics" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Industrial automation facility"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 luna-hero-overlay" />
      </div>

      {/* Hero Content */}
      <div className="relative flex-1 flex flex-col justify-center luna-container pt-20">
        <div className="max-w-3xl animate-slide-up">
          <p className="text-secondary-foreground/80 text-lg md:text-xl font-light mb-4">
            Innovating an
          </p>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-secondary-foreground leading-tight mb-8">
            EXTRAORDINARY
            <br />
            <span className="text-primary">FUTURE</span>
          </h1>
          <a
            href="#about"
            className="inline-flex items-center gap-2 text-secondary-foreground hover:text-primary transition-colors group"
          >
            <span className="text-lg font-medium">Explore</span>
            <ChevronDown className="h-5 w-5 animate-bounce" />
          </a>
        </div>
      </div>

      {/* Service Categories */}
      <div className="relative z-10 w-full">
        <div className="luna-container">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-4 pb-8 md:pb-16">
            {services.map((service, index) => (
              <a
                key={service.label}
                href="#"
                className="group flex flex-col items-center gap-3 p-4 md:p-6 rounded-xl bg-secondary/20 backdrop-blur-sm border border-secondary-foreground/10 hover:bg-primary/20 hover:border-primary/30 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <service.icon className="h-8 w-8 md:h-12 md:w-12 text-secondary-foreground group-hover:text-primary transition-colors" />
                <span className="text-xs md:text-sm font-medium text-secondary-foreground group-hover:text-primary transition-colors text-center">
                  {service.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
