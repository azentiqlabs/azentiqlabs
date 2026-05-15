import React from "react";

const scrollTo = (id: string): void => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  const links = [
    { label: "Home", id: "home" },
    { label: "Services", id: "services" },
    { label: "Why Us", id: "why-us" },
    { label: "Testimonials", id: "testimonials" },
    { label: "Results", id: "before-after" },
    { label: "Strategy", id: "strategy" },
    { label: "Contact", id: "contact" },
  ];

  const services = [
    "Website Development", "Mobile App Development", "Custom Software",
    "E-Commerce Solutions", "Digital Marketing", "UI/UX Design",
  ];

  return (
    <footer style={{ background: "#030608", borderTop: "1px solid rgba(201,168,76,0.12)", padding: "72px 28px 32px" }}>
      <style>{`@media (max-width: 768px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } }`}</style>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, marginBottom: 60 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20, cursor: "pointer" }} onClick={() => scrollTo("home")}>
              <div style={{ width: 38, height: 38, background: "linear-gradient(135deg, #C9A84C, #e8c96a)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 18, color: "#030608", fontFamily: "Georgia, serif" }}>A</div>
              <div>
                <div style={{ fontSize: 16, fontWeight: 900, color: "#fff", letterSpacing: 3, fontFamily: "Georgia, serif" }}>AZENTIQ <span style={{ color: "#C9A84C" }}>LABS</span></div>
                <div style={{ fontSize: 8, color: "#C9A84C66", letterSpacing: 3, fontFamily: "sans-serif", fontWeight: 600 }}>INNOVATE · BUILD · ELEVATE</div>
              </div>
            </div>
            <p style={{ fontSize: 13.5, color: "#4a5a6e", fontFamily: "sans-serif", lineHeight: 1.75, maxWidth: 300 }}>
              We help businesses thrive in the digital world with innovative, reliable, and scalable IT solutions — from Pune to across India.
            </p>
            <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
              {[
                { ic: "✉️", href: "mailto:azentiqlabs@gmail.com" },
                { ic: "📞", href: "tel:+918329305232" },
              ].map(({ ic, href }, i) => (
                <a key={i} href={href} style={{ width: 36, height: 36, borderRadius: 8, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, textDecoration: "none" }}>{ic}</a>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: 11, color: "#C9A84C", fontFamily: "sans-serif", fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 20 }}>Quick Links</h4>
            {links.map(({ label, id }) => (
              <button key={id} onClick={() => scrollTo(id)} style={{ display: "block", background: "none", border: "none", cursor: "pointer", fontSize: 13.5, color: "#4a5a6e", fontFamily: "sans-serif", padding: "6px 0", textAlign: "left", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A84C")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#4a5a6e")}>
                → {label}
              </button>
            ))}
          </div>

          <div>
            <h4 style={{ fontSize: 11, color: "#C9A84C", fontFamily: "sans-serif", fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 20 }}>Services</h4>
            {services.map((s) => (<div key={s} style={{ fontSize: 13.5, color: "#4a5a6e", fontFamily: "sans-serif", padding: "6px 0" }}>{s}</div>))}
          </div>

          <div>
            <h4 style={{ fontSize: 11, color: "#C9A84C", fontFamily: "sans-serif", fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 20 }}>Contact</h4>
            {[
              { icon: "✉️", text: "azentiqlabs@gmail.com", href: "mailto:azentiqlabs@gmail.com" },
              { icon: "📞", text: "+91 83293 05232", href: "tel:+918329305232" },
              { icon: "📍", text: "Pune, Maharashtra, India", href: null },
            ].map(({ icon, text, href }) => (
              <div key={text} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 12 }}>
                <span style={{ fontSize: 14 }}>{icon}</span>
                {href ? (
                  <a href={href} style={{ fontSize: 13, color: "#4a5a6e", fontFamily: "sans-serif", textDecoration: "none", lineHeight: 1.5 }}>{text}</a>
                ) : (
                  <span style={{ fontSize: 13, color: "#4a5a6e", fontFamily: "sans-serif", lineHeight: 1.5 }}>{text}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 28, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <p style={{ fontSize: 12, color: "#2d3a48", fontFamily: "sans-serif", margin: 0 }}>© {year} <span style={{ color: "#C9A84C" }}>Azentiq Labs</span>. All rights reserved.</p>
          <p style={{ fontSize: 12, color: "#2d3a48", fontFamily: "sans-serif", margin: 0 }}>Pune · Akola · Amravati · India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
