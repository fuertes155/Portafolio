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
    puesto: "Ingeniero de Software Senior",
    empresa: "Empresa XYZ",
    fecha: "Enero 2020 - Presente",
    ubicacion: "Madrid, España",
    descripcion:
      "Desarrollo de aplicaciones web utilizando React, Next.js y Node.js. Liderazgo de equipo de desarrollo frontend y mentorización de desarrolladores junior.",
    tecnologias: ["React", "Next.js", "Node.js", "TypeScript", "GraphQL"],
    empresaUrl: "#",
  },
  {
    puesto: "Desarrollador Frontend",
    empresa: "Agencia Digital ABC",
    fecha: "Marzo 2017 - Diciembre 2019",
    ubicacion: "Barcelona, España",
    descripcion:
      "Creación de interfaces de usuario para clientes de diversos sectores. Colaboración con diseñadores UX/UI para implementar diseños responsivos.",
    tecnologias: ["JavaScript", "React", "CSS3", "SASS", "Webpack"],
    empresaUrl: "#",
  },
];

const experienciasExtra: Experiencia[] = [
  {
    puesto: "Desarrollador Web Freelance",
    empresa: "Proyectos Independientes",
    fecha: "Enero 2016 - Febrero 2017",
    ubicacion: "Remoto",
    descripcion:
      "Desarrollo de sitios web para pequeñas empresas utilizando WordPress, HTML y CSS. Gestión directa con clientes y entrega de soluciones personalizadas.",
    tecnologias: ["WordPress", "HTML5", "CSS3", "PHP"],
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
        padding: "4rem 0 2rem",
        background: "var(--color-background)",
        color: "var(--color-text)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2
        style={{
          fontSize: "2.8rem",
          fontWeight: 800,
          color: "var(--color-primary)",
          marginBottom: "2.5rem",
          letterSpacing: "-1.5px",
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
        {/* Línea vertical */}
        <div
          style={{
            position: "absolute",
            left: 45,
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
            <div key={idx} style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", position: "relative", zIndex: 1 }}>
              {/* Punto de la línea */}
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
              {/* Tarjeta de experiencia */}
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
                <div style={{ display: "flex", alignItems: "center", color: "var(--color-muted)", fontSize: "1.04rem", marginBottom: 12, gap: 20 }}>
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

        {/* Botón Ver Más */}
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
