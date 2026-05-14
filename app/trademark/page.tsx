import type { Metadata } from "next";
import Link from "next/link";
import { DocPage } from "@/app/components/DocPage";

export const metadata: Metadata = {
  title: "AXL™ trademark policy",
  description:
    "The wordmark AXL is owned by Cadence The certification mark AXL™ is owned and administered by axlspec.org and used by certified vendors. This page sets out the correct use of both.",
};

export default function TrademarkPage() {
  return (
    <DocPage
      eyebrow="Trademark policy · v1.0 Draft"
      title={
        <>
          The AXL™ <em className="italic font-normal">Trademark Policy.</em>
        </>
      }
      subtitle="Two marks, two owners, one policy. The policy governs how implementers, certified vendors, analysts, and journalists may refer to AXL, the AXL™ certification mark, and the Agentic Experience Layer category."
      meta={[
        { label: "Status", value: "Draft · effective with v1.0 Final" },
        { label: "Wordmark owner", value: "Cadence" },
        { label: "Certification-mark owner", value: "axlspec.org" },
        { label: "Issues", value: <a href="https://github.com/tony-toubia/axlspec.org/issues">github.com/tony-toubia/axlspec.org/issues</a> },
      ]}
    >
      <div className="warning">
        <div className="label">Draft notice</div>
        <p>
          This policy is published in draft alongside the v1.0 Draft of the specification. It will be finalized at v1.0 Final. Use in marketing, product UI, or analyst material during the draft period should follow the §3 rules below; the editorial board will not enforce technical violations during the draft period but reserves the right to do so against bad-faith usage.
        </p>
      </div>

      <h2><span className="num">§ 1</span>The marks at issue</h2>

      <h3>1.1 The wordmark — AXL</h3>
      <p>
        <strong>AXL</strong> is used as a wordmark by Cadence and is intended to be filed
        as a standard-character mark in Class 9 (downloadable software) and Class 42
        (SaaS / technology services) in the United States, subject to clearance and
        counsel review. International filings are intended to follow. Cadence intends
        to license the wordmark to axlspec.org for use in connection with the
        specification, the certification program, and the AXL™ certification mark.
      </p>

      <h3>1.2 The certification mark — AXL™</h3>
      <p>
        <strong>AXL™</strong> is intended to be filed as a certification mark by
        axlspec.org pursuant to § 1054 of the U.S. Lanham Act. Once registered, it
        will be used by third-party vendors to indicate that their products have
        been verified to conform to the AXL Reference at a defined level. The mark is
        not a Cadence asset; review and licensing of the mark will be conducted
        symmetrically by axlspec.org, regardless of any commercial relationship
        between an applicant and Cadence.
      </p>

      <h3>1.3 The longform — &ldquo;Agentic Experience Layer&rdquo;</h3>
      <p>
        The longform &ldquo;Agentic Experience Layer&rdquo; is treated as a descriptive category phrase. It is not registered as a trademark, is not owned by any party, and is free for any vendor, analyst, journalist, or buyer to use without permission.
      </p>

      <h2><span className="num">§ 2</span>Acceptable use — descriptive references</h2>
      <p>
        Anyone — including non-conformant vendors, analysts, journalists, and the public — may:
      </p>
      <ul>
        <li>Refer to &ldquo;the AXL Reference&rdquo; or &ldquo;the AXL specification&rdquo; in a descriptive sense.</li>
        <li>Refer to &ldquo;the Agentic Experience Layer&rdquo; or &ldquo;AXL&rdquo; as a category name.</li>
        <li>Quote, link, and cite the specification under its CC BY 4.0 license.</li>
        <li>State accurately the conformance level (if any) of a vendor&apos;s self-published Conformance Statement.</li>
      </ul>

      <h2><span className="num">§ 3</span>Restricted use — certification mark</h2>
      <p>
        The AXL™ certification mark (with the trademark symbol or in branded contexts that imply certification) may be used <strong>only</strong> by vendors who have received a current, valid certification from axlspec.org. Specifically:
      </p>
      <ul>
        <li>Permitted: <code>AXL™ Certified — Production (L2) — v1.0</code>, on a certified product, while the certification is current.</li>
        <li>Permitted: an <strong>AXL™</strong> badge on a vendor&apos;s trust page, linking to the reviewer report at <code>axlspec.org/certified/[vendor]</code>.</li>
        <li>Not permitted: use of &ldquo;AXL Certified&rdquo; or the badge by a vendor with no current verified certification.</li>
        <li>Not permitted: use of the mark on a different product, a different version, or a different SKU than the certified one.</li>
        <li>Not permitted: implying axlspec.org endorsement of the vendor&apos;s commercial offering.</li>
      </ul>

      <h2><span className="num">§ 4</span>Cure period and enforcement</h2>
      <p>
        Where the editorial board observes use of the AXL™ mark inconsistent with §3, axlspec.org will issue a written notice describing the inconsistency. The licensee has 30 days to cure. Bad-faith or repeated violations may result in certification revocation and a public record of the revocation on <code>axlspec.org/certified</code>.
      </p>

      <h2><span className="num">§ 5</span>Self-attestation language</h2>
      <p>
        Vendors who have published a Conformance Statement at L1 or L2 but who have not yet received verified L3 certification may describe themselves accurately. Permitted forms include:
      </p>
      <ul>
        <li>&ldquo;Conformant to AXL v1.0 at L1 (self-attested)&rdquo;</li>
        <li>&ldquo;AXL-conformant L2 (self-attested) — see Conformance Statement&rdquo;</li>
      </ul>
      <p>
        Not permitted: dropping &ldquo;self-attested,&rdquo; or applying the AXL™ symbol absent verified certification.
      </p>

      <h2><span className="num">§ 6</span>Cadence&apos;s use of the wordmark</h2>
      <p>
        As wordmark owner, Cadence is free to use &ldquo;AXL&rdquo; in product, marketing, and sales contexts. Under §1054 of the Lanham Act, Cadence does <em>not</em> use the certification mark on its own goods; Cadence applies for L3 certification symmetrically and uses the AXL™ mark only after issuance.
      </p>

      <h2><span className="num">§ 7</span>Contact</h2>
      <p>
        Trademark questions, mark-use clarifications, and notices may be sent to <code>trademark@axlspec.org</code>. The editorial board responds within 10 business days for standard inquiries.
      </p>

      <div className="callout">
        <p>
          This policy is not legal advice. The full specification, including normative governance and trademark sections, is at <Link href="/spec/v1.0#governance">§ 12 of the AXL Reference v1.0</Link>.
        </p>
      </div>
    </DocPage>
  );
}
