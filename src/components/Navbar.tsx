import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { NAV_LINKS } from "../data";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const activeSection = location.pathname === "/" ? "home" : location.pathname.slice(1);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? "rgba(6,10,18,0.97)" : "rgba(6,10,18,0.6)",
      backdropFilter: "blur(16px)",
      borderBottom: scrolled ? "1px solid rgba(201,168,76,0.15)" : "1px solid transparent",
      transition: "all 0.35s ease",
    }}>
      <div style={{
        maxWidth: 1240, margin: "0 auto", padding: "0 28px",
        display: "flex", alignItems: "center", height: 70, gap: 32,
      }}>
        {/* Logo */}
        <Link
          to="/"
          style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer", flexShrink: 0, textDecoration: "none" }}
        >
          <div style={{
            width: 38, height: 38, background: "linear-gradient(135deg, #C9A84C, #e8c96a)",
            borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center",
            fontWeight: 900, fontSize: 18, color: "#060a12", fontFamily: "'Georgia', serif",
            boxShadow: "0 0 20px rgba(201,168,76,0.4)",
          }}>A</div>
          <div>
            <div style={{ fontSize: 16, fontWeight: 900, color: "#fff", letterSpacing: 3, lineHeight: 1, fontFamily: "'Georgia', serif" }}>
              AZENTIQ <span style={{ color: "#C9A84C" }}>LABS</span>
            </div>
            <div style={{ fontSize: 8, color: "#C9A84C99", letterSpacing: 4, fontFamily: "sans-serif", fontWeight: 600 }}>
              INNOVATE · BUILD · ELEVATE
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div style={{ display: "flex", gap: 2, marginLeft: "auto", alignItems: "center" }}>
          {NAV_LINKS.map(({ label, id }) => (
            <Link
              key={id}
              to={id === "home" ? "/" : `/${id}`}
              style={{
                textDecoration: "none",
                background: "none", border: "none", cursor: "pointer",
                fontSize: 12, fontWeight: 700, letterSpacing: 1.5,
                color: activeSection === id ? "#C9A84C" : "#aaa",
                padding: "8px 16px", fontFamily: "sans-serif", textTransform: "uppercase",
                position: "relative", transition: "color 0.2s",
              }}
            >
              {label}
              {activeSection === id && (
                <span style={{
                  position: "absolute", bottom: 2, left: "50%", transform: "translateX(-50%)",
                  width: 20, height: 2, background: "#C9A84C", borderRadius: 1,
                }} />
              )}
            </Link>
          ))}
        </div>

        <Link
          to="/contact"
          style={{
            textDecoration: "none",
            background: "linear-gradient(135deg, #C9A84C, #b8942e)",
            color: "#060a12", border: "none", borderRadius: 6,
            padding: "10px 22px", fontSize: 12, fontWeight: 800,
            cursor: "pointer", fontFamily: "sans-serif", letterSpacing: 1,
            textTransform: "uppercase", flexShrink: 0,
            boxShadow: "0 4px 20px rgba(201,168,76,0.35)",
          }}
        >
          Get Started
        </Link>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: "none", background: "none", border: "none", cursor: "pointer",
            flexDirection: "column", gap: 5, padding: 8,
          }}
          className="hamburger"
        >
          {[0, 1, 2].map((i) => (
            <span key={i} style={{
              display: "block", width: 22, height: 2,
              background: menuOpen && i === 1 ? "transparent" : "#C9A84C",
              borderRadius: 2, transition: "all 0.3s",
              transform: menuOpen && i === 0 ? "rotate(45deg) translate(5px,5px)"
                : menuOpen && i === 2 ? "rotate(-45deg) translate(5px,-5px)" : "none",
            }} />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          background: "#0a1220", padding: "16px 28px 28px",
          borderTop: "1px solid rgba(201,168,76,0.15)",
        }}>
          {NAV_LINKS.map(({ label, id }) => (
            <Link
              key={id}
              to={id === "home" ? "/" : `/${id}`}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block", width: "100%", textAlign: "left",
                textDecoration: "none", background: "none", border: "none", padding: "14px 0",
                fontSize: 14, fontWeight: 700, color: "#ccc",
                cursor: "pointer", borderBottom: "1px solid rgba(255,255,255,0.06)",
                fontFamily: "sans-serif", letterSpacing: 1,
              }}
            >
              {label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            style={{
              display: "block", marginTop: 16, width: "100%", textDecoration: "none",
              background: "linear-gradient(135deg,#C9A84C,#b8942e)",
              color: "#060a12", border: "none", borderRadius: 6,
              padding: "14px", fontSize: 13, fontWeight: 800, cursor: "pointer",
              fontFamily: "sans-serif", letterSpacing: 1, textAlign: "center",
            }}
          >
            Get Started
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hamburger { display: flex !important; }
          .desktop-nav { display: none !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
