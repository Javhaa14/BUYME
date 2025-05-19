"use state";
import { ChevronDown, ChevronsUpDown } from "lucide-react";
import { useState } from "react";

export const Payment = () => {
  const [selectedCountry, setSelectedCountry] = useState("");

  return (
    <div className="text-[#09090B] overflow-scroll flex w-[510px] max-w-[672px] flex-col items-start gap-6 border-[1px] border-black rounded-xl p-10 ">
      <div className="flex py-6 flex-col items-start gap-[6px] self-stretch">
        <p className="text-[24px] font-semibold ">
          How would you like to be paid?
        </p>
        <p className="text-[14px] text-[#71717A]">
          Enter location and payment details
        </p>
      </div>
      <div className="flex w-full flex-col items-center gap-6 self-stretch text-[#09090B]">
        <div className="flex w-full flex-col items-center gap-6">
          <div className="flex w-full flex-col items-start gap-2 self-stretch">
            <p className="text-[14px] font-medium">Select country</p>
            <select
              className="flex w-full h-[40px] px-3 py-2 items-center rounded-md border-[1px] border-[#E4E4E7] bg-white text-[14px]"
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
            >
              <option value="">Select</option>
              <option value="us">United States</option>
              <option value="ca">Canada</option>
              <option value="uk">United Kingdom</option>
              <option value="in">India</option>
            </select>
          </div>
          <div className="flex items-start gap-3 self-stretch">
            <div className="flex w-full flex-col items-start gap-2">
              <p className="text-[14px] font-medium">First name</p>
              <input
                placeholder="Enter your name here"
                className="flex w-full h-full px-3 py-2 items-center rounded-md border-[1px] border-[#E4E4E7] bg-white"
              ></input>
            </div>
            <div className="flex w-full flex-col items-start gap-2">
              <p className="text-[14px] font-medium">Last name</p>
              <input
                placeholder="Enter your name here"
                className="flex w-full h-full px-3 py-2 items-center rounded-md border-[1px] border-[#E4E4E7] bg-white"
              ></input>
            </div>
          </div>

          <div className="flex h-[62px] flex-col items-start gap-2 self-stretch">
            <p className="text-[14px] font-medium">Enter card number</p>
            <input
              type="number"
              placeholder="XXXX-XXXX-XXXX-XXXX"
              className="no-spinner flex w-full h-full px-3 py-2 items-center rounded-md border-[1px] border-[#E4E4E7] bg-white"
            ></input>
          </div>

          <div className="flex items-start gap-4 self-stretch">
            <div className="flex flex-col items-start gap-2">
              <p className="text-[14px] font-medium">Expires</p>
              <div className="flex flex-col items-start gap-1">
                <div className=" w-[159px] flex h-[36px] px-3 py-2 justify-between items-center gap-[10px] rounded-md border-[1px] border-[#E4E4E7] bg-white">
                  <p className="text-[14px]">Month</p>
                  <ChevronsUpDown className="size-[16px]" />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start gap-2">
              <p className="text-[14px] font-medium">Year</p>
              <div className="flex flex-col items-start gap-1">
                <div className=" w-[159px] flex h-[36px] px-3 py-2 justify-between items-center gap-[10px] rounded-md border-[1px] border-[#E4E4E7] bg-white">
                  <p className="text-[14px]">Year</p>
                  <ChevronsUpDown className="size-[16px]" />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start gap-2">
              <p className="text-[14px] font-medium">CVC</p>
              <input
                type="number"
                placeholder="CVC"
                className="no-spinner flex w-full h-full px-3 py-2 items-center rounded-md border-[1px] border-[#E4E4E7] bg-white"
              ></input>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full justify-end items-end gap-[10px]">
          <button className="cursor-pointer flex w-[246px] h-[40px] px-4 py-2 justify-center items-center gap-2 rounded-md bg-black text-white">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};
