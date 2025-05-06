"use client";
import { Coffee } from "lucide-react";
import { useState } from "react";
import { Complete } from "./components/Complete";

export default function Home() {
  const [step, setStep] = useState(2);
  return (
    <div className="bg-white w-full h-screen flex justify-center items-center relative">
      <div className="text-[#09090B] flex items-center gap-2 z-50 absolute top-[5%] left-[7%]">
        <Coffee className="size-5" />
        <p className="text-[16px] font-bold">Buy Me Coffee</p>
      </div>
      <button className="absolute text-[14px] text-black top-[4%] right-[7%] flex h-[40px] px-4 py-2 justify-center items-center gap-2 rounded-md bg-[#F4F4F5]">
        {step == 3 ? "Sign up" : "Log in"}
      </button>
      <Complete />
    </div>
  );
}
