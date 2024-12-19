import MarksGradingForm from "@/components/template/form/MarksGradingForm";
import React from "react";

export default function MarksGradingFormSection() {
  return (
    <div className=" w-full rounded-xl border z-0 flex flex-col items-center bg-white py-2">
      {/* Heading */}
      <div className="py-4 px-2">
        <h2 className="text-medblacktext text-xl font-semibold text-center">
          Customize Grading
        </h2>
        <div className="flex items-center justify-center gap-x-3">
          <div className="flex items-center justify-center gap-x-1">
            <div className="bg-gradient-to-l to-cardfourth from-lightpurplegradient w-5 h-[7px] rounded-md"></div>
            <div className="text-xs text-lightblacktext ">Required*</div>
          </div>
          <div className="flex items-center justify-center gap-x-1">
            <div className="bg-slate w-5 h-[7px] rounded-md"></div>
            <div className="text-xs text-medblacktext ">Optional</div>
          </div>
        </div>
      </div>
      <MarksGradingForm />
    </div>
  );
}
