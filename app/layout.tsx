import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

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
    <html lang="en" className={inter.variable}>
      <body className="font-sans bg-stone-50 text-stone-900">
        <div className="max-w-2xl mx-auto px-6">
          <Nav />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
