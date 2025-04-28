import type { Metadata } from "next";
import "@/lib/pixel-retroui-setup.js";
import "./globals.css";

export const metadata: Metadata = {
  title: "Game Recommendation AI",
  description: "Game Recommendation AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-minecraft">{children}</body>
    </html>
  );
}
