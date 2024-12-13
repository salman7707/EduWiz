import React from "react";

export default function loading() {
  return (
    <div className="absolute z-50 inset-0 bg-black/60 w-full h-full flex items-start justify-start overflow-hidden">
      <div className="border-t-4 border-blue w-[50%] scroll-infinity"></div>
    </div>
  );
}
