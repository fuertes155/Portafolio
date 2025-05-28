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
      <body
        style={{
          margin: 0,
          padding: 0,
          fontFamily: "system-ui, sans-serif",
          backgroundColor: "var(--color-background)",
        }}
      >
        <Navbar />
        <main
          style={{
            paddingTop: "5rem",
            paddingLeft: "1rem",
            paddingRight: "1rem",
            width: "100%",
            maxWidth: "1280px",
            margin: "0 auto",
            boxSizing: "border-box",
          }}
        >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
