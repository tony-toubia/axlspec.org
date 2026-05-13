import type { Metadata } from "next";
import { DocPage } from "@/app/components/DocPage";

export const metadata: Metadata = {
  title: "Glossary",
  description:
    "Normative terminology for the AXL Reference. Definitions are working-draft and subject to comment through the v1.0 comment period.",
};

const TERMS: { term: string; def: React.ReactNode }[] = [
  {
    term: "Agent",
    def: "An autonomous decisioning process that operates over a session without per-request human intervention. The Decide pillar (§5.2) is implemented by an agent.",
  },
  {
    term: "Agentic Experience Layer (longform)",
    def: "The descriptive category phrase. Used as a category name. Not a trademark; free for any party to use.",
  },
  {
    term: "ASP — AXL Specification Proposal",
    def: "The unit of substantive comment on the specification. Filed as a GitHub issue using the ASP template. Receives a public disposition (accepted, deferred, declined) from the relevant working group.",
  },
  {
    term: "Attestation",
    def: "A statement by an implementer that their product satisfies a specific conformance level. Self-attested at L1 and L2; verified by axl.org at L3.",
  },
  {
    term: "AXL (wordmark)",
    def: "The three-letter wordmark, owned by Cadence, Inc. Used to refer to the specification, the certification mark, and the category architecture.",
  },
  {
    term: "AXL™ (certification mark)",
    def: "The certification mark, owned and administered by axl.org. May only be used by vendors with current verified L3 certification, under the trademark policy.",
  },
  {
    term: "Buyer's guide",
    def: "§ 11 of the AXL Reference. The procurement-facing rendering of the specification, providing RFP language, vendor evaluation criteria, and required artifacts.",
  },
  {
    term: "Conformance Statement",
    def: "A public document filed by an implementer attesting, clause-by-clause, to specific clauses of the specification at L1 or L2.",
  },
  {
    term: "Decide",
    def: "Pillar 2 of the AXL Reference (§5.2). The autonomous selection of treatment, content, and journey by an agent at request time, on first visit, without rules.",
  },
  {
    term: "Editorial board",
    def: "The body responsible for publishing the AXL Reference, triaging ASPs, and operating the certification program. The board transitions to multi-stakeholder governance per §12.1.",
  },
  {
    term: "Learn",
    def: "Pillar 4 of the AXL Reference (§5.4). Continuous, in-session feedback loops with statistical significance reporting and lift measurement.",
  },
  {
    term: "L1, L2, L3 — Conformance levels",
    def: "Functional, Production, Reference. L1 and L2 are self-attested; L3 is verified by axl.org and is the prerequisite for the AXL™ mark.",
  },
  {
    term: "Maturity model",
    def: "§ 9 of the AXL Reference. A five-tier classification of operator capability — Tooled, Coordinated, Decisioned, Agentic, Reference.",
  },
  {
    term: "Perceive",
    def: "Pillar 1 of the AXL Reference (§5.1). Identity-free behavioral signal collection over the live session.",
  },
  {
    term: "Render",
    def: "Pillar 3 of the AXL Reference (§5.3). Real-time substitution of page content, copy, and component state — flicker-free, framework-agnostic.",
  },
  {
    term: "Required vs. Recommended capability",
    def: "Each pillar has Required and Recommended capabilities. L1 conformance requires Required-level across all four pillars; L3 requires Recommended-level across all four.",
  },
  {
    term: "Session",
    def: "A contiguous sequence of visitor interactions, bounded by a configurable inactivity timeout. Identity-free by default.",
  },
  {
    term: "Treatment",
    def: "A specific rendering of content, copy, or interaction selected by an agent for a given session.",
  },
  {
    term: "Working group",
    def: "One of five public-record bodies that evolve the specification — Perceive, Decide, Render, Learn, Governance. See /working-groups.",
  },
];

export default function GlossaryPage() {
  return (
    <DocPage
      eyebrow="Specification · § 3 · Terminology"
      title={
        <>
          Glossary.
        </>
      }
      subtitle="Normative terminology for the AXL Reference. Definitions are working-draft and subject to comment through the v1.0 public-comment period."
      meta={[
        { label: "Source", value: "§ 3 of the AXL Reference v1.0" },
        { label: "Status", value: "Working draft" },
      ]}
    >
      <dl className="!mt-4">
        {TERMS.map((t) => (
          <div key={t.term} className="grid sm:grid-cols-[200px_1fr] gap-3 sm:gap-8 py-5 border-b rule">
            <dt className="font-serif text-[17px] text-ink leading-tight">{t.term}</dt>
            <dd className="text-[14.5px] text-ink-soft leading-[1.65]">{t.def}</dd>
          </div>
        ))}
      </dl>
    </DocPage>
  );
}
