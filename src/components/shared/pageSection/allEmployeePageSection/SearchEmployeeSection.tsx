import InputSection from "@/components/template/form/input/InputSection";
import { Button } from "@/components/ui/button";
import React from "react";
import { MdLoop } from "react-icons/md";

export default function SearchEmployeeSection() {
  return (
    <div className="flex justify-end">
      <div className="flex items-center justify-center w-[50%] py-6 px-3 gap-x-8">
        <div className="w-[65%]">
          <InputSection
            type="text"
            label="Search Employee*"
            placeHolder="Search Employee"
          />
        </div>
        <div className=""> 
          <Button className="bg-darkblue hover:bg-darkblue flex h-10 rounded-3xl">
            <MdLoop /> All
          </Button>
        </div>
      </div>
    </div>
  );
}
