"use client";
import React from "react";
import IMAGES from "../../../../public/images";
import { MdDelete, MdLockOutline } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { FaCheck } from "react-icons/fa6";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store/store";

export default function AccountDetailCard() {
  const { user } = useSelector((state: RootState) => state.auth);
  return (
    <div
      style={{
        backgroundImage: `url(${IMAGES.ACCBTNBG})`,
      }}
      className="bg-cover bg-left bg-no-repeat rounded-xl py-7 px-6 h-auto relative"
    >
      <div>
        <Image
          src={IMAGES.ACCCTR}
          width={100}
          height={100}
          alt={"tr"}
          className="w-[65px] h-[65px] absolute right-0 top-0 rounded-r-lg"
        />
      </div>
      <div>
        <Image
          src={IMAGES.ACCCBL}
          width={100}
          height={100}
          alt={"tr"}
          className="w-[60px] h-[175px] absolute left-0 bottom-0 rounded-l-lg"
        />
      </div>
      <div className="text-white font-semibold text-xl flex items-center gap-x-1.5 justify-center">
        <MdLockOutline className="text-2xl font-medium" />
        Account details
      </div>
      <div className="my-4 border-b-[0.1px] border-b-gradientdarkblue opacity-25"></div>
      <div className="flex flex-col items-start justify-center gap-1 w-full mx-auto">
        {/* {AccountInfo.map((data) => ( */}
        <Table>
          <TableBody>
            <TableRow className="border-b-transparent bg-transparent hover:bg-transparent py-0 text-xs w-full">
              <TableCell className="text-neutralgray font-semibold py-0 w-[42%] text-right">
                Username:
              </TableCell>
              <TableCell
                className={`text-white text-left py-0 flex items-center justify-start w-full `}
              >
                {user?.email}
              </TableCell>
            </TableRow>
            <TableRow className="border-b-transparent bg-transparent hover:bg-transparent py-0 text-xs w-full">
              <TableCell className="text-neutralgray font-semibold py-0 w-[42%] text-right">
                Password:
              </TableCell>
              <TableCell
                className={`text-white text-left py-0 flex items-center justify-start w-full `}
              >
                *****
              </TableCell>
            </TableRow>
            <TableRow className="border-b-transparent bg-transparent hover:bg-transparent py-0 text-xs w-full">
              <TableCell className="text-neutralgray font-semibold py-0 w-[42%] text-right">
                Subscription:
              </TableCell>
              <TableCell
                className={`text-white text-left py-0 flex items-center justify-start w-full `}
              >
                <Button
                  variant={"green"}
                  className="h-5 px-2 text-xs rounded-3xl"
                >
                  <FaCheck />
                  Free
                </Button>
              </TableCell>
            </TableRow>
            <TableRow className="border-b-transparent bg-transparent hover:bg-transparent py-0 text-xs w-full">
              <TableCell className="text-neutralgray font-semibold py-0 w-[42%] text-right">
                Expiry:
              </TableCell>
              <TableCell
                className={`text-white text-left py-0 flex items-center justify-start w-full `}
              >
                Never
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        {/* ))} */}
      </div>
      <div className="my-4 border-b-[0.1px] border-b-gradientdarkblue opacity-25"></div>
      <div className="flex items-center justify-center">
        <Button className="rounded-full bg-gradient-to-l to-[#F5395A] from-[#F55E38]">
          <MdDelete /> Delete Account
        </Button>
      </div>
    </div>
  );
}
