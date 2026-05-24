import { PageLayout } from "@/components/layout/PageLayout";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { blogPosts as posts } from "@/lib/blogs";

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
          <Link to={`/blogs/${p.slug}`} className="block">
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
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                Read article <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </Link>
        </motion.article>
      ))}
    </section>
  </PageLayout>
);

export default Blogs;
