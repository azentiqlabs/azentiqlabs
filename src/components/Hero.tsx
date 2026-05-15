import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { STATS } from "../data";
import { ServiceCard, WhyCard, ProjectCard, TestimonialCard, CTASection } from "./shared";
import type { Stat } from "../types";

const StatItem: React.FC<{ stat: Stat; delay: number }> = ({ stat, delay }) => (
  <div style={{
    textAlign: "center",
    animation: `fadeUp 0.6s ease ${delay}s both`,
  }}>
    <div style={{
      fontSize: 32, fontWeight: 900, color: "#fff",
      fontFamily: "'Georgia', serif",
    }}>{stat.num}</div>
    <div style={{
      fontSize: 10, color: "#C9A84C", letterSpacing: 2,
      fontFamily: "sans-serif", fontWeight: 700, textTransform: "uppercase",
    }}>{stat.label}</div>
  </div>
);

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles: Array<{ x: number; y: number; vx: number; vy: number; r: number; alpha: number }> = [];
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.5 + 0.1,
      });
    }

    let animId: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201,168,76,${p.alpha})`;
        ctx.fill();
      });

      // Draw connecting lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(201,168,76,${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <>
    <section id="home" style={{
      minHeight: "100vh", display: "flex", alignItems: "center",
      background: "linear-gradient(135deg, #060a12 0%, #0d1b2a 50%, #060a12 100%)",
      position: "relative", overflow: "hidden", paddingTop: 70,
    }}>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 20px rgba(201,168,76,0.3); }
          50% { box-shadow: 0 0 50px rgba(201,168,76,0.6); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @media (max-width: 900px) {
          .hero-layout { flex-direction: column !important; }
          .hero-visual { display: none !important; }
          .hero-content { padding: 48px 24px !important; }
          .hero-stats { justify-content: center !important; }
        }
      `}</style>

      {/* Particle canvas */}
      <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 0 }} />

      {/* Grid overlay */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        backgroundImage: `linear-gradient(rgba(201,168,76,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(201,168,76,0.03) 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
      }} />

      {/* Glow orbs */}
      <div style={{ position: "absolute", top: "20%", right: "10%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)", zIndex: 0 }} />
      <div style={{ position: "absolute", bottom: "10%", left: "5%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 70%)", zIndex: 0 }} />

      <div className="hero-layout" style={{
        maxWidth: 1240, margin: "0 auto", padding: "0 28px",
        display: "flex", alignItems: "center", gap: 60, width: "100%", position: "relative", zIndex: 1,
      }}>
        {/* Content */}
        <div className="hero-content" style={{ flex: 1, padding: "80px 0" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.3)",
            borderRadius: 20, padding: "6px 18px", marginBottom: 28,
            animation: "fadeUp 0.5s ease 0.1s both",
          }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#C9A84C", display: "inline-block" }} />
            <span style={{ fontSize: 11, color: "#C9A84C", fontWeight: 700, letterSpacing: 2, fontFamily: "sans-serif" }}>
              SMART SOLUTIONS FOR A BETTER TOMORROW
            </span>
          </div>

          <h1 style={{
            fontSize: "clamp(36px, 5.5vw, 68px)", fontWeight: 900,
            fontFamily: "'Georgia', serif", lineHeight: 1.08,
            color: "#fff", marginBottom: 24,
            animation: "fadeUp 0.6s ease 0.2s both",
          }}>
            Technology That<br />
            <span style={{
              background: "linear-gradient(135deg, #C9A84C, #e8c96a, #C9A84C)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animation: "shimmer 3s linear infinite, fadeUp 0.6s ease 0.2s both",
              display: "inline-block",
            }}>Transforms</span>{" "}
            <span style={{ color: "#fff" }}>Ideas</span><br />
            Into Reality
          </h1>

          <p style={{
            fontSize: 17, color: "#8a9bb5", lineHeight: 1.75,
            fontFamily: "sans-serif", maxWidth: 480, marginBottom: 40,
            animation: "fadeUp 0.6s ease 0.3s both",
          }}>
            We help businesses thrive in the digital world with{" "}
            <span style={{ color: "#C9A84C", fontWeight: 600 }}>innovative</span>,{" "}
            <span style={{ color: "#C9A84C", fontWeight: 600 }}>reliable</span> and{" "}
            <span style={{ color: "#C9A84C", fontWeight: 600 }}>scalable</span> IT solutions.
          </p>

          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 60, animation: "fadeUp 0.6s ease 0.4s both" }}>
            <Link
              to="/contact"
              style={{
                background: "linear-gradient(135deg, #C9A84C, #b8942e)",
                color: "#060a12", border: "none", borderRadius: 8,
                padding: "16px 32px", fontSize: 14, fontWeight: 800,
                cursor: "pointer", fontFamily: "sans-serif", letterSpacing: 0.5,
                boxShadow: "0 6px 30px rgba(201,168,76,0.4)",
                animation: "pulse 2.5s ease infinite",
                textDecoration: "none", display: "inline-block",
              }}
            >
              Start Your Project →
            </Link>
            <Link
              to="/services"
              style={{
                background: "transparent", color: "#fff",
                border: "1.5px solid rgba(255,255,255,0.2)", borderRadius: 8,
                padding: "16px 32px", fontSize: 14, fontWeight: 700,
                cursor: "pointer", fontFamily: "sans-serif",
                textDecoration: "none", display: "inline-block",
              }}
            >
              Explore Services
            </Link>
          </div>

          {/* Stats */}
          <div className="hero-stats" style={{
            display: "flex", gap: 40, flexWrap: "wrap",
            paddingTop: 32, borderTop: "1px solid rgba(255,255,255,0.07)",
            animation: "fadeUp 0.6s ease 0.5s both",
          }}>
            {STATS.map((s, i) => <StatItem key={s.label} stat={s} delay={0.5 + i * 0.1} />)}
          </div>
        </div>

        {/* Visual */}
        <div className="hero-visual" style={{
          flex: 1, display: "flex", justifyContent: "center", alignItems: "center",
          animation: "fadeUp 0.8s ease 0.3s both",
        }}>
          <div style={{
            width: 460, background: "#0d1b2a",
            borderRadius: 20, overflow: "hidden",
            boxShadow: "0 40px 100px rgba(0,0,0,0.6), 0 0 0 1px rgba(201,168,76,0.15)",
            animation: "float 4s ease-in-out infinite",
          }}>
            {/* Browser bar */}
            <div style={{
              background: "#0a1628", padding: "14px 18px",
              display: "flex", alignItems: "center", gap: 10,
              borderBottom: "1px solid rgba(255,255,255,0.05)",
            }}>
              {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
                <span key={c} style={{ width: 11, height: 11, borderRadius: "50%", background: c, display: "inline-block" }} />
              ))}
              <div style={{
                flex: 1, background: "rgba(255,255,255,0.05)", borderRadius: 4,
                padding: "5px 12px", fontSize: 11, color: "#555", fontFamily: "sans-serif",
              }}>
                azentiq.com
              </div>
            </div>

            {/* Screen content */}
            <div style={{ padding: 28 }}>
              {/* Nav mock */}
              <div style={{ display: "flex", gap: 8, marginBottom: 24 }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#C9A84C" }} />
                {[60, 40, 50, 35].map((w, i) => (
                  <div key={i} style={{ height: 6, width: w, background: "rgba(255,255,255,0.08)", borderRadius: 3, marginTop: 1 }} />
                ))}
              </div>

              {/* Hero mock */}
              <div style={{
                background: "linear-gradient(135deg, rgba(201,168,76,0.08), rgba(201,168,76,0.02))",
                borderRadius: 12, padding: 24, marginBottom: 20,
                border: "1px solid rgba(201,168,76,0.1)",
              }}>
                <div style={{ fontSize: 20, fontWeight: 800, color: "#fff", lineHeight: 1.3, marginBottom: 12, fontFamily: "'Georgia', serif" }}>
                  We Build<br />
                  <span style={{ color: "#C9A84C" }}>Digital Solutions</span><br />
                  That Drive Growth
                </div>
                <div style={{ display: "flex", gap: 8 }}>
                  <div style={{ background: "linear-gradient(135deg, #C9A84C, #b8942e)", borderRadius: 5, padding: "7px 16px", fontSize: 10, color: "#060a12", fontWeight: 800, fontFamily: "sans-serif" }}>
                    GET STARTED →
                  </div>
                  <div style={{ border: "1px solid rgba(255,255,255,0.15)", borderRadius: 5, padding: "7px 16px", fontSize: 10, color: "#888", fontFamily: "sans-serif" }}>
                    Our Work
                  </div>
                </div>
              </div>

              {/* Service cards mock */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
                {["⌨️", "📱", "⚙️", "🛒", "📣", "🎨"].map((ic, i) => (
                  <div key={i} style={{
                    background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: 8, padding: "10px 8px", textAlign: "center",
                  }}>
                    <div style={{ fontSize: 16, marginBottom: 4 }}>{ic}</div>
                    <div style={{ height: 4, background: "rgba(255,255,255,0.08)", borderRadius: 2, marginBottom: 3 }} />
                    <div style={{ height: 3, background: "rgba(255,255,255,0.05)", borderRadius: 2, width: "70%" }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* What We Do Section */}
    <section style={{
      padding: "120px 28px",
      background: "linear-gradient(180deg, #060a12 0%, #0a1220 100%)",
    }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <div style={{
            display: "inline-block", border: "1px solid rgba(201,168,76,0.3)",
            borderRadius: 20, padding: "6px 18px", marginBottom: 20,
            fontSize: 11, color: "#C9A84C", fontWeight: 700, letterSpacing: 3, fontFamily: "sans-serif",
          }}>WHAT WE DO</div>
          <h2 style={{
            fontSize: "clamp(28px, 4vw, 50px)", fontWeight: 900,
            fontFamily: "'Georgia', serif", color: "#fff", marginBottom: 16,
          }}>
            Comprehensive <span style={{ color: "#C9A84C" }}>Digital Solutions</span>
          </h2>
          <p style={{
            fontSize: 16, color: "#6a7d94", fontFamily: "sans-serif",
            lineHeight: 1.7, maxWidth: 520, margin: "0 auto",
          }}>
            From concept to launch and beyond, we provide end-to-end technology services that drive real business results.
          </p>
        </div>

        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 32,
        }}>
          {[
            {
              icon: "🎨",
              title: "Web Development",
              desc: "Modern, responsive websites built with cutting-edge technologies. SEO-optimized and conversion-focused.",
              features: ["React/Vue.js", "Custom CMS", "E-commerce", "Progressive Web Apps"]
            },
            {
              icon: "📱",
              title: "Mobile Apps",
              desc: "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
              features: ["iOS/Android", "Flutter/React Native", "App Store Optimization", "Maintenance"]
            },
            {
              icon: "⚙️",
              title: "Custom Software",
              desc: "Tailored software solutions designed to streamline your business processes and boost productivity.",
              features: ["API Development", "Database Design", "Cloud Solutions", "Integration"]
            },
            {
              icon: "📊",
              title: "Digital Strategy",
              desc: "Data-driven strategies that help you make informed decisions and achieve sustainable growth.",
              features: ["Market Analysis", "Growth Planning", "Performance Tracking", "Competitive Intelligence"]
            },
          ].map((service, i) => (
            <ServiceCard
              key={i}
              icon={service.icon}
              title={service.title}
              desc={service.desc}
              features={service.features}
            />
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 60 }}>
          <a href="/services" style={{
            background: "linear-gradient(135deg, #C9A84C, #b8942e)",
            color: "#060a12", border: "none", borderRadius: 8,
            padding: "16px 32px", fontSize: 16, fontWeight: 800,
            cursor: "pointer", fontFamily: "sans-serif", textDecoration: "none",
            display: "inline-block", boxShadow: "0 6px 24px rgba(201,168,76,0.4)",
          }}>View All Services →</a>
        </div>
      </div>
    </section>

    {/* Why Choose Us Preview */}
    <section style={{
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

      <div style={{ maxWidth: 1240, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <div style={{
            display: "inline-block", border: "1px solid rgba(201,168,76,0.3)",
            borderRadius: 20, padding: "6px 18px", marginBottom: 20,
            fontSize: 11, color: "#C9A84C", fontWeight: 700, letterSpacing: 3, fontFamily: "sans-serif",
          }}>WHY CHOOSE US</div>
          <h2 style={{
            fontSize: "clamp(28px, 4vw, 50px)", fontWeight: 900,
            fontFamily: "'Georgia', serif", color: "#fff", marginBottom: 16,
          }}>
            Why Businesses <span style={{ color: "#C9A84C" }}>Trust Us</span>
          </h2>
          <p style={{
            fontSize: 16, color: "#6a7d94", fontFamily: "sans-serif",
            lineHeight: 1.7, maxWidth: 500, margin: "0 auto",
          }}>
            We don't just deliver software — we deliver outcomes that drive real business growth.
          </p>
        </div>

        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: 32, marginBottom: 60,
        }}>
          {[
            { icon: "🎯", title: "Results-Driven", desc: "Every project is measured by business impact, not just features delivered." },
            { icon: "⚡", title: "Fast Delivery", desc: "Agile development ensures quick time-to-market without compromising quality." },
            { icon: "🤝", title: "Transparent Process", desc: "Regular updates, direct communication, and clear project visibility." },
            { icon: "🛡️", title: "Quality Guarantee", desc: "Rigorous testing and industry best practices ensure reliable solutions." },
            { icon: "💰", title: "ROI Focused", desc: "Solutions designed to generate measurable returns on your investment." },
            { icon: "🌟", title: "Proven Track Record", desc: "50+ successful projects across diverse industries and company sizes." },
          ].map((item, i) => (
            <WhyCard
              key={i}
              icon={item.icon}
              title={item.title}
              desc={item.desc}
            />
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <a href="/why-us" style={{
            background: "transparent", color: "#C9A84C",
            border: "2px solid rgba(201,168,76,0.4)", borderRadius: 8,
            padding: "14px 28px", fontSize: 16, fontWeight: 700,
            cursor: "pointer", fontFamily: "sans-serif", textDecoration: "none",
            display: "inline-block", transition: "all 0.2s",
          }}>Learn More About Us →</a>
        </div>
      </div>
    </section>

    {/* Featured Projects Preview */}
    <section style={{
      padding: "120px 28px",
      background: "linear-gradient(180deg, #0a1220 0%, #060a12 100%)",
    }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <div style={{
            display: "inline-block", border: "1px solid rgba(201,168,76,0.3)",
            borderRadius: 20, padding: "6px 18px", marginBottom: 20,
            fontSize: 11, color: "#C9A84C", fontWeight: 700, letterSpacing: 3, fontFamily: "sans-serif",
          }}>OUR WORK</div>
          <h2 style={{
            fontSize: "clamp(28px, 4vw, 50px)", fontWeight: 900,
            fontFamily: "'Georgia', serif", color: "#fff", marginBottom: 16,
          }}>
            Recent <span style={{ color: "#C9A84C" }}>Success Stories</span>
          </h2>
          <p style={{
            fontSize: 16, color: "#6a7d94", fontFamily: "sans-serif",
            lineHeight: 1.7, maxWidth: 520, margin: "0 auto",
          }}>
            See how we've helped businesses transform their digital presence and achieve remarkable results.
          </p>
        </div>

        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
          gap: 32, marginBottom: 60,
        }}>
          {[
            {
              title: "E-Commerce Platform",
              client: "FashionForward",
              result: "300% increase in conversion rate",
              desc: "Complete redesign with modern UX and advanced analytics integration.",
              image: "🛍️",
              tags: ["React", "Node.js", "Analytics"]
            },
            {
              title: "Fitness Mobile App",
              client: "HealthTrack Pro",
              result: "100K+ downloads in 6 months",
              desc: "Cross-platform app with AI-powered workout recommendations and social features.",
              image: "📱",
              tags: ["Flutter", "AI", "Firebase"]
            },
            {
              title: "SaaS Dashboard",
              client: "DataFlow Analytics",
              result: "60% faster task completion",
              desc: "Intuitive data visualization platform with real-time collaboration tools.",
              image: "📊",
              tags: ["Vue.js", "D3.js", "WebSocket"]
            },
          ].map((project, i) => (
            <ProjectCard
              key={i}
              title={project.title}
              client={project.client}
              result={project.result}
              desc={project.desc}
              image={project.image}
              tags={project.tags}
            />
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <a href="/before-after" style={{
            background: "linear-gradient(135deg, #C9A84C, #b8942e)",
            color: "#060a12", border: "none", borderRadius: 8,
            padding: "16px 32px", fontSize: 16, fontWeight: 800,
            cursor: "pointer", fontFamily: "sans-serif", textDecoration: "none",
            display: "inline-block", boxShadow: "0 6px 24px rgba(201,168,76,0.4)",
          }}>View All Case Studies →</a>
        </div>
      </div>
    </section>

    {/* Testimonials Preview */}
    <section style={{
      padding: "120px 28px",
      background: "#060a12",
    }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <div style={{
            display: "inline-block", border: "1px solid rgba(201,168,76,0.3)",
            borderRadius: 20, padding: "6px 18px", marginBottom: 20,
            fontSize: 11, color: "#C9A84C", fontWeight: 700, letterSpacing: 3, fontFamily: "sans-serif",
          }}>CLIENT LOVE</div>
          <h2 style={{
            fontSize: "clamp(28px, 4vw, 50px)", fontWeight: 900,
            fontFamily: "'Georgia', serif", color: "#fff", marginBottom: 16,
          }}>
            What Our <span style={{ color: "#C9A84C" }}>Clients Say</span>
          </h2>
          <p style={{
            fontSize: 16, color: "#6a7d94", fontFamily: "sans-serif",
            lineHeight: 1.7, maxWidth: 520, margin: "0 auto",
          }}>
            Don't just take our word for it — hear from the businesses we've helped transform.
          </p>
        </div>

        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
          gap: 32, marginBottom: 60,
        }}>
          {[
            {
              quote: "Azentiq Labs transformed our e-commerce platform, increasing conversions by 150%. Their attention to detail and technical expertise is unmatched.",
              name: "Rajesh Sharma",
              role: "Founder, TechVista Solutions",
              rating: 5
            },
            {
              quote: "The mobile app they built for us has over 50,000 downloads. Professional, reliable, and always available for support.",
              name: "Priya Patel",
              role: "CEO, InnovateNow",
              rating: 5
            },
            {
              quote: "From concept to launch in 3 months. Azentiq Labs delivered exactly what we needed, on time and within budget.",
              name: "Amit Kumar",
              role: "Director, StartUpPro",
              rating: 5
            },
          ].map((testimonial, i) => (
            <TestimonialCard
              key={i}
              quote={testimonial.quote}
              name={testimonial.name}
              role={testimonial.role}
              rating={testimonial.rating}
            />
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <a href="/testimonials" style={{
            background: "transparent", color: "#C9A84C",
            border: "2px solid rgba(201,168,76,0.4)", borderRadius: 8,
            padding: "14px 28px", fontSize: 16, fontWeight: 700,
            cursor: "pointer", fontFamily: "sans-serif", textDecoration: "none",
            display: "inline-block", transition: "all 0.2s",
          }}>Read More Reviews →</a>
        </div>
      </div>
    </section>

    {/* Final CTA */}
    <CTASection
      title="Ready to Transform Your Business?"
      subtitle="Join hundreds of satisfied clients who have accelerated their growth with Azentiq Labs. Let's discuss your project and create something extraordinary together."
      primaryButtonText="Get Free Consultation"
      primaryButtonLink="/contact"
      secondaryButtonText="📞 Call +91 83293 05232"
      secondaryButtonLink="tel:+918329305232"
      footerText="No obligation • Free initial consultation • Transparent pricing"
    />
    </>
  );
};

export default Hero;
