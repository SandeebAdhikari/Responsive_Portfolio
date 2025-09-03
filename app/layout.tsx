export const dynamic = "force-dynamic";

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sandeeb Adhikari",
  description: "Portfolio website.",
  icons: {
    icon: "./assets/images/projects/logos/logo512.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ fontFamily: '"Courier New", Courier, monospace' }}>
        {children}
      </body>
    </html>
  );
}
