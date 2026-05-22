# AXL Conformance Statement

**Template version:** v1.0-draft.1, aligned to the AXL Reference v1.0 Working Draft.
**Maintained by:** the axlspec.org editorial board.

A Conformance Statement is a public document in which an implementer attests, at L1 or L2, to specific clauses of the [AXL Reference](https://axlspec.org/spec/v1.0). L1 and L2 are **self-attested**: axlspec.org does not review them. L3 (Reference) is obtained through verified review and is **not** self-attested; see the [certification process](https://axlspec.org/certification).

## Which level can I attest to today?

- **L1 (Functional)** is attainable now: the Required capabilities of §5, self-attested.
- **L2 (Production)** additionally requires a published reproduction of the Appendix A benchmark suite. The Appendix A executable artifacts are still forthcoming from axlspec.org; until they are published, an L2 statement cannot be completed by any vendor.
- **L3 (Reference)** is not filed with this template. It requires verified review by axlspec.org and opens at v1.0 Final.

## How to file

1. Copy this file to `conformance-statements/{{vendor-slug}}.md`.
2. Complete every `{{placeholder}}` and mark every checkbox and clause. Do not leave a clause unmarked.
3. Open a pull request against `github.com/tony-toubia/axlspec.org` adding the file.
4. To withdraw later, open a pull request removing it (AXL Reference, conformance §6.5).

---

## 1. Implementer

| Field | Value |
| --- | --- |
| Legal entity | {{full registered legal name}} |
| Primary contact | {{name, role, email}} |
| Date of attestation | {{YYYY-MM-DD}} |

## 2. Product under attestation

| Field | Value |
| --- | --- |
| Product or platform | {{product name}} |
| Version | {{version this attestation covers}} |
| Specification version | AXL Reference v1.0 Working Draft |

## 3. Conformance level claimed

Mark exactly one.

- [ ] **L1, Functional.** Required capabilities of §5.1 through §5.4, across all four pillars.
- [ ] **L2, Production.** L1, plus a published reproduction of the Appendix A benchmark suite (recorded in section 5).

## 4. Clause-by-clause attestation: §5 Required capabilities

For each capability, mark one status and cite evidence a reader can check. An accurate "Partial" or "Not conformant" is a valid statement; a false "Conformant" is a misrepresentation addressed under §4 of the [trademark policy](https://axlspec.org/trademark).

### §5.1 Perceive (Required)

Collects behavioral signal from the live session (pageviews, dwell, scroll, click, hover, sequence) with no persistent identifier required.

- Status: {{Conformant | Partial | Not conformant}}
- Evidence: {{how the product satisfies this, and what a reader can inspect}}

### §5.2 Decide (Required)

Treatment selection is autonomous, made at request time, and reproducible from the in-session signal alone.

- Status: {{Conformant | Partial | Not conformant}}
- Evidence: {{how the product satisfies this, and what a reader can inspect}}

### §5.3 Render (Required)

Treatment substitution is flicker-free on a standards-compliant browser and operates through a framework-agnostic surface.

- Status: {{Conformant | Partial | Not conformant}}
- Evidence: {{how the product satisfies this, and what a reader can inspect}}

### §5.4 Learn (Required)

The system reports statistical significance at the treatment level and measures lift against a holdout.

- Status: {{Conformant | Partial | Not conformant}}
- Evidence: {{how the product satisfies this, and what a reader can inspect}}

## 5. Appendix A benchmark reproduction (L2 only)

| Field | Value |
| --- | --- |
| Published reproduction | {{URL of the published benchmark reproduction, or "N/A, L1 statement"}} |

## 6. Validity

| Field | Value |
| --- | --- |
| Valid for | {{specification cycle this attestation covers; default is one major or minor version cycle}} |

## 7. Architectural principles, §4 (optional, recommended)

Not required by conformance §6.2, but recommended. The §4 principles are normative constraints on how the pillars are implemented. Note any that warrant comment.

- Identity-free by default: {{notes, or "no comment"}}
- In-session decisioning: {{notes, or "no comment"}}
- Autonomous: {{notes, or "no comment"}}
- Continuously learning: {{notes, or "no comment"}}
- Open at the edges (the §7 interface is callable by external systems): {{notes, or "no comment"}}

---

*Self-published by the implementer. Acceptance of the pull request that adds this file is administrative and is not an endorsement by axlspec.org. Conformance is per specification version; see conformance §6.4 for re-attestation on new versions.*
