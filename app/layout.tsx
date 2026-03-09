import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";
import { SmoothScrolling } from "@/components/SmoothScrolling";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Meu Portfolio",
  description: "Moderno e minimalista, este é o meu portfolio pessoal, onde apresento meus projetos e habilidades de forma clara e objetiva.",
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
