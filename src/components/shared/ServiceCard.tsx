import React from "react";

interface ServiceCardProps {
  icon: string;
  title: string;
  desc: string;
  features: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, desc, features }) => {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(255,255,255,0.06)",
        borderRadius: 16,
        padding: 32,
        textAlign: "center",
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
      <div style={{ fontSize: 48, marginBottom: 20 }}>{icon}</div>
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
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap", justifyContent: "center" }}>
        {features.map((feature, j) => (
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
            {feature}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;