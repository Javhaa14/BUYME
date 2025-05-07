"use client";
import { ChevronDown, Coffee } from "lucide-react";
import { useState } from "react";
import { Navi } from "./components/Navi";
import { Earnings } from "./components/Earnings";
import { Guest } from "./components/Guest";

export default function Home() {
  const [step, setStep] = useState(2);
  return (
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
            <Guest />
          </div>
        </div>
      </div>
    </div>
  );
}
