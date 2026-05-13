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
      eyebrow="Certification · AXL™"
      title={
        <>
          AXL™ <em className="italic font-normal">Certification.</em>
        </>
      }
      subtitle="The AXL™ certification mark is owned and administered by axl.org. Vendors who pass verified L3 review may license the mark for use on the certified product, for the certified specification version, under the trademark policy."
      meta={[
        { label: "Process opens", value: "v1.0 Final · week 16 of the launch sequence" },
        { label: "Reviewer panel", value: "axl.org editorial + invited external reviewers" },
        { label: "Mark owner", value: "axl.org (separate from any vendor)" },
        { label: "Policy", value: <Link href="/trademark">axl.org/trademark</Link> },
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
        File a certification application at <code>certification@axl.org</code> containing the Conformance Statement, contact information for the engineering lead, and a target review window.
      </p>

      <h3>2.2 Reviewer assignment</h3>
      <p>
        The editorial board assigns a reviewer panel of two axl.org reviewers and one rotating external reviewer drawn from the working-group pool. Reviewer identity is published at the conclusion of the review.
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
        A reviewer report is published at <code>axl.org/certified/[vendor]</code>, accessible publicly, containing the panel&apos;s findings, any conditional remediations, and the issued certification.
      </p>

      <h3>2.5 Issuance</h3>
      <p>
        On clean verification, axl.org issues a time-bounded license to use the AXL™ certification mark on the certified product, for the certified specification version, under the trademark policy.
      </p>

      <h2><span className="num">§ 3</span>Fees</h2>
      <div className="callout">
        <p>
          Fee schedule is published separately at <code>axl.org/certification/fees</code>. Fees are sized to cover reviewer-panel time and are tiered by vendor revenue. Working-group contributors who have filed accepted ASPs receive a fee reduction. Open-source implementers operating under a non-commercial license are exempt from fees through v1.x.
        </p>
      </div>

      <h2><span className="num">§ 4</span>Mark use after certification</h2>
      <p>
        Once certified, licensees may use the AXL™ mark in product UI, marketing collateral, and analyst materials in conformance with the trademark policy at <Link href="/trademark">/trademark</Link>. The mark may not be transferred, sublicensed, or applied to non-certified products. Misuse triggers the cure period described in §4 of the trademark policy.
      </p>

      <h2><span className="num">§ 5</span>Revocation and re-certification</h2>
      <p>
        axl.org may revoke certification where:
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
        The reviewer roster, reviewer reports, and revocations are public. axl.org publishes an annual transparency report including certifications issued, revocations, and aggregate working-group contribution metrics.
      </p>

      <div className="callout">
        <p>
          <strong>Starting the process:</strong> while verified certification opens at v1.0 Final, prospective certified vendors are encouraged to file L1 and L2 self-attestations against the v1.0 Draft now. Doing so positions the vendor for accelerated L3 review at v1.0 Final.
        </p>
      </div>
    </DocPage>
  );
}
