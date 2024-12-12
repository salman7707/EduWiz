import EmployeeSection from "@/components/shared/pageSection/addEmployeePageSection/EmployeeSection";
import HeadingSection from "@/components/shared/pageSection/addStudentPageSection/HeadingSection";
import React from "react";

export default function page() {
  return (
    <div className="py-8 px-6">
      <HeadingSection
        heading="New Staff"
        buttonsection={true}
        addEmployee={true}
        forpage={"Employees"}
      />
      <EmployeeSection />
    </div>
  );
}
