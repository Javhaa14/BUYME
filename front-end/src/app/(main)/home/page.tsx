"use client";
import { ChevronDown, Coffee } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Navi } from "./components/Navi";

export default function Home() {
  const [step, setStep] = useState(2);
  return (
    <div className="bg-white w-full h-screen flex justify-center items-center relative">
      <div className="text-[#09090B] flex items-center gap-2 z-50 absolute top-[5%] left-[7%]">
        <Coffee className="size-5" />
        <p className="text-[16px] font-bold">Buy Me Coffee</p>
      </div>

      <div className="text-[#09090B] absolute top-[4%] right-[7%] w-fit flex h-[40px] px-4 py-2 items-center gap-2 rounded-md bg-white">
        <Image alt="user" width={30} height={30} src="globe.svg"></Image>
        <p className="text-[14px] min-w-[83px]">Jake</p>
        <ChevronDown className="size-4 " />
      </div>
      <Navi />
    </div>
  );
}
