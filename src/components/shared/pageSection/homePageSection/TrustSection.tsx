import Image from "next/image";
import Link from "next/link";
import IMAGES from "../../../../../public/images";
import { Button } from "@/components/ui/button";
import clients from "@/lib/ClientPicture";

const TrustSection = () => {
  return (
    <section className="py-8 bg-gradient-to-r from-gradientlightblue to-gradientdarkblue">
      <div className="max-w-[1176px] mx-auto px-4 py-14">
        {/* Title */}
        <div className="text-center mb-8 relative w-[50%] mx-auto py-4">
          <h2 className="text-base font-normal text-white">We Build Trust.</h2>
          <p className="text-base font-semibold text-white">
            <b>45K+ Schools</b> use our product.
          </p>
          <div className=" flex items-center justify-center absolute inset-0">
            <Image
              src={IMAGES.DOMAIN}
              alt="domain"
              width={200}
              height={150}
              className="opacity-10"
            />
          </div>
        </div>

        {/* Grid */}
        <div className="grid lg:gap-8 gap-y-3 w-full lg:py-6">
          <div className="grid lg:grid-cols-5 grid-cols-1 items-center w-[80%] mx-auto ">
            {clients.map((client, index) => (
              <div
                key={index}
                className={`flex justify-center w-full h-full gap-y-3 ${
                  client.borderr === true ? "lg:border-r-[1.5px]" : ""
                } ${
                  client.borderb === true ? "lg:border-b-[1.5px]" : ""
                } border-blue`}
              >
                <Image
                  src={client.src}
                  alt={client.alt}
                  width={110}
                  height={110}
                  className="py-4 xl:w-[120px] xl:h-[120px] lg:w-[100px] lg:h-[100px] md:w-[180px] md:h-[110px] w-[130px] h-auto"
                />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Link
            href="/signup"
            className="bg-blue-700 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition"
          >
            <Button variant={"blue"} className="rounded-3xl">
              Get started Now
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
