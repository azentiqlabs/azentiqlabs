import React, { useState, useRef, useEffect } from "react";
import { CONTACT_INFO, FORM_LABELS, FORM_PLACEHOLDERS, ERROR_MESSAGES, SUCCESS_MESSAGES } from "../constants";
import { SERVICES } from "../data"; // Keep services from data as it's dynamic content
import type { FormData, FormStatus } from "../types";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "", email: "", phone: "", service: "", message: "",
  });
  const [formStatus, setFormStatus] = useState<FormStatus>(null);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const update = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setFormData((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (): Promise<void> => {
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormStatus("error");
      setTimeout(() => setFormStatus(null), 4000);
      return;
    }

    setFormStatus("sending");

    const subject = encodeURIComponent(
      `New Enquiry from ${formData.name} — Azentiq Labs Website`
    );
    const body = encodeURIComponent(
      `Hello Azentiq Labs Team,\n\nYou have received a new enquiry from your website.\n\n` +
      `━━━━━━━━━━━━━━━━━━━━━\n` +
      `Name    : ${formData.name}\n` +
      `Email   : ${formData.email}\n` +
      `Phone   : ${formData.phone || "Not provided"}\n` +
      `Service : ${formData.service || "Not specified"}\n` +
      `━━━━━━━━━━━━━━━━━━━━━\n\n` +
      `Message:\n${formData.message}\n\n` +
      `— Sent via Azentiq Labs Website`
    );

    window.location.href = `mailto:azentiqlabs@gmail.com?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setFormStatus("success");
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
      setTimeout(() => setFormStatus(null), 5000);
    }, 1000);
  };

  const inputStyle = (field: string): React.CSSProperties => ({
    width: "100%", padding: "14px 16px",
    background: "rgba(255,255,255,0.04)",
    border: `1.5px solid ${focusedField === field ? "#C9A84C" : "rgba(255,255,255,0.1)"}`,
    borderRadius: 8, fontSize: 14, color: "#fff",
    fontFamily: "sans-serif", outline: "none", boxSizing: "border-box",
    transition: "border-color 0.2s",
  });

  return (
    <section id="contact" style={{
      padding: "120px 28px",
      background: "linear-gradient(180deg, #0a1220 0%, #060a12 100%)",
    }}>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 900px) {
          .contact-layout { grid-template-columns: 1fr !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
        ::placeholder { color: #4a5a6e !important; }
        select option { background: #0d1b2a; color: #fff; }
      `}</style>

      <div
        ref={sectionRef}
        style={{
          maxWidth: 1240, margin: "0 auto",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: 72 }}>
          <div style={{
            display: "inline-block", border: "1px solid rgba(201,168,76,0.3)",
            borderRadius: 20, padding: "6px 18px", marginBottom: 20,
            fontSize: 11, color: "#C9A84C", fontWeight: 700, letterSpacing: 3,
            fontFamily: "sans-serif",
          }}>
            GET IN TOUCH
          </div>
          <h2 style={{
            fontSize: "clamp(28px, 4vw, 50px)", fontWeight: 900,
            fontFamily: "'Georgia', serif", color: "#fff", marginBottom: 16,
          }}>
            Let's <span style={{ color: "#C9A84C" }}>Build Together</span>
          </h2>
          <p style={{
            fontSize: 16, color: "#6a7d94", fontFamily: "sans-serif",
            lineHeight: 1.7, maxWidth: 520,
          }}>
            Have a project in mind? Let's talk. Your first consultation is completely free.
          </p>
        </div>

        <div className="contact-layout" style={{
          display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 48, alignItems: "start",
        }}>
          {/* Info panel */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {CONTACT_INFO.map(({ icon, label, value, href }) => (
              <div key={label} style={{
                display: "flex", alignItems: "center", gap: 18,
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 12, padding: "20px 22px",
              }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 10,
                  background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.2)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 20, flexShrink: 0,
                }}>
                  {icon}
                </div>
                <div>
                  <div style={{
                    fontSize: 10, color: "#C9A84C", fontFamily: "sans-serif",
                    fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 3,
                  }}>
                    {label}
                  </div>
                  {href ? (
                    <a href={href} target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      style={{ fontSize: 14, color: "#d0dae8", fontFamily: "sans-serif", fontWeight: 600, textDecoration: "none" }}>
                      {value}
                    </a>
                  ) : (
                    <div style={{ fontSize: 14, color: "#d0dae8", fontFamily: "sans-serif", fontWeight: 600 }}>{value}</div>
                  )}
                </div>
              </div>
            ))}

            {/* Special offer */}
            <div style={{
              background: "linear-gradient(135deg, rgba(201,168,76,0.12), rgba(201,168,76,0.04))",
              border: "1px solid rgba(201,168,76,0.25)",
              borderRadius: 12, padding: "22px 24px",
              marginTop: 4,
            }}>
              <div style={{ fontSize: 24, marginBottom: 10 }}>🎁</div>
              <div style={{
                fontSize: 15, fontWeight: 800, color: "#C9A84C",
                fontFamily: "'Georgia', serif", marginBottom: 6,
              }}>
                Special Offer for New Clients!
              </div>
              <p style={{
                fontSize: 13, color: "#7a8fa8", fontFamily: "sans-serif",
                lineHeight: 1.6, margin: 0,
              }}>
                Contact us today to claim your exclusive welcome package and get your project kickstarted.
              </p>
            </div>
          </div>

          {/* Form */}
          <div style={{
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: 20, padding: "44px 40px",
          }}>
            <h3 style={{
              fontSize: 22, fontWeight: 800, color: "#fff",
              fontFamily: "'Georgia', serif", marginBottom: 32,
            }}>
              Send a Message
            </h3>

            {/* Row 1 */}
            <div className="form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
              <div>
                <label style={{ fontSize: 11, color: "#C9A84C", fontFamily: "sans-serif", fontWeight: 700, letterSpacing: 1, display: "block", marginBottom: 6 }}>
                  FULL NAME *
                </label>
                <input
                  style={inputStyle("name")}
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={update("name")}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                />
              </div>
              <div>
                <label style={{ fontSize: 11, color: "#C9A84C", fontFamily: "sans-serif", fontWeight: 700, letterSpacing: 1, display: "block", marginBottom: 6 }}>
                  EMAIL ADDRESS *
                </label>
                <input
                  type="email"
                  style={inputStyle("email")}
                  placeholder="john@company.com"
                  value={formData.email}
                  onChange={update("email")}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
              <div>
                <label style={{ fontSize: 11, color: "#C9A84C", fontFamily: "sans-serif", fontWeight: 700, letterSpacing: 1, display: "block", marginBottom: 6 }}>
                  PHONE NUMBER
                </label>
                <input
                  style={inputStyle("phone")}
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={update("phone")}
                  onFocus={() => setFocusedField("phone")}
                  onBlur={() => setFocusedField(null)}
                />
              </div>
              <div>
                <label style={{ fontSize: 11, color: "#C9A84C", fontFamily: "sans-serif", fontWeight: 700, letterSpacing: 1, display: "block", marginBottom: 6 }}>
                  SERVICE NEEDED
                </label>
                <select
                  style={{ ...inputStyle("service"), color: formData.service ? "#fff" : "#4a5a6e", cursor: "pointer" }}
                  value={formData.service}
                  onChange={update("service")}
                  onFocus={() => setFocusedField("service")}
                  onBlur={() => setFocusedField(null)}
                >
                  <option value="">Select a service...</option>
                  {SERVICES.map((s) => <option key={s.title} value={s.title}>{s.title}</option>)}
                </select>
              </div>
            </div>

            {/* Message */}
            <div style={{ marginBottom: 28 }}>
              <label style={{ fontSize: 11, color: "#C9A84C", fontFamily: "sans-serif", fontWeight: 700, letterSpacing: 1, display: "block", marginBottom: 6 }}>
                PROJECT DETAILS *
              </label>
              <textarea
                style={{
                  ...inputStyle("message"),
                  minHeight: 130, resize: "vertical", display: "block",
                }}
                placeholder="Tell us about your project, goals, and timeline..."
                value={formData.message}
                onChange={update("message")}
                onFocus={() => setFocusedField("message")}
                onBlur={() => setFocusedField(null)}
              />
            </div>

            {/* Submit */}
            <button
              onClick={handleSubmit}
              disabled={formStatus === "sending"}
              style={{
                width: "100%",
                background: formStatus === "sending"
                  ? "rgba(201,168,76,0.5)"
                  : "linear-gradient(135deg, #C9A84C, #b8942e)",
                color: "#060a12", border: "none", borderRadius: 8,
                padding: "17px", fontSize: 14, fontWeight: 800,
                cursor: formStatus === "sending" ? "not-allowed" : "pointer",
                fontFamily: "sans-serif", letterSpacing: 0.5,
                boxShadow: formStatus === "sending" ? "none" : "0 6px 30px rgba(201,168,76,0.35)",
                transition: "all 0.2s",
              }}
            >
              {formStatus === "sending" ? "⏳ Opening your email client..." : "Send Message →"}
            </button>

            {formStatus === "success" && (
              <div style={{
                marginTop: 16, background: "rgba(34,197,94,0.08)",
                border: "1px solid rgba(34,197,94,0.25)", borderRadius: 8,
                padding: "14px 18px", fontSize: 13, color: "#4ade80",
                fontFamily: "sans-serif", lineHeight: 1.5,
              }}>
                ✅ <strong>Your email client has opened!</strong> The message is pre-filled — just hit Send to reach us.
              </div>
            )}

            {formStatus === "error" && (
              <div style={{
                marginTop: 16, background: "rgba(239,68,68,0.08)",
                border: "1px solid rgba(239,68,68,0.25)", borderRadius: 8,
                padding: "14px 18px", fontSize: 13, color: "#f87171",
                fontFamily: "sans-serif",
              }}>
                ⚠️ Please fill in your <strong>Name</strong>, <strong>Email</strong>, and <strong>Message</strong> before sending.
              </div>
            )}
          </div>
        </div>

        {/* FAQ Section */}
        <div style={{ marginTop: 80 }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h3 style={{
              fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900,
              fontFamily: "'Georgia', serif", color: "#fff", marginBottom: 16,
            }}>
              Frequently Asked <span style={{ color: "#C9A84C" }}>Questions</span>
            </h3>
            <p style={{
              fontSize: 16, color: "#6a7d94", fontFamily: "sans-serif",
              lineHeight: 1.7, maxWidth: 520, margin: "0 auto",
            }}>
              Everything you need to know about working with Azentiq Labs.
            </p>
          </div>

          <div style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
            gap: 24,
          }}>
            {[
              {
                question: "How long does a typical project take?",
                answer: "Most projects range from 4-12 weeks depending on complexity. We provide detailed timelines during your free consultation."
              },
              {
                question: "Do you work with international clients?",
                answer: "Absolutely! We have successfully delivered projects for clients in the US, UK, Australia, and across Europe."
              },
              {
                question: "What's your payment structure?",
                answer: "We offer flexible payment terms: 30% upfront, 40% at midpoint, and 30% upon completion. Monthly retainers available for ongoing partnerships."
              },
              {
                question: "Do you provide ongoing support?",
                answer: "Yes! All projects include 3 months of free support. We also offer extended maintenance packages for continued success."
              },
              {
                question: "Can you work with our existing systems?",
                answer: "Definitely. We specialize in integrating with existing platforms, APIs, and databases to enhance your current infrastructure."
              },
              {
                question: "What's your refund policy?",
                answer: "We stand behind our work. If you're not satisfied with the final deliverable, we'll revise it until you are — no questions asked."
              },
            ].map((faq, i) => (
              <div key={i} style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 16, padding: 24,
              }}>
                <h4 style={{
                  fontSize: 16, fontWeight: 800, color: "#fff",
                  fontFamily: "'Georgia', serif", marginBottom: 12,
                }}>{faq.question}</h4>
                <p style={{
                  fontSize: 14, color: "#7a8fa8", lineHeight: 1.6,
                  fontFamily: "sans-serif",
                }}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div style={{
          marginTop: 80, textAlign: "center",
          background: "linear-gradient(135deg, #C9A84C, #b8942e)",
          borderRadius: 20, padding: "60px 40px",
        }}>
          <h3 style={{
            fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900,
            fontFamily: "'Georgia', serif", color: "#060a12", marginBottom: 16,
          }}>
            Ready to Start Your Project?
          </h3>
          <p style={{
            fontSize: 18, color: "#060a12", fontFamily: "sans-serif",
            lineHeight: 1.7, maxWidth: 600, margin: "0 auto 32px",
            opacity: 0.9,
          }}>
            Join hundreds of satisfied clients who have transformed their businesses with Azentiq Labs. Your success story starts here.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:+918329305232" style={{
              background: "#060a12", color: "#C9A84C", border: "none",
              borderRadius: 8, padding: "14px 28px", fontSize: 16, fontWeight: 800,
              cursor: "pointer", fontFamily: "sans-serif", textDecoration: "none",
              display: "inline-block", transition: "all 0.2s",
            }}>📞 Call Now: +91 83293 05232</a>
            <a href="mailto:azentiqlabs@gmail.com" style={{
              background: "transparent", color: "#060a12", border: "2px solid #060a12",
              borderRadius: 8, padding: "12px 26px", fontSize: 16, fontWeight: 800,
              cursor: "pointer", fontFamily: "sans-serif", textDecoration: "none",
              display: "inline-block", transition: "all 0.2s",
            }}>✉️ Email Us</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
