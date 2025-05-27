"use client"

import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Github, Youtube, Send } from "lucide-react"

export default function Contacto() {
  return (
    <section
      id="contacto"
      style={{
        minHeight: "100vh",
        background: "var(--color-background)",
        padding: "4rem 0 2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2
        style={{
          fontSize: "3rem",
          fontWeight: 800,
          color: "var(--color-primary)",
          marginBottom: "2.6rem",
          textAlign: "center"
        }}
      >
        Contacta Conmigo
      </h2>
      <div
        style={{
          display: "flex",
          gap: "4rem",
          width: "100%",
          maxWidth: "1100px",
          justifyContent: "center",
          flexWrap: "wrap"
        }}
      >
        {/* Columna izquierda - Info */}
        <div style={{ flex: "1 1 320px", minWidth: 300 }}>
          <h3 style={{ color: "var(--color-text)", fontWeight: 700, fontSize: "2rem", marginBottom: "1.7rem" }}>
            Información de Contacto
          </h3>
          <div style={{ display: "flex", alignItems: "center", gap: "1.1rem", marginBottom: "1.4rem" }}>
            <Mail size={27} color="#a78bfa" />
            <div>
              <div style={{ fontWeight: 700, fontSize: "1.1rem" }}>Email</div>
              <div style={{ color: "var(--color-muted)", fontSize: "1rem" }}>contacto@ejemplo.com</div>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "1.1rem", marginBottom: "1.4rem" }}>
            <Phone size={27} color="#a78bfa" />
            <div>
              <div style={{ fontWeight: 700, fontSize: "1.1rem" }}>Teléfono</div>
              <div style={{ color: "var(--color-muted)", fontSize: "1rem" }}>+34 123 456 789</div>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "1.1rem", marginBottom: "2rem" }}>
            <MapPin size={27} color="#a78bfa" />
            <div>
              <div style={{ fontWeight: 700, fontSize: "1.1rem" }}>Ubicación</div>
              <div style={{ color: "var(--color-muted)", fontSize: "1rem" }}>Madrid, España</div>
            </div>
          </div>
          <div style={{ marginBottom: "1.3rem", fontWeight: 700, color: "var(--color-text)" }}>
            Sígueme en
          </div>
          <div style={{ display: "flex", gap: "1.2rem", marginBottom: "2.5rem" }}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: "#a78bfa" }}>
              <Facebook size={28} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: "#a78bfa" }}>
              <Twitter size={28} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: "#a78bfa" }}>
              <Instagram size={28} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{ color: "#a78bfa" }}>
              <Github size={28} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" style={{ color: "#a78bfa" }}>
              <Youtube size={28} />
            </a>
          </div>
        </div>
        {/* Columna derecha - Formulario */}
        <div style={{ flex: "2 1 400px", minWidth: 320 }}>
          <h3 style={{ color: "var(--color-text)", fontWeight: 700, fontSize: "2rem", marginBottom: "1.7rem" }}>
            Envíame un Mensaje
          </h3>
          <form style={{ display: "flex", flexDirection: "column", gap: "1.4rem" }}>
            <div>
              <label style={{ color: "var(--color-text)", fontWeight: 600, fontSize: "1.05rem" }}>
                Nombre
                <input
                  type="text"
                  placeholder="Tu nombre"
                  style={{
                    display: "block",
                    marginTop: 6,
                    width: "100%",
                    background: "var(--color-bg-card, #232335)",
                    color: "var(--color-text)",
                    border: "1.7px solid #35384a",
                    borderRadius: "0.45rem",
                    padding: "0.75rem 1rem",
                    fontSize: "1rem",
                  }}
                />
              </label>
            </div>
            <div>
              <label style={{ color: "var(--color-text)", fontWeight: 600, fontSize: "1.05rem" }}>
                Email
                <input
                  type="email"
                  placeholder="tu@email.com"
                  style={{
                    display: "block",
                    marginTop: 6,
                    width: "100%",
                    background: "var(--color-bg-card, #232335)",
                    color: "var(--color-text)",
                    border: "1.7px solid #35384a",
                    borderRadius: "0.45rem",
                    padding: "0.75rem 1rem",
                    fontSize: "1rem",
                  }}
                />
              </label>
            </div>
            <div>
              <label style={{ color: "var(--color-text)", fontWeight: 600, fontSize: "1.05rem" }}>
                Mensaje
                <textarea
                  rows={5}
                  placeholder="Tu mensaje..."
                  style={{
                    display: "block",
                    marginTop: 6,
                    width: "100%",
                    background: "var(--color-bg-card, #232335)",
                    color: "var(--color-text)",
                    border: "1.7px solid #35384a",
                    borderRadius: "0.45rem",
                    padding: "0.75rem 1rem",
                    fontSize: "1rem",
                    resize: "vertical"
                  }}
                />
              </label>
            </div>
            <button
              type="submit"
              style={{
                background: "var(--color-primary)",
                color: "var(--color-text)",
                border: "none",
                borderRadius: "0.45rem",
                padding: "1rem",
                fontWeight: 700,
                fontSize: "1.12rem",
                cursor: "pointer",
                marginTop: "0.6rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.8rem"
              }}
            >
              <Send size={20} /> Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
