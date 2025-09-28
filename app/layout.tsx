import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { NuqsAdapter } from "nuqs/adapters/next";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eduvia",
  description: "Eduvia: Your Everyday Learning Buddy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable}`}>
        <NuqsAdapter>
          {children}
        </NuqsAdapter>
      </body>
    </html>
  );
}
