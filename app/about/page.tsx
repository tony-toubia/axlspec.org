import type { Metadata } from "next";
import Link from "next/link";
import { DocPage } from "@/app/components/DocPage";

export const metadata: Metadata = {
  title: "About axlspec.org",
  description:
    "axlspec.org is the editor and steward of the AXL Reference. Founding sponsor: Cadence. Governance roadmap published at /governance.",
};

export default function AboutPage() {
  return (
    <DocPage
      eyebrow="About"
      title={<>axlspec.org.</>}
      subtitle="Editor and steward of the AXL Reference. Founding sponsor: Cadence Governance roadmap to multi-stakeholder body published at /governance."
      meta={[
        { label: "Founding sponsor", value: "Cadence" },
        { label: "Governance roadmap", value: <Link href="/governance">/governance</Link> },
        { label: "Contact", value: "hello@axlspec.org" },
      ]}
    >
      <h2><span className="num">§ 1</span>Mandate</h2>
      <p>
        axlspec.org publishes the AXL Reference, administers the conformance program, and
        owns the AXL™ certification mark. The mandate is limited to those activities;
        the organization does not operate commercial product offerings.
      </p>

      <h2><span className="num">§ 2</span>Relationship to Cadence</h2>
      <p>
        Cadence is the founding sponsor and funds the operations of axlspec.org at
        the current phase of the <Link href="/governance">governance roadmap</Link>.
        The AXL™ certification mark is owned by axlspec.org and is not a Cadence asset.
        Certification review of Cadence&apos;s own products is conducted under the same
        process as for any other applicant.
      </p>

      <h2><span className="num">§ 3</span>Published artifacts</h2>
      <ul>
        <li>The AXL Reference (current version: v1.0 Working Draft).</li>
        <li>The Conformance Statement template and L3 reviewer process.</li>
        <li>The Appendix A benchmark suite (executable artifacts forthcoming).</li>
        <li>The <Link href="/trademark">trademark policy</Link>.</li>
        <li>Working-group minutes, ASP disposition log, and an annual transparency report.</li>
      </ul>

      <h2><span className="num">§ 4</span>Participation</h2>
      <p>
        Channels for participation are documented at <Link href="/working-groups">/working-groups</Link>{" "}
        and <Link href="/asp-process">/asp-process</Link>.
      </p>
    </DocPage>
  );
}
