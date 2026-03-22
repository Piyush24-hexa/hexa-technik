import { MapPin, Phone, Mail, MessageCircle, Clock, ArrowRight } from "lucide-react";

const WHATSAPP_NUMBER = "919225513779";
const PHONE = "+91 9225513779";
const EMAIL = "hexatechnik@gmail.com";
const FORM_SRC =
  "https://docs.google.com/forms/d/e/1FAIpQLScUMJchzuJivecPW7GWtgquiBBbMogXpDT7ZLb8QcsGb7eZ1w/viewform?embedded=true&hl=en";

const contactMethods = [
  {
    icon: Phone,
    label: "Call Us",
    value: PHONE,
    sub: "Mon–Sat, 9am–6pm",
    href: `tel:+919225513779`,
    color: "bg-blue-500",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat with us",
    sub: "Quick responses",
    href: `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Hexa%20Technik%2C%20I%20have%20an%20enquiry.`,
    color: "bg-green-500",
  },
  {
    icon: Mail,
    label: "Email",
    value: EMAIL,
    sub: "We reply within 24h",
    href: `mailto:${EMAIL}`,
    color: "bg-purple-500",
  },
];

const Contact = () => {
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
            Get In Touch
          </p>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
            Contact Us
          </h1>
          <p className="text-gray-300 text-lg max-w-md">
            Have a product inquiry or need a custom engineering solution? We're here for you.
          </p>
        </div>
      </div>

      {/* ── Contact Method Cards ── */}
      <div className="container mx-auto px-4 -mt-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {contactMethods.map((m) => (
            <a
              key={m.label}
              href={m.href}
              target={m.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-start gap-4 group border border-gray-100"
            >
              <div className={`${m.color} w-12 h-12 rounded-xl flex items-center justify-center text-white shrink-0`}>
                <m.icon className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">{m.label}</p>
                <p className="font-bold text-gray-900 truncate group-hover:text-primary transition-colors">{m.value}</p>
                <p className="text-xs text-gray-400 mt-0.5">{m.sub}</p>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0 mt-1" />
            </a>
          ))}
        </div>
      </div>

      {/* ── Main Content ── */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Form — 2/3 width */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-hexa-dark px-8 py-5 flex items-center justify-between">
                <div>
                  <h2 className="text-white font-bold text-xl">Enquiry Form</h2>
                  <p className="text-gray-400 text-sm">Fill in your details below</p>
                </div>
                <span className="text-xs bg-primary/20 text-primary font-semibold px-3 py-1 rounded-full">
                  Responds in 24h
                </span>
              </div>
              <iframe
                src={FORM_SRC}
                width="100%"
                height="980"
                style={{ border: "none", display: "block" }}
                title="Hexa Technik Enquiry Form"
              >
                Loading…
              </iframe>
              <div className="px-8 py-4 bg-gray-50 border-t border-gray-100 text-center">
                <p className="text-xs text-gray-400">
                  Form not loading?{" "}
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLScUMJchzuJivecPW7GWtgquiBBbMogXpDT7ZLb8QcsGb7eZ1w/viewform"
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary font-semibold hover:underline"
                  >
                    Open in new tab →
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Info Panel — 1/3 width */}
          <div className="space-y-6">

            {/* Locations */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h3 className="font-bold text-gray-900 mb-5 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" /> Our Locations
              </h3>
              <div className="space-y-4">
                {["Pune", "Mumbai"].map((city) => (
                  <div key={city} className="flex items-center gap-3 p-3 rounded-xl bg-gray-50">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 text-sm">{city}</p>
                      <p className="text-xs text-gray-400">Office coming soon</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" /> Business Hours
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Monday – Saturday</span>
                  <span className="font-semibold text-gray-800">9:00 AM – 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Sunday</span>
                  <span className="font-semibold text-red-400">Closed</span>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Hexa%20Technik%2C%20I%20want%20to%20inquire%20about%20your%20products.`}
              target="_blank"
              rel="noreferrer"
              className="block bg-gradient-to-br from-green-500 to-green-600 text-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 group"
            >
              <MessageCircle className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold mb-1">Chat on WhatsApp</h3>
              <p className="text-green-100 text-sm">Get an instant response from our team.</p>
              <div className="mt-4 flex items-center gap-2 font-semibold text-sm">
                Start Chat <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>

            {/* Quick Tip */}
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 text-sm text-gray-600">
              <p className="font-bold text-primary mb-1">💡 Pro Tip</p>
              Include your <strong>company name</strong> and <strong>product requirement</strong> in your message for the fastest response.
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default Contact;
