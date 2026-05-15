import React, { useState, useEffect, useRef } from "react";
import { ANALYTICS_EVENTS, ANALYTICS_CATEGORIES, ANALYTICS_LABELS } from "../constants/analytics";
import { trackEvent } from "../utils/analytics";

const PHASES = [
  {
    number: "01",
    title: "Discovery & Audit",
    duration: "Week 1–2",
    icon: "🔍",
    color: "#5b9cf6",
    desc: "We deep-dive into your business, competitors, and goals. We audit your existing digital presence, identify gaps, and map opportunities.",
    deliverables: ["Business goals document", "Competitor analysis report", "Digital audit findings", "Opportunity matrix"],
    outcome: "Crystal-clear picture of where you stand and where you can win.",
  },
  {
    number: "02",
    title: "Strategy Blueprint",
    duration: "Week 2–3",
    icon: "📋",
    color: "#C9A84C",
    desc: "We create your custom digital growth roadmap. Every tactic is tied to a measurable business outcome — no vanity metrics.",
    deliverables: ["Custom growth roadmap", "Tech stack recommendations", "Budget allocation plan", "90-day execution plan"],
    outcome: "A clear, actionable plan with milestones and KPIs you can track.",
  },
  {
    number: "03",
    title: "Build & Launch",
    duration: "Week 3–10",
    icon: "🚀",
    color: "#52e07a",
    desc: "Our engineers and designers execute the plan with precision. You get weekly progress updates and demos throughout the build phase.",
    deliverables: ["Working product/system", "QA tested & approved", "Training documentation", "Go-live support"],
    outcome: "A polished, tested solution launched on schedule.",
  },
  {
    number: "04",
    title: "Grow & Optimise",
    duration: "Ongoing",
    icon: "📈",
    color: "#e07ac8",
    desc: "We monitor performance, run A/B tests, and continuously optimise. Monthly strategy reviews ensure you're always moving toward your goals.",
    deliverables: ["Monthly analytics reports", "Conversion optimisation", "A/B test results", "Strategy pivots as needed"],
    outcome: "Compounding returns — better results every single month.",
  },
];

const PILLARS = [
  {
    icon: "🎯",
    title: "Goal-First Thinking",
    desc: "Every decision maps back to your business goal — more revenue, more leads, lower costs. We don't build pretty things that don't perform.",
  },
  {
    icon: "📊",
    title: "Data-Driven Decisions",
    desc: "We use analytics, heatmaps, and user data to inform every move. No guesswork — just evidence-backed strategy.",
  },
  {
    icon: "⚡",
    title: "Speed to Market",
    desc: "Our agile process gets you to market fast. An MVP in 4 weeks, full product in 8–12. Revenue starts sooner.",
  },
  {
    icon: "🔄",
    title: "Iterative Improvement",
    desc: "We don't disappear after launch. We iterate, optimise, and compound gains until you're the dominant player in your market.",
  },
  {
    icon: "🤝",
    title: "Transparent Partnership",
    desc: "Weekly updates, direct access to your team, no black boxes. You know exactly what we're doing and why.",
  },
  {
    icon: "💡",
    title: "Innovation Edge",
    desc: "We stay ahead of technology trends so you do too. AI, automation, and modern tech stacks give you a competitive advantage.",
  },
];

const BusinessStrategy: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [activePhase, setActivePhase] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const timer = setInterval(() => setActivePhase((p) => (p + 1) % PHASES.length), 3500);
    return () => clearInterval(timer);
  }, [visible]);

  const phase = PHASES[activePhase];

  return (
    <section id="strategy" style={{
      padding: "120px 28px",
      background: "linear-gradient(180deg, #080d18 0%, #060a12 100%)",
    }}>
      <style>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        @media (max-width: 900px) { .strategy-phases { grid-template-columns: 1fr 1fr !important; } .pillars-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 600px) { .strategy-phases { grid-template-columns: 1fr !important; } .pillars-grid { grid-template-columns: 1fr !important; } .phase-detail { flex-direction: column !important; } }
      `}</style>

      <div ref={sectionRef} style={{ maxWidth: 1240, margin: "0 auto" }}>
        {/* Header */}
        <div style={{
          marginBottom: 72, textAlign: "center",
          opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(24px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}>
          <div style={{
            display: "inline-block", border: "1px solid rgba(201,168,76,0.3)",
            borderRadius: 20, padding: "6px 18px", marginBottom: 20,
            fontSize: 11, color: "#C9A84C", fontWeight: 700, letterSpacing: 3, fontFamily: "sans-serif",
          }}>OUR METHODOLOGY</div>
          <h2 style={{
            fontSize: "clamp(28px, 4vw, 50px)", fontWeight: 900,
            fontFamily: "Georgia, serif", color: "#fff", marginBottom: 16,
          }}>
            The Azentiq <span style={{ color: "#C9A84C" }}>Growth Strategy</span>
          </h2>
          <p style={{
            fontSize: 16, color: "#6a7d94", fontFamily: "sans-serif",
            lineHeight: 1.7, maxWidth: 560, margin: "0 auto",
          }}>
            A proven 4-phase framework that has helped 50+ businesses across India build dominant digital presences and generate measurable ROI.
          </p>
        </div>

        {/* Phase selector */}
        <div className="strategy-phases" style={{
          display: "grid", gridTemplateColumns: "repeat(4,1fr)",
          gap: 16, marginBottom: 40,
          opacity: visible ? 1 : 0, transition: "opacity 0.6s ease 0.2s",
        }}>
          {PHASES.map((p, i) => (
            <button key={i} onClick={() => setActivePhase(i)} style={{
              background: activePhase === i ? "rgba(201,168,76,0.08)" : "rgba(255,255,255,0.02)",
              border: `1px solid ${activePhase === i ? "rgba(201,168,76,0.4)" : "rgba(255,255,255,0.06)"}`,
              borderRadius: 14, padding: "20px", cursor: "pointer",
              textAlign: "left", transition: "all 0.3s",
            }}>
              <div style={{ fontSize: 24, marginBottom: 10 }}>{p.icon}</div>
              <div style={{ fontSize: 10, color: "#C9A84C", fontWeight: 700, fontFamily: "sans-serif", letterSpacing: 2, marginBottom: 6 }}>PHASE {p.number}</div>
              <div style={{ fontSize: 13, fontWeight: 800, color: "#fff", fontFamily: "Georgia,serif", marginBottom: 4 }}>{p.title}</div>
              <div style={{ fontSize: 11, color: "#5a7a94", fontFamily: "sans-serif" }}>{p.duration}</div>
              {activePhase === i && (
                <div style={{ marginTop: 10, height: 3, borderRadius: 2, background: `linear-gradient(90deg, ${p.color}, transparent)` }} />
              )}
            </button>
          ))}
        </div>

        {/* Phase detail */}
        <div className="phase-detail" style={{
          display: "flex", gap: 32, marginBottom: 80,
          background: "rgba(255,255,255,0.02)", border: "1px solid rgba(201,168,76,0.15)",
          borderRadius: 20, padding: "40px",
          opacity: visible ? 1 : 0, transition: "opacity 0.6s ease 0.3s",
        }}>
          <div style={{ flex: 1.2 }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              marginBottom: 16,
            }}>
              <span style={{ fontSize: 32 }}>{phase.icon}</span>
              <div>
                <div style={{ fontSize: 10, color: phase.color, fontWeight: 700, fontFamily: "sans-serif", letterSpacing: 2 }}>PHASE {phase.number} · {phase.duration}</div>
                <div style={{ fontSize: 22, fontWeight: 900, color: "#fff", fontFamily: "Georgia,serif" }}>{phase.title}</div>
              </div>
            </div>
            <p style={{ fontSize: 15, color: "#8a9bb5", fontFamily: "sans-serif", lineHeight: 1.8, marginBottom: 24 }}>{phase.desc}</p>
            <div style={{
              background: `rgba(${phase.color === "#C9A84C" ? "201,168,76" : phase.color === "#52e07a" ? "82,224,122" : phase.color === "#e07ac8" ? "224,122,200" : "91,156,246"},0.08)`,
              borderRadius: 12, padding: "16px 20px",
              border: `1px solid ${phase.color}33`,
            }}>
              <div style={{ fontSize: 11, color: phase.color, fontWeight: 700, fontFamily: "sans-serif", letterSpacing: 1, marginBottom: 8 }}>💡 OUTCOME</div>
              <p style={{ fontSize: 14, color: "#9ab0c8", fontFamily: "sans-serif", margin: 0, lineHeight: 1.6 }}>{phase.outcome}</p>
            </div>
          </div>

          <div style={{ flex: 1, borderLeft: "1px solid rgba(255,255,255,0.06)", paddingLeft: 32 }}>
            <div style={{ fontSize: 11, color: "#5a7a94", fontWeight: 700, fontFamily: "sans-serif", letterSpacing: 2, marginBottom: 20 }}>📦 DELIVERABLES</div>
            {phase.deliverables.map((d, i) => (
              <div key={i} style={{
                display: "flex", alignItems: "center", gap: 12,
                marginBottom: 16, padding: "12px 16px",
                background: "rgba(255,255,255,0.02)", borderRadius: 8,
                border: "1px solid rgba(255,255,255,0.04)",
              }}>
                <span style={{
                  width: 24, height: 24, borderRadius: "50%",
                  background: `linear-gradient(135deg, ${phase.color}, ${phase.color}88)`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 10, color: "#060a12", fontWeight: 900, flexShrink: 0,
                }}>{i + 1}</span>
                <span style={{ fontSize: 13, color: "#9ab0c8", fontFamily: "sans-serif" }}>{d}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Strategy pillars */}
        <div style={{
          opacity: visible ? 1 : 0, transition: "opacity 0.6s ease 0.4s",
        }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h3 style={{ fontSize: 28, fontWeight: 900, color: "#fff", fontFamily: "Georgia,serif" }}>
              Our Core <span style={{ color: "#C9A84C" }}>Principles</span>
            </h3>
          </div>
          <div className="pillars-grid" style={{
            display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20,
          }}>
            {PILLARS.map((p, i) => (
              <div key={i} style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.05)",
                borderRadius: 16, padding: "28px 24px",
                transition: "border-color 0.25s, background 0.25s",
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
                <div style={{ fontSize: 30, marginBottom: 14 }}>{p.icon}</div>
                <h4 style={{ fontSize: 15, fontWeight: 800, color: "#fff", fontFamily: "Georgia,serif", marginBottom: 10 }}>{p.title}</h4>
                <p style={{ fontSize: 13, color: "#6a7d94", fontFamily: "sans-serif", lineHeight: 1.7, margin: 0 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing & Guarantees */}
        <div style={{ marginTop: 80, marginBottom: 80 }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h3 style={{
              fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900,
              fontFamily: "'Georgia', serif", color: "#fff", marginBottom: 16,
            }}>
              Transparent <span style={{ color: "#C9A84C" }}>Pricing</span>
            </h3>
            <p style={{
              fontSize: 16, color: "#6a7d94", fontFamily: "sans-serif",
              lineHeight: 1.7, maxWidth: 520, margin: "0 auto",
            }}>
              No hidden fees, no surprises. Fixed pricing with guaranteed results.
            </p>
          </div>

          <div style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 24,
          }}>
            {[
              {
                type: "Strategy Consultation",
                price: "₹25,000",
                duration: "2 weeks",
                includes: ["Business audit", "Competitor analysis", "Custom roadmap", "Tech recommendations"],
                popular: false
              },
              {
                type: "Full Project Development",
                price: "₹2,50,000+",
                duration: "8-12 weeks",
                includes: ["Complete strategy", "Full development", "Testing & launch", "3 months support"],
                popular: true
              },
              {
                type: "Ongoing Partnership",
                price: "₹75,000/month",
                duration: "Monthly",
                includes: ["Strategy optimization", "Feature development", "Performance monitoring", "Priority support"],
                popular: false
              },
            ].map((plan, i) => (
              <div key={i} style={{
                background: plan.popular ? "linear-gradient(135deg, rgba(201,168,76,0.08), rgba(201,168,76,0.02))" : "rgba(255,255,255,0.02)",
                border: `1px solid ${plan.popular ? "rgba(201,168,76,0.3)" : "rgba(255,255,255,0.06)"}`,
                borderRadius: 16, padding: 32, position: "relative",
              }}>
                {plan.popular && (
                  <div style={{
                    position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)",
                    background: "linear-gradient(135deg, #C9A84C, #b8942e)",
                    color: "#060a12", fontSize: 12, fontWeight: 800,
                    padding: "6px 16px", borderRadius: 20, fontFamily: "sans-serif",
                  }}>MOST POPULAR</div>
                )}

                <h4 style={{
                  fontSize: 20, fontWeight: 800, color: "#fff",
                  fontFamily: "'Georgia', serif", marginBottom: 8,
                }}>{plan.type}</h4>

                <div style={{
                  fontSize: 32, fontWeight: 900, color: "#C9A84C",
                  fontFamily: "Georgia, serif", marginBottom: 4,
                }}>{plan.price}</div>

                <div style={{
                  fontSize: 14, color: "#6a7d94", fontFamily: "sans-serif",
                  marginBottom: 20,
                }}>{plan.duration}</div>

                <ul style={{ listStyle: "none", padding: 0 }}>
                  {plan.includes.map((item, j) => (
                    <li key={j} style={{
                      fontSize: 14, color: "#9ab0c8", lineHeight: 1.6,
                      fontFamily: "sans-serif", marginBottom: 8,
                      display: "flex", alignItems: "center", gap: 8,
                    }}>
                      <span style={{ color: "#52e07a", fontSize: 12 }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Guarantees */}
        <div style={{
          background: "linear-gradient(135deg, rgba(82,224,122,0.05), rgba(82,224,122,0.02))",
          border: "1px solid rgba(82,224,122,0.2)",
          borderRadius: 20, padding: "48px 32px", marginBottom: 80,
        }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h3 style={{
              fontSize: "clamp(24px, 3vw, 40px)", fontWeight: 900,
              fontFamily: "'Georgia', serif", color: "#fff", marginBottom: 12,
            }}>
              Our <span style={{ color: "#52e07a" }}>Guarantees</span>
            </h3>
            <p style={{
              fontSize: 16, color: "#6a7d94", fontFamily: "sans-serif",
              lineHeight: 1.7,
            }}>
              We stand behind our work with iron-clad guarantees.
            </p>
          </div>

          <div style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: 24,
          }}>
            {[
              { icon: "⏰", title: "On-Time Delivery", desc: "We deliver on schedule or you get 20% off your next project." },
              { icon: "💯", title: "Quality Assurance", desc: "Rigorous testing ensures zero critical bugs at launch." },
              { icon: "🔒", title: "Security Guarantee", desc: "Enterprise-grade security with 99.9% uptime SLA." },
              { icon: "📞", title: "24/7 Support", desc: "Round-the-clock support during and after development." },
              { icon: "💰", title: "ROI Guarantee", desc: "Measurable results or we'll optimize until you see returns." },
              { icon: "🤝", title: "Satisfaction Guarantee", desc: "Not happy? We'll revise until you are, no questions asked." },
            ].map((guarantee, i) => (
              <div key={i} style={{
                textAlign: "center",
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 16, padding: 24,
              }}>
                <div style={{ fontSize: 32, marginBottom: 16 }}>{guarantee.icon}</div>
                <h4 style={{
                  fontSize: 16, fontWeight: 800, color: "#fff",
                  fontFamily: "'Georgia', serif", marginBottom: 12,
                }}>{guarantee.title}</h4>
                <p style={{
                  fontSize: 14, color: "#7a8fa8", lineHeight: 1.6,
                  fontFamily: "sans-serif",
                }}>{guarantee.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{
          marginTop: 72, textAlign: "center",
          background: "linear-gradient(135deg, rgba(201,168,76,0.08), rgba(201,168,76,0.02))",
          border: "1px solid rgba(201,168,76,0.25)", borderRadius: 24,
          padding: "56px 36px",
          opacity: visible ? 1 : 0, transition: "opacity 0.6s ease 0.5s",
        }}>
          <div style={{ fontSize: 40, marginBottom: 16 }}>🚀</div>
          <h3 style={{ fontSize: 28, fontWeight: 900, color: "#fff", fontFamily: "Georgia,serif", marginBottom: 12 }}>
            Ready to Execute This Strategy <span style={{ color: "#C9A84C" }}>For Your Business?</span>
          </h3>
          <p style={{ fontSize: 16, color: "#6a7d94", fontFamily: "sans-serif", marginBottom: 32, maxWidth: 480, margin: "0 auto 32px" }}>
            Book a free 30-minute strategy call. We'll audit your current presence and show you exactly what it would take to achieve your growth targets.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <button
              onClick={() => {
                trackEvent({
                  action: ANALYTICS_EVENTS.BUTTON_CLICK,
                  category: ANALYTICS_CATEGORIES.CONVERSION,
                  label: ANALYTICS_LABELS.PRIMARY_CTA,
                });
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              style={{
                background: "linear-gradient(135deg, #C9A84C, #b8942e)",
                color: "#060a12", border: "none", borderRadius: 8,
                padding: "16px 36px", fontSize: 14, fontWeight: 800,
                cursor: "pointer", fontFamily: "sans-serif", letterSpacing: 0.5,
                boxShadow: "0 6px 30px rgba(201,168,76,0.4)",
              }}
            >
              Book Free Strategy Call →
            </button>
            <a
              href="tel:+918329305232"
              onClick={() => trackEvent({
                action: ANALYTICS_EVENTS.PHONE_CLICK,
                category: ANALYTICS_CATEGORIES.CONVERSION,
                label: ANALYTICS_LABELS.FOOTER_LINK,
              })}
              style={{
                background: "transparent", color: "#C9A84C",
                border: "1.5px solid rgba(201,168,76,0.4)", borderRadius: 8,
                padding: "16px 36px", fontSize: 14, fontWeight: 700,
                cursor: "pointer", fontFamily: "sans-serif",
                textDecoration: "none", display: "inline-block",
              }}
            >
              📞 +91 83293 05232
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessStrategy;
