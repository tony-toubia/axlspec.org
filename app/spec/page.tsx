import type { Metadata } from "next";
import Link from "next/link";
import { DocPage } from "@/app/components/DocPage";

export const metadata: Metadata = {
  title: "Specification versions",
  description:
    "Index of published versions of the AXL Reference. v1.0 Draft is the current published version.",
};

const VERSIONS = [
  {
    v: "v1.0 Draft",
    href: "/spec/v1.0",
    status: "Current — open for comment",
    note: "Published as a Working Draft. ASPs accepted at github.com/tony-toubia/axlspec.org/issues.",
    current: true,
  },
  {
    v: "v1.0 Final",
    href: "#",
    status: "Forthcoming",
    note: "Published after the close of comment and disposition of received ASPs. Date to be announced.",
    current: false,
  },
];

export default function SpecIndex() {
  return (
    <DocPage
      eyebrow="The AXL Reference · Versions"
      title={<>Versions of the AXL Reference.</>}
      subtitle="v1.0 Draft is the current published version. Subsequent versions are published according to the versioning policy in § 12.2."
      meta={[
        { label: "Versioning policy", value: <Link href="/spec/v1.0#governance">§ 12.2</Link> },
        { label: "License", value: "CC BY 4.0" },
        { label: "Repository", value: <a href="https://github.com/tony-toubia/axlspec.org">github.com/tony-toubia/axlspec.org</a> },
      ]}
    >
      <div className="!mt-2 space-y-4">
        {VERSIONS.map((row) => (
          <div
            key={row.v}
            className="bg-paper-alt/60 border rule-strong p-6 grid grid-cols-1 sm:grid-cols-[160px_1fr_auto] gap-4 items-baseline"
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
                className="font-mono text-[11px] tracking-[0.10em] uppercase border border-ink text-ink px-4 py-2 hover:bg-ink hover:text-paper"
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
