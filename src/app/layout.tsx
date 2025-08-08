"use client";

import { Poppins } from "next/font/google";
import "../styles/globals.css";
// import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScrolling";
import GSAPProvider from "@/components/GSAPProvider";
import SmoothScrolling from "@/components/SmoothScrolling";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} cursor-none`}>
        <SmoothScrolling>
          <GSAPProvider>
            <div className="w-full">{children}
            </div>
          </GSAPProvider>
        </SmoothScrolling>
      </body>
    </html>
  );
}
