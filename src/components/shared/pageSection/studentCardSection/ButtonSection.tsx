"use client";
import { Button } from "@/components/ui/button";
import AllStudentsButtonSection from "@/lib/StudentIdCardPageButtons";
import React, { useState } from "react";
import { BiSolidCard } from "react-icons/bi";

export default function ButtonSection() {
  const [btnstate, setBtnstate] = useState("Default");

  return (
    <div className="flex flex-wrap gap-3 py-5 px-4">
      {AllStudentsButtonSection.map((data) => (
        <Button
          key={data.id}
          type="button"
          onClick={() => setBtnstate(data.text)}
          className={` ${
            btnstate === data.text
              ? "bg-darkblue text-white"
              : "bg-white text-darkblue"
          } ${
            data.transparent && "opacity-55"
          } hover:bg-darkblue hover:text-white text-lg rounded-sm `}
        >
          {data.id !== 0 && <BiSolidCard />}
          {data.text}
        </Button>
      ))}
    </div>
  );
}
