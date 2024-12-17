import React from "react";
import HeadingandInputsandBorder from "../markStudentAttendencePageSection/HeadingandInputsandBorder";
import MarkBottomHeadingandButton from "../markStudentAttendencePageSection/MarkBottomHeadingandButton";

export default function MarkEmployeeHeadingAndInputSection() {
  return (
    <div className="w-[65%] mx-auto">
      <HeadingandInputsandBorder
        heading="Choose Employee attendance type"
        markstudentpage={false}
        select={false}
        markemployeepage
      />
      <MarkBottomHeadingandButton employeebtn />
    </div>
  );
}
