import type { Metadata } from "next";
import Link from "next/link";
import { DocPage } from "@/app/components/DocPage";

export const metadata: Metadata = {
  title: "Governance roadmap",
  description:
    "axlspec.org's path from founding-sponsor stewardship to multi-stakeholder governance. Trigger conditions and transition milestones.",
};

export default function GovernancePage() {
  return (
    <DocPage
      eyebrow="Governance · § 12.1"
      title={
        <>
          From founding sponsor <em className="italic font-normal">to multi-stakeholder body.</em>
        </>
      }
      subtitle="axlspec.org begins as an AXO-controlled entity and transitions to a multi-stakeholder governance body. The roadmap below sets out the trigger conditions and the structural model."
      meta={[
        { label: "Authority", value: <Link href="/spec/v1.0#governance">§ 12.1 of the AXL Reference</Link> },
        { label: "Current phase", value: "Phase 0 — founding stewardship" },
        { label: "Target model", value: "501(c)(6) or equivalent multi-stakeholder body" },
      ]}
    >
      <h2><span className="num">§ 1</span>Why this matters</h2>
      <p>
        A specification governed by one vendor is not credible as a specification; it is a marketing artifact. The AXL Reference is published by AXO as founding sponsor with the explicit, written intent of moving stewardship to a multi-stakeholder body. The roadmap below is the public commitment to that path.
      </p>

      <h2><span className="num">§ 2</span>Phases</h2>

      <table>
        <thead>
          <tr>
            <th>Phase</th>
            <th>Structure</th>
            <th>Trigger to next</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>0 — Founding stewardship</strong></td>
            <td>axlspec.org operated by AXO. Editorial board appointed by AXO; working-group chairs invited from the community.</td>
            <td>v1.0 Final published; ≥ 3 verified L3 certifications issued.</td>
          </tr>
          <tr>
            <td><strong>1 — Mixed governance</strong></td>
            <td>Editorial board reconstituted with AXO holding ≤ 50% of voting seats. Independent chair seated.</td>
            <td>≥ 10 verified L3 certifications across ≥ 5 distinct legal-entity vendors.</td>
          </tr>
          <tr>
            <td><strong>2 — Multi-stakeholder body</strong></td>
            <td>axlspec.org operating under 501(c)(6) or equivalent. AXO holds the same voting seat as any other certified vendor.</td>
            <td>Steady state. Reviewed annually.</td>
          </tr>
        </tbody>
      </table>

      <h2><span className="num">§ 3</span>What stays consistent across phases</h2>
      <ul>
        <li>The specification is published under CC BY 4.0 from v1.0 onward.</li>
        <li>The AXL™ certification mark is owned by axlspec.org, never by AXO.</li>
        <li>Conformance review is symmetric: AXO applies for and is evaluated under the same process as any other vendor.</li>
        <li>Working-group meetings are public-record from day one.</li>
        <li>Reviewer reports are published at <code>axlspec.org/certified/[vendor]</code>.</li>
      </ul>

      <div className="callout">
        <p>
          <strong>Open question:</strong> the optimal multi-stakeholder model — 501(c)(6) trade association, Linux Foundation project, OASIS member, independent foundation — depends on the geographic distribution of certified vendors and on community preference. The choice will be settled at the Phase 1 → Phase 2 transition with input from the working groups.
        </p>
      </div>
    </DocPage>
  );
}
