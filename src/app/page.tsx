"use client"
import Image from "next/image";

export default function Inicio() {
  return (
    <section
      id="inicio"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 1.5rem",
        background:
          "radial-gradient(ellipse 60% 60% at 50% 30%, #7c6dfa44 0%, #232335 70%, #1a1a1f 100%)",
      }}
    >
      {/* Foto de perfil */}
      <div style={{
        margin: "2rem 0 2.3rem 0",
        display: "flex",
        justifyContent: "center",
      }}>
        <div
          style={{
            width: 180,
            height: 180,
            borderRadius: "50%",
            overflow: "hidden",
            border: "5px solid #b5a5fa",
            boxShadow: "0 2px 28px #b5a5fa30",
            background: "#28203c",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Image
            src="/profile.jpg"
            alt="Foto de Eval Samuel Molina Fuertes"
            width={180}
            height={180}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center"
            }}
            priority
          />
        </div>
      </div>
      <h1 style={{
        fontSize: "4.3rem",
        fontWeight: 800,
        textAlign: "center",
        color: "#b5a5fa",
        margin: "1.8rem 0 0 0"
      }}>
        Eval Samuel Molina Fuertes
      </h1>
      {/* Puedes agregar aquí más texto o dejarlo así */}
    </section>
  );
}
