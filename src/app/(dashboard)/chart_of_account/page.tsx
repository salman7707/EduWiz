import HeadingSection from "@/components/shared/HeadingSection";
import ChartSearchAndDataSection from "@/components/shared/pageSection/cartAccountPageSection/ChartSearchAndDataSection";
import React from "react";

export default function page() {
  return (
    <div className="py-8 md:px-6 px-2">
      <HeadingSection
        forpage="Accounts"
        heading=" Chart of accounts"
        buttonsection={false}
      />
      <ChartSearchAndDataSection />
    </div>
  );
}
