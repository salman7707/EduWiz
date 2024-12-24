"use client";
import FeeParticularsForm from "@/components/template/form/FeeParticularsForm";
import RequireAndOptionalHeading from "@/components/template/heading/RequireAndOptionalHeading";
import React from "react";

export default function FeeFormAndHeadingSection() {
  return (
    <div className="py-6 w-full">
      {/* Heading Section */}
      <RequireAndOptionalHeading heading="Change Fee Particulars" />
      {/* Form section */}
      <FeeParticularsForm />
    </div>
  );
}
