# Appendix A: Test Methodology, editorial working draft

> **Editorial working draft.** This is **not** finalized normative content. It is a scaffold prepared by the axlspec.org editorial board to structure the work on Appendix A. Every numeric threshold, every measurement choice, and every pass criterion below is **OPEN** and is to be decided by the relevant working group through the comment / ASP process. Nothing here should be cited as the AXL Reference.

## Purpose

The AXL Reference §6 conditions L2 self-attestation on "reproduction of Appendix A benchmarks" and L3 verified review on the same. Until Appendix A is published with executable artifacts and decided thresholds, **L2 and L3 are unattainable for every vendor.** This document frames the decisions that produce Appendix A.

This document does **not**:

- Propose any numeric threshold.
- Settle any open methodological question.
- Constitute a normative part of the AXL Reference.

This document **does**:

- Enumerate the four benchmark categories Appendix A must specify.
- Identify, per category, the discrete decisions a working group must take.
- Name considerations bearing on each decision, without resolving it.
- Map each category to its owning pillar working group.

## Scope of Appendix A

Per AXL Reference Appendix A, the published benchmarks evaluate four properties of a candidate implementation:

1. **Signal-collection accuracy** (§ 5.1 Perceive bar)
2. **Decisioning latency budget** (§ 5.2 Decide bar)
3. **Render-substitution timing** (§ 5.3 Render bar)
4. **Learn-loop statistical correctness** (§ 5.4 Learn bar)

Each benchmark must specify, at minimum, every dimension listed under "Cross-cutting decisions" below, before any concrete threshold is set.

## Cross-cutting decisions

The following apply to every benchmark category. Until these are decided, per-benchmark thresholds cannot meaningfully be set.

| Decision | Open question | Considerations |
| --- | --- | --- |
| **Test environment** | What environment is canonical: a controlled reference rig, a headless-browser harness, a real production deployment, or all three with comparison rules? | Reproducibility favors controlled rigs; ecological validity favors production. A multi-environment specification (each with its own pass criteria) is established practice in web-performance specifications, but doubles the maintenance burden. |
| **Reference workload** | What synthetic traffic / interaction profile drives the benchmark? Is it a single canonical workload, or a workload library with category-tagged scenarios? | Single workload is simpler but a poor proxy for vendors serving different verticals. A workload library invites accusations of cherry-picking. |
| **Reference adapters** | What upstream and downstream connectors does the benchmark assume? (§ Interop calls these out as "reference adapters for common upstream sources.") | Adapters lock vendors to specific integrations; abstract test fixtures preserve neutrality but reduce realism. |
| **Network and device matrix** | What network conditions (latency, packet loss) and device classes are included in the matrix? | Excluding slow networks understates real flicker risk in § 5.3. Including them inflates failure-mode breadth. |
| **Statistical confidence and sample-size floors** | What minimum sample size and confidence level qualifies a result? | A common floor reduces ambiguity; per-benchmark floors allow each benchmark to be honest about its own noise. |
| **Reproducibility evidence** | What artifacts must a vendor publish to support an L2 self-attestation (raw logs, scripts, configuration, environment manifest)? Are the artifacts machine-checkable? | Machine-checkable artifacts make L2 statements falsifiable; human-readable artifacts are cheaper but admit ambiguity. |
| **Re-test cadence** | Must benchmark reproduction be re-run on every spec minor version, every product release, or on a time-based cadence? | Per-version re-test ties conformance to spec evolution. Time-based re-test catches product drift. Both is correct but expensive. |
| **Reviewer-panel reproducibility (L3)** | What does the reviewer panel re-execute vs accept on submitted evidence? | Maximum trust: panel re-runs everything. Minimum cost: panel accepts published reproduction. The middle ground (panel samples a subset) requires a sampling policy. |

## Per-benchmark frameworks

### A.1 Signal-collection accuracy

**Owning working group:** Perceive WG.
**Maps to § 5.1 Required:** collects behavioural signal (pageviews, dwell, scroll, click, hover, sequence) without persistent identifiers.

| Dimension | What is measured | Open decisions |
| --- | --- | --- |
| **Signal completeness** | Fraction of ground-truth events (from instrumented test fixtures) captured by the implementation. | What event taxonomy is ground truth? Are intentional drop rules permitted (e.g. anti-bot heuristics) and how are they excluded from the denominator? |
| **Signal correctness** | Distribution and ordering match of recorded events vs ground truth. | Tolerance for clock drift, jitter, batching artifacts. What sequence-preservation guarantee is required? |
| **Identity-free operation** | Coverage of the perception path that runs with no cookie / no persistent identifier. | Does "identity-free by default" mean *operational on first pageview* or *operational throughout the session*? They are not the same; § 5.1 is currently silent on this distinction. |
| **Privacy-context tagging** | Whether perceived signal is correctly classified by privacy context (consented, default-no-consent, jurisdiction-flagged). | Out of scope for v1.0 entirely, in scope as a Recommended capability, or in scope as a Required capability? This intersects existing privacy regimes and is a § 4 / § 5.1 spec question, not only a test question. |

### A.2 Decisioning latency budget

**Owning working group:** Decide WG.
**Maps to § 5.2 Required:** treatment selection is autonomous, at request time, reproducible from in-session signal alone.

| Dimension | What is measured | Open decisions |
| --- | --- | --- |
| **End-to-end decision latency** | Wall-clock time from the perception-input boundary to the treatment-emission boundary. | Where exactly are those boundaries? p50 / p95 / p99 — which is the budgeted percentile (or all three)? |
| **Determinism** | Reproducibility of the decision given the same in-session signal and the same model state. | Bandit / exploration-driven non-determinism is implicitly permitted by § 5.2: "reproducible from in-session signal alone" must accommodate explicit randomness. How is the randomness seed handled in test? |
| **Autonomy enforcement** | Detection of any human-gating step in the live path. | Static (code-graph) detection vs runtime probe vs operator-attested. Each has different reviewer cost and false-negative profile. |
| **Cold-start behaviour** | Decision latency on the first request to a fresh session (no warmed bandit state). | First-request latency is structurally different from steady-state and may need its own budget. |

### A.3 Render-substitution timing

**Owning working group:** Render WG.
**Maps to § 5.3 Required:** substitution is flicker-free on a standards-compliant browser, through a framework-agnostic surface.

| Dimension | What is measured | Open decisions |
| --- | --- | --- |
| **Flicker threshold** | Maximum permissible flash / paint of the un-personalized treatment before substitution. | Measured in milliseconds of visible paint, in CLS units, in a Largest Contentful Paint shift fraction, or by direct visual diff? Each measurement has different reproducibility / ecological-validity trade-offs. |
| **Framework-agnostic surface** | Verification that the substitution path requires no proprietary client. | Negative-test set (e.g. plain HTML, Next.js, SvelteKit, Astro, Remix) and a minimum required-pass set. |
| **Substitution coverage** | Fraction of declared personalizable zones successfully substituted within the budget. | Pass requires 100%, or some lower bound? Are failures individually logged and rate-limited? |
| **Failure mode** | Behaviour when the personalization path fails or times out. | Required behaviour: fallthrough to unpersonalized content with no visible degradation? Time-bound? § 5.3 should be explicit. |

### A.4 Learn-loop statistical correctness

**Owning working group:** Learn WG.
**Maps to § 5.4 Required:** statistical-significance reporting at the treatment level; lift measurement against a holdout.

| Dimension | What is measured | Open decisions |
| --- | --- | --- |
| **Holdout integrity** | Verification that the holdout is genuinely held out (no treatment leakage, no allocation drift). | Tolerance for allocation drift over time? Mechanism for detection? |
| **Significance-test correctness** | The reported significance computation matches the claimed test (e.g. two-proportion z-test, sequential testing with peeking correction). | Which test family is acceptable? Frequentist only, Bayesian-permitted, sequential-permitted? § 5.4 says "statistical significance"; the test family is undeclared. |
| **Lift-measurement accuracy** | Reported lift values agree with an independent re-computation from raw event logs. | Acceptable error bound on reported vs recomputed lift. |
| **Multiple-comparisons handling** | How simultaneous variant comparisons are corrected (Bonferroni, FDR, none). | Required, Recommended, or out of scope? § 5.4 does not currently specify. |

## ASP list (open decisions for the working groups)

The following decisions are the gate items. Each should be filed as an ASP against the AXL Reference (`github.com/tony-toubia/axlspec.org/issues`). The list is a starting set and is not exhaustive.

**Cross-cutting:**

1. Canonical test environment(s).
2. Reference workload definition.
3. Reference-adapter scope.
4. Network and device matrix.
5. Statistical confidence and sample-size floors.
6. Reproducibility-artifact requirements.
7. Re-test cadence.
8. L3 reviewer reproducibility policy.

**A.1 Perceive:** event taxonomy; intentional-drop exclusions; identity-free coverage scope; privacy-context tagging in scope or out.

**A.2 Decide:** boundary definitions; budgeted percentile(s); randomness-seed test protocol; autonomy-enforcement detection method; cold-start vs steady-state budgets.

**A.3 Render:** flicker measurement; framework matrix; substitution-coverage pass criterion; failure-mode requirements.

**A.4 Learn:** allocation-drift tolerance; permitted test families; lift-recomputation tolerance; multiple-comparisons handling.

## Recommended next steps

1. Working-group chairs review this scaffold and propose any missing dimensions or decisions per their pillar.
2. Initial ASPs filed against the cross-cutting decisions. These gate everything per-benchmark, so they go first.
3. Per-benchmark ASPs filed against A.1 through A.4 in parallel as the cross-cutting decisions resolve.
4. Reference test-harness implementation begins only after the cross-cutting decisions are settled. Premature implementation locks decisions through the back door.

---

*Prepared by axlspec.org editorial tooling as a scaffold for working-group deliberation. Not normative. Not part of the AXL Reference. Substantive comments and proposals are routed through the ASP process at `github.com/tony-toubia/axlspec.org/issues`.*
