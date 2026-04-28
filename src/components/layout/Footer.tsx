import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, ShieldCheck, Facebook, Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/tds-logo.png";

export const Footer = () => (
  <footer className="relative mt-24 bg-primary text-primary-foreground overflow-hidden">
    <div aria-hidden className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-primary-glow/30 blur-3xl" />
    <div aria-hidden className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-secondary/20 blur-3xl" />

    <div className="container relative py-16 grid gap-12 lg:grid-cols-4">
      <div>
        <div className="flex items-center gap-3 mb-4">
          <img src={logo} alt="TDS logo" className="h-12 w-12 bg-white rounded-xl p-1" width={48} height={48} loading="lazy" />
          <div>
            <div className="font-display font-extrabold">TDS</div>
            <div className="text-xs opacity-70">Trushna Disinfection Services</div>
          </div>
        </div>
        <p className="text-sm opacity-80 leading-relaxed">
          Bhubaneswar's trusted experts in pest control & disinfection. Backed by a 5-year service warranty.
        </p>
        <div className="flex gap-3 mt-6">
          {[Facebook, Instagram, Linkedin].map((Icon, i) => (
            <a key={i} href="#" className="h-9 w-9 grid place-items-center rounded-full bg-white/10 hover:bg-secondary hover:text-primary transition-colors">
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
          <ShieldCheck className="h-4 w-4" /> 5-Year Service Warranty
        </div>
      </div>

      <div>
        <h4 className="font-semibold mb-4">Get in Touch</h4>
        <ul className="space-y-3 text-sm opacity-80">
          <li className="flex items-start gap-3"><Phone className="h-4 w-4 mt-0.5 text-secondary" /> +91 99999 99999</li>
          <li className="flex items-start gap-3"><Mail className="h-4 w-4 mt-0.5 text-secondary" /> hello@tdsdisinfection.in</li>
          <li className="flex items-start gap-3"><MapPin className="h-4 w-4 mt-0.5 text-secondary" /> Bhubaneswar, Odisha, India</li>
        </ul>
      </div>
    </div>

    <div className="border-t border-white/10">
      <div className="container py-5 flex flex-col sm:flex-row gap-2 items-center justify-between text-xs opacity-70">
        <p>© {new Date().getFullYear()} Trushna Disinfection Services. All rights reserved.</p>
        <p>Crafted with care in Bhubaneswar.</p>
      </div>
    </div>
  </footer>
);
