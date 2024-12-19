import React from "react";
import HeadingandInputsandBorder from "./HeadingandInputsandBorder";
import MarkBottomHeadingandButton from "./MarkBottomHeadingandButton";

export default function ManualHeadingAndInputSection() {
  return (
    <div className="md:w-[65%] mx-auto space-y-4">
      <HeadingandInputsandBorder
        heading="Mark Manual Attendance Class wise"
        select={true}
        markstudentpage
      />
      <MarkBottomHeadingandButton
        heading="Mark Attendance with card scanning"
        studentbtn
      />
    </div>
  );
}
