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
  const { dologin, loading } = useLogin();
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
      <form className="w-full space-y-4 h-auto" onSubmit={handleSubmit}>
        {/* Email Field */}
        <div className="mb-0">
          <Input
            name="email"
            type="email"
            placeholder="User Name *"
            className="bg-white h-12"
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
          <Label htmlFor="terms" className="text-sm font-light text-neutralgray">
            Remember Me
          </Label>
        </div>
        {/* Submit Button */}
        <div className="w-full flex items-center justify-center">
          <Button
            type="submit"
            className=" rounded-3xl"
            size={"lg"}
            variant={"lightblue"}
          >
            {loading ? (
              <div className="border-b-2 border-l-2 border-white rounded-full w-6 h-6 animate-spin"></div>
            ) : (
              "Login"
            )}
          </Button>
        </div>
      </form>
      <div className="h-auto text-center mt-10">
        <h3 className="text-neutralgray text-sm">Forgot Password ?</h3>
      </div>
    </>
  );
}
