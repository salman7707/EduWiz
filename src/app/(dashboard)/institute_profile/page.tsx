import HeadingSection from "@/components/shared/pageSection/addStudentPageSection/HeadingSection";
import InstituteForm from "@/components/shared/pageSection/istituteProfilePageSection/InstituteFormAndCard";
import React from "react";

export default function page() {
  return (
    <div className="px-6 py-8">
      <HeadingSection
        forpage="General Settings"
        heading="Institute Profile"
        buttonsection={false}
      />
      <InstituteForm />
    </div>
  );
}
