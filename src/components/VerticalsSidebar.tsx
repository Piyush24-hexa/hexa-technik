import { ChevronDown, Cog, Circle, Settings, HeartPulse, Wind, Bot } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const verticals = [
  { 
    icon: Cog, 
    label: "Automation", 
    href: "/automation",
    subItems: ["Adtech", "Panasonic", "Fatek", "Weintek", "Syntec", "Shihlin Electric"]
  },
  { 
    icon: Circle, 
    label: "Bearings", 
    href: "/bearings",
    subItems: ["KHS-LG", "TPI", "Haion"]
  },
  { 
    icon: Settings, 
    label: "Mechatronics", 
    href: "/mechatronics",
    subItems: ["HIWIN", "YYC Drives", "Won Linear", "LF-TW"]
  },
  { 
    icon: HeartPulse, 
    label: "Medical", 
    href: "/medical",
    subItems: ["TiMOTION"]
  },
  { 
    icon: Wind, 
    label: "Pneumatics", 
    href: "/pneumatics",
    subItems: ["Mindman", "Sungil"]
  },
  { 
    icon: Bot, 
    label: "Robotics", 
    href: "/robotics",
    subItems: ["HIWIN Robotics", "Techman", "Hi-More", "Fairino"]
  },
];

const VerticalsSidebar = () => {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  return (
    <div className="bg-background rounded-xl border border-border p-6 luna-card-shadow">
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
              <ChevronDown 
                className={`h-4 w-4 text-muted-foreground transition-transform ${
                  expandedItem === vertical.label ? 'rotate-180' : ''
                }`} 
              />
            </button>
            {expandedItem === vertical.label && (
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
