import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "NORTE — Moda masculina essencial",
  description:
    "Moda masculina contemporânea: básicos premium, camisas, calças e jaquetas para vestir com intenção.",
  applicationName: "NORTE",
  keywords: [
    "moda masculina",
    "roupas masculinas",
    "camisetas premium",
    "camisas masculinas",
    "NORTE"
  ],
  openGraph: {
    title: "NORTE — Moda masculina essencial",
    description: "Menos excesso. Mais presença.",
    type: "website",
    locale: "pt_BR"
  }
};

export const viewport: Viewport = {
  themeColor: "#11120f",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}