import HeadingSection from "@/components/shared/pageSection/addStudentPageSection/HeadingSection";
import AddNewStudentSection from "@/components/shared/pageSection/allStudentPageSection/AddNewStudentSection";
import React from "react";

export default function page() {
  return (
    <div className="px-4 py-7">
      <HeadingSection forpage="Students" heading="All Students" buttonsection={false} allstudentbtn={true} />
      <AddNewStudentSection />
    </div>
  );
}
