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
import { SideBarSliceTypes, ToggleState } from "@/lib/store/sidebarSlice";

export function SideBar() {
  const pathname = usePathname();
  const router = useRouter();
  const { open, id } = useSelector(
    (state: { sidebar: SideBarSliceTypes }) => state.sidebar.openState
  );
  const [insideitemClicked, setinsideitemClicked] = useState(false);
  const [hoverDot, setHoverDot] = useState<{
    hover: boolean;
    id: number | null;
  }>({ hover: false, id: null });

  const hanldehover = (id: number) => {
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

  const handleDropDown = (id: number) => {
    dispatch(ToggleState({ id }));
  };
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
      } shadow-even z-20 h-auto bg-white `}
    >
      <SidebarContent className="mt-[75px] border-t bg-white scrollbar">
        <SidebarGroup className="w-full px-0 mx-0">
          <SidebarGroupLabel className="text-black text-xs font-semibold py-2 px-4 w-full">
            menu
          </SidebarGroupLabel>
          <SidebarGroupContent className="">
            <SidebarMenu
              className={` w-full flex flex-col h-full focus:border-0 `}
            >
              {/* MAin Looping Start From there */}
              {SideBarItems.map((item) => (
                <SidebarMenuItem key={item.id} className={`w-full `}>
                  <SidebarMenuButton
                    asChild
                    className={` w-full rounded-none px-0 ${
                      pathname === item.url ||
                      (id === item.id &&
                        item.insidedata?.find(
                          (state) => state.url === pathname
                        ))
                        ? "text-navbaractiveColor font-semibold"
                        : "text-lightblack font-normal"
                    } hover:text-navbaractiveColor focus:ring-0 focus:ouline-0 focus-visible:ring-0 bg-transparent hover:bg-transparent `}
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
                              pathname === item.url ||
                              (id === item.id &&
                                item.insidedata?.find(
                                  (state) => state.url === pathname
                                ))
                                ? "border-l-4 h-7 border-navbaractiveColor"
                                : "border-l-4 border-transparent"
                            }`}
                          ></div>
                          {/* title and icon */}
                          <div className="flex items-center md:gap-x-1 gap-x-2 w-full">
                            <div className="w-[10%]">
                              <item.icon className="md:w-[70%] w-[90%]" />
                            </div>
                            <span className={`text-sm w-[80%]`}>
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
                            {open && id === item.id ? (
                              <Minus className="focus-visible:ring-0 w-[70%] text-neutralgray focus: border-0" />
                            ) : (
                              <Plus className="w-[70%] text-neutralgray" />
                            )}
                          </SidebarMenuButton>
                        )}
                      </div>

                      {/* If there is data avaliable for for dropdown then this will also shown */}
                      {open && id === item.id && (
                        <div className="border-l relative border-navbaractiveColor w-[75%] h-auto text-gray-700">
                          {item.insidedata?.map((insideitem, index) => (
                            <Link
                              href={insideitem.url || "/dashboard"}
                              onClick={() =>
                                setinsideitemClicked(!insideitemClicked)
                              }
                              data-url={insideitem.url}
                              key={insideitem.id}
                              onMouseEnter={() => hanldehover(insideitem.id)}
                              onMouseLeave={handleMouseLeave}
                              className={`flex flex-col group w-full items-center justify-center py-2 pl-4 cursor-pointer focus-visible:ring-0`}
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
                                <div
                                  className={`text-[15px] ${
                                    pathname === insideitem.url
                                      ? "font-semibold text-navbaractiveColor"
                                      : "font-normal text-gray-600"
                                  } hover:text-navbaractiveColor flex cursor-pointer items-center w-full`}
                                >
                                  {insideitem.title}
                                </div>
                              )}
                            </Link>
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
