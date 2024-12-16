import { Button } from "@/components/ui/button";
import React from "react";
import Image from "next/image";
import IMAGES from "../../../../public/images";
import { BsArrowReturnRight } from "react-icons/bs";
import { profileViewType } from "@/types/ProfileViewType";

interface ProfileViewCard {
  inputFields?: profileViewType[];
}

export default function ProfileViewCard({ inputFields }: ProfileViewCard) {
  return (
    <div className="w-full bg-white h-auto rounded-2xl px-4 py-4 border border-gray-300 lg:mt-0 mt-3">
      {inputFields?.map((data) => (
        <div key={data.id}>
          <div>
            <Button
              size={"sm"}
              className="bg-green-500 hover:bg-green-500 rounded-2xl"
            >
              Profile View
            </Button>
          </div>
          <div className="mt-1 border-b-gray pb-4 border-b">
            <div className="flex items-center justify-center ">
              <div className="w-[120px] h-[120px] overflow-hidden rounded-full ">
                <Image
                  src={data.logo || IMAGES.AVATAR}
                  alt="Logo"
                  width={100}
                  height={100}
                  className="w-auto h-auto"
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center mt-4">
              <h2 className="text-lightblack text-xl font-semibold">
                {data.name}
              </h2>
              <h2 className="text-lightblack text-sm -mt-1">{data.tagline}</h2>
            </div>
          </div>
          <div className="w-[70%] mx-auto py-4">
            {data.insideData?.map((insidedata) => (
              <div key={insidedata.id}>
                <h2 className="text-gray-400 flex items-center justify-start border-b w-16 border-slate text-[11px]">
                  <insidedata.Icon /> {insidedata.heading}
                </h2>
                <div className="flex -mt-[1.8px]">
                  <BsArrowReturnRight className="text-neutralgray text-lg" />
                  <h2 className="text-xs font-semibold pl-2 pt-0.5 text-darkblue">
                    {insidedata.subheading}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
