"use client"

import { Linkedin, Github, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#111",
        color: "#fff",
        padding: "2.3rem 0 1.3rem 0",
        borderTop: "1.5px solid #232335",
        width: "100%",
      }}
    >
      <div
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap",
          gap: "2.5rem"
        }}
      >
        {/* Nombre y rol */}
        <div style={{ flex: "1 1 280px", minWidth: 250 }}>
          <h3 style={{ color: "var(--color-primary)", fontSize: "1.3rem", fontWeight: 800, marginBottom: 8 }}>
            Eval Samuel Molina Fuertes
          </h3>
          <p style={{ color: "#b5b5b5", fontSize: "1.11rem", margin: 0 }}>Ingeniero de Software</p>
        </div>

        {/* Frase motivacional */}
        <div
          style={{
            flex: "2 1 380px",
            minWidth: 290,
            textAlign: "center",
            alignSelf: "center"
          }}
        >
          <p style={{
            color: "#d6d3f5",
            fontSize: "1.1rem",
            fontStyle: "italic",
            marginBottom: 10,
            marginTop: 0
          }}>
            “El éxito es la suma de pequeños esfuerzos repetidos día tras día.”
          </p>
          <span style={{
            color: "var(--color-primary)",
            fontWeight: 600,
            fontSize: "1rem"
          }}>
            — Robert Collier
          </span>
        </div>

        {/* Redes sociales */}
        <div style={{
          flex: "1 1 200px",
          minWidth: 120,
          textAlign: "right"
        }}>
          <h4 style={{ fontSize: "1.09rem", fontWeight: 700, marginBottom: 8, color: "#fff" }}>
            Redes sociales
          </h4>
          <div style={{ display: "flex", gap: "1.05rem", justifyContent: "flex-end" }}>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#fff" }}
            >
              <Linkedin size={27} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#fff" }}
            >
              <Github size={27} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#fff" }}
            >
              <Instagram size={27} />
            </a>
          </div>
        </div>
      </div>
      {/* Derechos reservados */}
      <div
        style={{
          marginTop: "2.5rem",
          textAlign: "center",
          fontSize: "0.88rem",
          color: "#9f9fa9",
          letterSpacing: "0.5px"
        }}
      >
        © 2025 Eval Samuel Molina Fuertes. Todos los derechos reservados.
      </div>
    </footer>
  )
}
