import Link from "next/link";

const COLUMNS: { heading: string; links: { href: string; label: string }[] }[] = [
  {
    heading: "Specification",
    links: [
      { href: "/spec/v1.0", label: "AXL Reference v1.0" },
      { href: "/glossary", label: "Glossary" },
      { href: "/conformance", label: "Conformance levels" },
      { href: "/maturity", label: "Maturity model" },
    ],
  },
  {
    heading: "Certification",
    links: [
      { href: "/certification", label: "Certification process" },
      { href: "/certified", label: "Certified vendors" },
      { href: "/trademark", label: "AXL™ trademark policy" },
    ],
  },
  {
    heading: "Community",
    links: [
      { href: "/working-groups", label: "Working groups" },
      { href: "https://github.com/axl-spec", label: "GitHub" },
      { href: "/asp-process", label: "Submit an ASP" },
    ],
  },
  {
    heading: "About",
    links: [
      { href: "/about", label: "axl.org" },
      { href: "/governance", label: "Governance roadmap" },
      { href: "/press", label: "Press & analyst" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t rule-strong mt-32 bg-bg-alt/40">
      <div className="mx-auto max-w-[1180px] px-6 sm:px-10 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          <div className="col-span-2 md:col-span-1">
            <p className="font-serif text-[19px] text-ink leading-tight">
              AXL
              <span className="block font-serif italic text-ink-soft text-[14px] mt-1">
                The Agentic Experience Layer
              </span>
            </p>
            <p className="mt-4 font-mono text-[10px] tracking-[0.18em] uppercase text-ink-muted">
              axl.org · v1.0 draft
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <h4 className="font-sans font-semibold text-[11px] tracking-[0.08em] uppercase text-accent mb-3">
                {col.heading}
              </h4>
              <ul className="space-y-2 text-[13.5px] text-ink-soft">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="hover:text-ink underline decoration-rule-strong underline-offset-[3px] hover:decoration-ink"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t rule flex flex-col md:flex-row justify-between gap-4 text-[12px] text-ink-muted">
          <p className="font-serif italic">
            The AXL Reference is published under CC BY 4.0. AXL™ is a
            certification mark administered by axl.org.
          </p>
          <p className="font-mono tracking-[0.05em]">
            © {new Date().getFullYear()} axl.org
          </p>
        </div>
      </div>
    </footer>
  );
}
