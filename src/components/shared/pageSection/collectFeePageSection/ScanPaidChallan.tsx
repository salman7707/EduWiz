import { Button } from "@/components/ui/button";
import React from "react";
import { FaBarcode, FaLock } from "react-icons/fa6";

interface CollectSearchType {
  heading?: string;
  placeholder?: string;
}

export default function ScanPaidChallan({ heading }: CollectSearchType) {
  return (
    <div className="w-full mx-auto flex flex-col items-center justify-center space-y-4 ">
      <div>
        <h2 className="text-xl flex items-center gap-x-1 text-lightblack font-semibold">
          <FaBarcode />
          {heading}
        </h2>
      </div>
      <div className="flex justify-center gap-x-2 w-[95%] mx-auto">
        <Button
          size={"default"}
          className="bg-darkpink h-11 px-4 text-lg rounded-none"
        >
          <FaLock />
          Start Scanning
        </Button>
      </div>
    </div>
  );
}
