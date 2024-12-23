import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import { IoSearch } from "react-icons/io5";

interface InputWithSearchType {
  placeholder?: string;
  type?: string;
  value?: string | number;
}

export default function InputWithSearch({
  placeholder,
  type = "text",
  value,
}: InputWithSearchType) {
  return (
    <div className="flex md:flex-row flex-col items-center justify-center gap-x-2 w-full mx-auto">
      <Input
        type={type}
        value={value}
        className="border-b-lightblack focus-visible:ring-0 border-x-0 rounded-none border-t-0 w-[250px] "
        placeholder={placeholder}
      />
      <Button className="bg-transparent shadow-none border-b border-b-lightblack border-x-0 rounded-none border-t-0 w-[10%]">
        <IoSearch className="text-lightblack" />
      </Button>
    </div>
  );
}
