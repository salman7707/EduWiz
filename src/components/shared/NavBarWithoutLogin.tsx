import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { useSelector } from "react-redux";
import { initialValuesTypes } from "@/lib/store/authSlice";
import Image from "next/image";
import { usePathname } from "next/navigation";
import IMAGES from "../../../public/images";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

export default function NavBarWithoutLogin() {
  const [navOpen, SetNavOpen] = useState(false);
  const { UserLoggedIn } = useSelector(
    (state: { auth: initialValuesTypes }) => state.auth
  );
  const Pathname = usePathname();
  return (
    <nav
      className={` flex lg:flex-row flex-col justify-between items-center py-0 ${
        UserLoggedIn ? "w-full ml-[44px]" : "max-w-[1173px]"
      }  mx-auto w-full xl:px-0 lg:px-0 px-2`}
    >
      {/* IMG Logo Section */}

      <div
        className={`flex items-center justify-between h-full ${
          UserLoggedIn ? "xl:w-[20%] lg:w-[20%] " : "w-full"
        } `}
      >
        <Link href="/">
          <Image
            src={UserLoggedIn && Pathname !== "/" ? IMAGES.CLOGO : IMAGES.LOGO}
            alt="eSkooly Logo"
            width={120}
            height={75}
            className="h-[70px] py-3 px-2"
          />
        </Link>
        <div className="lg:hidden block" onClick={() => SetNavOpen(!navOpen)}>
          {!navOpen ? (
            <GiHamburgerMenu className="text-white text-2xl" />
          ) : (
            <IoClose className="text-white text-3xl" />
          )}
        </div>
      </div>

      <div
        className={`lg:flex hidden lg:flex-row flex-col items-center justify-between w-full lg:gap-y-0 gap-y-4 lg:py-0 py-4`}
      >
        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8 text-white">
          <Link
            href="https://knowledgebase.eskooly.com"
            className="hover:text-gray-300"
          >
            Help
          </Link>
        </div>

        {/* Buttons */}
        <div className="flex lg:flex-row items-center justify-center flex-col lg:gap-x-4 lg:gap-y-0 gap-y-4">
          <Link href="/signup">
            <Button
              variant={"blue"}
              size={"lg"}
              className="rounded-3xl font-extralight"
            >
              Sign Up
            </Button>
          </Link>
          <Link href="/login">
            <Button
              variant={"white"}
              size={"lg"}
              className="rounded-3xl font-extralight"
            >
              Login
            </Button>
          </Link>
        </div>
      </div>
      {navOpen && (
        <div
          className={`flex lg:hidden lg:flex-row flex-col items-center justify-between w-full lg:gap-y-0 gap-y-4 lg:py-0 py-4`}
        >
          {/* Navigation Links */}
          <div className="flex space-x-8 text-white">
            <Link
              href="https://knowledgebase.eskooly.com"
              className="hover:text-gray-300"
            >
              Help
            </Link>
          </div>

          {/* Buttons */}
          <div className="flex lg:flex-row items-center justify-center flex-col lg:gap-x-4 lg:gap-y-0 gap-y-4">
            <Link href="/signup">
              <Button variant={"blue"} size={"lg"} className="rounded-3xl">
                Sign Up
              </Button>
            </Link>
            <Link href="/login">
              <Button variant={"white"} size={"lg"} className="rounded-3xl">
                Login
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
