import type { Metadata } from "next";
import { ChevronDown, Coffee } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Buy Me Coffee",
  description: "BUY",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`bg-white w-full h-screen gap-11 flex flex-col justify-start px-4 py-2 items-center relative`}
    >
      <div className="flex w-full justify-between items-center max-w-[1280px]">
        <div className="text-[#09090B] flex items-center gap-2">
          <Coffee className="size-5" />
          <p className="text-[16px] font-bold">Buy Me Coffee</p>
        </div>
        <button className="text-[14px] text-black flex h-[40px] px-4 py-2 justify-center items-center gap-2 rounded-md bg-[#F4F4F5]">
          Log out
        </button>
      </div>
      {children}
    </div>
  );
}
