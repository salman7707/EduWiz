import HeadingSection from "@/components/shared/HeadingSection";
import BankChallanSection from "@/components/shared/pageSection/bankChallanPageSection/BankChallanSection";
import React from "react";

export default function page() {
  return (
    <div className="py-8 px-6">
      <HeadingSection
        forpage="Fees"
        heading="Generate Fees Challan"
        buttonsection={false}
      />
      <BankChallanSection />
    </div>
  );
}
