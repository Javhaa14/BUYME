import { useState } from "react";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";
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

const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(50, { message: "Password must be at most 50 characters long" })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter",
    })
    .regex(/[0-9]/, { message: "Password must contain at least one number" })
    .regex(/[@$!%*?&]/, {
      message: "Password must contain at least one special character",
    }),
});

export const Step2 = ({ onSubmit }: { onSubmit: any }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <div className="flex w-[407px] h-[400px] flex-col items-start rounded-lg shadow-sm">
      <div className="flex p-6 flex-col items-start gap-[6px] self-stretch">
        <p className="text-[#09090B] text-[24px] font-semibold">
          Create Your Account
        </p>
        <p className="text-[#71717A] text-[14px]">
          Please enter your email and password
        </p>
      </div>

      <div className="flex px-6 pb-6 flex-col items-start gap-[10px] self-stretch">
        <div className="text-[#09090B] flex flex-col items-start gap-[8px] self-stretch">
          <p className="font-semibold text-[14px]">Email</p>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full relative flex flex-col">
              <FormField
                control={form.control}
                name="email"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormControl>
                      <input
                        placeholder="Enter your email"
                        type=""
                        autoComplete="off"
                        className={`focus:outline-none focus:ring-0 border-[1px] placeholder:text-[#71717A] flex w-full h-[40px] px-3 py-2 items-center self-stretch rounded-md mb-[40px] bg-white 
                          ${
                            fieldState.error
                              ? "border-[#EF4444]"
                              : "border-[#E4E4E7]"
                          }`}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="bottom-27.5 absolute" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormControl>
                      <input
                        placeholder="Enter your password"
                        type="password"
                        autoComplete="off"
                        className={`focus:outline-none  border-[1px] focus:ring-0 placeholder:text-[#71717A] flex w-full h-[40px] px-3 py-2 items-center self-stretch rounded-md mb-[60px] bg-white 
                          ${
                            fieldState.error
                              ? "border-[#EF4444]"
                              : "border-[#E4E4E7]"
                          }`}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="bottom-5 absolute" />
                  </FormItem>
                )}
              />

              <Button
                className={`cursor-pointer w-full bg-black text-white flex h-[40px] px-4 py-2 justify-center items-center gap-2 rounded-[6px] absolute bottom-[-40]`}
                type="submit">
                Continue
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};
