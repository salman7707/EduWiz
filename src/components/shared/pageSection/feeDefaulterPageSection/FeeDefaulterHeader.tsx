"use client";
import InputWithSearch from "@/components/template/form/input/InputWithSearch";
import { Button } from "@/components/ui/button";
import { useFormik } from "formik";
import React from "react";
import { IoMenu } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";

export default function FeeDefaulterHeader() {
  const initialValue = {
    date: "2024-12",
  };
  const { values, handleChange } = useFormik({
    initialValues: initialValue,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className="flex lg:flex-row flex-wrap lg:justify-between justify-center items-center px-3 gap-y-4">
      <div className="flex md:flex-row flex-col items-center gap-y-4 gap-x-4 justify-between xl:w-[60%] w-full">
        <div className="">
          <InputWithSearch
            name="date"
            type="month"
            handlechange={handleChange}
            value={values.date}
            defaulterPage
          />
        </div>
        <div>
          <h2 className="text-pink text-xl font-semibold">Fee Defaulters</h2>
        </div>
      </div>
      <div className="space-x-2 flex md:flex-nowrap flex-wrap items-center justify-center gap-y-2">
        <Button className="bg-[#6285F4] hover:bg-[#6285F4] rounded-none h-11 px-4 text-base">
          <IoMenu /> List View
        </Button>
        <Button className="bg-pink hover:bg-pink rounded-none h-11 px-4 text-base">
          <TfiEmail /> Send Remindar
        </Button>
      </div>
    </div>
  );
}
