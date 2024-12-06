"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { login } from "@/lib/store/authSlice";
import { LoginSchema } from "@/lib/validations/loginSchema";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch } from "react-redux";

export default function LoginForm() {
  const Router = useRouter();
  const initialValues = {
    username: "salman@gmail.com",
    password: "123456",
  };
  const dispatch = useDispatch();
  const { handleChange, handleSubmit, touched, errors, values, handleBlur } =
    useFormik({
      initialValues: initialValues,
      validationSchema: LoginSchema,
      onSubmit: async (values, action) => {
        const data = await fetch("/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: values.username,
            password: values.password,
          }),
        });

        const result = await data.json();
        if (data.ok) {
          console.log(result);
          dispatch(login());
          Router.push("/dashboard");
          action.resetForm();
        } else {
          console.log("error in sending data", result.message);
        }
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
            name="username"
            type="email"
            placeholder="User Name *"
            className="bg-white h-12 "
            value={values.username}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errors.username && touched.username ? (
            <p className="text-red-500 text-xs mt-1">{errors.username}</p>
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
