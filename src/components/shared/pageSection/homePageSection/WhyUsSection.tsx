import React from "react";
import Image from "next/image";
import Link from "next/link";
import IMAGES from "../../../../../public/images";
import { FeatureProps } from "@/types/WhyChooseTypes";

const WhyUsSection: React.FC<FeatureProps> = ({
  tag,
  title,
  description,
  buttonText,
  buttonHref,
  imageSrc,
  reverse = false,
  vertical = false,
}) => {
  return (
    <div
      className={`bg-gradient-to-l from-gradientlightblue to-gradientdarkblue gap-8 py-16 `}
    >
      <div
        className={` flex ${
          vertical === true ? "flex-col w-full" :  "lg:flex-row flex-col lg:w-[70%] md:w-full"
        } items-center flex-col  max-w-[1173px] mx-auto ${
          reverse ? "lg:flex-row-reverse" : ""
        } `}
      >
        {/* Content */}
        <div className="lg:w-1/2  text-white ">
          <div
            className={` w-full px-10 flex flex-col ${
              vertical === true ? "items-center" : "items-start"
            } `}
          >
            <span className="text-lg px-4 py-2 inline-block mb-4 bg-lightblue  ">
              {tag}
            </span>
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <p
              className={`text-base mb-6  ${
                vertical === true ? "text-center" : "text-left"
              } `}
            >
              {description}
            </p>
            {buttonText && buttonHref && (
              <Link
                href={buttonHref}
                className="bg-orange-500 text-white px-6 py-2 rounded-md inline-flex items-center"
              >
                {buttonText}
              </Link>
            )}
          </div>
        </div>

        {/* Image */}
        {imageSrc && (
          <div className="lg:w-1/2 w-[90%] flex justify-center">
            <Image
              src={imageSrc}
              alt={title}
              width={
                imageSrc === IMAGES.ALLTEAM
                  ? 1100
                  : imageSrc === IMAGES.SUPPORTTEAM
                  ? 1200
                  : 800
              }
              height={imageSrc === IMAGES.ALLTEAM ? 900 : 400}
              className="rounded-md "
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default WhyUsSection;
