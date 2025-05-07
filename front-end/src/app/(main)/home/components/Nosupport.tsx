import { Heart } from "lucide-react";

export const Nosupport = () => {
  return (
    <div className="flex w-[859px] p-6 flex-col justify-center items-center gap-6 rounded-lg border-[1px] border-[#E4E4E7] bg-white">
      <div className="flex w-[385px] flex-col items-center gap-5">
        <div className="flex p-[17px] items-center gap-[17px] rounded-[17px] bg-[#F4F4F5]">
          <Heart className="text-[#09090B] size-[28px]" />
        </div>
        <div className="flex flex-col items-center gap-1 text-[#18181B]">
          <p className="text-[16px] font-semibold">
            You don’t have any supporters yet
          </p>
          <p className="text-[16px]">
            Share your page with your audience to get started.
          </p>
        </div>
      </div>
    </div>
  );
};
