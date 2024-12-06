import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { RiPencilRulerLine } from "react-icons/ri";
import { FiDownload } from "react-icons/fi";
import { Button } from "@/components/ui/button";

export default function HeadingSection() {
  return (
    <div className="bg-white w-full rounded-lg flex items-center justify-between px-4 py-3">
      <div className="flex items-center gap-x-3">
        <div className="border-r border-black px-3">
          <h1 className="text-gray-900 font-semibold">Students</h1>
        </div>
        <div className="flex items-center justify-center gap-x-2">
          <AiOutlineHome className="text-xl" />
          <div className="text-black text-lg">-</div>
          <div className="text-black text-base">Admission Form</div>
        </div>
      </div>
      <div className="space-x-2">
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
    </div>
  );
}
