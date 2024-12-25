"use client";
import React, { useState } from "react";
import IMAGES from "../../../../public/images";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Exsistedcardtype } from "@/types/ExsistedCardTypes";
import { ExsistedButtonData } from "@/lib/ExsistedButtonsData";
import ExsistedFeeButtonData from "@/lib/ExsistedFeePageIconsData";

export default function ExsistedCard({
  src,
  name,
  regno,
  role,
  subject,
  feePage,
}: Exsistedcardtype) {
  const [state, setState] = useState<{ id: null | number; open: boolean }>({
    id: null,
    open: true,
  });

  return (
    <div className="px-3 flex flex-col items-center justify-center w-[150px] h-auto bg-white rounded-2xl border border-gray-200 py-4">
      {/* Image Section */}
      <div className="w-20 h-20 rounded-full overflow-hidden ">
        <Image
          src={src || IMAGES.AVATAR}
          width={100}
          height={100}
          className="w-full h-full"
          alt="person"
        />
      </div>
      {/* Registration Number And Names roles and Subjects */}
      <div className="mt-2">
        {!role && (
          <h2 className="text-xs text-lightblack text-center text-gray-500 font-extralight">
            {regno}
          </h2>
        )}
        <h2
          className={`text-xs text-lightblack text-center font-medium ${
            feePage && "font-semibold"
          } `}
        >
          {name}
        </h2>
        {role && (
          <h2 className="text-xs text-lightblack text-center font-semibold">
            {role}
          </h2>
        )}
        <h2 className="text-xs text-lightblack text-center font-medium">
          {subject}
        </h2>
      </div>
      {/* Buttons */}
      {!feePage ? (
        <div className="space-x-1 mt-4">
          {ExsistedButtonData.map((data) => (
            <Button
              key={data.id}
              onMouseEnter={() => setState({ id: data.id, open: true })}
              onMouseLeave={() => setState({ id: data.id, open: false })}
              size={"icon"}
              className={`${
                data.bgColor === "java"
                  ? "bg-cardsecond hover:bg-cardsecond"
                  : data.bgColor === "blue"
                  ? "bg-cardfourth hover:bg-cardfourth"
                  : "bg-pink hover:bg-pink"
              }  rounded-full relative text-white py-2 px-2 text-xs`}
            >
              <data.Icon />
              {state.open && state.id === data.id && (
                <div
                  className={`bg-black absolute -top-8 rounded-sm ${
                    data.id === 2 ? "w-10" : "w-8"
                  } h-auto text-white text-xs text-center py-[5.5px]`}
                >
                  <div className="z-10">{data.heading}</div>
                  <div className=" bg-black w-2.5 h-2.5 rotate-45 absolute -bottom-0.5 left-3 z-0"></div>
                </div>
              )}
            </Button>
          ))}
        </div>
      ) : (
        // Buttons For fee Page
        <div className="space-x-1 mt-3">
          {ExsistedFeeButtonData.map((data) => (
            <Button
              key={data.id}
              onMouseEnter={() => setState({ id: data.id, open: true })}
              onMouseLeave={() => setState({ id: data.id, open: false })}
              size={"icon"}
              className={` ${
                data.bgColor === "pink"
                  ? "bg-pink hover:bg-pink"
                  : "bg-cardfourth hover:bg-cardfourth"
              }  rounded-3xl relative text-white h-7 ${
                data.id === 0 ? "px-10" : "px-3"
              } text-xs`}
            >
              <data.Icon />
              {data.value}
              {state.open && data.id === state.id && (
                <div
                  className={`bg-lightblack absolute -top-8 rounded-sm ${
                    data.id === 0 ? "w-20" : "w-8"
                  } h-auto text-white text-xs text-center py-[5.5px]`}
                >
                  <div className="z-10 text-[10px]">{data.heading}</div>
                  <div className=" bg-lightblack w-2.5 h-2.5 rotate-45 absolute -bottom-0.5 left-3 z-0"></div>
                </div>
              )}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
}
