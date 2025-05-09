"use client";
import { useState } from "react";
import { Right } from "./components/Right";
import { Left } from "./components/Left";

export default function Home() {
  const [step, setStep] = useState(2);
  return (
    <div className="w-full h-full flex gap-10 absolute justify-center items-center mt-[100px]">
      <div className="w-[1300px] h-[590px] flex gap-10 justify-center items-center">
        <Left />
        <Right />
      </div>
    </div>
  );
}
