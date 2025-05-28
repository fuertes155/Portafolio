"use client"

import { useState } from "react";
import { Calendar, MapPin } from "lucide-react"

type Experiencia = {
  puesto: string;
  empresa: string;
  fecha: string;
  ubicacion: string;
  descripcion: string;
  tecnologias: string[];
  empresaUrl?: string;
};

const experiencias: Experiencia[] = [
  {
    puesto: "Product Manager ",
    empresa: "Soluciones Digitales Andinas",
    fecha: "Febrero 2021 - Presente",
    ubicacion: "Pasto, Colombia",
    descripcion:
      "Lideré el desarrollo de una plataforma de gestión educativa para instituciones rurales. Implementación de frontend con React y backend en Node.js con MongoDB. Automatización de reportes y conexión con APIs del Ministerio de Educación.",
    tecnologias: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    empresaUrl: "https://solucionesandinas.co",
  },
  {
    puesto: "Ingeniero de Software",
    empresa: "Tecnosoft del Sur",
    fecha: "Julio 2018 - Enero 2021",
    ubicacion: "Pasto, Colombia",
    descripcion:
      "Diseño y desarrollo de sistemas internos para empresas locales del sector salud y comercio. Desarrollo de dashboards, control de inventario y facturación electrónica.",
    tecnologias: ["Vue.js", "Laravel", "MySQL", "Bootstrap", "Git"],
    empresaUrl: "#",
  },
];

const experienciasExtra: Experiencia[] = [
  {
    puesto: "Desarrollador junior",
    empresa: "Clientes en Nariño y Ecuador",
    fecha: "Marzo 2016 - Junio 2018",
    ubicacion: "Pasto, Colombia / Remoto",
    descripcion:
      "Creación de páginas web corporativas, tiendas online y soluciones personalizadas para emprendimientos en Nariño y el sur de Ecuador. Integración con pasarelas de pago y optimización SEO.",
    tecnologias: ["WordPress", "HTML5", "CSS3", "JavaScript", "WooCommerce"],
    empresaUrl: "#",
  },
];

export default function Experiencia() {
  const [verMas, setVerMas] = useState(false);
  const experienciasAMostrar = verMas ? [...experiencias, ...experienciasExtra] : experiencias;

  return (
    <section
      id="experiencia"
      style={{
        minHeight: "100vh",
        padding: "4rem 1rem 2rem",
        background: "var(--color-background)",
        color: "var(--color-text)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2
        style={{
          fontSize: "2.4rem",
          fontWeight: 800,
          color: "var(--color-primary)",
          marginBottom: "2.5rem",
          letterSpacing: "-1.5px",
          textAlign: "center"
        }}
      >
        Mi Experiencia
      </h2>
      <div
        style={{
          width: "100%",
          maxWidth: 950,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 30,
            top: 0,
            bottom: 0,
            width: 4,
            background: "linear-gradient(to bottom, var(--color-primary), var(--color-bg-card, #232335))",
            borderRadius: 8,
            zIndex: 0,
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", gap: "3.3rem", position: "relative" }}>
          {experienciasAMostrar.map((exp, idx) => (
            <div key={idx} style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", flexWrap: "wrap", position: "relative", zIndex: 1 }}>
              <div style={{ width: 90, display: "flex", justifyContent: "center", position: "relative" }}>
                <div
                  style={{
                    width: 18,
                    height: 18,
                    borderRadius: "50%",
                    background: "var(--color-primary)",
                    border: "3px solid var(--color-bg-card, #232335)",
                    position: "absolute",
                    top: 12,
                  }}
                />
              </div>
              <div
                style={{
                  background: "var(--color-bg-card, #232335)",
                  borderRadius: "0.85rem",
                  boxShadow: "0 4px 28px rgba(40,30,90,0.15)",
                  padding: "2.1rem 2rem 1.6rem 2rem",
                  flex: 1,
                  minWidth: 0,
                }}
              >
                <h3 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: 5 }}>{exp.puesto}</h3>
                <a
                  href={exp.empresaUrl || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "var(--color-primary)",
                    fontWeight: 600,
                    fontSize: "1.12rem",
                    textDecoration: "none",
                    marginBottom: 8,
                    display: "inline-block"
                  }}
                >
                  {exp.empresa}
                </a>
                <div style={{ display: "flex", flexDirection: "column", gap: 6, color: "var(--color-muted)", fontSize: "1.04rem", marginBottom: 12 }}>
                  <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
                    <Calendar size={17} style={{ marginRight: 2 }} /> {exp.fecha}
                  </span>
                  <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
                    <MapPin size={17} style={{ marginRight: 2 }} /> {exp.ubicacion}
                  </span>
                </div>
                <p style={{ color: "var(--color-muted-2, #d1d5db)", marginBottom: "1.1rem", fontSize: "1.13rem" }}>{exp.descripcion}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                  {exp.tecnologias.map((tech, j) => (
                    <span
                      key={j}
                      style={{
                        background: "var(--color-primary)",
                        color: "var(--color-bg-card, #232335)",
                        fontWeight: 700,
                        padding: "0.32rem 0.92rem",
                        borderRadius: "0.4rem",
                        fontSize: "0.97rem",
                        marginTop: 2,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "3rem", textAlign: "center" }}>
          <button
            onClick={() => setVerMas(!verMas)}
            style={{
              padding: "0.75rem 1.5rem",
              background: "var(--color-primary)",
              color: "var(--color-bg-card, #232335)",
              fontWeight: 700,
              borderRadius: "0.6rem",
              fontSize: "1rem",
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          >
            {verMas ? "Ver menos" : "Ver más experiencias"}
          </button>
        </div>
      </div>
    </section>
  );
}
