"use client";
import React, { useState } from "react";
import IMAGES from "../../../../public/images";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { IoMdSearch } from "react-icons/io";
import { RiPencilFill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { TfiDownload } from "react-icons/tfi";
import { IoCall } from "react-icons/io5";

interface Exsistedcardtype {
  src?: string;
  name?: string;
  regno?: string | number;
  role?: string;
  subject?: string;
  feePage?: boolean;
}

export default function ExsistedCard({
  src,
  name,
  regno,
  role,
  subject,
  feePage,
}: Exsistedcardtype) {
  const [view, setView] = useState(false);
  const [edit, setEdit] = useState(false);
  const [deleteb, setDelete] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [call, setCall] = useState(false);
  return (
    <div className="px-3 flex flex-col items-center justify-center w-[150px] h-auto bg-white rounded-2xl border border-gray-200 py-4">
      <div className="w-20 h-20 rounded-full overflow-hidden ">
        <Image
          src={src || IMAGES.AVATAR}
          width={100}
          height={100}
          className="w-full h-full"
          alt="person"
        />
      </div>

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

      {!feePage && (
        <div className="space-x-1 mt-4">
          <Button
            onMouseEnter={() => setView(true)}
            onMouseLeave={() => setView(false)}
            size={"icon"}
            className=" relative bg-cardsecond rounded-full text-white py-1 px-1 hover:bg-cardsecond"
          >
            <IoMdSearch />
            {view && (
              <div className="bg-black absolute -top-8 rounded-sm w-8 h-auto text-white text-xs text-center py-[5.5px]">
                <div className="z-10">view</div>
                <div className=" bg-black w-2.5 h-2.5 rotate-45 absolute -bottom-0.5 left-3 z-0"></div>
              </div>
            )}
          </Button>
          <Button
            onMouseEnter={() => setEdit(true)}
            onMouseLeave={() => setEdit(false)}
            size={"icon"}
            className="bg-cardfourth hover:bg-cardfourth rounded-full relative text-white py-2 px-2 text-xs "
          >
            <RiPencilFill />
            {edit && (
              <div className="bg-black absolute -top-8 rounded-sm w-8 h-auto text-white text-xs text-center py-[5.5px]">
                <div className="z-10">edit</div>
                <div className=" bg-black w-2.5 h-2.5 rotate-45 absolute -bottom-0.5 left-3 z-0"></div>
              </div>
            )}
          </Button>
          <Button
            onMouseEnter={() => setDelete(true)}
            onMouseLeave={() => setDelete(false)}
            size={"icon"}
            className="bg-pink hover:bg-pink rounded-full relative text-white py-1 px-1"
          >
            <MdDelete />
            {deleteb && (
              <div className="bg-black absolute -top-8 rounded-sm w-9 h-auto text-white text-xs text-center py-[5.5px]">
                <div className="z-10">delete</div>
                <div className=" bg-black w-2.5 h-2.5 rotate-45 absolute -bottom-0.5 left-3 z-0"></div>
              </div>
            )}
          </Button>
        </div>
      )}
      {feePage && (
        <div className="space-x-1 mt-3">
          <Button
            onMouseEnter={() => setSubmit(true)}
            onMouseLeave={() => setSubmit(false)}
            size={"icon"}
            className="bg-pink hover:bg-pink rounded-3xl relative text-white h-7 px-10 text-xs"
          >
            <TfiDownload />
            Submit
            {submit && (
              <div className="bg-lightblack absolute -top-8 rounded-sm w-20 h-auto text-white text-xs text-center py-[5.5px]">
                <div className="z-10 text-[10px]">Submit Fee Now</div>
                <div className=" bg-lightblack w-2.5 h-2.5 rotate-45 absolute -bottom-0.5 left-3 z-0"></div>
              </div>
            )}
          </Button>
          <Button
            onMouseEnter={() => setCall(true)}
            onMouseLeave={() => setCall(false)}
            size={"icon"}
            className="bg-cardfourth hover:bg-cardfourth rounded-full relative text-white py-2 px-2 text-xs "
          >
            <IoCall />
            {call && (
              <div className="bg-lightblack absolute -top-8 rounded-sm w-8 h-auto text-white text-xs text-center py-[5.5px]">
                <div className="z-10">Call</div>
                <div className=" bg-lightblack w-2.5 h-2.5 rotate-45 absolute -bottom-0.5 left-3 z-0"></div>
              </div>
            )}
          </Button>
        </div>
      )}
    </div>
  );
}
