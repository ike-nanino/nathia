"use client"

import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";
import SideMenu from "@/components/SideMenu";
import { useVersionCheck } from "@/hooks/useVersionCheck";




const leagueSpartan = League_Spartan({ 
  subsets: ["latin"],
  weight: ["100", '200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-leagueSpartan'
 });

export const metadata: Metadata = {
  title: "Nathia",
  description: "it is Nathia's world & we are just living in it",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useVersionCheck();
  return (
    <html lang="en">
      <body
        className={`${leagueSpartan.variable} antialiased`}
      >
        <main className="flex h-screen max-h-screen">
          
          <SideMenu />

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto">{children}</div>
        </main>
      </body>
    </html>
  );
}
