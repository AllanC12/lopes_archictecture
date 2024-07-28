import type { Metadata } from "next";
import type {Viewport} from 'next'
import { Syncopate,Roboto_Condensed } from "next/font/google";
import "./globals.css";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false
}

export const metadata: Metadata = {
  title: "Portfólio de arquitetura por Carlos Eduardo Lopes",
  description: "Site de arquitetura Carlos Eduardo Lopes , Portfólio de arquitetura , Arquitetura em São Francisco de Paula MG",
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
