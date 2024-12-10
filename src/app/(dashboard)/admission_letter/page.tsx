import HeadingSection from "@/components/shared/pageSection/addStudentPageSection/HeadingSection";
import LetterSection from "@/components/shared/pageSection/admissionLetterPageSection/LetterSection";
import React from "react";

export default function page() {
  return (
    <div className="px-3 py-8 ">
      <HeadingSection buttonsection={false} heading={"Admission Letter"} />
      <LetterSection />
    </div>
  );
}
