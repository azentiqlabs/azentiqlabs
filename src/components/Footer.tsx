import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  const links = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "Why Us", path: "/why-us" },
    { label: "Testimonials", path: "/testimonials" },
    { label: "Results", path: "/before-after" },
    { label: "Strategy", path: "/strategy" },
    { label: "Contact", path: "/contact" },
  ];

  const services = [
    "Website Development",
    "Mobile App Development",
    "Custom Software",
    "E-Commerce Solutions",
    "Digital Marketing",
    "UI/UX Design",
  ];

  return (
    <footer style={{
      background: "#030608",
      borderTop: "1px solid rgba(201,168,76,0.12)",
      padding: "72px 28px 32px",
    }} className="footer-container">
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <style>{`
          @media (max-width: 900px) {
            .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 32px !important; }
          }
          @media (max-width: 600px) {
            .footer-grid { grid-template-columns: 1fr !important; gap: 24px !important; text-align: center !important; }
            .footer-container { padding: 48px 20px 24px !important; }
            .social-icons { justify-content: center !important; }
            .footer-brand-desc { max-width: 100% !important; margin-bottom: 20px !important; }
            .footer-links h4 { margin-bottom: 16px !important; }
            .footer-link { padding: 8px 0 !important; font-size: 14px !important; }
            .footer-contact-item { justify-content: center !important; text-align: center !important; gap: 12px !important; }
          }
          @media (max-width: 480px) {
            .footer-container { padding: 40px 16px 20px !important; }
            .footer-bottom { flex-direction: column !important; gap: 12px !important; text-align: center !important; }
            .footer-grid { gap: 20px !important; }
            .social-icon { width: 32px !important; height: 32px !important; font-size: 14px !important; }
          }
          @media (max-width: 360px) {
            .footer-container { padding: 32px 12px 16px !important; }
            .footer-brand { margin-bottom: 16px !important; }
            .footer-brand-desc { font-size: 12.5px !important; line-height: 1.6 !important; }
          }
        `}</style>
        <div style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr",
          gap: 48, marginBottom: 60,
        }} className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <Link to="/" style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20, cursor: "pointer", textDecoration: "none" }}>
              <img
                src="/footer-logo.png"
                alt="Azentiq Labs logo"
                style={{ width: 38, height: 38, objectFit: "contain" }}
              />
              <div>
                <div style={{ fontSize: 16, fontWeight: 900, color: "#fff", letterSpacing: 3, fontFamily: "'Georgia', serif" }}>
                  AZENTIQ
                </div>
              </div>
            </Link>
            <p style={{
              fontSize: 13.5, color: "#4a5a6e", fontFamily: "sans-serif",
              lineHeight: 1.75, maxWidth: 300,
            }} className="footer-brand-desc">
              We help businesses thrive in the digital world with innovative, reliable, and scalable IT solutions — from Pune to across India.
            </p>
            <div style={{ display: "flex", gap: 12, marginTop: 24 }} className="social-icons">
              {["📧", "💼", "🐙", "🐦"].map((ic, i) => (
                <div key={i} style={{
                  width: 36, height: 36, borderRadius: 8,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 16, cursor: "pointer",
                }} className="social-icon">
                  {ic}
                </div>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="footer-links">
            <h4 style={{
              fontSize: 11, color: "#C9A84C", fontFamily: "sans-serif",
              fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 20,
            }}>
              Quick Links
            </h4>
            {links.map(({ label, path }) => (
              <Link
                key={path}
                to={path}
                style={{
                  display: "block", background: "none", border: "none", cursor: "pointer",
                  fontSize: 13.5, color: "#4a5a6e", fontFamily: "sans-serif",
                  padding: "6px 0", textAlign: "left", transition: "color 0.2s", textDecoration: "none",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A84C")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#4a5a6e")}
                className="footer-link"
              >
                → {label}
              </Link>
            ))}
          </div>

          {/* Services */}
          <div className="footer-links">
            <h4 style={{
              fontSize: 11, color: "#C9A84C", fontFamily: "sans-serif",
              fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 20,
            }}>
              Services
            </h4>
            {services.map((s) => (
              <div
                key={s}
                style={{
                  fontSize: 13.5, color: "#4a5a6e", fontFamily: "sans-serif",
                  padding: "6px 0", cursor: "default",
                }}
                className="footer-link"
              >
                {s}
              </div>
            ))}
          </div>

          {/* Contact */}
          <div className="footer-links">
            <h4 style={{
              fontSize: 11, color: "#C9A84C", fontFamily: "sans-serif",
              fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 20,
            }}>
              Contact
            </h4>
            {[
              { icon: "✉️", text: "azentiqlabs@gmail.com", href: "mailto:azentiqlabs@gmail.com" },
              { icon: "📞", text: "+91 83293 05232", href: "tel:+918329305232" },
              { icon: "🌐", text: "www.azentiqlabs.vercel.app", href: "https://azentiqlabs.vercel.app" },
              { icon: "📍", text: "Pune, Maharashtra, India", href: null },
            ].map(({ icon, text, href }) => (
              <div key={text} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 12 }} className="footer-contact-item">
                <span style={{ fontSize: 14 }}>{icon}</span>
                {href ? (
                  <a href={href} target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    style={{ fontSize: 13, color: "#4a5a6e", fontFamily: "sans-serif", textDecoration: "none", lineHeight: 1.5 }}>
                    {text}
                  </a>
                ) : (
                  <span style={{ fontSize: 13, color: "#4a5a6e", fontFamily: "sans-serif", lineHeight: 1.5 }}>{text}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: "1px solid rgba(255,255,255,0.05)",
          paddingTop: 28,
          display: "flex", alignItems: "center", justifyContent: "space-between",
          flexWrap: "wrap", gap: 12,
        }} className="footer-bottom">
          <p style={{ fontSize: 12, color: "#2d3a48", fontFamily: "sans-serif", margin: 0 }}>
            © {year} <span style={{ color: "#C9A84C" }}>Azentiq Labs</span>. All rights reserved.
          </p>
          <p style={{ fontSize: 12, color: "#2d3a48", fontFamily: "sans-serif", margin: 0 }}>
            Pune · Akola · Amravati · India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
