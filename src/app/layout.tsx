import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { THEME_STORAGE_KEY } from "@/lib/theme";
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
  icons: {
    icon: [
      { url: assetPath("/favicon.svg"), type: "image/svg+xml" },
      { url: assetPath("/favicon.ico"), sizes: "32x32" },
    ],
    shortcut: assetPath("/favicon.ico"),
  },
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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var k=${JSON.stringify(THEME_STORAGE_KEY)};var s=localStorage.getItem(k);var d=window.matchMedia("(prefers-color-scheme: dark)").matches;var t=s==="dark"||s==="light"?s:(d?"dark":"light");document.documentElement.setAttribute("data-theme",t);document.documentElement.style.colorScheme=t;}catch(e){}})();`,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${plusJakarta.variable}`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
          <WhatsAppFloat />
        </ThemeProvider>
      </body>
    </html>
  );
}