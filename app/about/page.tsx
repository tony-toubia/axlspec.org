import type { Metadata } from "next";
import Link from "next/link";
import { DocPage } from "@/app/components/DocPage";

export const metadata: Metadata = {
  title: "About axl.org",
  description:
    "axl.org is the editor and steward of the AXL Reference. Founding sponsor: Cadence. Governance roadmap published at /governance.",
};

export default function AboutPage() {
  return (
    <DocPage
      eyebrow="About"
      title={<>axl.org.</>}
      subtitle="Editor and steward of the AXL Reference. Founding sponsor: Cadence, Inc. Governance roadmap to multi-stakeholder body published at /governance."
      meta={[
        { label: "Founding sponsor", value: "Cadence, Inc." },
        { label: "Governance roadmap", value: <Link href="/governance">/governance</Link> },
        { label: "Contact", value: "hello@axl.org" },
      ]}
    >
      <h2><span className="num">§ 1</span>Mandate</h2>
      <p>
        axl.org publishes the AXL Reference, administers the conformance program, and
        owns the AXL™ certification mark. The mandate is limited to those activities;
        the organization does not operate commercial product offerings.
      </p>

      <h2><span className="num">§ 2</span>Relationship to Cadence</h2>
      <p>
        Cadence, Inc. is the founding sponsor and funds the operations of axl.org at
        the current phase of the <Link href="/governance">governance roadmap</Link>.
        The AXL™ certification mark is owned by axl.org and is not a Cadence asset.
        Certification review of Cadence&apos;s own products is conducted under the same
        process as for any other applicant.
      </p>

      <h2><span className="num">§ 3</span>Published artifacts</h2>
      <ul>
        <li>The AXL Reference (current version: v1.0 Working Draft).</li>
        <li>The Conformance Statement template and L3 reviewer process.</li>
        <li>The Appendix A benchmark suite at <code>github.com/axl-spec/conformance-tests</code>.</li>
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
