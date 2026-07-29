> **DRAFT – pending owner sign-off.** The §5 clause-by-clause attestation and evidence below are complete and were verified against the AXO codebase. Before this is filed as a Conformance Statement (pull-requested into `conformance-statements/` on axlspec.org), an AXO owner with authority to attest must review and sign off, and the named legal entity (AXO Solutions, Inc.) must be confirmed against the incorporation record and registered as of the filing date. A self-attestation claiming a clause the product does not satisfy is a misrepresentation addressed under §4 of the AXL trademark policy. Accuracy here protects AXO more than optimism does.

# AXL Conformance Statement

**Specification:** AXL Reference v1.0 Working Draft.
**Statement status:** Completed draft – pending AXO owner sign-off before filing.

## 1. Implementer

| Field | Value |
| --- | --- |
| Legal entity | AXO Solutions, Inc. |
| Primary contact | AXO Conformance, legal@axoapp.ai |
| Date of attestation | Set on filing. |

## 2. Product under attestation

| Field | Value |
| --- | --- |
| Product or platform | AXO |
| Version | Current production release. AXO is a continuously-deployed SaaS platform with no semantic public version number; this statement covers the production release current as of the Date of attestation. |
| Specification version | AXL Reference v1.0 Working Draft |

## 3. Conformance level claimed

- [x] **L1, Functional (self-attested).** Required capabilities of §5.1 through §5.4, across all four pillars. See §4 for the clause-by-clause attestation and evidence.
- [ ] **L2, Production.** Not claimed. L2 requires a published reproduction of the Appendix A benchmark suite; the Appendix A executable artifacts are not yet published by axlspec.org, so L2 is not attainable by any vendor at this time.

## 4. Clause-by-clause attestation: §5 Required capabilities

### §5.1 Perceive (Required)

Collects behavioral signal from the live session (pageviews, dwell, scroll, click, hover, sequence) with no persistent identifier required.

- Status: **Conformant** *(self-attested)*
- Evidence: The AXO browser tag – served publicly at `https://axoapp.ai/tag.js`, so it is directly inspectable – collects in-session behavioral signal entirely client-side: scroll depth, scroll velocity and pause count; click count and click timestamps (preserving event order/sequence); per-zone dwell time (via IntersectionObserver); hover dwell on calls-to-action; tab-visibility changes; and form-field focus. Signal is accumulated per visit in `sessionStorage`; perception runs on every pageview. The Required capability operates with **no persistent identifier**: a first-time visitor carrying no cookies is perceived and segment-classified on the first pageview from in-session signal plus request context (device class, referrer, UTM, time-of-day). The platform additionally sets an *anonymous* device cookie (`vt_sid`); it is used only by the optional, separately-configured cross-visit profile capability and is **not read by the perception or classification path** – and linkage to a known (PII) identity is operator-configured only. Inspectable surfaces: the public `tag.js`; the dashboard Live Feed (raw per-session event stream). For code-level review (e.g. a future L3 audit): `packages/tag/src/signals.ts` (signal collectors) and `packages/tag/src/scorer.ts` (in-session classifier).
- Integrity control: the claim above depends on the `sessions`, `events`, and `conversions` tables meaning *only* first-party behavior the tag observed. That meaning is enforced in continuous integration: a regression guard (`packages/api/__tests__/sources-first-party-tables-invariant.test.ts`) statically asserts that no source connector — HubSpot, Shopify, Salesforce, SFTP — writes those tables, so foreign CRM and commerce data can land only in `crm_attributes` on profiles. This is an **internal** control in a private repository, offered as evidence that the attestation is maintained rather than as a §7 inspectable surface; it would be reviewable under an L3 audit.

### §5.2 Decide (Required)

Treatment selection is autonomous, made at request time, and reproducible from the in-session signal alone.

- Status: **Conformant** *(self-attested)*
- Evidence: Treatment selection is made autonomously at request time. On each pageview the tag classifies the session into a behavioral segment from in-session signal (a client-side rule scorer), then selects a content variant for each zone; variant allocation is a Thompson-Sampling multi-armed bandit whose choice is deterministic given the session hash and the published per-arm weights. There is **no human approval step in the live request path** – a separate, opt-in preview mode exists for authoring/QA only and never gates production traffic. The decision is reproducible from the in-session signal alone: it depends on no stored per-visitor profile and no cross-session history. Inspectable surfaces: the `GET /api/config/<siteId>` response (returns zones, variants, and bandit weights); the public `tag.js` (segment + variant resolution). For code-level review: `packages/tag/src/scorer.ts` and `packages/api/lib/bandit.ts` (Thompson Sampling).

### §5.3 Render (Required)

Treatment substitution is flicker-free on a standards-compliant browser and operates through a framework-agnostic surface.

- Status: **Conformant** *(self-attested)*
- Evidence: Treatment substitution is flicker-free. The install snippet injects a CSS rule that pre-hides personalizable zones (or, in the fallback path, the document body) at opacity 0 before personalization runs; the tag reveals each zone the moment its treatment has been applied to the DOM, and a safety timeout guarantees the page reveals even if personalization is slow or fails. Integration is a single standards-compliant `<script>` tag – there is **no framework dependency and no proprietary client** required on the customer's site; treatments are applied with standard DOM APIs and work on any standards-compliant browser. Inspectable surfaces: the install snippet shown on the dashboard Install screen; the public `tag.js` (anti-flicker pre-hide / reveal path).

### §5.4 Learn (Required)

The system reports statistical significance at the treatment level and measures lift against a holdout.

- Status: **Conformant** *(self-attested)*
- Evidence: Every personalizable zone withholds a deterministic 10% control (holdout) split, assigned by a stable hash of session and zone. The Lift report compares treatment against the holdout and reports both absolute and relative lift in conversion rate. Statistical significance is computed at the treatment (variant) level with a two-proportion z-test at 95% confidence (p < 0.05) and surfaced per variant, alongside a data-sufficiency status. Inspectable surfaces: the Variant Lift report and the Launch report in the dashboard (per-variant treatment-vs-holdout conversion rate, relative lift, and significance/sufficiency status); the `GET /api/lift` endpoint. For code-level review: `packages/api/lib/stats.ts` (two-proportion z-test).
- Integrity control: holdout validity depends on the same first-party-table invariant described under §5.1 — foreign activity written into `conversions` would silently corrupt measured lift. That invariant is CI-enforced.

## 5. Appendix A benchmark reproduction (L2 only)

N/A. This is an L1 statement.

## 6. Validity

| Field | Value |
| --- | --- |
| Valid for | The v1.x cycle of the AXL Reference specification. |

## 7. Architectural principles, §4 (optional, recommended)

- **Identity-free by default:** Perception and segment classification require no persistent identifier and cover 100% of anonymous traffic. An anonymous device cookie (`vt_sid`) backs the *optional* cross-visit profile capability; linkage to a known/PII identity is operator-configured and off by default.
- **In-session decisioning:** The treatment decision is made at request time from the live session – there is no offline or batch scoring step between perception and render.
- **Autonomous:** No per-request human gating. The Thompson-Sampling optimizer allocates, and continuously re-allocates, traffic across variants automatically.
- **Continuously learning:** The optimizer updates each variant's posterior from observed conversions, and lift is measured continuously against the live holdout.
- **Open at the edges:** The platform dispatches to, and ingests from, open destinations – any HTTP webhook plus 20-plus native integrations – and exposes a Model Context Protocol (MCP) server. There is no lock-in at the data boundary.

---

*Prepared as a draft skeleton by axlspec.org tooling; §5 attestation and evidence completed by the implementer. Self-published by the implementer once an AXO owner has signed off. AXO is attested under the same process as any other vendor; founding-sponsor status confers no conformance advantage (AXL Reference, governance §12.1).*
