import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Osman Fatih Kilic",
  description: "ML Engineer Team Lead · Istanbul",
  openGraph: {
    title: "Osman Fatih Kilic",
    description: "ML Engineer Team Lead · Istanbul",
    url: "https://osmanfatihkilic.dev",
    siteName: "osmanfatihkilic.dev",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        <main className="max-w-[640px] mx-auto px-6">{children}</main>
      </body>
    </html>
  );
}
