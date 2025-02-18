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
import { PiGasCanFill } from "react-icons/pi";
import { FaEnvelope } from "react-icons/fa";
import { useSelector } from "react-redux";
import { navInitialStateTypes } from "@/lib/store/navSlice";
import PrintInfoButtons from "@/lib/PrintInfoButtons";
import EmployeesLoginData from "@/lib/EmployeesData";
import EmployeesLoginHead from "@/lib/EmployeesLoginHead";

export default function ManageLoginDataSection() {
  const [username, setUsername] = useState("98825CTOgF1");
  const { navbarOpen } = useSelector(
    (state: { nav: navInitialStateTypes }) => state.nav
  );

  const [colSpan, setColSpan] = useState(6);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setColSpan(3);
      } else if (navbarOpen === true) {
        setColSpan(5);
      } else {
        setColSpan(4);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [navbarOpen]);

  return (
    <div className="w-full bg-white rounded-2xl py-4 md:px-4 px-1.5 border border-gray-200">
      <div
        className={`flex ${
          navbarOpen ? "lg:flex-wrap" : "lg:flex-row"
        }  flex-col items-end justify-between pb-4 gap-4`}
      >
        <div className="flex flex-wrap lg:justify-start justify-center gap-2 w-full">
          {PrintInfoButtons.map((data) => (
            <Button key={data.id} variant={"light"} className="rounded-3xl">
              {data.text}
            </Button>
          ))}
        </div>
        <div className="flex items-center justify-end gap-x-2 lg:w-[40%]">
          Search: <Input className="rounded-full" />
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-200 hover:bg-gray-200 border-b-transparent rounded-md">
            {EmployeesLoginHead.map((data) => (
              <TableHead
                key={data.id}
                className={` text-lightblack font-semibold ${
                  data.id === 0 && "rounded-l-md"
                } ${data.id === 5 && "rounded-r-md"} `}
              >
                <div className="flex items-center justify-center gap-x-6 w-full">
                  {data.heading}
                  <div className="flex text-sm text-gray-400 ">
                    <LuArrowUpDown />
                  </div>
                </div>
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {EmployeesLoginData.map((data) => (
            <TableRow key={data.id} className="w-full hover:bg-white">
              {data.inisdeData?.map((insidedata) => (
                <TableCell
                  key={insidedata.id}
                  className="font-medium text-center"
                >
                  {insidedata.data}
                  {insidedata.input && (
                    <Input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="rounded-full"
                    />
                  )}
                  {insidedata.icons && (
                    <div className="text-3xl flex items-center justify-center gap-x-2 text-gray-300">
                      <PiGasCanFill /> <FaEnvelope />
                    </div>
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
        <TableFooter className="bg-transparent hover:bg-transparent w-full">
          <TableRow>
            <TableCell colSpan={colSpan} className="text-lightblack">
              Showing 1 to 1 of 1 entries
            </TableCell>
            <TableCell className="md:text-right flex text-center">
              <Button variant={"transparent"}>Previous</Button>
              <Button className="bg-gradient-to-r to-[#BE37DD] from-[#8733F9] h-8 w-4">
                1
              </Button>
              <Button variant={"transparent"}>Next</Button>
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
