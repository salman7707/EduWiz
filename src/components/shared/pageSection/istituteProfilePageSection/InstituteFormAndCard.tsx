import ProfileViewCard from "@/components/template/cards/profileViewCard";
import InstituteForm from "@/components/template/form/InstituteForm";
import ProfileView from "@/lib/ProfileView";
import React from "react";

export default function InstituteFormAndCard() {
  return (
    <div>
      {/* Profile Section */}
      <div className="grid lg:grid-cols-[68%_32%] grid-cols-1 gap-x-6 pt-4 md:px-4">
        {/* First Section */}
        <div>
          {/* Heading Section */}
          <div className="pb-5 px-2">
            <h2 className="text-medblacktext text-3xl font-semibold text-center">
              Update Profile
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
          {/* Form */}
          <InstituteForm />
        </div>
        {/* Second Section */}
        <div>
          <ProfileViewCard inputFields={ProfileView} />
        </div>
      </div>
    </div>
  );
}
