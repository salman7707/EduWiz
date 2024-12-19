import React from "react";
import ChartAccountSearchSection from "./ChartAccountSearchSection";
import ChartDataSection from "./ChartDataSection";

export default function ChartSearchAndDataSection() {
  return (
    <div className=" grid grid-cols-[33%_65%] items-start justify-between gap-x-3 py-5">
      <ChartAccountSearchSection />
      <ChartDataSection />
    </div>
  );
}
