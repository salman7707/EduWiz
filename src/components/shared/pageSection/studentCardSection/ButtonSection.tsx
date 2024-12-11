"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { BiSolidCard } from "react-icons/bi";

export default function ButtonSection() {
  const [btnstate, setBtnstate] = useState("default");
  return (
    <div className="flex flex-wrap gap-3 py-5 px-4">
      <Button
        type="button"
        onClick={() => setBtnstate("default")}
        className={` ${
          btnstate === "default"
            ? "bg-darkblue text-white"
            : "bg-white text-darkblue"
        }  hover:bg-darkblue hover:text-white text-lg rounded-sm `}
      >
        Default
      </Button>
      <Button
        type="button"
        onClick={() => setBtnstate("style1")}
        className={` ${
          btnstate === "style1"
            ? "bg-darkblue text-white"
            : "bg-white text-darkblue"
        }  hover:bg-darkblue hover:text-white text-lg rounded-sm `}
      >
        <BiSolidCard />
        Style 1
      </Button>
      <Button
        type="button"
        className={` bg-darkblue text-white hover:bg-darkblue opacity-55 hover:text-white text-lg rounded-sm `}
      >
        <BiSolidCard />
        Style 2
      </Button>
      <Button
        type="button"
        className={` bg-darkblue text-white hover:bg-darkblue opacity-55 hover:text-white text-lg rounded-sm `}
      >
        <BiSolidCard />
        Style 3
      </Button>
      <Button
        type="button"
        className={` bg-darkblue text-white hover:bg-darkblue opacity-55 hover:text-white text-lg rounded-sm `}
      >
        <BiSolidCard />
        Style 4
      </Button>
    </div>
  );
}
