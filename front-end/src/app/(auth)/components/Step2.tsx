export const Step2 = ({ username }: { username: string }) => {
  return (
    <div className="flex w-[407px] flex-col items-start rounded-lg shadow-sm">
      <div className="flex p-6 flex-col items-start gap-[6px] self-stretch">
        <p className="text-[#09090B] text-[24px] font-semibold">
          Welcome, {username}
        </p>
        <p className="text-[#71717A] text-[14px]">
          Connect email and set a password
        </p>
      </div>
      <div className="text-[#09090B] flex px-6 pb-6 flex-col items-start gap-[12px] self-stretch">
        <div className="flex flex-col items-start gap-[8px] self-stretch">
          <p className="text-[#09090B] text-[14px]">Email</p>
          <input
            placeholder="Enter email"
            className="placeholder:text-[#71717A] flex h-[40px] px-3 py-2 items-center self-stretch rounded-md border-[1px] border-[#E4E4E7] bg-white"
          ></input>
        </div>
        <div className="text-[#09090B] flex flex-col items-start gap-[8px] self-stretch">
          <p className="text-[#09090B] text-[14px]">Password</p>
          <input
            type="password"
            placeholder="Enter password"
            className="placeholder:text-[#71717A] flex h-[40px] px-3 py-2 items-center self-stretch rounded-md border-[1px] border-[#E4E4E7] bg-white"
          ></input>
        </div>
      </div>
      <div className="flex px-6 pb-6 flex-col items-start gap-[10px] self-stretch">
        <button className="w-full bg-black text-white flex h-[40px] px-4 py-2 justify-center items-center gap-2 rounded-[6px] ">
          Continue
        </button>
      </div>
    </div>
  );
};
