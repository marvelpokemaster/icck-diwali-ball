import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowLeft, Printer, Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import icckLogo from "@/assets/icck-logo.png";

const title = "Registration & Invoice | ICCK Business Awards 2026";
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
      date: new Date().toLocaleDateString(),
    });
  };

  // Phase 3 — on successful checkout the invoice REPLACES the form.
  if (issued) {
    return (
      <main className="min-h-screen bg-gradient-navy px-4 py-12 print:bg-white print:py-0">
        <div className="mx-auto max-w-3xl">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3 print:hidden">
            <button
              onClick={() => setIssued(null)}
              className="inline-flex items-center gap-2 text-sm text-gold hover:text-gold-light"
            >
              <Pencil className="h-4 w-4" /> Edit registration
            </button>
            <Button
              className="bg-gradient-gold text-gold-foreground hover:opacity-90"
              onClick={() => window.print()}
            >
              <Printer className="mr-2 h-4 w-4" /> Print / download PDF
            </Button>
          </div>

          <Invoice
            issued={issued}
            name={name}
            company={company}
            email={email}
            phone={phone}
            lines={lines}
            subtotal={subtotal}
            vat={vat}
            total={total}
          />
        </div>
      </main>
    );
  }

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
          Registration & Checkout
        </h1>
        <p className="mt-2 text-sm text-primary-foreground/70">
          Book Diwali Ball tickets or the bundle. Add a table and a sponsorship together — both are
          combined into one order.
        </p>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          <section className="space-y-6 rounded-xl border border-gold/25 bg-navy p-6 shadow-elegant">
            <div className="grid gap-4 sm:grid-cols-2">
              <TextField label="Registrant name" value={name} onChange={setName} />
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
          </section>

          {/* Live order summary */}
          <aside className="lg:sticky lg:top-12">
            <div className="rounded-xl border border-gold/25 bg-navy p-6 shadow-elegant">
              <h2 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-gold">
                Order summary
              </h2>

              <div className="mt-4 space-y-3">
                {lines.length === 0 && (
                  <p className="text-sm text-primary-foreground/60">
                    Select at least one item to see your total.
                  </p>
                )}
                {lines.map((l) => (
                  <div key={l.label} className="flex justify-between gap-4 text-sm">
                    <span className="text-primary-foreground/85">
                      {l.label}
                      {l.qty > 1 && (
                        <span className="text-primary-foreground/55"> × {l.qty}</span>
                      )}
                    </span>
                    <span className="font-semibold text-primary-foreground">
                      ${(l.qty * l.unit).toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>

              <dl className="mt-5 space-y-2 border-t border-gold/20 pt-4 text-sm">
                <div className="flex justify-between text-primary-foreground/75">
                  <dt>Subtotal</dt>
                  <dd>${subtotal.toLocaleString()}</dd>
                </div>
                <div className="flex justify-between text-primary-foreground/75">
                  <dt>VAT (10%)</dt>
                  <dd>${vat.toLocaleString()}</dd>
                </div>
                <div className="flex justify-between border-t border-gold/20 pt-3 font-display text-lg font-bold text-gold-light">
                  <dt>Total payable</dt>
                  <dd>${total.toLocaleString()}</dd>
                </div>
              </dl>

              <Button
                className="mt-6 w-full bg-gradient-gold text-gold-foreground hover:opacity-90"
                disabled={lines.length === 0 || !name}
                onClick={generate}
              >
                Complete registration
              </Button>
              {lines.length > 0 && !name && (
                <p className="mt-2 text-center text-xs text-primary-foreground/55">
                  Enter the registrant name to continue.
                </p>
              )}
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

function Invoice({
  issued,
  name,
  company,
  email,
  phone,
  lines,
  subtotal,
  vat,
  total,
}: {
  issued: { number: string; date: string };
  name: string;
  company: string;
  email: string;
  phone: string;
  lines: Line[];
  subtotal: number;
  vat: number;
  total: number;
}) {
  return (
    <div className="rounded-xl border border-gold/30 bg-white p-8 text-slate-900 shadow-elegant print:rounded-none print:border-0 print:p-0 print:shadow-none">
      <header className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-200 pb-5">
        <div>
          <img src={icckLogo} alt="ICCK" width={940} height={347} className="h-9 w-auto" />
          <p className="mt-2 text-xs text-slate-500">Indian Chamber of Commerce in Korea</p>
        </div>
        <div className="text-right text-xs">
          <p className="font-display text-lg font-bold uppercase tracking-wide">
            Invoice & Receipt
          </p>
          <p className="mt-1">No. {issued.number}</p>
          <p>Date: {issued.date}</p>
        </div>
      </header>

      <div className="grid gap-4 py-5 text-xs sm:grid-cols-2">
        <div>
          <p className="font-semibold uppercase tracking-wide text-slate-500">Billed to</p>
          <p className="mt-1 font-medium">{name || "—"}</p>
          {company && <p>{company}</p>}
          {email && <p>{email}</p>}
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
        <div className="flex justify-between">
          <dt className="text-slate-500">Subtotal</dt>
          <dd>${subtotal.toLocaleString()}</dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-slate-500">VAT (10%)</dt>
          <dd>${vat.toLocaleString()}</dd>
        </div>
        <div className="flex justify-between border-t border-slate-300 pt-2 font-display text-base font-bold">
          <dt>Total payable</dt>
          <dd>${total.toLocaleString()}</dd>
        </div>
      </dl>

      <div className="mt-6 grid gap-4 border-t border-slate-200 pt-4 text-[11px] text-slate-600 sm:grid-cols-2">
        <div>
          <p className="font-semibold uppercase tracking-wide text-slate-500">Payment instructions</p>
          <p className="mt-1">Bank: Woori Bank &middot; Acct: 1005-000-123456</p>
          <p>Beneficiary: Indian Chamber of Commerce in Korea</p>
          <p>Reference: {issued.number}</p>
          <p>Payment due within 14 days of the invoice date.</p>
        </div>
        <div className="sm:text-right">
          <p className="font-semibold uppercase tracking-wide text-slate-500">Notes</p>
          <p className="mt-1">Thank you for registering for the ICCK Diwali Celebrations 2026.</p>
          <p>This document serves as your invoice and receipt.</p>
        </div>
      </div>
    </div>
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
