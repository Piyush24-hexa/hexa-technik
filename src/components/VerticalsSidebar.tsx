import { ChevronDown, Cog, Settings, HeartPulse, Wind, Bot, Sun, Car, Building2, Plane, Factory, Briefcase, Shield } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const verticals = [
  { icon: Sun, label: "Solar", href: "/solar", subItems: [] },
  { icon: Cog, label: "Automation", href: "/automation", subItems: ["Adtech", "Panasonic", "Fatek", "Weintek", "Syntec", "Shihlin Electric"] },
  { icon: Bot, label: "Robotics", href: "/robotics", subItems: ["HIWIN Robotics", "Techman", "Hi-More", "Fairino"] },
  { icon: Settings, label: "Mechatronics", href: "/mechatronics", subItems: ["HIWIN", "YYC Drives", "Won Linear", "LF-TW"] },
  { icon: Wind, label: "Pneumatics", href: "/pneumatics", subItems: ["Mindman", "Sungil"] },
  { icon: HeartPulse, label: "Medical", href: "/medical", subItems: ["TiMOTION"] },
  { icon: Car, label: "Automotive", href: "/automotive", subItems: [] },
  { icon: Building2, label: "Infrastructure", href: "/infrastructure", subItems: [] },
  { icon: Plane, label: "Aerospace", href: "/aerospace", subItems: [] },
  { icon: Factory, label: "Manufacturing", href: "/manufacturing", subItems: [] },
  { icon: Briefcase, label: "Business Solutions", href: "/business-solutions", subItems: [] },
  { icon: Shield, label: "Defence", href: "/defence", subItems: [] },
];

const VerticalsSidebar = () => {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  return (
    <div className="bg-background rounded-xl border border-border p-6 shadow-md">
      <h3 className="font-heading text-lg font-semibold text-foreground mb-4">
        Featured Verticals
      </h3>
      <div className="space-y-1">
        {verticals.map((vertical) => (
          <div key={vertical.label}>
            <button
              onClick={() => setExpandedItem(expandedItem === vertical.label ? null : vertical.label)}
              className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-muted transition-colors group"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <vertical.icon className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">{vertical.label}</span>
              </div>
              {vertical.subItems.length > 0 && (
                <ChevronDown
                  className={`h-4 w-4 text-muted-foreground transition-transform ${expandedItem === vertical.label ? 'rotate-180' : ''}`}
                />
              )}
            </button>
            {expandedItem === vertical.label && vertical.subItems.length > 0 && (
              <div className="ml-11 mt-1 space-y-1 animate-fade-in">
                {vertical.subItems.map((item) => (
                  <Link
                    key={item}
                    to="#"
                    className="block py-2 px-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalsSidebar;
