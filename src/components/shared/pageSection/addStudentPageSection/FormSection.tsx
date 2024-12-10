"use client";
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
import SectionHeadingandInput from "./SectionHeadingandInput";

const initialValues = {
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
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: admisionschema,
    onSubmit: (values, action) => {
      console.log(values);
      action.resetForm();
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <SectionHeadingandInput
        inputFields={Studentsfields}
        formikProps={formik}
        sectionNumber={1}
        sectionHeading="Student Information"
      />
      <SectionHeadingandInput
        inputFields={OtherInfo}
        formikProps={formik}
        sectionNumber={2}
        sectionHeading="Other Information"
      />
      <SectionHeadingandInput
        inputFields={Fatherfields}
        formikProps={formik}
        sectionNumber={3}
        sectionHeading="Father Information"
      />
      <SectionHeadingandInput
        inputFields={Motherfields}
        formikProps={formik}
        sectionNumber={4}
        sectionHeading="Mother Information"
      />
      <div className="flex items-center justify-center gap-x-1 py-4">
        <Button
          type="button"
          variant={"yellow"}
          size={"formbtn"}
          className="rounded-3xl"
          onClick={() => formik.resetForm()}
        >
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
