import type { Metadata } from "next";
import "../styles/globals.css";
import { Inter } from "next/font/google"
import localFont from "next/font/local"

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontHeading = localFont({
  src: "../assets/fonts/CalSans-Regular.ttf",
  variable: "--font-heading",
})

export const metadata: Metadata = {
  title: "Keyword Sentry",
  description: "Monitor social media groups for keywords related to your business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontSans.variable} ${fontHeading.variable} antialiased`}
      >
        <main className="min-h-[calc(100vh-64px)]">{children}</main>
      </body>
    </html>
  );
}
