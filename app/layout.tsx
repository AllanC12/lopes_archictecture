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
  title: "Portfólio de Arquitetura por Carlos Eduardo Lopes",
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:ital,wght@0,100..900;1,100..900&family=Lora:ital,wght@0,400..700;1,400..700&display=swap" rel="stylesheet"/>
      </head>
      <body className={`${syncopate_init.variable} ${roboto_condensed_init.variable}`}>{children}</body>
    </html>
  );
}
