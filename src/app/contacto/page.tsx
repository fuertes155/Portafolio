"use client"

import { Mail, Phone, MapPin, Facebook, Instagram, Github, Youtube, Send } from "lucide-react";

export default function Contacto() {
  return (
    <section
      id="contacto"
      style={{
        minHeight: "100vh",
        background: "var(--color-background)",
        padding: "4rem 1rem 2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2
        style={{
          fontSize: "2.5rem",
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
          gap: "2rem",
          width: "100%",
          maxWidth: "1100px",
          justifyContent: "center",
          flexWrap: "wrap"
        }}
      >
        {/* Columna izquierda - Info */}
        <div style={{ flex: "1 1 320px", minWidth: "100%", maxWidth: 500 }}>
          <h3 style={{ color: "var(--color-text)", fontWeight: 700, fontSize: "1.8rem", marginBottom: "1.7rem" }}>
            Información de Contacto
          </h3>
          {[{
            icon: <Mail size={27} color="var(--color-primary)" />, label: "Email", value: "sam33mol4@gmail.com"
          }, {
            icon: <Phone size={27} color="var(--color-primary)" />, label: "Teléfono", value: "3158598604"
          }, {
            icon: <MapPin size={27} color="var(--color-primary)" />, label: "Ubicación", value: "Pasto, Nariño"
          }].map((item, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "1.1rem", marginBottom: "1.4rem" }}>
              {item.icon}
              <div>
                <div style={{ fontWeight: 700, fontSize: "1.1rem" }}>{item.label}</div>
                <div style={{ color: "var(--color-muted)", fontSize: "1rem" }}>{item.value}</div>
              </div>
            </div>
          ))}
          <div style={{ marginBottom: "1.3rem", fontWeight: 700, color: "var(--color-text)" }}>
            Sígueme en
          </div>
          <div style={{ display: "flex", gap: "1.2rem", flexWrap: "wrap", marginBottom: "2.5rem" }}>
            <a
              href="https://facebook.com/SamuelFuertes"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--color-primary)" }}
              aria-label="Facebook de Eval Samuel Molina"
            >
              <Facebook size={28} aria-hidden="true" />
            </a>
            <a
              href="https://instagram.com/molinafuertes"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--color-primary)" }}
              aria-label="Instagram de Eval Samuel Molina"
            >
              <Instagram size={28} aria-hidden="true" />
            </a>
            <a
              href="https://github.com/fuertes155"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--color-primary)" }}
              aria-label="GitHub de Eval Samuel Molina"
            >
              <Github size={28} aria-hidden="true" />
            </a>
            <a
              href="https://youtube.com/@samuelmolina-u3z"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--color-primary)" }}
              aria-label="YouTube de Eval Samuel Molina"
            >
              <Youtube size={28} aria-hidden="true" />
            </a>
          </div>
        </div>
        {/* Columna derecha - Formulario */}
        <div style={{ flex: "1 1 320px", minWidth: "100%", maxWidth: 600 }}>
          <h3 style={{ color: "var(--color-text)", fontWeight: 700, fontSize: "1.8rem", marginBottom: "1.7rem" }}>
            Envíame un Mensaje
          </h3>
          <form style={{ display: "flex", flexDirection: "column", gap: "1.4rem" }}>
            {['Nombre', 'Email'].map((field, i) => (
              <div key={i}>
                <label style={{ color: "var(--color-text)", fontWeight: 600, fontSize: "1.05rem" }}>
                  {field}
                  <input
                    type={field === 'Email' ? 'email' : 'text'}
                    placeholder={field === 'Email' ? 'tu@email.com' : 'Tu nombre'}
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
            ))}
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
                backgroundColor: "var(--color-primary)",
                color: "#181824", /* Texto oscuro sobre fondo claro */
                border: "none",
                borderRadius: "0.45rem",
                padding: "1rem",
                fontWeight: 800,
                fontSize: "1.12rem",
                cursor: "pointer",
                marginTop: "0.6rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.8rem",
                boxShadow: "0 2px 8px rgba(0,0,0,0.2)"
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
