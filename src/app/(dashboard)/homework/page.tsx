import HeadingSection from "@/components/shared/HeadingSection";
import HomeworkDataSection from "@/components/shared/pageSection/homeworkPageSection/HomeworkDataSection";
import HomeworkFormSectionPage from "@/components/shared/pageSection/homeworkPageSection/HomeworkFormSectionPage";
import React from "react";

export default function page() {
  return (
    <div className="py-8 px-8">
      <HeadingSection
        forpage="Homework"
        heading="Homeworks"
        buttonsection={false}
        homeworkbtn={true}
      />
      <HomeworkFormSectionPage />
      <HomeworkDataSection />
    </div>
  );
}
