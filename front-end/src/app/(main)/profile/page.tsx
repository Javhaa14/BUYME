"use client";
import { Coffee } from "lucide-react";
import { useState } from "react";
import { Complete } from "./components/Complete";
import { Payment } from "./components/Payment";

export default function Home() {
  const [step, setStep] = useState(2);
  return (
    <div className="bg-white w-full h-screen flex justify-center items-center relative">
      <Complete />
      {/* <Payment /> */}
    </div>
  );
}
