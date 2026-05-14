import type { Metadata } from "next";
import Link from "next/link";
import { DocPage } from "@/app/components/DocPage";

export const metadata: Metadata = {
  title: "Conformance levels",
  description:
    "AXL defines three conformance levels — L1 Functional, L2 Production, L3 Reference. L1 and L2 are self-attested; L3 is verified by axlspec.org and is the prerequisite for the AXL™ certification mark.",
};

export default function ConformancePage() {
  return (
    <DocPage
      eyebrow="Specification · § 6 · Conformance"
      title={
        <>
          Three levels of <em className="italic font-normal">conformance.</em>
        </>
      }
      subtitle="Implementations attest at L1 or L2 by publishing a Conformance Statement. L3 requires verified review and is the prerequisite for use of the AXL™ certification mark."
      meta={[
        { label: "Normative", value: "§ 6 of the AXL Reference v1.0" },
        { label: "Effective", value: "v1.0 Draft" },
        { label: "Process owner", value: "axlspec.org editorial board" },
      ]}
    >
      <h2><span className="num">§ 6.1</span>Level definitions</h2>

      <table>
        <thead>
          <tr>
            <th>Level</th>
            <th>Requirement</th>
            <th>Attestation</th>
            <th>Mark</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>L1 — Functional</strong></td>
            <td>Required clauses of §5.1–§5.4 across all four pillars.</td>
            <td>Self-attested via Conformance Statement.</td>
            <td>None — &ldquo;AXL-conformant L1&rdquo; may be used descriptively.</td>
          </tr>
          <tr>
            <td><strong>L2 — Production</strong></td>
            <td>L1 plus published reproduction of Appendix A benchmarks.</td>
            <td>Self-attested with audit-ready artifacts.</td>
            <td>None — &ldquo;AXL-conformant L2&rdquo; may be used descriptively.</td>
          </tr>
          <tr>
            <td><strong>L3 — Reference</strong></td>
            <td>L1 + L2 + Recommended clauses across all four pillars.</td>
            <td>Verified review by axlspec.org against the full specification.</td>
            <td>AXL™ certification mark, per the <Link href="/trademark">trademark policy</Link>.</td>
          </tr>
        </tbody>
      </table>

      <h2><span className="num">§ 6.2</span>Conformance Statement</h2>
      <p>
        A Conformance Statement is a public document filed by an implementer attesting to specific clauses of the specification. For L1 and L2, attestation is self-published and does not require axlspec.org review. The statement must include:
      </p>
      <ul>
        <li>The implementer&apos;s legal entity.</li>
        <li>The product or platform under attestation, including version.</li>
        <li>The conformance level claimed.</li>
        <li>Clause-by-clause attestation against §5 (Required for L1; Required + Recommended for L3).</li>
        <li>For L2: a link to the published reproduction of Appendix A benchmarks under the AXL test methodology.</li>
        <li>A statement of the period for which the attestation is valid (default: one major or minor version cycle of the spec).</li>
      </ul>

      <div className="callout">
        <p>
          <strong>Conformance Statement template:</strong> a fillable template is forthcoming in the project repository. Until publication of the template, self-attestations may be drafted against the clauses of § 5 directly.
        </p>
      </div>

      <h2><span className="num">§ 6.3</span>Verified certification (L3)</h2>
      <p>
        L3 conformance requires verified review by the axlspec.org reviewer panel. The process is documented at <Link href="/certification">/certification</Link> and entails:
      </p>
      <ol>
        <li>Submission of the implementer&apos;s Conformance Statement and supporting artifacts.</li>
        <li>Reviewer-panel evaluation against the published spec, including reproducible execution of the conformance test suite.</li>
        <li>Inspection of the §7 agentic interface surface for semantic conformance.</li>
        <li>Publication of the reviewer report at <code>axlspec.org/certified/[vendor]</code>.</li>
        <li>Issuance of the AXL™ certification mark license, valid for the attested version cycle.</li>
      </ol>

      <h2><span className="num">§ 6.4</span>Re-attestation</h2>
      <p>
        Conformance is per-version. Minor versions of the specification (v1.1, v1.2) require a clause-level re-attestation; the implementer may file an updated Conformance Statement noting deltas. Major versions (v2.0) require a fresh attestation from L1.
      </p>

      <h2><span className="num">§ 6.5</span>Withdrawal</h2>
      <p>
        An implementer may withdraw a Conformance Statement at any time by opening a withdrawal PR. axlspec.org may revoke an L3 certification on the public record where the reviewer panel determines the implementation has materially diverged from the attested state. Revocation triggers the trademark-use cure period described in <Link href="/trademark">§4 of the trademark policy</Link>.
      </p>

      <p className="text-ink-muted">
        L1 and L2 Conformance Statements may be filed against the current Working
        Draft. L3 review is conducted against published versions. The editorial
        contact for the certification programme is <code>conformance@axlspec.org</code>.
      </p>
    </DocPage>
  );
}
