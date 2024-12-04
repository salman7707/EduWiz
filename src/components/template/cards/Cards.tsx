import Image from "next/image";
import React from "react";
import IMAGES from "../../../../public/images";
import { DashboardCardType } from "@/types/DashboardCardsType";

export default function Cards({
  subheading,
  heading,
  icon,
  number,
  color,
}: DashboardCardType) {
  const colorClasses =
    color === "cardfirst"
      ? "bg-cardfirst"
      : color === "cardsecond"
      ? "bg-cardsecond"
      : color === "pink"
      ? "bg-pink"
      : "bg-cardfourth";
  return (
    <div className={`w-full h-auto ${colorClasses} rounded-2xl hover:shadow-xl shadow-md`}>
      <div className="py-4 px-6 space-y-4">
        <h2 className="text-white text-lg font-semibold ">{heading}</h2>
        <div className="flex items-center justify-between">
          <Image
            src={icon || IMAGES.PERSON}
            alt="icon"
            width={100}
            height={100}
            className="w-[40px] h-[40px] py-1 px-1"
            style={{
              filter: "invert(1)",
            }}
          />
          <h2 className="text-white text-4xl font-semibold">{number}</h2>
        </div>
        <div className="flex items-center justify-between">
          <h2 className="text-white text-base font-medium ">{subheading}</h2>
          <h2 className="text-white text-lg font-semibold ">{number}</h2>
        </div>
      </div>
    </div>
  );
}
