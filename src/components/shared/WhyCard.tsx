import React from "react";

interface WhyCardProps {
  icon: string;
  title: string;
  desc: string;
}

const WhyCard: React.FC<WhyCardProps> = ({ icon, title, desc }) => {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(255,255,255,0.05)",
        borderRadius: 16,
        padding: "32px 24px",
        textAlign: "center",
        transition: "all 0.25s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "rgba(201,168,76,0.25)";
        e.currentTarget.style.background = "rgba(201,168,76,0.04)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)";
        e.currentTarget.style.background = "rgba(255,255,255,0.02)";
      }}
    >
      <div style={{ fontSize: 40, marginBottom: 18 }}>{icon}</div>
      <h3
        style={{
          fontSize: 16,
          fontWeight: 800,
          color: "#fff",
          marginBottom: 10,
          letterSpacing: 1,
          fontFamily: "sans-serif",
          textTransform: "uppercase",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontSize: 13,
          color: "#6a7d94",
          fontFamily: "sans-serif",
          lineHeight: 1.6,
          margin: 0
        }}
      >
        {desc}
      </p>
    </div>
  );
};

export default WhyCard;