import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import VerticalsSidebar from "@/components/VerticalsSidebar";
import heroProducts from "@/assets/hero-products.jpg";

const brands = [
  { name: "HIWIN", category: "Mechatronics", color: "#E31E24" },
  { name: "KHS-LG", category: "Bearings", color: "#DAA520" },
  { name: "Panasonic", category: "Automation", color: "#0068B7" },
  { name: "Mindman", category: "Pneumatics", color: "#00A651" },
  { name: "TPI", category: "Bearings", color: "#E31E24" },
  { name: "TiMOTION", category: "Medical", color: "#00AEEF" },
  { name: "Haion", category: "Bearings", color: "#F7941D" },
  { name: "YYC", category: "Mechatronics", color: "#1C1C1C" },
  { name: "ZD Motor", category: "Automation", color: "#0054A6" },
  { name: "Syntec", category: "Automation", color: "#E31E24" },
  { name: "Shihlin Electric", category: "Automation", color: "#00529B" },
  { name: "FATEK", category: "Automation", color: "#003366" },
  { name: "Flexem", category: "Automation", color: "#0066CC" },
  { name: "Weintek", category: "Automation", color: "#00A651" },
  { name: "Sungil", category: "Pneumatics", color: "#E31E24" },
  { name: "Techman", category: "Robotics", color: "#00A651" },
  { name: "HIWIN Robotics", category: "Robotics", color: "#E31E24" },
  { name: "Hi-More", category: "Robotics", color: "#F7941D" },
  { name: "CCM", category: "Mechatronics", color: "#E31E24" },
  { name: "Adtech", category: "Automation", color: "#0066CC" },
  { name: "Won Linear", category: "Mechatronics", color: "#003366" },
  { name: "JSS", category: "Automation", color: "#E31E24" },
  { name: "RayTools", category: "Mechatronics", color: "#E31E24" },
  { name: "Raycus", category: "Mechatronics", color: "#00AEEF" },
];

const Products = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageBanner
          title="All Brands"
          backgroundImage={heroProducts}
        />

        <section className="py-16 md:py-24 bg-background">
          <div className="luna-container">
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
                    All Brands
                  </h2>
                  <div className="h-px flex-1 bg-border ml-6" />
                </div>

                {/* Brands Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {brands.map((brand, index) => (
                    <a
                      key={brand.name}
                      href="#"
                      className="group bg-background border border-border rounded-xl p-6 flex flex-col items-center justify-center h-32 hover:border-primary hover:luna-elevated-shadow transition-all duration-300"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <span 
                        className="font-heading font-bold text-lg text-center group-hover:text-primary transition-colors"
                        style={{ color: brand.color }}
                      >
                        {brand.name}
                      </span>
                      <span className="text-xs text-muted-foreground mt-2">
                        {brand.category}
                      </span>
                    </a>
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

export default Products;
