import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "./globals.css";
import { Noto_Sans } from "next/font/google";
import { Providers } from "../provider";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import ThemeToggler from "@/components/ui/togglers/themeToggler";
import { GoUp } from "@/components/ui/buttons/goUp";

const font = Noto_Sans({
  subsets: ["latin"],
  weight: "300",
});

export const metadata: Metadata = {
  title: "lukaszfabia.dev",
  description: "Lukasz Fabia's personal website",
};

export const viewport = "width=device-width, initial-scale=1.0";

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <html lang={locale} suppressHydrationWarning className="scroll-smooth">
        <head>
          <link rel="icon" href="/favicon.ico" />
        </head>
        <body className={font.className}>
          <Providers>
            <Navbar />
            {children}
            <GoUp />
            <ThemeToggler />
            <Footer />
          </Providers>
        </body>
      </html>
    </NextIntlClientProvider>
  );
}
