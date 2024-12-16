import HeadingSection from "@/components/shared/pageSection/addStudentPageSection/HeadingSection";
import ButtonSection from "@/components/shared/pageSection/studentCardSection/ButtonSection";
import StudentCardSection from "@/components/shared/pageSection/studentCardSection/StudentCardSection";
import React from "react";

export default function page() {
  return (
    <div className="py-7 px-5">
      <HeadingSection
        forpage="Students"
        heading="All Students"
        buttonsection={false}
        allstudentprintbtn
      />
      <ButtonSection />
      <StudentCardSection />
    </div>
  );
}
