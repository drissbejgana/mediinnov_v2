import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getLocale, getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: 'Home - MEDIINNOV',
  description: "Search Here 12 Years of Experience ABOUT US Accompagnement de centres d'imagerie. MEDIINOV est spécialisée dans la commercialisation des dispositifs médicaux et équipements, pour les secteurs public et privé. A la fois éditeur, distributeur et intégrateur, MEDIINNOV est le seul groupe au Maroc à proposer une solution globale totalement intégrée couvrant l’intégralité des besoins d'un",
  openGraph:{
    title: 'Home - MEDIINNOV',
    url:'https://mediinnov.ma',
    siteName:'mediinnov',
    images:[
      {
        url:'/images/bg_mediinnov.jpg',
        width:1260,
        height:800
      }
    ]
  }

};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const locale = await getLocale();

  const messages = await getMessages();


  return (

    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <NextIntlClientProvider messages={messages}>
            <Header/>
              {children}
              <Footer/>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
