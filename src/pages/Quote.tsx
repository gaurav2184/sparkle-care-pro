import { useState } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { ShieldCheck, Sparkles, BadgeCheck, ChevronDown, X } from "lucide-react";
import { services } from "@/lib/services";
import { z } from "zod";
import { submitToBackends } from "@/lib/config";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

const OTHER = "__other__";

const schema = z.object({
  name: z.string().trim().min(2, "Name required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().regex(/^[+\d\s\-()]{7,20}$/, "Invalid phone"),
  services: z.array(z.string()).min(1, "Please select at least one service").max(10),
  area: z.coerce.number().min(50, "Min 50 sqft").max(1000000, "Too large"),
  address: z.string().trim().min(3, "Address required").max(200),
  city: z.string().trim().min(2, "City required").max(80),
  date: z.string().min(1, "Pick a date"),
  otherService: z.string().trim().max(200).optional(),
  message: z.string().trim().max(500).optional(),
});

type FormState = {
  name: string; email: string; phone: string; services: string[]; area: string; address: string; city: string; date: string; otherService: string; message: string;
};

const Quote = () => {
  const { toast } = useToast();
  const [form, setForm] = useState<FormState>({
    name: "", email: "", phone: "", services: [], area: "", address: "", city: "", date: "", otherService: "", message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const toggleService = (slug: string) => {
    setForm((f) => ({
      ...f,
      services: f.services.includes(slug) ? f.services.filter((s) => s !== slug) : [...f.services, slug],
    }));
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach((i) => { errs[i.path[0] as string] = i.message; });
      setErrors(errs);
      return;
    }
    if (form.services.includes(OTHER) && !form.otherService.trim()) {
      setErrors({ otherService: "Please describe the service you need" });
      return;
    }
    setErrors({});
    setLoading(true);
    const serviceNames = form.services
      .map((s) => (s === OTHER ? "Other" : services.find((x) => x.slug === s)?.title || s))
      .join(", ");
    await submitToBackends(
      {
        name: form.name,
        email: form.email,
        phone: form.phone,
        services: serviceNames,
        otherService: form.otherService,
        address: form.address,
        city: form.city,
        date: form.date,
        area: form.area,
        message: form.message,
      },
      "quote",
    );
    setLoading(false);
    toast({ title: "Quote requested!", description: "We'll call you within 4 hours with a free, custom estimate." });
    setForm({ name: "", email: "", phone: "", services: [], area: "", address: "", city: "", date: "", otherService: "", message: "" });
  };

  return (
    <PageLayout>
      <section className="container py-16 grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full gradient-accent text-white text-xs font-bold mb-4 shadow-soft">
            <ShieldCheck className="h-3.5 w-3.5" /> Free Quote & On-Site Visit
          </div>
          <h1 className="font-display text-5xl font-extrabold text-primary mb-5">
            Get your <span className="text-gradient">free quote</span> in 2 minutes.
          </h1>
          <p className="text-muted-foreground text-lg mb-8">
            Tell us about your space — we'll respond with a custom, no-obligation estimate within 4 hours. Available across Odisha.
          </p>

          <ul className="space-y-3">
            {[
              { Icon: ShieldCheck, t: "5-Year Warranty", d: "On our Anti-Termite Treatment" },
              { Icon: BadgeCheck, t: "ISO Certified Team", d: "Trained, background-verified technicians" },
              { Icon: Sparkles, t: "Eco-Friendly Chemicals", d: "Safe for kids & pets" },
            ].map(({Icon, t, d}) => (
              <li key={t} className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-xl gradient-accent grid place-items-center shrink-0">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-primary">{t}</div>
                  <div className="text-sm text-muted-foreground">{d}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <form onSubmit={submit} className="lg:col-span-3 p-8 rounded-3xl gradient-card border border-border shadow-elegant space-y-5">
          <h2 className="font-display text-2xl font-extrabold text-primary">Tell us about your space</h2>

           <div className="grid sm:grid-cols-2 gap-5">
             <div>
               <Label htmlFor="name">Full name</Label>
               <Input id="name" maxLength={100} value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="Your name" />
               {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
             </div>
             <div>
               <Label htmlFor="email">Email</Label>
               <Input id="email" type="email" maxLength={255} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" />
               {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
             </div>
           </div>

           <div>
             <Label htmlFor="phone">Phone</Label>
             <Input id="phone" type="tel" maxLength={20} value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} placeholder="+91 99999 99999" />
             {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}
           </div>

           <div>
             <Label>Services interested in</Label>
             <Popover>
               <PopoverTrigger asChild>
                 <button
                   type="button"
                   className={cn(
                     "mt-2 flex min-h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm text-left ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring",
                   )}
                 >
                   <span className="flex flex-wrap gap-1.5">
                     {form.services.length === 0 ? (
                       <span className="text-muted-foreground">Select one or more services</span>
                     ) : (
                       form.services.map((slug) => {
                         const label = slug === OTHER ? "Other" : services.find((x) => x.slug === slug)?.title;
                         return (
                           <span
                             key={slug}
                             className="inline-flex items-center gap-1 rounded-full bg-primary/10 text-primary px-2 py-0.5 text-xs font-medium"
                           >
                             {label}
                             <X
                               className="h-3 w-3 cursor-pointer hover:text-destructive"
                               onClick={(e) => {
                                 e.stopPropagation();
                                 toggleService(slug);
                               }}
                             />
                           </span>
                         );
                       })
                     )}
                   </span>
                   <ChevronDown className="h-4 w-4 opacity-50 shrink-0 ml-2" />
                 </button>
               </PopoverTrigger>
               <PopoverContent className="w-[--radix-popover-trigger-width] p-2 max-h-72 overflow-auto" align="start">
                 {services.map((s) => {
                   const checked = form.services.includes(s.slug);
                   return (
                     <label key={s.slug} className="flex items-center gap-2 rounded-md px-2 py-2 text-sm hover:bg-accent cursor-pointer">
                       <Checkbox checked={checked} onCheckedChange={() => toggleService(s.slug)} />
                       <span>{s.title}</span>
                     </label>
                   );
                 })}
                 <label className="flex items-center gap-2 rounded-md px-2 py-2 text-sm hover:bg-accent cursor-pointer border-t border-border mt-1">
                   <Checkbox checked={form.services.includes(OTHER)} onCheckedChange={() => toggleService(OTHER)} />
                   <span>Other (specify below)</span>
                 </label>
               </PopoverContent>
             </Popover>
             {errors.services && <p className="text-xs text-destructive mt-1">{errors.services}</p>}
           </div>

           {form.services.includes(OTHER) && (
             <div>
               <Label htmlFor="otherService">Describe your service</Label>
               <Input
                 id="otherService"
                 maxLength={200}
                 value={form.otherService}
                 onChange={(e) => setForm({ ...form, otherService: e.target.value })}
                 placeholder="e.g. Bee removal, wasp nest treatment…"
               />
               {errors.otherService && <p className="text-xs text-destructive mt-1">{errors.otherService}</p>}
             </div>
           )}

          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <Label htmlFor="area">Approx area (sqft)</Label>
              <Input id="area" type="number" min={50} value={form.area} onChange={e => setForm({...form, area: e.target.value})} placeholder="e.g. 1200" />
              {errors.area && <p className="text-xs text-destructive mt-1">{errors.area}</p>}
            </div>
            <div>
              <Label htmlFor="date">Preferred date</Label>
              <Input id="date" type="date" min={new Date().toISOString().split("T")[0]} value={form.date} onChange={e => setForm({...form, date: e.target.value})} />
              {errors.date && <p className="text-xs text-destructive mt-1">{errors.date}</p>}
            </div>
          </div>

          <div>
            <Label htmlFor="address">Address</Label>
            <Input id="address" maxLength={200} value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} placeholder="Building, street, landmark" />
            {errors.address && <p className="text-xs text-destructive mt-1">{errors.address}</p>}
          </div>
           <div>
             <Label htmlFor="city">City</Label>
             <Input id="city" maxLength={80} value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} placeholder="City" />
             {errors.city && <p className="text-xs text-destructive mt-1">{errors.city}</p>}
           </div>

            <div>
              <Label htmlFor="message">Special Instructions</Label>
              <Textarea id="message" rows={3} maxLength={500} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Any special requirements or instructions for our team?" />
              {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
            </div>

           <Button type="submit" variant="hero" size="lg" className="w-full" disabled={loading}>
             {loading ? "Submitting..." : "Get My Free Quote & Site Visit"}
           </Button>
        </form>
      </section>
    </PageLayout>
  );
};

export default Quote;
