import { useState } from "react";

export const Step3 = ({
  onSubmit,
}: {
  onSubmit: (values: { email: string; password: string }) => void;
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    onSubmit({ email, password });
  };

  return (
    <div className="flex w-[407px] flex-col items-start rounded-lg shadow-sm">
      <div className="flex p-6 flex-col items-start gap-[6px] self-stretch">
        <p className="text-[#09090B] text-[24px] font-semibold">Welcome back</p>
      </div>
      <div className="flex px-6 pb-6 flex-col items-start gap-[12px] self-stretch">
        <div className="text-[#09090B] flex flex-col items-start gap-[8px] self-stretch">
          <p className="text-[#09090B] text-[14px]">Email</p>
          <input
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="focus:outline-none focus:ring-0 placeholder:text-[#71717A] flex h-[40px] px-3 py-2 items-center self-stretch rounded-md border-[1px] border-[#E4E4E7] bg-white"
          />
        </div>
        <div className="text-[#09090B] flex flex-col items-start gap-[8px] self-stretch">
          <p className="text-[#09090B] text-[14px]">Password</p>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="focus:outline-none focus:ring-0 placeholder:text-[#71717A] flex h-[40px] px-3 py-2 items-center self-stretch rounded-md border-[1px] border-[#E4E4E7] bg-white"
          />
        </div>
      </div>
      <div className="flex px-6 pb-6 flex-col items-start gap-[10px] self-stretch">
        <button
          onClick={handleSubmit}
          className="cursor-pointer w-full bg-black text-white flex h-[40px] px-4 py-2 justify-center items-center gap-2 rounded-[6px]"
        >
          Continue
        </button>
      </div>
    </div>
  );
};
