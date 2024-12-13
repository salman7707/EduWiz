import HeadingSection from "@/components/shared/pageSection/addStudentPageSection/HeadingSection";
import ClassesAndAdd from "@/components/shared/pageSection/allClassesPageSection/ClassesAndAdd";
import React from "react";

export default function page() {
  return (
    <div className="py-8 px-6">
      <HeadingSection heading=" All Classes" forpage="Classes" buttonsection={false} />
      <ClassesAndAdd />
    </div>
  );
}
