import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/tds-logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/blogs", label: "Blogs" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/faqs", label: "FAQs" },
  { to: "/contact", label: "Contact" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "glass shadow-soft py-2" : "bg-transparent py-4"
      )}
    >
      <nav className="container flex items-center justify-between">
        <Link to="/" className="flex items-center group">
          <img src={logo} alt="TDS Trushna Disinfecting Services logo" className="h-12 md:h-14 w-auto transition-transform group-hover:scale-105" />
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                cn(
                  "px-4 py-2 text-sm font-medium rounded-full transition-colors relative",
                  isActive ? "text-primary" : "text-foreground/70 hover:text-primary"
                )
              }
            >
              {({ isActive }) => (
                <>
                  {l.label}
                  {isActive && <span className="absolute inset-x-4 -bottom-0.5 h-0.5 gradient-accent rounded-full" />}
                </>
              )}
            </NavLink>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:+917381214444" className="flex items-center gap-2 text-sm font-medium text-primary">
            <Phone className="h-4 w-4" />
            +91 73812 14444
          </a>
          <Button asChild variant="hero" size="sm">
            <Link to="/quote">Get Quote</Link>
          </Button>
        </div>

        <button className="lg:hidden p-2 rounded-md text-primary" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden glass border-t border-border mt-2 animate-fade-in">
          <div className="container py-4 flex flex-col gap-2">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} end={l.to === "/"} className="px-3 py-2 rounded-lg hover:bg-primary/5">
                {l.label}
              </NavLink>
            ))}
            <Button asChild variant="hero" className="mt-2">
              <Link to="/quote">Get Free Quote</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
