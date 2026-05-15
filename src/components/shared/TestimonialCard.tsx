import React from "react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  rating: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, role, rating }) => {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(255,255,255,0.06)",
        borderRadius: 16,
        padding: 32,
      }}
    >
      <div
        style={{
          fontSize: 48,
          color: "rgba(201,168,76,0.2)",
          lineHeight: 0.7,
          fontFamily: "Georgia, serif",
          marginBottom: 16,
        }}
      >
        "
      </div>
      <p
        style={{
          fontSize: 15,
          color: "#9ab0c8",
          lineHeight: 1.6,
          fontFamily: "sans-serif",
          marginBottom: 24,
          fontStyle: "italic",
        }}
      >
        {quote}
      </p>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #C9A84C, #b8942e)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 16,
            fontWeight: 900,
            color: "#060a12",
            fontFamily: "Georgia, serif",
          }}
        >
          {name[0]}
        </div>
        <div>
          <div
            style={{
              fontSize: 15,
              fontWeight: 700,
              color: "#fff",
              fontFamily: "Georgia, serif"
            }}
          >
            {name}
          </div>
          <div
            style={{
              fontSize: 12,
              color: "#C9A84C",
              fontFamily: "sans-serif"
            }}
          >
            {role}
          </div>
          <div style={{ display: "flex", gap: 2, marginTop: 4 }}>
            {Array.from({ length: rating }).map((_, j) => (
              <span key={j} style={{ color: "#C9A84C", fontSize: 12 }}>
                ★
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;