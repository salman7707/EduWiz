import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import PrintInfoButtons from "@/lib/PrintInfoButtons";
import StudentsAttendanceReport from "@/lib/StudentsAttendenceReport";
import StudentsAttendanceReportData from "@/lib/StudentsAttendanceData";
export default function StudentAttendanceSection() {
  return (
    <div className="w-full rounded-2xl py-4 md:px-4 px-1.5">
      <div className="flex lg:flex-row flex-col items-center justify-between pb-4 gap-4">
        <div className="flex flex-wrap lg:justify-start justify-center gap-2 w-full">
          {PrintInfoButtons.map((data) => (
            <Button key={data.id} variant={"light"} className="rounded-none">
              {data.text}
            </Button>
          ))}
        </div>
        <div className="flex items-center gap-x-2 lg:w-[40%]">
          Search: <Input className="rounded-none border border-gray-400" />
        </div>
      </div>
      <Table className="">
        <TableHeader className="">
          <TableRow className="bg-white hover:bg-white border-b-black">
            {StudentsAttendanceReport.map((data) => (
              <TableHead
                key={data.id}
                className={` text-lightblack font-semibold `}
              >
                {data.heading}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody className="border-b bg-gray-200 border-b-black">
          {StudentsAttendanceReportData.length > 0 &&
            StudentsAttendanceReportData?.map((data) => (
              <TableRow key={data.id} className="border-b border-b-gray-100">
                {data.insideData.map((insidedata) => (
                  <TableCell key={insidedata.id} className="font-medium">
                    {insidedata.data}
                  </TableCell>
                ))}
              </TableRow>
            ))}
        </TableBody>
      </Table>
      {StudentsAttendanceReportData.length === 0 && (
        <div className=" border-b text-center py-2.5 text-lightblack bg-gray-200 border-b-black">
          No data avaliable in table
        </div>
      )}

      <div className="w-full flex md:flex-row flex-col items-center justify-between gap-2 md:py-2 py-4 ">
        <div className="text-lightblack">Showing 0 to 0 of 0 entries</div>
        <div className="md:text-right text-center">
          <Button className="bg-white text-neutralgray hover:bg-white hover:text-neutralgray border border-gray-300 rounded-none">
            Previous
          </Button>
          <Button variant={"transparent"}></Button>
          <Button className="bg-white text-neutralgray hover:bg-white hover:text-neutralgray border border-gray-300 rounded-none">
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
