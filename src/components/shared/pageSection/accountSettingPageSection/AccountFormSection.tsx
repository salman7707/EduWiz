import AccountDetailCard from "@/components/template/cards/AccountDetailCard";
import AccountSettingForm from "@/components/template/form/AccountSettingForm";
import React from "react";

export default function AccountFormSection() {
  return (
    <div className="grid md:grid-cols-[55%_42%] grid-cols-1 gap-y-8 md:items-start items-center justify-center md:gap-x-12 md:px-5 py-8">
      <div className="md:w-full w-[94%]">
        <AccountSettingForm />
      </div>
      <AccountDetailCard />
    </div>
  );
}
