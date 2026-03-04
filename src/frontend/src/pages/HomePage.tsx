import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Calendar,
  Car,
  CheckCircle,
  MapPin,
  Phone,
  Quote,
  Wrench,
} from "lucide-react";
import { motion } from "motion/react";
import { SiUber } from "react-icons/si";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const benefits = [
  {
    icon: Wrench,
    title: "Zero Maintenance Hassle",
    desc: "We manage servicing, repairs, and insurance — so you stay focused on earnings.",
  },
  {
    icon: Calendar,
    title: "Flexible Daily Rentals",
    desc: "Simple daily rental model. No long-term lock-ins.",
  },
  {
    icon: Phone,
    title: "24/7 Support",
    desc: "Dedicated support for breakdowns, documentation, and platform guidance.",
  },
  {
    icon: Car,
    title: "Reliable Maruti Wagon R Fleet",
    desc: "Fuel-efficient, comfortable, and ideal for Mumbai ride-hailing.",
  },
];

const steps = [
  {
    num: "1",
    title: "Apply",
    desc: "Submit your details online or visit our Kurla/Ghatkopar office.",
  },
  {
    num: "2",
    title: "Verification",
    desc: "Submit required documents and complete onboarding.",
  },
  {
    num: "3",
    title: "Start Earning",
    desc: "Take your Wagon R and go live on Uber, Ola, or Rapido.",
  },
];

export default function HomePage() {
  return (
    <main>
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/generated/hero-car.dim_1200x600.jpg"
            alt="National Mobility Fleet"
            className="w-full h-full object-cover"
          />
          <div className="hero-gradient absolute inset-0" />
        </div>

        <div className="relative container mx-auto pt-24 pb-16">
          <motion.div
            className="max-w-2xl"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.div variants={fadeInUp} className="mb-4">
              <span className="inline-flex items-center gap-2 bg-teal/20 border border-teal/30 text-teal-light px-4 py-1.5 rounded-full text-sm font-semibold font-body backdrop-blur-sm">
                <SiUber size={14} />
                Mumbai's #1 Ride-Hailing Fleet Partner
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-4"
            >
              Drive Your Own Income.
            </motion.h1>

            <motion.h2
              variants={fadeInUp}
              className="font-display text-xl md:text-2xl font-semibold text-white/90 mb-5 leading-snug"
            >
              Achieve Financial Independence with Zero-Maintenance Car Rentals.
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-white/75 text-base md:text-lg leading-relaxed mb-8 max-w-xl font-body"
            >
              Rent a Maruti Wagon R and start earning on Uber, Ola &amp; Rapido
              — while we handle maintenance, insurance, and support.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Link
                to="/partner"
                data-ocid="home.hero.apply.primary_button"
                className="btn-teal inline-flex items-center justify-center gap-2 text-base shadow-teal"
              >
                Apply Now
                <ArrowRight size={18} />
              </Link>
              <a
                href="https://wa.me/919082274858"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="home.hero.whatsapp.secondary_button"
                className="inline-flex items-center justify-center gap-2 bg-white/15 border border-white/30 text-white hover:bg-white/25 px-6 py-3 rounded-lg text-base font-bold transition-all backdrop-blur-sm font-body"
              >
                📞 Speak to Our Team on WhatsApp
              </a>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-6">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 px-4 py-2 rounded-full text-xs font-semibold backdrop-blur-sm font-body">
                <CheckCircle size={14} className="text-teal-light" />
                Managed by Banu Tour and Travels
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center pt-2"
          >
            <div className="w-1.5 h-1.5 bg-white/60 rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* ── Value Propositions ────────────────────────────────────── */}
      <section className="py-20 bg-background">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeInUp} className="text-center mb-14">
              <span className="text-teal font-semibold text-sm uppercase tracking-widest font-body">
                Our Promise
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-extrabold text-navy mt-2">
                Why Drivers Choose National Mobility
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((b) => (
                <motion.div
                  key={b.title}
                  variants={fadeInUp}
                  className="card-hover bg-card border border-border rounded-2xl p-7 shadow-card flex flex-col gap-4"
                >
                  <div className="w-12 h-12 bg-teal/10 rounded-xl flex items-center justify-center">
                    <b.icon size={24} className="text-teal" />
                  </div>
                  <h3 className="font-display font-bold text-navy text-lg leading-snug">
                    {b.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed font-body">
                    {b.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── How It Works ──────────────────────────────────────────── */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeInUp} className="text-center mb-14">
              <span className="text-teal-light font-semibold text-sm uppercase tracking-widest font-body">
                Simple Process
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-extrabold text-white mt-2">
                Start in 3 Simple Steps
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {/* Connector line (hidden on mobile) */}
              <div className="hidden md:block absolute top-7 left-[calc(16.67%+1.5rem)] right-[calc(16.67%+1.5rem)] h-0.5 bg-teal/30 z-0" />

              {steps.map((step) => (
                <motion.div
                  key={step.num}
                  variants={fadeInUp}
                  className="relative z-10 flex flex-col items-center text-center gap-4"
                >
                  <div className="step-number shadow-teal">{step.num}</div>
                  <h3 className="font-display font-bold text-white text-xl">
                    {step.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed font-body max-w-xs">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeInUp} className="mt-12 text-center">
              <Link
                to="/partner"
                className="btn-teal inline-flex items-center gap-2 shadow-teal"
              >
                Begin Your Application
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── CEO Message ───────────────────────────────────────────── */}
      <section className="py-20 bg-background">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeInUp} className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-navy">
                <img
                  src="/assets/uploads/Imran-Bhai-1.jpeg"
                  alt="Imran Hajwani, Founder & CEO"
                  className="w-full max-w-sm mx-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-display font-bold text-lg">
                    Imran Hajwani
                  </p>
                  <p className="text-teal-light text-sm font-body">
                    Founder &amp; CEO, National Mobility
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-6">
              <div>
                <span className="text-teal font-semibold text-sm uppercase tracking-widest font-body">
                  Message from the Founder
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-extrabold text-navy mt-2">
                  Built on Trust. Driven by Purpose.
                </h2>
              </div>

              <div className="relative">
                <Quote
                  size={48}
                  className="text-teal/20 absolute -top-2 -left-3"
                  fill="currentColor"
                />
                <blockquote className="relative pl-6 border-l-4 border-teal">
                  <p className="text-muted-foreground text-base leading-relaxed font-body italic">
                    "At National Mobility, our mission is simple — empower
                    Mumbai's driver community with reliable vehicles and
                    complete operational support. We understand that every
                    driver dreams of financial stability and growth. That's why
                    we created a zero-maintenance rental model — so you can
                    focus purely on earning, without worrying about servicing,
                    insurance, or paperwork.
                  </p>
                  <p className="text-navy font-semibold text-base mt-4 font-body">
                    We don't just rent cars. We build long-term partnerships
                    with drivers."
                  </p>
                </blockquote>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <div className="w-10 h-0.5 bg-teal" />
                <p className="text-navy font-display font-bold">
                  Imran Hajwani
                </p>
                <span className="text-muted-foreground text-sm font-body">
                  Founder &amp; CEO
                </span>
              </div>
              <p className="text-xs text-muted-foreground font-body">
                Also CEO, Banu Tour and Travels
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Locations ─────────────────────────────────────────────── */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeInUp} className="text-center mb-14">
              <span className="text-teal font-semibold text-sm uppercase tracking-widest font-body">
                Find Us
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-extrabold text-navy mt-2">
                Visit Us at Our Mumbai Offices
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {[
                {
                  name: "Kurla West",
                  address: "Phoenix Paragon Plaza",
                  city: "Mumbai",
                },
                {
                  name: "Ghatkopar West",
                  address: "Karewala Building",
                  city: "Mumbai",
                },
              ].map((loc) => (
                <motion.div
                  key={loc.name}
                  variants={fadeInUp}
                  className="card-hover bg-card rounded-2xl p-7 shadow-card border border-border flex items-start gap-4"
                >
                  <div className="w-12 h-12 bg-navy/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-navy" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-navy text-lg">
                      {loc.name}
                    </h3>
                    <p className="text-muted-foreground text-sm font-body mt-1">
                      {loc.address}
                    </p>
                    <p className="text-muted-foreground text-sm font-body">
                      {loc.city}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeInUp} className="mt-10 text-center">
              <Link
                to="/partner"
                data-ocid="home.cta.apply.primary_button"
                className="btn-navy inline-flex items-center gap-2 shadow-navy"
              >
                Apply Today &amp; Start Driving Tomorrow
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Driver Photo Banner ───────────────────────────────────── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/generated/driver-happy.dim_800x500.jpg"
            alt="Happy driver earning with National Mobility"
            className="w-full h-full object-cover"
          />
          <div className="hero-gradient absolute inset-0" />
        </div>
        <div className="relative container mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="max-w-2xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-display text-3xl md:text-5xl font-extrabold text-white mb-4"
            >
              Your Vehicle. Your Income. Your Future.
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-white/80 text-lg mb-8 font-body"
            >
              Join hundreds of Mumbai drivers who've achieved financial
              independence with National Mobility.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link
                to="/partner"
                className="btn-teal inline-flex items-center gap-2 text-base shadow-teal"
              >
                Start Your Journey Today
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
