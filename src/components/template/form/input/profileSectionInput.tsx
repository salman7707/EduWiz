import { Label } from "@/components/ui/label";
import React from "react";
import { Input } from "../../../ui/input";
import { inputFieldTypes } from "@/types/InputFieldTypes";
import { AiTwotonePicture } from "react-icons/ai";
import IMAGES from "../../../../../public/images";
import Image from "next/image";

export default function ProfileSectionInput({
  label,
  type,
  theme = "blues",
  name = "logo",
  handlechange,
  maxSizeCard = false,
  size,
  setFieldValue,
}: inputFieldTypes) {
  const sizeClasses = size === "small" ? "text-xs" : "md:text-base text-xs";
  return (
    <div className={`flex flex-col items-start w-full gap-y-1`}>
      <div className="border-cardfourth relative border w-full h-auto rounded-3xl py-1 px-1">
        <Label
          className={`absolute -top-2.5 left-4 ${
            theme === "blues"
              ? "bg-gradient-to-l to-cardfourth from-lightpurplegradient"
              : theme === "dark"
              ? "bg-slate "
              : "bg-transparent"
          }  text-xs text-white px-1.5 py-0.5 rounded-xl`}
        >
          {label}
        </Label>
        {/* File Input */}

        <div className="">
          <Label className="flex xl:flex-row lg:flex-col flex-row xl:items-center lg:items-start items-center justify-start gap-3 bg-white mx-auto rounded-3xl h-auto py-2.5 md:px-2.5 px-1">
            <Input
              name={name}
              type={type}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                handlechange?.(e);
                if (e.target.files && e.target.files.length > 0) {
                  setFieldValue?.(name, e.target.files[0]);
                }
              }}
              className={`hidden`}
            />
            <div className="md:w-[120px] md:h-[120px] overflow-hidden rounded-full">
              <Image
                src={IMAGES.AVATAR}
                alt="Logo"
                width={100}
                height={100}
                className="w-auto h-auto"
              />
            </div>
            <div className="bg-gradient-to-l cursor-pointer to-cardfourth from-lightpurplegradient text-white md:px-3 px-2 py-3 rounded-3xl">
              <div
                className={`flex items-center justify-center md:gap-x-2 gap-x-1 ${sizeClasses} `}
              >
                <AiTwotonePicture />
                Change Logo
              </div>
            </div>
          </Label>
        </div>
      </div>
      {maxSizeCard && (
        <div className="bg-YellowBtn rounded-2xl px-1 text-[10px] text-lightblack">
          Max size 500KB
        </div>
      )}
    </div>
  );
}
