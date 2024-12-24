import HeadingSection from "@/components/shared/HeadingSection";
import AddNewHeadingAndFormSection from "@/components/shared/pageSection/addNewClassesPageSection/AddNewHeadingAndFormSection";
import React from "react";

export default function page() {
  return (
    <div className="py-8 px-6">
      <HeadingSection
        heading="Add New Class"
        forpage="Classes"
        buttonsection={false}
      />
      <AddNewHeadingAndFormSection />
    </div>
  );
}
