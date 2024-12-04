import Image from "next/image";
import React from "react";
import IMAGES from "../../../../public/images";

export default function WellcomeAdminCard() {
  return (
    <div className="w-auto bg-lightpink rounded-2xl flex relative">
      <div className="px-12 py-4 space-y-1">
        <h2 className="text-pink text-lg font-semibold ">
          Welcome to Admin Dashboard
        </h2>
        <h2 className="text-gray-500 text-base font-medium ">
          Your Account is not Verified yet!
        </h2>
        <h2 className="text-gray-500 text-base font-medium ">
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
          className="w-[200px] h-[120px] absolute -top-6"
        />
      </div>
    </div>
  );
}
