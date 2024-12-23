"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { addIncomeType } from "@/types/addIncomeDataTypes";
import React, { useState } from "react";
import { FaCheck } from "react-icons/fa6";

interface headingandinputtypes {
  heading?: string;
  InputData?: addIncomeType[];
}

export default function AddHeadingInputsSection({
  heading,
  InputData,
}: headingandinputtypes) {
  const [date, setDate] = useState("2024-12-20");

  return (
    <div className="space-y-4">
      <h2 className={`text-cardsecond text-3xl font-semibold  text-center`}>
        {heading}
      </h2>
      <div className={`border-b-2 w-full border-gray py-0 mx-auto`}></div>
      <div className="space-y-2">
        {InputData?.map((data) => (
          <div key={data.id} className="w-full space-y-1">
            <Input
              name={data.name}
              type={data.type}
              value={data.id === 0 ? date : data.value}
              placeholder={data.placeholder}
              onChange={(e) => setDate(e.target.value)}
              className="w-full h-10 rounded-none border-gray-300 border focus-visible:ring-0 focus:border-blue bg-white text-gray-600"
            />
          </div>
        ))}
      </div>
      <div className={`border-b-2 w-full border-gray py-0 mx-auto`}></div>
      <div className="flex items-center justify-center">
        <Button
          variant={"lightblueattendance"}
          size={"default"}
          className="h-11 px-4 text-lg rounded-none"
        >
          <FaCheck />
          Submit
        </Button>
      </div>
    </div>
  );
}
