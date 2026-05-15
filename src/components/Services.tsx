import React, { useEffect, useRef, useState } from "react";
import { SERVICES } from "../data";
import { ANALYTICS_EVENTS, ANALYTICS_CATEGORIES, ANALYTICS_LABELS } from "../constants/analytics";
import { trackEvent } from "../utils/analytics";
import type { Service } from "../types";

interface ServiceCardProps {
  service: Service;
  index: number;
  visible: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index, visible }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={() => trackEvent({
        action: ANALYTICS_EVENTS.SERVICE_INQUIRY,
        category: ANALYTICS_CATEGORIES.BUSINESS,
        label: service.title,
      })}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered
          ? "linear-gradient(135deg, rgba(201,168,76,0.08), rgba(201,168,76,0.02))"
          : "rgba(255,255,255,0.02)",
        border: `1px solid ${hovered ? "rgba(201,168,76,0.3)" : "rgba(255,255,255,0.06)"}`,
        borderRadius: 16, padding: 32,
        cursor: "pointer", position: "relative", overflow: "hidden",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.55s ease ${index * 0.09}s, transform 0.55s ease ${index * 0.09}s, border-color 0.25s, background 0.25s`,
      }}
    >
      {/* Corner accent */}
      <div style={{
        position: "absolute", top: 0, right: 0,
        width: 60, height: 60,
        background: "linear-gradient(225deg, rgba(201,168,76,0.12) 0%, transparent 60%)",
        opacity: hovered ? 1 : 0, transition: "opacity 0.3s",
      }} />

      <div style={{ fontSize: 36, marginBottom: 18 }}>{service.icon}</div>

      <h3 style={{
        fontSize: 17, fontWeight: 800, color: "#fff",
        fontFamily: "'Georgia', serif", marginBottom: 12, lineHeight: 1.3,
      }}>
        {service.title}
      </h3>

      <p style={{
        fontSize: 13.5, color: "#7a8fa8", lineHeight: 1.7,
        fontFamily: "sans-serif", marginBottom: 20,
      }}>
        {service.desc}
      </p>

      <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
        {service.tags.map((tag) => (
          <span key={tag} style={{
            fontSize: 10, color: "#C9A84C", fontWeight: 700,
            background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.2)",
            borderRadius: 4, padding: "3px 8px", fontFamily: "sans-serif", letterSpacing: 0.5,
          }}>
            {tag}
          </span>
        ))}
      </div>

      <div style={{
        position: "absolute", bottom: 24, right: 24,
        fontSize: 18, color: "#C9A84C", fontWeight: 900,
        opacity: hovered ? 1 : 0.3, transition: "opacity 0.25s, transform 0.25s",
        transform: hovered ? "translate(3px, -3px)" : "translate(0,0)",
      }}>→</div>
    </div>
  );
};

const Services: React.FC = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [sectionVisible, setSectionVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = parseInt((e.target as HTMLElement).dataset.idx || "0");
            setVisibleCards((prev) => [...new Set([...prev, idx])]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const headerObs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setSectionVisible(true); },
      { threshold: 0.2 }
    );

    cardRefs.current.forEach((el) => el && obs.observe(el));
    if (sectionRef.current) headerObs.observe(sectionRef.current);

    return () => { obs.disconnect(); headerObs.disconnect(); };
  }, []);

  return (
    <section id="services" style={{
      padding: "120px 28px",
      background: "linear-gradient(180deg, #060a12 0%, #0a1220 100%)",
    }}>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 900px) {
          .services-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 600px) and (max-width: 900px) {
          .services-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>

      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div ref={sectionRef} style={{
          marginBottom: 72,
          opacity: sectionVisible ? 1 : 0,
          transform: sectionVisible ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}>
          <div style={{
            display: "inline-block", border: "1px solid rgba(201,168,76,0.3)",
            borderRadius: 20, padding: "6px 18px", marginBottom: 20,
            fontSize: 11, color: "#C9A84C", fontWeight: 700, letterSpacing: 3,
            fontFamily: "sans-serif",
          }}>
            OUR SERVICES
          </div>
          <h1 style={{
            fontSize: "clamp(32px, 5vw, 60px)", fontWeight: 900,
            fontFamily: "'Georgia', serif", color: "#fff", marginBottom: 24,
          }}>
            Comprehensive <span style={{ color: "#C9A84C" }}>Technology Solutions</span>
          </h1>
          <p style={{
            fontSize: 18, color: "#9ab0c8", fontFamily: "sans-serif",
            lineHeight: 1.7, maxWidth: 720, marginBottom: 16,
          }}>
            From cutting-edge web development to scalable mobile apps and custom software, we deliver end-to-end solutions that drive business growth and innovation.
          </p>
          <p style={{
            fontSize: 16, color: "#6a7d94", fontFamily: "sans-serif",
            lineHeight: 1.7, maxWidth: 620,
          }}>
            Our expert team combines technical excellence with deep industry knowledge to create solutions that not only meet your current needs but scale with your business.
          </p>
        </div>

        <div className="services-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 20,
          marginBottom: 120,
        }}>
          {SERVICES.map((s, i) => (
            <div
              key={i}
              data-idx={i}
              ref={(el) => (cardRefs.current[i] = el)}
            >
              <ServiceCard service={s} index={i} visible={visibleCards.includes(i)} />
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div style={{ marginBottom: 120 }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <h2 style={{
              fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900,
              fontFamily: "'Georgia', serif", color: "#fff", marginBottom: 16,
            }}>
              Our <span style={{ color: "#C9A84C" }}>Process</span>
            </h2>
            <p style={{
              fontSize: 16, color: "#6a7d94", fontFamily: "sans-serif",
              lineHeight: 1.7, maxWidth: 520, margin: "0 auto",
            }}>
              A proven methodology that ensures quality, efficiency, and exceptional results.
            </p>
          </div>

          <div style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 32,
          }}>
            {[
              { step: "01", title: "Discovery & Planning", desc: "We start by understanding your business goals, target audience, and technical requirements through detailed consultation." },
              { step: "02", title: "Design & Prototyping", desc: "Our design team creates wireframes, mockups, and interactive prototypes to visualize the solution before development begins." },
              { step: "03", title: "Development & Testing", desc: "Using agile methodologies, we build your solution with rigorous testing at every stage to ensure quality and performance." },
              { step: "04", title: "Launch & Support", desc: "We handle deployment, provide comprehensive documentation, and offer ongoing support to ensure your success." },
            ].map((p, i) => (
              <div key={i} style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 16, padding: 32, textAlign: "center",
                position: "relative",
              }}>
                <div style={{
                  position: "absolute", top: -20, left: "50%", transform: "translateX(-50%)",
                  width: 40, height: 40, borderRadius: "50%",
                  background: "linear-gradient(135deg, #C9A84C, #b8942e)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 14, fontWeight: 900, color: "#060a12", fontFamily: "Georgia, serif",
                }}>{p.step}</div>
                <h3 style={{
                  fontSize: 18, fontWeight: 800, color: "#fff",
                  fontFamily: "'Georgia', serif", marginBottom: 12, marginTop: 20,
                }}>{p.title}</h3>
                <p style={{
                  fontSize: 14, color: "#7a8fa8", lineHeight: 1.6,
                  fontFamily: "sans-serif",
                }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div style={{
          background: "linear-gradient(135deg, rgba(201,168,76,0.05), rgba(201,168,76,0.02))",
          border: "1px solid rgba(201,168,76,0.15)",
          borderRadius: 20, padding: "60px 40px", marginBottom: 120,
        }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{
              fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900,
              fontFamily: "'Georgia', serif", color: "#fff", marginBottom: 16,
            }}>
              Trusted by <span style={{ color: "#C9A84C" }}>Industry Leaders</span>
            </h2>
            <p style={{
              fontSize: 16, color: "#6a7d94", fontFamily: "sans-serif",
              lineHeight: 1.7, maxWidth: 520, margin: "0 auto",
            }}>
              Our track record speaks for itself — delivering excellence across diverse industries.
            </p>
          </div>

          <div style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 32,
          }}>
            {[
              { num: "100+", label: "Projects Completed", icon: "🚀" },
              { num: "50+", label: "Happy Clients", icon: "🤝" },
              { num: "99.9%", label: "Uptime Guarantee", icon: "⚡" },
              { num: "24/7", label: "Support Available", icon: "🛠️" },
            ].map((s, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div style={{ fontSize: 32, marginBottom: 12 }}>{s.icon}</div>
                <div style={{
                  fontSize: 36, fontWeight: 900, color: "#C9A84C",
                  fontFamily: "Georgia, serif", marginBottom: 8,
                }}>{s.num}</div>
                <div style={{
                  fontSize: 14, color: "#9ab0c8", fontFamily: "sans-serif",
                  fontWeight: 600,
                }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div style={{
          background: "linear-gradient(135deg, #C9A84C, #b8942e)",
          borderRadius: 20, padding: "60px 40px", textAlign: "center",
        }}>
          <h2 style={{
            fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900,
            fontFamily: "'Georgia', serif", color: "#060a12", marginBottom: 16,
          }}>
            Ready to Transform Your Business?
          </h2>
          <p style={{
            fontSize: 18, color: "#060a12", fontFamily: "sans-serif",
            lineHeight: 1.7, maxWidth: 600, margin: "0 auto 32px",
            opacity: 0.9,
          }}>
            Let's discuss your project and create something extraordinary together. Get a free consultation and project estimate.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/contact" onClick={() => trackEvent({
              action: ANALYTICS_EVENTS.BUTTON_CLICK,
              category: ANALYTICS_CATEGORIES.CONVERSION,
              label: ANALYTICS_LABELS.PRIMARY_CTA,
            })} style={{
              background: "#060a12", color: "#C9A84C", border: "none",
              borderRadius: 8, padding: "14px 28px", fontSize: 16, fontWeight: 800,
              cursor: "pointer", fontFamily: "sans-serif", textDecoration: "none",
              display: "inline-block", transition: "all 0.2s",
            }}>Get Free Consultation</a>
            <a href="/testimonials" onClick={() => trackEvent({
              action: ANALYTICS_EVENTS.LINK_CLICK,
              category: ANALYTICS_CATEGORIES.INTERACTION,
              label: ANALYTICS_LABELS.SECONDARY_CTA,
            })} style={{
              background: "transparent", color: "#060a12", border: "2px solid #060a12",
              borderRadius: 8, padding: "12px 26px", fontSize: 16, fontWeight: 800,
              cursor: "pointer", fontFamily: "sans-serif", textDecoration: "none",
              display: "inline-block", transition: "all 0.2s",
            }}>View Our Work</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
