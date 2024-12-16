import Image from "next/image";
import React from "react";
import IMAGES from "../../../../public/images";

export default function WellcomeAdminCard() {
  return (
    <div className="w-auto bg-lightpink rounded-2xl flex relative">
      <div className="xl:px-12 px-6 py-4 space-y-1">
        <h2 className="text-pink text-lg font-semibold ">
          Welcome to Admin Dashboard
        </h2>
        <h2 className="text-gray-500 xl:text-base text-sm font-medium ">
          Your Account is not Verified yet!
        </h2>
        <h2 className="text-gray-500 xl:text-base text-sm font-medium ">
          Please Verify your email address.
          <span className="text-blue">Verify now!</span>
        </h2>
      </div>
      <div>
        <Image
          src={IMAGES.ADMINMASSAGE}
          alt="admin-massage"
          width={150}
          height={150}
          className="md:block hidden xl:w-[200px] xl:h-[120px] w-[160px] h-[90px] absolute xl:-top-6 top-0 right-1"
        />
      </div>
    </div>
  );
}
