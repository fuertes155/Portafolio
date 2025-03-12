import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portafolio Samuel Molina",
  description: "Mi Portafolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
