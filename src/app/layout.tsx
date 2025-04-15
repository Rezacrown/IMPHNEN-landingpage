import type { Metadata } from "next";
import { Geist, Geist_Mono, Comic_Neue } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const comic_neue = Comic_Neue({
  variable: "--font-comic",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  icons: "/IMPNEN.jpeg",
  title: "IMPNEN - Ingin Menjadi Programer Handal Namun Enggan Ngoding",
  description: `
  Komunitas yempat dimana para sesepuh programing dari seluruh indonesia berkumpul
  `,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          `${geistSans.variable} ${geistMono.variable} ${comic_neue.variable} antialiased`
        )}
      >
        {children}
      </body>
    </html>
  );
}
