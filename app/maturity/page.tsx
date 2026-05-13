import type { Metadata } from "next";
import Link from "next/link";
import { DocPage } from "@/app/components/DocPage";

export const metadata: Metadata = {
  title: "Maturity model",
  description:
    "A buyer-facing model for locating your personalization stack. Five tiers — Tooled, Coordinated, Decisioned, Agentic, Reference — calibrated against the four AXL pillars.",
};

const TIERS = [
  {
    num: "M0",
    name: "Tooled",
    line: "You own the five-tool stack and operate it manually.",
    chars: [
      "CDP, segmentation, A/B, journey, and attribution operated as separate tools.",
      "Integration is bespoke. Operators construct segments, attach treatments, attribute outcomes by hand.",
      "Lift is measurable. Operational cost is measurable. The ratio between them is degrading.",
    ],
  },
  {
    num: "M1",
    name: "Coordinated",
    line: "The five tools have been wired together. Workflows exist.",
    chars: [
      "Tooling integrations are in production: segments flow into experimentation; experiments flow into orchestration.",
      "A central team owns the meta-workflow. Most marketers operate one tool, not five.",
      "AXL pillars are recognizable but distributed across vendors.",
    ],
  },
  {
    num: "M2",
    name: "Decisioned",
    line: "A single platform makes the treatment decision.",
    chars: [
      "Decide is collapsed into one system. Operators configure constraints; the system selects treatments.",
      "Perceive and Render may still be separate from Decide.",
      "Learn is structured: significance reporting, lift measurement, holdout discipline.",
    ],
  },
  {
    num: "M3",
    name: "Agentic",
    line: "One system perceives, decides, renders, and learns in session.",
    chars: [
      "All four pillars operate inside a single decisioning surface.",
      "Identity-free perception by default; in-session decisioning at request time.",
      "Suitable for AXL L1 or L2 attestation.",
    ],
  },
  {
    num: "M4",
    name: "Reference",
    line: "The implementation passes verified conformance against the full spec.",
    chars: [
      "All Required and Recommended capabilities of §5 satisfied.",
      "Published Appendix A benchmark reproductions.",
      "§7 agentic interface surface inspectable by axl.org reviewers.",
      "Eligible for L3 verified certification and AXL™ mark.",
    ],
  },
];

export default function MaturityPage() {
  return (
    <DocPage
      eyebrow="Specification · § 9 · Maturity Model"
      title={
        <>
          Where is your stack on the <em className="italic font-normal">maturity curve?</em>
        </>
      }
      subtitle="The model classifies operator capability, not vendor capability. Buyers locate themselves on the curve; vendors demonstrate which tiers their platform supports. Use this page in vendor evaluation, board reporting, or as a procurement pre-read."
      meta={[
        { label: "Audience", value: "Buyers, procurement, RevOps leads" },
        { label: "Normative", value: "§ 9 of the AXL Reference v1.0" },
        { label: "Companion", value: <Link href="/spec/v1.0#maturity">§ 9 of the spec</Link> },
      ]}
    >
      <p>
        Most personalization teams sit at <strong>M1</strong>. The five-tool stack is integrated; workflows exist; operators have learned to coordinate the tools. The cost of this integration — measured in headcount, vendor spend, and time-to-experiment — is what AXL describes as &ldquo;structurally exhausted.&rdquo;
      </p>
      <p>
        <strong>M2</strong> is where most teams aspiring to consolidate are aiming. <strong>M3</strong> is the threshold at which AXL conformance becomes attainable. <strong>M4</strong> is verified, certified, AXL™-marked.
      </p>

      <h2><span className="num">§ 9.1</span>Five tiers</h2>

      {TIERS.map((tier) => (
        <section key={tier.num} className="mt-10">
          <div className="border-t-2 border-ink pt-5">
            <p className="font-mono text-[11px] tracking-[0.10em] text-ink-muted">{tier.num}</p>
            <h3 className="!mt-1 !mb-3">{tier.name}</h3>
            <p className="font-serif italic text-[17px] text-ink-soft !mb-3">{tier.line}</p>
            <ul className="!mt-2">
              {tier.chars.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </section>
      ))}

      <h2><span className="num">§ 9.2</span>How to use this model</h2>

      <h3>Buyers</h3>
      <p>
        Locate yourself honestly. The most expensive mistake in personalization is shopping for an M3 capability while operating at M1. Vendors selling M3 platforms generally require an M2 operator to extract the lift. Read <Link href="/buyers-guide">/buyers-guide</Link> for the procurement-language version of this point.
      </p>

      <h3>Vendors</h3>
      <p>
        Publish the maturity tier you support. If your platform serves operators at M1 well but does not support an M3 deployment, say so. AXL is not a stack-rank: M2 platforms are valuable, often necessary, and not made less so by the existence of M3.
      </p>

      <h3>Analysts</h3>
      <p>
        The maturity tiers map onto, but do not reduce to, the §10 reference landscape. The intent is to give analyst reports a vocabulary that is precise about <em>operator capability</em> separately from <em>vendor capability</em>, which the current category language does not.
      </p>

      <div className="callout">
        <p>
          <strong>Self-locate in 60 seconds:</strong> a printable single-page worksheet is at <code>axl.org/maturity/worksheet</code>. The buyer&apos;s-guide TCO calculator at <Link href="/tco">/tco</Link> uses this model to estimate the cost differential between your current tier and the next.
        </p>
      </div>
    </DocPage>
  );
}
