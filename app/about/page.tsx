import type { Metadata } from "next";
import Link from "next/link";
import { DocPage } from "@/app/components/DocPage";

export const metadata: Metadata = {
  title: "About axl.org",
  description:
    "axl.org is the stewarding organization for the AXL Reference. Founding sponsor: Cadence. Path to multi-stakeholder governance documented in §12.1 of the spec.",
};

export default function AboutPage() {
  return (
    <DocPage
      eyebrow="About"
      title={
        <>
          axl.org is the steward of <em className="italic font-normal">the AXL Reference.</em>
        </>
      }
      subtitle="A small, deliberate organization with a single mandate: publish, evolve, and verify conformance against the open specification for the Agentic Experience Layer."
      meta={[
        { label: "Founding sponsor", value: "Cadence" },
        { label: "Governance roadmap", value: <Link href="/governance">/governance</Link> },
        { label: "Contact", value: "hello@axl.org" },
      ]}
    >
      <h2><span className="num">§ 1</span>Why axl.org exists</h2>
      <p>
        Categories don&apos;t name themselves. The CDP Institute named CDPs; the OpenAPI Initiative named OpenAPI; the MCP working group named MCP. Each of these organizations exists to do three things: publish a specification, run a conformance program, and adjudicate the inevitable arguments about what counts.
      </p>
      <p>
        axl.org does those three things, for the Agentic Experience Layer.
      </p>

      <h2><span className="num">§ 2</span>What axl.org is not</h2>
      <p>
        axl.org is not Cadence. Cadence is the founding sponsor — it pays the bills, it staffs the editorial board, and it benefits from the category becoming real. The certification mark is owned by axl.org separately, precisely so that Cadence does not have unilateral control over which vendors may use it. The asymmetry between &ldquo;founding sponsor&rdquo; and &ldquo;mark owner&rdquo; is structurally important and is described in <Link href="/spec/v1.0#governance">§ 12 of the spec</Link>.
      </p>

      <h2><span className="num">§ 3</span>What we publish</h2>
      <ul>
        <li>The AXL Reference, currently at v1.0 Draft.</li>
        <li>The Conformance Statement template and the L3 reviewer process.</li>
        <li>The Appendix A benchmark suite, executable, at <code>github.com/axl-spec/conformance-tests</code>.</li>
        <li>The trademark policy at <Link href="/trademark">/trademark</Link>.</li>
        <li>Working-group minutes, disposition logs, and annual transparency reports.</li>
      </ul>

      <h2><span className="num">§ 4</span>How to engage</h2>
      <p>
        File an ASP. Join a working group. Publish a Conformance Statement. Or, if you operate at a §10.2 vendor, accept the standing invitation in the <Link href="/working-groups">working-groups</Link> page to engage at the working-group level.
      </p>
    </DocPage>
  );
}
