"use client";
import { ChevronDown, Coffee } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Navi } from "./components/Navi";
import { Earnings } from "./components/Earnings";
import { Guest } from "./components/Guest";
import { Nosupport } from "./components/Nosupport";

export default function Home() {
  const [step, setStep] = useState(2);
  return (
    <div className="bg-white w-full h-screen gap-11 flex flex-col justify-start px-4 py-2 items-center relative">
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
      <div className="flex w-full gap-[70px] ">
        <Navi />
        <div className="flex flex-col w-[957px] px-6 items-start gap-6 self-stretch rounded-lg bg-white">
          <Earnings />
          <div className="flex flex-col items-start gap-3">
            <div className="flex w-full justify-between items-center text-[#18181B]">
              <p className="text-[16px] font-semibold">Recent transactions</p>
              <button className="flex h-[36px] px-4 py-2 justify-center items-center gap-2 rounded-md border-[1px] border-dashed border-[#E4E4E7] bg-white shadow-sm">
                <ChevronDown className="size-4" />
                <p className="text-[14px] font-medium">Amount</p>
              </button>
            </div>
            <div className="flex p-6 flex-col items-start gap-4 rounded-lg border-[1px] border-[#E4E4E7] bg-white">
              {/* <Guest /> */}
              <Nosupport />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
