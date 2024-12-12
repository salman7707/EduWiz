import HeadingSection from "@/components/shared/pageSection/addStudentPageSection/HeadingSection";
import SearchAndDatasection from "@/components/shared/pageSection/manageLoginSectionPage/SearchAndDatasection";
import React from "react";

export default function page() {
  return (
    <div className="py-6 px-6 ">
      <HeadingSection
        heading="Staff Login"
        forpage="Employees"
        buttonsection={false}
      />
      <SearchAndDatasection />
    </div>
  );
}
