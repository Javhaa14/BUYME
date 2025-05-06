export const Payment = () => {
  //   const form = [
  //     {
  //       el: "select",
  //       title: "Select country",
  //       con: "flex flex-col items-start gap-2 self-stretch w-full h-[62px]",
  //       na: "flex w-full h-[40px] px-2 py-3 items-center rounded-md border-[#E4E4E7] border-[1px] bg-white",
  //       placeholder: "",
  //     },
  //     {
  //       el: "input",
  //       title: "First name",
  //       title2: "Last name",
  //       con: "flex flex-col items-start gap-3 self-stretch w-full h-[62px]",
  //       na: "flex w-full h-[131px] min-h-[80px] px-2 py-3 items-center rounded-md border-[#E4E4E7] border-[1px] bg-white",
  //       placeholder: "Write about yourself here",
  //     },
  //     {
  //       el: "input",
  //       type: "number",
  //       title: "Enter card number",
  //       con: "flex flex-col items-start gap-2 self-stretch w-full h-[62px]",
  //       na: "flex w-full h-[40px] px-2 py-3 items-center rounded-md border-[#E4E4E7] border-[1px] bg-white",
  //       placeholder: "https://",
  //     },
  //     {
  //       el: "input",
  //       title: "Enter card number",
  //       con: "flex items-start gap-4 self-stretch w-full h-[58px]",
  //       na: "flex w-full h-[40px] px-2 py-3 items-center rounded-md border-[#E4E4E7] border-[1px] bg-white",
  //     },
  //   ];
  return (
    <div className="text-[#09090B] overflow-scroll flex w-[510px] max-w-[672px] flex-col items-start gap-6">
      <div className="flex py-6 flex-col items-start gap-[6px] self-stretch">
        <p className="text-[24px] font-semibold ">
          How would you like to be paid?
        </p>
        <p className="text-[14px] text-[#71717A]">
          Enter location and payment details
        </p>
      </div>
      <div className="flex flex-col items-center gap-6 self-stretch text-[#09090B]">
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col items-start gap-2 self-stretch">
            <p className="text-[14px] font-medium">Select country</p>
            <div className="flex flex-col items-start gap-1 self-stretch">
              <div></div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-3 self-stretch"></div>

          <div className="flex h-[62px] flex-col items-start gap-2 self-stretch"></div>

          <div className="flex items-start gap-4 self-stretch"></div>
        </div>
        <div className="flex flex-col justify-end items-start gap-[10px]"></div>
      </div>
    </div>
  );
};
