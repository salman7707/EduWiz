import InputSection from "@/components/template/form/input/InputSection";
import React from "react";

export default function SelectClassSection() {
  const options = [
    {
      id: 0,
      value: "Select*",
    },
  ];
  return (
    <div className="flex items-center justify-start w-full px-3 py-4">
      <div className="md:w-[35%] w-full">
        <InputSection
          label="Select Class*"
          theme="blues"
          select={true}
          option={options}
        />
      </div>
    </div>
  );
}
