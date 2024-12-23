"use client";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";

export default function ToggleBtn() {
  const [State, setState] = useState(true);
  const handleToggle = () => {
    setState(!State);
  };
  return (
    <div
      className=" bg-gray-200 h-1.5 w-[26px] rounded-2xl"
      onClick={handleToggle}
    >
      <div
        className={`h-3 w-3 rounded-full transition-all duration-500 ease-in-out -translate-y-[3px]   ${
          State
            ? "translate-x-4 bg-darkblue"
            : "translate-x-0 bg-white border-2 border-neutralgray"
        } `}
      >
        <Input
          type="checkbox"
          onChange={handleToggle}
          checked={State}
          className="hidden"
        />
      </div>
    </div>
  );
}
