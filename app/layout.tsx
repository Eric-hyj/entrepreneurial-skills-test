import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Header, Footer } from "@/components/site-chrome";
import { pageMetadata } from "@/lib/metadata";
import "./globals.css";

export const metadata: Metadata = pageMetadata();

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
