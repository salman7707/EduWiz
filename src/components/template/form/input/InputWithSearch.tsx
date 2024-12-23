import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { ChangeEvent } from "react";
import { IoSearch } from "react-icons/io5";

interface InputWithSearchType {
  name?: string;
  placeholder?: string;
  type?: string;
  value?: string | number;
  defaulterPage?: boolean;
  handlechange?: (e: ChangeEvent) => void | ((field:string) => void);
}

export default function InputWithSearch({
  name,
  placeholder,
  type = "text",
  value,
  defaulterPage,
  handlechange,
}: InputWithSearchType) {
  return (
    <div
      className={`flex  ${
        defaulterPage ? "flex-row" : "md:flex-row flex-col"
      } items-center justify-center gap-x-2 w-full mx-auto`}
    >
      <Input
        name={name}
        type={type}
        value={value}
        onChange={handlechange}
        className="border-b-lightblack focus-visible:ring-0 border-x-0 rounded-none border-t-0 w-[250px] "
        placeholder={placeholder}
      />
      <Button className="bg-transparent shadow-none border-b border-b-lightblack border-x-0 rounded-none border-t-0 w-[10%]">
        <IoSearch className="text-lightblack" />
      </Button>
    </div>
  );
}
