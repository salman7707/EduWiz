import HeadingSection from "@/components/shared/pageSection/addStudentPageSection/HeadingSection";
import FeeFormAndDataSection from "@/components/shared/pageSection/detailsForFeeChallanPageSection/FeeFormAndDataSection";
import React from "react";

export default function page() {
  return (
    <div className="md:px-6 px-3 py-8">
      <HeadingSection
        forpage="General Settings"
        heading="Fee Challan Details"
        buttonsection={false}
      />
      <FeeFormAndDataSection />
    </div>
  );
}
