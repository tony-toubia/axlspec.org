import type { Metadata } from "next";
import Link from "next/link";
import { DocPage } from "@/app/components/DocPage";

export const metadata: Metadata = {
  title: "TCO calculator",
  description:
    "An interactive comparison between the cost of operating the five-tool personalization stack and the cost of an AXL-conformant single layer.",
};

export default function TcoPage() {
  return (
    <DocPage
      eyebrow="Buyer's tools · § 11 · TCO"
      title={
        <>
          Total cost of <em className="italic font-normal">personalization.</em>
        </>
      }
      subtitle="A parameterized comparison between your current personalization stack and an AXL-conformant single layer. Designed to be printable and forwarded with an RFP."
      meta={[
        { label: "Companion", value: <Link href="/maturity">/maturity</Link> },
        { label: "Methodology", value: <Link href="/buyers-guide">/buyers-guide</Link> },
      ]}
    >
      <div className="warning">
        <div className="label">Coming with v1.0 Final</div>
        <p>
          The interactive calculator ships with v1.0 Final, alongside the buyer&apos;s-guide PDF. In the interim, the methodology below is published for review; the working-group inputs are open for ASP-style comment.
        </p>
      </div>

      <h2><span className="num">§ 1</span>What this calculator does</h2>
      <p>
        Given the inputs below, the calculator estimates the annual cost difference between operating the five-tool stack and operating an AXL-conformant single layer at equivalent volume.
      </p>
      <ul>
        <li>CDP licence cost, annual.</li>
        <li>Segmentation / experimentation / journey / attribution tool costs, annual.</li>
        <li>Integration engineering hours, allocated.</li>
        <li>Operator FTE allocation across the stack.</li>
        <li>Estimated lift on personalized surfaces under each architecture.</li>
      </ul>

      <h2><span className="num">§ 2</span>What it does <em>not</em> do</h2>
      <p>
        The calculator is not a forecasting tool. It captures the cost differential between architectures at equivalent operator capability (per the <Link href="/maturity">maturity model</Link>) and equivalent traffic volume. It does not predict revenue lift; that is a function of execution.
      </p>
      <p>
        The published methodology, including the assumed lift floor and ceiling per maturity tier, is in the buyer&apos;s guide.
      </p>

      <h2><span className="num">§ 3</span>Interim worksheet</h2>
      <p>
        A printable worksheet version is available at <code>axl.org/tco/worksheet.pdf</code>. Walk a procurement team through it in a 30-minute meeting.
      </p>
    </DocPage>
  );
}
