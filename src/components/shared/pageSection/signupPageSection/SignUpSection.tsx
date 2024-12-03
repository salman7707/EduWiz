"use client";
import ManagingSection from "./ManagingSection";
import IMAGES from "../../../../../public/images";
import FormSection from "./FormSection";

export default function SignUpSection() {
  return (
    <div className="grid lg:grid-cols-[33%_67%] grid-cols-1 w-full h-[100vh]">
      {/* Form Section */}
      <FormSection />
      {/* Managing Section */}
      <ManagingSection
        heading="Start managing free now !"
        paragraph="eSkooly is a 100% free online Institute management software for a lifetime with no limitations."
        bgimg={IMAGES.SIGNUPBG}
      />
    </div>
  );
}
