import InputWithSearch from "@/components/template/form/input/InputWithSearch";
import { Input } from "@/components/ui/input";
import React from "react";

export default function FeeSlipMonthAndSearch() {
  return (
    <div className="w-full mt-10 space-y-2">
      <div className="w-[30%] mx-auto">
        <h2 className="text-center text-sm text-lightblack">Fee Month</h2>
        <Input
          type="month"
          className="bg-white border-neutralgray border rounded-none text-lightblack"
        />
      </div>
      <div className="w-[30%] mx-auto">
        <InputWithSearch placeholder="Search Student" />
      </div>
    </div>
  );
}
