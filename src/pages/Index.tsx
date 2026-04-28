import { PageLayout } from "@/components/layout/PageLayout";
import { Hero } from "@/components/sections/Hero";
import { ClientsMarquee } from "@/components/sections/ClientsMarquee";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { WhyUs } from "@/components/sections/WhyUs";
import { Process } from "@/components/sections/Process";
import { TestimonialsSection } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";

const Index = () => (
  <PageLayout>
    <Hero />
    <ClientsMarquee />
    <ServicesGrid limit={8} />
    <WhyUs />
    <Process />
    <TestimonialsSection />
    <CTA />
  </PageLayout>
);

export default Index;
