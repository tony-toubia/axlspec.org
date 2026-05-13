import { ReactNode } from "react";

type CoverMeta = { label: string; value: ReactNode };

export function DocPage({
  eyebrow,
  title,
  subtitle,
  meta,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: ReactNode;
  meta?: CoverMeta[];
  children: ReactNode;
}) {
  return (
    <article className="mx-auto max-w-[760px] px-6 sm:px-10 pt-20 pb-32">
      <header className="border-b rule-strong pb-12 mb-14">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-5 font-serif font-medium text-[clamp(34px,5.5vw,52px)] leading-[1.08] tracking-[-0.02em] text-ink">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-6 font-serif italic text-[18px] sm:text-[20px] leading-[1.45] text-ink-soft max-w-[58ch]">
            {subtitle}
          </p>
        ) : null}
        {meta?.length ? (
          <dl className="mt-10 grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-y-2 gap-x-6 text-[13px] border-t rule pt-6">
            {meta.map((m) => (
              <FragmentRow key={m.label} label={m.label} value={m.value} />
            ))}
          </dl>
        ) : null}
      </header>

      <div className="doc-prose">{children}</div>
    </article>
  );
}

function FragmentRow({ label, value }: CoverMeta) {
  return (
    <>
      <dt className="font-mono text-[10px] tracking-[0.15em] uppercase text-ink-muted">
        {label}
      </dt>
      <dd className="text-ink-soft mb-3 sm:mb-0">{value}</dd>
    </>
  );
}
