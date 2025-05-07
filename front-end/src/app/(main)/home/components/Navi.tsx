import { SquareArrowOutUpRight } from "lucide-react";

export const Navi = () => {
  const buttons = ["Home", "Explore", "View page", "Account settings"];
  return (
    <div className="flex ml-[60px] w-[251px] flex-col items-start gap-1">
      {buttons.map((v, i) => {
        return i == 2 ? (
          <button
            key={i}
            className="flex bg-[#F4F4F5]
 w-[200px] h-[36px] px-4 py-2 items-center gap-2 rounded-md text-[#18181B] text-[14px] font-medium">
            {v}
            <SquareArrowOutUpRight className="size-4 text-[#18181B]" />
          </button>
        ) : (
          <button
            key={i}
            className="flex w-[200px] h-[36px] px-4 py-2 items-center gap-2 rounded-md text-[#18181B] text-[14px] font-medium">
            {v}
          </button>
        );
      })}
    </div>
  );
};
