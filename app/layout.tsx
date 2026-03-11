import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";
import { SmoothScrolling } from "@/components/SmoothScrolling";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lucas Simão | Desenvolvedor de Software",
  description: "Portfólio de Lucas Simão. Descubra meus projetos em React, Next.js, UI/UX e desenvolvimento focado em criar experiências modernas e resolutivas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <SmoothScrolling>
              {children}
            </SmoothScrolling>
          </ThemeProvider>
      </body>
    </html>
  );
}
