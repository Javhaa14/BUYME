"use client";
import { useState } from "react";
import { Complete } from "./components/Complete";
import { Payment } from "./components/Payment";

export default function Home() {
  const [step, setStep] = useState(1);
  const stepper = () => {
    setStep(2);
    console.log("step 2");
  };
  return (
    <div className="bg-white w-full h-screen flex justify-center items-center relative">
      {step == 1 && <Complete stepper={stepper} />}
      {step == 2 && <Payment />}
    </div>
  );
}
