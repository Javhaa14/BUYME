import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useState } from "react";
import { Button } from "@/components/ui/button";

// Schema
const bankinfoSchema = z.object({
  country: z.string().min(1, { message: "Country is required" }),
  firstName: z.string().min(1, { message: "First name is required" }).max(20),
  lastName: z.string().min(1, { message: "Last name is required" }).max(20),
  cardNumber: z
    .string()
    .min(16, { message: "Card number must be 16 digits" })
    .max(19),
  expiryMonth: z
    .string()
    .min(1, { message: "Expiry month is required" })
    .max(2),
  expiryYear: z.string().min(2, { message: "Expiry year is required" }).max(4),
  cvc: z.string().min(3, { message: "CVC must be 3 digits" }).max(4),
});

// Types
type BankInfo = z.infer<typeof bankinfoSchema>;

export const Payment = () => {
  const countries = ["United States", "Mongolia", "Canada", "United Kingdom"];

  const form = useForm<BankInfo>({
    resolver: zodResolver(bankinfoSchema),
    defaultValues: {
      country: "",
      firstName: "",
      lastName: "",
      cardNumber: "",
      expiryMonth: "",
      expiryYear: "",
      cvc: "",
    },
  });

  const onSubmit = (data: BankInfo) => {
    console.log("Form submitted", data);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="text-[#09090B] overflow-scroll flex w-[510px] max-w-[672px] flex-col items-start gap-6 border-[1px] border-black rounded-xl p-10"
      >
        <div className="flex py-6 flex-col items-start gap-[6px] self-stretch">
          <p className="text-[24px] font-semibold">
            How would you like to be paid?
          </p>
          <p className="text-[14px] text-[#71717A]">
            Enter location and payment details
          </p>
        </div>

        {/* Country Select */}
        <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem className="w-full">
              <p className="text-[14px] font-medium">Select country</p>
              <FormControl>
                <select
                  {...field}
                  className="w-full h-[40px] px-3 py-2 border border-[#E4E4E7] rounded-md"
                >
                  <option value="">Select</option>
                  {countries.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Name Fields */}
        <div className="flex gap-4 w-full">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="w-full">
                <p className="text-[14px] font-medium">First name</p>
                <FormControl>
                  <input
                    {...field}
                    placeholder="First name"
                    className="w-full px-3 py-2 border border-[#E4E4E7] rounded-md"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className="w-full">
                <p className="text-[14px] font-medium">Last name</p>
                <FormControl>
                  <input
                    {...field}
                    placeholder="Last name"
                    className="w-full px-3 py-2 border border-[#E4E4E7] rounded-md"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Card Number */}
        <FormField
          control={form.control}
          name="cardNumber"
          render={({ field }) => (
            <FormItem className="w-full">
              <p className="text-[14px] font-medium">Card number</p>
              <FormControl>
                <input
                  {...field}
                  type="text"
                  placeholder="XXXX-XXXX-XXXX-XXXX"
                  className="w-full px-3 py-2 border border-[#E4E4E7] rounded-md"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Expiry + CVC */}
        <div className="flex gap-4 w-full">
          <FormField
            control={form.control}
            name="expiryMonth"
            render={({ field }) => (
              <FormItem className="w-full">
                <p className="text-[14px] font-medium">Expiry Month</p>
                <FormControl>
                  <input
                    {...field}
                    type="text"
                    placeholder="MM"
                    className="w-full px-3 py-2 border border-[#E4E4E7] rounded-md"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="expiryYear"
            render={({ field }) => (
              <FormItem className="w-full">
                <p className="text-[14px] font-medium">Expiry Year</p>
                <FormControl>
                  <input
                    {...field}
                    type="text"
                    placeholder="YYYY"
                    className="w-full px-3 py-2 border border-[#E4E4E7] rounded-md"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="cvc"
            render={({ field }) => (
              <FormItem className="w-full">
                <p className="text-[14px] font-medium">CVC</p>
                <FormControl>
                  <input
                    {...field}
                    type="text"
                    placeholder="CVC"
                    className="w-full px-3 py-2 border border-[#E4E4E7] rounded-md"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Submit Button */}
        <div className="flex w-full justify-end mt-4">
          <Button
            type="submit"
            className="bg-black text-white px-6 py-2 rounded-md"
          >
            Continue
          </Button>
        </div>
      </form>
    </Form>
  );
};
