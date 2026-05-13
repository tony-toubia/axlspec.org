import Link from "next/link";

const PILLARS = [
  {
    num: "01",
    name: "Perceive",
    summary:
      "Identity-free behavioral signal collection. Session-level state without persistent profiles.",
  },
  {
    num: "02",
    name: "Decide",
    summary:
      "Autonomous agent selection of treatment, content, and journey — at request time, on first visit, without rules.",
  },
  {
    num: "03",
    name: "Render",
    summary:
      "Real-time substitution of page content, copy, and component state — flicker-free, framework-agnostic.",
  },
  {
    num: "04",
    name: "Learn",
    summary:
      "Continuous, in-session feedback loops with statistical significance reporting and lift measurement.",
  },
];

const PRINCIPLES = [
  { k: "Open", v: "Published under CC BY 4.0. Implementable by any vendor." },
  { k: "Vendor-neutral", v: "Cadence is the founding sponsor; the spec is not Cadence." },
  { k: "Conformance-driven", v: "L1 Functional, L2 Production, L3 Reference — earned, not claimed." },
  { k: "Multi-stakeholder", v: "Path to 501(c)(6) governance at ≥10 certified vendors." },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="border-b rule-strong">
        <div className="mx-auto max-w-[1180px] px-6 sm:px-10 pt-20 pb-24">
          <p className="eyebrow">v1.0 Draft · Public comment open</p>

          <h1 className="mt-6 font-serif font-medium text-[clamp(40px,7vw,80px)] leading-[1.02] tracking-[-0.02em] text-ink max-w-[18ch]">
            The <em className="italic font-normal">Agentic</em>
            <br />
            Experience Layer.
          </h1>

          <p className="mt-8 font-serif italic text-[19px] sm:text-[22px] leading-[1.5] text-ink-soft max-w-[58ch]">
            AXL is the open specification for personalization infrastructure
            that perceives, decides, renders, and learns — autonomously, in
            session, without the five-tool stack.
          </p>

          <div className="mt-12 flex flex-wrap gap-3">
            <Link
              href="/spec/v1.0"
              className="font-mono text-[12px] tracking-[0.10em] uppercase bg-ink text-bg px-5 py-3 hover:bg-highlight transition-colors"
            >
              Read the v1.0 Draft →
            </Link>
            <Link
              href="/conformance"
              className="font-mono text-[12px] tracking-[0.10em] uppercase border border-ink text-ink px-5 py-3 hover:bg-ink hover:text-bg transition-colors"
            >
              Conformance Levels
            </Link>
            <Link
              href="https://github.com/axl-spec"
              className="font-mono text-[12px] tracking-[0.10em] uppercase border border-rule-strong text-ink-soft px-5 py-3 hover:border-ink hover:text-ink transition-colors"
            >
              github.com/axl-spec
            </Link>
          </div>

          <dl className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6 max-w-3xl text-[13px] border-t rule pt-8">
            <div>
              <dt className="font-mono text-[10px] tracking-[0.15em] uppercase text-ink-muted">Status</dt>
              <dd className="mt-1 text-ink-soft">v1.0 Draft · Open for ASPs</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] tracking-[0.15em] uppercase text-ink-muted">License</dt>
              <dd className="mt-1 text-ink-soft">CC BY 4.0</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] tracking-[0.15em] uppercase text-ink-muted">Comment period</dt>
              <dd className="mt-1 text-ink-soft">60 days from launch</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] tracking-[0.15em] uppercase text-ink-muted">Steward</dt>
              <dd className="mt-1 text-ink-soft">axl.org</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* WHAT IT IS */}
      <section className="border-b rule">
        <div className="mx-auto max-w-[1180px] px-6 sm:px-10 py-24 grid md:grid-cols-[1fr_2fr] gap-12">
          <div>
            <p className="eyebrow">§ 01</p>
            <h2 className="mt-4 font-serif text-[32px] leading-[1.15] tracking-[-0.01em]">
              A category, <em className="italic font-normal">precisely named.</em>
            </h2>
          </div>
          <div className="font-serif text-[17px] leading-[1.7] text-ink-soft space-y-5 max-w-[58ch]">
            <p>
              The five-tool personalization stack — <strong className="text-ink">CDP plus segmentation plus A/B plus journey plus attribution</strong> — is structurally exhausted. Buyers feel it; analysts are starting to write about it. AXL describes the architecture that replaces it.
            </p>
            <p>
              The Agentic Experience Layer is not a product. It is a class of system: identity-free, in-session, autonomously decisioned, continuously learning. The AXL Reference defines the four pillars, the conformance levels, the test methodology, and the language a buyer can use in an RFP.
            </p>
            <p>
              <strong className="text-ink">The longform is descriptive.</strong> &ldquo;Agentic Experience Layer&rdquo; is a category, the way &ldquo;customer data platform&rdquo; is a category. Anyone can use it. The wordmark <strong className="text-ink">AXL</strong> is owned by Cadence; the certification mark <strong className="text-ink">AXL™</strong> is administered by axl.org and earned through verified conformance.
            </p>
          </div>
        </div>
      </section>

      {/* FOUR PILLARS */}
      <section className="border-b rule">
        <div className="mx-auto max-w-[1180px] px-6 sm:px-10 py-24">
          <div className="max-w-[680px]">
            <p className="eyebrow">§ 02 · The four pillars</p>
            <h2 className="mt-4 font-serif text-[36px] sm:text-[44px] leading-[1.1] tracking-[-0.015em]">
              Perceive. Decide. <em className="italic font-normal">Render. Learn.</em>
            </h2>
            <p className="mt-6 font-serif italic text-[17px] text-ink-soft leading-[1.6]">
              An AXL-conformant system implements all four. Anything less is a component, not a layer.
            </p>
          </div>

          <div className="mt-16 grid sm:grid-cols-2 gap-x-12 gap-y-12">
            {PILLARS.map((p) => (
              <div key={p.num} className="border-t-2 border-ink pt-6">
                <p className="font-mono text-[11px] tracking-[0.10em] text-ink-muted">
                  {p.num}
                </p>
                <h3 className="mt-2 font-serif text-[28px] tracking-[-0.01em] text-ink">
                  {p.name}
                </h3>
                <p className="mt-3 font-sans text-[14.5px] leading-[1.65] text-ink-soft">
                  {p.summary}
                </p>
                <Link
                  href={`/spec/v1.0#pillar-${p.name.toLowerCase()}`}
                  className="mt-4 inline-block font-mono text-[11px] tracking-[0.08em] uppercase text-ink underline decoration-rule-strong underline-offset-[3px] hover:decoration-ink"
                >
                  § 5 — Pillar definition
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONFORMANCE PREVIEW */}
      <section className="border-b rule bg-bg-alt/50">
        <div className="mx-auto max-w-[1180px] px-6 sm:px-10 py-24 grid md:grid-cols-3 gap-10">
          <div className="md:col-span-1">
            <p className="eyebrow">§ 03 · Conformance</p>
            <h2 className="mt-4 font-serif text-[32px] leading-[1.15] tracking-[-0.01em]">
              Three levels.<br />
              <em className="italic font-normal">Earned, not claimed.</em>
            </h2>
            <p className="mt-6 text-[14.5px] text-ink-soft leading-[1.65]">
              A vendor may attest at L1 or L2 via a public Conformance Statement. L3 requires verified review and is the prerequisite for the AXL™ mark.
            </p>
            <Link
              href="/conformance"
              className="mt-6 inline-block font-mono text-[11px] tracking-[0.10em] uppercase text-ink underline decoration-rule-strong underline-offset-[4px] hover:decoration-ink"
            >
              Conformance methodology →
            </Link>
          </div>

          <div className="md:col-span-2 space-y-6">
            {[
              {
                level: "L1",
                name: "Functional",
                desc: "Implements all four pillars at a Required level. Self-attested via published Conformance Statement.",
              },
              {
                level: "L2",
                name: "Production",
                desc: "L1 plus published reproduction of Appendix A benchmarks under the AXL test methodology. Self-attested with audit-ready artifacts.",
              },
              {
                level: "L3",
                name: "Reference",
                desc: "Verified by axl.org review against the full specification including all Recommended capabilities. Required for use of the AXL™ certification mark.",
              },
            ].map((row) => (
              <div
                key={row.level}
                className="bg-bg border rule-strong p-6 sm:p-7 grid grid-cols-[60px_1fr] gap-6"
              >
                <p className="font-mono text-[13px] tracking-[0.08em] text-highlight font-medium">
                  {row.level}
                </p>
                <div>
                  <h3 className="font-serif text-[20px] text-ink">{row.name}</h3>
                  <p className="mt-2 text-[14px] text-ink-soft leading-[1.6]">
                    {row.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="border-b rule">
        <div className="mx-auto max-w-[1180px] px-6 sm:px-10 py-24">
          <p className="eyebrow">§ 04 · How this works</p>
          <h2 className="mt-4 font-serif text-[32px] tracking-[-0.01em] max-w-[20ch] leading-[1.15]">
            An open specification, stewarded in the open.
          </h2>

          <dl className="mt-12 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {PRINCIPLES.map((p) => (
              <div key={p.k} className="border-t-2 border-ink pt-5">
                <dt className="font-sans font-semibold text-[12px] tracking-[0.06em] uppercase text-accent">
                  {p.k}
                </dt>
                <dd className="mt-2 text-[14px] text-ink-soft leading-[1.6]">
                  {p.v}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* CTA STRIP */}
      <section>
        <div className="mx-auto max-w-[1180px] px-6 sm:px-10 py-24">
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/spec/v1.0"
              className="group border rule-strong bg-bg p-8 hover:border-ink transition-colors"
            >
              <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-ink-muted">
                For implementers
              </p>
              <p className="mt-3 font-serif text-[22px] leading-[1.25] text-ink">
                Read the v1.0 Draft specification.
              </p>
              <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.10em] text-ink group-hover:text-highlight">
                axl.org/spec/v1.0 →
              </p>
            </Link>

            <Link
              href="/maturity"
              className="group border rule-strong bg-bg p-8 hover:border-ink transition-colors"
            >
              <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-ink-muted">
                For buyers
              </p>
              <p className="mt-3 font-serif text-[22px] leading-[1.25] text-ink">
                Locate your stack on the maturity model.
              </p>
              <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.10em] text-ink group-hover:text-highlight">
                axl.org/maturity →
              </p>
            </Link>

            <Link
              href="/working-groups"
              className="group border rule-strong bg-bg p-8 hover:border-ink transition-colors"
            >
              <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-ink-muted">
                For vendors
              </p>
              <p className="mt-3 font-serif text-[22px] leading-[1.25] text-ink">
                Join a working group. File an ASP.
              </p>
              <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.10em] text-ink group-hover:text-highlight">
                axl.org/working-groups →
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
