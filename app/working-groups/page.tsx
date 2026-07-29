import type { Metadata } from "next";
import Link from "next/link";
import { DocPage } from "@/app/components/DocPage";

export const metadata: Metadata = {
  title: "Working groups",
  description:
    "Five working groups – Perceive, Decide, Render, Learn, Governance – meet biweekly to evolve the AXL Reference. Seats are open. Working-group contributions earn editorial-section credit in v1.x.",
};

const GROUPS = [
  {
    code: "WG-P",
    name: "Perceive",
    scope: "Behavioral signal collection. Identity-free state. Session boundaries. Cross-channel signal merging.",
    chair: "Open for nomination",
    meets: "Biweekly, Tuesdays 11:00 PT",
  },
  {
    code: "WG-D",
    name: "Decide",
    scope: "Autonomous treatment selection. In-session decisioning. Explainability and observability.",
    chair: "Open for nomination",
    meets: "Biweekly, Wednesdays 09:00 PT",
  },
  {
    code: "WG-R",
    name: "Render",
    scope: "Real-time substitution surfaces. Framework-agnostic injection. Flicker-free rendering at the edge.",
    chair: "Open for nomination",
    meets: "Biweekly, Thursdays 09:00 PT",
  },
  {
    code: "WG-L",
    name: "Learn",
    scope: "Statistical significance reporting. Holdout discipline. Attribution. In-session model updates.",
    chair: "Open for nomination",
    meets: "Biweekly, Thursdays 13:00 PT",
  },
  {
    code: "WG-G",
    name: "Governance",
    scope: "Editorial process. Conformance program operations. Multi-stakeholder governance roadmap. Trademark policy.",
    chair: "axlspec.org editorial board (rotating)",
    meets: "Monthly, last Friday 10:00 PT",
  },
];

export default function WorkingGroupsPage() {
  return (
    <DocPage
      eyebrow="Working groups"
      title={<>Working groups.</>}
      subtitle="Five public-record bodies – one per pillar plus governance – that evolve the AXL Reference. Seats are open. Contributions are credited in the editorial section of subsequent specification versions."
      meta={[
        { label: "Charter", value: <Link href="/spec/v1.0#governance">§ 12.1 of the AXL Reference</Link> },
        { label: "Calendar", value: <a href="https://github.com/tony-toubia/axlspec.org">github.com/tony-toubia/axlspec.org</a> },
        { label: "ASP process", value: <Link href="/asp-process">axlspec.org/asp-process</Link> },
      ]}
    >
      <p>
        Working groups meet on the public record. Minutes and decisions are published to the project repository at <code>github.com/tony-toubia/axlspec.org</code>. Seats are open: anyone may attend; anyone with two accepted ASPs may be nominated for a voting seat.
      </p>

      <h2><span className="num">§ 1</span>Active groups</h2>

      <table>
        <thead>
          <tr>
            <th>Code</th>
            <th>Group</th>
            <th>Chair</th>
            <th>Schedule</th>
          </tr>
        </thead>
        <tbody>
          {GROUPS.map((g) => (
            <tr key={g.code}>
              <td><strong>{g.code}</strong></td>
              <td>
                <strong>{g.name}</strong>
                <br />
                <span className="text-ink-muted">{g.scope}</span>
              </td>
              <td>{g.chair}</td>
              <td>{g.meets}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2><span className="num">§ 2</span>How to join</h2>

      <h3>2.1 Attend</h3>
      <p>
        All meetings are publicly observable. The calendar of upcoming meetings, with dial-in details, is on each group&apos;s repository. No registration is required to attend.
      </p>

      <h3>2.2 Contribute</h3>
      <p>
        File an <strong>AXL Specification Proposal</strong> (ASP) as a GitHub issue at <code>github.com/tony-toubia/axlspec.org/issues</code> using the <code>asp</code> label. The relevant working group triages incoming ASPs at each biweekly meeting and assigns a disposition: accepted, deferred, declined, or under-discussion.
      </p>

      <h3>2.3 Stand for a seat</h3>
      <p>
        Contributors with at least two accepted ASPs in a working group&apos;s scope may stand for a voting seat. Nominations are reviewed by the governance working group. Voting seats commit to attending three of every four meetings and voting on dispositions on the record.
      </p>

      <h2><span className="num">§ 3</span>Credit</h2>
      <p>
        Working-group contributors are credited by name in the editorial section of every specification version they helped shape. Substantive ASP authors are listed in the disposition log. Cited reviewer reports for L3 certifications credit the working-group reviewer panel.
      </p>

      <p className="text-ink-muted">
        Vendors named in <Link href="/spec/v1.0#landscape">§ 10.2</Link> of the
        specification may file ASPs against any characterization they believe is
        inaccurate; the disposition log is the formal record of any resulting changes.
      </p>
    </DocPage>
  );
}
