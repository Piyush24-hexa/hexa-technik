import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import { Button } from "@/components/ui/button";
import { PenLine, ArrowRight } from "lucide-react";
import heroCareers from "@/assets/hero-careers.jpg";

const Careers = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageBanner
          title="Join Us"
          backgroundImage={heroCareers}
        />

        <section className="py-16 md:py-24 bg-background">
          <div className="luna-container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-8">
                  There's never been a more exciting time to join us.
                </h2>
              </div>

              {/* Right Content */}
              <div>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  People know Luna for the quality of our products, but we know that it is the passion 
                  and character of our people that make our company a global leader. With our diverse 
                  talent and deep pride in the Luna family of brands, we drive innovation and create value.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  We work hard together. We grow together. <strong className="text-foreground">We are one team.</strong>
                </p>
                <Button size="lg" className="group">
                  <PenLine className="mr-2 h-5 w-5" />
                  Apply Now
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="luna-container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Join Luna?
              </h2>
              <p className="text-muted-foreground text-lg">
                Be part of India's leading industrial automation company
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Innovation", description: "Work with cutting-edge automation technologies and international brands." },
                { title: "Growth", description: "Continuous learning opportunities and clear career progression paths." },
                { title: "Impact", description: "Make a real difference in India's industrial transformation." },
                { title: "Team Spirit", description: "Join a collaborative team of 150+ passionate professionals." },
                { title: "Diversity", description: "Work across multiple verticals from robotics to medical equipment." },
                { title: "Legacy", description: "Be part of a company with 30+ years of industry excellence." },
              ].map((item, index) => (
                <div
                  key={item.title}
                  className="bg-background rounded-2xl p-8 luna-card-shadow"
                >
                  <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
