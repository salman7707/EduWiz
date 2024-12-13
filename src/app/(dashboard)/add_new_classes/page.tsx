import AddNewForm from "@/components/shared/pageSection/addNewClassesPageSection/AddNewForm";
import HeadingSection from "@/components/shared/pageSection/addStudentPageSection/HeadingSection";
import React from "react";

export default function page() {
  return (
    <div className="py-8 px-6">
      <HeadingSection
        heading="Add New Class"
        forpage="Classes"
        buttonsection={false}
      />
      <AddNewForm />
    </div>
  );
}
