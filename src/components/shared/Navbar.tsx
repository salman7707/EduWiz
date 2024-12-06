"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { initialValuesTypes } from "@/lib/store/authSlice";
import NavBarWithoutLogin from "./NavBarWithoutLogin";
import NAvBarWithLogin from "./NAvBarWithLogin";
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
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { UserLoggedIn } = useSelector(
    (state: { auth: initialValuesTypes }) => state.auth
  );

  return (
    <div
      className={`w-full fixed  z-20 top-0 ${
        state === true ? " shadow-2xl" : "shadow-md"
      } shadow-sm left-0 right-0 lg:h-[75px] h-auto ${
        UserLoggedIn
          ? "bg-white shadow-2xl"
          : "bg-gradient-to-r from-[#09327f] to-[#06183b]"
      } `}
    >
      {/* Navbar */}
      {!UserLoggedIn ? <NavBarWithoutLogin /> : <NAvBarWithLogin />}

      {/* <nav
        className={` flex lg:flex-row flex-col justify-between items-center py-0 ${
          UserLoggedIn ? "w-full ml-[44px]" : "max-w-[1173px]"
        }  mx-auto w-full xl:px-0 px-0`}
      >
        {/* IMG Logo Section */}

      {/* <div
          className={`flex items-center justify-between h-full ${
            UserLoggedIn ? "xl:w-[20%] lg:w-[20%] " : "w-full"
          } `}
        >
          <Link href="/">
            <Image
              src={
                UserLoggedIn && PathName !== "/" ? IMAGES.CLOGO : IMAGES.LOGO
              }
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
        </div> */}

      {/* When user are not loggedin then it will shown  */}

      {/* on Mobile Screen without login */}
      {/* {navOpen && (
          <div
            className={`flex lg:hidden lg:flex-row flex-col items-center justify-between w-full lg:gap-y-0 gap-y-4 lg:py-0 py-4`}
          >
            {/* Navigation Links */}
      {/* <div className="flex space-x-8 text-white">
              <Link
                href="https://knowledgebase.eskooly.com"
                className="hover:text-gray-300"
              >
                Help
              </Link>
            </div> */}

      {/* Buttons */}
      {/* <div className="flex lg:flex-row items-center justify-center flex-col lg:gap-x-4 lg:gap-y-0 gap-y-4">
              <Link href="/signup">
                <Button variant={"blue"} size={"lg"} className="rounded-3xl">
                  Sign Up
                </Button>
              </Link>
              <Link href="/signin">
                <Button variant={"white"} size={"lg"} className="rounded-3xl">
                  Login
                </Button>
              </Link>
            </div>
          </div> */}
      {/* </nav>  */}
    </div>
  );
}
