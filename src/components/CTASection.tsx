import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="relative py-20 md:py-32 luna-section-dark overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" 
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--luna-white)) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="relative luna-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Tagline */}
          <div>
            <p className="text-secondary-foreground/60 font-heading text-xl md:text-2xl font-light mb-2">
              SUCCESS requires
            </p>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground leading-tight">
              deep understanding
              <br />
              of the <span className="text-primary">CHALLENGE</span>
            </h2>
          </div>

          {/* Right - CTA */}
          <div className="bg-secondary/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-secondary-foreground/10">
            <p className="text-secondary-foreground/80 text-lg mb-2">
              Not sure where to start?
            </p>
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-secondary-foreground mb-4">
              Try our Solution Finder.
            </h3>
            <p className="text-secondary-foreground/70 mb-8">
              Our Solution Finder can find Luna brands and products to help your company solve its challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10">
                <Download className="mr-2 h-4 w-4" />
                Download Catalogue
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
