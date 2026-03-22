import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="relative py-20 md:py-32 bg-hexa-dark overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--hexa-light)) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="relative container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Tagline */}
          <div>
            <p className="text-secondary-foreground/60 font-heading text-xl md:text-2xl font-light mb-2">
              GROWTH demands
            </p>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground leading-tight">
              the right partner
              <br />
              for every <span className="text-primary">BREAKTHROUGH</span>
            </h2>
          </div>

          {/* Right - CTA */}
          <div className="bg-secondary/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-secondary-foreground/10">
            <p className="text-secondary-foreground/80 text-lg mb-2">
              Don't know where to begin?
            </p>
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-secondary-foreground mb-4">
              Let our experts guide you.
            </h3>
            <p className="text-secondary-foreground/70 mb-8">
              Our team can match the right Hexa Technik products and technologies to solve your most complex engineering challenges — fast.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                Talk to an Expert
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10">
                <Download className="mr-2 h-4 w-4" />
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
