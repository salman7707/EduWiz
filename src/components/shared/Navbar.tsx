"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import IMAGES from "../../../public/images";
import { Button } from "../ui/button";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

export default function Navbar() {
  const [navOpen, SetNavOpen] = useState(false);
  const [state, setState] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setState(true);
      } else {
        setState(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`w-full fixed top-0 ${
        state === true ? " drop-shadow-2xl shadow-2xl" : "shadow-none"
      } shadow-sm left-0 right-0 z-10 bg-gradient-to-r from-[#09327f] to-[#06183b]`}
    >
      {/* Navbar */}
      <nav className=" flex lg:flex-row flex-col justify-between items-center py-0 max-w-[1173px] mx-auto w-full xl:px-0 px-6">
        {/* Brand */}
        <div className="flex items-center justify-between w-full">
          <Link href="/">
            <Image
              src={IMAGES.LOGO}
              alt="eSkooly Logo"
              width={110}
              height={75}
              className="h-16 py-[10px] px-2"
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
              <Button variant={"blue"} size={"lg"} className="rounded-3xl">
                Sign Up
              </Button>
            </Link>
            <Link href="/bb/dashboard.php">
              <Button variant={"white"} size={"lg"} className="rounded-3xl">
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
              <Link href="/bb/dashboard.php">
                <Button variant={"white"} size={"lg"} className="rounded-3xl">
                  Login
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
