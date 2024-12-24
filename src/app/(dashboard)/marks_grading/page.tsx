import React from "react";
import HeadingSection from "@/components/shared/HeadingSection";
import MarksAndFailCriteria from "@/components/shared/pageSection/marksGradingPageSection/MarksAndFailCriteria";

export default function page() {
  return (
    <div className="py-8 md:px-6 xss:px-2 xs:px-1">
      <HeadingSection
        forpage="Settings"
        heading="Exam Grading"
        buttonsection={false}
      />
      <MarksAndFailCriteria />
    </div>
  );
}
