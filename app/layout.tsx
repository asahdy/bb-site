import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import Header from "@/components/Header"
import Footer from "@/components/footer"
import MusicPlayer from "@/components/MusicPlayer"

import "./globals.css";
import { cn } from "@/lib/utils";

const roboto = Roboto({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"]
})

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"]
})

export const metadata: Metadata = {
  title: {
    default: "Billy Branch",
    template: "%s — Billy Branch",
  },
  description: "Official website of Billy Branch, Emmy Award winner, three-time Grammy nominee, and Blues Hall of Fame inductee.",
  icons: {
    icon: "/images/BIMB.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", roboto.variable, robotoMono.variable)}>
      <body className="antialiased min-h-screen flex flex-col">
        <Header/>
        <div className="flex-1">{children}</div>
        <Footer/>
        <MusicPlayer />
      </body>

    </html>
  );
}
