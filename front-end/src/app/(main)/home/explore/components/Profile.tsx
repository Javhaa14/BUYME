import { SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";

export const Profile = () => {
  return (
    <div className="flex w-[909px] p-6 items-start rounded-lg border-[1px] border-[#E4E4E7] text-[#18181B]">
      <div className="flex w-full flex-col items-start gap-3">
        <div className="flex w-full justify-between items-center">
          <div className="flex items-center gap-3">
            <Image width={30} height={30} src={"globe.svg"} alt="user" />
            <p className="text-[20px] font-semibold">Space ranger</p>
          </div>
          <button className="flex h-10 px-4 py-2 justify-center items-center gap-2 rounded-md bg-[#F4F4F5]">
            <p className="text-[14px] font-medium">View profile</p>
            <SquareArrowOutUpRight className="size-4" />
          </button>
        </div>

        <div className="flex w-full items-start gap-5">
          <div className="flex w-[421px] flex-col items-start gap-2">
            <p className="text-[16px] font-semibold">About Space ranger</p>
            <p className="text-[14px] text-[#09090B] h-[80px] overflow-clip">
              All day, every day, we're watching, listening to, reading and
              absorbing politics. It's exhausting. We then report on what we've
              seen in a way that's as chill as possible. None of the
              sensationalism and division you'll find elsewhere. It's about
              clarity, focus, approachability, and having a little wry smile
              almost all the time.
            </p>
          </div>
          <div className="flex w-[421px] flex-col items-start gap-2">
            <p className="text-[16px] font-semibold">Social media URL</p>
            <p className="text-[14px] text-[#09090B] h-[80px] overflow-clip">
              https://buymeacoffee.com/baconpancakes1
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
