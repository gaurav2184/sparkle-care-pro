import { PageLayout } from "@/components/layout/PageLayout";
import { TestimonialsSection } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";

const Testimonials = () => (
  <PageLayout>
    <section className="container py-16 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">Testimonials</p>
      <h1 className="font-display text-5xl md:text-6xl font-extrabold text-primary">Real stories. Real protection.</h1>
      <p className="text-muted-foreground mt-5 max-w-2xl mx-auto text-lg">
        2,500+ homes and businesses trust TDS to keep their spaces safe.
      </p>
    </section>
    <TestimonialsSection all />
    <CTA />
  </PageLayout>
);

export default Testimonials;
