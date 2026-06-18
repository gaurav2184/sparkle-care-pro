import { PageLayout } from "@/components/layout/PageLayout";

const Terms = () => (
  <PageLayout>
    <section className="container py-16 max-w-3xl prose prose-slate">
      <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">Legal</p>
      <h1 className="font-display text-5xl font-extrabold text-primary mb-6">Terms & Conditions</h1>
      <p className="text-muted-foreground mb-8">Last updated: April 2026 — Placeholder content. Replace with your finalised terms.</p>

      {[
        ["1. Acceptance of Terms", "By engaging with Trushna Disinfecting Services (TDS), you agree to abide by the terms and conditions outlined herein."],
        ["2. Service Scope", "Services include pest control, sanitization, disinfection and related treatments as agreed in your service quotation."],
        ["3. Warranty", "Our 5-year warranty applies to specific treatments as detailed in the service contract. Warranty is void if structural changes, water leakage or third-party treatments compromise the original work."],
        ["4. Payment Terms", "Payment is due upon completion of service unless otherwise agreed. We accept cash, UPI, bank transfer and major cards."],
        ["5. Cancellation Policy", "Bookings may be rescheduled or cancelled free of charge up to 12 hours before the scheduled service. Late cancellations may incur a visit charge."],
        ["6. Liability", "TDS is not liable for pre-existing damages, loss of items not mentioned at time of inspection, or issues arising from non-compliance with our post-treatment guidelines."],
        ["7. Modifications", "We reserve the right to update these terms at any time. Continued use of our services constitutes acceptance of the updated terms."],
      ].map(([t, b]) => (
        <div key={t} className="mb-6">
          <h2 className="font-display font-bold text-primary text-xl mb-2">{t}</h2>
          <p className="text-muted-foreground leading-relaxed">{b}</p>
        </div>
      ))}
    </section>
  </PageLayout>
);

export default Terms;
