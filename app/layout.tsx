export const dynamic = "force-dynamic";

import type { Metadata } from "next";
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
      <body className="courier-font">{children}</body>
    </html>
  );
}
