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
      eyebrow="Buyer's tools · TCO"
      title={<>TCO methodology.</>}
      subtitle="A reference methodology for comparing the cost of operating a coordinated multi-tool personalization stack against the cost of operating an AXL-conformant single layer at equivalent volume."
      meta={[
        { label: "Status", value: "Methodology published; calculator forthcoming" },
        { label: "Companion", value: <Link href="/maturity">/maturity</Link> },
        { label: "Reference", value: <Link href="/buyers-guide">/buyers-guide</Link> },
      ]}
    >
      <div className="warning">
        <div className="label">Status of this document</div>
        <p>
          The interactive calculator is forthcoming. The methodology below is published
          for review; comments may be filed as ASPs against the buyer&apos;s-guide
          repository.
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
        A printable worksheet is forthcoming.
      </p>
    </DocPage>
  );
}
