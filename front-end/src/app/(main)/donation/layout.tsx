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
      className={`bg-white w-full h-screen flex flex-col justify-start px-4 py-2 items-center relative`}
    >
      <div className="flex w-full justify-between max-w-[1280px]">
        <div className="text-[#09090B] flex items-center gap-2">
          <Coffee className="size-5" />
          <p className="text-[16px] font-bold">Buy Me Coffee</p>
        </div>

        <div className="text-[#09090B] w-fit flex h-[40px] px-4 py-2 items-center gap-2 rounded-md bg-white">
          <Image alt="user" width={30} height={30} src="globe.svg"></Image>
          <p className="text-[14px] min-w-[83px]">Jake</p>
          <ChevronDown className="size-4 " />
        </div>
      </div>
      {children}
    </div>
  );
}
