import React from "react";
import { AiFillSetting } from "react-icons/ai";

export default function AccountSettingHeader() {
  return (
    <div className="bg-cardfourth w-full py-4 px-5 rounded-full text-lg font-semibold text-white flex items-center gap-x-1">
      <AiFillSetting /> Account Settings
    </div>
  );
}
