"use client";
import Image from "next/image";
import React, { useState } from "react";
import IMAGES from "../../../../public/images";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { BsWindowFullscreen } from "react-icons/bs";
import { TiMinus } from "react-icons/ti";
import { RiLoopRightLine } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { StaticCardTypes } from "@/types/StaticCardType";

export default function StatisticsCard({ heading, src }: StaticCardTypes) {
  const [option, setOption] = useState(false);
  return (
    <div className="w-full bg-white rounded-2xl hover:shadow-2xl shadow-md overflow-hidden">
      <div className="px-6 py-6">
        <div className="flex items-center justify-between">
          <h2 className="text-cardsecond text-base font-semibold">{heading}</h2>
          <div className="flex gap-x-6 transition-all duration-1000 ease-in-out">
            {option ? (
              <MdOutlineKeyboardArrowRight
                className="text-3xl text-gray-600"
                onClick={() => setOption(false)}
              />
            ) : (
              <MdOutlineKeyboardArrowLeft
                className="text-3xl text-gray-600"
                onClick={() => setOption(true)}
              />
            )}
            <div
              className={`items-center justify-center transition-all duration-1000 ease-in-out gap-x-4 text-gray-500 text-lg ${
                option === true ? "translate-x-0 flex" : "translate-x-40 hidden"
              }`}
            >
              <BsWindowFullscreen />
              <TiMinus />
              <RiLoopRightLine />
              <IoMdClose />
            </div>
          </div>
        </div>
        <div className="w-full">
          <Image
            src={src || IMAGES.GRAPH}
            alt="graph"
            width={5000}
            height={1000}
            className="w-full h-[280px]"
          />
        </div>
      </div>
    </div>
  );
}
