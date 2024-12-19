import React from "react";
import IMAGES from "../../../../public/images";
import { MdDelete, MdLockOutline } from "react-icons/md";
import AccountInfo from "@/lib/AccountInfo";
import { Button } from "@/components/ui/button";
import { FaCheck } from "react-icons/fa6";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import Image from "next/image";

export default function AccountDetailCard() {
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
      <div className="flex flex-col items-start justify-center gap-1 w-[65%] mx-auto">
        {AccountInfo.map((data) => (
          <Table key={data.id}>
            <TableBody>
              <TableRow className="bg-transparent hover:bg-transparent py-0 text-xs w-full">
                <TableCell className="text-neutralgray font-semibold py-0 w-[42%] text-right">
                  {data.key}:
                </TableCell>
                <TableCell
                  className={`text-white text-left py-0 flex items-center justify-start w-full `}
                >
                  {data.value}
                  {data.btn && (
                    <Button
                      variant={"green"}
                      className="h-5 px-2 text-xs rounded-3xl"
                    >
                      <FaCheck />
                      Free
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          //   <div

          //     key={data.id}
          //     className="flex items-center justify-center text-xs gap-x-3.5 w-full"
          //   >
          //     <h2 className=" text-neutralgray font-semibold text-right w-14">
          //       {data.key}:
          //     </h2>
          //     <h2 className="text-white text-left w-10 bg-green-700">{data.value}</h2>
          //     {data.btn && (
          //       <div className="w-28 flex justify-start bg-green-900">
          //
          //       </div>
          //     )}
          //   </div>
        ))}
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
