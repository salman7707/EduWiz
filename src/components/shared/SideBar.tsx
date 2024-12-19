"use client";
import { Minus, Plus } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { closeNav, navInitialStateTypes } from "@/lib/store/navSlice";
import SideBarItems from "@/lib/SideBarItems";
import { logout } from "@/lib/store/authSlice";

export function SideBar() {
  const pathname = usePathname();
  const router = useRouter();
  const [insideitemClicked, setinsideitemClicked] = useState(false);
  const [openState, setOpenState] = useState<{
    open: boolean;
    id: number | null;
  }>({
    open: false,
    id: null,
  });
  const [hoverDot, setHoverDot] = useState<{
    hover: boolean;
    id: number | null;
  }>({ hover: false, id: null });

  const hanldehover = (id: number) => {
    console.log(id);
    setHoverDot({ hover: true, id: id });
  };
  const handleMouseLeave = () => {
    setHoverDot({ hover: false, id: null });
  };
  const { navbarOpen } = useSelector(
    (state: { nav: navInitialStateTypes }) => state.nav
  );
  const dispatch = useDispatch();
  const Ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handlemousedown = (e: MouseEvent) => {
      const toggleBtn = document.querySelector(".hamburger");
      if (
        Ref.current &&
        !Ref.current?.contains(e.target as Node) &&
        !toggleBtn?.contains(e.target as Node)
      ) {
        dispatch(closeNav());
      }
    };
    if (typeof window !== "undefined") {
      const mediaquery = window.matchMedia("(max-width:786px)");
      if (mediaquery.matches) {
        window.addEventListener("mousedown", handlemousedown);
      }
      return () => {
        window.removeEventListener("mousedown", handlemousedown);
      };
    }
  }, [dispatch]);

  const handleDropDown = (id: number) => {
    if (openState.open && openState.id === id) {
      setOpenState({ open: false, id: null });
    } else {
      setOpenState({ open: true, id: id });
    }
  };

  const handleLogout = async () => {
    const response = await fetch("/api/logout", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
    });
    if (response.ok) {
      console.log("User Logout SuccessFully");
      dispatch(logout());
      router.push("/login");
    } else {
      console.log("Error In Logout ");
    }
  };

  return (
    <Sidebar
      ref={Ref}
      className={`${
        navbarOpen === true ? "lg:w-[23%] sm:w-[35%] xs:w-[75%]" : "w-0"
      } shadow-even bg-transparent z-20 h-auto`}
    >
      <SidebarContent className="mt-[75px] scrollbar">
        <SidebarGroup className="w-full px-0 mx-0">
          <SidebarGroupLabel className="text-black text-sm font-semibold py-2 px-4 w-full">
            menu
          </SidebarGroupLabel>
          <SidebarGroupContent className="">
            <SidebarMenu className={` w-full flex flex-col h-full`}>
              {/* MAin Looping Start From there */}
              {SideBarItems.map((item) => (
                <SidebarMenuItem key={item.title} className={`w-full `}>
                  <SidebarMenuButton
                    asChild
                    className={` w-full rounded-none px-0 ${
                      pathname === item.url || openState.id === item.id
                        ? "text-navbaractiveColor font-semibold"
                        : "text-gray-600 font-normal"
                    } hover:text-navbaractiveColor bg-transparent hover:bg-transparent `}
                  >
                    <div className="flex flex-col items-center justify-center h-auto">
                      {/* Main Simple div if there is no data for dropdown then only this will shown */}
                      <div className="flex items-center justify-start gap-x-4 w-full pr-2">
                        <Link
                          onClick={() => {
                            setinsideitemClicked(false);
                            if (!item.url) {
                              handleDropDown(item.id);
                            }
                          }}
                          href={item.url}
                          className="flex items-center w-full gap-x-7"
                        >
                          {/* Border */}
                          <div
                            className={`${
                              pathname === item.url && item.plusicon === true
                                ? "border-l-4 h-10 border-navbaractiveColor"
                                : "border-l-4 border-transparent"
                            }`}
                          ></div>
                          {/* title and icon */}
                          <div className="flex items-center md:gap-x-1 gap-x-2 w-full">
                            <div className="w-[10%]">
                              <item.icon className="md:w-[70%] w-[90%]" />
                            </div>
                            <span className={`text-[15px] w-[80%]`}>
                              {item.title}
                            </span>
                          </div>
                        </Link>
                        {/* icon to open and close the dropdown */}
                        {item.plusicon === true && (
                          <SidebarMenuButton
                            className="w-[10%]"
                            onClick={() => handleDropDown(item.id)}
                          >
                            {openState.open && openState.id === item.id ? (
                              <Minus className="w-[70%] text-neutralgray" />
                            ) : (
                              <Plus className="w-[70%] text-neutralgray" />
                            )}
                          </SidebarMenuButton>
                        )}
                      </div>

                      {/* If there is data avaliable for for dropdown then this will also shown */}
                      {openState.open && openState.id === item.id && (
                        <div className="border-l relative border-navbaractiveColor w-[75%] h-auto text-gray-700">
                          {item.insidedata?.map((insideitem, index) => (
                            <div
                              data-url={insideitem.url}
                              key={insideitem.id}
                              onMouseEnter={() => hanldehover(insideitem.id)}
                              onMouseLeave={handleMouseLeave}
                              className={`flex flex-col w-full items-center justify-center py-2 pl-4`}
                            >
                              {(hoverDot.hover && hoverDot.id === index) ||
                              pathname === insideitem.url ? (
                                <div className="w-[10px] h-[10px] absolute -left-[5px] rounded-full bg-navbaractiveColor"></div>
                              ) : (
                                ""
                              )}

                              {insideitem.logoutBtn ? (
                                <div
                                  className={`text-[15px] ${
                                    pathname === insideitem.url
                                      ? "font-semibold text-navbaractiveColor"
                                      : "font-normal text-gray-600"
                                  } hover:text-navbaractiveColor cursor-pointer flex items-center w-full`}
                                  onClick={() => handleLogout()}
                                >
                                  {insideitem.title}
                                </div>
                              ) : (
                                <Link
                                  href={insideitem.url || "/dashboard"}
                                  onClick={() =>
                                    setinsideitemClicked(!insideitemClicked)
                                  }
                                  className={`text-[15px] ${
                                    pathname === insideitem.url
                                      ? "font-semibold text-navbaractiveColor"
                                      : "font-normal text-gray-600"
                                  } hover:text-navbaractiveColor flex cursor-pointer items-center w-full`}
                                >
                                  {insideitem.title}
                                </Link>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
