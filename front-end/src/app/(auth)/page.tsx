"use client";
import { useState } from "react";
import { Step1 } from "./components/Step1";
import { Step2 } from "./components/Step2";
import { Step3 } from "./components/Step3";

export default function Home() {
  const [step, setStep] = useState(2);
  return (
    <div className="bg-white w-full h-screen flex justify-center items-center relative">
      <Step2 username="HI" />
      <button className="absolute text-[14px] text-black top-[5%] right-[7%] flex h-[40px] px-4 py-2 justify-center items-center gap-2 rounded-md bg-[#F4F4F5]">
        {step == 3 ? "Sign up" : "Log in"}
      </button>
    </div>
  );
}
