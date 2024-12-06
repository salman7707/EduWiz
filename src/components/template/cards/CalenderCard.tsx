"use client";
import { navInitialStateTypes } from "@/lib/store/navSlice";
import React from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { useSelector } from "react-redux";

const days = [
  { day: "SUN" },
  { day: "MON" },
  { day: "TUE" },
  { day: "WED" },
  { day: "THU" },
  { day: "FRI" },
  { day: "SAT" },
];

const date = [
  { date: 1 },
  { date: 2 },
  { date: 3 },
  { date: 4 },
  { date: 5 },
  { date: 6 },
  { date: 7 },
  { date: 8 },
  { date: 9 },
  { date: 10 },
  { date: 11 },
  { date: 12 },
  { date: 13 },
  { date: 14 },
  { date: 15 },
  { date: 16 },
  { date: 17 },
  { date: 18 },
  { date: 19 },
  { date: 20 },
  { date: 21 },
  { date: 22 },
  { date: 23 },
  { date: 24 },
  { date: 25 },
  { date: 26 },
  { date: 27 },
  { date: 28 },
  { date: 29 },
  { date: 30 },
];
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
            <h2 className="text-pink xl:text-lg text-base text-center font-semibold">December , 2024</h2>
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
          {days.map((data, index) => (
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
          {date.map((data, index) => (
            <div key={index} className="text-blue xl:text-xs text-[9px] text-center">
              {data.date}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
