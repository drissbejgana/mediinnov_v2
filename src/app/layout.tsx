import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <Header/>
        {children}
      </body>
    </html>
  );
}
