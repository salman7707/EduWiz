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
export default function StudentAttendanceSection() {
  const studentsdata = [
    {
      id: 0,
      srno: 1,
      studentid: "asfasfa",
      studentname: "salman",
      father: "",
      class: "",
      status: "",
    },
    {
      id: 1,
      srno: 2,
      studentid: "asfasfa",
      studentname: "salman",
      father: "",
      class: "",
      status: "",
    },
  ];
  const formheaderdata = [
    {
      id: 0,
      heading: "DATE",
    },
    {
      id: 1,
      heading: "DAY",
    },
    {
      id: 2,
      heading: "ID",
    },
    {
      id: 3,
      heading: "NAME",
    },
    {
      id: 4,
      heading: "CLASS",
    },
    {
      id: 5,
      heading: "STATUS",
    },
  ];

  return (
    <div className="w-full rounded-2xl py-4 md:px-4 px-1.5">
      <div className="flex lg:flex-row flex-col items-center justify-between pb-4 gap-4">
        <div className="flex flex-wrap lg:justify-start justify-center gap-2 w-full">
          <Button variant={"light"} className="rounded-none">
            Copy
          </Button>
          <Button variant={"light"} className="rounded-none">
            CSV
          </Button>
          <Button variant={"light"} className="rounded-none">
            Excel
          </Button>
          <Button variant={"light"} className="rounded-none">
            PDF
          </Button>
          <Button variant={"light"} className="rounded-none">
            Print
          </Button>
          <Button variant={"light"} className="rounded-none">
            Column Visibility
          </Button>
        </div>
        <div className="flex items-center gap-x-2 lg:w-[40%]">
          Search: <Input className="rounded-none border border-gray-400" />
        </div>
      </div>
      <Table className="">
        <TableHeader className="">
          <TableRow className="bg-white hover:bg-white border-b-black">
            {formheaderdata.map((data) => (
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
          {studentsdata.length > 0 &&
            studentsdata?.map((data) => (
              <TableRow key={data.id} className="border-b border-b-gray-100">
                <TableCell className="font-medium">{data.srno}</TableCell>
                <TableCell className="">{data.studentid}</TableCell>
                <TableCell className="">{data.studentname}</TableCell>
                <TableCell className="">{data.father}</TableCell>
                <TableCell className="">{data.class}</TableCell>
                <TableCell className="">{data.status}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      {studentsdata.length === 0 && (
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
