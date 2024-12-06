import { Label } from "@/components/ui/label";
import React from "react";
import { Input } from "../../../ui/input";

export interface inputSectionTypes {
  label?: string;
  placeHolder?: string;
  type?: string;
  theme?: "dark" | "blues" | "";
  select?: boolean;
}

export default function InputSection({
  label,
  placeHolder,
  type,
  theme = "blues",
  select = false,
}: inputSectionTypes) {
  return (
    <div className=" border-cardfourth relative border w-full h-auto rounded-3xl py-2 px-2">
      <Label
        className={`absolute -top-2.5 left-4 ${
          theme === "blues"
            ? "bg-gradient-to-l to-cardfourth from-lightpurplegradient"
            : theme === "dark"
            ? "bg-slate "
            : "bg-transparent"
        }  text-xs text-white px-1.5 py-0.5 rounded-xl`}
      >
        {label}
      </Label>
      {!select && type !== "file" && (
        <Input
          type={type}
          className={`h-8 w-full rounded-3xl border-none focus-visible:ring-0 focus-visible:border-none`}
          placeholder={placeHolder}
        />
      )}
      {type === "file" && (
        <Label>
          <Input type={type} className={`hidden `} placeholder={placeHolder} />
          <div className="w-[40%] h-6 bg-gray-200 text-center flex items-center justify-center">
            Choose File
          </div>
          No File chosen
        </Label>
      )}
      {select && (
        <select className="h-8 w-full rounded-3xl border border-none focus-visible:outline-none focus-visible:ring-0">
          <option value="0"></option>
          <option value="student1">Student 1</option>
          <option value="student2">Student 2</option>
          <option value="student3">Student 3</option>
        </select>
      )}
    </div>
  );
}
