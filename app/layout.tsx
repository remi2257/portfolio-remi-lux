import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Footer from "@/components/molecules/Footer";
import Navbar from "@/components/molecules/Navbar";
import { Toaster } from "@/components/ui/toaster";

import "./globals.css";
import { ThemeProvider } from "./theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rémi Lux - Full-Stack Developer",
  description: `Passionate and skilled full-stack developer based in Paris, France.
                Specializing in Front-End, with a focus on React/Next.
                Dedicated to creating innovative solutions and striving to become the best version of myself.
                `,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
          <Footer />

          <Toaster />
        </ThemeProvider>

        <Analytics />
      </body>
    </html>
  );
}
