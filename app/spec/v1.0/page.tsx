import type { Metadata } from "next";
import Link from "next/link";
import { DocPage } from "@/app/components/DocPage";

export const metadata: Metadata = {
  title: "The AXL Reference v1.0 — Draft",
  description:
    "Open specification for the Agentic Experience Layer. Four pillars, three conformance levels, a published test methodology, and a buyer's-guide language for the personalization category.",
};

export default function SpecV1() {
  return (
    <DocPage
      eyebrow="The AXL Reference · v1.0 Draft · Public comment open"
      title={
        <>
          The AXL Reference
          <br />
          <em className="italic font-normal">v1.0 Draft.</em>
        </>
      }
      subtitle="An open specification for the Agentic Experience Layer — the class of personalization infrastructure that perceives, decides, renders, and learns autonomously, in session."
      meta={[
        { label: "Status", value: "Working Draft · 60-day comment open" },
        { label: "Editor", value: "axl.org editorial board" },
        { label: "License", value: "CC BY 4.0" },
        { label: "Repository", value: <a href="https://github.com/axl-spec/spec">github.com/axl-spec/spec</a> },
        { label: "Cite as", value: "axl.org/spec/v1.0" },
      ]}
    >
      <div className="warning">
        <div className="label">Working draft</div>
        <p>
          This is a draft specification published for public comment. Substantive comments should be filed as <strong>AXL Specification Proposals</strong> (ASPs) against <code>github.com/axl-spec/spec</code>. The comment period runs 60 days from the publication date. Following close of comment, the editorial board will publish Release Candidates with a public disposition log for every ASP received.
        </p>
      </div>

      <h2 id="abstract">
        <span className="num">§ 0</span>
        Abstract
      </h2>
      <p>
        The AXL Reference defines the <strong>Agentic Experience Layer</strong>: a class of personalization infrastructure characterised by identity-free perception, autonomous in-session decisioning, real-time rendering, and continuous statistical learning. The specification names four required pillars, three conformance levels, an agentic interface surface that AXL-conformant systems expose to autonomous agents, and a published test methodology against which any vendor can be evaluated.
      </p>
      <p>
        AXL is the response to the structural exhaustion of the five-tool personalization stack — customer data platform, segmentation, A/B testing, journey orchestration, and attribution — assembled into a workflow whose integration cost has come to exceed the lift it produces. The spec is intentionally neutral as to vendor: it describes a class of system, not a product.
      </p>

      <h2 id="introduction">
        <span className="num">§ 1</span>
        Introduction
      </h2>
      <p>
        Personalization, as practiced for the last fifteen years, has been a workflow problem: a marketer constructs a segment, attaches a treatment, runs an experiment, attributes outcomes, then iterates. Each step requires a different tool, a different schema, and a different operator. AXL describes the architecture that collapses the workflow into a single layer: <strong>one system that observes a visitor in the moment, decides what to show them, renders it, and updates its decisioning model from the outcome</strong>.
      </p>
      <p>
        The category needs a name because buyers, analysts, and procurement teams need a name. "Personalization" is a feature class; "agentic experience layer" is an architecture class. The distinction matters in RFPs.
      </p>

      <h2 id="scope">
        <span className="num">§ 2</span>
        Scope
      </h2>
      <p>
        This specification covers the architectural surface of an AXL-conformant system, the interfaces it must expose, the conformance levels and how they are attained, and the test methodology used to verify them. It does <strong>not</strong> cover: physical infrastructure, model architectures, data-residency law, or the human workflows that surround the system.
      </p>
      <p>
        Vendors implementing AXL retain full discretion over implementation, model choice, hosting, and pricing. AXL is a conformance specification, not an implementation spec.
      </p>

      <h2 id="terminology">
        <span className="num">§ 3</span>
        Terminology
      </h2>
      <p>
        See the <Link href="/glossary">glossary</Link> for normative definitions. The key terms below appear with their working-draft definitions; final wording is subject to comment.
      </p>
      <ul>
        <li><strong>Agent:</strong> an autonomous decisioning process that operates over a session without per-request human intervention.</li>
        <li><strong>Session:</strong> a contiguous sequence of visitor interactions, bounded by a configurable inactivity timeout. Identity-free by default.</li>
        <li><strong>Treatment:</strong> a specific rendering of content, copy, or interaction selected by the agent for a given session.</li>
        <li><strong>Conformance Statement:</strong> a public document in which an implementer attests, at L1 or L2, to specific clauses of this specification.</li>
        <li><strong>ASP:</strong> AXL Specification Proposal — the unit of substantive comment.</li>
      </ul>

      <h2 id="principles">
        <span className="num">§ 4</span>
        Architectural principles
      </h2>
      <p>
        The four pillars in §5 are required. The principles below are normative — they constrain how the pillars are implemented.
      </p>
      <ul>
        <li><strong>Identity-free by default.</strong> No persistent identifier required for L1 conformance. Implementations that link sessions to identity do so only at the operator's explicit configuration.</li>
        <li><strong>In-session decisioning.</strong> All four pillars operate within the lifetime of a single session. Cross-session learning is permitted; in-session human approval is not required.</li>
        <li><strong>Autonomous.</strong> Treatments are selected by the agent without per-request human gating. Operators configure constraints, not decisions.</li>
        <li><strong>Continuously learning.</strong> Outcomes feed the decisioning model in observable cadence. Learn is not a quarterly batch step.</li>
        <li><strong>Open at the edges.</strong> The agentic interface surface (§7) is callable by external systems. AXL implementations do not require proprietary clients.</li>
      </ul>

      <h2 id="pillars">
        <span className="num">§ 5</span>
        The four pillars
      </h2>
      <p>
        An AXL-conformant system implements all four. Anything less is a component, not a layer. Each pillar has Required and Recommended capabilities; L1 conformance requires Required-level implementation of all four, L3 requires Recommended-level.
      </p>

      <h3 id="pillar-perceive">5.1 Perceive</h3>
      <p>
        The system collects behavioral signal from the live session: pageviews, dwell, scroll, click, hover, sequence. Required capabilities operate without persistent identifiers. Recommended capabilities include cross-channel signal merging where the operator has configured identity resolution.
      </p>

      <h3 id="pillar-decide">5.2 Decide</h3>
      <p>
        The system selects a treatment for the current session. Required: the decision is autonomous, made at request time, and reproducible from the in-session signal alone. Recommended: the decision is explainable — an operator can inspect why a treatment was selected for a session.
      </p>

      <h3 id="pillar-render">5.3 Render</h3>
      <p>
        The system substitutes the selected treatment into the rendered experience. Required: substitution is flicker-free on a standards-compliant browser and works through a framework-agnostic surface. Recommended: server-side rendering integration, edge-runtime support.
      </p>

      <h3 id="pillar-learn">5.4 Learn</h3>
      <p>
        The system updates its decisioning model from observed outcomes. Required: statistical-significance reporting at the treatment level; lift measurement against a holdout. Recommended: in-session model updates within a configurable cadence; outcome attribution against a documented attribution model.
      </p>

      <h2 id="conformance">
        <span className="num">§ 6</span>
        Conformance levels
      </h2>
      <p>
        Three levels, ordered from least to most demanding. See <Link href="/conformance">/conformance</Link> for the full description, attestation process, and verification path.
      </p>
      <table>
        <thead>
          <tr>
            <th>Level</th>
            <th>Name</th>
            <th>Attainment</th>
            <th>Mark eligibility</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>L1</strong></td>
            <td>Functional</td>
            <td>Required clauses of §5; self-attested via Conformance Statement</td>
            <td>None — implementation may describe itself as AXL-conformant L1</td>
          </tr>
          <tr>
            <td><strong>L2</strong></td>
            <td>Production</td>
            <td>L1 plus reproduction of Appendix A benchmarks; self-attested</td>
            <td>None — implementation may describe itself as AXL-conformant L2</td>
          </tr>
          <tr>
            <td><strong>L3</strong></td>
            <td>Reference</td>
            <td>L1 + L2 + Recommended clauses; verified review by axl.org</td>
            <td>AXL™ certification mark, per the <Link href="/trademark">trademark policy</Link></td>
          </tr>
        </tbody>
      </table>

      <h2 id="interface">
        <span className="num">§ 7</span>
        Agentic interface surface
      </h2>
      <p>
        AXL-conformant systems expose a minimum interface against which autonomous agents, third-party orchestrators, and conformance test harnesses operate. The surface is normative. The bindings (HTTP/JSON, WebSocket, MCP, etc.) are illustrative; vendors may implement any binding that satisfies the semantic surface described here.
      </p>
      <div className="callout">
        <p><strong>Working-draft note:</strong> §7 is the part of the spec we expect the most ASPs against. Production teams operating personalization at scale have strong opinions about idempotency, retry semantics, and treatment-cache invalidation. We welcome them.</p>
      </div>

      <h2 id="interop">
        <span className="num">§ 8</span>
        Interoperability and adapters
      </h2>
      <p>
        AXL does not specify how an implementation integrates with upstream data systems (CDPs, warehouses, identity graphs) or downstream surfaces (email, mobile, advertising). Reference adapters for common upstream sources are published in the conformance test suite.
      </p>

      <h2 id="maturity">
        <span className="num">§ 9</span>
        Maturity model
      </h2>
      <p>
        The maturity model classifies operator capability — not vendor capability. A buyer locates themselves on the model; a vendor demonstrates which maturity levels their platform supports. The standalone, buyer-facing rendering of §9 lives at <Link href="/maturity">/maturity</Link>.
      </p>

      <h2 id="landscape">
        <span className="num">§ 10</span>
        Reference landscape
      </h2>
      <p>
        §10.1 names the architectural patterns we observe in the market today. §10.2 names specific platforms whose architecture overlaps with one or more AXL pillars, and identifies which pillars each platform satisfies and which would need to evolve to claim full conformance. Naming is structural, not adversarial.
      </p>
      <div className="callout">
        <p>Named vendors are invited to engage via working groups, ASPs, or Conformance Statements. The full disposition log is on GitHub. Vendors who believe their platform has been mischaracterized are encouraged to correct the record on the public log.</p>
      </div>

      <h2 id="buyers-guide">
        <span className="num">§ 11</span>
        Buyer&apos;s guide
      </h2>
      <p>
        §11 provides the language a procurement team can use in an RFP, the questions to ask a vendor, and the artifacts to require (Conformance Statement, Appendix A reproduction, attestation level). A standalone PDF is published at <Link href="/buyers-guide">/buyers-guide</Link>.
      </p>

      <h2 id="governance">
        <span className="num">§ 12</span>
        Governance and trademark
      </h2>
      <p>
        §12.1 covers the path from founding-sponsor stewardship to multi-stakeholder governance. §12.2 covers versioning policy: minor versions are clarifications, major versions are breaking changes. §12.3 covers the AXL trademark policy; the standalone policy is at <Link href="/trademark">/trademark</Link>.
      </p>

      <h2 id="appendix-a">
        <span className="num">Appx A</span>
        Test methodology
      </h2>
      <p>
        Appendix A defines the published benchmarks against which L2 attestations and L3 verifications are evaluated: signal-collection accuracy, decisioning latency budget, render-substitution timing, and learn-loop statistical correctness. Executable artifacts are published at <code>github.com/axl-spec/conformance-tests</code>.
      </p>

      <div className="callout">
        <p>
          <strong>Next steps —</strong> file an ASP on GitHub, join a working group at <Link href="/working-groups">/working-groups</Link>, or attest at L1/L2 by publishing a Conformance Statement at <Link href="/certification">/certification</Link>.
        </p>
      </div>
    </DocPage>
  );
}
