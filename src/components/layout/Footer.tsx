import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, ShieldCheck, Facebook, Instagram, Linkedin, Star } from "lucide-react";
import logo from "@/assets/tds-logo.png";
import { config } from "@/lib/config";

export const Footer = () => (
  <footer className="relative mt-24 bg-primary text-primary-foreground overflow-hidden">
    <div aria-hidden className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-primary-glow/30 blur-3xl" />
    <div aria-hidden className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-secondary/20 blur-3xl" />

    <div className="container relative py-16 grid gap-12 lg:grid-cols-4">
      <div>
        <div className="bg-white rounded-xl p-3 inline-block mb-4">
          <img src={logo} alt="Trushna Disinfecting Services logo" className="h-20 w-auto" loading="lazy" />
        </div>
        <p className="text-sm opacity-80 leading-relaxed">
          Trusted experts in pest control & disinfection across Odisha. Anti-termite treatment backed by a 5-year service warranty.
        </p>
        <div className="flex flex-wrap gap-3 mt-6">
          {[
            { Icon: Facebook, href: config.social.facebook, label: "Facebook" },
            { Icon: Instagram, href: config.social.instagram, label: "Instagram" },
            { Icon: Linkedin, href: config.social.linkedin, label: "LinkedIn" },
            { Icon: Star, href: config.social.justdial, label: "Justdial" },
          ].map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="h-9 w-9 grid place-items-center rounded-full bg-white/10 hover:bg-secondary hover:text-primary transition-colors"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-semibold mb-4">Quick Links</h4>
        <ul className="space-y-2 text-sm opacity-80">
          <li><Link to="/services" className="hover:text-secondary">Services</Link></li>
          <li><Link to="/blogs" className="hover:text-secondary">Blogs</Link></li>
          <li><Link to="/testimonials" className="hover:text-secondary">Testimonials</Link></li>
          <li><Link to="/quote" className="hover:text-secondary">Get a Quote</Link></li>
          <li><Link to="/contact" className="hover:text-secondary">Contact</Link></li>
        </ul>
      </div>

      <div>
        <h4 className="font-semibold mb-4">Resources</h4>
        <ul className="space-y-2 text-sm opacity-80">
          <li><Link to="/faqs" className="hover:text-secondary">FAQs</Link></li>
          <li><Link to="/terms" className="hover:text-secondary">Terms & Conditions</Link></li>
          <li><Link to="/privacy" className="hover:text-secondary">Privacy Policy</Link></li>
        </ul>
        <div className="mt-6 inline-flex items-center gap-2 text-xs px-3 py-2 rounded-full bg-secondary text-primary font-semibold">
          <ShieldCheck className="h-4 w-4" /> 5-Year Warranty on Anti-Termite
        </div>
      </div>

      <div>
        <h4 className="font-semibold mb-4">Get in Touch</h4>
        <ul className="space-y-3 text-sm opacity-80">
          <li className="flex items-start gap-3"><Phone className="h-4 w-4 mt-0.5 text-secondary" /> <a href={`tel:${config.phone}`}>{config.phoneDisplay}</a></li>
          <li className="flex items-start gap-3"><Mail className="h-4 w-4 mt-0.5 text-secondary" /> <a href={`mailto:${config.email}`} className="break-all">{config.email}</a></li>
          <li className="flex items-start gap-3"><MapPin className="h-4 w-4 mt-0.5 text-secondary" /> <span>{config.address.line1}<br />{config.address.line2}</span></li>
        </ul>
      </div>
    </div>

    <div className="border-t border-white/10">
      <div className="container py-5 flex flex-col sm:flex-row gap-2 items-center justify-between text-xs opacity-70">
        <p>© {new Date().getFullYear()} Trushna Disinfecting Services. All rights reserved.</p>
        <p>Serving homes & businesses across Odisha.</p>
      </div>
    </div>
  </footer>
);
