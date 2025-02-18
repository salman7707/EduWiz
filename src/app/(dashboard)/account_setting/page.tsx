import AccountFormSection from "@/components/shared/pageSection/accountSettingPageSection/AccountFormSection";
import AccountSettingHeader from "@/components/shared/pageSection/accountSettingPageSection/AccountSettingHeader";
import React from "react";

export default function page() {
  return (
    <div className="py-8 md:px-8 px-4">
      <AccountSettingHeader />
      <AccountFormSection />
    </div>
  );
}
