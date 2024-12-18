"use client"
import InputSection from "@/components/template/form/input/InputSection";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";

export default function HomeworkFormSectionPage() {
  const [date, setDate] = useState("2024-12-18");
  return (
    <div className="bg-white flex lg:flex-row flex-col gap-x-8 gap-y-5 w-full justify-start items-center rounded-xl mt-3 py-10 px-4">
      <div className="w-full">
        <InputSection
          label="Homework Date*"
          type="date"
          values={date}
          handlechange={(e)=>setDate(e.target.value)}
          select={false}
        />
      </div>
      <div className="w-full">
        <InputSection
          label="Class*"
          select={true}
          option={[
            {
              id: 0,
              value: "All Classes",
            },
            {
              id: 1,
              value: "Computer",
            },
          ]}
        />
      </div>
      <div className="w-full">
        <InputSection
          label="Teacher*"
          select={true}
          option={[
            {
              id: 0,
              value: "All Teachers",
            },
            {
              id: 1,
              value: "salman",
            },
          ]}
        />
      </div>
      <div className="w-full">
        <Button className="bg-gradient-to-l to-cardfourth from-lightpurplegradient rounded-3xl h-10 px-3 text-[17px]">
          <IoMdSearch />
          Search
        </Button>
      </div>
    </div>
  );
}
