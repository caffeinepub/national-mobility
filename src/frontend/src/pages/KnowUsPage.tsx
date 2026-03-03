import { Briefcase, CheckCircle, Target } from "lucide-react";
import { motion } from "motion/react";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const synergyPoints = [
  "Strong operational systems",
  "Reliable fleet availability",
  "Professional management",
  "Transparent driver relationships",
];

const leadership = [
  {
    name: "Imran Hajwani",
    title: "Founder & CEO",
    image: "/assets/generated/ceo-imran.dim_400x400.jpg",
    bio: "Visionary entrepreneur and mobility strategist with years of experience in fleet and travel operations. Leads company growth, partnerships, and strategic direction.",
    responsibilities: [],
  },
  {
    name: "Hasnain Khan",
    title: "COO — Fleet & Operations",
    image: null,
    initials: "HK",
    bio: "Leads all operational aspects of the National Mobility fleet to ensure seamless driver experiences.",
    responsibilities: [
      "Vehicle procurement",
      "Maintenance scheduling",
      "Driver onboarding",
      "24/7 operational support",
    ],
  },
  {
    name: "Shaikh Shahbaz",
    title: "CFO — Finance & Payouts",
    image: null,
    initials: "SS",
    bio: "Ensures financial discipline, transparency, and smooth payment operations across all partnerships.",
    responsibilities: [
      "Rental structuring",
      "Financial transparency",
      "Payment systems",
      "Compliance",
    ],
  },
];

export default function KnowUsPage() {
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
              Our Company
            </span>
            <h1 className="font-display text-3xl md:text-5xl font-extrabold text-white mt-2 mb-4">
              Know Us
            </h1>
            <p className="text-white/70 font-body text-lg max-w-xl mx-auto">
              Built on Experience. Driven by Trust.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start"
          >
            <motion.div variants={fadeInUp} className="lg:col-span-3 space-y-5">
              <div>
                <span className="text-teal font-semibold text-sm uppercase tracking-widest font-body">
                  Our Story
                </span>
                <h2 className="font-display text-3xl font-extrabold text-navy mt-2">
                  Built on Experience. Driven by Trust.
                </h2>
              </div>
              <p className="text-muted-foreground font-body leading-relaxed">
                National Mobility was founded with one clear goal — to support
                Mumbai's growing ride-hailing driver community with dependable,
                well-maintained vehicles.
              </p>
              <p className="text-muted-foreground font-body leading-relaxed">
                With the operational expertise of{" "}
                <strong className="text-navy">Banu Tour and Travels</strong>, we
                bring years of fleet management and travel industry experience
                into the mobility rental space.
              </p>
              <p className="text-muted-foreground font-body leading-relaxed">
                This synergy ensures our drivers get the best vehicles,
                maintained to the highest standards, with complete operational
                support at every step.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="lg:col-span-2 space-y-3">
              <h3 className="font-display font-bold text-navy text-lg mb-4">
                The National Mobility Advantage
              </h3>
              {synergyPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-3 bg-card border border-border rounded-xl p-4 shadow-card"
                >
                  <CheckCircle size={18} className="text-teal flex-shrink-0" />
                  <span className="text-navy font-semibold text-sm font-body">
                    {point}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-navy">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center space-y-6"
          >
            <div className="w-14 h-14 bg-teal/20 rounded-2xl flex items-center justify-center mx-auto">
              <Target size={28} className="text-teal-light" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-white">
              Our Mission
            </h2>
            <p className="text-white/70 text-xl leading-relaxed font-body italic">
              "To create sustainable income opportunities for drivers by
              providing reliable vehicles with complete operational support."
            </p>
            <div className="w-16 h-1 bg-teal rounded-full mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-background">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
          >
            <motion.div variants={fadeInUp} className="text-center mb-14">
              <span className="text-teal font-semibold text-sm uppercase tracking-widest font-body">
                The Team
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-extrabold text-navy mt-2">
                Leadership Team
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {leadership.map((leader) => (
                <motion.div
                  key={leader.name}
                  variants={fadeInUp}
                  className="card-hover bg-card border border-border rounded-2xl overflow-hidden shadow-card"
                >
                  {/* Avatar area */}
                  <div className="relative h-48 bg-navy/5 flex items-center justify-center">
                    {leader.image ? (
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="w-full h-full object-cover object-top"
                      />
                    ) : (
                      <div className="w-24 h-24 bg-navy rounded-full flex items-center justify-center shadow-navy">
                        <span className="font-display font-extrabold text-white text-2xl">
                          {leader.initials}
                        </span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
                  </div>

                  <div className="p-6 space-y-3">
                    <div>
                      <h3 className="font-display font-bold text-navy text-xl">
                        {leader.name}
                      </h3>
                      <p className="text-teal font-semibold text-sm font-body">
                        {leader.title}
                      </p>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed font-body">
                      {leader.bio}
                    </p>

                    {leader.responsibilities.length > 0 && (
                      <div className="pt-2">
                        <div className="flex items-center gap-2 mb-2">
                          <Briefcase size={14} className="text-teal" />
                          <span className="text-navy font-semibold text-xs uppercase tracking-wider font-body">
                            Oversees
                          </span>
                        </div>
                        <ul className="space-y-1">
                          {leader.responsibilities.map((r) => (
                            <li
                              key={r}
                              className="text-muted-foreground text-xs font-body flex items-center gap-2"
                            >
                              <div className="w-1.5 h-1.5 bg-teal rounded-full flex-shrink-0" />
                              {r}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
