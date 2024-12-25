"use client";
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { IoIosSearch } from "react-icons/io";
import AccountIcons from "@/lib/AccountIcons";
import formheaderdata from "@/lib/FormsHeadData";
import AccountData from "@/lib/AccountData";
export default function AccountDataSection() {
  const [date, setDate] = useState("2024-12-20");

  return (
    <div className="w-full">
      {/*  */}
      <div className="flex md:flex-row flex-col items-center justify-between pb-4 gap-4">
        <div className="flex flex-wrap justify-start items-center gap-2 w-full">
          <div className="rounded-none">
            <Input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="border-b-black rounded-none border-t-transparent border-x-transparent shadow-none"
            />
          </div>
          <div className="rounded-none font-semibold text-cardsecond">To:</div>
          <div className="rounded-none">
            <Input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="border-b-black rounded-none border-t-transparent border-x-transparent shadow-none"
            />
          </div>
          <div className="">
            <Button
              variant={"lightblueattendance"}
              className="rounded-sm border-r-lightblack border-r border-b-lightblack border-b"
            >
              <IoIosSearch />
              Statement
            </Button>
          </div>
        </div>
        <div className="flex lg:flex-row whitespace-nowrap xs:flex-wrap items-center md:justify-end justify-end xl:w-[50%] w-full">
          {AccountIcons.map((data) => (
            <div key={data.id} className="bg-gray-200 px-6 py-3">
              <data.Icon />
            </div>
          ))}
        </div>
      </div>
      {/*  */}
      <Table className="mt-8 overflow-x-auto">
        <TableHeader className="">
          <TableRow className="">
            {formheaderdata.map((data) => (
              <TableHead
                key={data.id}
                className={`text-nowrap border text-lightblack font-semibold `}
              >
                {data.heading}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody className=" bg-gray-200 hover:bg-gray-200">
          {AccountData.length > 0 &&
            AccountData?.map((data) => (
              <TableRow key={data.id} className="">
                <TableCell className="font-medium">{data.date}</TableCell>
                <TableCell className="font-semibold text-nowrap">
                  {data.description}
                </TableCell>
                <TableCell className="text-red-400 font-semibold text-nowrap">
                  {data.Debit}
                </TableCell>
                <TableCell className="text-lightblue font-semibold text-nowrap">
                  {data.Credit}
                </TableCell>
                <TableCell className="text-darkblue font-semibold text-nowrap">
                  {data.NetBalance}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
}
