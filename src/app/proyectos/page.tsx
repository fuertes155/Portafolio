"use client"

type Proyecto = {
  titulo: string;
  descripcion: string;
  tecnologias: string[];
  demo: string;
  github: string;
};

const proyectos: Proyecto[] = [
  {
    titulo: "Aplicación Web E-commerce",
    descripcion: "Plataforma de comercio electrónico desarrollada con Next.js y Tailwind CSS.",
    tecnologias: ["Next.js", "React", "Tailwind CSS", "Node.js"],
    demo: "https://tudemo.com/ecommerce",      // Cambia por tu link real
    github: "https://github.com/TU_USUARIO/tu-ecommerce", // Cambia por tu repo real
  },
  {
    titulo: "Dashboard Administrativo",
    descripcion: "Panel de control para gestionar usuarios y contenido de una aplicación.",
    tecnologias: ["React", "TypeScript", "Material UI", "Firebase"],
    demo: "https://tudemo.com/dashboard",      // Cambia por tu link real
    github: "https://github.com/TU_USUARIO/tu-dashboard", // Cambia por tu repo real
  },
  {
    titulo: "Aplicación Móvil de Fitness",
    descripcion: "App para seguimiento de rutinas de ejercicio y nutrición.",
    tecnologias: ["React Native", "Redux", "Express", "MongoDB"],
    demo: "https://tudemo.com/fitness",        // Cambia por tu link real
    github: "https://github.com/TU_USUARIO/tu-fitness-app", // Cambia por tu repo real
  },
];

export default function Proyectos() {
  return (
    <section
      id="proyectos"
      style={{
        minHeight: "100vh",
        padding: "4rem 1.5rem 2rem",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "radial-gradient(ellipse 60% 60% at 50% 30%, #7c6dfa44 0%, #232335 70%, #1a1a1f 100%)",
      }}
    >
      <h2 style={{
        fontSize: "3.2rem",
        fontWeight: 800,
        color: "#a78bfa",
        marginBottom: "2.5rem",
        letterSpacing: "-1.5px"
      }}>
        Mis Proyectos
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
          gap: "2.2rem",
          width: "100%",
          maxWidth: "1280px",
          marginBottom: "3rem"
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
              alignItems: "stretch"
            }}
          >
            {/* Imagen simulada */}
            <div style={{
              backgroundColor: "#e5e5e5",
              height: "180px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
              <svg width={48} height={48} fill="#a1a1aa" viewBox="0 0 24 24">
                <path d="M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0-2C8.13 5 5 8.13 5 12c0 3.87 3.13 7 7 7s7-3.13 7-7c0-3.87-3.13-7-7-7z"/>
              </svg>
            </div>
            <div style={{ padding: "1.6rem 1.5rem 1.4rem 1.5rem", flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <h3 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "0.6rem", color: "#fff" }}>
                  {proy.titulo}
                </h3>
                <p style={{ fontSize: "1.07rem", color: "#a1a1aa", marginBottom: "1.2rem" }}>
                  {proy.descripcion}
                </p>
                <div style={{
                  display: "flex", flexWrap: "wrap", gap: "0.7rem", marginBottom: "1.3rem"
                }}>
                  {proy.tecnologias.map((tech, j) => (
                    <span
                      key={j}
                      style={{
                        backgroundColor: "#1a1a1a",
                        padding: "0.3rem 0.95rem",
                        fontSize: "0.87rem",
                        borderRadius: "0.5rem",
                        color: "#a78bfa",
                        fontWeight: 700
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              {/* Botones: Ver Demo y Ver Código */}
              <div style={{
                display: "flex",
                gap: "1rem",
                marginTop: "0.7rem",
                justifyContent: "center"
              }}>
                <a
                  href={proy.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-block",
                    textAlign: "center",
                    background: "#a78bfa",
                    color: "#fff",
                    border: "none",
                    borderRadius: "0.4rem",
                    padding: "0.82rem 1.8rem",
                    fontWeight: 700,
                    fontSize: "1rem",
                    cursor: "pointer",
                    textDecoration: "none",
                    transition: "background 0.18s"
                  }}
                >
                  Ver Demo
                </a>
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
                    transition: "background 0.18s"
                  }}
                >
                  Ver Código
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Botón "Contacta Conmigo" abajo */}
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
          margin: "0 auto"
        }}
        onClick={() => alert("¡Gracias por tu interés!")}
      >
        Contacta Conmigo
      </button>
    </section>
  );
}
