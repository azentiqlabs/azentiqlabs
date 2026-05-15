import React, { useState, useEffect, useRef } from "react";
import { TESTIMONIALS } from "../data";

const StarRating: React.FC<{ count: number }> = ({ count }) => (
  <div style={{ display: "flex", gap: 3 }}>
    {Array.from({ length: count }).map((_, i) => (
      <span key={i} style={{ color: "#C9A84C", fontSize: 14 }}>★</span>
    ))}
  </div>
);

const TestimonialCard: React.FC<{ t: typeof TESTIMONIALS[0]; active: boolean }> = ({ t, active }) => (
  <div style={{
    background: active
      ? "linear-gradient(135deg, rgba(201,168,76,0.1), rgba(201,168,76,0.03))"
      : "rgba(255,255,255,0.02)",
    border: `1px solid ${active ? "rgba(201,168,76,0.4)" : "rgba(255,255,255,0.06)"}`,
    borderRadius: 20, padding: "36px 32px",
    transition: "all 0.4s ease",
    position: "relative", overflow: "hidden",
    flexShrink: 0,
    width: "100%",
  }}>
    {active && (
      <div style={{
        position: "absolute", top: 0, right: 0,
        width: 120, height: 120,
        background: "radial-gradient(circle, rgba(201,168,76,0.15) 0%, transparent 70%)",
      }} />
    )}
    {/* Quote mark */}
    <div style={{
      fontSize: 72, color: "rgba(201,168,76,0.15)", lineHeight: 0.7,
      fontFamily: "Georgia, serif", marginBottom: 16, fontWeight: 900,
    }}>"</div>

    <p style={{
      fontSize: 15, color: "#9ab0c8", lineHeight: 1.8,
      fontFamily: "sans-serif", marginBottom: 28,
      fontStyle: "italic",
    }}>{t.text}</p>

    <div style={{
      background: "rgba(201,168,76,0.08)", borderRadius: 8, padding: "8px 14px",
      display: "inline-block", marginBottom: 24,
      border: "1px solid rgba(201,168,76,0.15)",
    }}>
      <span style={{ fontSize: 11, color: "#C9A84C", fontWeight: 700, fontFamily: "sans-serif", letterSpacing: 1 }}>
        🏆 {t.project}
      </span>
    </div>

    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
      <div style={{
        width: 48, height: 48, borderRadius: "50%",
        background: "linear-gradient(135deg, #C9A84C, #b8942e)",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 14, fontWeight: 900, color: "#060a12", fontFamily: "Georgia, serif",
        flexShrink: 0,
      }}>{t.avatar}</div>
      <div>
        <div style={{ fontSize: 15, fontWeight: 800, color: "#fff", fontFamily: "Georgia, serif" }}>{t.name}</div>
        <div style={{ fontSize: 12, color: "#5a7a94", fontFamily: "sans-serif", marginTop: 2 }}>{t.role} · {t.location}</div>
        <StarRating count={t.rating} />
      </div>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const total = TESTIMONIALS.length;

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.15 });
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % total), 5000);
    return () => clearInterval(timer);
  }, [total]);

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  // Show 3 at a time on desktop
  const getVisible = () => {
    const items = [];
    for (let i = 0; i < 3; i++) {
      items.push(TESTIMONIALS[(current + i) % total]);
    }
    return items;
  };

  return (
    <section id="testimonials" style={{
      padding: "120px 28px",
      background: "linear-gradient(180deg, #0a1220 0%, #060a12 100%)",
    }}>
      <style>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @media (max-width: 900px) { .testimonials-grid { grid-template-columns: 1fr !important; } }
        @media (min-width: 600px) and (max-width: 900px) { .testimonials-grid { grid-template-columns: 1fr 1fr !important; } }
      `}</style>

      <div ref={sectionRef} style={{ maxWidth: 1240, margin: "0 auto" }}>
        {/* Header */}
        <div style={{
          marginBottom: 72, textAlign: "center",
          opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}>
          <div style={{
            display: "inline-block", border: "1px solid rgba(201,168,76,0.3)",
            borderRadius: 20, padding: "6px 18px", marginBottom: 20,
            fontSize: 11, color: "#C9A84C", fontWeight: 700, letterSpacing: 3, fontFamily: "sans-serif",
          }}>CLIENT SUCCESS STORIES</div>
          <h2 style={{
            fontSize: "clamp(28px, 4vw, 50px)", fontWeight: 900,
            fontFamily: "Georgia, serif", color: "#fff", marginBottom: 16,
          }}>
            What Our <span style={{ color: "#C9A84C" }}>Clients</span> Say
          </h2>
          <p style={{
            fontSize: 16, color: "#6a7d94", fontFamily: "sans-serif",
            lineHeight: 1.7, maxWidth: 520, margin: "0 auto",
          }}>
            Don't take our word for it — here's what real clients across India say about working with Azentiq Labs.
          </p>
        </div>

        {/* Stats bar */}
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(4,1fr)",
          gap: 16, marginBottom: 64,
          opacity: visible ? 1 : 0, transition: "opacity 0.8s ease 0.2s",
        }}>
          {[
            { num: "50+", label: "Happy Clients", icon: "🤝" },
            { num: "4.9/5", label: "Average Rating", icon: "⭐" },
            { num: "98%", label: "Retention Rate", icon: "🔁" },
            { num: "100%", label: "Project Success", icon: "✅" },
          ].map((s, i) => (
            <div key={i} style={{
              background: "rgba(201,168,76,0.05)",
              border: "1px solid rgba(201,168,76,0.15)",
              borderRadius: 14, padding: "20px 16px", textAlign: "center",
            }}>
              <div style={{ fontSize: 24, marginBottom: 6 }}>{s.icon}</div>
              <div style={{ fontSize: 24, fontWeight: 900, color: "#C9A84C", fontFamily: "Georgia,serif" }}>{s.num}</div>
              <div style={{ fontSize: 11, color: "#5a7a94", fontFamily: "sans-serif", letterSpacing: 1, marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Cards grid */}
        <div className="testimonials-grid" style={{
          display: "grid", gridTemplateColumns: "repeat(3,1fr)",
          gap: 24, marginBottom: 48,
          opacity: visible ? 1 : 0, transition: "opacity 0.8s ease 0.3s",
        }}>
          {getVisible().map((t, i) => (
            <TestimonialCard key={`${current}-${i}`} t={t} active={i === 0} />
          ))}
        </div>

        {/* Controls */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "center", gap: 16,
          opacity: visible ? 1 : 0, transition: "opacity 0.8s ease 0.4s",
        }}>
          <button onClick={prev} style={{
            width: 44, height: 44, borderRadius: "50%",
            background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.3)",
            color: "#C9A84C", fontSize: 18, cursor: "pointer", transition: "all 0.2s",
          }}>←</button>

          <div style={{ display: "flex", gap: 8 }}>
            {TESTIMONIALS.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)} style={{
                width: i === current ? 24 : 8, height: 8,
                borderRadius: 4, border: "none", cursor: "pointer",
                background: i === current ? "#C9A84C" : "rgba(201,168,76,0.25)",
                transition: "all 0.3s ease",
              }} />
            ))}
          </div>

          <button onClick={next} style={{
            width: 44, height: 44, borderRadius: "50%",
            background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.3)",
            color: "#C9A84C", fontSize: 18, cursor: "pointer", transition: "all 0.2s",
          }}>→</button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
