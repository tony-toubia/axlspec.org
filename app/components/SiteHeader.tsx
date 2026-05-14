import Link from "next/link";

const NAV = [
  { href: "/spec/v1.0", label: "Specification" },
  { href: "/conformance", label: "Conformance" },
  { href: "/certification", label: "Certification" },
  { href: "/maturity", label: "Maturity Model" },
  { href: "/working-groups", label: "Working Groups" },
];

export function SiteHeader() {
  return (
    <header className="border-b rule sticky top-0 z-30 bg-paper/85 backdrop-blur supports-[backdrop-filter]:bg-paper/70">
      <div className="mx-auto max-w-[1180px] px-6 sm:px-10 py-4 flex items-center justify-between gap-6">
        <Link
          href="/"
          className="font-serif text-[19px] tracking-tight text-ink hover:no-underline flex items-baseline gap-2"
          aria-label="AXL — home"
        >
          <span className="font-medium">AXL</span>
          <span className="hidden sm:inline font-mono text-[10px] tracking-[0.18em] uppercase text-ink-muted">
            axl.org
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-7 font-sans text-[13px]">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-ink-soft hover:text-ink transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/spec/v1.0"
          className="font-mono text-[11px] tracking-[0.12em] uppercase border border-ink text-ink px-3 py-2 hover:bg-ink hover:text-paper transition-colors"
        >
          Read v1.0 →
        </Link>
      </div>

      <nav className="md:hidden border-t rule overflow-x-auto">
        <ul className="flex gap-5 px-6 py-3 font-sans text-[12.5px] whitespace-nowrap">
          {NAV.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="text-ink-soft hover:text-ink">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
