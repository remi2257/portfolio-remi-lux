import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Footer from "@/components/molecules/Footer";
import Navbar from "@/components/molecules/Navbar";
import { Toaster } from "@/components/ui/toaster";

import "./globals.css";
import { ThemeProvider } from "./theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rémi Lux",
  description:
    "The best full-stack developer in France (and maybe in the world)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
          <Footer />

          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
