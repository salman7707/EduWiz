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
export default function ChartDataSection() {
  const studentsdata = [
    {
      id: 0,
      srno: 1,
      studentid: "asfasfa",
      studentname: "salman",
    },
    {
      id: 1,
      srno: 2,
      studentid: "asfasfa",
      studentname: "salman",
    },
  ];
  const formheaderdata = [
    {
      id: 0,
      heading: "NAME OF HEAD",
    },
    {
      id: 1,
      heading: "TYPE",
    },
    {
      id: 2,
      heading: "ACTION",
    },
  ];

  return (
    <div className="w-full border rounded-2xl py-4 md:px-4 px-1.5 bg-white">
      <div className="flex lg:flex-row flex-col items-center justify-between pb-4 gap-4">
        <div className="flex flex-wrap lg:justify-start items-center justify-center gap-2 w-full">
          <div className="rounded-none">show</div>
          <div className="rounded-none">
            <select
              value={10}
              className="border-neutralgray border py-1 rounded-sm"
            >
              <option>10</option>
              <option>25</option>
              <option>50</option>
              <option>100</option>
            </select>
          </div>
          <div className="rounded-none">entries</div>
        </div>
        <div className="flex items-center gap-x-2 lg:w-full">
          Search: <Input className="rounded-3xl border border-gray-400" />
        </div>
      </div>
      <Table className="">
        <TableHeader className="">
          <TableRow className="border-b bg-gray-200 hover:bg-gray-200 border-b-black">
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
        <TableBody className=" border-b-black">
          {studentsdata.length > 0 &&
            studentsdata?.map((data) => (
              <TableRow key={data.id} className="border-b border-b-gray-100">
                <TableCell className="font-medium">{data.srno}</TableCell>
                <TableCell className="">{data.studentid}</TableCell>
                <TableCell className="">{data.studentname}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      {studentsdata.length === 0 && (
        <div className=" border-b text-center py-2.5 text-neutralgray bg-white border-b-black">
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
