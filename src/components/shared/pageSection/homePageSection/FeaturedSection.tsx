// components/Features.js
import React from "react";
import FeatureCard from "@/components/template/cards/FeaturedCard";
import featuresLeft from "@/lib/featuredCardLeft";
import featuresRight from "@/lib/featuredCardRight";
import IMAGES from "../../../../../public/images";
import Image from "next/image";

const Features = () => {
  return (
    <div id="product" className="relative py-10 px-4 bg-lightblue">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          Features Of School Management Software
        </h2>
        <p className="text-gray-200 text-sm md:text-base max-w-3xl mx-auto">
          eSkooly is a complete and feature-rich school management software for
          all educational institutes. This school management software is for
          learning, administration, and management activities in schools,
          colleges, universities, tuition centers, or training centers. Our free
          school management system manages everything starting from admission to
          attendance and exams to result in cards.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          {/* Left Column */}
          <div className="space-y-10">
            {featuresLeft.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                position="left"
              />
            ))}
          </div>
          {/* Center Image */}
          <div className="flex items-center justify-center">
            <Image
              src={IMAGES.MOBILE}
              width={280}
              height={200}
              alt="School Management Software"
              className="rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>
          {/* Right Column */}
          <div className="space-y-10">
            {featuresRight.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                position="right"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
