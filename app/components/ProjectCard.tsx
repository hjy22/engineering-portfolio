"use client";

import React from "react";
import Link from "next/link";

type ProjectCardProps = {
  href?: string;
  title: string;
  subtitle?: string;
  description: string;
  image?: string;
  showLearnMore?: boolean;
  badge?: string;
};

export default function ProjectCard({
  href,
  title,
  subtitle,
  description,
  image,
  showLearnMore = false,
  badge,
}: ProjectCardProps) {
  const cardStyle: React.CSSProperties = {
    border: "1px solid #222",
    borderRadius: "20px",
    overflow: "hidden",
    textDecoration: "none",
    color: "inherit",
    display: "flex",
    flexDirection: "column",
    minHeight: "100%",
    boxShadow: "0 0 0 1px rgba(255,255,255,0.02) inset",
    transition:
      "transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease",
    backgroundColor: "#0a0a0a",
    backgroundImage:
      "radial-gradient(circle at var(--mx, 50%) var(--my, 50%), rgba(255,255,255,0.06), transparent 60%)",
  };

  const imageStyle: React.CSSProperties = {
    width: "100%",
    height: "220px",
    backgroundColor: "#111",
    borderBottom: "1px solid #1d1d1d",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    e.currentTarget.style.setProperty("--mx", `${x}px`);
    e.currentTarget.style.setProperty("--my", `${y}px`);
  };

  const handleCardEnter = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    e.currentTarget.style.transform = "translateY(-6px)";
    e.currentTarget.style.borderColor = "#3a3a3a";
    e.currentTarget.style.boxShadow =
      "0 20px 40px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.04) inset, 0 0 24px rgba(255,255,255,0.05)";
  };

  const handleCardLeave = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.borderColor = "#222";
    e.currentTarget.style.boxShadow =
      "0 0 0 1px rgba(255,255,255,0.02) inset";
    e.currentTarget.style.setProperty("--mx", "50%");
    e.currentTarget.style.setProperty("--my", "50%");
  };

  const content = (
    <div
      style={cardStyle}
      onMouseEnter={handleCardEnter}
      onMouseLeave={handleCardLeave}
      onMouseMove={handleMouseMove}
    >
      {/* ✅ IMAGE ONLY IF EXISTS */}
      {image && (
        <div
          style={{
            ...imageStyle,
            backgroundImage: `url(${image})`,
          }}
        />
      )}

      <div style={{ padding: "24px" }}>
        {/* ✅ BADGE ONLY IF EXISTS */}
        {badge && (
          <span
            style={{
              fontSize: "0.7rem",
              color: "#999",
              border: "1px solid #333",
              padding: "4px 8px",
              borderRadius: "999px",
              marginBottom: "12px",
              display: "inline-block",
            }}
          >
            {badge}
          </span>
        )}

        {subtitle && (
          <div
            style={{
              color: "#8d8d8d",
              fontSize: "0.85rem",
              marginBottom: "10px",
            }}
          >
            {subtitle}
          </div>
        )}

        <h3 style={{ margin: "0 0 12px" }}>{title}</h3>

        <p style={{ color: "#ababab", lineHeight: 1.7, margin: 0 }}>
          {description}
        </p>

        {/* ✅ ONLY FOR FEATURED PROJECTS */}
        {showLearnMore && (
          <div
            style={{
              marginTop: "18px",
              fontSize: "0.9rem",
              fontWeight: 600,
            }}
          >
            Learn More →
          </div>
        )}
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} style={{ textDecoration: "none", color: "inherit" }}>
        {content}
      </Link>
    );
  }

  return content;
}