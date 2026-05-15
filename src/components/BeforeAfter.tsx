import React, { useState, useEffect, useRef } from "react";
import { BEFORE_AFTER } from "../data";
import { ANALYTICS_EVENTS, ANALYTICS_CATEGORIES, ANALYTICS_LABELS } from "../constants/analytics";
import { trackEvent } from "../utils/analytics";

const BeforeAfter: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const item = BEFORE_AFTER[activeTab];

  return (
    <section id="before-after" style={{
      padding: "120px 28px",
      background: "linear-gradient(180deg, #060a12 0%, #080d18 100%)",
    }}>
      <style>{`
        @keyframes fadeSlide { from { opacity: 0; transform: translateX(20px); } to { opacity: 1; transform: translateX(0); } }
        @media (max-width: 768px) { .ba-grid { grid-template-columns: 1fr !important; } }
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
          }}>REAL CLIENT RESULTS</div>
          <h2 style={{
            fontSize: "clamp(28px, 4vw, 50px)", fontWeight: 900,
            fontFamily: "Georgia, serif", color: "#fff", marginBottom: 16,
          }}>
            Before & After <span style={{ color: "#C9A84C" }}>Azentiq</span>
          </h2>
          <p style={{
            fontSize: 16, color: "#6a7d94", fontFamily: "sans-serif",
            lineHeight: 1.7, maxWidth: 520, margin: "0 auto",
          }}>
            See the measurable transformation our clients experience. These are real numbers from real projects.
          </p>
        </div>

        {/* Tabs */}
        <div style={{
          display: "flex", gap: 12, justifyContent: "center", marginBottom: 56, flexWrap: "wrap",
          opacity: visible ? 1 : 0, transition: "opacity 0.6s ease 0.2s",
        }}>
          {BEFORE_AFTER.map((item, i) => (
            <button key={i} onClick={() => {
              setActiveTab(i);
              trackEvent({
                action: ANALYTICS_EVENTS.BUTTON_CLICK,
                category: ANALYTICS_CATEGORIES.INTERACTION,
                label: `before_after_tab_${i}`,
              });
            }} style={{
              padding: "12px 24px", borderRadius: 10, cursor: "pointer",
              fontFamily: "sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: 0.5,
              transition: "all 0.3s",
              background: activeTab === i ? "linear-gradient(135deg, #C9A84C, #b8942e)" : "rgba(255,255,255,0.03)",
              border: activeTab === i ? "none" : "1px solid rgba(255,255,255,0.08)",
              color: activeTab === i ? "#060a12" : "#7a8fa8",
              boxShadow: activeTab === i ? "0 6px 24px rgba(201,168,76,0.35)" : "none",
            }}>
              {item.icon} {item.label}
            </button>
          ))}
        </div>

        {/* Main card */}
        <div style={{
          opacity: visible ? 1 : 0, transition: "opacity 0.6s ease 0.3s",
          animation: visible ? "fadeSlide 0.4s ease" : "none",
        }}>
          {/* Client label */}
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <span style={{
              fontSize: 13, color: "#5a7a94", fontFamily: "sans-serif",
              background: "rgba(255,255,255,0.03)", padding: "8px 20px",
              borderRadius: 20, border: "1px solid rgba(255,255,255,0.06)",
            }}>
              Client: <strong style={{ color: "#C9A84C" }}>{item.client}</strong> · ⏱ {item.timeframe}
            </span>
          </div>

          <div className="ba-grid" style={{
            display: "grid", gridTemplateColumns: "1fr 80px 1fr", gap: 0,
            alignItems: "stretch",
          }}>
            {/* Before */}
            <div style={{
              background: "rgba(224,82,82,0.05)",
              border: "1px solid rgba(224,82,82,0.2)",
              borderRadius: "20px 0 0 20px", padding: "40px 36px",
            }}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "rgba(224,82,82,0.1)", borderRadius: 8, padding: "6px 14px",
                marginBottom: 28,
              }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#e05252", display: "inline-block" }} />
                <span style={{ fontSize: 11, color: "#e05252", fontWeight: 800, fontFamily: "sans-serif", letterSpacing: 2 }}>BEFORE</span>
              </div>
              <div style={{ fontSize: 28, fontWeight: 900, color: "#e05252", fontFamily: "Georgia,serif", marginBottom: 28 }}>
                {item.before.metric}
              </div>
              <ul style={{ listStyle: "none" }}>
                {item.before.points.map((p, i) => (
                  <li key={i} style={{
                    display: "flex", alignItems: "flex-start", gap: 10,
                    marginBottom: 14, fontSize: 14, color: "#7a8fa8", fontFamily: "sans-serif", lineHeight: 1.5,
                  }}>
                    <span style={{ color: "#e05252", fontSize: 16, flexShrink: 0, marginTop: 1 }}>✗</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            {/* Divider */}
            <div style={{
              background: "rgba(201,168,76,0.05)",
              border: "1px solid rgba(201,168,76,0.2)",
              borderLeft: "none", borderRight: "none",
              display: "flex", alignItems: "center", justifyContent: "center",
              flexDirection: "column", gap: 8,
            }}>
              <div style={{
                width: 44, height: 44, borderRadius: "50%",
                background: "linear-gradient(135deg, #C9A84C, #b8942e)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 20, boxShadow: "0 0 24px rgba(201,168,76,0.4)",
              }}>→</div>
              <div style={{ fontSize: 9, color: "#C9A84C99", fontFamily: "sans-serif", letterSpacing: 1, writingMode: "vertical-rl", transform: "rotate(180deg)" }}>AZENTIQ</div>
            </div>

            {/* After */}
            <div style={{
              background: "rgba(82,224,122,0.04)",
              border: "1px solid rgba(82,224,122,0.2)",
              borderRadius: "0 20px 20px 0", padding: "40px 36px",
            }}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "rgba(82,224,122,0.1)", borderRadius: 8, padding: "6px 14px",
                marginBottom: 28,
              }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#52e07a", display: "inline-block" }} />
                <span style={{ fontSize: 11, color: "#52e07a", fontWeight: 800, fontFamily: "sans-serif", letterSpacing: 2 }}>AFTER</span>
              </div>
              <div style={{ fontSize: 28, fontWeight: 900, color: "#52e07a", fontFamily: "Georgia,serif", marginBottom: 28 }}>
                {item.after.metric}
              </div>
              <ul style={{ listStyle: "none" }}>
                {item.after.points.map((p, i) => (
                  <li key={i} style={{
                    display: "flex", alignItems: "flex-start", gap: 10,
                    marginBottom: 14, fontSize: 14, color: "#9ab0c8", fontFamily: "sans-serif", lineHeight: 1.5,
                  }}>
                    <span style={{ color: "#52e07a", fontSize: 16, flexShrink: 0, marginTop: 1 }}>✓</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA bar */}
          <div style={{
            marginTop: 40, textAlign: "center",
            background: "linear-gradient(135deg, rgba(201,168,76,0.07), rgba(201,168,76,0.02))",
            border: "1px solid rgba(201,168,76,0.2)", borderRadius: 16,
            padding: "28px 36px",
          }}>
            <p style={{ fontSize: 15, color: "#9ab0c8", fontFamily: "sans-serif", marginBottom: 16 }}>
              Want results like these for your business?
            </p>
            <a href="/contact" onClick={() => trackEvent({
              action: ANALYTICS_EVENTS.BUTTON_CLICK,
              category: ANALYTICS_CATEGORIES.CONVERSION,
              label: ANALYTICS_LABELS.PRIMARY_CTA,
            })} style={{
              background: "linear-gradient(135deg, #C9A84C, #b8942e)",
              color: "#060a12", border: "none", borderRadius: 8,
              padding: "14px 36px", fontSize: 14, fontWeight: 800,
              cursor: "pointer", fontFamily: "sans-serif", letterSpacing: 0.5,
              textDecoration: "none", display: "inline-block",
              boxShadow: "0 6px 24px rgba(201,168,76,0.4)",
            }}>Get Your Free Strategy Call →</a>
          </div>
        </div>

        {/* Detailed Case Studies */}
        <div style={{ marginTop: 120 }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <h2 style={{
              fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900,
              fontFamily: "'Georgia', serif", color: "#fff", marginBottom: 16,
            }}>
              Featured <span style={{ color: "#C9A84C" }}>Case Studies</span>
            </h2>
            <p style={{
              fontSize: 16, color: "#6a7d94", fontFamily: "sans-serif",
              lineHeight: 1.7, maxWidth: 520, margin: "0 auto",
            }}>
              In-depth looks at how we've helped businesses achieve extraordinary results.
            </p>
          </div>

          <div style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            gap: 32,
          }}>
            {[
              {
                title: "E-Commerce Platform Overhaul",
                client: "FashionForward",
                challenge: "Outdated website with poor user experience and low conversion rates",
                solution: "Complete redesign with modern UX, mobile optimization, and advanced analytics",
                results: ["300% increase in conversion rate", "50% reduction in bounce rate", "2x faster load times"],
                tech: ["React", "Node.js", "MongoDB", "Stripe"],
                image: "🛍️"
              },
              {
                title: "Mobile App Development",
                client: "HealthTrack Pro",
                challenge: "Need for a comprehensive fitness tracking app with social features",
                solution: "Cross-platform app with real-time tracking, community features, and AI insights",
                results: ["100K+ downloads in first 6 months", "4.8/5 app store rating", "85% user retention"],
                tech: ["Flutter", "Firebase", "TensorFlow", "Google Maps API"],
                image: "📱"
              },
              {
                title: "SaaS Dashboard Redesign",
                client: "DataFlow Analytics",
                challenge: "Complex data visualization tool that was difficult to use",
                solution: "Intuitive dashboard with drag-and-drop interface and real-time collaboration",
                results: ["60% faster task completion", "40% increase in user engagement", "Enterprise adoption"],
                tech: ["Vue.js", "D3.js", "WebSocket", "AWS"],
                image: "📊"
              },
            ].map((study, i) => (
              <div key={i} style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 20, padding: 32, overflow: "hidden",
                position: "relative",
              }}>
                <div style={{
                  position: "absolute", top: 20, right: 20,
                  fontSize: 48, opacity: 0.1,
                }}>{study.image}</div>

                <h3 style={{
                  fontSize: 20, fontWeight: 800, color: "#fff",
                  fontFamily: "'Georgia', serif", marginBottom: 8,
                }}>{study.title}</h3>

                <div style={{
                  fontSize: 14, color: "#C9A84C", fontWeight: 700,
                  fontFamily: "sans-serif", marginBottom: 20,
                }}>Client: {study.client}</div>

                <div style={{ marginBottom: 20 }}>
                  <h4 style={{
                    fontSize: 14, fontWeight: 800, color: "#fff",
                    fontFamily: "sans-serif", marginBottom: 8, textTransform: "uppercase", letterSpacing: 1,
                  }}>Challenge</h4>
                  <p style={{
                    fontSize: 14, color: "#7a8fa8", lineHeight: 1.6,
                    fontFamily: "sans-serif",
                  }}>{study.challenge}</p>
                </div>

                <div style={{ marginBottom: 20 }}>
                  <h4 style={{
                    fontSize: 14, fontWeight: 800, color: "#fff",
                    fontFamily: "sans-serif", marginBottom: 8, textTransform: "uppercase", letterSpacing: 1,
                  }}>Solution</h4>
                  <p style={{
                    fontSize: 14, color: "#7a8fa8", lineHeight: 1.6,
                    fontFamily: "sans-serif",
                  }}>{study.solution}</p>
                </div>

                <div style={{ marginBottom: 20 }}>
                  <h4 style={{
                    fontSize: 14, fontWeight: 800, color: "#52e07a",
                    fontFamily: "sans-serif", marginBottom: 8, textTransform: "uppercase", letterSpacing: 1,
                  }}>Results</h4>
                  <ul style={{ listStyle: "none", padding: 0 }}>
                    {study.results.map((result, j) => (
                      <li key={j} style={{
                        fontSize: 14, color: "#9ab0c8", lineHeight: 1.6,
                        fontFamily: "sans-serif", marginBottom: 6,
                        display: "flex", alignItems: "center", gap: 8,
                      }}>
                        <span style={{ color: "#52e07a", fontSize: 12 }}>✓</span>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 style={{
                    fontSize: 12, fontWeight: 800, color: "#555",
                    fontFamily: "sans-serif", marginBottom: 8, textTransform: "uppercase", letterSpacing: 1,
                  }}>Technologies Used</h4>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                    {study.tech.map((tech, j) => (
                      <span key={j} style={{
                        fontSize: 10, color: "#C9A84C", fontWeight: 700,
                        background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.2)",
                        borderRadius: 4, padding: "4px 8px", fontFamily: "sans-serif",
                      }}>{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Portfolio CTA */}
        <div style={{
          marginTop: 80, textAlign: "center",
          background: "linear-gradient(135deg, #C9A84C, #b8942e)",
          borderRadius: 20, padding: "60px 40px",
        }}>
          <h2 style={{
            fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900,
            fontFamily: "'Georgia', serif", color: "#060a12", marginBottom: 16,
          }}>
            Ready to Join Our Success Stories?
          </h2>
          <p style={{
            fontSize: 18, color: "#060a12", fontFamily: "sans-serif",
            lineHeight: 1.7, maxWidth: 600, margin: "0 auto 32px",
            opacity: 0.9,
          }}>
            Let's discuss your project and create measurable results that drive your business forward.
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
            }}>Start Your Project</a>
            <a href="/testimonials" onClick={() => trackEvent({
              action: ANALYTICS_EVENTS.LINK_CLICK,
              category: ANALYTICS_CATEGORIES.INTERACTION,
              label: ANALYTICS_LABELS.SECONDARY_CTA,
            })} style={{
              background: "transparent", color: "#060a12", border: "2px solid #060a12",
              borderRadius: 8, padding: "12px 26px", fontSize: 16, fontWeight: 800,
              cursor: "pointer", fontFamily: "sans-serif", textDecoration: "none",
              display: "inline-block", transition: "all 0.2s",
            }}>Read More Reviews</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
