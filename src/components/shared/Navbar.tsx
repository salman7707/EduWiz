"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import IMAGES from "../../../public/images";
import { Button } from "../ui/button";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { initialValuesTypes, logout } from "@/lib/store/authSlice";
import { usePathname } from "next/navigation";
import { IoMdSearch } from "react-icons/io";
import { AiOutlineExpand } from "react-icons/ai";
import { HiShoppingBag } from "react-icons/hi2";
import { FaMessage } from "react-icons/fa6";
import { IoIosNotifications } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";
import { changeNavState } from "@/lib/store/navSlice";
import { CiSettings } from "react-icons/ci";
import { FaBuildingColumns } from "react-icons/fa6";
import { CiLock } from "react-icons/ci";
export default function Navbar() {
  const PathName = usePathname();
  const [navOpen, SetNavOpen] = useState(false);
  const [state, setState] = useState(false);
  const [dropdown, setDropdown] = useState(false);

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

  const dispatch = useDispatch();
  const { UserLoggedIn } = useSelector(
    (state: { auth: initialValuesTypes }) => state.auth
  );
  const handleLogout = () => {
    setTimeout(() => {
      dispatch(logout());
    }, 3000);
  };

  return (
    <div
      className={`w-full fixed top-0 ${
        state === true ? " shadow-2xl" : "shadow-md"
      } shadow-sm left-0 right-0 z-10 h-[75px] ${
        UserLoggedIn
          ? "bg-white shadow-2xl"
          : "bg-gradient-to-r from-[#09327f] to-[#06183b]"
      } `}
    >
      {/* Navbar */}
      <nav
        className={` flex lg:flex-row flex-col justify-between items-center py-0 ${
          UserLoggedIn ? "w-full ml-[44px]" : "max-w-[1173px]"
        }  mx-auto w-full xl:px-0 px-0`}
      >
        {/* Brand */}
        <div
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
        </div>
        {/* When user are not loggedin then it will shown  */}
        {!UserLoggedIn ? (
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
              <Link href="/login">
                <Button variant={"white"} size={"lg"} className="rounded-3xl">
                  Login
                </Button>
              </Link>
            </div>
          </div>
        ) : (
          <div className=" w-[95%] flex justify-start ">
            {/*  */}
            <div className="flex justify-start items-center gap-x-10 xl:w-[30%] lg:w-[18%]">
              <div
                className="flex items-end justify-center"
                onClick={() => dispatch(changeNavState())}
              >
                <GiHamburgerMenu className="text-black text-xl cursor-pointer  " />
              </div>
              <div className="flex items-center justify-center gap-x-4">
                <IoMdSearch className="text-gray-700 text-2xl" />
                <AiOutlineExpand className="text-gray-700 text-xl" />
              </div>
            </div>
            {/*  */}
            <div className="xl:w-[60%]  flex items-center justify-end  gap-x-4">
              <div className="flex items-center gap-x-3">
                <Image
                  src={IMAGES.APPLE}
                  width={100}
                  height={100}
                  alt="download"
                  className="w-[130px] h-[40px]"
                />
                <Image
                  src={IMAGES.DOWNLOAD}
                  width={100}
                  height={100}
                  alt="download"
                  className="w-[130px] h-[40px]"
                />
              </div>
              <div className="bg-neutralgray rounded-full">
                <HiShoppingBag className="text-white text-4xl p-1" />
              </div>
              <div className="flex items-center justify-center gap-x-2">
                <FaMessage className="text-black text-base" />
                <IoIosNotifications className="text-black text-2xl" />
                <FaCartShopping className="text-black text-xl" />
              </div>
              <div
                onClick={() => setDropdown(!dropdown)}
                className="flex items-center justify-center gap-x-2 cursor-pointer"
              >
                <Image
                  src={IMAGES.COURTC}
                  alt="court"
                  width={100}
                  height={100}
                  className="w-[45px] h-[40px]"
                />
                <div className="flex items-center justify-center text-lg">
                  Institute Name <MdKeyboardArrowDown />
                </div>
              </div>
              {dropdown && (
                <div className=" absolute top-[90px] right-14 bg-white pl-3 rounded pr-16 py-3">
                  <div className="space-y-4 py-0">
                    <div className="flex items-center justify-start gap-x-3 w-full pl-1">
                      <div>
                        <CiSettings className="text-2xl" />
                      </div>
                      <div className="text-black text-base flex">
                        Account Settings
                      </div>
                    </div>
                    <div className="flex items-center justify-start gap-x-3 w-full pl-2">
                      <div>
                        <FaBuildingColumns className="text-xl" />
                      </div>
                      <div className="text-black text-base flex">Profile</div>
                    </div>
                    <Link
                      href={"/login"}
                      onClick={() => handleLogout()}
                      className="cursor-pointer flex items-center justify-start gap-x-3 w-full pl-2"
                    >
                      <div>
                        <CiLock className="text-xl" />
                      </div>
                      <div className="text-black text-base flex">Logout</div>
                    </Link>
                  </div>
                  <div className="w-6 h-6 bg-white absolute -top-2 right-8 rounded-sm rotate-45"></div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* on Mobile Screen */}
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
              <Link href="/signin">
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
