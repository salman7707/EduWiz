import Image from "next/image";
import React from "react";
import IMAGES from "../../../../../public/images";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ManagingSecType {
  page?: string;
  signIn?: boolean;
  LoginBtn?: boolean;
  bgimg?: string;
  heading?: string;
  paragraph?: string;
}

export default function ManagingSection({
  signIn,
  page,
  LoginBtn = true,
  bgimg,
  heading,
  paragraph,
}: ManagingSecType) {
  return (
    <div
      className={`lg:flex flex-col hidden w-full ${
        signIn ? "bg-electricblue" : "bg-white"
      } bg-cover bg-center items-center justify-start h-full`}
    >
      {/* Login Btn */}
      {LoginBtn && (
        <div className="flex items-center justify-end px-4 py-4 gap-x-4 w-full">
          <h2 className="text-gray-700 text-sm">Already have an account ?</h2>
          <Link href={"/login"}>
            <Button
              size={"default"}
              variant={"blue"}
              className="rounded-full h-[30px] px-6"
            >
              Login
            </Button>
          </Link>
        </div>
      )}

      <div className="flex flex-col items-center justify-center pt-20">
        <div className="w-full">
          <h2
            className={`text-4xl font-bold ${
              page === "login" ? "text-white " : "text-black"
            }  w-2/3 mx-auto text-center`}
          >
            {heading}
          </h2>
          <p
            className={`${
              page === "login"
                ? "text-white text-base w-[90%]"
                : "w-2/3 text-lg text-neutralgray"
            }  text-center  mt-4  mx-auto`}
          >
            {paragraph}
          </p>
          {page === "login" && (
            <div className="flex items-center justify-center my-5">
              <Link href={"/"}>
                <Button className="bg-transparent hover:bg-white hover:text-black text-white border-2 rounded-3xl border-white">
                  Get started
                </Button>
              </Link>
            </div>
          )}
        </div>
        <div className="w-full h-full">
          <Image
            src={bgimg || IMAGES.SIGNUPBG}
            alt="signup"
            width={4000}
            height={4000}
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
