import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail } from "lucide-react";
import heroContact from "@/assets/hero-contact.jpg";

const locations = [
  {
    type: "HEAD QUARTER",
    name: "Navi Mumbai",
    address: "W200, TTC INDUSTRIAL EST., Koparkhairane, Thane Belapur Road, Navi Mumbai - 400709",
    phone: "022 - 61786100/110",
    email: "sales@luna.co.in",
  },
  {
    type: "FACTORY",
    name: "Mumbai",
    address: "A-652, TTC Industry Road, MIDC Industrial Area, Navi Mumbai, Thane, Maharashtra, 400701",
    phone: "8591978099",
    email: "vinodkumar@luna.co.in",
  },
  {
    type: "FACTORY",
    name: "Navi Mumbai",
    address: "W205, TTC INDUSTRIAL EST., Koparkhairane, Thane Belapur Road, Navi Mumbai - 400709",
    phone: "8591974709",
    email: "sales@luna.co.in",
  },
  {
    type: "FACTORY",
    name: "Pune",
    address: "Plot No. PAP-G-4, Chakan Industrial Area, Khed Phase-11, Playtor Chakan Annex, Pune - 410501",
    phone: "9137126439",
    email: "production.p@luna.co.in",
  },
  {
    type: "MOTHER WAREHOUSE",
    name: "Bhiwandi, Thane",
    address: "Ground Floor, 06,07,08 E-8, Parasnath Complex, Village Owali, Bhiwandi, Thane - 421302",
    phone: "8591975023",
    email: "operations@luna.co.in",
  },
  {
    type: "REGIONAL WAREHOUSE",
    name: "Ahmedabad",
    address: "86, Barcelona Ind. Estate, Odhav Ring Road Circle, Odhav, Ahmedabad - 382415",
    phone: "8591975023",
    email: "gujaratdispatch@luna.co.in",
  },
  {
    type: "REGIONAL WAREHOUSE",
    name: "Noida",
    address: "Industrial Property Bearing, B-51, Sector-57, Noida, Gautam Buddha Nagar, Uttar Pradesh - 201301",
    phone: "8591975040",
    email: "northdispatch@luna.co.in",
  },
];

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageBanner
          title="Contact Us"
          backgroundImage={heroContact}
        />

        <section className="py-16 md:py-24 bg-background">
          <div className="luna-container">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-2">
                  Corporate
                </h2>
                <h3 className="text-xl text-foreground mb-2">Have a question?</h3>
                <p className="text-muted-foreground mb-8">
                  Please enter the following details, and we'll get back to you soon.
                  <br />
                  <span className="text-sm">All fields are required.</span>
                </p>

                <form className="space-y-4">
                  <Input placeholder="NAME" className="h-12" />
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input placeholder="MOBILE NO." className="h-12" />
                    <Input type="email" placeholder="EMAIL" className="h-12" />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input placeholder="COMPANY NAME" className="h-12" />
                    <Input placeholder="CITY" className="h-12" />
                  </div>
                  <Input placeholder="ADDRESS" className="h-12" />
                  <Textarea placeholder="REQUIREMENT" className="min-h-[120px]" />
                  <Button size="lg" className="w-full sm:w-auto">
                    Submit
                  </Button>
                </form>
              </div>

              {/* Locations */}
              <div className="space-y-6">
                {locations.slice(0, 4).map((location, index) => (
                  <div key={index} className="border-l-4 border-primary pl-6">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                      {location.type}
                    </span>
                    <h3 className="font-heading text-lg font-bold text-primary mt-1">
                      {location.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
                      {location.address}
                    </p>
                    <div className="flex flex-col gap-1 mt-3 text-sm">
                      <a href={`tel:${location.phone}`} className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
                        <Phone className="h-4 w-4" />
                        <span><strong>Contact:</strong> {location.phone}</span>
                      </a>
                      <a href={`mailto:${location.email}`} className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
                        <Mail className="h-4 w-4" />
                        <span><strong>Email:</strong> {location.email}</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* More Locations */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="luna-container">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-8">
              Warehouses & Regional Offices
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {locations.slice(4).map((location, index) => (
                <div key={index} className="bg-background rounded-xl p-6 luna-card-shadow">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                    {location.type}
                  </span>
                  <h3 className="font-heading text-lg font-bold text-foreground mt-1">
                    {location.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
                    {location.address}
                  </p>
                  <div className="flex flex-col gap-1 mt-3 text-sm">
                    <a href={`tel:${location.phone}`} className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                      <Phone className="h-3 w-3" />
                      <span>{location.phone}</span>
                    </a>
                    <a href={`mailto:${location.email}`} className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                      <Mail className="h-3 w-3" />
                      <span>{location.email}</span>
                    </a>
                  </div>
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

export default Contact;
