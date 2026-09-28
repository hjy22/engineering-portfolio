"use client";

import { useEffect, useState } from "react";

export default function CompletedProjects() {
  const [expanded, setExpanded] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const projects = [
    "2026 — 4:1 Multiplexer (VLSI)",
    "2026 — AM Decoder",
    "2025 — LISC Research (hand-tracking UI)",
    "2025 — 5-bit DAC",
    "2025 — Nitrogen Laser (amplification circuitry)",
    "2024 — Custom Keyboard (ATmega32U4 firmware + matrix)",
    "2024 — Asteroids Game (game logic + rendering)",
    "2020 — Solar Charger",
  ];

  const photos = [
    "/images/mux.png",
    "/images/mux-layout.png",
    "/images/keyboard.png",
    "/images/lisc.png",
  ];

  useEffect(() => {3
    const interval = setInterval(() => {
      setPhotoIndex((prev) => (prev + 1) % photos.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [photos.length]);

  const visibleProjects = expanded ? projects : projects.slice(0, 5);

  return (
    <section style={{ marginBottom: "72px" }}>
      <div style={{ marginBottom: "22px" }}>
        <div
          style={{
            color: "#8f8f8f",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            fontSize: "0.78rem",
            marginBottom: "10px",
          }}
        >
          Experience
        </div>

        <h2
          style={{
            fontSize: "2.15rem",
            letterSpacing: "-0.03em",
            margin: 0,
          }}
        >
          Completed Projects
        </h2>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.3fr 0.9fr",
          gap: "24px",
          alignItems: "start",
        }}
      >
        {/* LEFT: PROJECT LIST */}
        <div
          style={{
            border: "1px solid #1a1a1a",
            borderRadius: "20px",
            padding: "22px",
            backgroundColor: "#0a0a0a",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {visibleProjects.map((item) => (
              <div
                key={item}
                style={{
                  color: "#b3b3b3",
                  fontSize: "0.96rem",
                  lineHeight: 1.6,
                  paddingBottom: "10px",
                  borderBottom: "1px solid #161616",
                }}
              >
                {item}
              </div>
            ))}
          </div>

          <button
            onClick={() => setExpanded(!expanded)}
            style={{
              marginTop: "16px",
              background: "none",
              border: "1px solid #2a2a2a",
              borderRadius: "999px",
              padding: "8px 14px",
              color: "#dddddd",
              cursor: "pointer",
              fontSize: "0.88rem",
            }}
          >
            {expanded ? "Show Less" : "Show More"}
          </button>
        </div>

        {/* RIGHT: PHOTO LIBRARY */}
        <div
          style={{
            border: "1px solid #1a1a1a",
            borderRadius: "20px",
            padding: "22px",
            backgroundColor: "#0a0a0a",
          }}
        >
          <div
            style={{
              color: "#8f8f8f",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              fontSize: "0.78rem",
              marginBottom: "12px",
            }}
          >
            Photo Library
          </div>

          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "4 / 3",
              borderRadius: "14px",
              overflow: "hidden",
              border: "1px solid #1d1d1d",
              marginBottom: "12px",
              backgroundColor: "#111",
            }}
          >
            {photos.map((photo, index) => (
              <div
                key={photo}
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: `url(${photo})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  opacity: index === photoIndex ? 1 : 0,
                  transition: "opacity 1.2s ease-in-out",
                }}
              />
            ))}
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "6px",
              marginBottom: "12px",
            }}
          >
            {photos.map((_, index) => (
              <div
                key={index}
                style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "999px",
                  backgroundColor: index === photoIndex ? "#ddd" : "#444",
                  transition: "background-color 0.2s ease",
                }}
              />
            ))}
          </div>

          <div
            style={{
              color: "#d8d8d8",
              fontSize: "0.95rem",
              marginBottom: "6px",
            }}
          >
          </div>

          <p
            style={{
              color: "#8f8f8f",
              fontSize: "0.88rem",
              lineHeight: 1.6,
              margin: 0,
            }}
          >
          </p>
        </div>
      </div>x
    </section>
  );
}