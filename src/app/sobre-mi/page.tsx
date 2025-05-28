"use client"

import Image from "next/image";
import { useState } from "react";

export default function SobreMi() {
  const [imgSrc, setImgSrc] = useState("/profile.jpg");

  return (
    <section
      id="sobre-mi"
      style={{
        minHeight: "100vh",
        background: "var(--color-background)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "4rem 1rem 2rem 1rem",
        boxSizing: "border-box",
      }}
    >
      <h2
        style={{
          fontSize: "clamp(2rem, 6vw, 2.8rem)",
          fontWeight: 800,
          color: "var(--color-primary)",
          marginBottom: "2.5rem",
          letterSpacing: "-1.5px",
          textAlign: "center",
        }}
      >
        Sobre Mí
      </h2>
      <div
        style={{
          background: "var(--color-bg-card, #232335)",
          borderRadius: "1.2rem",
          boxShadow: "0 4px 30px rgba(0,0,0,0.10)",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          width: "100%",
          maxWidth: "900px",
          padding: "2.5rem 2rem",
          gap: "2.5rem",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {/* Imagen de perfil */}
        <div
          style={{
            flex: "0 0 auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "clamp(130px, 40vw, 170px)",
              height: "clamp(130px, 40vw, 170px)",
              borderRadius: "50%",
              background: "linear-gradient(135deg, var(--color-primary) 70%, #232335 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "1rem",
              border: "4px solid var(--color-bg-card, #232335)",
              boxSizing: "border-box",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Image
              src={imgSrc}
              alt="Eval Samuel Molina"
              fill
              style={{
                objectFit: "cover",
                borderRadius: "50%",
                border: "3.5px solid var(--color-background)",
              }}
              onError={() =>
                setImgSrc("https://ui-avatars.com/api/?name=Eval+Samuel+Molina&background=a78bfa&color=fff&size=150")
              }
            />
          </div>
          <span
            style={{
              fontSize: "1rem",
              color: "var(--color-primary)",
              fontWeight: 700,
              textAlign: "center",
            }}
          >
            Eval Samuel Molina Fuertes
          </span>
        </div>
        {/* Texto e info */}
        <div
          style={{
            flex: 1,
            minWidth: "260px",
            color: "var(--color-text)",
          }}
        >
          <h3
            style={{
              fontWeight: 700,
              fontSize: "1.35rem",
              color: "var(--color-primary)",
              marginBottom: "0.8rem",
              letterSpacing: "-0.6px",
              textAlign: "left",
            }}
          >
            ¿Quién soy?
          </h3>
          <p
            style={{
              color: "var(--color-muted)",
              marginBottom: "1rem",
              fontSize: "1.08rem",
              lineHeight: 1.7,
            }}
          >
            Soy <b>Eval Samuel Molina Fuertes</b>, estudiante de Ingeniería de Software con una gran pasión por el desarrollo web y el diseño de experiencias intuitivas. Me gusta resolver problemas reales con tecnología y siempre busco aprender algo nuevo cada día.
          </p>
          <p
            style={{
              color: "var(--color-muted)",
              marginBottom: "1.1rem",
              fontSize: "1.08rem",
            }}
          >
            Destaco por mi creatividad, atención al detalle y habilidades en diseño UI/UX. Me encanta trabajar en equipo, colaborar y liderar proyectos que impacten positivamente en las personas.
          </p>
          <div style={{ marginBottom: "1.6rem" }}>
            <span
              style={{
                color: "var(--color-primary)",
                fontWeight: 600,
                fontSize: "1.01rem",
              }}
            >
              Habilidades:
            </span>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.7rem",
                marginTop: "0.7rem",
              }}
            >
              {["JavaScript", "React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "UI/UX"].map((skill) => (
                <span
                  key={skill}
                  style={{
                    background: "var(--color-primary)",
                    color: "#232335",
                    borderRadius: "0.45rem",
                    padding: "0.35rem 1.05rem",
                    fontSize: "0.93rem",
                    fontWeight: 700,
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
