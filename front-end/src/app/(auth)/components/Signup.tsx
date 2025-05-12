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
  //   const handlesign = async () => {
  //     const validationSchema = Yup.object({
  //       email: Yup.string()
  //         .email("Invalid email address")
  //         .required("Email is required")
  //         .test("includes-com-and-at", "Invalid email address", (value) => {
  //           if (!value) return false;
  //           return value.includes("@") && value.includes(".com");
  //         }),
  //     });
  //     const passvalidationSchema = Yup.object({
  //       password: Yup.string()
  //         .required("Password is required")
  //         .min(8, "Password must be at least 8 characters")
  //         .matches(
  //           /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&_-])[A-Za-z\d@$!%*?#&_-]{8,}$/,
  //           "Password is too weak. Use uppercase, lowercase, number, and special character."
  //         ),
  //     });
  //     const email = signinput.email;
  //     const pass = signinput.password;

  //     try {
  //       await validationSchema.validate({ email });
  //       setValids((prevval) => ({
  //         email: email,
  //         password: prevval.password,
  //       }));
  //       setMessages((prevMessages) => ({
  //         email: "",
  //         password: prevMessages.password,
  //       }));
  //     } catch (error) {
  //       if (error instanceof Yup.ValidationError) {
  //         setMessages((prevMessages) => ({
  //           email: error.message,
  //           password: prevMessages.password,
  //         }));
  //       }
  //     }
  //     try {
  //       await passvalidationSchema.validate({ pass });
  //       console.log(pass, "HELLO FROM");

  //       setValids((prevval) => ({
  //         email: prevval.email,
  //         password: pass,
  //       }));
  //       setMessages((prevMessages) => ({
  //         email: prevMessages.email,
  //         password: "",
  //       }));
  //     } catch (error) {
  //       if (error instanceof Yup.ValidationError) {
  //         setMessages((prevMessages) => ({
  //           email: prevMessages.email,
  //           password: error.message,
  //         }));
  //       }
  //     }
  //     if (valids.email !== "" && valids.password !== "") {
  //       try {
  //         await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/user`, {
  //           name: newusername,
  //           email: valids.email,
  //           pass: valids.password,
  //         });
  //       } catch (error) {
  //         console.log(error, "error");
  //       }
  //     }
  //   };
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setUsername(values.username);
    setStep(2);
  }
  async function onSub(values: z.infer<typeof formSchema>) {
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/user`, {
        name: username,
        email: values.email,
        password: values.password,
      });
    } catch (error) {
      console.log(error);
    }
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
      router.push("/home");
    } catch (error) {
      console.log(error);
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
      {step == 3 && <Step3 onSubmit={onLogin} />}
      <button
        onClick={handler}
        className="cursor-pointer absolute text-[14px] text-black top-[4%] right-[7%] flex h-[40px] px-4 py-2 justify-center items-center gap-2 rounded-md bg-[#F4F4F5]"
      >
        {step == 3 ? "Sign up" : "Log in"}
      </button>
    </div>
  );
};
