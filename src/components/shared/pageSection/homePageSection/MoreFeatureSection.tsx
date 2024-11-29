import MoreFeature from "@/lib/MoreFeature";
import MoreFeatureCard from "@/components/template/cards/MoreFeatureCard";
import IMAGES from "../../../../../public/images";
import Image from "next/image";

const MoreFeatureSection = () => {
  return (
    <section className="bg-cover bg-no-repeat bg-blue">
      <div className="mx-auto text-center">
        <div className="w-full flex items-center justify-between">
          
          <div className="w-full lg:max-w-[40%] max-w-[100%] md:px-10 px-4 flex justify-start items-center">
            <Image
              src={IMAGES.GLASSES}
              width={50}
              height={30}
              alt={"Glasses"}
              style={{
                filter: "invert(1)",
              }}
              className="mb-6 mr-2"
            />
            <h2 className="text-lg text-white ">See more features</h2>
          </div>

          <div className="lg:w-[60%] lg:block hidden h-28 bg-gradient-to-r from-gradientlightblue to-gradientdarkblue"></div>
        </div>
      </div>

      <div className="max-w-[1176px] mx-auto w-full">
        <div className="my-8">
          <div className="relative text-center">
            <div className="absolute -top-10 left-0 right-0 bottom-0 flex justify-center items-center text-white text-4xl">
              <Image
                src={IMAGES.GLASSES}
                width={180}
                height={120}
                alt={"Glasses"}
                style={{
                  filter: "invert(1)",
                }}
                className="opacity-15 "
              />
            </div>
            <h2 className="text-base text-white font-bold">THATS NOT ALL</h2>
            <h3 className="text-2xl text-white font-semibold mt-2">
              All Features in one place
            </h3>
          </div>
        </div>
        <div className="grid lg:grid-cols-4 grid-cols-1">
          {MoreFeature.map((feature, index) => (
            <MoreFeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>

      <div className="mx-auto text-center">
        <div className="w-full flex flex-row-reverse items-center justify-between">
          <div className="w-full max-w-[40%] px-10 flex justify-start items-center"></div>
          <div className="lg:block hidden w-[60%] h-28 bg-gradient-to-r from-gradientlightblue to-gradientdarkblue"></div>
        </div>
      </div>
    </section>
  );
};

export default MoreFeatureSection;
