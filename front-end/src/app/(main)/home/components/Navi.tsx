import { SquareArrowOutUpRight } from "lucide-react";

export const Navi = () => {
  const buttons = ["Home", "Explore", "View page", "Account settings"];
  return (
    <div className="flex z-50 absolute top-[14%] left-[7%] w-[251px] flex-col items-start gap-1">
      {buttons.map((v, i) => {
        return i == 2 ? (
          <button
            key={i}
            className="flex w-[250px] h-[36px] px-4 py-2 items-center gap-2 rounded-md text-[#18181B] text-[14px] font-medium">
            {v}
            <SquareArrowOutUpRight className="size-4 text-[#18181B]" />
          </button>
        ) : (
          <button
            key={i}
            className="flex w-[250px] h-[36px] px-4 py-2 items-center gap-2 rounded-md text-[#18181B] text-[14px] font-medium">
            {v}
          </button>
        );
      })}
    </div>
  );
};
// bg-[#F4F4F5]
