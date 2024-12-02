"use client";
import React from "react";
import ManagingSection from "../signupPageSection/ManagingSection";
import LeftSection from "../signupPageSection/LeftSection";
import IMAGES from "../../../../../public/images";

export default function SignInSection() {
  return (
    <div className="grid lg:grid-cols-[59%_41%] grid-cols-1 w-full h-[100vh] ">
      <LeftSection
        imgC={true}
        bgColor="white"
        roleSection={true}
        loginForm={true}
      />
      <ManagingSection
        signIn={true}
        LoginBtn={false}
        heading="Start managing now"
        paragraph="Stop struggling with common tasks and focus on the real choke points. Discover a full featured & 100% Free School management platform."
        bgimg={IMAGES.LOGINBG}
        page="login"
      />
    </div>
  );
}
