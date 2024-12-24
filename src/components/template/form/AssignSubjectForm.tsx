import { AssignSubject } from "@/lib/AssignSubjectForm";
import React from "react";
import InputSection from "./input/InputSection";
import { Button } from "@/components/ui/button";
import { FaMinus, FaPlus } from "react-icons/fa6";

export default function AssignSubjectForm() {
  return (
    <form className="grid grid-cols-1">
      <div className="w-[90%] mx-auto grid grid-cols-[60%_40%] gap-y-6 gap-x-3">
        {AssignSubject.map((data) => (
          <div key={data.id} className={`${data.colSpan && "col-span-2"} `}>
            <InputSection
              name={data.name}
              select={data.select}
              label={data.label}
              option={data.options}
              type={data.type}
              size="small"
              placeHolder={data.placeholder}
            />
          </div>
        ))}
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
  );
}
