"use client";

import { useEffect, useState } from "react";
import Hero from "./(components)/Hero";
import Whyibnmaalik from "./(components)/Whyibnmaalik";
import Levels from "./(components)/Levels";
import Process from "./(components)/Process";
import Testimonials from "./(components)/Testimonials";
import Faq from "./(components)/Faq";
import Footer from "./(components)/Footer";
import Navbar from "./(components)/Navbar";

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaqs, setOpenFaqs] = useState({});

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1 },
    );

    const animatedElements = document.querySelectorAll(
      ".level-card, .why-card, .testi-card, .how-step",
    );
    animatedElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  function scrollToEnroll(plan) {
    setSelectedPlan(plan);
    document.getElementById("enroll")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <Navbar
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        isScrolled={isScrolled}
      />
      <Hero />
      <Whyibnmaalik />
      <Process />
      <Levels />
      <Testimonials />
      <Faq openFaqs={openFaqs} setOpenFaqs={setOpenFaqs} />
      <Footer />

      {/* <nav id="navbar" className={isScrolled ? "scrolled" : ""}>
        <div className="nav-logo">
          Ibn Maalik <span>Institute</span>
        </div>
        <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <li>
            <a href="#levels" onClick={() => setIsMenuOpen(false)}>
              Programs
            </a>
          </li>
          <li>
            <a href="#how" onClick={() => setIsMenuOpen(false)}>
              How It Works
            </a>
          </li>
          <li>
            <a href="#pricing" onClick={() => setIsMenuOpen(false)}>
              Pricing
            </a>
          </li>
          <li>
            <a href="#testimonials" onClick={() => setIsMenuOpen(false)}>
              Testimonials
            </a>
          </li>
          <li>
            <a
              href="#enroll"
              className="nav-cta"
              onClick={() => setIsMenuOpen(false)}
            >
              Enroll Now
            </a>
          </li>
        </ul>
        <button
          className="hamburger"
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav> */}
      {/* 
      <section id="hero">
        <div className="hero-pattern" />
        <div className="hero-glow" />
        <div className="hero-content">
          <div className="hero-badge">🕌 Admissions Now Open</div>
          <div className="hero-arabic">معهد ابن مالك</div>
          <h1 className="hero-title">
            Read the Qur&apos;an
            <br />
            the <em>Right Way.</em>
          </h1>
          <p className="hero-sub">
            From your first letter to fluent Tajweed - structured live classes,
            expert teachers, and a community that keeps you consistent.
          </p>
          <div className="hero-actions">
            <a href="#enroll" className="btn-primary">
              ✦ Enroll Today
            </a>
            <a href="#levels" className="btn-ghost">
              See Programs ↓
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-num">4</div>
              <div className="stat-label">Learning Levels</div>
            </div>
            <div className="stat">
              <div className="stat-num">Live</div>
              <div className="stat-label">Online Classes</div>
            </div>
            <div className="stat">
              <div className="stat-num">Global</div>
              <div className="stat-label">Students</div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Check out */}
      {/* <div className="trust-bar">
        <TrustItem icon="video">Live via Google Meet & Zoom</TrustItem>
        <TrustItem icon="clock">Flexible Class Schedules</TrustItem>
        <TrustItem icon="globe">International Students Welcome</TrustItem>
        <TrustItem icon="shield">Certified Tajweed Teachers</TrustItem>
      </div> */}
      {/* <Hero /> */}

      {/* <section id="why">
        <div className="why-grid">
          <div>
            <span className="section-label">Why Ibn Maalik</span>
            <h2 className="section-title">
              More Than a Class.
              <br />A Complete Journey.
            </h2>
            <p className="section-sub">
              We don&apos;t just teach you to recite - we build the foundation
              for a lifelong relationship with the Qur&apos;an.
            </p>
            <div className="why-cards">
              <WhyCard icon="📖" title="Structured Curriculum">
                A clear path from total beginner to fluent Tajweed - no
                confusion, no skipping.
              </WhyCard>
              <WhyCard icon="🎙️" title="Live Correction">
                Your teacher corrects your Tajweed in real time - not
                pre-recorded guesswork.
              </WhyCard>
              <WhyCard icon="🤝" title="Accountability Community">
                Join a WhatsApp community with classmates and announcements to
                keep you consistent.
              </WhyCard>
              <WhyCard icon="🌍" title="Study from Anywhere">
                Live online sessions you can join from anywhere in the world -
                no travel needed.
              </WhyCard>
            </div>
          </div>
          <div className="why-visual">
            <div className="why-visual-pattern" />
            <div className="why-quote">
              خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ
            </div>
            <div className="why-quote-trans">
              {
                '"The best of you are those who learn the Qur\'an and teach it."'
              }
            </div>
            <div className="why-quote-src">
              - Prophet Muhammad ﷺ (Sahih al-Bukhari)
            </div>
          </div>
        </div>
      </section> */}
      {/* <Whyibnmaalik /> */}

      {/* <section id="levels">
        <div className="levels-header">
          <span className="section-label">Our Programs</span>
          <h2 className="section-title">Find Your Level</h2>
          <p className="section-sub">
            Whether you&apos;ve never opened a Mus&apos;haf or you&apos;re
            refining your Hifdh - there&apos;s a place for you here.
          </p>
        </div>
        <div className="levels-grid">
          <LevelCard
            number="01"
            badge="Beginner"
            title="Foundations"
            tag="→ No prior knowledge needed"
          >
            You&apos;re starting from zero. We&apos;ll teach you the Arabic
            alphabet, letter forms, and basic pronunciation - with patience and
            care.
          </LevelCard>
          <LevelCard
            number="02"
            badge="Elementary"
            title="Reading"
            tag="→ For slow or hesitant readers"
            tone="gold"
          >
            You can read a little but not yet fluently. We&apos;ll build your
            reading speed, accuracy, and introduce you to Tajweed rules.
          </LevelCard>
          <LevelCard
            number="03"
            badge="Advanced"
            title="Tajweed"
            tag="→ For confident readers ready to refine"
            tone="emerald"
          >
            You read well - now master it. Deep focus on Tajweed rules,
            Makhaarij, and beautifying your recitation.
          </LevelCard>
          <LevelCard
            number="✦"
            badge="Special Track"
            title="Hifdh & Muraja'ah"
            tag="→ For memorization students"
            tone="deep"
          >
            Dedicated memorization and revision track with structured plans,
            accountability, and teacher-guided review sessions.
          </LevelCard>
        </div>
      </section> */}
      {/* <Levels /> */}
      {/*       
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
            <HowStep number="1" title="Enroll & Pay">
              Fill the enrollment form below, choose your plan, and complete
              payment securely via Paystack. Takes less than 3 minutes.
            </HowStep>
            <HowStep number="2" title="Join WhatsApp Community">
              After payment, you&apos;ll be directed to join the Ibn Maalik
              WhatsApp community - your central hub for updates, schedules, and
              class links.
            </HowStep>
            <HowStep number="3" title="Fill Placement Form">
              A short form to tell us your name, country, and current
              Qur&apos;an reading level - so we place you in the right group.
            </HowStep>
            <HowStep number="4" title="Get Placed & Start Learning">
              Our team reviews your form and places you in the right level
              group. Google Meet links are sent before every class - Monday,
              Wednesday, Friday. 40 minutes per session.
            </HowStep>
          </div>
        </div>
      </section> */}
      {/* <How /> */}

      {/* <section id="pricing">
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
      </section> */}
      {/* <Pricing /> */}

      {/* <section id="testimonials">
        <div className="testi-header">
          <span className="section-label">Student Stories</span>
          <h2 className="section-title">Results Speak.</h2>
          <p className="section-sub centered">
            Real students. Real progress. Alhamdulillah.
          </p>
        </div>
        <div className="testi-grid">
          <Testimonial
            initial="A"
            name="Amina K."
            location="Lagos, Nigeria - Level 1 Student"
          >
            I had never read a single Arabic letter before. Three months later,
            I&apos;m reading Surah Al-Fatiha with Tajweed. I never imagined I
            could do this. Barakallahu feekum.
          </Testimonial>
          <Testimonial
            initial="Y"
            name="Yusuf M."
            location="Abuja, Nigeria - Level 2 Student"
          >
            I could read but very slowly. The Level 2 class helped me build
            speed and confidence. The teacher is patient and the class timing
            works perfectly for me.
          </Testimonial>
          <Testimonial
            initial="F"
            name="Fatimah A."
            location="UK - Hifdh Track Student"
          >
            The Hifdh track is exactly what I needed. Having someone check my
            revision and correct my mistakes has made my memorization so much
            stronger. Highly recommended.
          </Testimonial>
        </div>
      </section> */}
      {/* <Testimonials /> */}

      {/* <section id="enroll">
        <div className="enroll-inner">
          <span className="section-label">Enrollment</span>
          <h2 className="section-title">Ready to Begin?</h2>
          <p className="section-sub">
            Seats are limited per group. Secure your spot today - the next
            cohort starts soon.
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
                  onChange={(event) =>
                    updateForm("country", event.target.value)
                  }
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
            <div className="secure-note">
              🔐 Secured & encrypted via Paystack
            </div>
          </div>
        </div>
      </section> */}
      {/* <Enroll /> */}

      {/* <section id="faq">
        <div className="faq-inner">
          <div className="faq-header">
            <span className="section-label">Questions</span>
            <h2 className="section-title">FAQ</h2>
          </div>
          {faqItems.map((item, index) => (
            <div
              className={`faq-item ${openFaqs[index] ? "open" : ""}`}
              key={item.question}
            >
              <button
                className="faq-q"
                type="button"
                onClick={() => toggleFaq(index)}
              >
                {item.question} <span className="faq-icon">+</span>
              </button>
              <div className="faq-a">{item.answer}</div>
            </div>
          ))}
        </div>
      </section> */}
      {/* <Faq /> */}

      {/* <footer>
        <div className="footer-grid">
          <div className="footer-brand">
            <span className="nav-logo">
              Ibn Maalik <span>Institute</span>
            </span>
            <div className="arabic">معهد ابن مالك</div>
            <p>
              A structured path to reading the Qur&apos;an with Tajweed - for
              beginners to advanced students, taught live by qualified teachers.
            </p>
          </div>
          <FooterColumn
            title="Programs"
            links={[
              ["Level 1 - Foundations", "#levels"],
              ["Level 2 - Reading", "#levels"],
              ["Level 3 - Tajweed", "#levels"],
              ["Hifdh & Muraja'ah", "#levels"],
            ]}
          />
          <FooterColumn
            title="Quick Links"
            links={[
              ["How It Works", "#how"],
              ["Pricing", "#pricing"],
              ["Enroll Now", "#enroll"],
              ["FAQ", "#faq"],
            ]}
          />
        </div>
        <div className="footer-bottom">
          <span>© 2026 Ibn Maalik Institute. All rights reserved.</span>
          <span className="footer-dua">نسأل الله الإخلاص والقبول</span>
        </div>
      </footer> */}
      {/* <Footer /> */}

      {/* <div className={`modal-overlay ${isModalOpen ? "show" : ""}`}>
        <div
          className="modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="welcome-title"
        >
          <button
            className="modal-close"
            type="button"
            onClick={() => setIsModalOpen(false)}
          >
            ✕
          </button>
          <div className="modal-icon">🎉</div>
          <div className="arabic">جزاكم الله خيرًا</div>
          <h2 id="welcome-title">Welcome to Ibn Maalik Institute!</h2>
          <p>
            Jazakumullahu khayran for enrolling. Your place is secured.
            Here&apos;s what to do next:
          </p>
          <div className="modal-steps">
            <ModalStep number="1" title="Join the WhatsApp Community">
              Click below to join - all updates, schedules, and class links are
              shared here.
            </ModalStep>
            <ModalStep number="2" title="Fill Your Placement Form">
              A short form will be pinned in the WhatsApp group. Fill it so we
              can place you in the right level.
            </ModalStep>
            <ModalStep number="3" title="Wait for Level Placement">
              Our team will review your form and place you in your group.
              Classes are Mon, Wed, Fri - 40 minutes each.
            </ModalStep>
          </div>
          <a
            href={WHATSAPP_COMMUNITY_LINK}
            className="modal-wa"
            target="_blank"
            rel="noreferrer"
          >
            📲 Join WhatsApp Community
          </a>
        </div>
      </div> */}
    </>
  );
}

// function TrustItem({ children, icon }) {
//   const paths = {
//     video:
//       "M15 10l4.553-2.069A1 1 0 0121 8.868V15.13a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z",
//     clock: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
//     globe:
//       "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064",
//     shield:
//       "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
//   };

//   return (
//     <div className="trust-item">
//       <svg
//         width="18"
//         height="18"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//         aria-hidden="true"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth="2"
//           d={paths[icon]}
//         />
//       </svg>
//       {children}
//     </div>
//   );
// }

// function WhyCard({ icon, title, children }) {
//   return (
//     <div className="why-card">
//       <div className="why-icon">{icon}</div>
//       <div>
//         <h4>{title}</h4>
//         <p>{children}</p>
//       </div>
//     </div>
//   );
// }

// function LevelCard({ number, badge, title, tag, tone = "", children }) {
//   return (
//     <div className={`level-card ${tone}`}>
//       <div className="level-num">{number}</div>
//       <div className="level-badge">{badge}</div>
//       <h3>{title}</h3>
//       <p>{children}</p>
//       <span className="level-tag">{tag}</span>
//     </div>
//   );
// }

// function HowStep({ number, title, children }) {
//   return (
//     <div className="how-step">
//       <div className="step-dot">{number}</div>
//       <div className="step-content">
//         <h4>{title}</h4>
//         <p>{children}</p>
//       </div>
//     </div>
//   );
// }

// function PriceCard({
//   label,
//   price,
//   period,
//   badge,
//   features,
//   buttonLabel,
//   featured = false,
//   onClick,
// }) {
//   return (
//     <div className={`price-card ${featured ? "featured" : ""}`}>
//       <div className="price-label">{label}</div>
//       <div className="price-amount">
//         <span className="price-currency">₦</span>
//         {price}
//       </div>
//       <div className="price-period">{period}</div>
//       {badge ? <div className="price-badge">{badge}</div> : null}
//       <ul className="price-features">
//         {features.map((feature) => (
//           <li key={feature}>{feature}</li>
//         ))}
//       </ul>
//       <button className="btn-enroll" type="button" onClick={onClick}>
//         {buttonLabel}
//       </button>
//     </div>
//   );
// }

// function Testimonial({ initial, name, location, children }) {
//   return (
//     <div className="testi-card">
//       <div className="testi-stars">★★★★★</div>
//       <p className="testi-text">&quot;{children}&quot;</p>
//       <div className="testi-author">
//         <div className="testi-avatar">{initial}</div>
//         <div>
//           <div className="testi-name">{name}</div>
//           <div className="testi-loc">{location}</div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function FormField({ label, children }) {
//   return (
//     <div className="form-group">
//       <label>{label}</label>
//       {children}
//     </div>
//   );
// }

// function PlanOption({ title, price, note, active, onClick }) {
//   return (
//     <button
//       className={`plan-option ${active ? "active" : ""}`}
//       type="button"
//       onClick={onClick}
//     >
//       <h5>{title}</h5>
//       <div className="plan-price">{price}</div>
//       <div className="plan-note">{note}</div>
//     </button>
//   );
// }

// function FooterColumn({ title, links }) {
//   return (
//     <div className="footer-col">
//       <h5>{title}</h5>
//       <ul>
//         {links.map(([label, href]) => (
//           <li key={label}>
//             <a href={href}>{label}</a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// function ModalStep({ number, title, children }) {
//   return (
//     <div className="modal-step">
//       <div className="modal-step-num">{number}</div>
//       <div>
//         <h5>{title}</h5>
//         <p>{children}</p>
//       </div>
//     </div>
//   );
// }

// const faqItems = [
//   {
//     question: "What if I don't know which level I belong to?",
//     answer:
//       "No worries - after enrollment you'll fill a short placement form. Our teachers will assess your level and place you in the right group. You don't need to figure it out alone.",
//   },
//   {
//     question: "What days and times are classes?",
//     answer:
//       "Classes run Monday, Wednesday, and Friday. Each session is 40 minutes. Google Meet links are shared in the WhatsApp group before each class. Specific times are confirmed upon enrollment.",
//   },
//   {
//     question: "Can I join from outside Nigeria?",
//     answer:
//       "Absolutely. We welcome international students. Classes are held online via Google Meet and Zoom, so you can join from anywhere in the world.",
//   },
//   {
//     question: "What happens after I pay?",
//     answer:
//       "You'll be redirected to a welcome page with step-by-step next steps: join the WhatsApp community, fill your placement form, and wait for your level assignment. Simple and clear.",
//   },
//   {
//     question: "Is payment secure?",
//     answer:
//       "Yes. All payments are processed through Paystack - a trusted and PCI-compliant Nigerian payment gateway. Your card details are never stored on our servers.",
//   },
// ];
