import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowLeft, Printer, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import icckLogo from "@/assets/logo.svg";

const title = "Registration & Invoice | ICCK Diwali Celebrations 2026";
const description =
  "Register as an individual guest, book a table, or add a sponsorship package and generate a printable ICCK invoice instantly.";

export const Route = createFileRoute("/register")({
  validateSearch: (search: Record<string, unknown>) => ({
    preset:
      search["preset"] === "bundle" || search["preset"] === "ball"
        ? (search["preset"] as "bundle" | "ball")
        : undefined,
  }),

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
  component: RegisterPage,
});

const VAT_RATE = 0.1;

const individualOptions = [
  { id: "ball", label: "Diwali Ball seat", price: 100 },
  { id: "awards", label: "Business Awards seat", price: 125 },
  { id: "bundle", label: "Bundle (both events, save 15%)", price: 190 },
] as const;

const tableOptions = [
  { id: "table10", label: "Table of 10 — standard", price: 900 },
  { id: "table10p", label: "Table of 10 — premium (stage side)", price: 1200 },
] as const;

const sponsorOptions = [
  { id: "gold", label: "Gold sponsorship", price: 3000 },
  { id: "platinum", label: "Platinum sponsorship", price: 6000 },
  { id: "title", label: "Title sponsorship", price: 10000 },
] as const;

type Line = { label: string; qty: number; unit: number };

function RegisterPage() {
  const { preset } = Route.useSearch();

  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [individual, setIndividual] = useState<string | null>(preset ?? null);
  const [individualQty, setIndividualQty] = useState(1);
  const [table, setTable] = useState<string | null>(null);
  const [tableQty, setTableQty] = useState(1);
  const [sponsorship, setSponsorship] = useState<string | null>(null);
  const [issued, setIssued] = useState<{ number: string; date: string } | null>(null);

  const lines = useMemo<Line[]>(() => {
    const out: Line[] = [];
    const ind = individualOptions.find((o) => o.id === individual);
    if (ind) out.push({ label: ind.label, qty: individualQty, unit: ind.price });
    const tab = tableOptions.find((o) => o.id === table);
    if (tab) out.push({ label: tab.label, qty: tableQty, unit: tab.price });
    const sp = sponsorOptions.find((o) => o.id === sponsorship);
    if (sp) out.push({ label: sp.label, qty: 1, unit: sp.price });
    return out;
  }, [individual, individualQty, table, tableQty, sponsorship]);

  const subtotal = lines.reduce((s, l) => s + l.qty * l.unit, 0);
  const vat = Math.round(subtotal * VAT_RATE * 100) / 100;
  const total = subtotal + vat;

  const generate = () => {
    setIssued({
      number: `ICCK-2026-${Math.floor(1000 + Math.random() * 9000)}`,
      date: new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
    });
  };

  const reset = () => setIssued(null);

  /* ─── PHASE 2: Full-screen invoice (form is gone) ─── */
  if (issued) {
    return (
      <main className="min-h-screen bg-gradient-navy px-4 py-10 print:bg-white print:p-0">
        {/* Action bar — hidden when printing */}
        <div className="mx-auto mb-6 flex max-w-3xl items-center justify-between print:hidden">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 rounded-md border border-gold/40 bg-transparent px-4 py-2 text-sm text-gold transition hover:bg-gold/10"
          >
            <RotateCcw className="h-4 w-4" />
            Edit / Start over
          </button>

          <Button
            className="bg-gradient-gold text-gold-foreground hover:opacity-90"
            onClick={() => window.print()}
          >
            <Printer className="mr-2 h-4 w-4" />
            Download / Print PDF
          </Button>
        </div>

        {/* Invoice panel — full width */}
        <div className="mx-auto max-w-3xl rounded-xl border border-slate-200 bg-white p-8 text-slate-900 shadow-elegant print:border-0 print:shadow-none print:rounded-none print:max-w-none">
          {/* Header */}
          <header className="flex items-start justify-between gap-4 border-b border-slate-200 pb-6">
            <img src={icckLogo} alt="ICCK" width={940} height={347} className="h-10 w-auto" />
            <div className="text-right text-xs">
              <p className="font-display text-lg font-bold uppercase tracking-wide text-slate-800">
                Invoice
              </p>
              <p className="mt-0.5 text-slate-500">No. {issued.number}</p>
              <p className="text-slate-500">Date: {issued.date}</p>
            </div>
          </header>

          {/* Billing info */}
          <div className="grid gap-6 py-6 text-sm sm:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Billed to
              </p>
              <p className="mt-1.5 font-semibold text-slate-800">{name}</p>
              {company && <p className="text-slate-600">{company}</p>}
              <p className="text-slate-600">{email}</p>
              {phone && <p className="text-slate-600">{phone}</p>}
            </div>
            <div className="sm:text-right">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">From</p>
              <p className="mt-1.5 font-semibold text-slate-800">
                Indian Chamber of Commerce in Korea
              </p>
              <p className="text-slate-600">Seoul, Republic of Korea</p>
              <p className="text-slate-600">awards@icck.or.kr</p>
            </div>
          </div>

          {/* Line items */}
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-y border-slate-200 text-left text-xs uppercase tracking-wide text-slate-400">
                <th className="py-3 pr-4">Description</th>
                <th className="py-3 text-center w-16">Qty</th>
                <th className="py-3 text-right w-24">Unit price</th>
                <th className="py-3 text-right w-24">Amount</th>
              </tr>
            </thead>
            <tbody>
              {lines.map((l) => (
                <tr key={l.label} className="border-b border-slate-100">
                  <td className="py-3 pr-4 font-medium text-slate-800">{l.label}</td>
                  <td className="py-3 text-center text-slate-600">{l.qty}</td>
                  <td className="py-3 text-right text-slate-600">${l.unit.toLocaleString()}</td>
                  <td className="py-3 text-right font-semibold text-slate-800">
                    ${(l.qty * l.unit).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Totals */}
          <dl className="ml-auto mt-4 w-64 space-y-1.5 text-sm">
            <div className="flex justify-between text-slate-600">
              <dt>Subtotal</dt>
              <dd>${subtotal.toLocaleString()}</dd>
            </div>
            <div className="flex justify-between text-slate-600">
              <dt>VAT (10%)</dt>
              <dd>${vat.toLocaleString()}</dd>
            </div>
            <div className="flex justify-between border-t border-slate-300 pt-2 text-base font-bold text-slate-900">
              <dt>Total due</dt>
              <dd>${total.toLocaleString()}</dd>
            </div>
          </dl>

          {/* Footer note */}
          <p className="mt-8 border-t border-slate-200 pt-4 text-[11px] text-slate-400">
            Payment due within 14 days of invoice date. This document was generated in-browser for
            demonstration purposes. Please contact awards@icck.or.kr to confirm your registration.
          </p>
        </div>

        {/* Print-only styles */}
        <style>{`
          @media print {
            @page { margin: 1.5cm; }
          }
        `}</style>
      </main>
    );
  }

  /* ─── PHASE 1: Registration form + live preview ─── */
  return (
    <main className="min-h-screen bg-gradient-navy px-4 py-12">
      <div className="mx-auto max-w-5xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-gold hover:text-gold-light"
        >
          <ArrowLeft className="h-4 w-4" /> All events
        </Link>

        <h1 className="mt-6 font-display text-3xl font-bold uppercase tracking-wide text-gradient-gold">
          Registration &amp; Checkout
        </h1>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          {/* Left: form */}
          <section className="space-y-6 rounded-xl border border-gold/25 bg-navy p-6 shadow-elegant">
            <div className="grid gap-4 sm:grid-cols-2">
              <TextField label="Full name" value={name} onChange={setName} />
              <TextField label="Company" value={company} onChange={setCompany} />
              <TextField label="Email" value={email} onChange={setEmail} type="email" />
              <TextField label="Phone" value={phone} onChange={setPhone} type="tel" />
            </div>

            <Group
              heading="Individual registration"
              options={individualOptions}
              selected={individual}
              onSelect={(id) => setIndividual(id === individual ? null : id)}
              qty={individualQty}
              onQty={setIndividualQty}
            />
            <Group
              heading="Table booking"
              options={tableOptions}
              selected={table}
              onSelect={(id) => setTable(id === table ? null : id)}
              qty={tableQty}
              onQty={setTableQty}
            />
            <Group
              heading="Sponsorship package"
              options={sponsorOptions}
              selected={sponsorship}
              onSelect={(id) => setSponsorship(id === sponsorship ? null : id)}
            />

            {table && sponsorship && (
              <p className="rounded-md border border-gold/40 bg-gold/10 px-4 py-3 text-sm text-gold">
                Table booking and sponsorship are aggregated into a single order and invoice.
              </p>
            )}

            <Button
              className="w-full bg-gradient-gold text-gold-foreground hover:opacity-90"
              disabled={lines.length === 0 || !name || !email}
              onClick={generate}
            >
              Generate invoice &amp; confirm registration
            </Button>
          </section>

          {/* Right: live order summary */}
          <aside>
            <div className="rounded-xl border border-gold/30 bg-white p-6 text-slate-900 shadow-elegant">
              <header className="flex items-start justify-between gap-4 border-b border-slate-200 pb-4">
                <img src={icckLogo} alt="ICCK" width={940} height={347} className="h-8 w-auto" />
                <div className="text-right text-xs">
                  <p className="font-display text-base font-bold uppercase tracking-wide">
                    Order Preview
                  </p>
                  <p className="text-slate-400">Invoice generated on submit</p>
                </div>
              </header>

              <div className="grid gap-4 py-4 text-xs sm:grid-cols-2">
                <div>
                  <p className="font-semibold uppercase tracking-wide text-slate-500">Billed to</p>
                  <p className="mt-1 font-medium">{name || "—"}</p>
                  <p>{company || "—"}</p>
                  <p>{email || "—"}</p>
                  {phone && <p>{phone}</p>}
                </div>
                <div className="sm:text-right">
                  <p className="font-semibold uppercase tracking-wide text-slate-500">From</p>
                  <p className="mt-1 font-medium">Indian Chamber of Commerce in Korea</p>
                  <p>Seoul, Republic of Korea</p>
                  <p>awards@icck.or.kr</p>
                </div>
              </div>

              <table className="w-full text-xs">
                <thead className="border-y border-slate-200 text-left uppercase tracking-wide text-slate-500">
                  <tr>
                    <th className="py-2">Description</th>
                    <th className="py-2 text-center">Qty</th>
                    <th className="py-2 text-right">Unit</th>
                    <th className="py-2 text-right">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {lines.length === 0 && (
                    <tr>
                      <td colSpan={4} className="py-6 text-center text-slate-400">
                        Select at least one item to preview your order.
                      </td>
                    </tr>
                  )}
                  {lines.map((l) => (
                    <tr key={l.label} className="border-b border-slate-100">
                      <td className="py-2">{l.label}</td>
                      <td className="py-2 text-center">{l.qty}</td>
                      <td className="py-2 text-right">${l.unit.toLocaleString()}</td>
                      <td className="py-2 text-right">${(l.qty * l.unit).toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <dl className="mt-4 space-y-1 text-xs">
                <div className="flex justify-between text-slate-500">
                  <dt>Subtotal</dt>
                  <dd>${subtotal.toLocaleString()}</dd>
                </div>
                <div className="flex justify-between text-slate-500">
                  <dt>VAT (10%)</dt>
                  <dd>${vat.toLocaleString()}</dd>
                </div>
                <div className="flex justify-between border-t border-slate-300 pt-2 font-display text-base font-bold">
                  <dt>Total due</dt>
                  <dd>${total.toLocaleString()}</dd>
                </div>
              </dl>

              <p className="mt-4 border-t border-slate-200 pt-3 text-[10px] text-slate-500">
                Payment due within 14 days. This is a demo invoice generated in-browser.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

function TextField({
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
        className="mt-2 border-gold/30 bg-navy-light/30 text-primary-foreground"
      />
    </div>
  );
}

function Group({
  heading,
  options,
  selected,
  onSelect,
  qty,
  onQty,
}: {
  heading: string;
  options: readonly { id: string; label: string; price: number }[];
  selected: string | null;
  onSelect: (id: string) => void;
  qty?: number;
  onQty?: (n: number) => void;
}) {
  return (
    <div>
      <h2 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-gold">
        {heading}
      </h2>
      <div className="mt-3 space-y-2">
        {options.map((o) => (
          <button
            key={o.id}
            onClick={() => onSelect(o.id)}
            className={`flex w-full items-center justify-between gap-3 rounded-md border px-4 py-3 text-left text-sm transition ${
              selected === o.id
                ? "border-gold bg-gold/15 text-gold"
                : "border-gold/25 text-primary-foreground/85 hover:border-gold/60"
            }`}
          >
            <span>{o.label}</span>
            <span className="font-semibold">${o.price.toLocaleString()}</span>
          </button>
        ))}
      </div>
      {selected && onQty && (
        <div className="mt-3 flex items-center gap-3">
          <Label className="text-xs text-primary-foreground/70">Quantity</Label>
          <Input
            type="number"
            min={1}
            value={qty}
            onChange={(e) => onQty(Math.max(1, Number(e.target.value) || 1))}
            className="h-9 w-24 border-gold/30 bg-navy-light/30 text-primary-foreground"
          />
        </div>
      )}
    </div>
  );
}
