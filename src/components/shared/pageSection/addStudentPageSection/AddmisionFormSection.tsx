import React from "react";
import FormSection from "../../../template/form/FormSection";
import RequireAndOptionalHeading from "@/components/template/heading/RequireAndOptionalHeading";

export default function AddmisionFormSection() {
  return (
    <div className="pt-4">
      {/* Heading Section */}
      <RequireAndOptionalHeading heading="Admission Form" />
      {/* Other Forms are been added there */}
      <div>
        <FormSection />
      </div>
    </div>
  );
}
