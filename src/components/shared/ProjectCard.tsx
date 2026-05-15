import React from "react";

interface ProjectCardProps {
  title: string;
  client: string;
  result: string;
  desc: string;
  image: string;
  tags: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, client, result, desc, image, tags }) => {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(255,255,255,0.06)",
        borderRadius: 20,
        padding: 32,
        overflow: "hidden",
        position: "relative",
        transition: "all 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "rgba(201,168,76,0.3)";
        e.currentTarget.style.background = "rgba(201,168,76,0.03)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
        e.currentTarget.style.background = "rgba(255,255,255,0.02)";
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 20,
          right: 20,
          fontSize: 48,
          opacity: 0.1,
        }}
      >
        {image}
      </div>

      <div
        style={{
          fontSize: 14,
          color: "#C9A84C",
          fontWeight: 700,
          fontFamily: "sans-serif",
          marginBottom: 8,
        }}
      >
        Client: {client}
      </div>

      <h3
        style={{
          fontSize: 20,
          fontWeight: 800,
          color: "#fff",
          fontFamily: "'Georgia', serif",
          marginBottom: 12,
        }}
      >
        {title}
      </h3>

      <div
        style={{
          fontSize: 16,
          color: "#52e07a",
          fontWeight: 700,
          fontFamily: "sans-serif",
          marginBottom: 12,
        }}
      >
        ✓ {result}
      </div>

      <p
        style={{
          fontSize: 14,
          color: "#7a8fa8",
          lineHeight: 1.6,
          fontFamily: "sans-serif",
          marginBottom: 20,
        }}
      >
        {desc}
      </p>

      <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
        {tags.map((tag, j) => (
          <span
            key={j}
            style={{
              fontSize: 10,
              color: "#C9A84C",
              fontWeight: 700,
              background: "rgba(201,168,76,0.1)",
              border: "1px solid rgba(201,168,76,0.2)",
              borderRadius: 4,
              padding: "4px 8px",
              fontFamily: "sans-serif",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;