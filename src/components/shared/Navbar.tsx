"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import IMAGES from "../../../public/images";
import { Button } from "../ui/button";

export default function Navbar() {
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
        state === true ? " drop-shadow-2xl" : "shadow-none"
      } shadow-sm left-0 right-0 z-10 bg-gradient-to-r from-[#09327f] to-[#06183b]`}
    >
      {/* Navbar */}
      <nav className=" flex justify-between items-center py-0 max-w-[1173px] mx-auto w-full xl:px-0 px-6">
        {/* Brand */}
        <Link href="/">
          <Image
            src={IMAGES.LOGO}
            alt="eSkooly Logo"
            width={110}
            height={75}
            className="h-16 py-[10px] px-2"
          />
        </Link>

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
        <div className="flex space-x-4">
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
      </nav>
    </div>
  );
}
