import React from "react";
import InputSection from "@/components/template/form/input/InputSection";
import { Name } from "./FormSection";
import { Button } from "@/components/ui/button";
import { InputSectionProps } from "@/types/InputFormSectionType";

export default function SectionHeadingandInput({
  inputFields,
  sectionNumber,
  sectionHeading,
  formikProps,
}: InputSectionProps) {
  const { values, errors, touched, handleChange, handleBlur } = formikProps;

  return (
    <div>
      {/* Section Header */}
      <div
        className={`border-b border-lightblack flex items-center gap-x-1 mx-2 ${
          sectionNumber !== 1 && "mt-4"
        }`}
      >
        <div className="bg-black rounded-full flex items-center justify-center w-[22px] h-[22px] text-white text-sm font-semibold">
          {sectionNumber}
        </div>
        <h2 className="font-semibold text-sm text-medblacktext">
          {sectionHeading}
        </h2>
      </div>

      {/* Input Fields */}
      <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-x-8 gap-y-6 mt-10 px-4">
        {inputFields.map((field) => (
          <div
            key={field.id}
            className={`flex flex-col w-full ${
              field.justifyend &&
              sectionNumber === 1 &&
              "lg:col-start-3 lg:col-end-4 lg:-mt-8"
            } ${
              field.justifyend &&
              sectionNumber !== 1 &&
              "lg:col-start-3 lg:col-end-4"
            }  ${field.colSpan && "lg:col-span-2"}`}
          >
            <InputSection
              name={field.name}
              id={field.id}
              label={field.label}
              type={field.type}
              select={field.select}
              theme={field.theme}
              option={field.options}
              values={values[field.name as Name] || ""}
              handlechange={handleChange}
              handleblur={handleBlur}
              placeHolder={field.placeholder}
            />
            {errors[field.name as Name] && touched[field.name as Name] && (
              <div
                className={`text-red-500 text-xs ${
                  sectionNumber === 1 && field.id === 5 && "lg:mb-7"
                } `}
              >
                {errors[field.name as Name]}
              </div>
            )}
          </div>
        ))}
        {sectionHeading === "Other Information" && (
          <Button
            variant={"yellow"}
            className="w-[60%] h-12 text-lg rounded-3xl"
          >
            + Add Button
          </Button>
        )}
      </div>
    </div>
  );
}
