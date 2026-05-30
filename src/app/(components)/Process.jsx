function HowStep({ number, title, children }) {
  return (
    <div className="how-step">
      <div className="step-dot">{number}</div>
      <div className="step-content">
        <h4>{title}</h4>
        <p>{children}</p>
      </div>
    </div>
  );
}

const Process = () => {
  return (
    <section id="how">
      <div className="how-inner">
        <div className="how-header">
          <span className="section-label">The Process</span>
          <h2 className="section-title">Simple. Clear. Effective.</h2>
          <p className="section-sub centered">
            From enrollment to your first class - here&apos;s exactly what
            happens.
          </p>
        </div>
        <div className="how-steps">
          <HowStep number="1" title="Complete Registration">
            Click the Enroll now button and follow the steps to complete your
            registration. Takes less than 2 minutes.
          </HowStep>

          <HowStep number="2" title="Select Your Payment Plan">
            Choose your preferred payment option and make payment securely
            through Paystack to confirm your enrollment
          </HowStep>

          <HowStep number="3" title="Complete Secure Payment">
            After payment, you&apos;ll be redirected instantly to the Ibn Maalik
            WhatsApp community where you&apos;ll be assigned to your teachers,
            schedules, and learning materials.
          </HowStep>

          <HowStep number="4" title="Begin Your Learning">
            Start Learning immediately
          </HowStep>
        </div>
      </div>
    </section>
  );
};

export default Process;
