import Image from "next/image";
import React from "react";
import IMAGES from "../../../../../public/images";
import { FaCheck } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { GrDocumentPdf } from "react-icons/gr";

export default function LetterSection() {
  return (
    <div className="border-2 border-neutralgray h-auto w-[33%] bg-white max-w-full mx-auto rounded-2xl mt-6">
      <div>
        <div className="bg-neutralgray w-[90%] mx-auto rounded-b-xl text-center py-2">
          <h2 className="text-white font-semibold text-sm">
            ADMISSION CONFIRMATION
          </h2>
        </div>
        <div className="flex flex-col items-center justify-center w-full pt-2 pb-6 gap-y-2">
          <div className="w-24 h-24 rounded-full overflow-hidden">
            <Image
              src={IMAGES.AVATAR}
              width={100}
              height={100}
              className="w-full h-full"
              alt="person"
            />
          </div>
          <div>
            <h2 className="text-cardfirst font-semibold text-lg">
              Salman
            </h2>
          </div>
          {/*  */}
          <div className=" w-[80%] flex flex-col mx-auto space-y-0.5">
            {/*  */}
            <div className="bg-darkwhite flex items-center justify-between  py-0.5 px-3.5">
              <div className="w-[50%]">
                <h2 className="text-lightblack font-light text-xs">
                  Registration/ID
                </h2>
              </div>
              <div className="w-[50%]">
                <h2 className="text-black font-semibold text-xs">asfsafsa</h2>
              </div>
            </div>
            {/*  */}
            <div className="bg-transparent flex items-center justify-between  py-0.5 px-3.5">
              <div className="w-[50%]">
                <h2 className="text-lightblack font-light text-xs">Class</h2>
              </div>
              <div className="w-[50%]">
                <h2 className="text-black font-semibold text-xs">Class1</h2>
              </div>
            </div>
            {/*  */}
            <div className="bg-darkwhite flex items-center justify-between  py-0.5 px-3.5">
              <div className="w-[50%]">
                <h2 className="text-lightblack font-light text-xs">
                  Admission Date
                </h2>
              </div>
              <div className="w-[50%]">
                <h2 className="text-black font-semibold text-xs">
                  10 December, 2024
                </h2>
              </div>
            </div>
            {/*  */}
            <div className="bg-transparent flex items-center justify-between  py-0.5 px-3.5">
              <div className="w-[50%]">
                <h2 className="text-lightblack font-light text-xs">
                  Account Status
                </h2>
              </div>
              <div className="w-[50%]">
                <h2 className="text-green-500 font-semibold text-xs flex items-center">
                  Active
                  <FaCheck className="mt-0.4" />
                </h2>
              </div>
            </div>
            {/*  */}
            <div className="bg-darkwhite flex items-center justify-between  py-0.5 px-3.5">
              <div className="w-[50%]">
                <h2 className="text-lightblack font-light text-xs">Username</h2>
              </div>
              <div className="w-[50%]">
                <h2 className="text-black font-semibold text-xs">
                  98825PCjCasfsafsa
                </h2>
              </div>
            </div>
            {/*  */}
            <div className="bg-transparent flex items-center justify-between  py-0.5 px-3.5">
              <div className="w-[50%]">
                <h2 className="text-lightblack font-light text-xs">Password</h2>
              </div>
              <div className="w-[50%]">
                <h2 className="text-black font-semibold text-xs flex items-center">
                  98825PCjCasfsafsa
                </h2>
              </div>
            </div>
          </div>
          <div className="mt-2">
            <Button className="h-8 bg-pink rounded-full text-xs hover:bg-pink"><GrDocumentPdf /> Print Admission Letter</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
