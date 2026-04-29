const clients = [
  "Tata Power",
  "Swosti Resorts",
  "Deepak Fertilizers",
  "SBI",
  "DCB Bank",
  "HDFC Bank",
  "IOCL",
  "TPSODL",
];

export const ClientsMarquee = () => (
  <section className="py-14 border-y border-border bg-card overflow-hidden">
    <div className="container mb-8 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">Trusted by leading brands & institutions</p>
    </div>
    <div className="relative">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-card to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-card to-transparent z-10" />
      <div className="flex gap-12 animate-marquee whitespace-nowrap">
        {[...clients, ...clients].map((c, i) => (
          <div key={i} className="font-display text-2xl font-bold text-primary/30 hover:text-primary/70 transition-colors flex-shrink-0">
            {c}
          </div>
        ))}
      </div>
    </div>
  </section>
);
