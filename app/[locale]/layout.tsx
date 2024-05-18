import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  getTranslations,
  unstable_setRequestLocale,
} from "next-intl/server";

import Footer from "@/components/molecules/Footer";
import Navbar from "@/components/molecules/Navbar";
import { Toaster } from "@/components/ui/toaster";
import { locales } from "@/i18n/locale";
import type { RouteParamsWithLocale } from "@/types";

import { ThemeProvider } from "./theme-provider";

import "./globals.css";

// -- Font
const INTER_FONT = Inter({ subsets: ["latin"] });

// -- Types

type RootLayoutParams = RouteParamsWithLocale;

type RootLayoutProps = {
  params: RootLayoutParams;
};

// -- Let's Work

// Only take into account pre-generated static paths => otherwise, 404
// https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#dynamicparams
export const dynamicParams = false;

export function generateStaticParams(): Array<RootLayoutParams> {
  return locales.map(locale => ({
    locale,
  }));
}

export async function generateMetadata({
  params: { locale },
}: RootLayoutProps): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function RootLayout({
  params: { locale },
  children,
}: React.PropsWithChildren<RootLayoutProps>) {
  // Details on https://next-intl-docs.vercel.app/docs/getting-started/app-router/with-i18n-routing#static-rendering
  unstable_setRequestLocale(locale);

  const i18nMessages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth">
      <body className={INTER_FONT.className}>
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
