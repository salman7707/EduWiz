import InputSection from "@/components/template/form/input/InputSection";
import { Button } from "@/components/ui/button";
import React from "react";
import { MdLoop } from "react-icons/md";

export default function FailCriteriaForm() {
  return (
    <div className=" w-full rounded-xl border z-0 flex flex-col items-center bg-white pt-2 pb-8">
      <div className="py-4 px-2">
        <h2 className="text-medblacktext text-xl font-semibold text-center">
          Fail Criteria
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
      <div className="flex lg:flex-row flex-col items-center gap-x-4 gap-y-3 px-3 py-2">
        <div className="text-lightgraytext text-[15px] lg:w-[34%]">
          <span className="font-semibold text-lightblack">Student </span>
          will be marked as
          <span className="text-red-500 font-semibold"> FAILED</span> in the
          exams if he or she obtains an{" "}
          <span className="font-semibold text-lightblack">
            overall percentage
          </span>{" "}
          score equal to or below
          <div className="mt-4">
            <InputSection
              type="number"
              label="Overall %"
              placeHolder="Example 40"
            />
          </div>
        </div>
        <div className="text-lightgraytext text-[15px] lg:w-[33%] text-wrap flex flex-col items-start w-full">
          <div className="text-wrap gap-x-1">
            <span className="font-semibold text-YellowBtn text-nowrap">OR</span>{" "}
            he or she obtains a{" "}
            <span className="text-wrap font-semibold text-lightblack pr-1">
              Subject percentag
            </span>
            e score equal to or below
          </div>
          <div className="mt-4 w-full">
            <InputSection
              type="number"
              label="Subject %"
              placeHolder="Example 33"
            />
          </div>
        </div>
        <div className="text-lightgraytext text-[15px] lg:w-[33%] w-full flex flex-col items-start">
          <h2 className="flex gap-x-1">
            at least <span className="font-semibold text-green-500"> in </span>
            Subjects
          </h2>
          <div className="mt-4 w-full">
            <InputSection
              type="number"
              label="Subject %"
              placeHolder="Example 1"
            />
          </div>
        </div>
      </div>
      <div>
        <Button
          variant={"yellow"}
          className="h-11 px-3 text-lg font-normal rounded-3xl"
        >
          <MdLoop /> Update
        </Button>
      </div>
    </div>
  );
}
