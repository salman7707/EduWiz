"use client";
import { addClassesschema } from "@/lib/validations/addClassesschema";
import { useFormik } from "formik";
import React from "react";
import InputSection from "./input/InputSection";
import { Button } from "@/components/ui/button";
import { GoPlus } from "react-icons/go";
import AddNewClassesData from "@/lib/AddNewClassData";

export default function AddNewClassForm() {
  const initialValue = {
    className: "",
    monthlytutionfee: "",
    selectteacher: "Select*",
  };
  type Keys = keyof typeof initialValue;
  const { values, handleSubmit, handleChange, handleBlur, touched, errors } =
    useFormik({
      initialValues: initialValue,
      validationSchema: addClassesschema,
      onSubmit: (value, action) => {
        console.log(value);
        action.resetForm();
      },
    });
  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {AddNewClassesData.map((data) => (
        <div key={data.id} className="w-[90%] mx-auto ">
          <InputSection
            name={data.name}
            type={data.type}
            select={data.select}
            placeHolder={data.placeholder}
            label={data.label}
            values={values[data.name as Keys]}
            option={data.options}
            handleblur={handleBlur}
            handlechange={handleChange}
          />
          {errors[data.name as Keys] && touched[data.name as Keys] && (
            <div className="text-red-500 text-xs pl-3 my-2">
              <h2>{errors[data.name as Keys]}</h2>
            </div>
          )}
        </div>
      ))}
      <div className="flex items-center justify-center w-full pb-3">
        <Button variant={"yellow"} type="submit" className="rounded-2xl">
          <GoPlus />
          Create
        </Button>
      </div>
    </form>
  );
}
