import { User } from "lucide-react";

export const Nocreator = () => {
  return (
    <div className="flex w-full p-6 flex-col justify-center items-center gap-[10px]">
      <div className="flex w-[385px] flex-col items-center gap-5">
        <div className="flex p-[17px] items-center rounded-full bg-[#F4F4F5]">
          <User className="text-[#18181B]" />
        </div>
        <p className="text-[16px] font-semibold text-[#18181B]">
          No creators have signed up yet
        </p>
      </div>
    </div>
  );
};
