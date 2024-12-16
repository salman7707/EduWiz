import HeadingSection from "@/components/shared/pageSection/addStudentPageSection/HeadingSection";
import AddNewEmployeeSection from "@/components/shared/pageSection/allEmployeePageSection/AddNewEmployeeSection";
import SearchEmployeeSection from "@/components/shared/pageSection/allEmployeePageSection/SearchEmployeeSection";
import React from "react";

export default function page() {
  return (
    <div className="py-8 px-6">
      <HeadingSection  forpage="Employees" heading="All Employees" buttonsection={false} />
      <SearchEmployeeSection />
      <AddNewEmployeeSection />
    </div>
  );
}
