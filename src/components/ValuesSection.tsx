import { TrendingUp, ShieldCheck, Leaf, Rocket } from "lucide-react";

const values = [
  {
    icon: Rocket,
    title: "Technology-First Mindset",
    description: "We invest in the latest engineering breakthroughs so our clients always have access to the most advanced, reliable components available.",
  },
  {
    icon: TrendingUp,
    title: "Empowering Local Industries",
    description: "By partnering with Indian manufacturers and engineers, we help build homegrown capabilities that reduce dependency and increase resilience.",
  },
  {
    icon: Leaf,
    title: "Responsible Engineering",
    description: "Every solution we offer is evaluated for its environmental footprint. We champion green manufacturing and energy-efficient systems.",
  },
  {
    icon: ShieldCheck,
    title: "End-to-End Reliability",
    description: "From selection to after-sales support, we stand behind every product we supply — ensuring zero downtime for our customers.",
  },
];

const ValuesSection = () => {
  return (
    <section className="py-20 md:py-32 bg-muted">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
            The Principles That Power Us
          </h2>
          <p className="text-lg text-muted-foreground">
            At Hexa Technik, we don't just deliver components — we deliver confidence.
          </p>
          <p className="text-muted-foreground mt-4">
            These aren't just words on a wall. They're the commitments we make to every engineer,
            every business, and every community we serve. They drive the decisions we make every single day.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="bg-background rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <value.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
