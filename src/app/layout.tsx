import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { HOME_PAGE } from "@/data/sheetData";

export const SITE_URL = "https://www.chimneysweeprockwall.site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: HOME_PAGE.seoTitle,
  description: HOME_PAGE.metaDescription,
  verification: {
    google: "19bv_CRHRWvPPH2oXUFi2DIwde5QHBoGUfE6Z4227yc",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: `${SITE_URL}/`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col antialiased selection:bg-[#f5b400] selection:text-[#111111]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
