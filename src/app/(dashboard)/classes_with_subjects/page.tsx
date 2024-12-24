import HeadingSection from "@/components/shared/HeadingSection";
import AddNewAndExsistedClassSection from "@/components/shared/pageSection/classesWithSubjectsPageSection/AddNewAndExsistedClassSection";
import React from "react";

export default function page() {
  return (
    <div className="py-8 px-6">
      <HeadingSection
        forpage="Subjects"
        heading="Classes With Subjects"
        buttonsection={false}
      />
      <AddNewAndExsistedClassSection />
    </div>
  );
}
