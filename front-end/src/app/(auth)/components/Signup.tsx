"use client";
import axios from "axios";
import { useState } from "react";
import { z } from "zod";

import { Step1 } from "./Step1";
import { Step3 } from "./Step3";
import { Step2 } from "./Step2";
import { useRouter } from "next/navigation";
const formSchema = z.object({
  username: z.string().min(1, { message: "Username is required" }).max(20),
  password: z
    .string()
    .min(8)
    .max(50)
    .refine((password) => /[A-Z][a-z][0-9][!@#$%^&*_-]/.test(password), {
      message: "",
    }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .max(20)
    .email({ message: "Invalid email address" }),
});
export const Signup = () => {
  const [step, setStep] = useState(1);
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  function onSubmit(values: z.infer<typeof formSchema>) {
    setUsername(values.username);
    setStep(2);
  }
  async function onSub(values: z.infer<typeof formSchema>) {
    console.log(values, "values");

    try {
      await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/user`, {
        name: username,
        email: values.email,
        password: values.password,
      });
    } catch (error: any) {}
    setStep(3);
  }
  const router = useRouter();
  async function onLogin(values: { email: string; password: string }) {
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/auth`,
        {
          email: values.email,
          password: values.password,
        },
        {
          withCredentials: true,
        }
      );
      router.push("/profile");
    } catch (error: any) {
      setMessage(error.response.data.mes);
    }
  }
  const handler = () => {
    if (step == 3) {
      setStep(1);
    }
    if (step == 1 || step == 2) {
      setStep(3);
    }
  };
  return (
    <div className="w-full h-full flex justify-center items-center">
      {step == 1 && <Step1 onSubmit={onSubmit} />}
      {step == 2 && <Step2 onSubmit={onSub} />}
      {step == 3 && <Step3 message={message} onSubmit={onLogin} />}
      <button
        onClick={handler}
        className="cursor-pointer absolute text-[14px] text-black top-[4%] right-[7%] flex h-[40px] px-4 py-2 justify-center items-center gap-2 rounded-md bg-[#F4F4F5]">
        {step == 3 ? "Sign up" : "Log in"}
      </button>
    </div>
  );
};
