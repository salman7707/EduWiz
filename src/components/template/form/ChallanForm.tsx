import { Button } from "@/components/ui/button";
import React from "react";
import { PiNewspaperClippingThin } from "react-icons/pi";
import ToggleBtn from "../button/ToggleBtn";
import InputSection from "./input/InputSection";
import { useFormik } from "formik";
import { fieldsData } from "@/types/FieldsDataTypes";

interface ChallanFormType {
  forSection?: string;
  inputsData?: fieldsData[];
}

export default function ChallanForm({
  forSection = "Student",
  inputsData,
}: ChallanFormType) {
  
  const initialValue = {
    feemonth: "2024-12",
    feedate: "2024-12-23",
    fineafterdate: "0",
    selectbank: "",
    search: "",
  };
  type initialValuekey = keyof typeof initialValue;
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: initialValue,
    onSubmit: (values, action) => {
      console.log(values);
      action.resetForm();
    },
  });
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl border w-full px-4 py-5"
    >
      {/* Heading Section */}
      <div className="py-4 px-2">
        <h2 className="text-medblacktext text-xl font-semibold text-center">
          Fee Challan for {forSection}
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
      {/* Inputs Section */}
      <div className="grid grid-cols-1 gap-6 px-4">
        <div className={`grid lg:grid-cols-3 grid-cols-1 gap-y-6 gap-3 mt-4`}>
          {inputsData
            ?.filter((_, index) => index <= 2)
            .map((data) => (
              <div key={data.id} className={`w-full `}>
                <InputSection
                  label={data.label}
                  name={data.name}
                  values={values[data.name as initialValuekey]}
                  handlechange={handleChange}
                  type={data.type}
                  select={data.select}
                  color="gray"
                  size="small"
                  theme={data.theme}
                  option={data.options}
                />
              </div>
            ))}
        </div>
        <div className={` grid lg:grid-cols-2 grid-cols-1 gap-y-6 gap-3`}>
          {inputsData
            ?.filter((_, index) => index >= 3)
            .map((data) => (
              <div key={data.id} className={`w-full `}>
                <InputSection
                  label={data.label}
                  name={data.name}
                  values={values[data.name as initialValuekey]}
                  handlechange={handleChange}
                  type={data.type}
                  select={data.select}
                  color="gray"
                  placeHolder={data.placeholder}
                  size="small"
                  option={data.options}
                />
              </div>
            ))}
        </div>
      </div>
      <div className="flex lg:flex-row flex-col lg:items-center items-start justify-between px-6">
        <div className="flex items-center justify-start gap-x-1 mt-5 w-auto">
          <ToggleBtn />
          <h2 className="text-xs text-lightblack">Bank Copy</h2>
        </div>
        <div className="flex items-center justify-start gap-x-1 mt-5 w-auto">
          <ToggleBtn />
          <h2 className="text-xs text-lightblack">Student Copy</h2>
        </div>
        <div className="flex items-center justify-start gap-x-1 mt-5 w-auto">
          <ToggleBtn />
          <h2 className="text-xs text-lightblack">Institute Copy</h2>
        </div>
      </div>
      <div className="py-2 px-3 flex items-center justify-center mt-6">
        <Button type="submit" variant={"yellow"} className="rounded-full">
          <PiNewspaperClippingThin className="" /> Generate
        </Button>
      </div>
    </form>
  );
}
