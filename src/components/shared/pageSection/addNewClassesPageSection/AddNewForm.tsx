"use client";
import InputSection from "@/components/template/form/input/InputSection";
import { Button } from "@/components/ui/button";
import { addClassesschema } from "@/lib/validations/addClassesschema";
import { useFormik } from "formik";
import React from "react";
import { GoPlus } from "react-icons/go";

export default function AddNewForm() {
  const initialValue = {
    className: "",
    monthlytutionfee: "",
    selectteacher: "select*",
  };
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
    <div className="w-full mt-6">
      <div className="md:w-[50%] bg-white rounded-2xl mx-auto h-auto py-3">
        <div className="py-4 px-2">
          <h2 className="text-medblacktext text-xl font-semibold text-center">
            Add New Class
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
        <div>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="w-[90%] mx-auto ">
              <InputSection
                name="className"
                type="text"
                select={false}
                placeHolder="Name Of Class"
                label="Class Name*"
                values={values.className}
                handleblur={handleBlur}
                handlechange={handleChange}
              />
              {errors.className && touched.className && (
                <div className="text-red-500 text-xs pl-3 my-2">
                  <h2>{errors.className}</h2>
                </div>
              )}
            </div>
            <div className="w-[90%] mx-auto ">
              <InputSection
                name="monthlytutionfee"
                type="text"
                select={false}
                placeHolder="Monthly Tuition Fees*"
                label="Monthly Tuition Fees*"
                values={values.monthlytutionfee}
                handleblur={handleBlur}
                handlechange={handleChange}
              />
              {errors.monthlytutionfee && touched.monthlytutionfee && (
                <div className="text-red-500 text-xs pl-3 my-2">
                  <h2>{errors.monthlytutionfee}</h2>
                </div>
              )}
            </div>
            <div className="w-[90%] mx-auto ">
              <InputSection
                name="selectteacher"
                select={true}
                option={[
                  { id: 0, value: "select*" },
                  { id: 1, value: "Salman" },
                ]}
                label="Select Class Teacher*"
                values={values.selectteacher}
                handleblur={handleBlur}
                handlechange={handleChange}
              />
              {errors.selectteacher && touched.selectteacher && (
                <div className="text-red-500 text-xs pl-3 my-2">
                  <h2>{errors.selectteacher}</h2>
                </div>
              )}
            </div>
            <div className="flex items-center justify-center w-full pb-3">
              <Button variant={"yellow"} type="submit" className="rounded-2xl">
                <GoPlus />
                Create
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
