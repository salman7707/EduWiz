"use client";
import {
  Calendar,
  Home,
  LucideIcon,
  Minus,
  Plus,
  Search,
  Settings,
} from "lucide-react";

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
import { useState } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { navInitialStateTypes } from "@/lib/store/navSlice";

interface itemstype {
  id: number;
  title: string;
  url: string;
  icon: LucideIcon;
  plusicon?: boolean;
  insidedata?: {
    id: number;
    title: string;
    url: string;
  }[];
}

const items: itemstype[] = [
  {
    id: 0,
    title: "Dashboard",
    url: "/dashboard",
    icon: Home,
  },
  {
    id: 1,
    title: "General Settings",
    url: "/generalsetting",
    icon: Settings,
    plusicon: true,
    insidedata: [
      {
        id: 0,
        title: "Institute Profile",
        url: "/schoolinfo",
      },
      {
        id: 1,
        title: "ٖٖFee Particulars",
        url: "/feeparticulars",
      },
    ],
  },
  {
    id: 2,
    title: "Calendar",
    url: "#",
    icon: Calendar,
    plusicon: true,
  },
  {
    id: 3,
    title: "Search",
    url: "#",
    icon: Search,
    plusicon: true,
  },
  {
    id: 4,
    title: "Settings",
    url: "#",
    icon: Settings,
    plusicon: false,
  },
];

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
  return (
    <Sidebar
      className={`  ${
        navbarOpen === true ? "w-[25%]" : "w-0"
      } mt-24 shadow-even`}
    >
      <SidebarContent>
        <SidebarGroup className="w-full px-0 mx-0">
          <SidebarGroupLabel className="text-black text-sm font-semibold py-2 px-4 w-full">
            menu
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className={` w-full flex flex-col h-full`}>
              {/* MAin Looping Start From there */}
              {items.map((item) => (
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
                      <div className="flex items-center justify-start gap-x-4 w-full ">
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
                          <div className="flex items-center pag-x-4 w-full">
                            <div className="w-[10%]">
                              <item.icon className="w-[70%]" />
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
                                <div className="w-[10px] h-[10px] absolute -left-[4.8px] rounded-full bg-navbaractiveColor"></div>
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
