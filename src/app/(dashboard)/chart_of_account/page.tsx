import HeadingSection from "@/components/shared/pageSection/addStudentPageSection/HeadingSection";
import ChartSearchAndDataSection from "@/components/shared/pageSection/cartAccountPageSection/ChartSearchAndDataSection";
import React from "react";

export default function page() {
  return (
    <div className="py-8 px-6">
      <HeadingSection
        forpage="Accounts"
        heading=" Chart of accounts"
        buttonsection={false}
      />
      <ChartSearchAndDataSection />
    </div>
  );
}
