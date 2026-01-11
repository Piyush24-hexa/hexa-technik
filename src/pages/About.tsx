import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import heroAbout from "@/assets/hero-about.jpg";
import { Cog, Circle, Settings, HeartPulse, Wind, Bot } from "lucide-react";

const businesses = [
  {
    icon: Cog,
    title: "Automation",
    description: "Industry leading technologies to enable smaller, smarter and faster companies transform their products and bring high-quality solutions to their customers.",
  },
  {
    icon: Circle,
    title: "Bearings",
    description: "High-performance Bearings, Spindle Bearings and Clutch Bearings to enable material systems solutions for aerospace, automotive and other demanding environments.",
  },
  {
    icon: Settings,
    title: "Mechatronics",
    description: "Durable solutions for LM Rails, Cross Rollers, Couplings, Racks, Pinions, and reliable solutions that support a growing company.",
  },
  {
    icon: HeartPulse,
    title: "Medical",
    description: "Focusing on Plug and Play products of critical parts for the Medical Industry.",
  },
  {
    icon: Wind,
    title: "Pneumatics",
    description: "Performance solutions that keep pneumatic processes safe and operations run smoothly.",
  },
  {
    icon: Bot,
    title: "Robotics",
    description: "Providing Innovative and Energy-Efficient robots serving the injection moulding and automation markets.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageBanner
          title="About Us"
          backgroundImage={heroAbout}
        />

        {/* Video Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="luna-container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Video Placeholder */}
              <div className="aspect-video bg-muted rounded-2xl overflow-hidden luna-elevated-shadow">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/IsgwNNL4ML4"
                  title="Luna Technologies"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Content */}
              <div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Taking functionality and productivity to next level
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Luna is leading supplier of Industrial Components, Bearings, Pneumatics, Motors, 
                  Controllers and Drives Indian Industries. We're focused on driving ongoing Safety, 
                  Innovation, Efficiency, Reliability and Productivity.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  With best-in-class manufacturing facilities, unmatched Digital Expertise, always-on 
                  global services delivery and unrivaled product breadth and performance. Luna is the 
                  industry's one-stop shop.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Today, we meet the total lifecycle needs of the entire company, from New Panels to 
                  Robots, Service and Repair adding value at every touch point to help customers realize 
                  the most value from their investment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Businesses */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="luna-container">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Businesses
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {businesses.map((business, index) => (
                <div
                  key={business.title}
                  className="bg-background rounded-2xl p-8 luna-card-shadow hover:luna-elevated-shadow transition-all duration-300 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <business.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                    {business.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {business.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tagline */}
        <section className="py-20 luna-section-dark text-center">
          <div className="luna-container">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-secondary-foreground">
              Precision. Performance. <span className="text-primary">Pride.</span>
            </h2>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
