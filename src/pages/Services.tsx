import { PageLayout } from "@/components/layout/PageLayout";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { Process } from "@/components/sections/Process";
import { CTA } from "@/components/sections/CTA";
import residential from "@/assets/service-residential.jpg";
import commercial from "@/assets/service-commercial.jpg";

const Services = () => (
  <PageLayout>
    <section className="container py-16 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">Our Services</p>
      <h1 className="font-display text-5xl md:text-6xl font-extrabold text-primary max-w-3xl mx-auto">
        Complete protection, <span className="text-gradient">delivered with care.</span>
      </h1>
      <p className="text-muted-foreground mt-5 max-w-2xl mx-auto text-lg">
        Residential & commercial pest control plus hospital-grade disinfection — every service backed by our 5-year warranty.
      </p>
    </section>

    <ServicesGrid />

    <section className="container py-20 grid lg:grid-cols-2 gap-8">
      {[{ img: residential, title: "Residential", desc: "Homes, apartments, villas — safe for kids & pets." }, { img: commercial, title: "Commercial", desc: "Offices, restaurants, hotels, hospitals & schools." }].map((c) => (
        <div key={c.title} className="group relative rounded-[2rem] overflow-hidden aspect-[4/3] shadow-elegant">
          <img src={c.img} alt={c.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
          <div className="absolute bottom-0 p-8 text-primary-foreground">
            <h3 className="font-display text-3xl font-extrabold mb-1">{c.title}</h3>
            <p className="opacity-90">{c.desc}</p>
          </div>
        </div>
      ))}
    </section>

    <Process />
    <CTA />
  </PageLayout>
);

export default Services;
