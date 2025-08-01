import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "../styles/globals.css";
import { Toaster } from "@/components/ui/toaster";
import { SessionProvider } from "next-auth/react";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontHeading = localFont({
  src: "../assets/fonts/CalSans-Regular.ttf",
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "Keyword Alerts AI",
  description:
    "Monitor social media groups for keywords related to your business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontSans.variable} ${fontHeading.variable} antialiased`}>
        <SessionProvider>
          <main className="min-h-[calc(100vh-64px)]">{children}</main>
          <Toaster />
        </SessionProvider>
      </body>
    </html>
  );
}
