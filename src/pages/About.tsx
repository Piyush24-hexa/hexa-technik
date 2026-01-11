import { Cpu, Settings, Zap, Heart, Globe, Target } from "lucide-react";

const About = () => {
  const businesses = [
    { name: "Automation", icon: Cpu, desc: "State-of-the-art automation solutions for industry 4.0" },
    { name: "Bearings", icon: Settings, desc: "High precision bearings for all industrial applications" },
    { name: "Mechatronics", icon: Zap, desc: "Integrated mechanical and electronic systems" },
    { name: "Medical", icon: Heart, desc: "Advanced medical equipment components" },
    { name: "Pneumatics", icon: Globe, desc: "Efficient pneumatic control systems" },
    { name: "Robotics", icon: Target, desc: "Next-gen robotic solutions for manufacturing" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="relative h-[400px] w-full bg-black overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070"
          alt="About Hexa Technik"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Innovating an EXTRAORDINARY FUTURE</h1>
          <p className="text-xl text-gray-200">About Hexa Technik</p>
        </div>
      </div>

      {/* Our Businesses Grid */}
      <section className="py-20 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Our Businesses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {businesses.map((biz) => (
            <div key={biz.name} className="p-8 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow group">
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
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Who We Are</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Hexa Technik is a pioneer in industrial automation and component distribution.
            With over 30 years of experience, we have established ourselves as a trusted partner for industries
            ranging from automotive to medical technology.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our mission is to empower industries with cutting-edge technology and reliable components
            that drive efficiency and innovation.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
