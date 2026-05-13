import type { Metadata } from "next";
import Link from "next/link";
import { DocPage } from "@/app/components/DocPage";

export const metadata: Metadata = {
  title: "Certified vendors",
  description:
    "Public registry of AXL™ certified implementations. Each entry links to the reviewer report, the attested version, and the conformance level.",
};

export default function CertifiedRegistry() {
  return (
    <DocPage
      eyebrow="Registry · AXL™ Certified"
      title={
        <>
          The AXL™ Certified <em className="italic font-normal">Registry.</em>
        </>
      }
      subtitle="Verified L3-certified implementations of the AXL Reference. Each entry links to the reviewer report, the attested specification version, and the current trademark licence status."
      meta={[
        { label: "Opens", value: "v1.0 Final · week 16 of the launch sequence" },
        { label: "Process", value: <Link href="/certification">/certification</Link> },
        { label: "Policy", value: <Link href="/trademark">/trademark</Link> },
      ]}
    >
      <div className="warning">
        <div className="label">Registry status</div>
        <p>
          The verified-certification programme opens at v1.0 Final. Until then this registry is empty. Self-attested Conformance Statements at L1 and L2 are tracked separately on GitHub at <code>github.com/axl-spec/spec/tree/main/statements</code>.
        </p>
      </div>

      <h2><span className="num">§ 1</span>How this registry works</h2>
      <p>
        Once issued, certifications are published here with:
      </p>
      <ul>
        <li>The certified vendor and product name.</li>
        <li>The attested specification version (e.g. v1.0).</li>
        <li>The conformance level (always L3 in this registry; L1/L2 self-attestations live on GitHub).</li>
        <li>A link to the published reviewer report.</li>
        <li>The certification effective date and the next scheduled review.</li>
      </ul>

      <h2><span className="num">§ 2</span>Pending</h2>
      <p className="font-serif italic text-ink-soft">
        No certifications have been issued. The first review cohort opens at v1.0 Final.
      </p>

      <h2><span className="num">§ 3</span>Self-attestations</h2>
      <p>
        Vendors with published L1 or L2 Conformance Statements but no verified certification are not listed in this registry; their statements are tracked in the public repository and may be referenced descriptively per <Link href="/trademark#5">§ 5 of the trademark policy</Link>.
      </p>
    </DocPage>
  );
}
