import WhyCard from "../ui/WhyCard";

const Whyibnmaalik = () => {
  return (
    <section id="why">
      <div className="why-grid">
        <div>
          <span className="section-label">Why Ibn Maalik</span>
          <h2 className="section-title">
            More Than a Class.
            <br />A Complete Journey.
          </h2>
          <p className="section-sub">
            We don&apos;t just teach you to recite - we build the foundation for
            a lifelong relationship with the Qur&apos;an.
          </p>
          <div className="why-cards">
            <WhyCard icon="📖" title="Structured Curriculum">
              A clear path from total beginner to fluent Tajweed - no confusion,
              no skipping.
            </WhyCard>
            <WhyCard icon="🎙️" title="Live Correction">
              Your teacher corrects your Tajweed in real time - not pre-recorded
              guesswork.
            </WhyCard>
            <WhyCard icon="🤝" title="Accountability Community">
              Join a WhatsApp community with classmates and announcements to
              keep you consistent.
            </WhyCard>
            <WhyCard icon="🌍" title="Study from Anywhere">
              Live online sessions you can join from anywhere in the world - no
              travel needed.
            </WhyCard>
          </div>
        </div>
        <div className="why-visual">
          <div className="why-visual-pattern" />
          <div className="why-quote">
            خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ
          </div>
          <div className="why-quote-trans">
            {'"The best of you are those who learn the Qur\'an and teach it."'}
          </div>
          <div className="why-quote-src">
            - Prophet Muhammad ﷺ (Sahih al-Bukhari)
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whyibnmaalik;
