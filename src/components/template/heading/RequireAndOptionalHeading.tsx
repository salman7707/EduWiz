import React from "react";

export default function RequireAndOptionalHeading({
  heading,
  headingsize,
}: {
  heading: string;
  headingsize?: string;
}) {
  return (
    <div className="pb-5 px-2">
      <h2
        className={`text-medblacktext ${
          headingsize === "small" ? "text-xl" : "text-3xl"
        }  font-semibold text-center`}
      >
        {heading}
      </h2>
      <div className="flex items-center justify-center gap-x-3">
        <div className="flex items-center justify-center gap-x-1">
          <div className="bg-gradient-to-l to-cardfourth from-lightpurplegradient w-5 h-[7px] rounded-md"></div>
          <div className="text-xs text-lightblacktext ">Required*</div>
        </div>
        <div className="flex items-center justify-center gap-x-1">
          <div className="bg-slate w-5 h-[7px] rounded-md"></div>
          <div className="text-xs text-medblacktext ">Optional</div>
        </div>
      </div>
    </div>
  );
}
