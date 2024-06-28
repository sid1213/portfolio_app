"use client";
import Footer from "@/components/Footer";
import "./globals.scss";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Navbar from "@/components/Navbar";
import { useState } from "react";

const inter = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isDark, setIsDark] = useState<boolean>(true);
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </head>
      <body
        className={`${inter.className} ${
          isDark ? "bg-black dark" : "bg-[#fff4ea] "
        } `}
      >
        <main className="container mx-auto">
          <Navbar isDark={isDark} setIsDark={setIsDark} />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
