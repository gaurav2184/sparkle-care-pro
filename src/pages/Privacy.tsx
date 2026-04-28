import { PageLayout } from "@/components/layout/PageLayout";

const Privacy = () => (
  <PageLayout>
    <section className="container py-16 max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">Legal</p>
      <h1 className="font-display text-5xl font-extrabold text-primary mb-6">Privacy Policy</h1>
      <p className="text-muted-foreground mb-8">Last updated: April 2026 — Placeholder content. Replace with your finalised policy.</p>

      {[
        ["Information We Collect", "We collect contact details (name, phone, email, address) when you request a quote or book a service. We may also collect service-related photos for documentation purposes."],
        ["How We Use Your Information", "Your information is used solely to deliver and improve our services, schedule appointments, and contact you regarding your bookings."],
        ["Data Sharing", "We do not sell or rent your personal information. Information is shared only with our service technicians and trusted partners as required to fulfil your service."],
        ["Data Security", "We implement industry-standard safeguards to protect your data. No system is 100% secure, but we continually review our practices."],
        ["Your Rights", "You may request access, correction or deletion of your personal data at any time by emailing hello@tdsdisinfection.in."],
        ["Cookies", "Our website uses minimal cookies for analytics and to remember preferences. You can disable cookies in your browser settings."],
        ["Contact", "Questions? Email us at hello@tdsdisinfection.in or call +91 99999 99999."],
      ].map(([t, b]) => (
        <div key={t} className="mb-6">
          <h2 className="font-display font-bold text-primary text-xl mb-2">{t}</h2>
          <p className="text-muted-foreground leading-relaxed">{b}</p>
        </div>
      ))}
    </section>
  </PageLayout>
);

export default Privacy;
