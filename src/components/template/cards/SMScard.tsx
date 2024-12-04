import React from "react";
import IMAGES from "../../../../public/images";
import Image from "next/image";

export default function SMScard() {
  return (
    <div className="w-full bg-cardfirst rounded-2xl hover:shadow-even ">
      <div className="px-3  text-white flex items-center justify-between relative">
        <div className=" space-y-1 py-2 px-2">
          <h2 className="text-white text-base font-semibold">Free SMS Gateway</h2>
          <h2 className="text-sm font-normal text-neutralgray">
            Send Unlimited Free SMS <br /> on Mobile Numbers.
          </h2>
        </div>
        <div className="">
          <Image
            src={IMAGES.MASSAGE}
            alt="massage"
            width="100"
            height="100"
            className="-translate-y-4 w-[70px] h-[100px]"
          />
        </div>
      </div>
    </div>
  );
}
