import "@radix-ui/themes/styles.css";
import "./theme-config.css";
import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/Navbar";
import { Theme, ThemePanel } from "@radix-ui/themes";

const inter = Inter({
  subsets: ["latin"],
  // display:'swap',
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Issue Tracker",
  description: "Issue Tracking System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={inter.variable}
      >
        <Theme appearance="light" accentColor="violet">
          <Navbar />

          <main className="px-3 max-w-xl space-y-3">{children}</main>
        </Theme>
      </body>
    </html>
  );
}
