export const dynamic = "force-dynamic";

import type { Metadata } from "next";
import Script from "next/script";
import BackGround from "../components/animations/ThreeDBackground";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sandeeb Adhikari",
  description: "Portfolio website.",
  icons: {
    icon: "/icons/logo512.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-G1PXHE3QBS"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-G1PXHE3QBS');
    `}
      </Script>

      <body
        suppressHydrationWarning
        className="courier-font relative overflow-x-hidden"
      >
        <BackGround />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
