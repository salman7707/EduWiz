import Image from "next/image";
import React from "react";
import IMAGES from "../../../../../public/images";
import { FaCheck } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { GrDocumentPdf } from "react-icons/gr";

export default function LetterSection() {
  const admissionletterdata = [
    {
      id: 0,
      img: IMAGES.AVATAR,
      name: "salman",
      insidedata: [
        {
          id: 0,
          key: "Registration/ID",
          value: "asfsafsa",
          bg: "dark",
        },
        {
          id: 1,
          key: "Class",
          value: "",
          bg: "transparent",
        },
        {
          id: 2,
          key: "Admission Date",
          value: "10 December, 2024",
          bg: "dark",
        },
        {
          id: 3,
          key: "Account Status",
          value: "Active",
          color: "green",
          bg: "transparent",
        },
        {
          id: 4,
          key: "Username",
          value: "98825PCjCasfsafsa",
          bg: "dark",
        },
        {
          id: 5,
          key: "Password",
          value: "98825PCjCasfsafsa",
          bg: "transparent",
        },
      ],
    },
  ];
  return (
    <div className="border-2 border-neutralgray h-auto lg:w-[33%] w-full bg-white max-w-full mx-auto rounded-2xl mt-6">
      <div>
        <div className="bg-neutralgray w-[90%] mx-auto rounded-b-xl text-center py-2">
          <h2 className="text-white font-semibold text-sm">
            ADMISSION CONFIRMATION
          </h2>
        </div>
        <div className="flex flex-col items-center justify-center w-full pt-2 pb-6 gap-y-2">
          {admissionletterdata.map((data) => (
            <div
              key={data.id}
              className="flex flex-col items-center justify-center w-full pt-2 gap-y-2"
            >
              <div className="w-24 h-24 rounded-full overflow-hidden">
                <Image
                  src={data.img || IMAGES.AVATAR}
                  width={100}
                  height={100}
                  className="w-full h-full"
                  alt="person"
                />
              </div>
              <div>
                <h2 className="text-cardfirst font-semibold text-xl">
                  {data.name}
                </h2>
              </div>

              <div className=" w-[80%] flex flex-col mx-auto space-y-0.5">
                {data.insidedata?.map((data) => (
                  <div key={data.id} className="w-full">
                    <div
                      className={` ${
                        data.bg === "dark" ? "bg-darkwhite" : "bg-transparent"
                      }  flex items-center justify-between py-0.5 px-3.5`}
                    >
                      <div className="w-[50%]">
                        <h2 className="text-lightblack font-light text-xs">
                          {data.key}
                        </h2>
                      </div>
                      <div className="w-[50%]">
                        <h2
                          className={`${
                            data.color === "green"
                              ? "text-green-500 flex items-center"
                              : "text-black"
                          }  font-semibold text-xs`}
                        >
                          {data.value}
                          {data.color === "green" && (
                            <FaCheck className="mt-0.4" />
                          )}
                        </h2>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/*  */}

          <div className="mt-2">
            <Button className="h-8 bg-pink rounded-full text-xs hover:bg-pink">
              <GrDocumentPdf /> Print Admission Letter
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
