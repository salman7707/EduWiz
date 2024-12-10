import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { RiPencilRulerLine } from "react-icons/ri";
import { FiDownload } from "react-icons/fi";
import { Button } from "@/components/ui/button";

interface HeadingSectionType {
  buttonsection?: boolean;
  heading?: string;
}

export default function HeadingSection({
  buttonsection = true,
  heading,
}: HeadingSectionType) {
  return (
    <div className="bg-white w-full rounded-lg flex md:flex-row flex-col items-center justify-between gap-y-3 md:px-4 py-3 px-2">
      <div className="flex items-center md:justify-start justify-center gap-x-3">
        <div className="border-r border-black px-3">
          <h1 className="text-gray-900 font-semibold">Students</h1>
        </div>
        <div className="flex items-center justify-center gap-x-2">
          <AiOutlineHome className="text-xl" />
          <div className="text-black text-lg">-</div>
          <div className="text-black text-base">{heading}</div>
        </div>
      </div>
      {buttonsection && (
        <div className="gap-x-2 flex items-center justify-center px-6">
          <Button
            size={"default"}
            variant={"orangegradient"}
            className="text-white rounded-2xl"
          >
            <RiPencilRulerLine />
            Customize
          </Button>
          <Button
            size={"default"}
            variant={"medblue"}
            className="text-white rounded-2xl"
          >
            <FiDownload />
            Import Students
          </Button>
        </div>
      )}
    </div>
  );
}
