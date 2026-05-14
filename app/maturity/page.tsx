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
      eyebrow="The AXL Reference · § 9"
      title={<>Maturity model.</>}
      subtitle="A five-tier classification of operator capability in personalization. Distinct from vendor capability, which is addressed separately by the conformance levels in § 6."
      meta={[
        { label: "Source", value: "§ 9 of the AXL Reference v1.0" },
        { label: "Companion", value: <Link href="/spec/v1.0#maturity">§ 9 of the spec</Link> },
      ]}
    >
      <p>
        The maturity model classifies the operating environment in which a personalization
        capability is exercised, ranging from a coordinated stack of discrete tools (M1) to
        a verified-conformant single-layer implementation (M4). A given vendor product may
        support deployments at multiple tiers; operators may sit at one tier while
        evaluating an architecture more typical of another.
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

      <h2><span className="num">§ 9.2</span>Use of the model</h2>

      <h3>Buyers and procurement</h3>
      <p>
        The model is intended for use in vendor evaluation and procurement pre-reads. The
        operator&apos;s current tier informs the type of capability that will produce
        marginal value; a buyer evaluating a platform whose typical deployment is at a
        higher tier than the operator currently occupies should evaluate the gap
        explicitly. See <Link href="/buyers-guide">/buyers-guide</Link>.
      </p>

      <h3>Vendors</h3>
      <p>
        Vendors may indicate the tier or tiers at which their platform is typically
        deployed. The model is not a stack-rank: platforms supporting M1 or M2
        deployments are not made less useful by the existence of M3.
      </p>

      <h3>Analysts</h3>
      <p>
        The tiers in this section are distinct from the architectural patterns
        enumerated in § 10. The intent of the model is to provide a vocabulary for
        operator capability separately from vendor capability.
      </p>
    </DocPage>
  );
}
