import { CircleCheck, CircleX } from "lucide-react";

export const Step1 = ({
  onchange,
  errmes,
  input,
  onclick,
}: {
  onchange: React.ChangeEventHandler<HTMLInputElement>;
  errmes: string;
  input: string;
  onclick: () => void;
}) => {
  return (
    <div className="flex w-[407px] flex-col items-start rounded-lg shadow-sm">
      <div className="flex p-6 flex-col items-start gap-[6px] self-stretch">
        <p className="text-[#09090B] text-[24px] font-semibold">
          Create Your Account
        </p>
        <p className="text-[#71717A] text-[14px]">
          Choose a username for your page
        </p>
      </div>
      <div className="flex px-6 pb-6 flex-col items-start gap-[10px] self-stretch">
        <div className="text-[#09090B] flex flex-col items-start gap-[8px] self-stretch">
          <p className="font-semibold text-[14px]">Username</p>
          <input
            onChange={onchange}
            value={input}
            placeholder="Enter username here"
            className={`focus:outline-none focus:ring-0 placeholder:text-[#71717A] flex h-[40px] px-3 py-2 items-center self-stretch rounded-md border-[1px] bg-white  ${
              errmes !== "" && errmes == "Username already taken"
                ? "border-[#EF4444]"
                : errmes == "Username available"
                ? "border-[#18BA51]"
                : errmes == "" && "border-[#E4E4E7]"
            }
            `}
          ></input>
          {errmes == "Username already taken" ? (
            <div className="flex items-center gap-1 text-[#EF4444]">
              <CircleX className="size-[14px]" />
              <p className=" text-[14px]">{errmes}</p>
            </div>
          ) : (
            errmes !== "" && (
              <div className="flex items-center gap-1 text-[#18BA51]">
                <CircleCheck className="size-[14px]" />
                <p className=" text-[14px]">{errmes}</p>
              </div>
            )
          )}
        </div>
      </div>
      <div className="flex px-6 pb-6 flex-col items-start gap-[10px] self-stretch">
        <button
          onClick={onclick}
          className="cursor-pointer w-full bg-black text-white flex h-[40px] px-4 py-2 justify-center items-center gap-2 rounded-[6px] "
        >
          Continue
        </button>
      </div>
    </div>
  );
};
