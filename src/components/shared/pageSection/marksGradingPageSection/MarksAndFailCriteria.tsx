"use client";
import React, { useState } from "react";
import MarksGradingForm from "./MarksGradingFormSection";
import FailCriteriaForm from "./FailCriteriaForm";
import TabsSection from "./TabsSection";

export default function MarksAndFailCriteria() {
  const [button, setButton] = useState<"marks" | "fail">("marks");
  return (
    <div className="xl:w-[69%] w-full max-w-full mx-auto flex flex-col items-start mt-6">
      {/* Buttons Section */}
      <TabsSection button={button} setButton={setButton} />
      {/* Content Section */}
      {button === "marks" ? <MarksGradingForm /> : <FailCriteriaForm />}
    </div>
  );
}
