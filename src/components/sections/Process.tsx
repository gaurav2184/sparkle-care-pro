import { motion } from "framer-motion";
import { ClipboardList, Search, SprayCan, ShieldCheck } from "lucide-react";

const steps = [
  { icon: ClipboardList, title: "Book", desc: "Share your space details — get an instant quote." },
  { icon: Search, title: "Inspect", desc: "Our certified expert audits the area & identifies hotspots." },
  { icon: SprayCan, title: "Treat", desc: "Targeted, safe treatment with the right grade chemicals." },
  // { icon: ShieldCheck, title: "Warranty", desc: "Up to 5 years of follow-up coverage on every service." },
];

export const Process = () => (
  <section className="container py-24">
    <div className="text-center max-w-2xl mx-auto mb-16">
      <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">How it works</p>
      <h2 className="font-display text-4xl md:text-5xl font-extrabold text-primary">A simple 3-step process</h2>
    </div>

    <div className="relative grid md:grid-cols-3 gap-8">
      <div aria-hidden className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      {steps.map((s, i) => (
        <motion.div
          key={s.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="relative text-center"
        >
          <div className="relative mx-auto h-16 w-16 rounded-2xl gradient-accent grid place-items-center shadow-elegant mb-5">
            <s.icon className="h-7 w-7 text-white" />
            <div className="absolute -top-2 -right-2 h-7 w-7 rounded-full bg-primary text-primary-foreground text-xs font-bold grid place-items-center">{i + 1}</div>
          </div>
          <h3 className="font-display font-bold text-xl text-primary mb-2">{s.title}</h3>
          <p className="text-muted-foreground text-sm">{s.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
);
