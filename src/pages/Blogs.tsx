import { PageLayout } from "@/components/layout/PageLayout";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";

const posts = [
  { title: "5 Signs You Have a Termite Problem (and What to Do)", category: "Termites", date: "Apr 12, 2026", read: "5 min", excerpt: "Hollow-sounding wood, mud tubes, discarded wings — here's how to spot termites before they cause real damage." },
  { title: "Are Pest Control Chemicals Safe for Kids and Pets?", category: "Safety", date: "Mar 28, 2026", read: "4 min", excerpt: "We break down the modern, water-based formulations TDS uses — and why they're approved for indoor family use." },
  { title: "The Real Cost of Skipping Annual Disinfection", category: "Disinfection", date: "Mar 09, 2026", read: "6 min", excerpt: "From sick days to insurance claims, we calculate what neglecting workplace sanitization actually costs your business." },
  { title: "Mosquito-Proofing Your Home Before Monsoon", category: "Seasonal", date: "Feb 21, 2026", read: "5 min", excerpt: "Dengue cases spike every July. Here's our 7-step pre-monsoon checklist to keep your family protected." },
  { title: "Bed Bugs 101: Detection, Treatment & Prevention", category: "Bed Bugs", date: "Feb 02, 2026", read: "7 min", excerpt: "Bed bugs are back, and they're tougher than ever. Learn what works — and what's a waste of money." },
  { title: "Why Cockroaches Always Come Back (And How to Stop Them)", category: "Cockroaches", date: "Jan 18, 2026", read: "5 min", excerpt: "Spray-and-pray treatments only kill what you see. Here's how professional gel-baiting eliminates the colony." },
];

const Blogs = () => (
  <PageLayout>
    <section className="container py-16 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">Insights</p>
      <h1 className="font-display text-5xl md:text-6xl font-extrabold text-primary">From the TDS Journal</h1>
      <p className="text-muted-foreground mt-5 max-w-2xl mx-auto text-lg">
        Tips, guides and news on keeping your space pest-free and pristine.
      </p>
    </section>

    <section className="container pb-24 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((p, i) => (
        <motion.article
          key={p.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.05 }}
          className="group rounded-2xl overflow-hidden border border-border bg-card hover:shadow-elegant transition-all"
        >
          <div className="aspect-[16/10] gradient-accent relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.3),transparent_60%)]" />
            <span className="absolute top-4 left-4 text-xs font-bold px-3 py-1 rounded-full bg-white/90 text-primary">{p.category}</span>
          </div>
          <div className="p-6">
            <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
              <Calendar className="h-3.5 w-3.5" /> {p.date} · {p.read} read
            </div>
            <h2 className="font-display font-bold text-lg text-primary leading-snug mb-3 group-hover:text-accent transition-colors">{p.title}</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.excerpt}</p>
            <button className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
              Read article <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </motion.article>
      ))}
    </section>
  </PageLayout>
);

export default Blogs;
