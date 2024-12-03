"use client";
import { SidebarProvider } from "@/components/ui/sidebar";
import { SideBar } from "@/components/shared/SideBar";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { navInitialStateTypes } from "@/lib/store/navSlice";

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
    <html lang="en" className={`antialiased`}>
      <body>
        <SidebarProvider open={navbarOpen}>
          {showsidebar && <SideBar />}
          <div className="w-full">{children}</div>
        </SidebarProvider>
      </body>
    </html>
  );
}
