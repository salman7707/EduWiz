import Image from "next/image";
import React from "react";
import IMAGES from "../../../../../public/images";
import { Button } from "@/components/ui/button";

interface markbheadandbtntypes {
  heading?: string;
  studentbtn?: boolean;
  employeebtn?: boolean;
}

export default function MarkBottomHeadingandButton({
  heading,
  studentbtn,
  employeebtn,
}: markbheadandbtntypes) {
  return (
    <div className={`${studentbtn ? "pt-9" : "pt-1"} space-y-5`}>
      <h2 className="text-cardsecond font-semibold text-base text-center">
        {heading}
      </h2>

      <div
        className={`flex ${
          studentbtn ? "w-[65%]" : "w-[45%]"
        }  gap-x-1.5 justify-center items-center mx-auto `}
      >
        {studentbtn && (
          <div className="flex xl:flex-row flex-col gap-1.5 items-center xl:justify-start justify-center ">
            <Button className=" opacity-50 w-auto rounded-2xl bg-green-400 hover:bg-green-400 px-6 h-20 flex items-center justify-between">
              <div className="w-[40px] h-[55px] rounded-md overflow-hidden">
                <Image
                  src={IMAGES.SCANCARD}
                  width={100}
                  height={100}
                  className="w-full h-full"
                  alt="ScanCard"
                />
              </div>
              <div>
                <h2 className="text-white font-semibold text-sm text-center">
                  In Attendance
                </h2>
              </div>
            </Button>
            <Button className="opacity-65 w-auto rounded-2xl bg-cardsecond hover:bg-cardsecond px-6 h-20 flex items-center justify-between">
              <div className="w-[40px] h-[55px] rounded-md overflow-hidden">
                <Image
                  src={IMAGES.SCANCARD}
                  width={100}
                  height={100}
                  className="w-full h-full"
                  alt="ScanCard"
                />
              </div>
              <div>
                <h2 className="text-white font-semibold text-sm text-center">
                  Out Attendance
                </h2>
              </div>
            </Button>
          </div>
        )}
        {employeebtn && (
          <Button className="opacity-65 w-auto rounded-2xl bg-cardsecond hover:bg-cardsecond px-6 h-20 flex items-center justify-between">
            <div className="w-[40px] h-[55px] rounded-md overflow-hidden">
              <Image
                src={IMAGES.SCANCARD}
                width={100}
                height={100}
                className="w-full h-full"
                alt="ScanCard"
              />
            </div>
            <div>
              <h2 className="text-white font-semibold text-base text-center">
                Using Card Scanner
              </h2>
            </div>
          </Button>
        )}
      </div>
    </div>
  );
}
