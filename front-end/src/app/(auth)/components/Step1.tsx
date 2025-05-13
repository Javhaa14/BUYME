import { useState, useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { CircleCheck } from "lucide-react";

const formSchema = z.object({
  username: z
    .string()
    .min(1, { message: "Username is required" })
    .max(20, { message: "Username must be at most 20 characters" }),
});

export const Step1 = ({ onSubmit }: { onSubmit: any }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  const [usernameStatus, setUsernameStatus] = useState<string>("");

  useEffect(() => {
    const username = form.watch("username");

    if (!username) {
      setUsernameStatus("");
      return;
    }

    const timeoutId = setTimeout(async () => {
      setUsernameStatus("checking");

      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/user/check`,
          {
            name: username,
          }
        );

        if (response.data.mes === "Username available") {
          setUsernameStatus("available");
          form.clearErrors("username");
        } else {
          setUsernameStatus("taken");
          form.setError("username", {
            type: "manual",
            message: "Username already taken",
          });
        }
      } catch (error) {
        setUsernameStatus("error");
      }
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [form.watch("username")]);

  return (
    <div className="flex w-[407px] h-[286px] flex-col items-start rounded-lg shadow-sm">
      <div className="flex p-6 flex-col items-start gap-[6px] self-stretch">
        <p className="text-[#09090B] text-[24px] font-semibold">
          Create Your Account
        </p>
        <p className="text-[#71717A] text-[14px]">
          Choose a username for your page
        </p>
      </div>

      <div className="flex px-6 pb-6 flex-col items-start gap-[10px] self-stretch relative">
        <div className="text-[#09090B] flex flex-col items-start gap-[8px] self-stretch">
          <p className="font-semibold text-[14px]">Username</p>
          <Form {...form}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (usernameStatus === "available") {
                  form.handleSubmit(onSubmit)(e);
                } else {
                }
              }}
              className="w-full flex flex-col justify-between">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <input
                        autoComplete="off"
                        placeholder="Enter username here"
                        className={`focus:outline-none focus:ring-0 placeholder:text-[#71717A] flex w-full h-[40px] px-3 py-2 items-center self-stretch rounded-md mb-[10px] bg-white border-[1px]
                          ${
                            usernameStatus === "available" && "border-green-500"
                          }
                          ${usernameStatus === "error" && "border-[#EF4444]"}`}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="mb-[10px]" />
                    <p className="hidden"></p>
                    {usernameStatus === "checking" && (
                      <p className="mb-[10px] text-[14px] ml-3">
                        Checking username...
                      </p>
                    )}
                    {usernameStatus === "available" && (
                      <div className="flex gap-2 items-center mb-[10px] ml-3">
                        <CircleCheck className="size-4 text-green-500" />
                        <p className="text-green-500 text-[14px]">
                          Username available
                        </p>
                      </div>
                    )}
                    {usernameStatus === "error" && (
                      <div className="flex gap-2 items-center mb-[10px] ml-3">
                        <CircleCheck className="size-4 text-[#EF4444]" />
                        <p className="text-[#EF4444] text-[14px]">
                          Username already taken
                        </p>
                      </div>
                    )}
                  </FormItem>
                )}
              />
              <div className="flex flex-col items-center">
                <Button
                  className={`cursor-pointer top-[100px] absolute w-[359px] bg-black text-white flex h-[40px] px-4 py-2 justify-center items-center gap-2 rounded-[6px] mt-4`}
                  type="submit"
                  disabled={
                    usernameStatus === "checking" || usernameStatus === "taken"
                  }>
                  Continue
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};
