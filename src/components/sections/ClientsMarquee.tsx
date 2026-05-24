const clients: { name: string; initials: string }[] = [
  { name: "Tata Power", initials: "TP" },
  { name: "Swosti Resorts", initials: "SR" },
  { name: "Deepak Fertilizers", initials: "DF" },
  { name: "SBI", initials: "SBI" },
  { name: "DCB Bank", initials: "DCB" },
  { name: "HDFC Bank", initials: "HDFC" },
  { name: "IOCL", initials: "IOC" },
  { name: "TPSODL", initials: "TPS" },
];

export const ClientsMarquee = () => (
  <section className="py-14 border-y border-border bg-card overflow-hidden">
    <div className="container mb-8 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
        Trusted by leading brands & institutions
      </p>
    </div>
    <div className="relative">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-card to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-card to-transparent z-10" />
      <div className="flex gap-10 animate-marquee-fast whitespace-nowrap">
        {[...clients, ...clients].map((c, i) => (
          <div key={i} className="flex flex-col items-center gap-2 flex-shrink-0 w-28 group">
            <div className="h-20 w-20 rounded-full bg-gradient-to-br from-primary/10 via-card to-accent/10 border border-border shadow-soft grid place-items-center font-display font-extrabold text-primary text-xl group-hover:scale-110 group-hover:shadow-elegant transition-all">
              {c.initials}
            </div>
            <span className="text-xs font-semibold text-muted-foreground group-hover:text-primary transition-colors text-center leading-tight">
              {c.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);
