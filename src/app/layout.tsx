import "./globals.css"
import type { Metadata } from "next"
import Navbar from "../components/ui/Navbar"
import Footer from "../components/ui/Footer"

export const metadata: Metadata = {
  title: "Portafolio | Eval Samuel Molina Fuertes",
  description: "Portafolio profesional de Eval Samuel Molina Fuertes",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <main style={{ paddingTop: "5rem" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
