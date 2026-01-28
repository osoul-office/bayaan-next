import { UIProvider } from "@/providers";
import { themeScriptContent } from "@/utils/theme-script";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bayaan | بيان",
  description: "Welcome to Bayaan, a simple finance tracker.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className={inter.variable}>
        <script dangerouslySetInnerHTML={{ __html: themeScriptContent }} />
        <UIProvider>{children}</UIProvider>
      </body>
    </html>
  );
}
