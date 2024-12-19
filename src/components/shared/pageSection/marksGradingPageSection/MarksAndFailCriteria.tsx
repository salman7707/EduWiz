"use client";
import React, { useState } from "react";
import MarksGradingForm from "./MarksGradingFormSection";
import FailCriteriaForm from "./FailCriteriaForm";

export default function MarksAndFailCriteria() {
  const [button, setButton] = useState("marks");
  return (
    <div className="xl:w-[69%] w-full max-w-full mx-auto flex flex-col items-start mt-6">
      <div className="space-x-2 flex items-center ml-6 translate-y-[1px] z-10">
        <div
          onClick={() => setButton("marks")}
          className={`${
            button === "marks"
              ? "bg-white text-darkblue font-semibold px-3 text-sm"
              : "bg-gray-200 text-lightblack font-medium px-2 text-xs py-2"
          }  text-sm border cursor-pointer border-t border-gray-400 border-b-0 rounded-t-sm text-center py-1.5 `}
        >
          Marks Grading
        </div>
        <div
          onClick={() => setButton("fail")}
          className={`${
            button === "fail"
              ? "bg-white text-darkblue font-semibold px-3 text-sm "
              : "bg-gray-200 text-lightblack font-medium px-2 text-xs py-2"
          }   border cursor-pointer border-t border-gray-400 border-b-0 rounded-t-sm text-center py-1.5`}
        >
          Fail Criteria
        </div>
      </div>
      {button === "marks" ? <MarksGradingForm /> : <FailCriteriaForm />}
    </div>
  );
}
