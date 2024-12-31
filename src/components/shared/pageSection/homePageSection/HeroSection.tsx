import Image from "next/image";
import Link from "next/link";
import IMAGES from "../../../../../public/images";
import Navbar from "../../Navbar";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center justify-center z-0">
      <div className="h-auto relative lg:pb-28 w-full bg-cover bg-gradient-to-r from-gradientlightblue to-gradientdarkblue">
        {/* Custom Shape Divider */}
        <div className="h-auto w-full max-w-[1173px] mx-auto relative z-10">
          <Navbar />

          {/* Hero Section */}
          <div className="text-center pt-28 z-0 pb-16 lg:w-[60%] mx-auto">
            <h1 className="md:text-[53px] leading-tight text-xl font-semibold text-white px-4">
              Free Online School Management Software
            </h1>
            <p className="text-[#9295D3] mt-4 w-[80%] text-sm mx-auto">
              Now you can manage your school, college, or any educational center
              with eSkooly. Its 100% free for a lifetime with no limitations.
            </p>
            <div className="mt-8 flex md:flex-row flex-col justify-center items-center gap-3 ">
              <Button variant={"blue"} size={"lg"} className="font-extralight">
                <Link href="/signup">Sign Up Now, Its Free</Link>
              </Button>
              <Button variant={"white"} size={"lg"} className="font-extralight">
                <Link href="#product" className="">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>

          {/* Hero Images */}
          <div className="relative">
            <Image
              src={IMAGES.A6}
              alt="Mobile Mockup"
              width={60}
              height={80}
              className="hidden md:block absolute inset-0 right-[71%] animate-vertically1 animate top-20 left-[29%]"
            />
            <Image
              src={IMAGES.HEROBG}
              alt="Laptop Mockup"
              width={600}
              height={400}
              className="mx-auto "
            />
            <Image
              src={IMAGES.MOBILE1}
              alt="Mobile Mockup"
              width={130}
              height={240}
              className=" absolute inset-0 md:left-[58%] md:w-[130px] md:h-[210px] w-[75px] h-[100px] animate-vertically animate top-10 md:right-[45%] left-[65%] right-[35%]"
            />
            <Image
              src={IMAGES.A4}
              alt="Mobile Mockup"
              width={60}
              height={80}
              className=" hidden md:block absolute inset-0 left-[67%] animate-vertically1 animate top-20 right-[33%]"
            />
          </div>
        </div>
        <div className="z-0 w-full h-full">
          <Image
            src={IMAGES.TRI1}
            alt="shape"
            width={60}
            height={60}
            className="absolute right-[47%] top-[27%] animate-spinn"
          />
        </div>
      </div>

      <div className="bg-center z-0 bg-cover w-full h-auto bg-lightblue">
        <svg
          className="block"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#09327f" />
              <stop offset="100%" stopColor="#06183b" />
            </linearGradient>
          </defs>
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="url(#waveGradient)"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
