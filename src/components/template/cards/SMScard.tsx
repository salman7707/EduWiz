import React from "react";
import IMAGES from "../../../../public/images";
import Image from "next/image";

export default function SMScard() {
  return (
    <div className="w-full bg-cardfirst rounded-2xl hover:shadow-even ">
      <div className="px-3  text-white flex items-center justify-between relative">
        <div className=" space-y-1 py-4 px-2">
          <h2 className="text-white xl:text-base text-sm font-semibold">Free SMS Gateway</h2>
          <h2 className="xl:text-sm text-xs font-normal text-neutralgray">
            Send Unlimited Free SMS <br/> on Mobile Numbers.
          </h2>
        </div>
        <div className="">
          <Image
            src={IMAGES.MASSAGE}
            alt="massage"
            width="100"
            height="100"
            className="absolute xl:w-[70px] xl:h-[100px] w-[50px] h-[80px] xl:-top-3 -top-4 right-0 "
          />
        </div>
      </div>
    </div>
  );
}
