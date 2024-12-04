import React from "react";
import { AiOutlineAim } from "react-icons/ai";
import { TbHandFinger } from "react-icons/tb";

import { TfiWallet } from "react-icons/tfi";
export default function EsstimateFeeCard() {
  return (
    <div className="w-full bg-white rounded-2xl hover:shadow-2xl shadow-md">
      <div className="px-6 py-6 space-y-7">
        <div>
          <h2 className="text-gray-900 text-base font-semibold">
            Estimated Fee This Month
          </h2>
        </div>
        <div className="space-y-1">
          <div className="flex items-center justify-center text-pink">
            <AiOutlineAim />
            <h2 className="text-pink text-base font-medium">Estimation</h2>
          </div>
          <div className="flex items-center justify-center text-pink">
            <h2 className="text-pink text-3xl font-bold">$ 0</h2>
          </div>
        </div>
        <div className="w-[50%] mx-auto pt-20 space-y-2">
          <div>
            <div className="flex items-center justify-start text-pink">
              <h2 className="text-black text-2xl font-bold">$ 0</h2>
            </div>
            <div className="flex items-center justify-start text-green-500 gap-x-1">
              <TfiWallet className="" />
              <h2 className="text-base font-normal pt-[2px]">Collections</h2>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-start text-pink">
              <h2 className="text-black text-2xl font-bold">$ 0</h2>
            </div>
            <div className="flex items-center justify-start text-pink gap-x-1">
            <TbHandFinger className="rotate-180" />
              <h2 className="text-base font-normal pt-[2px]">Remainings</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
