"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineEdit } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";
import { allClassesDataType } from "@/types/allClassesDataType";

export default function ClassCard({
  classname,
  totalStudents,
  percentageData,
}: allClassesDataType) {
  const [deleted, setDelete] = useState(false);
  const [edit, setEdit] = useState(false);

  return (
    <div className="rounded-2xl bg-white py-4 px-6 w-full">
      {/* Subject, Buttons and icon */}
      <div className="flex items-center justify-between gap-x-4">
        <h2 className="text-base text-lightblack font-semibold ">
          {classname}
        </h2>
        <div className="flex items-center gap-x-1">
          <Button
            onMouseEnter={() => setDelete(true)}
            onMouseLeave={() => setDelete(false)}
            size={"icon"}
            className=" relative bg-transparent shadow-none hover:bg-transparent"
          >
            <RiDeleteBin6Line className="text-lightblack border-b-red-500 border-b-2 text-xl" />
            {deleted && (
              <div className="bg-black absolute -top-8 rounded-sm w-12 h-auto text-white text-xs text-center py-[5.5px]">
                <div className="z-10">Delete</div>
                <div className=" bg-black w-2.5 h-2.5 rotate-45 absolute -bottom-0.5 left-[40%] z-0"></div>
              </div>
            )}
          </Button>
          <Button
            onMouseEnter={() => setEdit(true)}
            onMouseLeave={() => setEdit(false)}
            size={"icon"}
            className=" relative bg-transparent shadow-none hover:bg-transparent flex items-center justify-center"
          >
            <MdOutlineEdit className="text-darkblue  border-b-darkblue border-b-[1.5px]" />
            {edit && (
              <div className="bg-black absolute -top-8 rounded-sm w-8 h-auto text-white text-xs text-center py-[5.5px]">
                <div className="z-10">Edit</div>
                <div className=" bg-black w-2.5 h-2.5 rotate-45 absolute -bottom-0.5 left-3 z-0"></div>
              </div>
            )}
          </Button>
        </div>
      </div>
      {/* Total Students */}
      <div className="flex md:flex-col flex-row md:items-start items-center justify-between">
        <div className="">
          <FaGraduationCap className="text-darkblue text-4xl" />
        </div>
        <div className="flex items-center gap-x-3">
          <h2 className="text-4xl font-semibold text-lightblack">
            {totalStudents}
          </h2>
          <h2 className="text-xl font-semibold text-slate">Students</h2>
        </div>
      </div>
      {/* Percentage Section */}
      <div className="flex md:flex-col flex-row gap-x-3 items-center gap-y-4 h-full py-4">
        {percentageData?.map((data) => (
          <div
            key={data.id}
            className="relative border-4 rounded-full h-[53px] w-[53px] flex items-center justify-center"
          >
            <h2 className="text-black text-xs">{data.percentage}</h2>
            <div className="absolute -bottom-4 h-7 w-7 py-0.5 rounded-full bg-white flex flex-col items-center justify-center">
              <h2 className="text-[8px]">{data.heading}</h2>
              <h2 className="text-[11px]">{data.number}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
