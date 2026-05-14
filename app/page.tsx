import Link from "next/link";

const PILLARS = [
  {
    num: "01",
    name: "Perceive",
    summary: "Collection of behavioural signal from the live session, without persistent identifiers as a requirement.",
  },
  {
    num: "02",
    name: "Decide",
    summary: "Selection of treatment, content, and journey by an autonomous agent at request time.",
  },
  {
    num: "03",
    name: "Render",
    summary: "Substitution of selected treatment into the rendered experience, framework-agnostic and flicker-free.",
  },
  {
    num: "04",
    name: "Learn",
    summary: "Continuous update of the decisioning model from observed outcomes, with statistical-significance reporting.",
  },
];

const LEVELS = [
  {
    level: "L1",
    name: "Functional",
    desc: "Required clauses of §5; self-attested via published Conformance Statement.",
  },
  {
    level: "L2",
    name: "Production",
    desc: "L1 plus published reproduction of Appendix A benchmarks.",
  },
  {
    level: "L3",
    name: "Reference",
    desc: "Verified review by axl.org against Required and Recommended clauses. Prerequisite for use of the AXL™ certification mark.",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO — quieter, spec-document register */}
      <section className="border-b rule-strong">
        <div className="mx-auto max-w-[1180px] px-6 sm:px-10 pt-20 pb-20">
          <p className="eyebrow">The AXL Reference · v1.0 Draft</p>

          <h1 className="mt-6 font-serif font-medium text-[clamp(38px,6.5vw,72px)] leading-[1.05] tracking-[-0.02em] text-ink max-w-[20ch]">
            An open specification for the
            <br />
            <em className="italic font-normal">Agentic Experience Layer.</em>
          </h1>

          <p className="mt-8 font-serif text-[18px] sm:text-[20px] leading-[1.55] text-ink-soft max-w-[62ch]">
            This document defines a class of personalization infrastructure characterised
            by four required pillars — perceive, decide, render, learn — and three
            conformance levels. Stewarded by axl.org. Published under CC BY 4.0.
          </p>

          <div className="mt-12 flex flex-wrap gap-3">
            <Link
              href="/spec/v1.0"
              className="font-mono text-[12px] tracking-[0.10em] uppercase bg-ink text-paper px-5 py-3 hover:bg-highlight transition-colors"
            >
              Read v1.0 Draft
            </Link>
            <Link
              href="/conformance"
              className="font-mono text-[12px] tracking-[0.10em] uppercase border border-ink text-ink px-5 py-3 hover:bg-ink hover:text-paper transition-colors"
            >
              Conformance
            </Link>
          </div>

          <dl className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6 max-w-4xl text-[13px] border-t rule pt-8">
            <div>
              <dt className="font-mono text-[10px] tracking-[0.15em] uppercase text-ink-muted">Status</dt>
              <dd className="mt-1 text-ink-soft">Working Draft</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] tracking-[0.15em] uppercase text-ink-muted">This version</dt>
              <dd className="mt-1 text-ink-soft">v1.0 Draft · axl.org/spec/v1.0</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] tracking-[0.15em] uppercase text-ink-muted">Comment</dt>
              <dd className="mt-1 text-ink-soft">Open. ASPs accepted on GitHub.</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] tracking-[0.15em] uppercase text-ink-muted">License</dt>
              <dd className="mt-1 text-ink-soft">CC BY 4.0</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* ABSTRACT — clinical, no rhetoric */}
      <section className="border-b rule">
        <div className="mx-auto max-w-[1180px] px-6 sm:px-10 py-20 grid md:grid-cols-[200px_1fr] gap-10">
          <p className="eyebrow self-start">Abstract</p>
          <div className="font-serif text-[16.5px] leading-[1.75] text-ink-soft space-y-4 max-w-[62ch]">
            <p>
              The AXL Reference defines the Agentic Experience Layer: a class of
              personalization system characterised by identity-free perception,
              autonomous in-session decisioning, real-time rendering, and continuous
              statistical learning.
            </p>
            <p>
              The specification is implementation-neutral. It describes the surface a
              conformant system exposes, the conformance levels at which it may be
              evaluated, and the test methodology used to verify them. It does not
              prescribe model architectures, hosting topology, or pricing.
            </p>
            <p>
              The wordmark <strong className="text-ink">AXL</strong> is owned by
              Cadence, Inc. The certification mark <strong className="text-ink">AXL™</strong>{" "}
              is owned and administered by axl.org and is used by certified vendors
              under the <Link href="/trademark" className="underline decoration-rule-strong underline-offset-[3px] hover:decoration-ink">trademark policy</Link>.
              The descriptive longform &ldquo;Agentic Experience Layer&rdquo; is not registered
              and is free for any party to use.
            </p>
          </div>
        </div>
      </section>

      {/* FOUR PILLARS — neutral summaries */}
      <section className="border-b rule">
        <div className="mx-auto max-w-[1180px] px-6 sm:px-10 py-20">
          <div className="grid md:grid-cols-[200px_1fr] gap-10">
            <div>
              <p className="eyebrow">§ 5</p>
              <h2 className="mt-3 font-serif text-[26px] tracking-[-0.01em] leading-[1.2]">
                The four pillars.
              </h2>
            </div>
            <p className="font-serif text-[16.5px] leading-[1.75] text-ink-soft max-w-[58ch]">
              A conformant implementation provides all four pillars. Each pillar has
              Required and Recommended capabilities. L1 conformance requires
              Required-level across all four; L3 requires Recommended-level across
              all four.
            </p>
          </div>

          <div className="mt-14 grid sm:grid-cols-2 gap-x-10 gap-y-10">
            {PILLARS.map((p) => (
              <div key={p.num} className="border-t-2 border-ink pt-5">
                <p className="font-mono text-[11px] tracking-[0.10em] text-ink-muted">
                  § 5.{p.num.slice(1)}
                </p>
                <h3 className="mt-2 font-serif text-[24px] tracking-[-0.01em] text-ink">
                  {p.name}
                </h3>
                <p className="mt-2 font-sans text-[14.5px] leading-[1.65] text-ink-soft">
                  {p.summary}
                </p>
                <Link
                  href={`/spec/v1.0#pillar-${p.name.toLowerCase()}`}
                  className="mt-3 inline-block font-mono text-[11px] tracking-[0.08em] uppercase text-ink-muted hover:text-ink underline decoration-rule-strong underline-offset-[3px] hover:decoration-ink"
                >
                  Read § 5.{p.num.slice(1)}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONFORMANCE — restrained, no marketing framing */}
      <section className="border-b rule">
        <div className="mx-auto max-w-[1180px] px-6 sm:px-10 py-20 grid md:grid-cols-[200px_1fr] gap-10">
          <div>
            <p className="eyebrow">§ 6</p>
            <h2 className="mt-3 font-serif text-[26px] tracking-[-0.01em] leading-[1.2]">
              Conformance levels.
            </h2>
          </div>

          <div className="space-y-5 max-w-[680px]">
            {LEVELS.map((row) => (
              <div
                key={row.level}
                className="grid grid-cols-[60px_1fr] gap-6 py-4 border-b rule"
              >
                <p className="font-mono text-[13px] tracking-[0.08em] text-ink font-medium">
                  {row.level}
                </p>
                <div>
                  <h3 className="font-serif text-[19px] text-ink">{row.name}</h3>
                  <p className="mt-1.5 text-[14px] text-ink-soft leading-[1.6]">
                    {row.desc}
                  </p>
                </div>
              </div>
            ))}

            <div className="pt-2">
              <Link
                href="/conformance"
                className="font-mono text-[11px] tracking-[0.10em] uppercase text-ink underline decoration-rule-strong underline-offset-[4px] hover:decoration-ink"
              >
                § 6 — Conformance methodology
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENTS — a single, minimal navigation block, no audience-tiered marketing */}
      <section>
        <div className="mx-auto max-w-[1180px] px-6 sm:px-10 py-20">
          <p className="eyebrow">Contents</p>
          <ul className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-2 max-w-[860px] text-[14px]">
            {[
              ["/spec/v1.0", "The AXL Reference v1.0"],
              ["/glossary", "§ 3 — Terminology"],
              ["/maturity", "§ 9 — Maturity model"],
              ["/conformance", "§ 6 — Conformance"],
              ["/certification", "Certification process"],
              ["/trademark", "Trademark policy"],
              ["/working-groups", "Working groups"],
              ["/asp-process", "ASP process"],
              ["/governance", "Governance roadmap"],
            ].map(([href, label]) => (
              <li key={href} className="py-1.5 border-b rule">
                <Link
                  href={href}
                  className="text-ink-soft hover:text-ink underline decoration-transparent hover:decoration-rule-strong underline-offset-[3px] flex justify-between"
                >
                  <span>{label}</span>
                  <span className="font-mono text-[11px] text-ink-muted">{href}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
