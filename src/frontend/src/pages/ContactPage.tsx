import { MapPin, MessageCircle } from "lucide-react";
import { motion } from "motion/react";
import { SiInstagram, SiLinkedin, SiWhatsapp } from "react-icons/si";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const offices = [
  {
    name: "Kurla West",
    address: "Phoenix Paragon Plaza",
    city: "Mumbai",
    mapLink:
      "https://www.google.com/maps/search/Phoenix+Paragon+Plaza+Kurla+West+Mumbai",
  },
  {
    name: "Ghatkopar West",
    address: "Karewala Building",
    city: "Mumbai",
    mapLink:
      "https://www.google.com/maps/search/Karewala+Building+Ghatkopar+West+Mumbai",
  },
];

export default function ContactPage() {
  return (
    <main className="pt-20">
      {/* Header */}
      <section className="section-gradient py-16">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-teal-light font-semibold text-sm uppercase tracking-widest font-body">
              Get in Touch
            </span>
            <h1 className="font-display text-3xl md:text-5xl font-extrabold text-white mt-2 mb-4">
              We're Here to Support Your Journey
            </h1>
            <p className="text-white/70 font-body text-lg max-w-xl mx-auto">
              Reach out to our team any time. We're committed to helping every
              driver succeed on Mumbai's roads.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-4xl mx-auto"
          >
            {/* Office Locations */}
            <motion.div variants={fadeInUp} className="space-y-6">
              <div>
                <span className="text-teal font-semibold text-sm uppercase tracking-widest font-body">
                  Visit Us
                </span>
                <h2 className="font-display text-2xl md:text-3xl font-extrabold text-navy mt-2">
                  Our Mumbai Offices
                </h2>
              </div>

              {offices.map((office) => (
                <a
                  key={office.name}
                  href={office.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 bg-card border border-border rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow group"
                >
                  <div className="w-12 h-12 bg-teal/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-teal/20 transition-colors">
                    <MapPin size={24} className="text-teal" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-navy text-xl">
                      {office.name}
                    </h3>
                    <p className="text-muted-foreground text-sm font-body mt-1">
                      {office.address}
                    </p>
                    <p className="text-muted-foreground text-sm font-body">
                      {office.city}
                    </p>
                    <span className="text-teal text-xs font-semibold font-body mt-2 inline-block">
                      View on Google Maps →
                    </span>
                  </div>
                </a>
              ))}
            </motion.div>

            {/* Contact Methods */}
            <motion.div variants={fadeInUp} className="space-y-6">
              <div>
                <span className="text-teal font-semibold text-sm uppercase tracking-widest font-body">
                  Contact Us
                </span>
                <h2 className="font-display text-2xl md:text-3xl font-extrabold text-navy mt-2">
                  Reach Our Team
                </h2>
              </div>

              {/* WhatsApp — Primary */}
              <a
                href="https://wa.me/919082274858"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-whatsapp/10 border border-whatsapp/20 rounded-2xl p-6 hover:bg-whatsapp/15 transition-colors group"
              >
                <div className="w-12 h-12 bg-whatsapp rounded-xl flex items-center justify-center flex-shrink-0">
                  <SiWhatsapp size={24} className="text-white" />
                </div>
                <div>
                  <p className="font-display font-bold text-navy text-lg">
                    WhatsApp
                  </p>
                  <p className="text-muted-foreground text-sm font-body">
                    Primary contact — fastest response
                  </p>
                  <span className="text-whatsapp text-xs font-semibold font-body mt-1 inline-block">
                    +91 90822 74858
                  </span>
                </div>
              </a>

              {/* Social Links */}
              <div className="bg-card border border-border rounded-2xl p-6 shadow-card space-y-4">
                <h3 className="font-display font-bold text-navy text-lg">
                  Follow Us
                </h3>

                <div className="space-y-3">
                  <a
                    href="https://www.instagram.com/nationalmobility?igsh=MnRmdmFoMmd5bWM3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-navy transition-colors group"
                  >
                    <div className="w-10 h-10 bg-pink-500/10 rounded-xl flex items-center justify-center group-hover:bg-pink-500/20 transition-colors">
                      <SiInstagram size={20} className="text-pink-500" />
                    </div>
                    <div>
                      <p className="font-semibold font-body text-navy text-sm">
                        Instagram
                      </p>
                      <p className="text-xs font-body">@nationalmobility</p>
                    </div>
                  </a>

                  <a
                    href="https://linkedin.com/company/nationalmobility"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-navy transition-colors group"
                  >
                    <div className="w-10 h-10 bg-blue-600/10 rounded-xl flex items-center justify-center group-hover:bg-blue-600/20 transition-colors">
                      <SiLinkedin size={20} className="text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold font-body text-navy text-sm">
                        LinkedIn
                      </p>
                      <p className="text-xs font-body">National Mobility</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Quick CTA */}
              <div className="bg-navy rounded-2xl p-6 text-center space-y-3">
                <MessageCircle size={28} className="text-teal mx-auto" />
                <p className="font-display font-bold text-white text-lg">
                  Ready to start earning?
                </p>
                <a
                  href="https://wa.me/919082274858"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-teal inline-flex items-center gap-2 shadow-teal text-sm"
                >
                  <MessageCircle size={16} />
                  Chat on WhatsApp
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
