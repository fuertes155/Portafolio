"use client"

const tecnicas = [
  { nombre: "HTML/CSS", porcentaje: 40 },
  { nombre: "JavaScript", porcentaje: 30 },
  { nombre: "React", porcentaje: 65 },
  { nombre: "Next.js", porcentaje: 50 },
  { nombre: "TypeScript", porcentaje: 55 },
];

const blandas = [
  { nombre: "Trabajo en equipo", porcentaje: 90 },
  { nombre: "Comunicación", porcentaje: 85 },
  { nombre: "Resolución de problemas", porcentaje: 90 },
  { nombre: "Gestión del tiempo", porcentaje: 80 },
  { nombre: "Liderazgo", porcentaje: 75 },
];

export default function Habilidades() {
  return (
    <section
      id="habilidades"
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
          letterSpacing: "-1.2px",
          textAlign: "center",
        }}
      >
        Mis Habilidades
      </h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "6rem",
          justifyContent: "center",
          width: "100%",
          maxWidth: "1050px",
        }}
      >
        {/* Técnicas */}
        <div style={{ flex: 1, minWidth: 300 }}>
          <h3
            style={{
              color: "var(--color-text)",
              fontWeight: 700,
              fontSize: "2rem",
              marginBottom: "1.4rem",
            }}
          >
            Habilidades Técnicas
          </h3>
          {tecnicas.map((hab, idx) => (
            <div key={idx} style={{ marginBottom: "2.3rem" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  fontSize: "1.23rem",
                  fontWeight: 700,
                  color: "var(--color-text)",
                  marginBottom: 2,
                }}
              >
                <span>{hab.nombre}</span>
                <span style={{ color: "var(--color-primary)" }}>{hab.porcentaje}%</span>
              </div>
              <div
                style={{
                  height: "0.75rem",
                  borderRadius: "0.6rem",
                  background: "#35384a",
                  width: "100%",
                  marginTop: 3,
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    borderRadius: "0.6rem",
                    background: "var(--color-primary)",
                    width: `${hab.porcentaje}%`,
                    transition: "width 1s cubic-bezier(0.5,0,0.5,1)",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        {/* Blandas */}
        <div style={{ flex: 1, minWidth: 300 }}>
          <h3
            style={{
              color: "var(--color-text)",
              fontWeight: 700,
              fontSize: "2rem",
              marginBottom: "1.4rem",
            }}
          >
            Habilidades Blandas
          </h3>
          {blandas.map((hab, idx) => (
            <div key={idx} style={{ marginBottom: "2.3rem" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  fontSize: "1.23rem",
                  fontWeight: 700,
                  color: "var(--color-text)",
                  marginBottom: 2,
                }}
              >
                <span>{hab.nombre}</span>
                <span style={{ color: "var(--color-primary)" }}>{hab.porcentaje}%</span>
              </div>
              <div
                style={{
                  height: "0.75rem",
                  borderRadius: "0.6rem",
                  background: "#35384a",
                  width: "100%",
                  marginTop: 3,
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    borderRadius: "0.6rem",
                    background: "var(--color-primary)",
                    width: `${hab.porcentaje}%`,
                    transition: "width 1s cubic-bezier(0.5,0,0.5,1)",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
