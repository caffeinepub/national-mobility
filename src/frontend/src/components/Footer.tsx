import { Link } from "@tanstack/react-router";
import { MapPin, MessageCircle } from "lucide-react";
import { SiInstagram, SiLinkedin } from "react-icons/si";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Left — Logo & Tagline */}
          <div className="space-y-4">
            <img
              src="/assets/uploads/WhatsApp-Image-2026-02-24-at-10.28.14-AM-1-1.jpeg"
              alt="National Mobility"
              className="h-10 w-auto object-contain"
            />
            <p className="text-white/70 text-sm leading-relaxed font-body max-w-xs">
              Driving Financial Independence Across Mumbai
            </p>
            <p className="text-white/50 text-xs font-body">
              Managed by Banu Tour and Travels
            </p>
          </div>

          {/* Middle — Quick Links */}
          <div>
            <h3 className="font-display font-bold text-white mb-5 text-lg">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home", ocid: "footer.home.link" },
                {
                  href: "/partner",
                  label: "Partner With Us",
                  ocid: "footer.partner.link",
                },
                {
                  href: "/know-us",
                  label: "Know Us",
                  ocid: "footer.know_us.link",
                },
                { href: "/blog", label: "Blog", ocid: "footer.blog.link" },
                { href: "/faq", label: "FAQ", ocid: "footer.faq.link" },
                {
                  href: "/contact",
                  label: "Contact Us",
                  ocid: "footer.contact.link",
                },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    data-ocid={link.ocid}
                    className="text-white/70 hover:text-teal text-sm transition-colors font-body"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — Addresses & Contact */}
          <div className="space-y-5">
            <h3 className="font-display font-bold text-white text-lg">
              Our Offices
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="text-teal mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold text-sm font-body">
                    Kurla West
                  </p>
                  <p className="text-white/60 text-xs font-body">
                    Phoenix Paragon Plaza, Mumbai
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="text-teal mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold text-sm font-body">
                    Ghatkopar West
                  </p>
                  <p className="text-white/60 text-xs font-body">
                    Karewala Building, Mumbai
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/919082274858"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="footer.whatsapp.button"
              className="inline-flex items-center gap-2 bg-whatsapp hover:opacity-90 text-white px-4 py-2.5 rounded-lg text-sm font-bold transition-opacity"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </a>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/nationalmobility?igsh=MnRmdmFoMmd5bWM3"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-white/60 hover:text-teal transition-colors"
              >
                <SiInstagram size={20} />
              </a>
              <a
                href="https://linkedin.com/company/nationalmobility"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-white/60 hover:text-teal transition-colors"
              >
                <SiLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/50 text-xs font-body">
            © {currentYear} National Mobility. All Rights Reserved. Managed by
            Imran Hajwani.
          </p>
          <p className="text-white/40 text-xs font-body">
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
