import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "mt-banking",
  description: "Improve frontend skill",
};

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      Sidebar
      {children}
    </main>
  );
}
