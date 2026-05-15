import React from "react";
import { Link } from "react-router-dom";
import { ANALYTICS_EVENTS, ANALYTICS_CATEGORIES, ANALYTICS_LABELS } from "../../constants/analytics";
import { trackEvent } from "../../utils/analytics";

interface CTASectionProps {
  title: string;
  subtitle: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText: string;
  secondaryButtonLink: string;
  footerText: string;
}

const CTASection: React.FC<CTASectionProps> = ({
  title,
  subtitle,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  footerText,
}) => {
  return (
    <section
      style={{
        padding: "120px 28px",
        background: "linear-gradient(135deg, #C9A84C, #b8942e)",
      }}
    >
      <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
        <h2
          style={{
            fontSize: "clamp(32px, 5vw, 60px)",
            fontWeight: 900,
            fontFamily: "'Georgia', serif",
            color: "#060a12",
            marginBottom: 24,
          }}
        >
          {title}
        </h2>
        <p
          style={{
            fontSize: 18,
            color: "#060a12",
            fontFamily: "sans-serif",
            lineHeight: 1.7,
            marginBottom: 40,
            opacity: 0.9,
          }}
        >
          {subtitle}
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <Link
            to={primaryButtonLink}
            onClick={() => trackEvent({
              action: ANALYTICS_EVENTS.BUTTON_CLICK,
              category: ANALYTICS_CATEGORIES.CONVERSION,
              label: ANALYTICS_LABELS.PRIMARY_CTA,
            })}
            style={{
              background: "#060a12",
              color: "#C9A84C",
              border: "none",
              borderRadius: 8,
              padding: "18px 36px",
              fontSize: 18,
              fontWeight: 800,
              cursor: "pointer",
              fontFamily: "sans-serif",
              textDecoration: "none",
              display: "inline-block",
              boxShadow: "0 6px 24px rgba(6,10,18,0.3)",
            }}
          >
            {primaryButtonText}
          </Link>
          <a
            href={secondaryButtonLink}
            onClick={() => trackEvent({
              action: ANALYTICS_EVENTS.LINK_CLICK,
              category: ANALYTICS_CATEGORIES.INTERACTION,
              label: ANALYTICS_LABELS.SECONDARY_CTA,
            })}
            style={{
              background: "transparent",
              color: "#060a12",
              border: "2px solid #060a12",
              borderRadius: 8,
              padding: "16px 34px",
              fontSize: 18,
              fontWeight: 800,
              cursor: "pointer",
              fontFamily: "sans-serif",
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            {secondaryButtonText}
          </a>
        </div>
        <p
          style={{
            fontSize: 14,
            color: "#060a12",
            fontFamily: "sans-serif",
            marginTop: 24,
            opacity: 0.8,
          }}
        >
          {footerText}
        </p>
      </div>
    </section>
  );
};

export default CTASection;