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
      eyebrow="The AXL Reference"
      title={
        <>
          The AXL Reference, v1.0
          <br />
          <em className="italic font-normal">Working Draft.</em>
        </>
      }
      subtitle="A specification for the Agentic Experience Layer: a class of personalization system characterised by identity-free perception, autonomous in-session decisioning, real-time rendering, and continuous statistical learning."
      meta={[
        { label: "This version", value: "axlspec.org/spec/v1.0" },
        { label: "Status", value: "Working Draft" },
        { label: "Editor", value: "axlspec.org editorial board" },
        { label: "License", value: "CC BY 4.0" },
        { label: "Repository", value: <a href="https://github.com/tony-toubia/axlspec.org">github.com/tony-toubia/axlspec.org</a> },
      ]}
    >
      <div className="warning">
        <div className="label">Status of this document</div>
        <p>
          This is a Working Draft. It is not a stable specification and may be cited only as work in progress. Comments are accepted as <strong>AXL Specification Proposals</strong> (ASPs) at <code>github.com/tony-toubia/axlspec.org/issues</code>. Each ASP receives a public disposition.
        </p>
      </div>

      <h2 id="abstract">
        <span className="num">§ 0</span>
        Abstract
      </h2>
      <p>
        This document defines the <strong>Agentic Experience Layer</strong>: a class of personalization system characterised by identity-free perception, autonomous in-session decisioning, real-time rendering, and continuous statistical learning. It specifies four required pillars, three conformance levels, the interface surface a conformant implementation exposes, and the test methodology used to verify conformance.
      </p>
      <p>
        The specification is implementation-neutral. It describes the surface a conformant system exposes; it does not prescribe model architectures, hosting topology, or pricing.
      </p>

      <h2 id="introduction">
        <span className="num">§ 1</span>
        Introduction
      </h2>
      <p>
        Personalization, as currently practiced, is typically assembled from several discrete systems: a customer data platform, a segmentation tool, an A/B-testing tool, a journey orchestrator, and an attribution surface. Each operates on a separate schema and is configured by a separate operator.
      </p>
      <p>
        This document specifies an alternative architecture in which the four functions of <em>perceive</em>, <em>decide</em>, <em>render</em>, and <em>learn</em> are operated as a single in-session layer. The category name &mdash; the Agentic Experience Layer &mdash; is descriptive and is intentionally distinct from any product name.
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
        <li><strong>Identity-free by default.</strong> No persistent identifier required for L1 conformance. Implementations that link sessions to identity do so only at the operator&apos;s explicit configuration.</li>
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
        A conformant implementation provides all four pillars. Each pillar has Required and Recommended capabilities. L1 conformance requires Required-level implementation across all four pillars; L3 conformance requires Recommended-level implementation across all four.
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
            <td>L1 + L2 + Recommended clauses; verified review by axlspec.org</td>
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
        <p><strong>Editorial note.</strong> § 7 is expected to evolve through the comment period. Implementers with production experience of idempotency, retry semantics, and treatment-cache invalidation are encouraged to file ASPs.</p>
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
        § 10.1 enumerates the architectural patterns in current commercial use. § 10.2 lists specific platforms whose architecture overlaps with one or more pillars of this specification and indicates, per pillar, the conformance gap. Listings are structural and non-normative; corrections may be filed as ASPs.
      </p>

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
        Appendix A defines the published benchmarks against which L2 attestations and L3 verifications are evaluated: signal-collection accuracy, decisioning latency budget, render-substitution timing, and learn-loop statistical correctness. Executable artifacts are forthcoming and will be linked from this section when published.
      </p>

      <p className="text-ink-muted">
        Comments on this draft should be filed as ASPs at{" "}
        <code>github.com/tony-toubia/axlspec.org/issues</code>. Working-group activity is published at{" "}
        <Link href="/working-groups">/working-groups</Link>; the Conformance Statement process is documented at{" "}
        <Link href="/certification">/certification</Link>.
      </p>
    </DocPage>
  );
}
