import { FeaturedCardType } from "@/types/FeaturedCardTypes";
import React from "react";
import IMAGES from "../../../../public/images";
import Image from "next/image";
const FeatureCard = ({ title, description, position }: FeaturedCardType) => {
  return (
    <div className={`relative mt-10 md:mt-16 text-center`}>
      <div
        className={`${
          position === "left"
            ? "bg-lightblue left-[110%]"
            : "bg-blue-600 right-[110%]"
        } w-20 h-20 rounded-full absolute  z-[1] bg-gradient-to-br from-[#FF808B] to-[#F79099] flex items-center justify-center`}
      >
        <Image src={IMAGES.THUMBUP} width={60} height={60} alt="icons" />
      </div>
      <div className="mt-4 px-4">
        <h5 className="text-2xl items-center font-semibold text-white">
          {title}
        </h5>
        <p className="text-base text-white mt-2">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
