import React from "react";
import FeeChallanFormSection from "./FeeChallanFormSection";
import FeeChallanDataSection from "./FeeChallanDataSection";

export default function FeeFormAndDataSection() {
  return (
    <div className="grid lg:grid-cols-[35%_65%] grid-cols-1 items-start mt-6 gap-4">
      <FeeChallanFormSection />
      <FeeChallanDataSection />
    </div>
  );
}
