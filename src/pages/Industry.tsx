import { Car, Building2, Stethoscope, Briefcase, Plane, Factory } from "lucide-react";

const Industry = () => {
    const industries = [
        { name: "Automotive", icon: Car },
        { name: "Infrastructure", icon: Building2 },
        { name: "Medical", icon: Stethoscope },
        { name: "Business Solutions", icon: Briefcase },
        { name: "Aerospace", icon: Plane },
        { name: "Manufacturing", icon: Factory },
    ];
    return (
        <div className="min-h-screen bg-white">
            <div className="bg-hexa-dark text-white py-16">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold mb-4">Industries Served</h1>
                    <p className="text-xl text-gray-300">Powering growth across diverse sectors.</p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {industries.map((ind) => (
                        <div key={ind.name} className="flex flex-col items-center p-8 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
                            <ind.icon className="w-16 h-16 text-primary mb-4" />
                            <h3 className="text-2xl font-bold text-gray-800">{ind.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default Industry;
