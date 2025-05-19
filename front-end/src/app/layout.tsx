"use client";

import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Buy Me Coffee",
//   description: "BUY",
// };
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthContext } from "../../context/Authcontext";
import { useState } from "react";
import { string } from "zod";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
type User = {
  about: string;
  avatarImage: string;
  backgroundImage: string;
  createdAt: string;
  id: number;
  name: string;
  socialMEdiaURL: string;
  successMessage: string;
  updatedAt: string;
  userId: number;
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [user, setUser] = useState<User | null>(null);

  return (
    <html lang="en">
      <body
        className={`bg-white w-full h-screen ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthContext.Provider value={{ user, setUser }}>
          {children}{" "}
        </AuthContext.Provider>
      </body>
    </html>
  );
}
