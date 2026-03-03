import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // biome-ignore lint/correctness/useExhaustiveDependencies: close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { href: "/", label: "Home", ocid: "nav.home.link" },
    { href: "/partner", label: "Partner With Us", ocid: "nav.partner.link" },
    { href: "/know-us", label: "Know Us", ocid: "nav.know_us.link" },
    { href: "/blog", label: "Blog", ocid: "nav.blog.link" },
    { href: "/faq", label: "FAQ", ocid: "nav.faq.link" },
    { href: "/contact", label: "Contact Us", ocid: "nav.contact.link" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-card py-2"
          : "bg-white/95 backdrop-blur-sm py-3"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center flex-shrink-0">
          <img
            src="/assets/uploads/WhatsApp-Image-2026-02-24-at-10.28.14-AM-1.jpeg"
            alt="National Mobility"
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              data-ocid={link.ocid}
              className={`px-3 py-2 rounded-md text-sm font-semibold transition-colors font-body ${
                location.pathname === link.href
                  ? "text-teal bg-teal/10"
                  : "text-navy hover:text-teal hover:bg-teal/5"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Link
            to="/partner"
            data-ocid="nav.apply.button"
            className="btn-teal inline-block text-sm"
          >
            Apply Now
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          className="lg:hidden p-2 text-navy rounded-md hover:bg-secondary"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-t border-border overflow-hidden"
          >
            <div className="container mx-auto py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  data-ocid={link.ocid}
                  className={`px-4 py-3 rounded-md text-sm font-semibold transition-colors font-body ${
                    location.pathname === link.href
                      ? "text-teal bg-teal/10"
                      : "text-navy hover:text-teal hover:bg-teal/5"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2">
                <Link
                  to="/partner"
                  data-ocid="nav.apply.button"
                  className="btn-teal inline-block text-sm w-full text-center"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
