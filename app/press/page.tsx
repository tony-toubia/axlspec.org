import type { Metadata } from "next";
import { DocPage } from "@/app/components/DocPage";

export const metadata: Metadata = {
  title: "Press & analyst",
  description:
    "Press inquiries, analyst briefings, and embargoed materials for the AXL Reference. Founder and editorial-board availability for interviews.",
};

export default function PressPage() {
  return (
    <DocPage
      eyebrow="Press · Analyst"
      title={
        <>
          Press &amp; <em className="italic font-normal">analyst inquiries.</em>
        </>
      }
      subtitle="The editorial board and the founding sponsor are available for press interviews and analyst briefings, on or off the record, with reasonable lead time."
      meta={[
        { label: "Press contact", value: "press@axl.org" },
        { label: "Analyst contact", value: "analysts@axl.org" },
        { label: "Embargo policy", value: "48-hour notice; specimen quotes available" },
      ]}
    >
      <h2><span className="num">§ 1</span>What we can speak to</h2>
      <ul>
        <li>The structure of the AXL Reference and the four pillars.</li>
        <li>The state of the personalization category and the reasons the five-tool stack is structurally exhausted.</li>
        <li>The conformance program, the certification mark, and the path to multi-stakeholder governance.</li>
        <li>The disposition log, working-group activity, and any individual ASP that has reached disposition.</li>
        <li>The relationship between Cadence (founding sponsor) and axl.org (steward) and why the structural separation matters.</li>
      </ul>

      <h2><span className="num">§ 2</span>Assets</h2>
      <ul>
        <li>Founder portrait and headshots — on request.</li>
        <li>AXL wordmark in print- and digital-resolution — on request, subject to the trademark policy.</li>
        <li>Specimen quotes from the editorial board and the founding sponsor — supplied on embargo briefings.</li>
        <li>Pre-publication PDF of the v1.0 Draft — supplied with 48-hour embargo agreement.</li>
      </ul>

      <h2><span className="num">§ 3</span>What we won&apos;t do</h2>
      <p>
        We will not pre-name vendors as &ldquo;going to be certified&rdquo; before they are. We will not characterize uncertified vendors as non-conformant absent a published comparison. We will not coordinate launch coverage with any single publication exclusively.
      </p>
    </DocPage>
  );
}
