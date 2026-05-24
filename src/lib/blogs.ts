export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  date: string;
  read: string;
  excerpt: string;
  body: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "5-signs-of-termite-problem",
    title: "5 Signs You Have a Termite Problem (and What to Do)",
    category: "Termites",
    date: "Apr 12, 2026",
    read: "5 min",
    excerpt: "Hollow-sounding wood, mud tubes, discarded wings — here's how to spot termites before they cause real damage.",
    body: [
      "Termites cause more property damage in India than fire and floods combined — and the worst part is that you usually don't see them until the damage is done.",
      "1. Hollow-sounding wood: Tap any wooden surface — doors, frames, furniture. If it sounds hollow, termites may already be inside.",
      "2. Mud tubes: Pencil-thick mud tunnels along your walls or foundation are the highways termites use to travel between soil and wood.",
      "3. Discarded wings: After swarming, reproductive termites shed their wings — you'll find tiny piles near windowsills.",
      "4. Bubbling or peeling paint: Often mistaken for water damage, this can be a sign of termite activity behind the wall.",
      "5. Tight-fitting doors and windows: As termites consume wood, they release moisture that warps frames.",
      "If you spot any of these signs, book a free inspection with TDS today. Our anti-termite treatment comes with a 5-year warranty.",
    ],
  },
  {
    slug: "are-pest-chemicals-safe",
    title: "Are Pest Control Chemicals Safe for Kids and Pets?",
    category: "Safety",
    date: "Mar 28, 2026",
    read: "4 min",
    excerpt: "We break down the modern, water-based formulations TDS uses — and why they're approved for indoor family use.",
    body: [
      "Modern pest control has come a long way from the harsh, smelly chemicals of the 90s. At TDS, every chemical we use is approved by the Central Insecticides Board & Registration Committee (CIB&RC).",
      "Our formulations are water-based, low-odour, and target only the pest's nervous system — humans and mammals process them harmlessly within hours.",
      "For families with infants, pregnant women or pets, we offer fully herbal and food-grade options that allow same-day occupancy.",
    ],
  },
  {
    slug: "cost-of-skipping-disinfection",
    title: "The Real Cost of Skipping Annual Disinfection",
    category: "Disinfection",
    date: "Mar 09, 2026",
    read: "6 min",
    excerpt: "From sick days to insurance claims, we calculate what neglecting workplace sanitization actually costs your business.",
    body: [
      "Indian businesses lose an estimated ₹3,200 per employee per year to preventable absenteeism caused by infectious illness.",
      "Annual professional disinfection cuts that figure by up to 70% — a 10× return on investment for offices, schools and clinics.",
      "TDS offers monthly, quarterly and annual disinfection contracts with full documentation, audit certificates and emergency response.",
    ],
  },
  {
    slug: "mosquito-proofing-monsoon",
    title: "Mosquito-Proofing Your Home Before Monsoon",
    category: "Seasonal",
    date: "Feb 21, 2026",
    read: "5 min",
    excerpt: "Dengue cases spike every July. Here's our 7-step pre-monsoon checklist to keep your family protected.",
    body: [
      "1. Empty all standing water (planters, AC trays, terrace).",
      "2. Cover overhead tanks and sumps.",
      "3. Install mosquito mesh on doors and windows.",
      "4. Apply larvicide to drains and stagnant pools.",
      "5. Use IRS (Indoor Residual Spray) — TDS specialty.",
      "6. Maintain a 30-day fogging schedule throughout monsoon.",
      "7. Educate your housekeeping staff to spot breeding sites.",
    ],
  },
  {
    slug: "bed-bugs-101",
    title: "Bed Bugs 101: Detection, Treatment & Prevention",
    category: "Bed Bugs",
    date: "Feb 02, 2026",
    read: "7 min",
    excerpt: "Bed bugs are back, and they're tougher than ever. Learn what works — and what's a waste of money.",
    body: [
      "Bed bugs are now resistant to most over-the-counter sprays. The only effective approach is a combination of heat-treatment and residual insecticide applied directly to harborage points.",
      "TDS uses a 3-step bed-bug elimination protocol with a 30-day re-treatment guarantee.",
    ],
  },
  {
    slug: "why-cockroaches-come-back",
    title: "Why Cockroaches Always Come Back (And How to Stop Them)",
    category: "Cockroaches",
    date: "Jan 18, 2026",
    read: "5 min",
    excerpt: "Spray-and-pray treatments only kill what you see. Here's how professional gel-baiting eliminates the colony.",
    body: [
      "Visible roaches are only 10% of the infestation. Generic sprays scare the rest deeper into voids.",
      "Professional gel-baits work differently — they're non-repellent, so worker roaches carry the active back to the nest. Within 30 days the entire colony collapses.",
    ],
  },
];