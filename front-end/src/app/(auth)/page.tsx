"use client";
import { useEffect, useState } from "react";
import { Step1 } from "./components/Step1";
import { Step2 } from "./components/Step2";
import { Step3 } from "./components/Step3";
import axios from "axios";

export default function Home() {
  const [step, setStep] = useState(1);
  const [userinput, setUserinput] = useState("");
  const [errmes, setErrmes] = useState("");
  const [newusername, setNewusername] = useState("");
  const inputhandler = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserinput(event.target.value);
  };
  const userchecking = async () => {
    if (!userinput) {
      setErrmes("");
    } else {
      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/user/check`,
          {
            name: userinput,
          }
        );
        setErrmes(response.data.mes);
      } catch (error: unknown) {
        if (axios.isAxiosError(error) && error.response) {
          setErrmes(error.response.data.message);
        } else {
          console.error("Unexpected error:", error);
        }
      }
    }
  };
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      userchecking();
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [userinput]);
  console.log(errmes);
  const handlebutt = () => {
    if (userinput == "") {
      setErrmes("");
    }
    setNewusername(userinput);
    setStep(2);
  };
  return (
    <div className="bg-white w-full h-screen flex justify-center items-center relative">
      {step == 1 && (
        <Step1
          onclick={handlebutt}
          input={userinput}
          onchange={inputhandler}
          errmes={errmes}
        />
      )}
      {step == 2 && <Step2 username={newusername} />}
      {step == 3 && <Step3 />}
      <button className="cursor-pointer absolute text-[14px] text-black top-[4%] right-[7%] flex h-[40px] px-4 py-2 justify-center items-center gap-2 rounded-md bg-[#F4F4F5]">
        {step == 3 ? "Sign up" : "Log in"}
      </button>
    </div>
  );
}
