export const Step1 = () => {
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
        <div className="flex flex-col items-start gap-[8px] self-stretch">
          <p className="text-[#09090B] text-[14px]">Username</p>
          <input
            placeholder="Enter username here"
            className="placeholder:text-[#71717A] flex h-[40px] px-3 py-2 items-center self-stretch rounded-md border-[1px] border-[#E4E4E7] bg-white"></input>
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
