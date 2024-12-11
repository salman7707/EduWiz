import HeadingSection from "@/components/shared/pageSection/addStudentPageSection/HeadingSection";
import DataSection from "@/components/shared/pageSection/printInfoPageSection/DataSection";
import SelectClassSection from "@/components/shared/pageSection/printInfoPageSection/SelectClassSection";
import React from "react";

export default function page() {
  return (
    <div className="py-8 md:px-5 px-2.5">
      <HeadingSection heading="Print Basic List" buttonsection={false} />
      <SelectClassSection />
      <DataSection />
    </div>
  );
}
