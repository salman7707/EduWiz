import React from "react";
import AddHeadingInputsSection from "./AddHeadingInputsSection";
import addIncome from "@/lib/addIncome";

export default function AddIncomeSection() {
  return (
    <div className="lg:w-[30%] md:w-[45%] w-full mx-auto">
      <AddHeadingInputsSection heading="Add Income" InputData={addIncome} />
    </div>
  );
}
