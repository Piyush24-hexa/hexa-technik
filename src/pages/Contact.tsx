import { MapPin, Phone, Mail, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="relative h-[300px] w-full bg-blue-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        {/* Placeholder map bg */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-cover bg-center"></div>
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Reach Us</h1>
          <p className="text-xl text-blue-100">We'd love to hear from you</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-foreground">Contact Hexa Technik</h2>
            <form onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const data = Object.fromEntries(formData);
              console.log("Form submitted:", data);
              toast.success("Message sent successfully (Demo)", {
                description: "We'll get back to you shortly."
              });
              e.currentTarget.reset();
            }} className="space-y-6 bg-secondary p-8 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input name="name" required type="text" className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="Your Name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Mobile No.</label>
                  <input name="mobile" required type="tel" className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="Your Number" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input name="email" required type="email" className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="your@email.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea name="message" required rows={4} className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="How can we help?"></textarea>
              </div>
              <button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 rounded transition-colors flex items-center justify-center gap-2">
                <Send className="w-5 h-5" /> Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold mb-8 text-foreground">Our Locations</h2>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Head Quarter (Navi Mumbai)</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Unit No. 123, Hexa Tower,<br />
                    TTC Industrial Area, MIDC,<br />
                    Navi Mumbai - 400705, India
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-luna-red">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Factory (Mumbai)</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Plot No. 45, Industrial Estate,<br />
                    Andheri East,<br />
                    Mumbai - 400093, India
                  </p>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-8 mt-8">
                <div className="flex flex-col gap-4">
                  <a href="tel:+912212345678" className="flex items-center gap-3 text-gray-600 hover:text-primary transition-colors">
                    <Phone className="w-5 h-5 text-primary" />
                    +91 22 1234 5678
                  </a>
                  <a href="mailto:sales@hexatechnik.com" className="flex items-center gap-3 text-gray-600 hover:text-primary transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                    sales@hexatechnik.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
