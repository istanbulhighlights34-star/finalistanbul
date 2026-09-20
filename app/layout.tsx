import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const GA_MEASUREMENT_ID = "G-8BXYDPK3F8";

export const metadata: Metadata = {
  metadataBase: new URL("https://finalsatlas.com"),
  title: {
    default: "Finals Atlas | Follow the Final. Discover the City.",
    template: "%s | Finals Atlas",
  },
  description:
    "A global travel guide to major sports finals: dates, host cities, stadiums, where to stay, how to get there and what to do around the event.",
  keywords: [
    "sports finals",
    "finals calendar",
    "final travel guide",
    "Champions League final travel",
    "Europa League final travel",
    "stadium guides",
    "host city guides",
    "sports travel",
  ],
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "eN-xIzqw7433dK0SioG2ki9-CpoHl0N73yCcI8Sm1cY",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://finalsatlas.com",
    siteName: "Finals Atlas",
    title: "Finals Atlas | Follow the Final. Discover the City.",
    description:
      "A global travel guide to major sports finals, host cities and stadiums.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Finals Atlas",
    description: "Follow the Final. Discover the City.",
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
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </html>
  );
}
