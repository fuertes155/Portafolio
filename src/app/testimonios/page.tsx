"use client";

const testimonios = [
  {
    nombre: "Laura Rodríguez",
    cargo: "CEO en Creativa Studio",
    mensaje:
      "Samuel es un desarrollador excepcional. Su atención al detalle y compromiso con la calidad hicieron que nuestro proyecto fuera un éxito.",
  },
  {
    nombre: "Carlos Gómez",
    cargo: "Gerente de Tecnología en InnovaTech",
    mensaje:
      "Trabajar con Samuel fue una experiencia excelente. Siempre aporta soluciones efectivas y es muy profesional.",
  },
  {
    nombre: "Ana Torres",
    cargo: "Líder de Producto en DigitalSoft",
    mensaje:
      "Tiene un gran talento para el diseño y desarrollo de interfaces. Sin duda volveré a trabajar con él en el futuro.",
  },
  {
    nombre: "Mariana López",
    cargo: "Project Manager en SoftTech",
    mensaje:
      "Samuel demostró una gran capacidad para resolver problemas técnicos complejos y siempre entregó resultados a tiempo. Su ética de trabajo es impecable.",
  },
  {
    nombre: "Daniel Herrera",
    cargo: "Diseñador UX/UI en Creatix",
    mensaje:
      "Colaborar con Samuel fue un verdadero placer. Tiene una excelente comunicación y una visión clara sobre la experiencia del usuario.",
  },
  {
    nombre: "Valentina Ruiz",
    cargo: "CTO en AlphaDev",
    mensaje:
      "Samuel se integró rápidamente al equipo y aportó ideas innovadoras desde el primer día. Lo recomiendo ampliamente para cualquier proyecto de desarrollo web.",
  },
];

export default function Testimonios() {
  return (
    <section
      id="testimonios"
      style={{
        padding: "4rem 1rem",
        background: "#1e1e25",
        color: "var(--color-text)",
        textAlign: "center",
        minHeight: "100vh",
      }}
    >
      <h2
        style={{
          fontSize: "2.4rem",
          fontWeight: 800,
          color: "var(--color-primary)",
          marginBottom: "2.5rem",
        }}
      >
        Testimonios
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "2rem",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {testimonios.map((t, i) => (
          <div
            key={i}
            style={{
              background: "#232335",
              padding: "2rem",
              borderRadius: "1rem",
              boxShadow: "0 6px 20px rgba(0,0,0,0.12)",
              textAlign: "left",
            }}
          >
            <p
              style={{
                fontStyle: "italic",
                marginBottom: "1.2rem",
                color: "#d4d4d8",
                lineHeight: "1.6",
              }}
            >
              “{t.mensaje}”
            </p>
            <div>
              <strong style={{ fontSize: "1.05rem" }}>{t.nombre}</strong>
              <div style={{ fontSize: "0.9rem", color: "#a1a1aa" }}>{t.cargo}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
