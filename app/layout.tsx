import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://finalistanbul.com"),
  title: {
    default: "Final Istanbul | Guide to Istanbul's Biggest Events",
    template: "%s | Final Istanbul",
  },
  description:
    "Independent travel and matchday guide to Istanbul's biggest sporting events, finals, stadiums, transport, stays and city experiences.",
  keywords: [
    "Istanbul events",
    "Istanbul finals",
    "Spanish Super Cup Istanbul 2027",
    "Conference League Final Istanbul 2027",
    "Turkish Grand Prix 2027",
    "Istanbul matchday guide",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://finalistanbul.com",
    siteName: "Final Istanbul",
    title: "Final Istanbul | The Biggest Events. One Extraordinary City.",
    description:
      "Independent travel and matchday guide to Istanbul's biggest sporting events.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Final Istanbul",
    description: "The Biggest Events. One Extraordinary City.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
