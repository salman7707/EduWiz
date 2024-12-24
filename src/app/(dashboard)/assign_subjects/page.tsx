import HeadingSection from "@/components/shared/HeadingSection";
import AssignSubjectForm from "@/components/shared/pageSection/assignSubjectPageSection/AssignSubjectFormAndHeadingSection";
import React from "react";

export default function page() {
  return (
    <div className="py-8 md:px-6 px-2.5">
      <HeadingSection
        forpage="Subjects"
        heading="Assign Subjects"
        buttonsection={false}
      />
      <AssignSubjectForm />
    </div>
  );
}
