"use client";
import React, { useState } from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { BsWindowFullscreen } from "react-icons/bs";
import { TiMinus } from "react-icons/ti";
import { RiLoopRightLine } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { TfiFaceSad } from "react-icons/tfi";
export interface StaticCardTypes {
  heading: string;
  headingcolor: string;
}

export default function StudentCountCard({
  heading,
  headingcolor,
}: StaticCardTypes) {
  const [option, setOption] = useState(false);
  const colorClasses =
    headingcolor === "pink"
      ? "text-pink"
      : headingcolor === "cardfirst"
      ? "text-cardfirst"
      :  headingcolor === "blue" ? "text-blue" : "text-cardsecond";
  return (
    <div className="w-full bg-white rounded-2xl hover:shadow-2xl shadow-md overflow-hidden">
      <div className="px-6 py-6">
        <div className="flex items-center justify-between">
          <h2 className={`${colorClasses} text-base font-semibold`}>
            {heading}
          </h2>
          <div className="flex gap-x-6 transition-all duration-1000 ease-in-out">
            {option ? (
              <MdOutlineKeyboardArrowRight
                className="text-3xl text-gray-600"
                onClick={() => setOption(false)}
              />
            ) : (
              <MdOutlineKeyboardArrowLeft
                className="text-3xl text-gray-600"
                onClick={() => setOption(true)}
              />
            )}
            <div
              className={`items-center justify-center transition-all duration-1000 ease-in-out gap-x-4 text-gray-500 text-lg ${
                option === true ? "translate-x-0 flex" : "translate-x-40 hidden"
              }`}
            >
              <BsWindowFullscreen />
              <TiMinus />
              <RiLoopRightLine />
              <IoMdClose />
            </div>
          </div>
        </div>
        <div className="w-full text-pink text-center py-5 gap-y-2">
          <div className="flex items-center justify-center w-full">
            <TfiFaceSad />
          </div>
          <h2 className="text-pink text-base font-semibold">
            Attendance Not Marked Yet !
          </h2>
        </div>
      </div>
    </div>
  );
}
