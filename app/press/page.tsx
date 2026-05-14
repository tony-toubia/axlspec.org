import type { Metadata } from "next";
import { DocPage } from "@/app/components/DocPage";

export const metadata: Metadata = {
  title: "Press & analyst",
  description:
    "Press and analyst contact information for the AXL Reference, including embargo policy and available assets.",
};

export default function PressPage() {
  return (
    <DocPage
      eyebrow="Press · Analyst"
      title={<>Press &amp; analyst contact.</>}
      subtitle="Editorial-board availability for press and analyst inquiries regarding the AXL Reference and the conformance program."
      meta={[
        { label: "Press", value: "press@axlspec.org" },
        { label: "Analyst", value: "analysts@axlspec.org" },
        { label: "Embargo", value: "48-hour notice; standard terms" },
      ]}
    >
      <h2><span className="num">§ 1</span>Subject matter</h2>
      <p>
        Editorial-board representatives are available to speak to the structure of the
        AXL Reference, the conformance program, the trademark policy, the governance
        roadmap, the working-group cadence, and the disposition of received ASPs.
      </p>

      <h2><span className="num">§ 2</span>Assets</h2>
      <p>Available on request, subject to the trademark policy:</p>
      <ul>
        <li>Wordmark and certification-mark artwork.</li>
        <li>Editorial-board biographical material.</li>
        <li>Pre-publication PDF of the current Working Draft, under embargo.</li>
      </ul>

      <h2><span className="num">§ 3</span>Editorial practice</h2>
      <p>
        axlspec.org does not pre-announce vendors as forthcoming certifications, does not
        characterize uncertified vendors as non-conformant absent a published
        comparison, and does not grant exclusive launch coverage.
      </p>
    </DocPage>
  );
}
