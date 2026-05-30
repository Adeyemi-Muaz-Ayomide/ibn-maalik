import React from "react";

const Enroll = () => {
  return (
    <section id="enroll">
      <div className="enroll-inner">
        <span className="section-label">Enrollment</span>
        <h2 className="section-title">Ready to Begin?</h2>
        <p className="section-sub">
          Seats are limited per group. Secure your spot today - the next cohort
          starts soon.
        </p>

        <div className="enroll-form">
          <div className="form-row">
            <FormField label="Full Name">
              <input
                type="text"
                value={formData.name}
                onChange={(event) => updateForm("name", event.target.value)}
                placeholder="e.g. Aisha Ibrahim"
              />
            </FormField>
            <FormField label="Email Address">
              <input
                type="email"
                value={formData.email}
                onChange={(event) => updateForm("email", event.target.value)}
                placeholder="you@example.com"
              />
            </FormField>
          </div>
          <div className="form-row">
            <FormField label="WhatsApp Number">
              <input
                type="tel"
                value={formData.phone}
                onChange={(event) => updateForm("phone", event.target.value)}
                placeholder="+234 800 000 0000"
              />
            </FormField>
            <FormField label="Country">
              <input
                type="text"
                value={formData.country}
                onChange={(event) => updateForm("country", event.target.value)}
                placeholder="e.g. Nigeria"
              />
            </FormField>
          </div>
          <FormField label="Your Level">
            <select
              value={formData.level}
              onChange={(event) => updateForm("level", event.target.value)}
            >
              <option value="">- Select your level -</option>
              <option value="level1">
                Level 1 - Foundations (Total Beginner)
              </option>
              <option value="level2">
                Level 2 - Reading (Can read a little)
              </option>
              <option value="level3">
                Level 3 - Tajweed (Advanced reader)
              </option>
              <option value="hifdh">
                Hifdh / Muraja&apos;ah (Memorization)
              </option>
            </select>
          </FormField>

          <label className="plan-label">Choose Your Plan</label>
          <div className="plan-toggle">
            <PlanOption
              title="Monthly"
              price="₦10,000"
              note="per month"
              active={selectedPlan === "monthly"}
              onClick={() => setSelectedPlan("monthly")}
            />
            <PlanOption
              title="Semester"
              price="₦30,000"
              note="3 months - best value"
              active={selectedPlan === "semester"}
              onClick={() => setSelectedPlan("semester")}
            />
          </div>

          <button className="btn-submit" type="button" onClick={handleEnroll}>
            🔒 Secure My Spot - Pay Now
          </button>
          <div className="secure-note">🔐 Secured & encrypted via Paystack</div>
        </div>
      </div>
    </section>
  );
};

export default Enroll;
