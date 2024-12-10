"use client";
import Input from "@/components/template/form/input/InputSection";
import { Button } from "@/components/ui/button";
import Fatherfields from "@/lib/FatherInput";
import Studentsfields from "@/lib/formFields";
import Motherfields from "@/lib/MotherField";
import OtherInfo from "@/lib/OtherInfo";
import React from "react";
import { RiLoopLeftLine } from "react-icons/ri";
import { FaCheck } from "react-icons/fa6";
import { useFormik } from "formik";
import { admisionschema } from "@/lib/validations/AdmissionFormSchema";

export const initialValues = {
  studentName: "",
  RegistrationNo: "",
  selectclass: "",
  pic: "",
  date: "",
  discountfees: "",
  Mobilenum: "",
  dateofbirth: "",
  birthformId: "",
  orphan: "Select",
  gender: "Gender",
  cast: "",
  osc: "Select",
  identitymark: "",
  prevschool: "",
  religion: "",
  bloodgroup: "Blood Group",
  boardrollnum: "",
  familyselect: "",
  disease: "",
  additionalnote: "",
  siblings: "",
  address: "",
  fathername: "",
  fatherid: "",
  occupation: "",
  education: "",
  mobileno: "",
  profession: "",
  income: "",
  mothername: "",
  motherid: "",
  motheroccupation: "",
  mothereducation: "",
  mothermobileno: "",
  motherprofession: "",
  motherincome: "",
};

export type Name = keyof typeof initialValues;
export default function FormSection() {
  const { handleSubmit, errors, handleChange, handleBlur, values } = useFormik({
    initialValues: initialValues,
    validationSchema: admisionschema,
    onSubmit: (values, action) => {
      console.log(values);
      action.resetForm();
    },
  });
  return (
    <form onSubmit={handleSubmit}>
      {/* Students Headin Section */}
      <div className="border-b border-lightblack flex items-center gap-x-1 mx-2">
        <div className="bg-black rounded-full flex items-center justify-center w-[22px] h-[22px] text-white text-sm font-semibold">
          1
        </div>
        <h2 className="font-semibold text-sm text-medblacktext ">
          Student Information
        </h2>
      </div>
      {/* student Inputs Section */}
      <div className="grid grid-cols-3 gap-x-8 gap-y-6 mt-10 px-4">
        {Studentsfields.map((data,index) => (
          <div
            key={data.id}
            className={`flex flex-col ${
              data.justifyend && "col-start-3 col-end-4 -mt-8"
            }`}
          >
            <div>
              <Input
                values={values[data.name as Name]}
                name={data.name}
                id={data.id}
                label={data.label}
                select={data.select}
                theme={data.theme}
                option={data.options}
                handlechange={handleChange}
                handleblur={handleBlur}
                placeHolder={data.placeholder}
                type={data.type}
              />
            </div>
            {errors[data.name as Name] === data.name && data.id === index && (
              <div className="text-red-500 text-xs">
                {errors[data.name as Name]}
              </div>
            )}
          </div>
        ))}
      </div>
      {/* Other Information */}
      <div className="border-b border-lightblack flex items-center gap-x-1 mx-2">
        <div className="bg-black rounded-full flex items-center justify-center w-[22px] h-[22px] text-white text-sm font-semibold">
          2
        </div>
        <h2 className="font-semibold text-sm text-medblacktext ">
          Other Information
        </h2>
      </div>
      {/* Other Inputs Section */}
      <div className="grid grid-cols-3 gap-x-8 gap-y-6 mt-10 px-4">
        {OtherInfo.map((data) => (
          <div key={data.id} className={` ${data.colSpan && "col-span-2"} `}>
            <Input
              name={data.name}
              values={values[data.name as Name]}
              handlechange={handleChange}
              handleblur={handleBlur}
              theme={data.theme}
              placeHolder={data.placeholder}
              label={data.label}
              select={data.select}
              type={data.type}
              option={data.options}
            />
          </div>
        ))}
        <Button
          variant={"yellow"}
          className=" px-4 w-40 text-lg rounded-full h-11"
        >
          + Add Parent
        </Button>
      </div>
      {/* Father/Guardien Information */}
      <div className="border-b border-lightblack flex items-center gap-x-1 mx-2 mt-4">
        <div className="bg-black rounded-full flex items-center justify-center w-[22px] h-[22px] text-white text-sm font-semibold">
          3
        </div>
        <h2 className="font-semibold text-sm text-medblacktext ">
          Father/Guardien Information
        </h2>
      </div>
      {/* Father Inputs Section */}
      <div className="grid grid-cols-3 gap-x-8 gap-y-6 mt-10 px-4">
        {Fatherfields.map((data) => (
          <div
            key={data.id}
            className={` ${data.justifyend && "col-start-3 col-end-4 "}`}
          >
            <Input
              name={data.name}
              values={values[data.name as Name]}
              handlechange={handleChange}
              handleblur={handleBlur}
              id={data.id}
              label={data.label}
              select={data.select}
              theme={data.theme}
              option={data.options}
              placeHolder={data.placeholder}
              type={data.type}
            />
          </div>
        ))}
      </div>
      {/* Mother Information */}
      <div className="border-b border-lightblack flex items-center gap-x-1 mx-2 mt-4">
        <div className="bg-black rounded-full flex items-center justify-center w-[22px] h-[22px] text-white text-sm font-semibold">
          4
        </div>
        <h2 className="font-semibold text-sm text-medblacktext ">
          Mother Information
        </h2>
      </div>
      {/* Mother Inputs Section */}
      <div className="grid grid-cols-3 gap-x-8 gap-y-6 mt-10 px-4 border-b border-gray-300 pb-6">
        {Motherfields.map((data) => (
          <div
            key={data.id}
            className={` ${data.justifyend && "col-start-3 col-end-4 "}`}
          >
            <Input
              name={data.name}
              values={values[data.name as Name]}
              handlechange={handleChange}
              handleblur={handleBlur}
              id={data.id}
              label={data.label}
              select={data.select}
              theme={data.theme}
              option={data.options}
              placeHolder={data.placeholder}
              type={data.type}
            />
          </div>
        ))}
      </div>
      {/* Buttons Section */}
      <div className="flex items-center justify-center gap-x-1 py-4">
        <Button variant={"yellow"} size={"formbtn"} className="rounded-3xl">
          <RiLoopLeftLine /> Reset
        </Button>
        <Button
          type="submit"
          className="rounded-3xl bg-[#5756AB] hover:bg-[#5756AB]"
          size={"lg"}
        >
          <FaCheck /> Submit
        </Button>
      </div>
    </form>
  );
}
