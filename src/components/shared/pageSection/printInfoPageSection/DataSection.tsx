"use client";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LuArrowUpDown } from "react-icons/lu";
import PrintInfoHeaderData from "@/lib/PrintInfoFormHeadData";
import PrintInfoBodyData from "@/lib/PrintInfoBodyData";
import PrintInfoButtons from "@/lib/PrintInfoButtons";

export default function DataSection() {
  const [colSpan, setColSpan] = useState(6);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setColSpan(3);
      } else {
        setColSpan(6);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full bg-white rounded-2xl py-4 md:px-4 px-1.5">
      <div className="flex lg:flex-row flex-col items-center justify-between pb-4 gap-4">
        <div className="flex flex-wrap lg:justify-start justify-center gap-2 w-full">
          {PrintInfoButtons.map((data) => (
            <Button key={data.id} variant={"dark"} className="rounded-3xl">
              {data.text}
            </Button>
          ))}
        </div>
        <div className="flex items-center gap-x-2 lg:w-[40%]">
          Search: <Input className="rounded-full" />
        </div>
      </div>
      <Table className="w-full">
        <TableHeader className="border-b-transparent">
          <TableRow className=" border-b-transparent bg-gradient-to-l to-cardfourth from-lightpurplegradient hover:bg-gradient-to-l hover:to-cardfourth hover:from-lightpurplegradient">
            {PrintInfoHeaderData.map((data) => (
              <TableHead
                key={data.id}
                className={` text-white font-semibold  ${
                  data.id === 0 && "rounded-l-full"
                } ${data.id === 6 && "rounded-r-full"} border-b-0 `}
              >
                <div className="flex items-center justify-center gap-x-6">
                  {data.heading}
                  <div className="flex text-sm text-[#9299EC] ">
                    <LuArrowUpDown />
                  </div>
                </div>
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody className="border-b border-b-black">
          {PrintInfoBodyData.map((data) => (
            <TableRow key={data.id} className="">
              {data.insideData?.map((insidedata) => (
                <TableCell
                  key={insidedata.id}
                  className="font-medium text-center"
                >
                  {insidedata.data}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
        <TableFooter className="bg-transparent hover:bg-transparent w-full">
          <TableRow>
            <TableCell
              colSpan={colSpan}
              className="text-lightblack max-w-[150px]"
            >
              Showing 1 to 1 of 1 entries
            </TableCell>
            <TableCell className="md:text-right text-center">
              <Button variant={"transparent"}>Previous</Button>
              <Button className="bg-darkblue hover:bg-darkblue">1</Button>
              <Button variant={"transparent"}>Next</Button>
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
