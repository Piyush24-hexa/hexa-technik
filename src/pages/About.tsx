import { Cpu, Code, Zap, Heart, Globe, Target } from "lucide-react";

const About = () => {
  const businesses = [
    { name: "Automation", icon: Cpu, desc: "Smart automation systems built for Industry 4.0 — from PLCs and SCADA to fully integrated production lines." },
    { name: "Software", icon: Code, desc: "Custom industrial software solutions — from IoT connectivity and cloud dashboards to SCADA systems and ERP integrations." },
    { name: "Mechatronics", icon: Zap, desc: "Seamlessly integrated mechanical, electronic, and software systems for modern machine builders." },
    { name: "Medical", icon: Heart, desc: "Reliable, compliant components for medical device OEMs — where precision saves lives." },
    { name: "Pneumatics", icon: Globe, desc: "Compact, efficient pneumatic control solutions for clean, quiet, and high-speed industrial setups." },
    { name: "Robotics", icon: Target, desc: "Collaborative and industrial robots that boost throughput, reduce errors, and future-proof your facility." },
  ];

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
            The Story Behind Hexa Technik
          </p>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
            Built on Expertise.<br />Driven by Purpose.
          </h1>
        </div>
      </div>

      {/* Our Businesses Grid */}
      <section id="what-we-do" className="py-20 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-foreground">What We Do</h2>
        <p className="text-center text-gray-500 max-w-2xl mx-auto mb-12">
          Hexa Technik operates across six specialized verticals, each backed by deep technical expertise and a curated portfolio of global technology brands.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {businesses.map((biz) => (
            <div key={biz.name} className="p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <biz.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">{biz.name}</h3>
              <p className="text-gray-600">{biz.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Content Section */}
      <section id="our-story" className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Our Story</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Hexa Technik was founded with one clear goal: to bridge the gap between world-class industrial technology
            and the businesses that need it most. In a short time, we've rapidly evolved from a focused components
            distributor into a comprehensive engineering solutions partner — earning the trust of many companies across India.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            We believe great engineering starts with the right building blocks. That's why we rigorously vet every
            brand in our portfolio and stand behind every product we supply, from first inquiry to final installation.
            As a young, dynamic company, we bring fresh energy, deep expertise, and an unwavering commitment to
            excellence to every single engagement.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
