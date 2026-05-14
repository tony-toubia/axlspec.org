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
      eyebrow="The AXL Reference · § 11"
      title={<>Buyer&apos;s guide.</>}
      subtitle="A procurement-facing rendering of § 11 of the AXL Reference. Provides evaluation criteria, required artifacts, and reference RFP language. Non-normative."
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
      <h2><span className="num">§ 1</span>Evaluation questions</h2>
      <p>
        The four questions below correspond to the four pillars in § 5 of the AXL
        Reference. A response that does not address all four indicates a gap relative
        to L1 conformance.
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
        <li>For L3 claims: the reviewer report at <code>axlspec.org/certified/[vendor]</code>.</li>
        <li>A clear statement of which AXL specification version the attestation covers.</li>
      </ul>

      <h2><span className="num">§ 3</span>Indicators of non-conformance</h2>
      <ul>
        <li>Use of the AXL™ symbol absent presence in the <Link href="/certified">certified registry</Link>.</li>
        <li>Use of &ldquo;AXL-compliant&rdquo; rather than &ldquo;AXL-conformant&rdquo;: the former is not a defined term in this specification.</li>
        <li>Absence of a published Conformance Statement at any level.</li>
        <li>Claim of L3 conformance without a corresponding public reviewer report.</li>
        <li>Decide capability contingent on pre-configured segments rather than session-time autonomous selection (§ 5.2).</li>
      </ul>

      <h2><span className="num">§ 4</span>RFP question bank</h2>
      <p>
        A reference RFP question bank, mapped clause-by-clause to § 5 of the
        specification, is forthcoming in the project repository at{" "}
        <code>github.com/tony-toubia/axlspec.org</code> and may be reused in procurement documents.
      </p>

      <h2><span className="num">§ 5</span>Out of scope</h2>
      <p>
        This guide does not address commercial terms, vendor financial stability,
        data-residency requirements, or professional services. Those concerns lie
        outside the scope of the AXL Reference.
      </p>
    </DocPage>
  );
}
