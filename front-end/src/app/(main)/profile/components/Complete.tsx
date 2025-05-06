import { Camera } from "lucide-react";

export const Complete = () => {
  const form = [
    {
      el: "input",
      title: "Name",
      clas: "flex flex-col items-start gap-3 self-stretch w-full h-[62px]",
      na: "flex w-full h-[40px] px-2 py-3 items-center rounded-md border-[#E4E4E7] border-[1px] bg-white",
      placeholder: "Enter your name here",
    },
    {
      el: "text-area",
      title: "About",
      clas: "flex flex-col items-start gap-2 self-stretch w-full h-[113px]",
      na: "flex w-full h-[131px] min-h-[80px] px-2 py-3 items-center rounded-md border-[#E4E4E7] border-[1px] bg-white",

      placeholder: "Write about yourself here",
    },
    {
      el: "input",
      title: "Social media URL",
      clas: "flex flex-col items-start gap-3 self-stretch w-full h-[62px]",
      na: "flex w-full h-[40px] px-2 py-3 items-center rounded-md border-[#E4E4E7] border-[1px] bg-white",

      placeholder: "https://",
    },
  ];
  return (
    <div className="text-[#09090B] overflow-scroll flex w-[510px] max-w-[672px] flex-col items-start gap-6">
      <div className="flex flex-col items-start gap-[1px]">
        <p className=" text-[24px] font-semibold">Complete your profile page</p>
      </div>
      <div className="flex flex-col items-start gap-3 relative">
        <p className="text-[14px] font-medium">Add photo</p>
        <input
          type="file"
          className="text-transparent absolute top-8.5 size-[160px] justify-center items-center rounded-full cursor-pointer"
        ></input>
        <div className="flex size-[160px] justify-center items-center rounded-full border-[2px] border-dashed border-black bg-white">
          <Camera className="" />
        </div>
      </div>
      <div className="flex w-full flex-col items-start gap-3 text-[#09090B] text-[14px]">
        {form.map((val, i) => {
          return val.el == "input" ? (
            <div key={i} className={val.clas}>
              <p>{val.title}</p>
              <input className={val.na} placeholder={val.placeholder}></input>
            </div>
          ) : (
            <div key={i} className={val.clas}>
              <p>{val.title}</p>
              <textarea
                className={val.na}
                placeholder={val.placeholder}
              ></textarea>
            </div>
          );
        })}
      </div>

      <div className="flex flex-col w-full items-end justify-end gap-[10px]">
        <button className="cursor-pointer flex w-[246px] h-[40px] px-4 py-2 justify-center items-center gap-2 rounded-md bg-black text-white">
          Continue
        </button>
      </div>
    </div>
  );
};
