
import Input from "@/components/template/form/input/InputSection";
import React from "react";

export default function FormSection() {
  return (
    <div>
      <div className="border-b border-lightblack flex items-center gap-x-1 ">
        <div className="bg-black rounded-full flex items-center justify-center w-[22px] h-[22px] text-white text-sm font-semibold">
          1
        </div>
        <h2 className="font-semibold text-sm text-medblacktext ">Student Information</h2>
      </div>
      <div className="grid grid-cols-3 gap-8 mt-10">
        <Input label="Student Name*" placeHolder="Name of Student" type="text"/>
        <Input label="Last Registration: None" placeHolder="Registration No" type="text"/>
        <Input label="Select Class" select={true} />
        <Input label="Picture - Optional" theme="dark" type="file" />
        <Input label="Picture - Optional" theme="dark" type="file" />
      </div>
    </div>
  );
}
