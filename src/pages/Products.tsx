import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();

  const categories = [
    "Automation & Control",
    "Robotics",
    "Pneumatics",
    "Medical Equipment",
    "Industrial Tools",
    "Software",
  ];

  const solutions = [
    { name: "PLC", desc: "Programmable Logic Controllers for industrial automation" },
    { name: "HMI", desc: "Human Machine Interfaces for intuitive operator control" },
    { name: "Servo", desc: "High-precision servo motors and drives" },
    { name: "Electric Actuator", desc: "Linear and rotary electric actuators for precise motion" },
    { name: "Connectivity Solutions", desc: "Industrial networking and IoT connectivity hardware" },
    { name: "Ball Screw", desc: "High-efficiency ball screw assemblies for linear motion" },
    { name: "Linear Guideway", desc: "Precision linear guideways and rail systems" },
    { name: "Variable Frequency Drive", desc: "VFDs for speed and torque control of AC motors" },
    { name: "Robots", desc: "Collaborative and industrial robotic systems" },
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
            Home / Products
          </p>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
            Products & Solutions
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Distributing premium quality industrial components and seamless integration services.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row gap-12">
        {/* Sidebar */}
        <aside className="w-full md:w-1/4">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-24">
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

          <h3 className="text-xl font-bold mb-6 text-foreground border-b border-gray-200 pb-2">Our Solutions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {solutions.map((s) => (
              <div
                key={s.name}
                className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-primary hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {s.name}
                </h4>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Solution Finder CTA */}
          <div className="mt-16 bg-hexa-dark text-white p-8 rounded-lg flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Need a specific solution?</h3>
              <p className="text-gray-300">Talk to our engineers — we'll find exactly what you need.</p>
            </div>
            <button
              onClick={() => navigate("/contact")}
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded font-bold transition-colors whitespace-nowrap"
            >
              Find Solution
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
