import InputSection from "@/components/template/form/input/InputSection";
import { Button } from "@/components/ui/button";
import MarksGrading from "@/lib/MarksGrading";
import React from "react";
import { FaCheck, FaMinus, FaPlus } from "react-icons/fa6";

export default function MarksGradingForm() {
  return (
    <div className=" w-full rounded-xl border z-0 flex flex-col items-center bg-white py-2">
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
      <form className="grid xl:grid-cols-[33%_15%_15%_33%] lg:grid-cols-4 md:grid-cols-[33%_15%_15%_33%]  grid-cols-4 w-[95%] justify-center mx-auto md:gap-x-2 gap-x-1 gap-y-6 mt-2">
        {MarksGrading.map((data) => (
          <div key={data.id}>
            <InputSection
              label={data.label}
              placeHolder={data.placeholder}
              select={data.select}
              theme={data.theme}
              type={data.type}
              values={data.value}
              size={"small"}
              color={"gray"}
            />
          </div>
        ))}
      </form>
      <div className="flex items-center justify-center gap-x-2 py-4">
        <Button className="bg-slate text-white text-xs rounded-3xl px-2.5 h-[22px]">
          <FaPlus /> Add More Option
        </Button>
        <Button className="bg-lightblack text-white text-xs rounded-3xl px-3 h-[22px]">
          <FaMinus /> Remove
        </Button>
      </div>
      <div className="pb-4 pt-2">
        <Button variant={"yellow"} className="rounded-2xl">
          <FaCheck /> Save Changes
        </Button>
      </div>
    </div>
  );
}
