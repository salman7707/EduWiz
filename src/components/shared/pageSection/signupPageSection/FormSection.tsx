import Image from "next/image";
import React, { useState } from "react";
import IMAGES from "../../../../../public/images";
import Link from "next/link";
import { BsPerson } from "react-icons/bs";
import SignUpForm from "@/components/template/form/SignUpForm";
import LoginForm from "@/components/template/form/LoginForm";
import { LeftSectionTypes } from "@/types/LeftSectionType";
import RoleData from "@/lib/RoleData";

export default function FormSection({
  imgC = false,
  bgColor = "gradient",
  roleSection = false,
  loginForm = false,
}: LeftSectionTypes) {
  const [role, setRole] = useState("Admin");
  return (
    <div
      className={`w-auto ${
        bgColor === "gradient"
          ? "bg-gradient-to-r from-gradientlightblue to-gradientdarkblue"
          : "bg-white"
      }  flex flex-col justify-center items-center px-4 gap-y-10 xl:py-10 py-14 h-full`}
    >
      {/* LOGO Section */}
      <div className=" flex flex-col gap-y-4 items-center 2xl:justify-start xl:justify-start w-auto 2xl:h-[35%] xl:h-[20%]">
        <Link href="/">
          <Image
            src={imgC === true ? IMAGES.CLOGO : IMAGES.LOGO}
            alt="eSkooly logo"
            width={imgC === true ? 120 : 90}
            height={imgC === true ? 70 : 50}
          />
        </Link>
        {/* Heading */}
        <h1
          className={` font-medium ${
            imgC ? "text-neutralgray text-xs" : "text-white text-lg"
          } `}
        >
          {imgC ? (
            <div className="flex items-center justify-center gap-x-1">
              <div className=" text-neutralgray text-xs text-center border border-neutralgray rounded-full h-[18px] w-[18px]">
                ?
              </div>{" "}
              I do not have an account yet
            </div>
          ) : (
            "Register your account"
          )}
        </h1>
      </div>

      {/* Role Icons */}

      {roleSection && (
        <div>
          <h2 className="text-neutralgray font-bold text-sm text-center mb-3">
            I am
          </h2>
          <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-3 gap-2">
            {RoleData.map((data, index) => (
              <div
                key={index}
                onClick={() => setRole(data.role)}
                className={` ${
                  role === data.role
                    ? "bg-electricblue text-white border border-electricblue"
                    : "bg-white text-neutralgray border border-neutralgray"
                } ${
                  data.id === 2 ? "lg:justify-self-center" : ""
                } h-[90px] w-[90px] flex flex-col items-center justify-center rounded-full space-y-1`}
              >
                {data.id === 0 ? (
                  <BsPerson className="text-4xl" />
                ) : (
                  <Image
                    src={data.icon}
                    alt="persons"
                    width={40}
                    height={40}
                    className="w-[45px] h-[40px]"
                    style={{
                      filter: role === data.role ? "invert(1)" : "invert(0.3)",
                    }}
                  />
                )}
                <h2 className="text-xs">{data.role}</h2>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Form Section */}
      {!loginForm ? (
        <div className="mt-8 lg:w-[70%] w-full space-y-5 2xl:h-[65%] xl:h-[80%] flex flex-col items-center 2xl:justify-start xl:justify-start gap-y-5">
          <SignUpForm />
        </div>
      ) : (
        <div className="lg:w-[40%] w-full 2xl:h-[70%] h-[80%] ">
          <LoginForm />
        </div>
      )}
    </div>
  );
}
