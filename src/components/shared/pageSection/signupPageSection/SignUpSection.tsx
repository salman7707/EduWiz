"use client";
import ManagingSection from "./ManagingSection";
import LeftSection from "./LeftSection";
import IMAGES from "../../../../../public/images";

export default function SignUpSection() {
  return (
    <div className="grid lg:grid-cols-[33%_67%] grid-cols-1 w-full h-[100vh]">
      {/* Form Section */}
      <LeftSection />
      {/* Managing Section */}
      <ManagingSection heading="Start managing free now !" paragraph="eSkooly is a 100% free online Institute management software for a lifetime with no limitations." bgimg={IMAGES.SIGNUPBG} />
    </div>
  );
}
