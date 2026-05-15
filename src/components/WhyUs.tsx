import React, { useEffect, useRef, useState } from "react";
import { WHY_US, CITIES } from "../data";
import type { WhyItem } from "../types";
import { ANALYTICS_EVENTS, ANALYTICS_CATEGORIES, ANALYTICS_LABELS } from "../constants/analytics";
import { trackEvent } from "../utils/analytics";

interface WhyCardProps {
  item: WhyItem;
  index: number;
  visible: boolean;
}

const WhyCard: React.FC<WhyCardProps> = ({ item, index, visible }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "rgba(201,168,76,0.07)" : "rgba(255,255,255,0.03)",
        border: `1px solid ${hovered ? "rgba(201,168,76,0.25)" : "rgba(255,255,255,0.07)"}`,
        borderRadius: 16, padding: "36px 28px", textAlign: "center",
        transition: `all 0.25s ease, opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(30px) scale(0.97)",
        cursor: "default", position: "relative", overflow: "hidden",
      }}
    >
      {hovered && (
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(circle at 50% 0%, rgba(201,168,76,0.06) 0%, transparent 70%)",
        }} />
      )}
      <div style={{ fontSize: 40, marginBottom: 18 }}>{item.icon}</div>
      <h3 style={{
        fontSize: 14, fontWeight: 800, color: "#fff", marginBottom: 10,
        letterSpacing: 1, fontFamily: "sans-serif", textTransform: "uppercase",
      }}>
        {item.title}
      </h3>
      <p style={{ fontSize: 13, color: "#6a7d94", fontFamily: "sans-serif", lineHeight: 1.6 }}>
        {item.desc}
      </p>
    </div>
  );
};

const WhyUs: React.FC = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [headerVisible, setHeaderVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = parseInt((e.target as HTMLElement).dataset.idx || "0");
            setVisibleItems((prev) => [...new Set([...prev, idx])]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const headerObs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setHeaderVisible(true); },
      { threshold: 0.2 }
    );

    itemRefs.current.forEach((el) => el && obs.observe(el));
    if (headerRef.current) headerObs.observe(headerRef.current);

    return () => { obs.disconnect(); headerObs.disconnect(); };
  }, []);

  return (
    <section id="why-us" style={{
      padding: "120px 28px",
      background: "#060a12",
      position: "relative", overflow: "hidden",
    }}>
      {/* Decorative lines */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 1,
        background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)",
      }} />
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: 1,
        background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)",
      }} />

      {/* Background texture */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        backgroundImage: `radial-gradient(rgba(201,168,76,0.03) 1px, transparent 1px)`,
        backgroundSize: "40px 40px",
      }} />

      <div style={{ maxWidth: 1240, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div
          ref={headerRef}
          style={{
            textAlign: "center", marginBottom: 72,
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <div style={{
            display: "inline-block", border: "1px solid rgba(201,168,76,0.3)",
            borderRadius: 20, padding: "6px 18px", marginBottom: 20,
            fontSize: 11, color: "#C9A84C", fontWeight: 700, letterSpacing: 3,
            fontFamily: "sans-serif",
          }}>
            WHY CHOOSE US
          </div>
          <h2 style={{
            fontSize: "clamp(28px, 4vw, 50px)", fontWeight: 900,
            fontFamily: "'Georgia', serif", color: "#fff", marginBottom: 16,
          }}>
            Why Choose <span style={{ color: "#C9A84C" }}>Azentiq Labs?</span>
          </h2>
          <p style={{
            fontSize: 16, color: "#6a7d94", fontFamily: "sans-serif",
            lineHeight: 1.7, maxWidth: 500, margin: "0 auto",
          }}>
            We don't just deliver software — we deliver outcomes. Here's what sets us apart.
          </p>
        </div>

        {/* Why cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: 20, marginBottom: 80,
        }}>
          {WHY_US.map((item, i) => (
            <div key={i} data-idx={i} ref={(el) => (itemRefs.current[i] = el)}>
              <div onClick={() => trackEvent({
                action: ANALYTICS_EVENTS.CARD_CLICK,
                category: ANALYTICS_CATEGORIES.INTERACTION,
                label: `why_us_card_${i}`,
              })}>
                <WhyCard item={item} index={i} visible={visibleItems.includes(i)} />
              </div>
            </div>
          ))}
        </div>

        {/* Certifications & Expertise */}
        <div style={{ marginBottom: 80 }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{
              fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900,
              fontFamily: "'Georgia', serif", color: "#fff", marginBottom: 16,
            }}>
              Industry <span style={{ color: "#C9A84C" }}>Expertise</span>
            </h2>
            <p style={{
              fontSize: 16, color: "#6a7d94", fontFamily: "sans-serif",
              lineHeight: 1.7, maxWidth: 520, margin: "0 auto",
            }}>
              Our team brings decades of combined experience and cutting-edge certifications to every project.
            </p>
          </div>

          <div style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: 24,
          }}>
            {[
              { title: "Certified Developers", desc: "AWS, Google Cloud, Microsoft Azure certified professionals", icon: "🏆" },
              { title: "Agile Methodology", desc: "Scrum Master certified team with proven agile delivery processes", icon: "⚡" },
              { title: "Security First", desc: "OWASP compliant development with enterprise-grade security practices", icon: "🔒" },
              { title: "Quality Assurance", desc: "ISO 9001 inspired QA processes ensuring zero-defect delivery", icon: "✅" },
            ].map((cert, i) => (
              <div key={i} style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 16, padding: 24, textAlign: "center",
              }}>
                <div style={{ fontSize: 32, marginBottom: 16 }}>{cert.icon}</div>
                <h3 style={{
                  fontSize: 16, fontWeight: 800, color: "#fff",
                  fontFamily: "'Georgia', serif", marginBottom: 12,
                }}>{cert.title}</h3>
                <p style={{
                  fontSize: 14, color: "#7a8fa8", lineHeight: 1.6,
                  fontFamily: "sans-serif",
                }}>{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Client Success Stories */}
        <div style={{
          background: "linear-gradient(135deg, rgba(201,168,76,0.05), rgba(201,168,76,0.02))",
          border: "1px solid rgba(201,168,76,0.15)",
          borderRadius: 20, padding: "48px 32px", marginBottom: 80,
        }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h2 style={{
              fontSize: "clamp(24px, 3vw, 40px)", fontWeight: 900,
              fontFamily: "'Georgia', serif", color: "#fff", marginBottom: 12,
            }}>
              Client Success Stories
            </h2>
            <p style={{
              fontSize: 16, color: "#6a7d94", fontFamily: "sans-serif",
              lineHeight: 1.7,
            }}>
              Real results from real clients across diverse industries.
            </p>
          </div>

          <div style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 24,
          }}>
            {[
              { quote: "Azentiq Labs transformed our e-commerce platform, increasing conversions by 150%. Their attention to detail and technical expertise is unmatched.", name: "Rajesh Sharma", company: "TechVista Solutions", rating: 5 },
              { quote: "The mobile app they built for us has over 50,000 downloads. Professional, reliable, and always available for support.", name: "Priya Patel", company: "InnovateNow", rating: 5 },
              { quote: "From concept to launch in 3 months. Azentiq Labs delivered exactly what we needed, on time and within budget.", name: "Amit Kumar", company: "StartUpPro", rating: 5 },
            ].map((testimonial, i) => (
              <div key={i} style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 16, padding: 24,
              }}>
                <div style={{
                  fontSize: 48, color: "rgba(201,168,76,0.2)", lineHeight: 0.7,
                  fontFamily: "Georgia, serif", marginBottom: 16,
                }}>"</div>
                <p style={{
                  fontSize: 14, color: "#9ab0c8", lineHeight: 1.6,
                  fontFamily: "sans-serif", marginBottom: 20, fontStyle: "italic",
                }}>{testimonial.quote}</p>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: "50%",
                    background: "linear-gradient(135deg, #C9A84C, #b8942e)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 16, fontWeight: 900, color: "#060a12", fontFamily: "Georgia, serif",
                  }}>{testimonial.name[0]}</div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: "#fff", fontFamily: "Georgia, serif" }}>{testimonial.name}</div>
                    <div style={{ fontSize: 12, color: "#C9A84C", fontFamily: "sans-serif" }}>{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Serving bar */}
        <div style={{
          textAlign: "center",
          paddingTop: 48, borderTop: "1px solid rgba(255,255,255,0.06)",
          opacity: headerVisible ? 1 : 0,
          transition: "opacity 0.8s ease 0.6s",
        }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 12,
            flexWrap: "wrap", justifyContent: "center",
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(201,168,76,0.15)",
            borderRadius: 50, padding: "16px 32px",
          }}>
            <span style={{ fontSize: 16 }}>📍</span>
            <span style={{ fontSize: 12, color: "#555", fontFamily: "sans-serif", fontWeight: 700, letterSpacing: 2 }}>
              SERVING:
            </span>
            {CITIES.map((city, i) => (
              <React.Fragment key={city}>
                <span style={{ fontSize: 14, color: "#C9A84C", fontWeight: 800, fontFamily: "sans-serif" }}>{city}</span>
                {i < CITIES.length - 1 && (
                  <span style={{ color: "#333", fontSize: 16 }}>|</span>
                )}
              </React.Fragment>
            ))}
            <span style={{ color: "#444", fontSize: 14, fontFamily: "sans-serif" }}>& Across India</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
