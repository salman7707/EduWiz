"use client";
import React, { useEffect, useState } from "react";
import NavBarWithoutLogin from "./NavBarWithoutLogin";
import NAvBarWithLogin from "./NAvBarWithLogin";
import { usePathname } from "next/navigation";

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

  const pathname = usePathname();
  const hideSidebarPages = ["/login", "/signup", "/"];
  const shownavbar = !hideSidebarPages.includes(pathname);

  return (
    <div
      className={`w-full fixed  z-20 top-0 ${
        state === true ? "" : ""
      } left-0 right-0 lg:h-[75px] h-auto ${
        shownavbar
          ? "bg-white"
          : "bg-gradient-to-r from-[#09327f] to-[#06183b]"
      } `}
    >
      {/* Navbar */}
      {shownavbar ? <NAvBarWithLogin /> : <NavBarWithoutLogin />}
    </div>
  );
}
