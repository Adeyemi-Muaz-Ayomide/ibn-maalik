import React from "react";

function PriceCard({
  label,
  price,
  period,
  badge,
  features,
  buttonLabel,
  featured = false,
  onClick,
}) {
  return (
    <div className={`price-card ${featured ? "featured" : ""}`}>
      <div className="price-label">{label}</div>
      <div className="price-amount">
        <span className="price-currency">₦</span>
        {price}
      </div>
      <div className="price-period">{period}</div>
      {badge ? <div className="price-badge">{badge}</div> : null}
      <ul className="price-features">
        {features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      <button className="btn-enroll" type="button" onClick={onClick}>
        {buttonLabel}
      </button>
    </div>
  );
}

const Pricing = () => {
  return (
    <section id="pricing">
      <div className="pricing-pattern" />
      <div className="pricing-header">
        <span className="section-label">Tuition</span>
        <h2 className="section-title">Simple Pricing.</h2>
        <p className="section-sub centered">
          One price. All levels. No hidden fees.
        </p>
      </div>
      <div className="pricing-cards">
        <PriceCard
          label="Monthly Plan"
          price="10,000"
          period="per month"
          buttonLabel="Enroll Monthly"
          onClick={() => scrollToEnroll("monthly")}
          features={[
            "Access to your level group",
            "3 live classes per week",
            "WhatsApp community access",
            "Teacher feedback & correction",
          ]}
        />
        <PriceCard
          label="Best Value"
          price="30,000"
          period="per semester (3 months)"
          badge="Save ₦0 - Full Commitment"
          buttonLabel="Enroll for Semester"
          featured
          onClick={() => scrollToEnroll("semester")}
          features={[
            "Everything in monthly",
            "Priority placement",
            "Locked-in for full semester",
            "Greater progress & consistency",
          ]}
        />
      </div>
    </section>
  );
};

export default Pricing;
