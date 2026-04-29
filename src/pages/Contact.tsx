import { useState } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { z } from "zod";

const schema = z.object({
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().regex(/^[+\d\s\-()]{7,20}$/, "Invalid phone number"),
  message: z.string().trim().min(10, "Tell us a bit more (min 10 chars)").max(1000),
});

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach(i => { errs[i.path[0] as string] = i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Message sent!", description: "We'll get back to you within 4 hours." });
      setForm({ email: "", phone: "", message: "" });
    }, 800);
  };

  return (
    <PageLayout>
      <section className="container py-16 grid lg:grid-cols-2 gap-12">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">Get in touch</p>
          <h1 className="font-display text-5xl md:text-6xl font-extrabold text-primary mb-5">
            Let's keep your space <span className="text-gradient">spotless.</span>
          </h1>
          <p className="text-muted-foreground text-lg mb-10">
            Reach out for quotes, AMC plans, or any questions. We respond within 4 hours.
          </p>

          <div className="space-y-5">
            {[
              { Icon: Phone, label: "Phone", val: "+91 73812 14444" },
              { Icon: Mail, label: "Email", val: "trushnaventures@gmail.com" },
              { Icon: MapPin, label: "Location", val: "Berhampur, Odisha, India" },
              { Icon: Clock, label: "Hours", val: "Mon–Sat, 8 AM – 8 PM" },
            ].map(({ Icon, label, val }) => (
              <div key={label} className="flex items-start gap-4 p-4 rounded-2xl bg-card border border-border">
                <div className="h-11 w-11 rounded-xl gradient-accent grid place-items-center shrink-0">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
                  <div className="font-semibold text-primary">{val}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={submit} className="p-8 rounded-3xl gradient-card border border-border shadow-elegant space-y-5 h-fit">
          <h2 className="font-display text-2xl font-extrabold text-primary mb-2">Send us a message</h2>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" maxLength={255} value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="you@example.com" />
            {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
          </div>

          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" type="tel" maxLength={20} value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} placeholder="+91 99999 99999" />
            {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}
          </div>

          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" rows={5} maxLength={1000} value={form.message} onChange={e => setForm({...form, message: e.target.value})} placeholder="How can we help?" />
            {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
          </div>

          <Button type="submit" variant="hero" size="lg" className="w-full" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </section>
    </PageLayout>
  );
};

export default Contact;
