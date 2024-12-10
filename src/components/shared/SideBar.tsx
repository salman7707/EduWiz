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
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { closeNav, navInitialStateTypes } from "@/lib/store/navSlice";
import SideBarItems from "@/lib/SideBarItems";

export function SideBar() {
  const pathname = usePathname();
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
  const handleDropDown = (id: number) => {
    setOpenState({ open: !openState.open, id: id });
  };
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
        // when i click outside of the togglebtn or the complete sidebar then it will be close or one more functionallity i added there is that when i click on button and its state is true before then when i click on this then it will be close or when i click on this button or its initial state is false then it will be true on click can i want to add this functionality on this where i check this conditionally or just toggle this like on click the state will change to its previous state
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
  return (
    <Sidebar
      ref={Ref}
      className={`  ${
        navbarOpen === true ? "lg:w-[23%] sm:w-[35%] xs:w-[75%]" : "w-0"
      } mt-[75px] shadow-even bg-transparent `}
    >
      <SidebarContent>
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
                    className={` w-full rounded-none px-0  ${
                      pathname === item.url ||
                      (insideitemClicked && openState.id === item.id)
                        ? "text-navbaractiveColor font-semibold"
                        : "text-gray-600 font-normal"
                    } hover:text-navbaractiveColor bg-transparent hover:bg-transparent `}
                  >
                    <div className="flex flex-col items-center justify-center h-auto">
                      {/* Main Simple div if there is no data for dropdown then only this will shown */}
                      <div className="flex items-center justify-start gap-x-4 w-full pr-2">
                        <Link
                          onClick={() => setinsideitemClicked(false)}
                          href={item.url}
                          className=" flex items-center w-full gap-x-7"
                        >
                          {/* Border */}
                          <div
                            className={`${
                              pathname === item.url
                                ? "border-l-4 h-10 border-navbaractiveColor"
                                : "border-l-4 border-transparent"
                            }`}
                          ></div>
                          {/* title and icon */}
                          <div className="flex items-center md:gap-x-0 gap-x-2 w-full">
                            <div className="w-[10%]">
                              <item.icon className="md:w-[70%] w-[90%]" />
                            </div>
                            <span className={`text-base w-[80%]`}>
                              {item.title}
                            </span>
                          </div>
                        </Link>
                        {/* icon to open and close the dropdown */}
                        {item.plusicon === true && (
                          <SidebarMenuButton
                            className=" w-[10%]"
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
                        <div className="border-l relative border-navbaractiveColor w-[70%] h-auto text-gray-700">
                          {item.insidedata?.map((insideitem, index) => (
                            <div
                              key={insideitem.id}
                              onMouseEnter={() => hanldehover(insideitem.id)}
                              onMouseLeave={handleMouseLeave}
                              className={` flex flex-col w-full items-center justify-center py-2 px-6 `}
                            >
                              {(hoverDot.hover && hoverDot.id === index) ||
                              pathname === insideitem.url ? (
                                <div className="w-[10px] h-[10px] absolute -left-[5px] rounded-full bg-navbaractiveColor"></div>
                              ) : (
                                ""
                              )}

                              <Link
                                href={insideitem.url || "/dashboard"}
                                onClick={() =>
                                  setinsideitemClicked(!insideitemClicked)
                                }
                                className={`text-base ${
                                  pathname === insideitem.url
                                    ? "font-semibold text-navbaractiveColor"
                                    : "font-normal text-gray-600"
                                } hover:text-navbaractiveColor flex items-center w-full`}
                              >
                                {insideitem.title}
                              </Link>
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
