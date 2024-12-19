"use client";
import MarksGrading from "@/lib/MarksGrading";
import React from "react";
import InputSection from "./input/InputSection";
import { Button } from "@/components/ui/button";
import { FaCheck, FaMinus, FaPlus } from "react-icons/fa6";
import { useFormik } from "formik";

export interface InitialValues {
  foraplus: string;
  aplusfrom: number;
  aplusupto: number;
  aplusposition: string;
  fora: string;
  afrom: number;
  aupto: number;
  aposition: string;
  forBplus: string;
  bplusfrom: number;
  bplusupto: number;
  bplusposition: string;
  forb: string;
  bfrom: number;
  bupto: number;
  bposition: string;
  forc: string;
  cfrom: number;
  cupto: number;
  cposition: string;
  ford: string;
  dfrom: number;
  dupto: number;
  dposition: string;
  forf: string;
  ffrom: number;
  fupto: number;
  fposition: string;
}

const initialValues: InitialValues = {
  foraplus: "A+",
  aplusfrom: 80,
  aplusupto: 100,
  aplusposition: "PASS",
  fora: "A",
  afrom: 70,
  aupto: 79,
  aposition: "PASS",
  forBplus: "B+",
  bplusfrom: 60,
  bplusupto: 69,
  bplusposition: "PASS",
  forb: "B",
  bfrom: 50,
  bupto: 59,
  bposition: "PASS",
  forc: "C",
  cfrom: 40,
  cupto: 49,
  cposition: "PASS",
  ford: "D",
  dfrom: 33,
  dupto: 49,
  dposition: "PASS",
  forf: "F",
  ffrom: 0,
  fupto: 32,
  fposition: "FAIL",
};

type name = keyof typeof initialValues;

export default function MarksGradingForm() {
  const { handleChange, values } = useFormik({
    initialValues,
    onSubmit: (value) => {
      console.log(value);
    },
  });

  return (
    <form>
      <div className="grid xl:grid-cols-[33%_15%_15%_33%] lg:grid-cols-4 md:grid-cols-[33%_15%_15%_33%]  grid-cols-4 w-[95%] justify-center mx-auto md:gap-x-2 gap-x-1 gap-y-6 mt-2">
        {MarksGrading.map((data) => (
          <div key={data.id}>
            <InputSection
              name={data.name}
              label={data.label}
              placeHolder={data.placeholder}
              select={data.select}
              theme={data.theme}
              type={data.type}
              handlechange={handleChange}
              values={values[data.name as name]}
              size={"small"}
              color={"gray"}
            />
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center gap-x-2 py-4">
        <Button className="bg-slate text-white text-xs rounded-3xl px-2.5 h-[22px]">
          <FaPlus /> Add More Option
        </Button>
        <Button className="bg-lightblack text-white text-xs rounded-3xl px-3 h-[22px]">
          <FaMinus /> Remove
        </Button>
      </div>
      <div className="pb-4 pt-2 flex items-center justify-center">
        <Button variant={"yellow"} className="rounded-2xl">
          <FaCheck /> Save Changes
        </Button>
      </div>
    </form>
  );
}
