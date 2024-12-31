import { MoreFeatureCardType } from "@/types/MoreFeature";
import Image from "next/image";
import IMAGES from "../../../../public/images";

const MoreFeatureCard = ({ icon, title, description }: MoreFeatureCardType) => {
  return (
    <div className="w-full p-4 text-center">
      <div className="flex justify-center mb-4">
        <Image src={icon || IMAGES.COURT} alt="icons" width={40} height={40} style={{
          filter:"invert(1)"
        }}/>
      </div>
      <h3 className="text-2xl text-white font-semibold">{title}</h3>
      <p className="text-sm text-gray-200 mt-2">{description}</p>
    </div>
  );
};

export default MoreFeatureCard;
