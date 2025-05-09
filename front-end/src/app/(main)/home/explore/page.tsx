"use client";
import { ChevronDown, Search } from "lucide-react";
import { useState } from "react";
import { Navi } from "../components/Navi";
import { Profile } from "./components/Profile";
import { Nocreator } from "./components/Nocreator";

export default function Home() {
  const [step, setStep] = useState(2);
  const lol: any = [];
  return (
    <div className="flex w-full gap-[70px]">
      <Navi />
      <div className="flex w-[957px] p-6 flex-col items-start gap-8 rounded-lg bg-white">
        <div className="flex flex-col items-start gap-6 text-[#18181B]">
          <p className="text-[20px] font-semibold text-[#18181B]">
            Explore creator
          </p>
          <div className="w-[243px] h-[36px] flex items-center px-3 gap-[10px] rounded-lg border-[1px] border-[#E4E4E7] bg-white">
            <Search className="size-4" />
            <input placeholder="Search name"></input>
          </div>
        </div>
        {lol.length !== 0 ? (
          lol.map((v: any) => {
            return <Profile key={v} />;
          })
        ) : (
          <Nocreator />
        )}
      </div>
    </div>
  );
}
