"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { addIncomeType } from "@/types/addIncomeDataTypes";
import React, { useState } from "react";
import { FaLock } from "react-icons/fa6";

interface CollectFeeFamily {
  heading?: string;
  InputData?: addIncomeType[];
}

export default function CollectFeeFamily({
  heading,
  InputData,
}: CollectFeeFamily) {
  const [date, setDate] = useState("2024-12-20");
  const [selectoption, SetSelectoption] = useState("");
  return (
    <div className="space-y-4 w-full mx-auto ">
      <div className={`border-b-2 w-full border-gray py-0 mx-auto`}></div>
      <div className="py-6">
        <h2 className={`text-lightblack text-xl font-semibold  text-center`}>
          {heading}
        </h2>
        <div className="space-y-2 lg:w-[32%] mx-auto pt-2">
          {InputData?.map((data) => (
            <div key={data.id} className="w-full space-y-1">
              {data.type === "select" && (
                <select
                  value={selectoption}
                  onChange={(e) => SetSelectoption(e.target.value)}
                  className="w-full bg-white border py-2"
                >
                  {data.option?.map((option) => (
                    <option key={option.id}>{option.value}</option>
                  ))}
                </select>
              )}
              {data.type !== "select" && (
                <Input
                  name={data.name}
                  type={data.type}
                  value={data.id === 0 ? date : data.value}
                  placeholder={data.placeholder}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full h-10 rounded-none border-gray-300 border focus-visible:ring-0 focus:border-blue bg-white text-gray-600"
                />
              )}
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center mt-5">
          <Button
            size={"default"}
            className="bg-darkpink h-11 px-4 text-lg rounded-none"
          >
            <FaLock />
            Submit
          </Button>
        </div>
      </div>
      <div className={`border-b-2 w-full border-gray py-0 mx-auto`}></div>
    </div>
  );
}
