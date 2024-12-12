"use client";
import React from "react";
import SectionHeadingandInput from "../addStudentPageSection/SectionHeadingandInput";
import BasicInformationEmployee from "@/lib/BasicInformation";
import { useFormik } from "formik";
import { EmployeeSchema } from "@/lib/validations/EmployeeSchema";
import EmployeeOtherInfo from "@/lib/EmployeeOtherInfo";
import { Button } from "@/components/ui/button";
import { FaCheck } from "react-icons/fa6";
import { RiLoopLeftLine } from "react-icons/ri";

const initialValue = {
  employeeName: "",
  mobileNo: "",
  employeeRole: "",
  picture: "",
  dateofjoining: "",
  monthlsalary: "",
  father: "",
  gender: "",
  experience: "",
  nationalId: "",
  religion: "",
  email: "",
  education: "",
  bloodgroupp: "",
  dob: "",
  address: "",
};

export type employeename = keyof typeof initialValue;

export default function EmployeeFormSection() {
  const formik = useFormik({
    initialValues: initialValue,
    validationSchema: EmployeeSchema,
    onSubmit: (value, action) => {
      console.log(value);
      action.resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <SectionHeadingandInput
        sectionNumber={1}
        employeepage={true}
        formikProps={formik}
        sectionHeading="Basic Information"
        inputFields={BasicInformationEmployee}
      />
      <SectionHeadingandInput
        sectionNumber={2}
        employeepage={true}
        formikProps={formik}
        sectionHeading={"Other Information"}
        inputFields={EmployeeOtherInfo}
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
