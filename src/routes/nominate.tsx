import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { ArrowLeft, ArrowRight, Check, Save, UploadCloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const title = "Submit a Nomination | ICCK Business Awards 2026";
const description =
  "Complete the three-step ICCK Business Awards 2026 nomination: company details, award category, and executive summary.";

export const Route = createFileRoute("/nominate")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: NominatePage,
});

const STORAGE_KEY = "icck-nomination-draft";

const categories = [
  "Company of the Year",
  "Trade & Investment Excellence",
  "Manufacturing & Engineering",
  "Technology & Innovation",
  "Startup of the Year",
  "Sustainability & ESG",
  "People & Culture",
  "Community Impact",
  "Woman Business Leader",
];

type FormState = {
  company: string;
  registration: string;
  website: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  employees: string;
  category: string;
  summary: string;
  impact: string;
  bilateral: string;
  logoName: string;
};

const empty: FormState = {
  company: "",
  registration: "",
  website: "",
  contactName: "",
  contactEmail: "",
  contactPhone: "",
  employees: "",
  category: "",
  summary: "",
  impact: "",
  bilateral: "",
  logoName: "",
};

const steps = ["Company Details", "Category Selection", "Executive Summary"];

function wordCount(v: string) {
  return v.trim() ? v.trim().split(/\s+/).length : 0;
}

function NominatePage() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormState>(empty);
  const [savedAt, setSavedAt] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef(form);
  formRef.current = form;

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      try {
        setForm({ ...empty, ...(JSON.parse(raw) as Partial<FormState>) });
        toast.info("Restored your saved draft.");
      } catch {
        /* ignore corrupt draft */
      }
    }
  }, []);

  // Auto-save every 60 seconds
  useEffect(() => {
    const id = setInterval(() => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(formRef.current));
      setSavedAt(new Date().toLocaleTimeString());
    }, 60_000);
    return () => clearInterval(id);
  }, []);

  const set = (k: keyof FormState) => (v: string) => setForm((f) => ({ ...f, [k]: v }));

  const saveDraft = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(form));
    setSavedAt(new Date().toLocaleTimeString());
    toast.success("Draft saved locally.");
  };

  if (submitted) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gradient-navy px-4">
        <div className="max-w-md rounded-xl border border-gold/40 bg-navy p-8 text-center shadow-elegant">
          <Check className="mx-auto h-10 w-10 text-gold" />
          <h1 className="mt-4 font-display text-2xl font-bold uppercase tracking-wide text-gradient-gold">
            Nomination received
          </h1>
          <p className="mt-3 text-sm text-primary-foreground/80">
            Thank you, {form.company || "nominee"}. Our secretariat will confirm your submission by
            email.
          </p>
          <Button asChild className="mt-6 bg-gradient-gold text-gold-foreground hover:opacity-90">
            <Link to="/awards">Back to Business Awards</Link>
          </Button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-navy px-4 py-12">
      <div className="mx-auto max-w-3xl">
        <Link
          to="/awards"
          className="inline-flex items-center gap-2 text-sm text-gold hover:text-gold-light"
        >
          <ArrowLeft className="h-4 w-4" /> Business Awards
        </Link>

        <h1 className="mt-6 font-display text-3xl font-bold uppercase tracking-wide text-gradient-gold">
          Nomination Form
        </h1>

        <ol className="mt-6 flex flex-wrap gap-3">
          {steps.map((s, i) => (
            <li
              key={s}
              className={`flex items-center gap-2 rounded-md border px-3 py-2 text-xs font-semibold uppercase tracking-wide ${
                i === step
                  ? "border-gold bg-gold/15 text-gold"
                  : "border-gold/25 text-primary-foreground/60"
              }`}
            >
              <span className="font-display">{i + 1}</span> {s}
            </li>
          ))}
        </ol>

        <section className="mt-6 space-y-5 rounded-xl border border-gold/25 bg-navy p-6 shadow-elegant">
          {step === 0 && (
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Company name" value={form.company} onChange={set("company")} />
              <Field
                label="Business registration no."
                value={form.registration}
                onChange={set("registration")}
              />
              <Field label="Website" value={form.website} onChange={set("website")} />
              <Field label="Employees" value={form.employees} onChange={set("employees")} />
              <Field label="Contact person" value={form.contactName} onChange={set("contactName")} />
              <Field
                label="Contact email"
                type="email"
                value={form.contactEmail}
                onChange={set("contactEmail")}
              />
              <Field label="Phone" value={form.contactPhone} onChange={set("contactPhone")} />
              <div className="sm:col-span-2">
                <Label className="text-primary-foreground/80">Company logo</Label>
                <label className="mt-2 flex cursor-pointer flex-col items-center gap-2 rounded-lg border border-dashed border-gold/40 bg-navy-light/30 px-6 py-8 text-center transition hover:border-gold">
                  <UploadCloud className="h-7 w-7 text-gold" />
                  <span className="text-sm text-primary-foreground/80">
                    {form.logoName || "Drop a PNG/SVG here or click to browse (mock upload)"}
                  </span>
                  <input
                    type="file"
                    className="hidden"
                    onChange={(e) => set("logoName")(e.target.files?.[0]?.name ?? "")}
                  />
                </label>
              </div>
            </div>
          )}

          {step === 1 && (
            <div className="grid gap-3 sm:grid-cols-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => set("category")(c)}
                  className={`rounded-lg border px-4 py-3 text-left text-sm transition ${
                    form.category === c
                      ? "border-gold bg-gold/15 text-gold"
                      : "border-gold/25 text-primary-foreground/85 hover:border-gold/60"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <WordArea
                label="Executive summary"
                value={form.summary}
                onChange={set("summary")}
                hint="Describe your company and why it deserves recognition."
              />
              <WordArea
                label="Business impact & results"
                value={form.impact}
                onChange={set("impact")}
                hint="Include measurable outcomes from the last 24 months."
              />
              <WordArea
                label="Contribution to India–Korea relations"
                value={form.bilateral}
                onChange={set("bilateral")}
                hint="Trade, investment, jobs, culture or community."
              />
            </div>
          )}
        </section>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Button
            variant="outline"
            className="border-gold/50 bg-transparent text-gold hover:bg-gold/10 hover:text-gold"
            onClick={() => setStep((s) => Math.max(0, s - 1))}
            disabled={step === 0}
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back
          </Button>

          {step < steps.length - 1 ? (
            <Button
              className="bg-gradient-gold text-gold-foreground hover:opacity-90"
              onClick={() => setStep((s) => s + 1)}
            >
              Next <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <Button
              className="bg-gradient-gold text-gold-foreground hover:opacity-90"
              onClick={() => {
                localStorage.setItem(STORAGE_KEY, JSON.stringify(form));
                setSubmitted(true);
              }}
            >
              Submit nomination
            </Button>
          )}

          <Button
            variant="ghost"
            className="text-gold hover:bg-gold/10 hover:text-gold"
            onClick={saveDraft}
          >
            <Save className="mr-2 h-4 w-4" /> Save draft
          </Button>

          <span className="text-xs text-primary-foreground/60">
            {savedAt ? `Draft saved at ${savedAt}` : "Auto-saves every 60 seconds"}
          </span>
        </div>
      </div>
    </main>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
}) {
  return (
    <div>
      <Label className="text-primary-foreground/80">{label}</Label>
      <Input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 border-gold/30 bg-navy-light/30 text-primary-foreground placeholder:text-primary-foreground/40"
      />
    </div>
  );
}

function WordArea({
  label,
  value,
  onChange,
  hint,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  hint: string;
}) {
  const words = wordCount(value);
  const over = words > 300;
  return (
    <div>
      <div className="flex items-baseline justify-between gap-3">
        <Label className="text-primary-foreground/80">{label}</Label>
        <span className={`text-xs ${over ? "text-destructive" : "text-primary-foreground/60"}`}>
          {words}/300 words &middot; {value.length} chars
        </span>
      </div>
      <Textarea
        rows={6}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={hint}
        className="mt-2 border-gold/30 bg-navy-light/30 text-primary-foreground placeholder:text-primary-foreground/40"
      />
      {over && <p className="mt-1 text-xs text-destructive">Please trim to 300 words or fewer.</p>}
    </div>
  );
}
