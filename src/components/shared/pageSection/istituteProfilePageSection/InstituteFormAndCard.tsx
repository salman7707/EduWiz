import ProfileViewCard from "@/components/template/cards/profileViewCard";
import InstituteForm from "@/components/template/form/InstituteForm";
import RequireAndOptionalHeading from "@/components/template/heading/RequireAndOptionalHeading";
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
          <RequireAndOptionalHeading heading="Update Profile" />
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
