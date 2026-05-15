import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { NAV_LINKS } from "../data";
import { ANALYTICS_EVENTS, ANALYTICS_CATEGORIES, ANALYTICS_LABELS } from "../constants/analytics";
import { trackEvent } from "../utils/analytics";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

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
        }} className="navbar-container" >
        {/* Logo */}
        <Link
          to="/"
          onClick={() => trackEvent({
            action: ANALYTICS_EVENTS.LINK_CLICK,
            category: ANALYTICS_CATEGORIES.INTERACTION,
            label: ANALYTICS_LABELS.HEADER_NAV,
          })}
          style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer", flexShrink: 0, textDecoration: "none" }}
        >
          <img
            src="/favicon.png"
            alt="Azentiq Labs logo"
            style={{
              width: 38, height: 38, objectFit: "contain",
              borderRadius: 8, boxShadow: "0 0 20px rgba(201,168,76,0.4)",
            }}
          />
          <div
            style={{
              fontSize: 16, fontWeight: 900, color: "#fff",
              letterSpacing: 3, lineHeight: 1, fontFamily: "'Georgia', serif",
            }}
            className="logo-text"
          >
            AZENTIQ
          </div>
        </Link>

        {/* Desktop Nav — hidden on mobile via CSS class */}
        <div className="desktop-nav" style={{ display: "flex", gap: 2, marginLeft: "auto", alignItems: "center" }}>
          {NAV_LINKS.map(({ label, id }) => (
            <Link
              key={id}
              to={id === "home" ? "/" : `/${id}`}
              onClick={() => trackEvent({
                action: ANALYTICS_EVENTS.LINK_CLICK,
                category: ANALYTICS_CATEGORIES.INTERACTION,
                label: ANALYTICS_LABELS.HEADER_NAV,
              })}
              style={{
                textDecoration: "none",
                background: "none", border: "none", cursor: "pointer",
                fontSize: 12, fontWeight: 700, letterSpacing: 1.5,
                color: isActive(id === "home" ? "/" : `/${id}`) ? "#C9A84C" : "#aaa",
                padding: "8px 16px", fontFamily: "sans-serif", textTransform: "uppercase", 
                position: "relative", transition: "color 0.2s",
              }}
            >
              {label}
              {isActive(id === "home" ? "/" : `/${id}`) && (
                <span style={{
                  position: "absolute", bottom: 2, left: "50%",
                  transform: "translateX(-50%)", width: 20, height: 2,
                  background: "#C9A84C", borderRadius: 1,
                }} />
              )}
            </Link>
          ))}
        </div>

        {/* Get Started — hidden on mobile via CSS class */}
        <Link
          to="/contact"
          className="get-started-btn"
          onClick={() => trackEvent({
            action: ANALYTICS_EVENTS.BUTTON_CLICK,
            category: ANALYTICS_CATEGORIES.CONVERSION,
            label: ANALYTICS_LABELS.PRIMARY_CTA,
          })}
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

        {/* Hamburger — shown on mobile via CSS class */}
        <button
          onClick={() => {
            setMenuOpen(!menuOpen);
            trackEvent({
              action: ANALYTICS_EVENTS.BUTTON_CLICK,
              category: ANALYTICS_CATEGORIES.INTERACTION,
              label: ANALYTICS_LABELS.HEADER_NAV,
            });
          }}
          className="hamburger"
          style={{
            background: "none", border: "none", cursor: "pointer",
            flexDirection: "column", gap: 5, padding: 8,
            borderRadius: 4, transition: "background-color 0.2s",
            marginLeft: "auto",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(201,168,76,0.1)")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span key={i} style={{
              display: "block", width: 22, height: 2,
              background: menuOpen && i === 1 ? "transparent" : "#C9A84C",
              borderRadius: 2, transition: "all 0.3s",
              transform:
                menuOpen && i === 0 ? "rotate(45deg) translate(5px,5px)"
                : menuOpen && i === 2 ? "rotate(-45deg) translate(5px,-5px)"
                : "none",
            }} />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="mobile-menu"
          style={{
            background: "#0a1220", padding: "16px 28px 28px",
            borderTop: "1px solid rgba(201,168,76,0.15)",
          }}
        >
          <div style={{
            display: "flex", justifyContent: "space-between", alignItems: "center",
            marginBottom: 16, paddingBottom: 12,
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}>
            <span style={{
              fontSize: 14, color: "#C9A84C", fontWeight: 700,
              fontFamily: "sans-serif", letterSpacing: 1,
            }}>
              MENU
            </span>
            <button
              onClick={() => setMenuOpen(false)}
              style={{
                background: "none", border: "none", cursor: "pointer",
                color: "#888", fontSize: 18, padding: 4,
                borderRadius: 4, transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A84C")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#888")}
            >
              ✕
            </button>
          </div>
          {NAV_LINKS.map(({ label, id }) => (
            <Link
              key={id}
              to={id === "home" ? "/" : `/${id}`}
              onClick={() => {
                setMenuOpen(false);
                trackEvent({
                  action: ANALYTICS_EVENTS.LINK_CLICK,
                  category: ANALYTICS_CATEGORIES.INTERACTION,
                  label: ANALYTICS_LABELS.HEADER_NAV,
                });
              }}
              style={{
                display: "block", width: "100%", textAlign: "left",
                background: "none", border: "none", padding: "14px 0",
                fontSize: 14, fontWeight: 700, color: "#ccc",
                cursor: "pointer", borderBottom: "1px solid rgba(255,255,255,0.06)",
                fontFamily: "sans-serif", letterSpacing: 1, textDecoration: "none",
              }}
              className="mobile-menu-link"
            >
              {label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => {
              setMenuOpen(false);
              trackEvent({
                action: ANALYTICS_EVENTS.BUTTON_CLICK,
                category: ANALYTICS_CATEGORIES.CONVERSION,
                label: ANALYTICS_LABELS.PRIMARY_CTA,
              });
            }}
            style={{
              marginTop: 16, width: "100%", display: "block",
              background: "linear-gradient(135deg,#C9A84C,#b8942e)",
              color: "#060a12", border: "none", borderRadius: 6,
              padding: "14px", fontSize: 13, fontWeight: 800, cursor: "pointer",
              fontFamily: "sans-serif", letterSpacing: 1,
              textDecoration: "none", textAlign: "center",
            }}
            className="mobile-menu-cta"
          >
            Get Started
          </Link>
        </div>
      )}

      <style>{`
        /* ── Desktop: show nav links + CTA, hide hamburger ── */
        .hamburger        { display: none !important; }
        .desktop-nav      { display: flex !important; }
        .get-started-btn  { display: inline-flex !important; }

        /* ── Tablet / Mobile ≤ 768px ── */
        @media (max-width: 768px) {
          .hamburger        { display: flex !important; }
          .desktop-nav      { display: none !important; }
          .get-started-btn  { display: none !important; }
          .navbar-container { padding: 0 20px !important; height: 64px !important; gap: 16px !important; }
          .logo-text        { font-size: 15px !important; letter-spacing: 2px !important; }
        }

        /* ── Small mobile ≤ 480px ── */
        @media (max-width: 480px) {
          .navbar-container  { padding: 0 16px !important; height: 60px !important; }
          .logo-text         { font-size: 14px !important; }
          .mobile-menu       { padding: 20px 16px 24px !important; }
          .mobile-menu-link  { padding: 16px 0 !important; font-size: 15px !important; }
          .mobile-menu-cta   { margin-top: 20px !important; padding: 16px !important; font-size: 14px !important; }
        }

        /* ── Extra small ≤ 360px ── */
        @media (max-width: 360px) {
          .navbar-container { padding: 0 12px !important; }
          .logo-text        { font-size: 13px !important; }
        }

        /* ── Hover state for mobile menu links ── */
        .mobile-menu-link:hover { color: #C9A84C !important; }
      `}</style>
    </nav>
  );
};

export default Navbar;
