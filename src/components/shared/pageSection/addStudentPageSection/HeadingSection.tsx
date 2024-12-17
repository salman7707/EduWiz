import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { RiPencilRulerLine } from "react-icons/ri";
import { FiDownload } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { RiLoopRightLine } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";
import { FaPrint } from "react-icons/fa";
import { FaPencilRuler } from "react-icons/fa";
import { GoPlus } from "react-icons/go";

interface HeadingSectionType {
  buttonsection?: boolean;
  allstudentbtn?: boolean;
  allstudentprintbtn?: boolean;
  heading?: string;
  addEmployee?: boolean;
  forpage?: string;
  resetBtn?: boolean;
  homeworkbtn?: boolean;
}

export default function HeadingSection({
  buttonsection = true,
  allstudentbtn = false,
  allstudentprintbtn = false,
  heading,
  addEmployee,
  forpage,
  resetBtn = false,
  homeworkbtn,
}: HeadingSectionType) {
  return (
    <div className="bg-white w-full rounded-lg flex md:flex-row flex-col items-center justify-between gap-y-3 md:px-4 py-3 px-2">
      <div className="flex items-center md:justify-start justify-center gap-x-3">
        <div className="border-r border-black px-3">
          <h1 className="text-gray-900 font-semibold">{forpage}</h1>
        </div>
        <div className="flex items-center justify-center gap-x-2">
          <AiOutlineHome className="text-xl" />
          <div className="text-black text-lg">-</div>
          <div className="text-black text-base">{heading}</div>
        </div>
      </div>
      {buttonsection && (
        <div className="gap-x-2 flex items-center justify-center px-6">
          <Button
            size={"default"}
            variant={"orangegradient"}
            className="text-white rounded-2xl"
          >
            <RiPencilRulerLine />
            Customize
          </Button>
          {!addEmployee && (
            <Button
              size={"default"}
              variant={"medblue"}
              className="text-white rounded-2xl"
            >
              <FiDownload />
              Import Students
            </Button>
          )}
        </div>
      )}
      {/* Allstudent btn for AllStudents Page */}
      {allstudentbtn && (
        <div className="gap-x-2 flex items-center justify-center px-6">
          <Button
            size={"default"}
            className="text-black rounded-md bg-btnbg hover:bg-btnbg px-4 text-xl"
          >
            <RiLoopRightLine />
          </Button>
          <Button
            size={"default"}
            className="text-black bg-btnbg hover:bg-btnbg rounded-md text-xl"
          >
            <IoSearchOutline />
            Search
          </Button>
        </div>
      )}
      {allstudentprintbtn && (
        <div className="gap-2 flex md:flex-row flex-wrap items-center justify-center lg:px-6 px-2">
          <Button
            size={"default"}
            className="text-black rounded-md bg-btnbg hover:bg-btnbg px-4 text-lg"
          >
            <RiLoopRightLine />
          </Button>
          <Button
            size={"default"}
            className="text-black bg-btnbg hover:bg-btnbg rounded-md text-lg"
          >
            <IoSearchOutline />
            Search
          </Button>
          <Button
            size={"default"}
            className="text-black bg-btnbg hover:bg-btnbg rounded-md text-lg"
          >
            <FaPrint />
            Print
          </Button>
          <Button
            size={"default"}
            className="opacity-55 text-black bg-btnbg hover:bg-btnbg rounded-md text-lg"
          >
            <FaPencilRuler />
            Customize
          </Button>
        </div>
      )}
      {resetBtn && (
        <div className="gap-x-2 flex items-center justify-center px-6">
          <Button size={"default"} className="rounded-2xl px-4 text-xs">
            <RiLoopRightLine /> Reset To Default
          </Button>
          <Button
            size={"default"}
            className="rounded-full bg-green-500 text-xs"
          >
            ?
          </Button>
        </div>
      )}
      {homeworkbtn && (
        <Button
          size={"default"}
          variant={"blue"}
          className="opacity-60 rounded-2xl px-4 text-xs"
        >
          <GoPlus /> Add Homework
        </Button>
      )}
    </div>
  );
}
