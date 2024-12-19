import Link from "next/link";
import React from "react";
import { GoPlus } from "react-icons/go";

interface addnewButtonCardType {
  url: string;
}

export default function AddNewButtonCard({ url }: addnewButtonCardType) {
  return (
    <Link
      href={url}
      className="border-2 cursor-pointer hover:shadow-2xl border-dotted bg-white border-blue px-6 rounded-2xl py-7 flex flex-col items-center"
    >
      <div className="text-4xl text-blue font-light flex items-center justify-center">
        <GoPlus />
      </div>
      <div>
        <h2 className="text-base text-blue font-light text-center">Add New</h2>
      </div>
    </Link>
  );
}
