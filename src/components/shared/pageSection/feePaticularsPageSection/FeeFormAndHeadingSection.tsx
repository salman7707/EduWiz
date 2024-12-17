"use client";
import InputSection from "@/components/template/form/input/InputSection";
import { Button } from "@/components/ui/button";
import feeParticulars from "@/lib/feePaticulars";
import { feeparticularSchema } from "@/lib/validations/feeparticularSchema";
import { useFormik } from "formik";
import React from "react";
import { FaCheck } from "react-icons/fa6";

export default function FeeFormAndHeadingSection() {
  const data = feeParticulars.filter((data) => data.id === 0);
  const alldata = feeParticulars.filter((data) => data.id !== 0);
  const initialValue = {
    monthlytutionfee: "",
    monthlytutionfeevalue: "",
    addmissionfee: "ADMISSION FEE",
    addmissionfeevalue: 0,
    registrationfee: "REGISTRATION FEE",
    registrationfeevalue: 0,
    artmaterial: "ART MATERIAL",
    artmaterialvalue: 0,
    transport: "TRANSPORT",
    transportvalue: 0,
    books: "BOOKS",
    booksvalue: 0,
    uniform: "UNIFORM",
    uniformvalue: 0,
    fine: "FINE",
    finevalue: 0,
    others: "OTHERS",
    othersvalue: 0,
  };

  type feeformname = keyof typeof initialValue;

  const { values, handleBlur, handleChange, errors, touched, handleSubmit } =
    useFormik({
      initialValues: initialValue,
      validationSchema: feeparticularSchema,
      onSubmit: (value) => {
        console.log(value);
      },
    });
  return (
    <div className="py-6 w-full">
      {/* Heading Section */}
      <div className="pb-5 px-2">
        <h2 className="text-medblacktext text-3xl font-semibold text-center">
          Change Fee Particulars
        </h2>
        <div className="flex items-center justify-center gap-x-3">
          <div className="flex items-center justify-center gap-x-1">
            <div className="bg-gradient-to-l to-cardfourth from-lightpurplegradient w-5 h-[7px] rounded-md"></div>
            <div className="text-xs text-lightblacktext ">Editable</div>
          </div>
          <div className="flex items-center justify-center gap-x-1">
            <div className="bg-slate w-5 h-[7px] rounded-md"></div>
            <div className="text-xs text-medblacktext ">Fixed</div>
          </div>
        </div>
      </div>
      {/* Form section */}
      <form className="lg:w-[65%] mx-auto" onSubmit={handleSubmit}>
        <div className={`grid grid-cols-1 w-full mx-auto pb-12 `}>
          {data.map((data) => (
            <div className="lg:w-[45%]" key={data.id}>
              <InputSection
                name={data.name}
                values={values[data.name as feeformname]}
                handleblur={handleBlur}
                handlechange={handleChange}
                select={data.select}
                label={data.label}
                option={data.option}
              />
              {errors[data.name as feeformname] &&
                touched[data.name as feeformname] && (
                  <div className="mt-1 text-red-500 text-xs">
                    {errors[data.name as feeformname]}
                  </div>
                )}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-[65%_35%] w-full mx-auto gap-y-5 gap-x-2.5">
          {alldata.map((field) => (
            <div className="" key={field.id}>
              <InputSection
                name={field.name}
                type={field.type}
                values={values[field.name as feeformname]}
                handleblur={handleBlur}
                handlechange={handleChange}
                theme={field.theme}
                label={field.label}
                color="gray"
                size="small"
                placeHolder={field.placeHolder}
              />
              {errors[field.name as feeformname] &&
                touched[field.name as feeformname] && (
                  <div className="mt-1 text-red-500 text-xs">
                    {errors[field.name as feeformname]}
                  </div>
                )}
            </div>
          ))}
        </div>
        <div className="py-7 flex items-center justify-center">
          <Button variant={"yellow"} className="rounded-3xl">
            <FaCheck />
            Save Changes
          </Button>
        </div>
      </form>
    </div>
  );
}
