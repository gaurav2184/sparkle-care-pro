import { Link, useParams, Navigate } from "react-router-dom";
import { PageLayout } from "@/components/layout/PageLayout";
import { ArrowLeft, Calendar } from "lucide-react";
import { blogPosts } from "@/lib/blogs";
import { CTA } from "@/components/sections/CTA";

const BlogDetail = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return <Navigate to="/blogs" replace />;

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <PageLayout>
      <article className="container py-12 max-w-3xl">
        <Link to="/blogs" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8">
          <ArrowLeft className="h-4 w-4" /> All articles
        </Link>

        <span className="inline-block text-xs font-bold px-3 py-1 rounded-full bg-accent/10 text-accent mb-4">
          {post.category}
        </span>
        <h1 className="font-display text-4xl md:text-5xl font-extrabold text-primary leading-tight mb-4">
          {post.title}
        </h1>
        <div className="flex items-center gap-3 text-sm text-muted-foreground mb-10">
          <Calendar className="h-4 w-4" /> {post.date} · {post.read} read
        </div>

        <div className="aspect-[16/8] gradient-accent rounded-2xl mb-10 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.3),transparent_60%)]" />
        </div>

        <div className="space-y-5 text-lg text-foreground/85 leading-relaxed">
          {post.body.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </article>

      <section className="container pb-16">
        <h3 className="font-display text-2xl font-extrabold text-primary mb-6">Continue reading</h3>
        <div className="grid md:grid-cols-3 gap-5">
          {related.map((p) => (
            <Link key={p.slug} to={`/blogs/${p.slug}`} className="group p-5 rounded-2xl bg-card border border-border hover:shadow-elegant transition-all">
              <span className="text-xs font-bold text-accent">{p.category}</span>
              <h4 className="font-display font-bold text-primary group-hover:text-accent transition-colors mt-2">{p.title}</h4>
            </Link>
          ))}
        </div>
      </section>

      <CTA />
    </PageLayout>
  );
};

export default BlogDetail;