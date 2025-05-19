"use client";
import type { Metadata } from "next";
import { ChevronDown, Coffee } from "lucide-react";
import Image from "next/image";
import { useContext } from "react";
import { AuthContext } from "../../../../context/Authcontext";

// export const metadata: Metadata = {
//   title: "Buy Me Coffee",
//   description: "BUY",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user } = useContext(AuthContext);
  console.log(user, "user");

  return (
    <div
      className={`bg-white w-full h-screen gap-11 flex flex-col justify-start px-4 py-2 items-center relative`}
    >
      <div className="flex w-full justify-between max-w-[1280px]">
        <div className="text-[#09090B] flex items-center gap-2">
          <Coffee className="size-5" />
          <p className="text-[16px] font-bold">Buy Me Coffee</p>
        </div>

        <div className="text-[#09090B] w-fit flex h-[40px] px-4 py-2 items-center gap-2 rounded-md bg-white">
          <Image
            className="size-[30px] rounded-full"
            alt="user"
            width={30}
            height={30}
            src={user ? user.avatarImage : ""}
          ></Image>
          <p className="text-[14px] min-w-[83px]">{user ? user.name : ""}</p>
          <ChevronDown className="size-4 " />
        </div>
      </div>
      {children}
    </div>
  );
}
