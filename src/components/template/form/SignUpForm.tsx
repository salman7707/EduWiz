import { Button } from "@/components/ui/button";
import { Label } from "@radix-ui/react-label";
import Link from "next/link";
import React from "react";
import { useFormik } from "formik";
import { signUpSchema } from "@/lib/validations/signUpSchema";
import { Input } from "@/components/ui/input";
import useSignup from "@/customHooks/useSignup";

export default function SignUpForm() {
  const initialValues = {
    email: "",
    password: "",
  };
  const { doSignUp, loading } = useSignup();
  const { handleChange, handleSubmit, touched, errors, values, handleBlur } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: async (values) => {
        console.log("Working", values);
        await doSignUp(values);
      },
    });

  return (
    <>
      {/* Form Section */}
      <form className="w-full" onSubmit={handleSubmit}>
        {/* Email Field */}
        <div className="mb-4">
          <Input
            name="email"
            type="email"
            placeholder="Your Email *"
            className="bg-white border-none h-11"
            value={values.email}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errors.email && touched.email ? (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          ) : null}
        </div>

        {/* Password Field */}
        <div className="mb-4">
          <Input
            name="password"
            type="password"
            placeholder="Choose Password *"
            onBlur={handleBlur}
            className="bg-white border-none h-11"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && touched.password ? (
            <p className="text-red-500 text-xs mt-1">{errors.password}</p>
          ) : null}
        </div>

        {/* Terms and Conditions */}
        <div className="flex items-center space-x-2 mb-6">
          <input type="checkbox" id="terms" />
          <Label htmlFor="terms" className="text-xs text-white">
            Accept our{" "}
            <Link href="/terms&conditions">
              <span className="text-blue">Terms & Conditions</span>
            </Link>
          </Label>
        </div>

        {/* Submit Button */}
        <Button type="submit" className="w-full rounded-3xl" variant={"blue"}>
          {loading ? (
            <div className="border-b-2 border-l-2 border-white rounded-full w-6 h-6 animate-spin"></div>
          ) : (
            "Sign Up"
          )}
        </Button>
      </form>
      {/* to login page */}
      <Link href={"/login"} className="">
        <h3 className="text-neutralgray hover:text-blue text-sm text-center">
          Have an account ? Login
        </h3>
      </Link>
    </>
  );
}
