import type { Metadata } from "next";
import { Roboto_Slab, Lora } from 'next/font/google';
import "./globals.css";
import { twMerge } from "tailwind-merge";

const lora = Lora({ subsets: ['latin'], variable: "--font-sans" });
const roboto = Roboto_Slab({ subsets: ['latin'], variable: "--font-serif" });

export const metadata: Metadata = {
  title: "TurboMind",
  description: "TurboMind",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge(lora.variable, roboto.variable, "antialiased font-sans")}>
        {children}
      </body>
    </html>
  );
}
