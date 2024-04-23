import type { Metadata } from "next";
import { Syncopate,Roboto_Condensed } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lopes Architecture",
  description: "Site de arquitetura , Lopes Architecture , Arquitetura em São Francisco de Paula",
};


const syncopate_init = Syncopate({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-syncopate"
})
const roboto_condensed_init = Roboto_Condensed({
  subsets: ["latin"],
  weight: "400",
  variable: "--roboto_condensed"
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${syncopate_init.variable} ${roboto_condensed_init.variable}`}>{children}</body>
    </html>
  );
}
