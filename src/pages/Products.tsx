import { ChevronRight } from "lucide-react";

const Products = () => {
  const categories = [
    "Bearings & Linear Motion",
    "Automation & Control",
    "Robotics",
    "Pneumatics",
    "Medical Equipment",
    "Industrial Tools"
  ];

  const brands = [
    { name: "TPI Bearings", logo: "TPI" }, // Placeholder for logos
    { name: "Hiwin", logo: "HIWIN" },
    { name: "Other Brand", logo: "BRAND" },
    { name: "Techno", logo: "TECHNO" },
    { name: "Gen3", logo: "GEN3" },
    { name: "Servos", logo: "SERVOS" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Page Title Banner */}
      <div className="bg-gray-100 py-12 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-foreground">Products & Brands</h1>
          <p className="text-gray-500 mt-2">Home / Products</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row gap-12">
        {/* Sidebar */}
        <aside className="w-full md:w-1/4">
          <div className="bg-secondary p-6 rounded-lg sticky top-24">
            <h3 className="text-xl font-bold mb-6 text-foreground">Categories</h3>
            <ul className="space-y-3">
              {categories.map((cat) => (
                <li key={cat}>
                  <a href="#" className="flex items-center justify-between text-gray-600 hover:text-primary font-medium transition-colors p-2 hover:bg-white rounded">
                    {cat}
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <div className="w-full md:w-3/4">
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Distributing Excellence</h2>
            <p className="text-gray-600 leading-relaxed">
              We partner with the world's leading manufacturers to bring you premium quality industrial components.
              Our extensive network ensures that you get genuine products with specific manufacturer warranties
              and technical support.
            </p>
          </div>

          <h3 className="text-xl font-bold mb-6 text-foreground border-b pb-2">Our Brands</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {brands.map((brand) => (
              <div key={brand.name} className="h-32 border border-border flex items-center justify-center p-4 hover:border-primary transition-colors bg-white hover:shadow-sm">
                <span className="text-xl font-bold text-gray-400">{brand.logo}</span>
              </div>
            ))}
          </div>

          {/* Solution Finder CTA */}
          <div className="mt-16 bg-hexa-dark text-white p-8 rounded-lg flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Need a specific solution?</h3>
              <p className="text-gray-300">Use our detailed product finder to locate exactly what you need.</p>
            </div>
            <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded font-bold transition-colors whitespace-nowrap">
              Find Solution
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
