import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-technician.jpg";
import isoBadge from "@/assets/iso-9001.png";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden gradient-mist pt-12 pb-24 lg:pt-20 lg:pb-32">
      {/* floating mist blobs */}
      <div aria-hidden className="absolute -top-24 -left-24 h-[28rem] w-[28rem] rounded-full bg-primary-glow/25 blur-3xl animate-float-slow" />
      <div aria-hidden className="absolute top-40 right-0 h-96 w-96 rounded-full bg-secondary/25 blur-3xl animate-float-slow" style={{ animationDelay: "-4s" }} />

      <div className="container relative grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur border border-primary/10 text-primary text-xs font-semibold mb-6"
          >
            <ShieldCheck className="h-4 w-4" /> 5-Year Service Warranty • ISO Certified
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.05 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] text-primary"
          >
            A cleaner, safer
            <br />
            <span className="text-gradient">space to live in.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed"
          >
            Trushna Disinfection Services delivers professional pest control & hospital-grade sanitization across Berhampur — backed by an industry-leading 5-year warranty.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Button asChild variant="hero" size="lg">
              <Link to="/quote">
                Get Free Quote <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/services">Explore Services</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}
            className="mt-10 flex items-center gap-6"
          >
            <div className="flex -space-x-2">
              {[1,2,3,4].map(i => (
                <div key={i} className="h-9 w-9 rounded-full border-2 border-background bg-gradient-to-br from-primary to-primary-glow grid place-items-center text-xs text-white font-bold">
                  {String.fromCharCode(64+i)}
                </div>
              ))}
            </div>
            <div className="text-sm">
              <div className="flex items-center gap-1 text-secondary">
                {[...Array(5)].map((_,i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="text-muted-foreground">2,500+ happy homes & offices</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.2 }}
          className="relative"
        >
          <div className="relative rounded-[2rem] overflow-hidden shadow-elegant aspect-[4/5] max-w-md ml-auto">
            <img src={heroImg} alt="Professional disinfection technician at work" className="absolute inset-0 h-full w-full object-cover" width={1600} height={1200} />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-transparent to-transparent" />
          </div>

          {/* Floating ISO certification badge */}
          <motion.div
            initial={{ opacity: 0, x: -20, rotate: -10 }} animate={{ opacity: 1, x: 0, rotate: -8 }} transition={{ delay: 0.6, duration: 0.6 }}
            className="absolute -left-6 top-10 glass rounded-2xl p-3 shadow-elegant border border-white/40 flex items-center gap-3"
          >
            <img src={isoBadge} alt="ISO 9001:2015 Certified" className="h-16 w-16 object-contain" />
            <div className="pr-2">
              <div className="font-bold text-primary text-sm leading-tight">ISO 9001:2015</div>
              <p className="text-[11px] text-muted-foreground">Certified Quality</p>
              <div className="flex items-center gap-1 mt-1 text-[10px] text-accent font-semibold">
                <ShieldCheck className="h-3 w-3" /> 5-Year Warranty
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8, duration: 0.6 }}
            className="absolute -right-4 bottom-12 glass rounded-2xl p-4 shadow-elegant border border-white/40"
          >
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full gradient-accent grid place-items-center animate-shield-pulse">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="text-xl font-extrabold text-primary leading-none">99.9%</div>
                <div className="text-[11px] text-muted-foreground">Germ elimination</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
