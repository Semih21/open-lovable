import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NoSSR from "@/components/NoSSR";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Open Lovable",
  description: "Re-imagine any website in seconds with AI-powered website builder.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <NoSSR fallback={<div className="h-screen bg-gray-100 flex items-center justify-center">Loading...</div>}>
          {children}
        </NoSSR>
      </body>
    </html>
  );
}
