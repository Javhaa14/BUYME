import { Heart } from "lucide-react";
import Image from "next/image";

export const Left = () => {
  return (
    <div className="flex w-[632px] flex-col items-start h-auto gap-5 rounded-lg text-[#09090B]">
      <div className="flex p-6 w-full flex-col items-start h-auto gap-2 border-[1px] border-[#E4E4E7] bg-white rounded-lg">
        <div className="flex w-full flex-row justify-between items-center gap-2  rounded-lg ">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Image alt="user" width={30} height={30} src="globe.svg"></Image>
              <p className="text-[20px] font-bold">Jake</p>
            </div>
          </div>
          <button className="flex h-10 px-4 py-2 justify-center items-center gap-2 rounded-md">
            <p className="text-[#18181B] text-[14px] font-medium">Edit page</p>
          </button>
        </div>
        <div className="flex flex-col items-start gap-3 w-full">
          <div className="w-full h-[1px] border-[1px] border-[#E4E4E7]"></div>
        </div>

        <div className="flex flex-col items-start gap-6 w-full">
          <p className="text-[16px] font-semibold">About jake</p>
          <p className="text-[14px]">
            I’m a typical person who enjoys exploring different things. I also
            make music art as a hobby. Follow me along.
          </p>
        </div>
      </div>
      <div className="w-full h-[116px] flex p-6 flex-col items-start gap-3 rounded-lg border-[1px] border-[#E4E4E7] bg-white">
        <p className="text-[16px] font-semibold">Social media URL</p>
        <p className="text-[14px]">https://buymeacoffee.com/spacerulz44</p>
      </div>
      <div className="flex w-full h-[236px] p-6 flex-col items-start gap-6 rounded-lg border-[1px] bg-white border-[#E4E4E7]">
        <p className="text-[16px] font-semibold">Recent Supporters</p>
        <div className="w-full h-auto flex p-6 flex-col justify-center items-center gap-6 rounded-lg border-[1px] border-[#E4E4E7]">
          <div className="flex w-[385px] flex-col items-center gap-1">
            <Heart className="size-4 m-[17px] text-black" />
            <p className="text-[16px] font-semibold">
              Be the first one to support Jake
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
