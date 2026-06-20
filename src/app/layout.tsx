import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { SITE_URL, assetPath } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  icons: { icon: assetPath("/logo.png") },
  title: {
    default: "Chinel Prints — Printing & Branding Company in Lagos, Nigeria",
    template: "%s — Chinel Prints",
  },
  description:
    "Chinel Prints is a leading printing company in Lagos offering interior frames, acrylic signage, business branding, event printing, and custom printing across Nigeria.",
  keywords: [
    "printing company in Lagos",
    "branding company in Lagos",
    "interior frames Nigeria",
    "custom printing Nigeria",
    "business branding Lagos",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_NG",
    siteName: "Chinel Prints",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${plusJakarta.variable}`}
        suppressHydrationWarning
      >
        <Header />
        {children}
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}