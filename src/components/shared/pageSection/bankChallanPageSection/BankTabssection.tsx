import React from "react";

export default function BankTabssection({
  button,
  setButton,
}: {
  button: string;
  setButton: (value: string) => void;
}) {
  return (
    <div className="gap-x-2 flex items-center md:ml-6 ml-4 translate-y-[1px] z-10">
      <div
        onClick={() => setButton("student")}
        className={`${
          button === "student"
            ? "bg-white text-darkblue font-semibold md:px-3 px-1 md:text-sm text-xs"
            : "bg-gray-200 text-lightblack font-medium md:px-2 px-1 md:text-xs text-[10px] py-2 "
        } border cursor-pointer border-t border-gray-400 border-b-0 rounded-t-sm text-center py-2 md:py-1.5 `}
      >
        Student Wise
      </div>
      <div
        onClick={() => setButton("class")}
        className={`${
          button === "class"
            ? "bg-white text-darkblue font-semibold md:px-3 px-1 md:text-sm text-xs"
            : "bg-gray-200 text-lightblack font-medium md:px-2 px-1 md:text-xs text-[10px] py-2 "
        } border cursor-pointer border-t border-gray-400 border-b-0 rounded-t-sm text-center py-2 md:py-1.5 `}
      >
        Class Wise
      </div>
      <div
        onClick={() => setButton("family")}
        className={`${
          button === "family"
            ? "bg-white text-darkblue font-semibold md:px-3 px-1 md:text-sm text-xs"
            : "bg-gray-200 text-lightblack font-medium md:px-2 px-1 md:text-xs text-[10px] py-2 "
        } border cursor-pointer border-t border-gray-400 border-b-0 rounded-t-sm text-center py-2 md:py-1.5 `}
      >
        Family Wise
      </div>
    </div>
  );
}
