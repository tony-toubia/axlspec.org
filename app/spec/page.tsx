import type { Metadata } from "next";
import Link from "next/link";
import { DocPage } from "@/app/components/DocPage";

export const metadata: Metadata = {
  title: "Specification versions",
  description:
    "Index of published AXL Reference versions. v1.0 Draft is current; v1.0 Final ships at week 16 of the launch sequence.",
};

const VERSIONS = [
  {
    v: "v1.0 Draft",
    href: "/spec/v1.0",
    status: "Current · Public comment open",
    note: "60-day comment period. ASPs accepted on GitHub.",
    current: true,
  },
  {
    v: "v1.0 RC1",
    href: "#",
    status: "Planned · Week 10 of launch sequence",
    note: "Visible deltas vs. v1.0 Draft. Editorial credits added.",
    current: false,
  },
  {
    v: "v1.0 RC2",
    href: "#",
    status: "Planned · Week 13 of launch sequence",
    note: "Final substantive revisions. Editorial-only changes thereafter.",
    current: false,
  },
  {
    v: "v1.0 Final",
    href: "#",
    status: "Planned · Week 16 of launch sequence",
    note: "Frozen text. Versioning policy (§12.2) takes over.",
    current: false,
  },
];

export default function SpecIndex() {
  return (
    <DocPage
      eyebrow="The AXL Reference · Versions"
      title={
        <>
          Published versions of the <em className="italic font-normal">AXL Reference.</em>
        </>
      }
      subtitle="The current published version is v1.0 Draft. Subsequent release candidates and the v1.0 Final ship according to the launch sequence."
      meta={[
        { label: "Versioning policy", value: <Link href="/spec/v1.0#governance">§ 12.2</Link> },
        { label: "License", value: "CC BY 4.0" },
      ]}
    >
      <div className="!mt-2 space-y-4">
        {VERSIONS.map((row) => (
          <div
            key={row.v}
            className="bg-bg-alt/60 border rule-strong p-6 grid grid-cols-1 sm:grid-cols-[160px_1fr_auto] gap-4 items-baseline"
          >
            <p className="font-serif text-[20px] text-ink">{row.v}</p>
            <div>
              <p className="font-mono text-[10px] tracking-[0.12em] uppercase text-ink-muted">
                {row.status}
              </p>
              <p className="mt-2 text-[14px] text-ink-soft">{row.note}</p>
            </div>
            {row.current ? (
              <Link
                href={row.href}
                className="font-mono text-[11px] tracking-[0.10em] uppercase border border-ink text-ink px-4 py-2 hover:bg-ink hover:text-bg"
              >
                Read →
              </Link>
            ) : (
              <span className="font-mono text-[11px] tracking-[0.10em] uppercase text-ink-muted">
                Not yet published
              </span>
            )}
          </div>
        ))}
      </div>
    </DocPage>
  );
}
