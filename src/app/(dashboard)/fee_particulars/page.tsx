import HeadingSection from "@/components/shared/HeadingSection";
import FeeFormAndHeadingSection from "@/components/shared/pageSection/feePaticularsPageSection/FeeFormAndHeadingSection";
import React from "react";

export default function page() {
  return (
    <div className="px-6 py-8">
      <HeadingSection
        forpage="Settings"
        heading="Change Fee Particulars"
        buttonsection={false}
        resetBtn={true}
      />
      <FeeFormAndHeadingSection />
    </div>
  );
}
