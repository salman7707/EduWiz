import { Label } from "@/components/ui/label";
import React from "react";
import { Input } from "../../../ui/input";
import { inputFieldTypes } from "@/types/InputFieldTypes";
export default function InputSection({
  label,
  placeHolder,
  type,
  theme = "blues",
  select = false,
  option,
  values,
  name,
  handlechange,
  handleblur,
  color,
  size,
}: inputFieldTypes) {
  const sizeClasses = size === "small" ? "lg:text-sm" : "lg:text-base";
  const colorClasses = color === "gray" ? "text-lightgraytext" : "text-black";
  return (
    <div className={`flex flex-col w-full`}>
      <div className="border-cardfourth relative border w-full h-auto rounded-3xl py-1 px-1">
        <Label
          className={`absolute -top-2.5 left-4 ${
            theme === "blues"
              ? "bg-gradient-to-l to-cardfourth from-lightpurplegradient"
              : theme === "dark"
              ? "bg-slate "
              : "bg-transparent"
          }  md:text-[10.5px] text-[10px] text-white md:px-2 px-1 py-0.5 rounded-xl`}
        >
          {label}
        </Label>

        {/* Standard Text Input */}
        {!select && type !== "file" && (
          <Input
            type={type}
            value={values}
            name={name}
            onChange={handlechange}
            onBlur={handleblur}
            className={`${
              select && "hidden"
            } h-9 w-full rounded-3xl ${sizeClasses} text-sm ${colorClasses} bg-white border-none focus-visible:ring-0 focus-visible:border-none`}
            placeholder={placeHolder}
          />
        )}

        {/* File Input */}
        {type === "file" && (
          <div className="">
            <Label className="flex items-center justify-start gap-x-3 bg-white mx-auto rounded-3xl h-auto py-2 px-2.5">
              <Input
                name={name}
                type={type}
                onChange={handlechange}
                className={`hidden`}
              />
              <div className="w-[40%] h-6 border-lightblack border bg-gray-200 text-center flex items-center justify-center">
                Choose File
              </div>
              <div className="text-neutralgray">
                {values || "No File chosen"}
              </div>
            </Label>
          </div>
        )}

        {/* Select Dropdown */}
        {select && option && (
          <select
            className="h-9 w-full bg-white rounded-3xl text-lightblacktext px-2.5 border border-none focus-visible:outline-none focus-visible:ring-0"
            name={name}
            value={values}
            onChange={handlechange}
            onBlur={handleblur}
          >
            {option.map((data) => (
              <option
                key={data.id}
                value={data.value}
                className="text-neutralgray"
              >
                {data.value}
              </option>
            ))}
          </select>
        )}
      </div>

      {/* Max Size Note for File */}
      {type === "file" && (
        <div className="bg-[#FFC26B] rounded-2xl text-black py-[2px] h-4 text-center mt-1.5 ml-4 w-20 text-[9px]">
          Max size 100KB
        </div>
      )}
    </div>
  );
}
