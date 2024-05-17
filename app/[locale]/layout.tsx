import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import Footer from "@/components/molecules/Footer";
import Navbar from "@/components/molecules/Navbar";
import { Toaster } from "@/components/ui/toaster";
import { type Locale } from "@/i18n/locale";

import "./globals.css";

import { ThemeProvider } from "./theme-provider";

const inter = Inter({ subsets: ["latin"] });

type RootLayoutParams = {
  locale: Locale;
};

// TODO: use dynamic metadata

export const metadata: Metadata = {
  title: "Rémi Lux | Full-Stack Engineer",
  description: `Passionate and skilled Full-Stack Engineer based in Paris, France.
                Specializing in Front-End, with a focus on React/Next.
                Dedicated to creating innovative solutions and striving to become the best version of myself.
                `,
};

type RootLayoutProps = {
  params: RootLayoutParams;
  children: React.ReactNode;
};

// TODO: generate static pages for each locale

export default async function RootLayout({
  params: { locale },
  children,
}: RootLayoutProps) {
  const i18nMessages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NextIntlClientProvider messages={i18nMessages}>
            <Navbar />
            {children}
            <Footer />
            <Toaster />
          </NextIntlClientProvider>
        </ThemeProvider>

        <Analytics />
      </body>
    </html>
  );
}
