"use client"

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

export default function Experiencia() {
  return (
    <section
      id="experiencia"
      style={{
        minHeight: "100vh",
        padding: "4rem 1rem 2rem",
        background: "linear-gradient(to bottom right, #181824, #232335, #181824)",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2
        style={{
          fontSize: "2.5rem",
          fontWeight: 800,
          color: "#a78bfa",
          marginBottom: "2.5rem",
          letterSpacing: "-1.5px",
          textAlign: "center",
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
            background: "linear-gradient(to bottom, #a78bfa, #232335)",
            borderRadius: 8,
            zIndex: 0,
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", gap: "3rem", position: "relative" }}>
          {experiencias.map((exp, idx) => (
            <div
              key={idx}
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                alignItems: "flex-start",
                position: "relative",
                zIndex: 1,
              }}
            >
              <div
                style={{
                  width: 90,
                  display: "flex",
                  justifyContent: "center",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    width: 18,
                    height: 18,
                    borderRadius: "50%",
                    background: "#a78bfa",
                    border: "3px solid #232335",
                    position: "absolute",
                    top: 12,
                  }}
                />
              </div>
              <div
                style={{
                  background: "#313543",
                  borderRadius: "0.85rem",
                  boxShadow: "0 4px 28px rgba(40,30,90,0.15)",
                  padding: "2.1rem 2rem 1.6rem 2rem",
                  flex: 1,
                  minWidth: 280,
                }}
              >
                <h3 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: 5 }}>{exp.puesto}</h3>
                <a
                  href={exp.empresaUrl || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#a78bfa",
                    fontWeight: 600,
                    fontSize: "1.12rem",
                    textDecoration: "none",
                    marginBottom: 8,
                    display: "inline-block",
                  }}
                >
                  {exp.empresa}
                </a>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                    color: "#a1a1aa",
                    fontSize: "1.04rem",
                    marginBottom: 12,
                  }}
                >
                  <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
                    <Calendar size={17} style={{ marginRight: 2 }} /> {exp.fecha}
                  </span>
                  <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
                    <MapPin size={17} style={{ marginRight: 2 }} /> {exp.ubicacion}
                  </span>
                </div>
                <p style={{ color: "#d1d5db", marginBottom: "1.1rem", fontSize: "1.13rem" }}>{exp.descripcion}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                  {exp.tecnologias.map((tech, j) => (
                    <span
                      key={j}
                      style={{
                        background: "#a78bfa",
                        color: "#232335",
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
      </div>
    </section>
  );
}
