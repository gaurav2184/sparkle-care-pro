import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export const testimonials = [
  { name: "Priya Mohanty", role: "Homeowner, Patia", text: "Cockroaches were ruining our kitchen. After TDS's gel treatment, we haven't seen a single one in 8 months. Truly worth it.", rating: 5 },
  { name: "Rohit Patnaik", role: "Operations, Café Bay", text: "We needed weekly disinfection during the monsoon. TDS was always on time and the team is super professional. Fantastic service.", rating: 5 },
  { name: "Anjali Das", role: "Mother of two, Jaydev Vihar", text: "What I loved most was the eco-friendly approach — safe for my kids and pets. The mosquito treatment changed our evenings!", rating: 5 },
  { name: "Sourav Mishra", role: "Builder, Bhubaneswar", text: "Pre-construction termite treatment with a 5-year warranty? Nobody else offered that. TDS is now our default partner.", rating: 5 },
  { name: "Dr. Meera Sahu", role: "Clinic Owner", text: "Hospital-grade fogging done right. The team understood the medical-environment requirements perfectly.", rating: 5 },
  { name: "Kunal Behera", role: "IT Manager", text: "Got our 50-seater office sanitised in under 3 hours. Fully transparent pricing, zero hidden fees.", rating: 5 },
];

export const TestimonialsSection = ({ all = false }: { all?: boolean }) => {
  const list = all ? testimonials : testimonials.slice(0, 3);
  return (
    <section className="container py-24">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">Testimonials</p>
        <h2 className="font-display text-4xl md:text-5xl font-extrabold text-primary">
          Loved by <span className="text-gradient">2,500+ clients.</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {list.map((t, i) => (
          <motion.figure
            key={t.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            className="relative p-7 rounded-2xl gradient-card border border-border shadow-soft hover:shadow-elegant transition-all"
          >
            <Quote className="absolute top-5 right-5 h-8 w-8 text-primary/10" />
            <div className="flex items-center gap-1 text-secondary mb-3">
              {[...Array(t.rating)].map((_, k) => <Star key={k} className="h-4 w-4 fill-current" />)}
            </div>
            <blockquote className="text-foreground/90 leading-relaxed mb-5">"{t.text}"</blockquote>
            <figcaption className="flex items-center gap-3">
              <div className="h-11 w-11 rounded-full gradient-accent grid place-items-center text-white font-bold">
                {t.name.charAt(0)}
              </div>
              <div>
                <div className="font-semibold text-primary">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
};
