import AssignSubjectForm from "@/components/template/form/AssignSubjectForm";
import RequireAndOptionalHeading from "@/components/template/heading/RequireAndOptionalHeading";
import React from "react";

export default function AssignSubjectFormSection() {
  return (
    <div className="bg-white rounded-2xl lg:w-[50%] md:w-[60%] mx-auto my-4 border py-5">
      {/* Heading section */}
      <RequireAndOptionalHeading
        heading="Create Subjects"
        headingsize="small"
      />
      {/* Form Section */}
      <AssignSubjectForm />
    </div>
  );
}
