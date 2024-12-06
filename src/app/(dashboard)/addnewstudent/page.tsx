import AddmisionFormSection from "@/components/shared/pageSection/addStudentPageSection/AddmisionFormSection";
import HeadingSection from "@/components/shared/pageSection/addStudentPageSection/HeadingSection";
import React from "react";

export default function page() {
  return (
    <div className="px-5 py-8">
      <HeadingSection />
      <AddmisionFormSection />
    </div>
  );
}
