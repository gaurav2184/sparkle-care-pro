import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowRight, HelpCircle } from "lucide-react";

const faqs = [
  { q: "Are TDS treatments safe for children and pets?", a: "Yes. We use only government-approved, water-based formulations that are odourless and safe for indoor family use. We recommend a 30-minute ventilation period after treatment as a precaution." },
  { q: "What does the 5-year warranty cover?", a: "Our 5-year warranty applies to termite and select disinfection treatments. If pests reappear within the warranty period, we'll re-treat the affected areas at no additional cost." },
  { q: "How long does a typical service take?", a: "Most residential treatments take 45 minutes to 2 hours. Commercial spaces and termite treatments may take longer depending on the area." },
  { q: "Do I need to vacate my home during treatment?", a: "For most general pest control, no. For fumigation or heavy fogging, we recommend stepping out for 2–4 hours. We'll advise based on your specific service." },
  { q: "Which areas do you service?", a: "We service all major cities and districts across Odisha — Berhampur, Bhubaneswar, Cuttack, Rourkela, Sambalpur, Puri and more. Contact us for any specific location." },
];

export const FAQSection = () => (
  <section className="container py-24 grid lg:grid-cols-5 gap-12">
    <motion.div
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
      className="lg:col-span-2"
    >
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-semibold mb-4">
        <HelpCircle className="h-3.5 w-3.5" /> FAQs
      </div>
      <h2 className="font-display text-4xl md:text-5xl font-extrabold text-primary mb-5 leading-tight">
        Got questions? <span className="text-gradient">We've got answers.</span>
      </h2>
      <p className="text-muted-foreground mb-8 leading-relaxed">
        Quick answers to the things our customers ask most. Can't find what you're looking for? Reach out — we love a good chat.
      </p>
      <Button asChild variant="outline" size="lg">
        <Link to="/faqs">View all FAQs <ArrowRight className="h-4 w-4" /></Link>
      </Button>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
      className="lg:col-span-3"
    >
      <Accordion type="single" collapsible defaultValue="faq-0" className="space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-2xl px-5 bg-card hover:shadow-soft transition-shadow">
            <AccordionTrigger className="text-left font-display font-semibold text-primary hover:no-underline">{f.q}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </motion.div>
  </section>
);
