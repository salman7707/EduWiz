"use client";
import Link from "next/link";
import Image from "next/image";
import IMAGES from "../../../../../public/images";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useFormik } from "formik";
import { signUpSchema } from "@/lib/validations/signUpSchema";

export default function SignUpSection() {
  const initialValues = {
    email: "",
    password: "",
    confirm_password: "",
  };
  const { handleChange, handleSubmit, touched, errors, values, handleBlur } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });

  return (
    <div className="flex flex-col md:flex-row h-[120vh]">
      {/* Left Section */}
      <div className="w-full md:w-1/3 bg-gradient-to-r from-gradientlightblue to-gradientdarkblue flex flex-col justify-center items-center px-4 gap-y-10 py-10 h-full">
        {/* LOGO Section */}
        <div className="mb-4 flex flex-col items-center ">
          <Link href="/">
            <Image
              src={IMAGES.LOGO}
              alt="eSkooly logo"
              width={90}
              height={50}
            />
          </Link>
          {/* Heading */}
          <h1 className="text-xl font-bold text-white">
            Register your account
          </h1>
        </div>

        {/* Form Section */}
        <form
          className="mt-8 w-[65%] max-w-sm space-y-5 h-full"
          onSubmit={handleSubmit}
        >
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

          {/* Confirm Password Field */}
          <div className="mb-4">
            <Input
              name="confirm_password"
              type="password"
              placeholder="Confirm Password *"
              className="bg-white border-none h-11"
              value={values.confirm_password}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            {errors.confirm_password && touched.confirm_password ? (
              <p className="text-red-500 text-xs mt-1">
                {errors.confirm_password}
              </p>
            ) : (
              ""
            )}
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
            Sign Up
          </Button>
        </form>
        {/* to login page */}
        <div className="h-full">
          <h3 className="text-neutralgray text-sm">have an account ? Login</h3>
        </div>
      </div>

      {/* Right Section */}
      <div className="hidden md:flex w-2/3 bg-cover bg-center items-center justify-center h-full">
        <div className="space-y-16 text-center">
          <div className="flex items-center justify-end px-4 py-4 gap-x-4">
            <h2 className="text-gray-700 text-sm">Already have an account ?</h2>
            <Button
              size={"default"}
              variant={"blue"}
              className="rounded-full h-[30px] px-6"
            >
              Login
            </Button>
          </div>
          <div>
            <div className="">
              <h2 className="text-4xl font-bold text-black">
                Start managing <span className="text-blue">free</span> now!
              </h2>
              <p className="text-neutralgray text-lg mt-4 w-3/4 mx-auto">
                eSkooly is a 100% free online school management software for a
                lifetime with no limitations.
              </p>
            </div>
            <div className="w-full h-full">
              <Image
                src={IMAGES.SIGNUPBG}
                alt="signup"
                width={4000}
                height={4000}
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
