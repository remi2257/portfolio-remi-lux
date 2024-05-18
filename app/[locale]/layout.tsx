import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";

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

type RootLayoutProps = {
  params: RootLayoutParams;
};

// TODO: generate static pages for each locale
// export function generateStaticParams(): Array<RootLayoutParams> {
//   return locales.map(locale => ({
//     locale,
//   }));
// }

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("metadata");

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function RootLayout({
  params: { locale },
  children,
}: React.PropsWithChildren<RootLayoutProps>) {
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
