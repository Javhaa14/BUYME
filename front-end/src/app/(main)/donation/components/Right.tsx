import { Coffee } from "lucide-react";

export const Right = () => {
  const don = [1, 2, 5, 10];
  return (
    <div className="flex w-[628px] h-full p-6 flex-col items-start gap-8 rounded-lg border-[1px] border-[#E4E4E5] bg-white text-[#18181B]">
      <div className="flex flex-col items-start gap-6">
        <div className="flex flex-col items-start gap-3">
          <p className="text-[24px] font-semibold">Buy Jake a Coffee</p>
        </div>
        <div className="flex flex-col items-start gap-2">
          <p className="text[14px] font-medium">Select amount:</p>
          <div className="flex items-center gap-3">
            {don.map((m, i) => {
              return (
                <button
                  key={i}
                  className="cursor-pointer  flex h-10 px-4 py-2 justify-center items-center gap-2 rounded-md bg-white">
                  <Coffee />
                  <p className="text-[14px] font-medium">${m}</p>
                </button>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex w-[580px] flex-col items-start gap-5">
        <div className="flex w-full flex-col items-start gap-2">
          <p className="text-[14px] font-medium">
            Enter BuyMeCoffee or social acount URL:
          </p>
          <input
            placeholder="buymeacoffee.com/"
            className="flex w-full h-10 px-4 py2 items-center rounded-md border-[1px] border-[#E4E4E7]"></input>
        </div>

        <div className="flex w-full flex-col items-start gap-2">
          <p className="text-[14px] font-medium">Special message: </p>
          <textarea
            placeholder="Please write your message here"
            className="flex w-full min-h-[80px] h-10 px-4 py2 items-center rounded-md border-[1px] border-[#E4E4E7]"></textarea>
        </div>
      </div>
      <button className="flex w-full h-10 px-4 py-2 justify-center items-center gap-2 rounded-md text-white bg-[#18181B]">
        Support
      </button>
    </div>
  );
};
