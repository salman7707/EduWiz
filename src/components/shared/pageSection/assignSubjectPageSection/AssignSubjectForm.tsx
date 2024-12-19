import InputSection from "@/components/template/form/input/InputSection";
import { Button } from "@/components/ui/button";
import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";

export default function AssignSubjectForm() {
  return (
    <div className="bg-white rounded-2xl lg:w-[50%] md:w-[60%] mx-auto my-4 border py-5">
      {/* Heading section */}
      <div className="py-4 px-2">
        <h2 className="text-medblacktext text-xl font-semibold text-center">
          Create Subjects
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
      {/* Form Section */}
      <form className="grid grid-cols-1">
        <div className="w-[90%] mx-auto grid grid-cols-[60%_40%] gap-y-6 gap-x-3">
          <div className="col-span-2">
            <InputSection
              select={true}
              label="Select Class*"
              option={[
                { id: 0, value: "Select*" },
                { id: 1, value: "computer" },
              ]}
            />
          </div>

          <div className="">
            <InputSection
              type="text"
              placeHolder="Name Of Subject"
              label="Select Class*"
            />
          </div>
          <div className="">
            <InputSection
              type="number"
              placeHolder="Total Exam Marks"
              label="Marks*"
            />
          </div>
        </div>
        <div className="flex items-center justify-center gap-x-2 py-4">
          <Button className="bg-slate hover:bg-slate text-white text-xs rounded-3xl px-2.5 h-[22px]">
            <FaPlus /> Add More Option
          </Button>
          <Button className="bg-lightblack text-white text-xs rounded-3xl px-3 h-[22px]">
            <FaMinus /> Remove
          </Button>
        </div>
        <div className="pb-2 pt-4 flex items-center justify-center">
          <Button type="submit" variant={"yellow"} className="rounded-2xl">
            <FaPlus /> Assign Subjects
          </Button>
        </div>
      </form>
    </div>
  );
}
