import { motion } from "framer-motion";
import { ShieldCheck, Award, Leaf, Clock, Users, Sparkles } from "lucide-react";

const features = [
  { icon: ShieldCheck, title: "5-Year Warranty", desc: "Industry-leading service guarantee on termite & disinfection treatments." },
  { icon: Award, title: "ISO Certified", desc: "Trained, certified technicians following global safety protocols." },
  { icon: Leaf, title: "Eco-Friendly Chemicals", desc: "Government-approved, child & pet-safe formulations only." },
  { icon: Clock, title: "On-Time, Every Time", desc: "Same-day appointments and a 4-hour response window." },
  { icon: Users, title: "2,500+ Clients", desc: "Trusted by homes, offices, hospitals and restaurants across Odisha." },
  { icon: Sparkles, title: "Hospital-Grade Fogging", desc: "ULV cold fogging that reaches every corner — even the ones you don't see." },
];

export const WhyUs = () => (
  <section className="relative py-24 overflow-hidden">
    <div aria-hidden className="absolute inset-0 gradient-mist" />
    <div aria-hidden className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[40rem] w-[40rem] rounded-full bg-primary-glow/10 blur-3xl" />
    <div className="container relative">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">Why TDS</p>
        <h2 className="font-display text-4xl md:text-5xl font-extrabold text-primary">
          Built on trust. <span className="text-gradient">Backed by warranty.</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="p-7 rounded-2xl bg-card border border-border shadow-soft hover:shadow-elegant transition-all"
          >
            <div className="h-12 w-12 rounded-xl bg-primary/5 text-primary grid place-items-center mb-4">
              <f.icon className="h-6 w-6" />
            </div>
            <h3 className="font-display font-bold text-lg text-primary mb-2">{f.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
