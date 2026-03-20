import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const ogImageUrl = `${siteUrl}/og/default.svg`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ramil L. Kaharian — Portfolio",
    template: "%s | Ramil L. Kaharian",
  },
  description:
    "Web and Android game developer portfolio — projects, skills, and contact information for Ramil L. Kaharian.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Ramil L. Kaharian",
    title: "Ramil L. Kaharian — Portfolio",
    description:
      "Web and Android game developer — explore skills, portfolio projects, and get in touch.",
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "Ramil L. Kaharian Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ramil L. Kaharian — Portfolio",
    description:
      "Web and Android game developer — explore skills, portfolio projects, and get in touch.",
    images: [ogImageUrl],
  },
  icons: [
    {
      rel: "icon",
      url: "/favicon.svg",
    },
    {
      rel: "apple-touch-icon",
      url: "/apple-touch-icon.svg",
    },
  ],
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
