import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import VerticalsSidebar from "@/components/VerticalsSidebar";
import heroProducts from "@/assets/hero-products.jpg";

const industryCategories = [
  {
    category: "Solar",
    brands: [],
  },
  {
    category: "Automation",
    brands: ["Adtech", "Panasonic", "FATEK", "Weintek", "Syntec", "ZD Motor", "Shihlin Electric", "Flexem"],
  },
  {
    category: "Robotics",
    brands: ["HIWIN Robotics", "Techman", "Hi-More", "Fairino"],
  },
  {
    category: "Mechatronics",
    brands: ["HIWIN", "YYC Drives", "Won Linear", "LF-TW", "CCM", "RayTools", "Raycus"],
  },
  {
    category: "Pneumatics",
    brands: ["Mindman", "Sungil"],
  },
  {
    category: "Medical",
    brands: ["TiMOTION"],
  },
];

const Industries = () => {
  return (
    <div className="min-h-screen bg-[#f8f9fc]">
      <Header />
      <main>
        <PageBanner
          title="All Industry Verticals"
          backgroundImage={heroProducts}
        />

        <section className="py-16 md:py-24 bg-transparent">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-[300px_1fr] gap-8">
              {/* Sidebar */}
              <aside className="hidden lg:block">
                <div className="sticky top-24">
                  <VerticalsSidebar />
                </div>
              </aside>

              {/* Main Content */}
              <div className="space-y-12">
                {industryCategories.map((industry, index) => (
                  <div key={industry.category}>
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="font-heading text-2xl font-bold text-foreground">
                        {industry.category}
                      </h2>
                      <div className="h-px flex-1 bg-border ml-6" />
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {industry.brands.map((brand) => (
                        <a
                          key={brand}
                          href="#"
                          className="group bg-white border border-gray-100 shadow-sm rounded-2xl p-6 flex items-center justify-center h-24 hover:border-primary hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >
                          <span className="font-heading font-semibold text-center text-foreground group-hover:text-primary transition-colors">
                            {brand}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Industries;
