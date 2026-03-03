import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle } from "lucide-react";
import { motion } from "motion/react";

const faqs = [
  {
    q: "What is the daily rental amount?",
    a: "Rental varies based on agreement. Contact our team for current rates — we offer transparent, flexible packages designed to maximize your take-home earnings.",
  },
  {
    q: "Is insurance included?",
    a: "Yes. All National Mobility vehicles are fully insured. You can drive with complete peace of mind knowing that comprehensive vehicle insurance is included in your rental agreement.",
  },
  {
    q: "Who handles servicing and repairs?",
    a: "National Mobility handles all scheduled maintenance and servicing. Our zero-maintenance model means you never have to worry about service appointments, repair costs, or vehicle downtime — we manage everything.",
  },
  {
    q: "Can I use the car for Uber, Ola, and Rapido?",
    a: "Yes, all National Mobility vehicles are commercial-ready and suitable for all major ride-hailing platforms including Uber, Ola, and Rapido. We support your onboarding on all three platforms.",
  },
  {
    q: "Is there a lock-in period?",
    a: "Our model focuses on flexibility. We believe in building long-term partnerships based on mutual trust — not contractual pressure. Specific terms are explained in detail during your onboarding process.",
  },
];

export default function FAQPage() {
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
              Got Questions?
            </span>
            <h1 className="font-display text-3xl md:text-5xl font-extrabold text-white mt-2 mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-white/70 font-body text-lg max-w-xl mx-auto">
              Everything you need to know about partnering with National
              Mobility.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20 bg-background">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, idx) => (
                <AccordionItem
                  key={faq.q}
                  value={`faq-${idx + 1}`}
                  data-ocid={`faq.item.${idx + 1}`}
                  className="bg-card border border-border rounded-2xl px-6 shadow-card data-[state=open]:shadow-card-hover"
                >
                  <AccordionTrigger className="font-display font-bold text-navy text-base text-left hover:text-teal transition-colors py-5 hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground font-body text-sm leading-relaxed pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          {/* WhatsApp CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-14 bg-navy/5 border border-navy/10 rounded-2xl p-8 text-center space-y-4"
          >
            <MessageCircle size={40} className="text-teal mx-auto" />
            <h3 className="font-display text-2xl font-extrabold text-navy">
              Still have questions?
            </h3>
            <p className="text-muted-foreground font-body">
              Talk to our team directly on WhatsApp — we're available to answer
              all your questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://wa.me/91XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-teal inline-flex items-center justify-center gap-2 shadow-teal"
              >
                <MessageCircle size={18} />
                Talk to Us on WhatsApp
              </a>
              <Link
                to="/partner"
                className="btn-navy inline-flex items-center justify-center gap-2 shadow-navy"
              >
                Apply Now
                <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
