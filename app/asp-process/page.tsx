import type { Metadata } from "next";
import Link from "next/link";
import { DocPage } from "@/app/components/DocPage";

export const metadata: Metadata = {
  title: "ASP process — Submit a specification proposal",
  description:
    "How to file an AXL Specification Proposal (ASP) against the working draft of the AXL Reference. The unit of substantive comment is the ASP.",
};

export default function AspProcessPage() {
  return (
    <DocPage
      eyebrow="Community · ASP process"
      title={
        <>
          Submit an <em className="italic font-normal">AXL Specification Proposal.</em>
        </>
      }
      subtitle="The ASP is the unit of substantive comment on the specification. Each receives a public disposition from the relevant working group."
      meta={[
        { label: "Template", value: <a href="https://github.com/axl-spec/spec/blob/main/ASP-process.md">ASP-process.md</a> },
        { label: "Review", value: "Working groups, biweekly" },
        { label: "Credit", value: "Editorial section of subsequent versions" },
      ]}
    >
      <h2><span className="num">§ 1</span>What an ASP looks like</h2>
      <p>
        An ASP is a GitHub issue on <code>github.com/axl-spec/spec</code>, labelled <code>asp</code>, using the template at <code>ASP-process.md</code>. It contains:
      </p>
      <ul>
        <li><strong>Clause cited.</strong> The exact clause of the specification being challenged or extended (e.g. § 5.2 Decide — Recommended capabilities).</li>
        <li><strong>Proposed change.</strong> The specific replacement, addition, or deletion proposed.</li>
        <li><strong>Rationale.</strong> Production evidence, citation to adjacent specifications, or a counter-example to the current wording.</li>
        <li><strong>Compatibility.</strong> Whether the change is breaking against v1.0 Final, and if so, why a major-version change is warranted.</li>
      </ul>

      <h2><span className="num">§ 2</span>What happens to an ASP</h2>
      <ol>
        <li>The editorial board labels the ASP with the receiving working group.</li>
        <li>The working group triages at its next biweekly meeting and posts a tentative disposition.</li>
        <li>If accepted: the change lands in a Release Candidate and the proposer is credited in the editorial section.</li>
        <li>If deferred: a target version is named (e.g. v1.1, v2.0).</li>
        <li>If declined: a written rationale is posted to the disposition log.</li>
      </ol>

      <h2><span className="num">§ 3</span>Disposition log</h2>
      <p>
        Every ASP receives a public disposition. Dispositions are recorded in <code>github.com/axl-spec/spec/blob/main/disposition-log.md</code> and are the authoritative record of substantive comment on the specification.
      </p>

      <p className="text-ink-muted">
        ASPs that cite production evidence not yet accounted for in the
        specification are likely to receive the most substantive working-group
        consideration. The current draft is at <Link href="/spec/v1.0">/spec/v1.0</Link>.
      </p>
    </DocPage>
  );
}
