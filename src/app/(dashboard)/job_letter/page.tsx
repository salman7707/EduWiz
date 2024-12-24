import HeadingSection from "@/components/shared/HeadingSection";
import Lettersection from "@/components/shared/pageSection/jobLetterPageSection/Lettersection";
import React from "react";

export default function page() {
  return (
    <div className="py-8 px-6">
      <HeadingSection
        heading="Job Letter"
        forpage="Employees"
        buttonsection={false}
      />
      <Lettersection/>
    </div>
  );
}
