import AddmisionFormSection from "@/components/shared/pageSection/addStudentPageSection/AddmisionFormSection";
import HeadingSection from "@/components/shared/pageSection/addStudentPageSection/HeadingSection";
import React from "react";

export default function page() {
  return (
    <div className="md:px-5 px-2 py-8">
      <HeadingSection  forpage="Students" heading="Admission Form" />
      <AddmisionFormSection />
    </div>
  );
}
