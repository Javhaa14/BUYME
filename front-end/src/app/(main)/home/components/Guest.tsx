import Image from "next/image";

export const Guest = () => {
  return (
    <div className="flex w-full p-3 flex-col items-start gap-[10px] rounded-lg bg-white">
      <div className="flex text-[#09090B] w-full h-[96px] flex-col items-start gap-4 ">
        <div className="flex w-full justify-between items-center">
          <div className="flex items-center gap-3">
            <Image alt="user" width={30} height={30} src="globe.svg"></Image>
            <div className="flex flex-col justify-center items-start gap-1">
              <p className="text-[14px] font-medium">Guest</p>
              <p className="text-[12px]"> instagram.com/welesley</p>
            </div>
          </div>
          <div className="flex w-[258px] flex-col justify-between items-end gap-1">
            <p className="text-[16px] font-bold">+$1</p>
            <p className="text-[12px] text-[#71717A]">10 hours ago</p>
          </div>
        </div>
        <p>
          Thank you for being so awesome everyday! You always manage to brighten
          up my day when I’m feeling down. Although $1 isn’t that much money
          it’s all I can contribute at the moment{" "}
        </p>
      </div>
    </div>
  );
};
