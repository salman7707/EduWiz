import React from "react";
import AddHeadingInputsSection from "../addIncomePageSection/AddHeadingInputsSection";
import addExpense from "@/lib/addexpense";

export default function AddExpenseSection() {
  return (
    <div className="lg:w-[30%] md:w-[45%] w-full mx-auto">
      <AddHeadingInputsSection heading="Add Expense" InputData={addExpense} />
    </div>
  );
}
