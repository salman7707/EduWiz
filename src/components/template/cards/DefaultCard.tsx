import React from "react";
import IMAGES from "../../../../public/images";
import Image from "next/image";
import { FaGraduationCap } from "react-icons/fa";
import { MdArrowRightAlt } from "react-icons/md";

export default function DefaultCard() {
  return (
    <div className="w-56 bg-white border border-gray-300 rounded-3xl">
      <div className="flex flex-col items-center justify-center py-8 px-8 gap-4">
        <div className="w-24 h-24 rounded-full overflow-hidden">
          <Image
            src={IMAGES.AVATAR}
            width={100}
            height={100}
            alt="avatar"
            className="w-full h-full"
          />
        </div>
        <div className="">
          <Image
            src={IMAGES.BARCODE}
            width={100}
            height={100}
            alt="barcode"
            className="w-full"
          />
          <h2 className="text-black text-sm pt-2 text-center">SALMAN</h2>
        </div>
      </div>

      <div className="grid grid-cols-[60%_40%] pt-8 px-3 pb-3">
        <div className="flex flex-col items-start justify-between">
          <div className="flex items-center justify-start w-full">
            <FaGraduationCap className="text-xl" />
            <h2 className="underline text-xs font-semibold">STUDENT</h2>
          </div>
          <div className="flex items-center pt-1.5 pl-1">
            <h2 className="text-xs flex items-center">
              ID <MdArrowRightAlt />
            </h2>
            <h2 className="font-semibold text-xs">asfsafsa</h2>
          </div>
          <div className="flex items-center pl-1">
            <h2 className="text-xs flex items-center">
              Class <MdArrowRightAlt />
            </h2>
          </div>
          <div className="flex items-center pl-1">
            <h2 className="text-[10px] flex items-center">
              DOA <MdArrowRightAlt />
            </h2>
            <h2 className="font-semibold text-[10px]">10 Dec 2024</h2>
          </div>
        </div>
        <div className="flex items-end justify-end">
          <Image
            src={IMAGES.DBARCODE}
            width={100}
            height={100}
            alt="barcode"
            className="w-[50px] h-[50px]"
          />
        </div>
      </div>
    </div>
  );
}
