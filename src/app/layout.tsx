import "./globals.css";
import { Providers } from "@/lib/store/provider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={` ${poppins.className} antialiased`}>
      <body>
        <Providers>
          <div className="w-full bg-dimwhite">{children}</div>
          <ToastContainer />
        </Providers>
      </body>
    </html>
  );
}
