"use client";
import InputSection from "@/components/template/form/input/InputSection";
import ProfileSectionInput from "@/components/template/form/input/profileSectionInput";
import { Button } from "@/components/ui/button";
import AddNewBankData from "@/lib/AddNewBankData";
import { useFormik } from "formik";
import React from "react";
import { FaPlus } from "react-icons/fa6";

export default function FeeChallanFormSection() {
  const initialValue = {
    logo: "",
    bankname: "",
    branchaddress: "",
    accountnumber: "",
    instruction: "",
  };
  type namesType = keyof typeof initialValue;
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: initialValue,
    onSubmit: (value, action) => {
      console.log(value);
      action.resetForm();
    },
  });
  return (
    <div className="w-full rounded-2xl border bg-white md:px-6 px-3">
      {/* IMAGES Section */}
      <div className="py-4 px-2">
        <h2 className="text-medblacktext text-xl font-semibold text-center">
          Add New Bank
        </h2>
        <div className="flex items-center justify-center gap-x-3">
          <div className="flex items-center justify-center gap-x-1">
            <div className="bg-gradient-to-l to-cardfourth from-lightpurplegradient w-5 h-[7px] rounded-md"></div>
            <div className="text-xs text-lightblacktext ">Required*</div>
          </div>
          <div className="flex items-center justify-center gap-x-1">
            <div className="bg-slate w-5 h-[7px] rounded-md"></div>
            <div className="text-xs text-medblacktext ">Optional</div>
          </div>
        </div>
      </div>
      {/*  */}
      <form onSubmit={handleSubmit}>
        <div>
          <ProfileSectionInput
            label="Bank Logo*"
            name="logo"
            type="file"
            values={values.logo}
            handlechange={handleChange}
            maxSizeCard
            size="small"
          />
        </div>
        <div className="space-y-5 py-5">
          {AddNewBankData.map((data) => (
            <div key={data.id} className="">
              <InputSection
                name={data.name}
                label={data.label}
                type={data.type}
                size="small"
                color="dark"
                values={values[data.name as namesType]}
                handlechange={handleChange}
                placeHolder={data.placeholder}
                theme={data.theme}
              />
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center pb-6">
          <Button
            type="submit"
            variant={"yellow"}
            className="rounded-3xl h-11 px-4 text-lg"
          >
            <FaPlus />
            Add Bank
          </Button>
        </div>
      </form>
    </div>
  );
}
