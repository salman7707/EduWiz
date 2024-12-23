import React from "react";
import { TfiDownload } from "react-icons/tfi";

export default function AddBalanceorClearListCard() {
  return (
    <div className="bg-cardfirst rounded-2xl text-white px-7 py-3 flex flex-col items-center justify-center gap-y-4">
      <TfiDownload className="text-4xl" />
      <h2 className="text-[16px] leading-tight text-center">
        Add Balance
        <br /> In Accounts
      </h2>
      <h2 className="text-[16px] leading-tight text-center">AND</h2>
      <h2 className="text-[16px] leading-tight text-center">Clear List</h2>
    </div>
  );
}
