import { ChevronDown, Copy } from "lucide-react";
import Image from "next/image";
import { useContext } from "react";
import { AuthContext } from "../../../../../context/Authcontext";

export const Earnings = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="flex w-full p-6 flex-col items-start gap-3 rounded-lg border-[1px] border-[#E4E4E7]">
      <div className="flex w-full justify-between items-start">
        <div className="flex  items-center gap-3">
          <Image
            alt="user"
            width={30}
            height={30}
            className="size-[30px] rounded-full"
            src={user !== null ? user.avatarImage : ""}
          ></Image>
          <div className="text-[#09090B] flex flex-col justify-center items-start gap-1">
            <p className="text-[16px] font-bold">{user?.name}</p>
            <p className="text-[14px]">{user?.socialMEdiaURL}</p>
          </div>
        </div>
        <button className="text-[#FAFAFA] flex h-[40px] px-4 py-2 justify-center items-center gap-2 rounded-[6px] bg-[#18181B]">
          <Copy className="size-4" />
          <p className="text-[14px]">Share page link</p>
        </button>
      </div>
      <div className="flex w-full py-4 flex-col items-start gap-[10px]">
        <div className="w-full h-[1px] border-[1px] border-[#E4E4E7]"></div>
      </div>
      <div className="flex flex-col items-start gap-6 text-[#18181B]">
        <div className="flex items-center gap-4">
          <p className="text-[20px] font-semibold">Earnings</p>
          <div className="flex w-[175px] flex-col items-start gap-[3px]">
            <div className="flex h-10 px-4 py-2 items-center gap-2 rounded-md border-[1px] border-[#E4E4E7] bg-white">
              <p className="text-[14px]">Last 30 days</p>
              <ChevronDown className="size-4" />
            </div>
          </div>
        </div>
        <p className="text-[36px] font-bold">450$</p>
      </div>
    </div>
  );
};
