import type { Metadata } from "next";
import { Protest_Riot, Quicksand } from "next/font/google";
import "./globals.css";
import MainLayout from "./components/layout/MainLayout";

const sansationSans = Protest_Riot({
  weight: ["400"],
  variable: "--font-sansation",
  display: "swap",
  subsets: ["latin"],
});

const quicksandSans = Quicksand({
  variable: "--font-quicksand",
  display: "swap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tipsy Padel Medan - Internal League",
  description: "Internal League",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sansationSans.variable} ${quicksandSans.variable} antialiased`}
      >
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}
