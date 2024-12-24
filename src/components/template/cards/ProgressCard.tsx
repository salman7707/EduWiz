import React from "react";

export default function ProgressCard() {
  return (
    <div className="w-full rounded-2xl bg-white shadow-md hover:shadow-xl">
      <div className="px-6 py-4 space-y-3">
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <h2 className="text-neutralgray text-base font-medium">
              Today Present Students
            </h2>
            <h2 className="text-blue text-base font-semibold">0%</h2>
          </div>
          <div className="bg-gray-300 border rounded-md py-[2px]"></div>
        </div>

        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <h2 className="text-neutralgray text-base font-medium">
              Today Present Employees
            </h2>
            <h2 className="text-red-500 text-base font-semibold">0%</h2>
          </div>
          <div className="bg-gray-300 border rounded-md py-[2px]"></div>
        </div>

        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <h2 className="text-neutralgray text-base font-medium">
              This Month Fee Collection
            </h2>
            <h2 className="text-blue text-base font-semibold">0%</h2>
          </div>
          <div className="bg-gray-300 border rounded-md py-[2px]"></div>
        </div>
      </div>
    </div>
  );
}
