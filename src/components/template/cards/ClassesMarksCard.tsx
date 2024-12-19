"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { MdOutlineEdit } from "react-icons/md";
import { allClassesDataType } from "@/types/allClassesDataType";
import { FaFolder } from "react-icons/fa6";

export default function ClassMarksCard({
  classname,
  totalmarks,
  totalsubjects,
}: allClassesDataType) {
  const [edit, setEdit] = useState(false);
  return (
    <div className="rounded-2xl bg-white py-4 px-4 w-full border">
      {/* Subject Name */}
      <div className="flex xl:flex-col flex-row justify-between gap-x-4">
        <h2 className="text-[22px] text-start text-lightblack font-semibold">
          {classname}
        </h2>
        <div className="flex flex-col items-end  justify-between gap-x-4">
          <div className="flex items-center gap-x-1">
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
          {/* Folder Icons */}
          <FaFolder className="text-darkblue text-3xl" />
        </div>
      </div>
      {/* Icons */}

      <div className="flex md:flex-col flex-row">
        {/* Total Subjects */}
        <div className="flex flex-col items-start justify-center border-r border-neutralgray pr-1.5 my-1 mr-2">
          <h2 className="text-xl font-semibold text-lightblack">
            {totalsubjects}
          </h2>
          <h2 className="text-[10px] font-normal text-slate">TOTAL SUBJECTS</h2>
        </div>
        {/*  */}
        <div className="flex flex-col items-start justify-center w-[65%] mx-auto">
          <h2 className="text-xl font-semibold text-lightgraytext">
            {totalmarks}
          </h2>
          <h2 className="text-[10px] font-normal text-slate">
            TOTAL EXAM MARKS
          </h2>
        </div>
      </div>
      {/*  */}
      <div className="flex flex-col items-start h-full py-4 md:w-[70%] mx-auto">
        <div className="relative border-4 border-darkblue rounded-full h-[60px] w-[63px] flex items-center justify-center">
          <h2 className="text-black text-xs font-semibold">{totalmarks}</h2>
          <div className="absolute -bottom-1 h-3 w-10 py-1 rounded-3xl bg-white flex flex-col items-center justify-center">
            <h2 className="text-[11px]">Marks</h2>
          </div>
        </div>
        <div>
          <h2 className="text-darkblue text-xs font-semibold">Computer</h2>
        </div>
      </div>
    </div>
  );
}
