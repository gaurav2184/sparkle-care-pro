import { PageLayout } from "@/components/layout/PageLayout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Are TDS treatments safe for children and pets?", a: "Yes. We use only government-approved, water-based formulations that are odourless and safe for indoor family use. We recommend a 30-minute ventilation period after treatment as a precaution." },
  { q: "What does the 5-year warranty cover?", a: "Our 5-year warranty applies to termite and select disinfection treatments. If pests reappear within the warranty period, we'll re-treat the affected areas at no additional cost." },
  { q: "How long does a typical service take?", a: "Most residential treatments take 45 minutes to 2 hours. Commercial spaces and termite treatments may take longer depending on the area." },
  { q: "Do I need to vacate my home during treatment?", a: "For most general pest control, no. For fumigation or heavy fogging, we recommend stepping out for 2–4 hours. We'll advise based on your specific service." },
  { q: "Which areas do you service?", a: "We currently service Bhubaneswar, Cuttack and surrounding areas of Odisha. Contact us for special service to other locations." },
  { q: "Do you offer AMC (annual maintenance contracts)?", a: "Yes — we offer flexible quarterly and annual maintenance plans for homes, offices, restaurants and institutions." },
  { q: "How do I book a service?", a: "Call us, fill out the Get Quote form, or message us via WhatsApp. We respond within 4 hours." },
  { q: "What is your cancellation policy?", a: "Bookings can be rescheduled or cancelled free of charge up to 12 hours before the scheduled service time." },
];

const FAQs = () => (
  <PageLayout>
    <section className="container py-16 max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">Help Center</p>
      <h1 className="font-display text-5xl font-extrabold text-primary mb-4">Frequently Asked Questions</h1>
      <p className="text-muted-foreground mb-10">Can't find what you're looking for? Reach out to us — we'd love to help.</p>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="border border-border rounded-2xl px-5 bg-card">
            <AccordionTrigger className="text-left font-display font-semibold text-primary hover:no-underline">{f.q}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  </PageLayout>
);

export default FAQs;
