interface PageBannerProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
}

const PageBanner = ({ title, subtitle, backgroundImage }: PageBannerProps) => {
  return (
    <section className="relative bg-hexa-dark text-white overflow-hidden">
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
          {subtitle || "Hexa Technik"}
        </p>
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
          {title}
        </h1>
      </div>
    </section>
  );
};

export default PageBanner;
