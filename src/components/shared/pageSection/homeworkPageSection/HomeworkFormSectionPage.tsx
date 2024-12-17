import InputSection from "@/components/template/form/input/InputSection";
import { Button } from "@/components/ui/button";
import React from "react";

export default function HomeworkFormSectionPage() {
  return (
    <div className="bg-white flex gap-x-8 w-full justify-start items-center rounded-xl mt-4 py-10 px-4">
      <div className="w-full">
        <InputSection
          label="Homework Date*"
          type="date"
          values={"2024-12-17"}
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
          label="Class*"
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
        <Button className="bg-gradient-to-l to-cardfourth from-lightpurplegradient rounded-3xl" size={"lg"}> Search</Button>
      </div>
    </div>
  );
}
