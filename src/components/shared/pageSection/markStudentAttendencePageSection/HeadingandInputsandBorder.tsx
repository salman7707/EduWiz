"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { headingandinputtypes } from "@/types/HeadingAndInputSection";
import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";

export default function HeadingandInputsandBorder({
  heading,
  select = true,
  markstudentpage,
  markemployeepage,
}: headingandinputtypes) {
  const [date, setDate] = useState("2024-12-17");
  const [option, setOption] = useState("");
  return (
    <div className="space-y-4">
      <h2
        className={`text-cardsecond font-semibold ${
          markstudentpage ? "text-base" : "text-2xl"
        }  text-center`}
      >
        {heading}
      </h2>
      <div className="md:w-[70%] w-full mx-auto space-y-2">
        <Input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full h-10 rounded-none border-gray-300 border focus-visible:ring-0 focus:border-blue bg-white text-gray-600"
        />
        {select && (
          <select
            value={option}
            onChange={(e) => setOption(e.target.value)}
            className="w-full h-10 border-gray-300 outline-none focus:border-blue  border rounded-none  text-sm px-4 text-gray-600"
          >
            <option value={"-----SELECT CLASS-----"} className="text-sm">
              -----SELECT CLASS-----
            </option>
            <option value={"Computer"} className="text-sm">
              Computer
            </option>
          </select>
        )}
      </div>
      <div className="w-full flex items-center justify-center ">
        {markstudentpage && (
          <Button
            variant={"lightblueattendance"}
            className="h-11 px-6 rounded-none text-lg"
          >
            <IoSearchSharp />
            Search
          </Button>
        )}
        {markemployeepage && (
          <Button variant={"green"} className="h-11 px-6 rounded-2xl text-lg">
            Mark Manual Attendance
          </Button>
        )}
      </div>
      <div
        className={`border-b-2 ${
          markstudentpage && "border-black py-4 w-[55%]"
        } ${markemployeepage && "w-[70%] border-gray py-0"} mx-auto`}
      ></div>
    </div>
  );
}
