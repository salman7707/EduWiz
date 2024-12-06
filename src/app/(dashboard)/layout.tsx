"use client";
import { SidebarProvider } from "@/components/ui/sidebar";
import { SideBar } from "@/components/shared/SideBar";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { navInitialStateTypes } from "@/lib/store/navSlice";
import Navbar from "@/components/shared/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const hideSidebarPages = ["/login", "/signup", "/"];
  const showsidebar = !hideSidebarPages.includes(pathname);

  const { navbarOpen } = useSelector(
    (state: { nav: navInitialStateTypes }) => state.nav
  );

  return (
    <SidebarProvider open={navbarOpen} openMobile={navbarOpen}>
      {showsidebar && (
        <div
          className={` ${
            navbarOpen ? "lg:w-[23%] md:w-[0%] xs:w-[0%]" : "w-0"
          } ${navbarOpen ? "lg:bg-dimwhite bg-black/20" : ""} mt-24`}
        >
          <SideBar />
        </div>
      )}
      <Navbar />
      <div
        className={`${
          navbarOpen ? "lg:w-[77%] md:w-full xs:w-full" : "w-full"
        } mt-[75px] `}
      >
        {children}
      </div>
    </SidebarProvider>
  );
}
