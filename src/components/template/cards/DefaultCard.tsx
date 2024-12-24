import React from "react";
import IMAGES from "../../../../public/images";
import Image from "next/image";
import { FaGraduationCap } from "react-icons/fa";
import { MdArrowRightAlt } from "react-icons/md";

export default function DefaultCard() {
  const StudentIdCardData = [
    {
      id: 0,
      avatar: IMAGES.AVATAR,
      barcode: IMAGES.BARCODE,
      name: "SALMAN",
      insideData: [
        {
          id: 0,
          key: "ID",
          value: "asfsafsa",
        },
        {
          id: 1,
          key: "Class",
          value: "",
        },
        {
          id: 2,
          key: "DOA",
          value: "10 Dec 2024",
        },
      ],
    },
  ];
  return (
    <div>
      {StudentIdCardData.map((data) => (
        <div
          key={data.id}
          style={{
            backgroundImage:`url(${IMAGES.DEFAULT})`
          }}
          className="w-56 bg-white border border-gray-300 rounded-3xl"
        >
          <div className="flex flex-col items-center justify-center py-8 px-8 gap-4">
            <div className="w-24 h-24 rounded-full overflow-hidden">
              <Image
                src={data.avatar}
                width={100}
                height={100}
                alt="avatar"
                className="w-full h-full"
              />
            </div>
            <div className="">
              <Image
                src={data.barcode}
                width={100}
                height={100}
                alt="barcode"
                className="w-full"
              />
              <h2 className="text-black text-sm pt-2 text-center">SALMAN</h2>
            </div>
          </div>

          <div className="grid grid-cols-[60%_40%] pt-8 px-3 pb-3">
            <div className="flex flex-col items-start justify-between">
              <div className="flex items-center justify-start w-full">
                <FaGraduationCap className="text-xl" />
                <h2 className="underline text-xs font-semibold">STUDENT</h2>
              </div>
              {data.insideData.map((insidedata) => (
                <div
                  key={insidedata.id}
                  className="flex items-center pt-1.5 pl-1"
                >
                  <h2
                    className={`${
                      insidedata.id === 2 ? "text-[10px]" : "text-xs"
                    }  flex items-center`}
                  >
                    {insidedata.key} <MdArrowRightAlt />
                  </h2>
                  <h2
                    className={` ${
                      insidedata.id === 2 ? "text-[10px]" : "text-xs"
                    } font-semibold`}
                  >
                    {insidedata.value}
                  </h2>
                </div>
              ))}
            </div>
            <div className="flex items-end justify-end">
              <Image
                src={IMAGES.DBARCODE}
                width={100}
                height={100}
                alt="barcode"
                className="w-[50px] h-[50px]"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
