import Image from "next/image";
import React from "react";
import IMAGES from "../../../../public/images";
import { BsArrowReturnRight } from "react-icons/bs";
import { FaCheck } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { GrDocumentPdf } from "react-icons/gr";
import JobLetterPortalDetails from "@/lib/JobletterPortalDetails";
import JobLetterdetails from "@/lib/JobLetterDetails";

export default function LetterCard() {
  return (
    <div className="bg-white rounded-xl ">
      <div className="px-4 grid lg:grid-cols-4 grid-cols-1 gap-6 py-5 ">
        <div className="flex flex-col items-center justify-center  px-14 ">
          <div className="w-24 h-24 rounded-full overflow-hidden">
            <Image
              src={IMAGES.AVATAR}
              width={100}
              height={100}
              className="w-full h-full"
              alt="avatar"
            />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-center">salman</h2>
          </div>
        </div>
        {/*  */}
        <div>
          {JobLetterdetails.map((detail) => (
            <div key={detail.id}>
              <h2 className="text-gray-400 border-b border-slate text-[11px] w-fit">
                {detail.label}
              </h2>
              <div className="flex -mt-[1.8px]">
                <BsArrowReturnRight className="text-neutralgray text-lg" />
                {detail.isStatus ? (
                  <h2 className="text-xs font-semibold pl-2 pt-0.5 flex text-green-500">
                    <FaCheck className="mr-1" /> {detail.value}
                  </h2>
                ) : (
                  <h2 className="text-xs font-semibold pl-2 pt-0.5">
                    {detail.value}
                  </h2>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Portal Details Section */}
        <div>
          {JobLetterPortalDetails.map((detail) => (
            <div key={detail.id}>
              <h2 className="text-gray-400 border-b border-slate text-[11px] w-fit">
                {detail.label}
              </h2>
              <div className="flex -mt-[1.8px]">
                <BsArrowReturnRight className="text-neutralgray text-lg" />
                <h2 className="text-xs font-semibold pl-2 pt-0.5">
                  {detail.value}
                </h2>
              </div>
            </div>
          ))}
        </div>
        {/*  */}
        <div className="flex items-center lg:justify-end justify-center">
          <Button className="h-8 bg-gradient-to-l to-cardfourth from-lightpurplegradient rounded-full text-xs hover:bg-pink">
            <GrDocumentPdf /> Print Job Letter
          </Button>
        </div>
      </div>
    </div>
  );
}
