import Link from "next/link";
import Image from "next/image";
import IMAGES from "../../../public/images";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";

const Footer = () => {
  return (
    <footer className="py-10 bg-gradientdarkblue">
      <div className="w-full max-w-[1176px] mx-auto xl:px-0 px-5">
        <div className="flex flex-wrap justify-between pt-4 pb-3">
          {/* Column 1 */}
          <div className="w-full md:w-1/3 px-4">
            <div className="pb-6">
              <Image
                src={IMAGES.LOGO}
                alt="eSkooly Logo"
                width={100}
                height={50}
                className="mb-4"
              />
              <p className="text-neutralgray text-sm">
                eSkooly is the worlds best and #1 ranked free online school
                management software. Our school management software has more
                features than any school software in the market.
              </p>
            </div>
            <p className="text-neutralgray text-sm">
              Copyright &copy; {new Date().getFullYear()} eSkooly (SMC Private)
              Ltd. - All rights reserved.
            </p>
          </div>

          {/* Column 2 */}
          <div className="w-full md:w-2/3 flex flex-wrap justify-end px-4">
            <div className="w-[25%] px-4">
              <h4 className="font-semibold text-white mb-4 capitalize">
                eSkooly
              </h4>
              <ul className="space-y-2 text-neutralgray text-sm">
                <li>
                  <Link
                    href="https://eskooly.com"
                    className="hover:text-blue-500"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-500">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/signup" className="hover:text-blue-500">
                    Get started
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://knowledgebase.eskooly.com"
                    className="hover:text-blue-500"
                  >
                    Help
                  </Link>
                </li>
              </ul>
            </div>

            <div className="w-[30%] px-4">
              <h4 className="font-semibold text-white mb-4">Terms</h4>
              <ul className="space-y-2 text-neutralgray text-sm">
                <li>
                  <Link
                    href="/terms&conditions"
                    className="hover:text-blue-500"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/privacypolicy" className="hover:text-blue-500">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/saasterms" className="hover:text-blue-500">
                    SaaS Services
                  </Link>
                </li>
              </ul>
            </div>

            <div className="w-[23%] flex flex-col justify-start items-center">
              <ul className="space-y-4 ">
                <li>
                  <Link href="https://play.google.com/store/apps/details?id=com.eskooly.app">
                    <Image
                      src={IMAGES.DOWNLOAD}
                      alt="Google Play"
                      width={150}
                      height={45}
                    />
                  </Link>
                </li>
                <li>
                  <Link href="https://apps.apple.com/pk/app/eskooly/id6448073356">
                    <Image
                      src={IMAGES.APPLE}
                      alt="App Store"
                      width={150}
                      height={45}
                    />
                  </Link>
                </li>
              </ul>
              <div className="flex mt-4 text-xl justify-center gap-x-4 text-neutralgray">
                <Link
                  href="http://www.facebook.com/eskooly/"
                  className="hover:text-blue-500"
                >
                  <FaFacebook />
                </Link>
                <Link
                  href="https://www.twitter.com/eskooly/"
                  className="hover:text-blue-500"
                >
                  <FaTwitter />
                </Link>
                <Link
                  href="https://g.page/r/CavgvScb5-o7EA0"
                  className="hover:text-blue-500"
                >
                  <FaGoogle />
                </Link>
                <Link
                  href="https://www.youtube.com/channel/UCJ1A8Xa4u31H2o7wzEhimRg"
                  className="hover:text-blue-500"
                >
                  <TfiYoutube  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
