import InputWithSearch from "@/components/template/form/input/InputWithSearch";
import { Button } from "@/components/ui/button";
import React from "react";
import { IoMenu } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";

export default function FeeDefaulterHeader() {
  return (
    <div className="flex items-center justify-between px-3">
      <div className="w-[20%]">
        <InputWithSearch type="month" value={"2024-12"} />
      </div>
      <div>
        <h2 className="text-pink text-xl font-semibold">Fee Defaulters</h2>
      </div>
      <div className="space-x-2">
        <Button className="bg-[#6285F4] hover:bg-[#6285F4] rounded-none h-11 px-4 text-base">
          <IoMenu /> List View
        </Button>
        <Button className="bg-pink hover:bg-pink rounded-none h-11 px-4 text-base">
          <TfiEmail /> Send Remindar
        </Button>
      </div>
    </div>
  );
}
