import { TrendingUp, Users, Leaf, Accessibility } from "lucide-react";

const values = [
  {
    icon: TrendingUp,
    title: "Improving Efficiency",
    description: "From longer-lasting bearings to less intensive pneumatics, we work to make products work efficiently.",
  },
  {
    icon: Users,
    title: "Job Creation",
    description: "New Hexa's verticals create jobs in variety of fields, in India and abroad.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "We work with local manufacturers and distributors to support long-term economic growth.",
  },
  {
    icon: Accessibility,
    title: "Improve Product Access",
    description: "We work to make products more affordable so more people can benefit from it.",
  },
];

const ValuesSection = () => {
  return (
    <section className="py-20 md:py-32 bg-muted">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
            Our Values
          </h2>
          <p className="text-lg text-muted-foreground">
            We're ready to put our industry-tailored experience and solutions to work for you.
          </p>
          <p className="text-muted-foreground mt-4">
            Our core values are the cornerstone of who we are, what we stand for, and what we do.
            As we push ourselves to find new discoveries, create new products, and grow our businesses,
            we'll always be guided by these ideals.
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
