import React from "react";
import { PiSmileySad } from "react-icons/pi";

export default function ClassAttendanceCard() {
  return (
    <div className="py-1.5 px-1.5 bg-white rounded-lg w-72 flex flex-col">
      <h2 className="text-xl text-darkblue font-semibold">Computer</h2>
      <div className="text-pink flex flex-col items-center justify-center gap-y-3">
        <PiSmileySad className="text-8xl" />
        <h2 className="text-base font-medium">
          Attendance Not Marked Yet !
        </h2>
      </div>
    </div>
  );
}
