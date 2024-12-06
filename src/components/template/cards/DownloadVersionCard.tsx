import React from "react";
import { GrWindows } from "react-icons/gr";
import { FaApple } from "react-icons/fa";
import Image from "next/image";
import IMAGES from "../../../../public/images";

export default function DownloadVersion() {
  return (
    <div className="w-full bg-pink rounded-2xl relative">
      <div className="px-4 py-3">
        <div className="space-y-1.5">
          <div className="">
            <h2 className="text-gray-900 xl:text-base text-sm font-semibold">
              Desktop Version
            </h2>
            <h2 className="text-gray-500 text-[11px] font-semibold w-[60%] leading-none">
              *Download & install eSkooly  on your PC.
            </h2>
          </div>
          {/* buttons */}
          <div className="flex items-center gap-x-2">
            <div className="flex items-center gap-2 bg-cardfirst py-1.5 px-1.5 rounded-sm">
              <div>
                <GrWindows className="text-white" />
              </div>
              <div>
                <h2 className="text-white text-[10px] font-semibold">
                  Download
                </h2>
                <h2 className="text-white text-[7px] font-normal ">
                  For Windows
                </h2>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-lightblack py-1.5 px-1.5 rounded">
              <div>
                <FaApple className="text-white" />
              </div>
              <div>
                <h2 className="text-white text-[10px] font-semibold">
                  Download
                </h2>
                <h2 className="text-white text-[7px] font-normal ">
                  For MacOs
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Image src={IMAGES.DESKTOPi} alt="desktop" width={100} height={100} className="absolute right-0 -top-4 w-[100px] h-[100px]" />
        </div>
      </div>
    </div>
  );
}
