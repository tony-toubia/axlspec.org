# axlspec.org

The public-facing website for the [AXL Reference](https://axlspec.org/spec/v1.0) – an open specification for the **Agentic Experience Layer** category, stewarded by axlspec.org. Founding sponsor: AXO.

## Canonical domain

**`axlspec.org` is the only domain for this project. Never write `axl.org`.**

`axl.org` is registered to an unrelated third party and is in active use — it
resolves to `178.63.92.236` on four Swiss nameservers (`ns5`–`ns9.beckert.ch`),
verified 2026-07-29. It is not available and is not acquirable at a sensible
price. Any reference to it sends readers to a stranger's site, which is
especially damaging on a page whose purpose is to establish category authority.

This was a real defect, not a hypothetical: `axl.org` appeared 43 times across
`reference/` and in the shipped footer of the AXO marketing page. Both are
fixed. If you are drafting new material and reach for the shorter name, don't.

## Stack

- **Framework** – [Next.js 16](https://nextjs.org) App Router, React 19, TypeScript
- **Styling** – Tailwind CSS v4 (CSS-first `@theme` config in `app/globals.css`)
- **Fonts** – Fraunces (serif), Inter (sans), JetBrains Mono (mono) via `next/font/google`
- **Hosting** – designed to deploy on Vercel; Fluid Compute defaults are fine

## Information architecture

| Route                  | Purpose                                                  |
| ---------------------- | -------------------------------------------------------- |
| `/`                    | Manifesto landing – four pillars, three conformance levels |
| `/spec` · `/spec/v1.0` | Specification versions and the full v1.0 Draft           |
| `/conformance`         | § 6 – Conformance levels and self-attestation            |
| `/certification`       | The verified-certification process for L3 + AXL™ mark    |
| `/certified`           | Registry of certified vendors (opens v1.0 Final)          |
| `/maturity`            | § 9 – Buyer-facing maturity model                        |
| `/trademark`           | The AXL / AXL™ trademark policy                           |
| `/working-groups`      | Five working groups; how to join                          |
| `/asp-process`         | How to file an AXL Specification Proposal                |
| `/buyers-guide`        | § 11 – procurement-facing rendering                       |
| `/tco`                 | TCO calculator (interactive at v1.0 Final)               |
| `/glossary`            | § 3 – normative terminology                              |
| `/governance`          | Roadmap to multi-stakeholder governance                  |
| `/press` · `/about`    | Press, analyst, and steward info                          |

## Local development

```bash
npm install
npm run dev
# open http://localhost:3000
```

```bash
npm run build   # production build
npm run start   # serve production build
npm run lint    # ESLint
```

## Design system

The visual language follows the reference artifacts in `/reference`:

| Token         | Value     |
| ------------- | --------- |
| bg            | `#FBFAF7` |
| bg-alt        | `#F4F1EA` |
| ink           | `#1A1A1A` |
| ink-soft      | `#404040` |
| ink-muted     | `#6B6760` |
| rule          | `#E0DCD0` |
| rule-strong   | `#C8C2B2` |
| highlight     | `#B04A3F` |

Tokens are exposed as Tailwind utilities (`bg-bg`, `text-ink`, `border-rule`, etc.) via the `@theme` block in `app/globals.css`. Long-form pages use the `.doc-prose` typography scale defined in the same file.

## Source artifacts

`/reference/` contains the original strategy documents the site was built from:

1. `01-axl-trademark-brief.html` – trademark & certification-mark strategy
2. `02-axl-launch-sequence.html` – 24-week launch plan
3. `03-axl-contributor-invitation.html` – letter to named §10.2 vendors

These are kept in the repo as the editorial source of truth. They are not served by the site.
