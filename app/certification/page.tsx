import type { Metadata } from "next";
import Link from "next/link";
import { DocPage } from "@/app/components/DocPage";

export const metadata: Metadata = {
  title: "Certification process",
  description:
    "How vendors apply for AXL™ certification: review, reproduction of Appendix A benchmarks, inspection of the §7 agentic interface surface, and publication of the reviewer report.",
};

export default function CertificationPage() {
  return (
    <DocPage
      eyebrow="AXL™ Certification"
      title={<>Certification process.</>}
      subtitle="Conditions under which the AXL™ certification mark is licensed to a vendor. L3 review is conducted by axlspec.org against the published specification."
      meta={[
        { label: "Programme status", value: "Verified L3 review opens at v1.0 Final" },
        { label: "Reviewer panel", value: "axlspec.org editorial board, plus rotating external reviewer" },
        { label: "Mark owner", value: "axlspec.org" },
        { label: "Policy", value: <Link href="/trademark">axlspec.org/trademark</Link> },
      ]}
    >
      <h2><span className="num">§ 1</span>Eligibility</h2>
      <p>
        Any vendor with a production-deployed implementation that claims L1 and L2 conformance against the AXL Reference v1.0 may apply for L3 verified certification. Applicants must:
      </p>
      <ul>
        <li>Maintain a published L1 + L2 Conformance Statement at the time of application.</li>
        <li>Provide reproducible Appendix A benchmark artifacts.</li>
        <li>Operate a §7-conformant agentic interface surface against which the reviewer panel can execute the conformance test suite.</li>
        <li>Accept the AXL trademark license and abide by the published trademark policy.</li>
      </ul>

      <h2><span className="num">§ 2</span>Process</h2>

      <h3>2.1 Application</h3>
      <p>
        File a certification application at <code>certification@axlspec.org</code> containing the Conformance Statement, contact information for the engineering lead, and a target review window.
      </p>

      <h3>2.2 Reviewer assignment</h3>
      <p>
        The editorial board assigns a reviewer panel of two axlspec.org reviewers and one rotating external reviewer drawn from the working-group pool. Reviewer identity is published at the conclusion of the review.
      </p>

      <h3>2.3 Verification</h3>
      <p>
        The panel verifies, against the published specification:
      </p>
      <ul>
        <li>Clause-by-clause conformance to §5 Required <strong>and</strong> Recommended capabilities.</li>
        <li>Reproducible execution of the Appendix A conformance test suite.</li>
        <li>Semantic conformance of the §7 agentic interface surface.</li>
        <li>Continuing validity of the L1 and L2 self-attestations.</li>
      </ul>

      <h3>2.4 Report</h3>
      <p>
        A reviewer report is published at <code>axlspec.org/certified/[vendor]</code>, accessible publicly, containing the panel&apos;s findings, any conditional remediations, and the issued certification.
      </p>

      <h3>2.5 Issuance</h3>
      <p>
        On clean verification, axlspec.org issues a time-bounded license to use the AXL™ certification mark on the certified product, for the certified specification version, under the trademark policy.
      </p>

      <h2><span className="num">§ 3</span>Fees</h2>
      <div className="callout">
        <p>
          A fee schedule is forthcoming. Fees are intended to cover reviewer-panel time and to be tiered by vendor revenue, with reductions for working-group contributors and an exemption for open-source implementers operating under a non-commercial license through v1.x.
        </p>
      </div>

      <h2><span className="num">§ 4</span>Mark use after certification</h2>
      <p>
        Once certified, licensees may use the AXL™ mark in product UI, marketing collateral, and analyst materials in conformance with the trademark policy at <Link href="/trademark">/trademark</Link>. The mark may not be transferred, sublicensed, or applied to non-certified products. Misuse triggers the cure period described in §4 of the trademark policy.
      </p>

      <h2><span className="num">§ 5</span>Revocation and re-certification</h2>
      <p>
        axlspec.org may revoke certification where:
      </p>
      <ul>
        <li>The implementation materially diverges from the attested state.</li>
        <li>Appendix A benchmarks can no longer be reproduced on the current product version.</li>
        <li>The licensee operates outside the trademark policy after cure.</li>
      </ul>
      <p>
        Revocations are published on the public record. Re-certification follows the same process as initial certification.
      </p>

      <h2><span className="num">§ 6</span>Open transparency</h2>
      <p>
        The reviewer roster, reviewer reports, and revocations are public. axlspec.org publishes an annual transparency report including certifications issued, revocations, and aggregate working-group contribution metrics.
      </p>

      <p className="text-ink-muted">
        L1 and L2 self-attestations may be filed against the current Working Draft.
        L3 review is conducted against published versions of the specification.
      </p>
    </DocPage>
  );
}
