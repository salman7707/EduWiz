"use client";
import accountInputs from "@/lib/accountInputs";
import { accountFormSchema } from "@/lib/validations/accountFormSchema";
import { useFormik } from "formik";
import React from "react";
import InputSection from "./input/InputSection";
import { Button } from "@/components/ui/button";
import { MdLoop } from "react-icons/md";
const initialValues = {
  username: "salman@gmail.com",
  password: "123456",
  timezone: "Asia/Karachi",
  currency: "Dollars (USD)",
  symbol: "$",
};

type accoutnformname = keyof typeof initialValues;

export default function AccountSettingForm() {
  const { values, handleChange, handleBlur, errors, handleSubmit, touched } =
    useFormik({
      initialValues,
      validationSchema: accountFormSchema,
      onSubmit: (value) => {
        console.log(value);
      },
    });
  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-[60%_40%] gap-5 items-center">
        {accountInputs.map((data) => (
          <div key={data.id} className={`${data.colSpan && "col-span-2"}`}>
            <InputSection
              name={data.name}
              label={data.label}
              values={values[data.name as accoutnformname]}
              type={data.type}
              handleblur={handleBlur}
              handlechange={handleChange}
              color="gray"
              select={data.select}
              option={data.options}
            />
            {errors[data.name as accoutnformname] &&
              touched[data.name as accoutnformname] && (
                <div className="mt-2 text-red-500 text-xs">
                  {errors[data.name as accoutnformname]}
                </div>
              )}
          </div>
        ))}
      </div>
      <div className="mt-5 flex items-center justify-center">
        <Button
          type="submit"
          variant={"lighteshblue"}
          className="rounded-3xl h-11 px-3 text-lg"
        >
          <MdLoop /> Update Settings
        </Button>
      </div>
    </form>
  );
}
