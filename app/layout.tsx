import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";

import "./globals.css";

import { Questrial } from 'next/font/google';

const inter = Questrial({
  subsets: ['latin'],
  weight: '400'
})

export const metadata: Metadata = {
  title: "Imaginify",
  description: "AI-powered image generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{
      variables: { colorPrimary: '#624cf5' }
    }}>
      <html lang="en">
        <body className={`${inter.className}`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}

