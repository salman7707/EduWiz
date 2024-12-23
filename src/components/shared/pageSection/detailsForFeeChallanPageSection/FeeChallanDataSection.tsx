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
import IMAGES from "../../../../../public/images";
import Image from "next/image";
import { BiSolidPencil } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";
export default function FeeChallanDataSection() {
  const studentsdata = [
    {
      id: 0,
      bankname: "Meezan",
      Logo: IMAGES.COURT,
      accountno: "03000307395",
    },
  ];
  const formheaderdata = [
    {
      id: 0,
      heading: "Bank Name",
    },
    {
      id: 1,
      heading: "Logo",
    },
    {
      id: 2,
      heading: "Account No.",
    },
    {
      id: 3,
      heading: "Actions",
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
          <TableRow className="bg-gradient-to-l to-cardfourth from-lightpurplegradient border-transparent text-white ">
            {formheaderdata.map((data) => (
              <TableHead
                key={data.id}
                className={`${data.id == 0 && "rounded-l-3xl"}
                ${data.id == 3 && "rounded-r-3xl"}
                 text-lightblack font-semibold text-white border-transparent`}
              >
                {data.heading}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody className="border-b">
          {studentsdata.length > 0 &&
            studentsdata?.map((data) => (
              <TableRow key={data.id} className="border-b border-b-gray-100">
                <TableCell className="">
                  <h2 className="font-medium text-nowrap flex">
                    {data.bankname}
                  </h2>
                </TableCell>
                <TableCell className="">
                  <Image src={data.Logo} width={30} height={30} alt="Logo" />
                </TableCell>
                <TableCell className="">{data.accountno}</TableCell>
                <TableCell className="space-x-1 flex ">
                  <Button
                    variant={"blue"}
                    className="rounded-full h-8 px-2 bg-cardfourth"
                  >
                    <BiSolidPencil />
                  </Button>
                  <Button className="rounded-full h-8 px-2 bg-pink">
                    <RiDeleteBinLine />
                  </Button>
                </TableCell>
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
        <div className="text-lightblack">Showing 1 to 1 of 1 entries</div>
        <div className="md:text-right text-center">
          <Button className="bg-white text-neutralgray hover:bg-white hover:text-neutralgray  rounded-none shadow-none">
            Previous
          </Button>
          <Button className="bg-gradient-to-l to-lightpurplegradient from-[#C137DB] h-8 px-3">
            1
          </Button>
          <Button className="bg-white text-neutralgray hover:bg-white hover:text-neutralgray shadow-none rounded-none">
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
