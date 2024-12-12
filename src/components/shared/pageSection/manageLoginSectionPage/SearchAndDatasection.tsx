import React from "react";
import ManageLoginDataSection from "./ManageLoginSection";
import ManageSearchSection from "./ManageSearchSection";

export default function SearchAndDatasection() {
  return (
    <div className="flex lg:flex-row flex-col items-start gap-6 py-6">
      <ManageSearchSection />
      <ManageLoginDataSection />
    </div>
  );
}
