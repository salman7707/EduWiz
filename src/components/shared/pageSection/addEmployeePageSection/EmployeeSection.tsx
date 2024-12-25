import React from "react";
import EmployeeFormSection from "./EmployeeFormSection";
import RequireAndOptionalHeading from "@/components/template/heading/RequireAndOptionalHeading";

export default function EmployeeSection() {
  return (
    <div className="pt-4">
      <RequireAndOptionalHeading heading="Employee Form" />
      <div>
        <EmployeeFormSection />
      </div>
    </div>
  );
}
