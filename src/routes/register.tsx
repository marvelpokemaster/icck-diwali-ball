import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowLeft, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import icckLogo from "@/assets/logo.svg";

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

  return (
    <main className="min-h-screen bg-gradient-navy px-4 py-12 print:bg-white">
      <div className="mx-auto max-w-5xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-gold hover:text-gold-light print:hidden"
        >
          <ArrowLeft className="h-4 w-4" /> All events
        </Link>

        <h1 className="mt-6 font-display text-3xl font-bold uppercase tracking-wide text-gradient-gold print:hidden">
          Registration & Checkout
        </h1>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <section className="space-y-6 rounded-xl border border-gold/25 bg-navy p-6 shadow-elegant print:hidden">
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
              disabled={lines.length === 0 || !name}
              onClick={generate}
            >
              Generate invoice
            </Button>
          </section>

          <aside className="print:col-span-2">
            <div className="rounded-xl border border-gold/30 bg-white p-6 text-slate-900 shadow-elegant print:border-0 print:shadow-none">
              <header className="flex items-start justify-between gap-4 border-b border-slate-200 pb-4">
                <img src={icckLogo} alt="ICCK" width={940} height={347} className="h-8 w-auto" />
                <div className="text-right text-xs">
                  <p className="font-display text-base font-bold uppercase tracking-wide">Invoice</p>
                  <p>No. {issued?.number ?? "—"}</p>
                  <p>Date: {issued?.date ?? "—"}</p>
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
                        Select at least one item to preview your invoice.
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
                <Row label="Subtotal" value={subtotal} />
                <Row label="VAT (10%)" value={vat} />
                <div className="flex justify-between border-t border-slate-300 pt-2 font-display text-base font-bold">
                  <dt>Total due</dt>
                  <dd>${total.toLocaleString()}</dd>
                </div>
              </dl>

              <p className="mt-4 border-t border-slate-200 pt-3 text-[10px] text-slate-500">
                Payment due within 14 days. This is a demo invoice generated in-browser.
              </p>
            </div>

            <Button
              variant="outline"
              className="mt-4 w-full border-gold/50 bg-transparent text-gold hover:bg-gold/10 hover:text-gold print:hidden"
              disabled={!issued}
              onClick={() => window.print()}
            >
              <Printer className="mr-2 h-4 w-4" /> Print / save PDF
            </Button>
          </aside>
        </div>
      </div>
    </main>
  );
}

function Row({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex justify-between">
      <dt className="text-slate-500">{label}</dt>
      <dd>${value.toLocaleString()}</dd>
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
