"use client";
import InputSection from "@/components/template/form/input/InputSection";
import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

export default function ManageSearchSection({}) {
  const [search, setSearch] = useState<string>("");
  const [role, setRole] = useState("Select*");
  return (
    <div className="bg-white rounded-2xl px-4 py-7 border border-gray-200 lg:w-auto w-full">
      <div className="flex px-16 pb-8">
        <IoSearchOutline className="text-2xl" />{" "}
        <h2 className="text-xl font-semibold">Search</h2>
      </div>
      <div className="flex flex-col gap-y-6 ">
        <InputSection
          label="Search Employee*"
          placeHolder="Search Employee"
          type="text"
          values={search}
          handlechange={(e) => setSearch(e.target.value)}
        />
        <InputSection
          label="Select Role*"
          select={true}
          values={role}
          handlechange={(e) => setRole(e.target.value)}
          option={[{ id: 0, value: "Select" }]}
        />
        <h2 className="text-gray-400 font-semibold underline text-sm text-center">
          or,Reload All
        </h2>
      </div>
    </div>
  );
}
