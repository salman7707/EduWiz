import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { AiOutlineExpand } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosNotifications, IoMdSearch } from "react-icons/io";
import IMAGES from "../../../public/images";
import { HiShoppingBag } from "react-icons/hi2";
import { FaBuildingColumns, FaCartShopping, FaMessage } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CiLock, CiSettings } from "react-icons/ci";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { changeNavState } from "@/lib/store/navSlice";
import { logout } from "@/lib/store/authSlice";
import { BsThreeDots } from "react-icons/bs";
import { useRouter } from "next/navigation";

export default function NAvBarWithLogin() {
  const router = useRouter();
  const Ref = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const [dropdown, setDropdown] = useState(false);
  const [navOpen, SetNavOpen] = useState(false);
  const handleLogout = async () => {
    const response = await fetch("/api/logout", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
    });
    if (response.ok) {
      console.log("User Logout");
      dispatch(logout());
      router.push("/login");
    }
  };
  const handleclickoutside = (e: MouseEvent) => {
    if (Ref.current && !Ref.current.contains(e.target as Node)) {
      setDropdown(false);
    }
  };
  useEffect(() => {
    window.addEventListener("mousedown", handleclickoutside);
    return () => window.removeEventListener("mousedown", handleclickoutside);
  }, []);
  return (
    <nav
      className={` flex lg:flex-row flex-col justify-between items-center overflow-hidden py-0 w-[95%] lg:mx-[44px]
       mx-auto lg:px-0 px-5 ${
         navOpen ? "h-auto" : "h-[75px]"
       } transition-all duration-1000 ease-in-out `}
    >
      {/* IMG Logo Section */}

      <div
        className={`flex items-center justify-between h-full lg:w-[20%] w-full`}
      >
        <div className="flex justify-start items-center gap-x-10 xl:w-[30%] lg:w-[18%] lg:hidden">
          <div
            className="flex items-end justify-center"
            onClick={() => dispatch(changeNavState())}
          >
            <GiHamburgerMenu className="text-black text-xl cursor-pointer  " />
          </div>
        </div>
        <Link href="/">
          <Image
            src={IMAGES.CLOGO}
            alt="eSkooly Logo"
            width={120}
            height={75}
            className="h-[70px] py-3 px-2"
          />
        </Link>
        <div className="flex justify-start items-center gap-x-10 xl:w-[30%] lg:w-[18%] lg:hidden">
          <BsThreeDots
            className="text-black text-xl cursor-pointer"
            onClick={() => SetNavOpen(!navOpen)}
          />
        </div>
      </div>

      <div
        className={`lg:w-[80%] flex xl:justify-center lg:justify-end justify-start lg:my-0 my-3  `}
      >
        {/*  */}
        <div className="lg:flex hidden justify-center items-center gap-x-10 xl:w-[10%] lg:w-[20%]">
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
        <div className="xl:w-[90%] lg:w-[80%] flex lg:flex-row flex-wrap items-center xl:justify-end lg:justify-start justify-center gap-4">
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
            <div
              ref={Ref}
              className=" absolute lg:top-[90px] md:top-[150px] sm:top-52 xsss:top-52  top-64  md:right-14 bg-white pl-3 rounded pr-16 py-3"
            >
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
                <div
                  onClick={() => handleLogout()}
                  className="cursor-pointer flex items-center justify-start gap-x-3 w-full pl-2"
                >
                  <div>
                    <CiLock className="text-xl" />
                  </div>
                  <div className="text-black text-base flex">Logout</div>
                </div>
              </div>
              <div className="w-6 h-6 bg-white absolute -top-2 right-8 rounded-sm rotate-45"></div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
