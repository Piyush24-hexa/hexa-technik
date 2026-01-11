interface PageBannerProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
}

const PageBanner = ({ title, subtitle, backgroundImage }: PageBannerProps) => {
  return (
    <section className="relative h-[50vh] min-h-[400px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 luna-hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative luna-container pt-20">
        <div className="max-w-3xl animate-slide-up">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground leading-tight">
            {title}
          </h1>
          <div className="w-16 h-1 bg-primary mt-4" />
          {subtitle && (
            <p className="text-secondary-foreground/80 text-lg md:text-xl mt-6 max-w-2xl">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageBanner;
