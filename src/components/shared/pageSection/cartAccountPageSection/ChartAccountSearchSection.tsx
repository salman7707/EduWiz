"use client";
import InputSection from "@/components/template/form/input/InputSection";
import RequireAndOptionalHeading from "@/components/template/heading/RequireAndOptionalHeading";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { GiSave } from "react-icons/gi";

export default function ChartAccountSearchSection({}) {
  const [search, setSearch] = useState<string>("");
  const [role, setRole] = useState("Select*");
  return (
    <div className="bg-white rounded-2xl px-4 py-7 border border-gray-200 lg:w-auto w-full">
      {/* Heading Section */}
      <RequireAndOptionalHeading heading="Add chart of accounts" headingsize="small" />
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
        <div className="flex items-center justify-center">
          <Button variant={"yellow"} className="rounded-3xl">
            <GiSave />
            Save Head
          </Button>
        </div>
      </div>
    </div>
  );
}
