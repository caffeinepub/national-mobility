import { Link } from "@tanstack/react-router";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { motion } from "motion/react";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

export const blogPosts = [
  {
    slug: "maximize-uber-earnings",
    title: "How to Maximize Daily Earnings on Uber in Mumbai",
    excerpt:
      "Discover the peak hours, surge pricing strategies, and top pickup zones that Mumbai's top-earning Uber drivers use to maximize their daily income. From airport runs to corporate corridors — we break it all down.",
    readTime: "6 min read",
    category: "Earnings Strategy",
    date: "March 2026",
  },
  {
    slug: "best-driving-hours",
    title: "Best Driving Hours in Mumbai for Higher Ride-Hailing Income",
    excerpt:
      "Not all hours are created equal when it comes to ride-hailing earnings. Learn exactly which time slots generate the highest income for Uber, Ola, and Rapido drivers in Mumbai — and which hours to avoid.",
    readTime: "5 min read",
    category: "Driver Tips",
    date: "February 2026",
  },
  {
    slug: "wagon-r-fuel-tips",
    title: "Fuel Efficiency Tips for Maruti Wagon R Drivers",
    excerpt:
      "Fuel is your biggest operating cost. With these proven tips for the Maruti Wagon R — from smooth acceleration techniques to smart route planning — you can cut your fuel expenses significantly and keep more earnings in your pocket.",
    readTime: "4 min read",
    category: "Vehicle Care",
    date: "January 2026",
  },
];

export default function BlogPage() {
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
              Resources
            </span>
            <h1 className="font-display text-3xl md:text-5xl font-extrabold text-white mt-2 mb-4">
              Driver Insights & Tips
            </h1>
            <p className="text-white/70 font-body text-lg max-w-xl mx-auto">
              Practical guides to help you earn more, drive smarter, and build
              financial independence on Mumbai's roads.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {blogPosts.map((post, idx) => (
              <motion.article
                key={post.slug}
                variants={fadeInUp}
                data-ocid={`blog.item.${idx + 1}`}
                className="card-hover bg-card border border-border rounded-2xl overflow-hidden shadow-card flex flex-col"
              >
                {/* Color accent header */}
                <div className="h-3 bg-gradient-to-r from-navy to-teal" />

                <div className="p-6 flex flex-col flex-1 gap-4">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 bg-teal/10 text-teal text-xs font-semibold px-2.5 py-1 rounded-full font-body">
                      <Tag size={10} />
                      {post.category}
                    </span>
                    <span className="text-muted-foreground text-xs font-body flex items-center gap-1">
                      <Clock size={12} />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="font-display font-bold text-navy text-xl leading-snug">
                    {post.title}
                  </h2>

                  <p className="text-muted-foreground text-sm leading-relaxed font-body flex-1">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-2 border-t border-border">
                    <span className="text-muted-foreground text-xs font-body">
                      {post.date}
                    </span>
                    <Link
                      to="/blog/$slug"
                      params={{ slug: post.slug }}
                      data-ocid={`blog.read_more.${idx + 1}`}
                      className="inline-flex items-center gap-1.5 text-teal font-bold text-sm hover:gap-2.5 transition-all font-body"
                    >
                      Read More
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl mx-auto space-y-6"
          >
            <h2 className="font-display text-3xl font-extrabold text-white">
              Ready to Start Earning?
            </h2>
            <p className="text-white/70 font-body">
              Apply to partner with National Mobility today and take the first
              step toward financial independence.
            </p>
            <Link
              to="/partner"
              className="btn-teal inline-flex items-center gap-2 shadow-teal"
            >
              Apply Now
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
