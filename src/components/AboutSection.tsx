const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="animate-slide-up">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
              We're making essential innovations the world needs today.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              From Robotics to Medical Equipments, to deliver efficient and faster systems,
              we use science and innovation to make so many of the things that you use everyday possible.
              At Hexa Technik, we're working to make the world a <strong className="text-foreground">Safer</strong>,
              <strong className="text-foreground"> Healthier</strong> and <strong className="text-foreground">Better</strong> place to live.
            </p>
          </div>

          {/* Right - Stats */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="text-center p-12 bg-muted rounded-3xl shadow-xl">
                <span className="font-heading text-7xl md:text-8xl font-bold text-primary">
                  30<sup className="text-4xl">+</sup>
                </span>
                <p className="font-heading text-xl md:text-2xl font-semibold text-foreground mt-4">
                  Years
                </p>
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-muted-foreground">
                    Hexa Technik has been recognized as the industry's
                  </p>
                  <p className="font-heading text-xl font-bold text-foreground mt-2">
                    PROBLEM SOLVER
                  </p>
                </div>
              </div>
              {/* Decorative element */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-2xl -z-10" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/20 rounded-xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
