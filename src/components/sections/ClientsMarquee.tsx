import tataPower from "@/assets/clients/tata-power.png";
import swosti from "@/assets/clients/swosti.png";
import deepak from "@/assets/clients/deepak-fertilizers.jpg";
import sbi from "@/assets/clients/sbi.jpg";
import dcb from "@/assets/clients/dcb-bank.png";
import hdfc from "@/assets/clients/hdfc.png";
import iocl from "@/assets/clients/iocl.png";
import tpsodl from "@/assets/clients/tpsodl.jpg";

const clients: { name: string; logo: string }[] = [
  { name: "Tata Power", logo: tataPower },
  { name: "Swosti Resorts", logo: swosti },
  { name: "Deepak Fertilizers", logo: deepak },
  { name: "SBI", logo: sbi },
  { name: "DCB Bank", logo: dcb },
  { name: "HDFC Bank", logo: hdfc },
  { name: "IOCL", logo: iocl },
  { name: "TPSODL", logo: tpsodl },
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
          <div key={i} className="flex flex-col items-center gap-2 flex-shrink-0 w-32 group">
            <div className="h-24 w-24 rounded-full bg-white border border-border shadow-soft grid place-items-center p-3 group-hover:scale-110 group-hover:shadow-elegant transition-all">
              <img
                src={c.logo}
                alt={`${c.name} logo`}
                loading="lazy"
                className="max-h-full max-w-full object-contain"
              />
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
