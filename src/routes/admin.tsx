import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowLeft, Award, ClipboardList, Clock, Gavel } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const title = "Awards Admin Dashboard | ICCK Business Awards 2026";
const description =
  "Internal ICCK dashboard: track nominations, judging progress, sponsorship pipeline, and move applicants through shortlisting.";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AdminPage,
});

const statuses = ["Pending", "Shortlisted", "Finalist", "Winner"] as const;
type Status = (typeof statuses)[number];

type Row = {
  id: string;
  company: string;
  contact: string;
  category: string;
  kind: "award" | "sponsorship";
  submitted: string;
  status: Status;
};

const seed: Row[] = [
  { id: "A-1041", company: "Hanwha Bharat Motors", contact: "J. Park", category: "Manufacturing & Engineering", kind: "award", submitted: "2026-07-14", status: "Shortlisted" },
  { id: "A-1042", company: "Mumbai Cloudworks", contact: "R. Iyer", category: "Technology & Innovation", kind: "award", submitted: "2026-07-16", status: "Pending" },
  { id: "A-1043", company: "Seoul Spice Trading", contact: "M. Kim", category: "Trade & Investment Excellence", kind: "award", submitted: "2026-07-18", status: "Finalist" },
  { id: "A-1044", company: "GreenLeaf ESG Korea", contact: "S. Cho", category: "Sustainability & ESG", kind: "award", submitted: "2026-07-21", status: "Pending" },
  { id: "A-1045", company: "Delhi Fintech Labs", contact: "A. Verma", category: "Startup of the Year", kind: "award", submitted: "2026-07-25", status: "Winner" },
  { id: "S-2011", company: "Samsung India Electronics", contact: "H. Lee", category: "Title sponsorship", kind: "sponsorship", submitted: "2026-06-30", status: "Shortlisted" },
  { id: "S-2012", company: "Tata Motors Korea", contact: "P. Nair", category: "Platinum sponsorship", kind: "sponsorship", submitted: "2026-07-03", status: "Finalist" },
  { id: "S-2013", company: "Kookmin Bank", contact: "Y. Jung", category: "Gold sponsorship", kind: "sponsorship", submitted: "2026-07-09", status: "Pending" },
];

function AdminPage() {
  const [rows, setRows] = useState<Row[]>(seed);
  const [query, setQuery] = useState("");

  const advance = (id: string) =>
    setRows((rs) =>
      rs.map((r) =>
        r.id === id
          ? { ...r, status: statuses[(statuses.indexOf(r.status) + 1) % statuses.length]! }
          : r,
      ),
    );

  const metrics = useMemo(
    () => [
      { label: "Total applications", value: rows.length, icon: ClipboardList },
      { label: "Pending", value: rows.filter((r) => r.status === "Pending").length, icon: Clock },
      {
        label: "Judged",
        value: rows.filter((r) => r.status !== "Pending").length,
        icon: Gavel,
      },
      {
        label: "Finalists",
        value: rows.filter((r) => r.status === "Finalist" || r.status === "Winner").length,
        icon: Award,
      },
    ],
    [rows],
  );

  const filtered = (kind: Row["kind"]) =>
    rows.filter(
      (r) =>
        r.kind === kind &&
        (r.company.toLowerCase().includes(query.toLowerCase()) ||
          r.category.toLowerCase().includes(query.toLowerCase())),
    );

  return (
    <main className="min-h-screen bg-gradient-navy px-4 py-10">
      <div className="mx-auto max-w-6xl">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-gold hover:text-gold-light">
          <ArrowLeft className="h-4 w-4" /> All events
        </Link>

        <h1 className="mt-6 font-display text-3xl font-bold uppercase tracking-wide text-gradient-gold">
          Awards Admin Dashboard
        </h1>
        <p className="mt-2 text-sm text-primary-foreground/70">
          Mock data &middot; ICCK Business Awards 2026 secretariat view
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="rounded-xl border border-gold/25 bg-navy p-5 shadow-elegant"
            >
              <m.icon className="h-5 w-5 text-gold" />
              <p className="mt-3 font-display text-3xl font-bold text-gold-light">{m.value}</p>
              <p className="text-xs uppercase tracking-wide text-primary-foreground/65">
                {m.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-xl border border-gold/25 bg-navy p-5 shadow-elegant">
          <Tabs defaultValue="award">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <TabsList className="bg-navy-light/40">
                <TabsTrigger value="award">Award Categories</TabsTrigger>
                <TabsTrigger value="sponsorship">Sponsorships</TabsTrigger>
              </TabsList>
              <Input
                placeholder="Search company or category"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="h-9 w-full max-w-xs border-gold/30 bg-navy-light/30 text-primary-foreground placeholder:text-primary-foreground/40"
              />
            </div>

            <TabsContent value="award" className="mt-4">
              <DataTable rows={filtered("award")} onAdvance={advance} />
            </TabsContent>
            <TabsContent value="sponsorship" className="mt-4">
              <DataTable rows={filtered("sponsorship")} onAdvance={advance} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </main>
  );
}

const statusStyle: Record<Status, string> = {
  Pending: "border-gold/30 text-primary-foreground/70",
  Shortlisted: "border-gold/60 text-gold",
  Finalist: "border-gold bg-gold/15 text-gold",
  Winner: "border-transparent bg-gradient-gold text-gold-foreground",
};

function DataTable({ rows, onAdvance }: { rows: Row[]; onAdvance: (id: string) => void }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[720px] text-sm">
        <thead className="text-left text-xs uppercase tracking-wide text-primary-foreground/60">
          <tr className="border-b border-gold/20">
            <th className="py-3">ID</th>
            <th className="py-3">Company</th>
            <th className="py-3">Contact</th>
            <th className="py-3">Category</th>
            <th className="py-3">Submitted</th>
            <th className="py-3">Status</th>
            <th className="py-3 text-right">Action</th>
          </tr>
        </thead>
        <tbody className="text-primary-foreground/85">
          {rows.length === 0 && (
            <tr>
              <td colSpan={7} className="py-8 text-center text-primary-foreground/50">
                No records match your search.
              </td>
            </tr>
          )}
          {rows.map((r) => (
            <tr key={r.id} className="border-b border-gold/10">
              <td className="py-3 font-mono text-xs text-gold/80">{r.id}</td>
              <td className="py-3 font-medium">{r.company}</td>
              <td className="py-3">{r.contact}</td>
              <td className="py-3">{r.category}</td>
              <td className="py-3 text-xs">{r.submitted}</td>
              <td className="py-3">
                <span
                  className={`rounded-full border px-3 py-1 text-xs font-semibold ${statusStyle[r.status]}`}
                >
                  {r.status}
                </span>
              </td>
              <td className="py-3 text-right">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gold/50 bg-transparent text-gold hover:bg-gold/10 hover:text-gold"
                  onClick={() => onAdvance(r.id)}
                >
                  Advance
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
