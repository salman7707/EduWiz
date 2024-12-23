import React from "react";
import CollectFeeFamily from "./CollectFeeFamily";
import FamilyFee from "@/lib/collectFamilyFee";
import CollectSearchsection from "./CollectSearchsection";
import ScanPaidChallan from "./ScanPaidChallan";

export default function CollectionSearchAndFee() {
  return (
    <div>
      <CollectSearchsection
        heading="Collect Fees for single student"
        placeholder="Search Students"
      />
      <div className="py-8">
        <CollectFeeFamily
          heading="Collect Fees for family"
          InputData={FamilyFee}
        />
      </div>
      <div className="w-full ">
        <ScanPaidChallan heading="Scan Paid Challan Slip" />
      </div>
    </div>
  );
}
