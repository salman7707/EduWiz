"use client";
import ChallanForm from "@/components/template/form/ChallanForm";
import FeeChalanClass from "@/lib/FeeChalanClass";
import FeeChalanFamily from "@/lib/FeeChalanFamily";
import FeeChalanStudents from "@/lib/FeeChalanStudent";
import React, { useState } from "react";
import BankTabssection from "./BankTabssection";

export default function BankChallanSection() {
  const [button, setButton] = useState("student");
  return (
    <div className="lg:w-[69%] w-full max-w-full mx-auto flex flex-col items-start mt-6">
      {/* Buttons */}
      <BankTabssection button={button} setButton={setButton} />
      {button === "student" ? (
        <ChallanForm forSection="Student" inputsData={FeeChalanStudents} />
      ) : button === "class" ? (
        <ChallanForm forSection="Class" inputsData={FeeChalanClass} />
      ) : (
        <ChallanForm forSection="Family" inputsData={FeeChalanFamily} />
      )}
    </div>
  );
}
