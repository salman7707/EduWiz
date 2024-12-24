import AddNewClassForm from "@/components/template/form/AddNewClassForm";
import RequireAndOptionalHeading from "@/components/template/heading/RequireAndOptionalHeading";
import React from "react";
export default function AddNewHeadingAndFormSection() {
  return (
    <div className="w-full mt-6">
      <div className="md:w-[50%] border bg-white rounded-2xl mx-auto h-auto py-3">
        {/* Heading Section */}
        <RequireAndOptionalHeading
          heading="Add New Class"
          headingsize="small"
        />
        {/* Form Section */}
        <AddNewClassForm />
      </div>
    </div>
  );
}
