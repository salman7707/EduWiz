import AccountDetailCard from "@/components/template/cards/AccountDetailCard";
import AccountSettingForm from "@/components/template/form/AccountSettingForm";
import React from "react";

export default function AccountFormSection() {
  return (
    <div className="grid grid-cols-[55%_42%] items-start justify-center gap-x-12 px-5 py-8">
      <AccountSettingForm />
      <AccountDetailCard />
    </div>
  );
}
