import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import VerticalsSidebar from "@/components/VerticalsSidebar";
import heroProducts from "@/assets/hero-products.jpg";

const automationBrands = [
  { name: "Adtech", products: ["Industrial CNC Control System", "Motion Control Card", "Servo Drive & Motor"] },
  { name: "Panasonic", products: ["HMI", "PLC", "Servo Motor", "Industrial Color/Mark Sensor"] },
  { name: "FATEK", products: ["HMI P2 Series", "HMI P5 Series", "PLC FBs Series", "PLC B1/B1z/HB1 Series"] },
  { name: "Weintek", products: ["iE Series", "iP Series", "CMT Series", "iR Series", "XE Series", "mTV Series"] },
  { name: "Flexem", products: ["HMI", "Servo", "PLC", "Gateway"] },
  { name: "Syntec", products: ["CNC Controllers", "Servo Drives"] },
  { name: "Shihlin Electric", products: ["Variable Frequency Drives", "PLC", "HMI"] },
  { name: "ZD Motor", products: ["AC Gear Motors", "DC Motors", "Brushless Motors"] },
];

const Automation = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageBanner
          title="Automation"
          subtitle="Hexa Technik carries more automation and control brand names than any other distributor in India. Hexa Technik is a high-service level authorised distributor of industrial automation products, motors, drives, controllers, and HMI products with more than 40 sales offices serving in India."
          backgroundImage={heroProducts}
        />

        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-[300px_1fr] gap-8">
              {/* Sidebar */}
              <aside className="hidden lg:block">
                <div className="sticky top-24">
                  <VerticalsSidebar />
                </div>
              </aside>

              {/* Main Content */}
              <div>
                <div className="flex items-center justify-between mb-8">
                  <h2 className="font-heading text-2xl font-bold text-foreground">
                    Featured Brands
                  </h2>
                  <div className="h-px flex-1 bg-border ml-6" />
                </div>

                {/* Brands Grid */}
                <div className="grid sm:grid-cols-2 gap-6">
                  {automationBrands.map((brand, index) => (
                    <div
                      key={brand.name}
                      className="bg-background border border-border rounded-xl p-6 hover:border-primary hover:shadow-lg transition-all duration-300"
                    >
                      <h3 className="font-heading text-xl font-bold text-primary mb-4">
                        {brand.name}
                      </h3>
                      <ul className="space-y-2">
                        {brand.products.map((product) => (
                          <li key={product}>
                            <a
                              href="#"
                              className="text-muted-foreground hover:text-primary transition-colors text-sm"
                            >
                              {product}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Automation;
