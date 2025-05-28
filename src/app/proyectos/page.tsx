"use client"

import Image from "next/image";

const proyectos = [
  {
    titulo: "Aplicación Web E-commerce",
    descripcion: "Plataforma de comercio electrónico desarrollada con Next.js y Tailwind CSS.",
    tecnologias: ["Next.js", "React", "Tailwind CSS", "Node.js"],
    github: "https://github.com/fuertes155/Estructura.git",
    imagen: "/imagen1.png",
  },
  {
    titulo: "Dashboard Administrativo",
    descripcion: "Panel de control para gestionar usuarios y contenido de una aplicación.",
    tecnologias: ["React", "TypeScript", "Material UI", "Firebase"],
    github: "https://github.com/fuertes155/Trabajo-final.git",
    imagen: "/imagen2.png",
  },
  {
    titulo: "Aplicación Móvil de Fitness",
    descripcion: "App para seguimiento de rutinas de ejercicio y nutrición.",
    tecnologias: ["React Native", "Redux", "Express", "MongoDB"],
    github: "https://github.com/fuertes155/Herencia.git",
    imagen: "/imagen3.png",
  },
];

export default function Proyectos() {
  return (
    <section
      id="proyectos"
      style={{
        minHeight: "100vh",
        padding: "4rem 1rem 2rem",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "radial-gradient(ellipse 60% 60% at 50% 30%, #7c6dfa44 0%, #232335 70%, #1a1a1f 100%)",
      }}
    >
      <h2
        style={{
          fontSize: "2.7rem",
          fontWeight: 800,
          color: "#a78bfa",
          marginBottom: "2.5rem",
          letterSpacing: "-1.5px",
          textAlign: "center",
        }}
      >
        Mis Proyectos
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2rem",
          width: "100%",
          maxWidth: "1280px",
          marginBottom: "3rem",
        }}
      >
        {proyectos.map((proy, i) => (
          <div
            key={i}
            style={{
              backgroundColor: "#232335",
              borderRadius: "1rem",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              boxShadow: "0 4px 30px rgba(0,0,0,0.12)",
              alignItems: "stretch",
            }}
          >
            <div style={{ position: "relative", width: "100%", height: "180px" }}>
              <Image
                src={proy.imagen}
                alt={proy.titulo}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 300px"
              />
            </div>
            <div
              style={{
                padding: "1.6rem 1.5rem 1.4rem 1.5rem",
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <h3
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: 700,
                    marginBottom: "0.6rem",
                    color: "#fff",
                  }}
                >
                  {proy.titulo}
                </h3>
                <p
                  style={{
                    fontSize: "1.07rem",
                    color: "#a1a1aa",
                    marginBottom: "1.2rem",
                  }}
                >
                  {proy.descripcion}
                </p>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.7rem",
                    marginBottom: "1.3rem",
                  }}
                >
                  {proy.tecnologias.map((tech, j) => (
                    <span
                      key={j}
                      style={{
                        backgroundColor: "#1a1a1a",
                        padding: "0.3rem 0.95rem",
                        fontSize: "0.87rem",
                        borderRadius: "0.5rem",
                        color: "#a78bfa",
                        fontWeight: 700,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.8rem",
                  marginTop: "0.7rem",
                }}
              >
                <a
                  href={proy.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-block",
                    textAlign: "center",
                    background: "transparent",
                    color: "#a78bfa",
                    border: "2px solid #a78bfa",
                    borderRadius: "0.4rem",
                    padding: "0.82rem 1.8rem",
                    fontWeight: 700,
                    fontSize: "1rem",
                    cursor: "pointer",
                    textDecoration: "none",
                    transition: "background 0.18s",
                  }}
                >
                  Ver Código
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        style={{
          background: "#a78bfa",
          color: "#fff",
          border: "none",
          borderRadius: "0.3rem",
          padding: "1.05rem 2.5rem",
          fontWeight: 700,
          fontSize: "1.1rem",
          cursor: "pointer",
          boxShadow: "0 2px 10px rgba(167,139,250,0.08)",
          margin: "0 auto",
        }}
        onClick={() => alert("¡Gracias por tu interés!")}
      >
        Contacta Conmigo
      </button>
    </section>
  );
}
