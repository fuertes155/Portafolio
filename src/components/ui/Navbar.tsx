"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
  { href: "/", label: "Inicio" },
  { href: "/sobre-mi", label: "Sobre Mí" },
  { href: "/experiencia", label: "Experiencia" },
  { href: "/habilidades", label: "Habilidades" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav
      style={{
        width: "100%",
        background: "rgba(24,24,36, 0.98)",
        color: "var(--color-text)",
        padding: "0 0",
        boxShadow: "0 1.5px 0 0 var(--color-border)",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 40,
        height: "4.2rem",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 2.5rem",
          height: "100%",
        }}
      >
        {/* Nombre a la izquierda */}
        <div style={{ fontWeight: 900, fontSize: "1.35rem", color: "var(--color-primary)" }}>
          Eval Samuel Molina
        </div>
        {/* Links centrales */}
        <ul style={{
          display: "flex",
          alignItems: "center",
          gap: "2.7rem",
          listStyle: "none",
          margin: 0,
          padding: 0,
          height: "100%",
        }}>
          {links.map(link => (
            <li key={link.href} style={{ height: "100%", display: "flex", alignItems: "center" }}>
              <Link
                href={link.href}
                style={{
                  position: "relative",
                  fontWeight: 600,
                  color: pathname === link.href ? "var(--color-primary)" : "var(--color-text)",
                  textDecoration: "none",
                  fontSize: "1.08rem",
                  padding: "0.7rem 0.3rem",
                  display: "inline-block",
                  transition: "color 0.18s",
                }}
              >
                {link.label}
                {/* Línea debajo de la opción activa */}
                {pathname === link.href && (
                  <span style={{
                    position: "absolute",
                    left: 0,
                    bottom: "-2px",
                    width: "100%",
                    height: "2.2px",
                    background: "var(--color-primary)",
                    borderRadius: "2px",
                    display: "block",
                  }} />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
