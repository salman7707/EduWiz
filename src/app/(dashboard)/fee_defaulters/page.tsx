import DeleteFromDefaulterSection from "@/components/shared/pageSection/feeDefaulterPageSection/DeleteFromDefaulterSection";
import FeeDefaulterHeader from "@/components/shared/pageSection/feeDefaulterPageSection/FeeDefaulterHeader";
import React from "react";

export default function page() {
  return (
    <div className="py-8 px-8">
      <FeeDefaulterHeader />
      <DeleteFromDefaulterSection />
    </div>
  );
}
