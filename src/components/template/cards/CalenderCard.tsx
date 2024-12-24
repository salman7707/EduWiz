"use client";
import Date from "@/lib/Date";
import Days from "@/lib/Days";
import { navInitialStateTypes } from "@/lib/store/navSlice";
import React from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { useSelector } from "react-redux";

export default function CalenderCard() {
  const { navbarOpen } = useSelector(
    (state: { nav: navInitialStateTypes }) => state.nav
  );
  return (
    <div className="w-full rounded-2xl bg-white shadow-md hover:shadow-xl">
      <div className="px-6 py-4 space-y-3">
        {/* arrow or month */}
        <div className="flex items-center justify-between">
          <div className="bg-gray-200 px-1.5 py-1.5 rounded-full">
            <MdOutlineKeyboardArrowLeft className="text-xl text-blue" />
          </div>
          <div>
            <h2 className="text-pink xl:text-lg text-base text-center font-semibold">
              December , 2024
            </h2>
            <h2 className="text-pink xl:text-sm text-xs font-normal text-center">
              Thu Dec 05 2024
            </h2>
          </div>
          <div className="bg-gray-200 px-1.5 py-1.5 rounded-full">
            <MdOutlineKeyboardArrowRight className="text-xl text-blue" />
          </div>
        </div>
        {/* Days */}
        <div className="flex items-center justify-between">
          {Days.map((data, index) => (
            <div
              key={index}
              className="xl:px-1 px-[3px] border-l border-pink text-blue text-[9px] xl:text-xs"
            >
              {data.day}
            </div>
          ))}
        </div>
        <div
          className={`grid grid-cols-7 items-center justify-between w-full px-3 ${
            navbarOpen ? "xl:gap-x-8 gap-x-6" : "xl:gap-x-[50px] gap-x-8"
          }  gap-y-3`}
        >
          {Date.map((data, index) => (
            <div
              key={index}
              className="text-blue xl:text-xs text-[9px] text-center"
            >
              {data.date}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
