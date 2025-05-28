"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/sobre-mi", label: "Sobre Mí" },
  { href: "/experiencia", label: "Experiencia" },
  { href: "/habilidades", label: "Habilidades" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/testimonios", label: "Testimonios" },
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const checkWidth = () => setIsMobile(window.innerWidth < 768);
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

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
        height: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0.7rem 1rem",
          boxSizing: "border-box",
          gap: isMobile ? "1rem" : 0,
        }}
      >
        {/* Nombre / Logo */}
        <div
          style={{
            fontWeight: 900,
            fontSize: "1.35rem",
            color: "var(--color-primary)",
            textAlign: isMobile ? "center" : "left",
            width: isMobile ? "100%" : "auto",
          }}
        >
          Eval Samuel Molina
        </div>

        {/* Botón hamburguesa en móvil */}
        {isMobile && (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "transparent",
              border: "none",
              color: "var(--color-text)",
              fontSize: "1.5rem",
              cursor: "pointer",
              alignSelf: "flex-end",
            }}
            aria-label="Abrir menú"
          >
            ☰
          </button>
        )}

        {/* Enlaces de navegación */}
        {(menuOpen || !isMobile) && (
          <ul
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              alignItems: "center",
              gap: isMobile ? "0.6rem" : "2.7rem",
              listStyle: "none",
              margin: 0,
              padding: 0,
              width: isMobile ? "100%" : "auto",
              textAlign: isMobile ? "center" : "left",
            }}
          >
            {links.map((link) => (
              <li
                key={link.href}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: isMobile ? "center" : "flex-start",
                }}
              >
                <Link
                  href={link.href}
                  style={{
                    position: "relative",
                    fontWeight: 600,
                    color:
                      pathname === link.href
                        ? "var(--color-primary)"
                        : "var(--color-text)",
                    textDecoration: "none",
                    fontSize: "1.08rem",
                    padding: "0.5rem 0.3rem",
                    display: "inline-block",
                    transition: "color 0.18s",
                  }}
                >
                  {link.label}
                  {/* Línea debajo si es la página activa */}
                  {pathname === link.href && (
                    <span
                      style={{
                        position: "absolute",
                        left: 0,
                        bottom: -2,
                        width: "100%",
                        height: "2.2px",
                        background: "var(--color-primary)",
                        borderRadius: "2px",
                        display: "block",
                      }}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Ajuste responsive opcional */}
      <style>{`
        @media (max-width: 768px) {
          footer {
            flex-direction: column !important;
            text-align: center;
            gap: 1.2rem;
          }
          footer .footer-section {
            width: 100% !important;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
        }
      `}</style>
    </nav>
  );
}
