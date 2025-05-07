"use client";
import { Camera, ChevronDown, Coffee } from "lucide-react";
import { useState } from "react";
import { Right } from "./components/Right";
import { Left } from "./components/Left";

export default function Home() {
  const [step, setStep] = useState(2);
  return (
    <div className="w-full h-full flex flex-col relative">
      <div className="w-full h-80 relative flex justify-center items-center overflow-hidden">
        <button className="cursor-pointer h-10 px-4 py-2 bg-zinc-900 rounded-md inline-flex justify-center items-center gap-2">
          <div className="w-4 h-4 relative overflow-hidden">
            <Camera className="size-4" />
          </div>
          <div className="justify-start text-text-text-primary-foreground text-sm font-medium font-['Inter'] leading-tight">
            Add a cover image
          </div>
        </button>
      </div>
      <div className="w-full h-fit flex absolute top-[233px] gap-5">
        <Left />
        <Right />
      </div>
    </div>
  );
}
