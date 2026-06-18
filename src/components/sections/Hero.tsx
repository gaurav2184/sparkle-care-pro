import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Sparkles, Star, Smile, Heart, Leaf, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/bann-img-1.jpg";
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
            <ShieldCheck className="h-4 w-4" /> Free Quote & On-Site Visit • ISO 9001:2015 Certified
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
            Trushna Disinfecting Services delivers professional pest control & hospital-grade sanitization across Odisha — with an industry-leading 5-year warranty on Anti-Termite treatment.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 flex flex-col sm:flex-row gap-3 sm:items-center"
          >
            <Button asChild variant="hero" size="lg" className="w-full sm:w-auto">
              <Link to="/quote">
                Get Free Quote & Site Visit <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
              <Link to="/services">Explore Services</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}
            className="mt-10 flex items-center gap-6"
          >
            <div className="flex -space-x-2">
              {[Smile, Heart, Leaf, Shield].map((Icon, i) => (
                <div key={i} className="h-9 w-9 rounded-full border-2 border-background bg-gradient-to-br from-primary to-primary-glow grid place-items-center text-white">
                  <Icon className="h-4 w-4" />
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
          className="relative px-4 sm:px-6 lg:px-0 lg:w-full lg:max-w-[600px] lg:ml-auto"
        >
          <div className="relative rounded-[2rem] overflow-hidden shadow-elegant aspect-[4/5] max-w-md mx-auto lg:w-full lg:max-w-[620px] lg:aspect-[5/4] lg:ml-auto lg:mr-0">
            <img src={heroImg} alt="Professional disinfection technician at work" className="absolute inset-0 h-full w-full object-cover" width={1600} height={1200} />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-transparent to-transparent" />
          </div>

          {/* Floating ISO certification badge */}
          <motion.div
            initial={{ opacity: 0, x: -20, rotate: -10 }} animate={{ opacity: 1, x: 0, rotate: -8 }} transition={{ delay: 0.6, duration: 0.6 }}
            className="absolute left-2 sm:-left-4 top-6 sm:top-10 glass rounded-2xl p-2.5 shadow-elegant border border-white/40 flex items-center gap-2 max-w-[170px] sm:max-w-none"
          >
            <img src={isoBadge} alt="ISO 9001:2015 Certified" className="h-12 w-12 sm:h-16 sm:w-16 object-contain shrink-0" />
            <div className="pr-1">
              <div className="font-bold text-primary text-xs sm:text-sm leading-tight">ISO 9001:2015</div>
              <p className="text-[10px] sm:text-[11px] text-muted-foreground">Certified Quality</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8, duration: 0.6 }}
            className="absolute right-2 sm:-right-2 bottom-8 sm:bottom-12 glass rounded-2xl p-3 sm:p-4 shadow-elegant border border-white/40 max-w-[160px] sm:max-w-none"
          >
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-full gradient-accent grid place-items-center animate-shield-pulse shrink-0">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="text-lg sm:text-xl font-extrabold text-primary leading-none">99.9%</div>
                <div className="text-[10px] sm:text-[11px] text-muted-foreground">Germ elimination</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
