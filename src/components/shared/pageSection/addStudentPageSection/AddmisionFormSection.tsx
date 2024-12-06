import React from "react";
import FormSection from "./FormSection";

export default function AddmisionFormSection() {
  return (
    <div>
      {/* Heading Section */}
      <div className="py-4 px-2">
        <h2 className="text-medblacktext text-3xl font-semibold text-center">
          Admission Form
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
      {/* Other Forms are been added there */}
      <div>
        <FormSection />
      </div>
    </div>
  );
}
