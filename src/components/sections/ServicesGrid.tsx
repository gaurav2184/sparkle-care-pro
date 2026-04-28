import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/services";

export const ServicesGrid = ({ limit }: { limit?: number }) => {
  const list = limit ? services.slice(0, limit) : services;
  return (
    <section className="container py-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">What we do</p>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-primary max-w-2xl">
            End-to-end pest control & disinfection.
          </h2>
        </div>
        <p className="text-muted-foreground max-w-md">
          From termites in your foundation to viruses on your doorknob — TDS handles the unseen so your space stays safe.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {list.map((s, i) => (
          <motion.div
            key={s.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
          >
            <Link
              to="/services"
              className="group block h-full p-6 rounded-2xl gradient-card border border-border hover:border-primary/30 hover:shadow-elegant transition-all duration-500 hover:-translate-y-1"
            >
              <div className="h-12 w-12 rounded-xl gradient-accent grid place-items-center mb-5 group-hover:animate-shield-pulse">
                <s.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-display font-bold text-lg text-primary mb-2 flex items-center justify-between">
                {s.title}
                <ArrowUpRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.blurb}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
