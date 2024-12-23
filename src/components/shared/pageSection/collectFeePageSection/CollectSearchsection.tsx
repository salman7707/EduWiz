import InputWithSearch from "@/components/template/form/input/InputWithSearch";
import React from "react";

interface CollectSearchType {
  heading?: string;
  placeholder?: string;
}

export default function CollectSearchsection({
  heading,
  placeholder,
}: CollectSearchType) {
  return (
    <div className="w-full flex flex-col items-center justify-center mx-auto space-y-4 ">
      <div>
        <h2 className="text-xl text-lightblack text-center font-semibold">
          {heading}
        </h2>
      </div>
      <div className="w-[30%] mx-auto">
        <InputWithSearch placeholder={placeholder} />
      </div>
    </div>
  );
}
