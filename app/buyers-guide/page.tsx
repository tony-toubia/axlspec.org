import type { Metadata } from "next";
import Link from "next/link";
import { DocPage } from "@/app/components/DocPage";

export const metadata: Metadata = {
  title: "Buyer's guide",
  description:
    "The procurement-facing rendering of the AXL Reference. RFP language, evaluation criteria, required artifacts, and the questions to ask a vendor.",
};

export default function BuyersGuide() {
  return (
    <DocPage
      eyebrow="§ 11 · Buyer's guide"
      title={
        <>
          The AXL <em className="italic font-normal">Buyer&apos;s Guide.</em>
        </>
      }
      subtitle="Section 11 of the AXL Reference, rendered for procurement teams. Use the questions below in a vendor evaluation, an RFP, or a board memo. Designed to be the most-forwarded artifact the specification produces."
      meta={[
        { label: "Source", value: <Link href="/spec/v1.0#buyers-guide">§ 11 of the AXL Reference</Link> },
        { label: "Format", value: "Web rendering · printable PDF at v1.0 Final" },
        {
          label: "Companion",
          value: (
            <>
              <Link href="/tco">/tco</Link> · <Link href="/maturity">/maturity</Link>
            </>
          ),
        },
      ]}
    >
      <h2><span className="num">§ 1</span>The four questions</h2>
      <p>
        Whatever the surface — RFP, demo agenda, executive evaluation — these four questions test whether a vendor is operating at AXL conformance or only adjacent to it.
      </p>
      <ol>
        <li><strong>Does the platform collect behavioural signal identity-free at request time, or does it require a persistent identifier?</strong> (Pillar: Perceive)</li>
        <li><strong>Does the platform select treatment autonomously at request time, or is selection driven by pre-configured rules?</strong> (Pillar: Decide)</li>
        <li><strong>Is the rendering of selected content framework-agnostic and flicker-free on a standards-compliant browser?</strong> (Pillar: Render)</li>
        <li><strong>Does the platform report statistical significance and lift at the treatment level continuously, or in quarterly batches?</strong> (Pillar: Learn)</li>
      </ol>

      <h2><span className="num">§ 2</span>Artifacts to require</h2>
      <ul>
        <li>A published <strong>Conformance Statement</strong> at L1 or higher.</li>
        <li>For L2 claims: a reproducible link to Appendix A benchmark execution.</li>
        <li>The <strong>§7 agentic interface surface</strong>, exposed for your engineering team to test against.</li>
        <li>For L3 claims: the reviewer report at <code>axl.org/certified/[vendor]</code>.</li>
        <li>A clear statement of which AXL specification version the attestation covers.</li>
      </ul>

      <h2><span className="num">§ 3</span>Red flags</h2>
      <ul>
        <li>A vendor uses the AXL™ symbol but is not in the <Link href="/certified">certified registry</Link>.</li>
        <li>A vendor claims &ldquo;AXL-compliant&rdquo; rather than &ldquo;AXL-conformant&rdquo; — the former is not a defined term.</li>
        <li>A vendor cannot point to a published Conformance Statement (even at L1).</li>
        <li>A vendor claims L3 without a public reviewer report.</li>
        <li>The Decide capability is contingent on pre-built segments rather than session-time autonomous selection.</li>
      </ul>

      <h2><span className="num">§ 4</span>RFP question bank</h2>
      <div className="callout">
        <p>
          The published RFP question bank — 24 questions, mapped clause-by-clause to §5 — is at <code>github.com/axl-spec/buyers-guide</code>. Forkable for inclusion in a procurement document.
        </p>
      </div>

      <h2><span className="num">§ 5</span>What this guide does not cover</h2>
      <p>
        The guide is silent on price, on vendor financial stability, on data-residency law, and on professional-services availability. Those are procurement concerns the AXL specification does not — and should not — address. Use the standard procurement playbook for those, and use this guide for the architecture question.
      </p>
    </DocPage>
  );
}
