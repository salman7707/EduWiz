"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useLogin from "@/customHooks/useLogin";
import { LoginSchema } from "@/lib/validations/loginSchema";
import { useFormik } from "formik";
import React from "react";

export default function LoginForm() {
  const initialValues = {
    email: "",
    password: "",
  };
  const { dologin } = useLogin();
  const { handleChange, handleSubmit, touched, errors, values, handleBlur } =
    useFormik({
      initialValues: initialValues,
      validationSchema: LoginSchema,
      onSubmit: async (values) => {
        console.log(values);
        await dologin(values);
      },
    });

  return (
    <>
      <form
        className="lg:w-[40%] w-full space-y-4 h-full"
        onSubmit={handleSubmit}
      >
        {/* Email Field */}
        <div className="mb-0">
          <Input
            name="email"
            type="email"
            placeholder="User Name *"
            className="bg-white h-12 "
            value={values.email}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errors.email && touched.email ? (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          ) : null}
        </div>
        {/* Password Field */}
        <div className="mb-0">
          <Input
            name="password"
            type="password"
            placeholder="Password *"
            onBlur={handleBlur}
            className="bg-white h-12"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && touched.password ? (
            <p className="text-red-500 text-xs mt-1">{errors.password}</p>
          ) : null}
        </div>
        {/* Terms and Conditions */}
        <div className="flex items-center justify-start gap-x-1 mb-6">
          <input type="checkbox" id="terms" />
          <Label htmlFor="terms" className="text-sm text-neutralgray">
            Remember Me
          </Label>
        </div>
        <div className="w-full flex items-center justify-center">
          <Button
            type="submit"
            className=" rounded-3xl"
            size={"lg"}
            variant={"lightblue"}
          >
            Login
          </Button>
        </div>
        {/* Submit Button */}
      </form>
      <div className="h-full">
        <h3 className="text-neutralgray text-sm">Forgot Password ?</h3>
      </div>
    </>
  );
}
