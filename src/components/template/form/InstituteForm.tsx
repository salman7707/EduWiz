"use client";
import { updateSchema } from "@/lib/validations/updateschema";
import { useFormik } from "formik";
import React from "react";
import IMAGES from "../../../../public/images";
import ProfileSectionInput from "./input/profileSectionInput";
import InputSection from "./input/InputSection";
import { Button } from "@/components/ui/button";
import { MdOutlineLoop } from "react-icons/md";

export default function InstituteForm() {
  const initialvalue = {
    logo: IMAGES.AVATAR,
    phoneno: "",
    website: "",
    address: "",
    country: "",
    nameofinstitute: "",
    targetline: "",
  };
  const { values, handleSubmit, handleBlur, handleChange, errors, touched } =
    useFormik({
      initialValues: initialvalue,
      validationSchema: updateSchema,
      onSubmit: (value, action) => {
        console.log(value);
        action.resetForm();
      },
    });
  return (
    <form onSubmit={handleSubmit}>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-8 py-4">
        <div className="space-y-5">
          <div>
            <ProfileSectionInput
              label="Institute Logo*"
              name="logo"
              type="file"
              values={values.logo}
              handleblur={handleBlur}
              handlechange={handleChange}
            />
            {errors.logo && touched.logo && (
              <div className="text-xs text-red-500">{errors.logo}</div>
            )}
          </div>
          <div>
            <InputSection
              label="Name of Institute*"
              placeHolder="Institute Name"
              name="nameofinstitute"
              values={values.nameofinstitute}
              handleblur={handleBlur}
              handlechange={handleChange}
            />
            {errors.nameofinstitute && touched.nameofinstitute && (
              <div className="text-xs text-red-500">
                {errors.nameofinstitute}
              </div>
            )}
          </div>
          <div>
            <InputSection
              label="Target Line*"
              placeHolder="Target Line"
              name="targetline"
              values={values.targetline}
              handleblur={handleBlur}
              handlechange={handleChange}
            />
            {errors.targetline && touched.targetline && (
              <div className="text-xs text-red-500">{errors.targetline}</div>
            )}
          </div>
        </div>
        <div className="space-y-5 lg:pt-0 pt-5">
          <div>
            <InputSection
              name="phoneno"
              label="Phone Number*"
              placeHolder="Phone No"
              theme="blues"
              values={values.phoneno}
              handleblur={handleBlur}
              handlechange={handleChange}
            />
            {errors.phoneno && touched.phoneno && (
              <div className="text-xs text-red-500">{errors.phoneno}</div>
            )}
          </div>
          <div>
            <InputSection
              name="website"
              label="Website"
              placeHolder="Website URL"
              theme="dark"
              values={values.website}
              handleblur={handleBlur}
              handlechange={handleChange}
            />
            {errors.website && touched.website && (
              <div className="text-xs text-red-500">{errors.website}</div>
            )}
          </div>
          <div>
            <InputSection
              name="address"
              label="Address*"
              placeHolder="Address"
              theme="blues"
              values={values.address}
              handleblur={handleBlur}
              handlechange={handleChange}
            />
            {errors.address && touched.address && (
              <div className="text-xs text-red-500">{errors.address}</div>
            )}
          </div>
          <div>
            <InputSection
              name="country"
              label="Country*"
              theme="blues"
              select={true}
              option={[
                { id: 0, value: "" },
                { id: 1, value: "Pakistan" },
              ]}
              values={values.country}
              handleblur={handleBlur}
              handlechange={handleChange}
            />
            {errors.country && touched.country && (
              <div className="text-xs text-red-500">{errors.country}</div>
            )}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full py-4 px-2">
        <Button
          type="submit"
          variant={"yellow"}
          className="rounded-2xl text-base"
        >
          <MdOutlineLoop />
          Update Profile
        </Button>
      </div>
    </form>
  );
}
